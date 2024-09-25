const APIKEY = process.env.LIVE_API_KEY;
const URLBASE = 'https://api.infiniteflight.com/public/v2';
const UPDATE_INTERVAL = 60000; // 60 seconds for smooth animation
const ANIMATION_DURATION = 59000; // 59 seconds for smooth interpolation

// Initialize Leaflet map
const map = L.map('map').setView([20.5937, 78.9629], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Store markers and target positions for each flight
const flightMarkers = {};

// Function to interpolate between two positions
function interpolatePosition(startPos, endPos, factor) {
    return [
        startPos[0] + (endPos[0] - startPos[0]) * factor,
        startPos[1] + (endPos[1] - startPos[1]) * factor
    ];
}

// Function to move the marker smoothly
function smoothMoveMarker(marker, startPos, endPos, duration) {
    const startTime = performance.now();

    function animate() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const factor = Math.min(elapsed / duration, 1); // Ensure factor is between 0 and 1

        // Interpolate position
        const newPos = interpolatePosition(startPos, endPos, factor);
        marker.setLatLng(newPos);

        if (factor < 1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// Function to determine if an identifier is an ICAO code (4-letter code)
function isICAO(identifier) {
    return identifier && identifier.length === 4 && /^[A-Z]{4}$/.test(identifier);
}

// Function to fetch and display flights
async function fetchAndDisplayFlights() {
    try {


        // 1. Get Expert Server Session
        const sessionsResponse = await fetch(`https://1ved.cloud/api/v2/sessions`);
        const sessionsData = await sessionsResponse.json();
        const expertSession = sessionsData.result.find(session => session.minimumAppVersion === '24.3' && session.worldType === 3);
        const sessionId = expertSession?.id;

        if (!sessionId) {
            console.error('Expert Server session not found');
            return;
        }

        // 2. Get Flights for the Expert Server session
        const flightsResponse = await fetch(`${URLBASE}/flights/${sessionId}?apikey=${APIKEY}`);
        const flightsData = await flightsResponse.json();
        async function fetchOperators() {
            const response = await fetch('operators.json');
            const data = await response.json();
            return data.names;
        }
        // Fetch operator names from operators.json
        const operatorNames = await fetchOperators();
        // Filter flights based on operator names and callsign endings
        const filteredFlights = flightsData.result.filter(flight => {
            const callsign = flight.callsign;
            return operatorNames.some(operator => callsign.startsWith(operator)) &&
                   (callsign.endsWith('IN') || callsign.endsWith('IN Heavy'));
        });

        // Update or create markers for filtered flights
        for (const flight of filteredFlights) {
            const flightId = flight.flightId;
            const rotationAngle = flight.heading % 360;

            try {
                // Corrected route API URL with sessionId and flightId
                const routeResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights/${flightId}/route?apikey=${APIKEY}`);
                if (!routeResponse.ok) {
                    console.warn(`Route not found for flight ${flightId}`);
                    continue; // Skip this flight if there's an error
                }

                const routeData = await routeResponse.json();
                const route = routeData.result;

                if (route.length > 1) {
                    const newPosition = [flight.latitude, flight.longitude];
                    const previousPosition = flightMarkers[flightId]?.endPos || newPosition;

                    // Fetch the flight plan for the flight
                    const flightPlanResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights/${flightId}/flightplan?apikey=${APIKEY}`);
                    const flightPlanData = await flightPlanResponse.json();
                    const flightPlan = flightPlanData.result;

                    // Get the first and last waypoints
                    const firstWaypoint = flightPlan.flightPlanItems[0];
                    const lastWaypoint = flightPlan.flightPlanItems[flightPlan.flightPlanItems.length - 1];

                    // Get the identifiers or fallback to 'N/A' if not ICAO code
                    const dep = isICAO(firstWaypoint.identifier) ? firstWaypoint.identifier : 'N/A';
                    const arrv = isICAO(lastWaypoint.identifier) ? lastWaypoint.identifier : 'N/A';

                    const depLatLng = [firstWaypoint.location.latitude, firstWaypoint.location.longitude];
                    const arrvLatLng = [lastWaypoint.location.latitude, lastWaypoint.location.longitude];

                    // Add a dashed line between the first and last waypoints
                    let dashedLine = null;

                    if (flightMarkers[flightId]) {
                        // Update existing marker position smoothly
                        const marker = flightMarkers[flightId].marker;
                        smoothMoveMarker(marker, previousPosition, newPosition, ANIMATION_DURATION);
                        flightMarkers[flightId].endPos = newPosition;
                        marker._icon.innerHTML = `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${rotationAngle}deg); width: 32px; height: 32px;"/>`;
                    } else {
                        // Create new marker
                        const marker = L.marker(newPosition, {
                            icon: L.divIcon({
                                className: 'rotated-aircraft-icon',
                                html: `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${rotationAngle}deg); width: 32px; height: 32px;" />`,
                                iconSize: [5, 5],
                                iconAnchor: [16, 16]
                            })
                        });

                        // Bind tooltip (label) to the marker
                        marker.bindTooltip(flight.callsign, {
                            permanent: true,
                            direction: 'top',
                            className: 'callsign-label',
                            opacity: 0.9,
                            offset: [0, -11]
                        });

                        // Add CSS for callsign label (tooltip) styling
                        const style = document.createElement('style');
                        style.textContent = `
                            .callsign-label {
                                background-color: rgba(0, 0, 0, 0.45);
                                color: #fed8a1;
                                border: none;
                                border-radius: 5px;
                                padding: 1px;
                                font-size: 10px;
                                text-align: center;
                                pointer-events: none;
                                white-space: nowrap;
                                font-weight: bold;
                            }

                            .callsign-label::before { /* Target the tooltip's arrow */
                                display: none;
                            }
                        `;
                        document.head.appendChild(style);

                        // Add popup with flight information and the dashed line
                        marker.bindPopup(
                            `<div class="flight-popup">
                                <b>${flight.callsign}</b><br>
                                <b>Route:</b> ${dep} - ${arrv}<br>
                                ${flight.altitude < 10000 ? Math.ceil(flight.altitude) + ' ft' : 'FL' + Math.ceil(flight.altitude / 100)} |
                                 ${Math.ceil(flight.speed)} kts
                            </div>
                            <style>
                                .flight-popup {
                                    background-color: rgba(223, 223, 223, 0.741);
                                    padding: 5px;
                                    margin: 0;
                                    border-radius: 5px;
                                    box-shadow: none;
                                    border: none;
                                }
                                .leaflet-popup-content-wrapper, .leaflet-popup-tip-container {
                                    background: transparent;
                                }
                                .leaflet-popup-content {
                                    margin: 0;
                                }
                            </style>`
                        );

                        // On popup open, draw the dashed line
                        marker.on('popupopen', function () {
                            dashedLine = L.polyline([depLatLng, arrvLatLng], {
                                color: 'black',
                                weight: 1,
                                dashArray: '4, 8'
                            }).addTo(map);
                        });

                        // On popup close, remove the dashed line
                        marker.on('popupclose', function () {
                            if (dashedLine) {
                                map.removeLayer(dashedLine);
                            }
                        });

                        // Store marker and its target position
                        flightMarkers[flightId] = { marker: marker, endPos: newPosition };

                        // Attach event listener to add the marker to the map
                        map.addLayer(marker);
                    }
                }
            } catch (routeError) {
                console.error(`Error fetching route for flight ${flightId}:`, routeError);
            }
        }

        // Remove markers for flights that are no longer present
        for (const flightId in flightMarkers) {
            if (!filteredFlights.some(flight => flight.flightId === flightId)) {
                map.removeLayer(flightMarkers[flightId].marker);
                delete flightMarkers[flightId];
            }
        }
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
}

// Initial fetch and display
fetchAndDisplayFlights();

// Periodically update flight data every minute
setInterval(fetchAndDisplayFlights, UPDATE_INTERVAL);

const airportsResponse = await fetch(`https://1ved.cloud/api/inva/airports`);
const airports = await airportsResponse.json();
const routesResponse = await fetch(`https://1ved.cloud/api/inva/routes`);
const routes = await airportsResponse.json();
// Routes data with ICAO codes


var airportIcon = L.icon({
    iconUrl: 'https://github.com/eldrago4/if-gatekeeper-hono/blob/346b253289fd5cce06d9cff82c4d315982dd2c36/1ved-cloud/app/assets/airport-icon.png?raw=true',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
});

var highlightedRoutes = [];

function getAirportByICAO(icao) {
    return airports.find(a => a.icao === icao);
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function calculateBezierCurve(start, end, numPoints = 100) {
    const midLat = (start[0] + end[0]) / 2;
    const midLng = (start[1] + end[1]) / 2;
    const dx = end[1] - start[1];
    const dy = end[0] - start[0];
    const controlLat = midLat + Math.abs(dx * 0.2);
    const controlLng = midLng - Math.abs(dy * 0.1);

    return Array.from({ length: numPoints + 1 }, (_, i) => {
        const t = i / numPoints;
        return [
            (1 - t) ** 2 * start[0] + 2 * (1 - t) * t * controlLat + t ** 2 * end[0],
            (1 - t) ** 2 * start[1] + 2 * (1 - t) * t * controlLng + t ** 2 * end[1]
        ];
    });
}

function addRoute(route) {
    var startAirport = getAirportByICAO(route.startICAO);
    var endAirport = getAirportByICAO(route.endICAO);

    if (!startAirport || !endAirport) return;

    // Define the custom popup style


    var markerStart = L.marker(startAirport.coordinates, { icon: airportIcon, icao: startAirport.icao }).addTo(map)
        .bindPopup(`<div class="flight-popup">${startAirport.name}<br>(${startAirport.icao})</div>
            <style>
                .flight-popup {
                    background-color: rgba(223, 223, 223, 0.741);
                    font-weight: bold;
                    padding-left: 15px;
                    padding-right: 15px;
                    padding-top: 5px;
                    padding-bottom: 3px;
                    border-radius: 5px;
                    box-shadow: none;
                    border: none;
                }
                .leaflet-popup-content-wrapper, .leaflet-popup-tip-container {
                    background: transparent;
                }
                .leaflet-popup-content {
                    margin: 0;
                }
            </style>`);
    var markerEnd = L.marker(endAirport.coordinates, { icon: airportIcon, icao: endAirport.icao }).addTo(map)
    .bindPopup(`<div class="flight-popup">${endAirport.name}<br>(${endAirport.icao})</div>
        <style>
            .flight-popup {
                background-color: rgba(223, 223, 223, 0.741);
                font-weight: bold;
                padding: 5px;
                padding-left: 15px;
                padding-right: 15px;
                padding-top: 5px;
                padding-bottom: 3px;
                border-radius: 5px;
                box-shadow: none;
                border: none;
            }
            .leaflet-popup-content-wrapper, .leaflet-popup-tip-container {
                background: transparent;
            }
            .leaflet-popup-content {
                margin: 0;
            }
        </style>`);

    var curvePoints = calculateBezierCurve(startAirport.coordinates, endAirport.coordinates);
    var polyline = L.polyline(curvePoints, { color: 'blue', weight: 1 }).addTo(map);

    return { markerStart, markerEnd, polyline, route };
}
var elements = routes.map(addRoute);

function handleHover(event, isHover) {
    if (highlightedRoutes.length === 0) {
        var hoveredicao = event.target.options.icao;
        elements.forEach(e => e.route.startICAO === hoveredicao || e.route.endICAO === hoveredicao ?
            e.polyline.setStyle({ color: isHover ? 'red' : 'blue', weight: isHover ? 2.7 : 1 }) :
            e.polyline.setStyle({ opacity: isHover ? 0.2 : 1 })
        );
    }
}

function handleClick(event) {
    var clickedicao = event.target.options.icao;
    highlightedRoutes.forEach(e => e.polyline.setStyle({ color: 'blue', weight: 1 }));
    highlightedRoutes = [];

    elements.forEach(e => {
        if (e.route.startICAO === clickedicao || e.route.endICAO === clickedicao) {
            e.polyline.setStyle({ color: 'red', weight: 2.7 });
            highlightedRoutes.push(e);
        } else {
            e.polyline.setStyle({ opacity: 0.2 });
        }
    });
}

function resetHighlight() {
    highlightedRoutes.forEach(e => e.polyline.setStyle({ color: 'blue', weight: 1 }));
    highlightedRoutes = [];
    elements.forEach(e => e.polyline.setStyle({ opacity: 1 }));
}

elements.forEach(e => {
    e.markerStart.on('mouseover', event => handleHover(event, true));
    e.markerStart.on('mouseout', event => handleHover(event, false));
    e.markerEnd.on('mouseover', event => handleHover(event, true));
    e.markerEnd.on('mouseout', event => handleHover(event, false));
    e.markerStart.on('click', handleClick);
    e.markerEnd.on('click', handleClick);
});

map.on('click', resetHighlight);
map.on('popupclose', resetHighlight);

map.fitBounds(new L.featureGroup(elements.flatMap(e => [e.markerStart, e.markerEnd, e.polyline])).getBounds());
