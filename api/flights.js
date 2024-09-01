// Basic Variables
const APIKEY = 'jvr8xfkoobd7vogtjq9xehellk23g9g0';
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


// Updated route fetch logic
async function fetchAndDisplayFlights() {
    try {
        // 1. Get Expert Server Session
        const sessionsResponse = await fetch(`${URLBASE}/sessions?apikey=${APIKEY}`);
        const sessionsData = await sessionsResponse.json();
        const expertSession = sessionsData.result.find(session => session.minimumAppVersion === '23.2' && session.worldType === 3);
        const sessionId = expertSession?.id;

        if (!sessionId) {
            console.error('Expert Server session not found');
            return;
        }

        // 2. Get Flights for the Expert Server session
        const flightsResponse = await fetch(`${URLBASE}/flights/${sessionId}?apikey=${APIKEY}`);
        const flightsData = await flightsResponse.json();

        // Filter flights based on callsign
        const filteredFlights = flightsData.result.filter(flight => {
            const callsign = flight.callsign;
            return (
                (callsign.startsWith('Air India') || callsign.startsWith('All Nippon')) &&
                (callsign.endsWith('IN') || callsign.endsWith('IN Heavy'))
            );
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
                                iconSize: [32, 32],
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
                        // Add popup with flight information
                        marker.bindPopup(`
                            <div class="flight-popup">
                                <b>Callsign:</b> ${flight.callsign}<br>
                                <b>Origin:</b> ${flight.originAirport || 'Unknown'}<br>
                                ${flight.altitude < 10000 ? Math.ceil(flight.altitude) + ' ft' : 'FL' + Math.ceil(flight.altitude / 100)} |
                                <b>Speed:</b> ${Math.ceil(flight.speed)} kts
                            </div>
                            <style>
                                .flight-popup{
                                    background-color: rgba(223, 223, 223, 0.741);
                                }
                            </style>
                        `);

                        // Store marker and its target position
                        flightMarkers[flightId] = { marker: marker, endPos: newPosition };

                        // Attach event listener to add the marker to the map
                        map.addLayer(marker);
                    }
                }
            } catch (routeError) {
                console.error(`Error processing route for flight ${flightId}:`, routeError);
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
        console.error('Error fetching or displaying flights:', error);
    }
}

// Initial fetch and display
fetchAndDisplayFlights();

// Periodically update flight data every minute
setInterval(fetchAndDisplayFlights, UPDATE_INTERVAL);

