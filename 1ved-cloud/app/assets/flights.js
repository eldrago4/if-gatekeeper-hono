    import { airports } from './data.js';
    import { routes } from './data.js';
       
    const URLBASE = 'https://1ved.cloud/api/v2';

    const UPDATE_INTERVAL = 60000; // 60 seconds for smooth animation
    const ANIMATION_DURATION = 59000; // 59 seconds for smooth interpolation

    const map = L.map('map').setView([20.5937, 78.9629], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        setZoom: 7,
        maxZoom: 18,
    }).addTo(map);
    
    const flightMarkers = {};
    
    function interpolatePosition(startPos, endPos, factor) {
        return [
            startPos[0] + (endPos[0] - startPos[0]) * factor,
            startPos[1] + (endPos[1] - startPos[1]) * factor,
        ];
    }
    
    function smoothMoveMarker(marker, startPos, endPos, duration) {
        const startTime = performance.now();
    
        function animate() {
            const elapsed = performance.now() - startTime;
            const factor = Math.min(elapsed / duration, 1);
            marker.setLatLng(interpolatePosition(startPos, endPos, factor));
    
            if (factor < 1) {
                requestAnimationFrame(animate);
            }
        }
    
        animate();
    }
    
    function isICAO(identifier) {
        return identifier && identifier.length === 4 && /^[A-Z]{4}$/.test(identifier);
    }
    
    async function fetchOperators() {
        const response = await fetch('/1ved-cloud/app/assets/operators.json');
        const data = await response.json();
        return data.names;
    }
    async function fetchAndDisplayFlights() {
        try {
            const sessionsResponse = await fetch(`${URLBASE}/sessions`);
            const sessionsData = await sessionsResponse.json();
            const expertSession = sessionsData.result.find(session => session.name === 'Expert');
            const sessionId = expertSession?.id;
    
            if (!sessionId) {
                console.error('Expert Server session not found');
                return;
            }
    
            const flightsResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights`);
            const flightsData = await flightsResponse.json();
            const operatorNames = await fetchOperators();
            const filteredFlights = flightsData.result.filter(flight => {
            
                const callsign = flight.callsign;
                return operatorNames.some(operator => callsign.startsWith(operator)) &&
                       (callsign.endsWith('IN') || callsign.endsWith('IN Heavy'));
            });

            
    
            
            const removeStaleMarkers = () => {
                for (const flightId in flightMarkers) {
                    if (!filteredFlights.some(flight => flight.flightId === flightId)) {
                        map.removeLayer(flightMarkers[flightId].marker);
                        delete flightMarkers[flightId];
                    }
                }
            };
    
            const processFlight = async flight => {
                const { flightId, heading, latitude, longitude, altitude, speed, callsign } = flight;
                const newPosition = [latitude, longitude];
                const previousPosition = flightMarkers[flightId]?.endPos || newPosition;
    
                try {
                    const routeResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights/${flightId}/route`);
                    if (!routeResponse.ok) return;
    
                    const routeData = await routeResponse.json();
                    const route = routeData.result;
    
                    if (route.length > 1) {
                        const flightPlanResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights/${flightId}/flightplan`);
                        const flightPlanData = await flightPlanResponse.json();
                        const flightPlan = flightPlanData.result;
    
                        const firstWaypoint = flightPlan.flightPlanItems[0];
                        const lastWaypoint = flightPlan.flightPlanItems[flightPlan.flightPlanItems.length - 1];
    
                        const dep = isICAO(firstWaypoint.identifier) ? firstWaypoint.identifier : 'N/A';
                        const arrv = isICAO(lastWaypoint.identifier) ? lastWaypoint.identifier : 'N/A';
    
                        const depLatLng = [firstWaypoint.location.latitude, firstWaypoint.location.longitude];
                        const arrvLatLng = [lastWaypoint.location.latitude, lastWaypoint.location.longitude];
    
                        const updateMarker = marker => {
                            smoothMoveMarker(marker, previousPosition, newPosition, ANIMATION_DURATION);
                            flightMarkers[flightId].endPos = newPosition;
                            marker._icon.innerHTML = `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${heading % 360}deg); width: 32px; height: 32px;"/>`;
                        };
    
                        const createMarker = () => {
                            const marker = L.marker(newPosition, {
                                icon: L.divIcon({
                                    className: 'rotated-aircraft-icon',
                                    html: `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${heading % 360}deg); width: 32px; height: 32px;" />`,
                                    iconSize: [5, 5],
                                    iconAnchor: [16, 16],
                                }),
                            });
    
                            marker.bindTooltip(callsign, {
                                permanent: true,
                                direction: 'top',
                                className: 'callsign-label',
                                opacity: 0.9,
                                offset: [0, -11],
                            });
    
                            const style = document.createElement('style');
                            style.textContent = `
                                .callsign-label {
                                    background-color: rgba(0, 0, 0, 0.45);
                                    color: rgb(255,223,0);
                                    border: none;
                                    border-radius: 5px;
                                    padding: 1px;
                                    font-size: 10px;
                                    text-align: center;
                                    pointer-events: none;
                                    white-space: nowrap;
                                    font-weight: bold;
                                }
                                .callsign-label::before {
                                    display: none;
                                }
                            `;
                            document.head.appendChild(style);
    
                            marker.bindPopup(`
                                <div class="flight-popup">
                                    <b>${callsign}</b><br>
                                    <b>Route:</b> ${dep} - ${arrv}<br>
                                    ${altitude < 10000 ? Math.ceil(altitude) + ' ft' : 'FL' + Math.ceil(altitude / 100)} |
                                    ${Math.ceil(speed)} kts
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
                                </style>
                            `);
    
                            let dashedLine = null;
                            marker.on('popupopen', () => {
                                dashedLine = L.polyline([depLatLng, arrvLatLng], {
                                    color: 'black',
                                    weight: 1,
                                    dashArray: '4, 8',
                                }).addTo(map);
                            });
    
                            marker.on('popupclose', () => {
                                if (dashedLine) {
                                    map.removeLayer(dashedLine);
                                }
                            });
    
                            flightMarkers[flightId] = { marker, endPos: newPosition };
                            map.addLayer(marker);
                        };
    
                        if (flightMarkers[flightId]) {
                            updateMarker(flightMarkers[flightId].marker);
                        } else {
                            createMarker();
                        }
                    }
                } catch (routeError) {
                    console.error(`Error fetching route for flight ${flightId}:`, routeError);
                }
            };
    
            await Promise.all(filteredFlights.map(processFlight));
            removeStaleMarkers();
        } catch (error) {
            console.error('Error fetching flights:', error);
        }
    }
    
    fetchAndDisplayFlights();
    setInterval(fetchAndDisplayFlights, UPDATE_INTERVAL);
    
    const airportIcon = L.icon({
        iconUrl: 'https://github.com/eldrago4/if-gatekeeper-hono/blob/346b253289fd5cce06d9cff82c4d315982dd2c36/1ved-cloud/app/assets/airport-icon.png?raw=true',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16],
    });
    
    const highlightedRoutes = [];
    
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
                (1 - t) ** 2 * start[1] + 2 * (1 - t) * t * controlLng + t ** 2 * end[1],
            ];
        });
    }
    
    function addRoute(route) {
        const startAirport = getAirportByICAO(route.startICAO);
        const endAirport = getAirportByICAO(route.endICAO);
    
        if (!startAirport || !endAirport) return;
    
        const markerStart = L.marker(startAirport.coordinates, { icon: airportIcon, icao: startAirport.icao }).addTo(map)
            .bindPopup(`
                <div class="flight-popup">${startAirport.name}<br>(${startAirport.icao})</div>
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
                </style>
            `);
    
        const markerEnd = L.marker(endAirport.coordinates, { icon: airportIcon, icao: endAirport.icao }).addTo(map)
            .bindPopup(`
                <div class="flight-popup">${endAirport.name}<br>(${endAirport.icao})</div>
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
                </style>
            `);
    
        const curvePoints = calculateBezierCurve(startAirport.coordinates, endAirport.coordinates);
        const polyline = L.polyline(curvePoints, { color: 'blue', weight: 1 }).addTo(map);
    
        return { markerStart, markerEnd, polyline, route };
    }
    
    const elements = routes.map(addRoute);
    
    function handleHover(event, isHover) {
        if (highlightedRoutes.length === 0) {
            const hoveredIcao = event.target.options.icao;
            elements.forEach(e => e.route.startICAO === hoveredIcao || e.route.endICAO === hoveredIcao ?
                e.polyline.setStyle({ color: isHover ? 'red' : 'blue', weight: isHover ? 2.7 : 1 }) :
                e.polyline.setStyle({ opacity: isHover ? 0.2 : 1 })
            );
        }
    }
    
    function handleClick(event) {
        const clickedIcao = event.target.options.icao;
        highlightedRoutes.forEach(e => e.polyline.setStyle({ color: 'blue', weight: 1 }));
        highlightedRoutes.length = 0;
    
        elements.forEach(e => {
            if (e.route.startICAO === clickedIcao || e.route.endICAO === clickedIcao) {
                e.polyline.setStyle({ color: 'red', weight: 2.7 });
                highlightedRoutes.push(e);
            } else {
                e.polyline.setStyle({ opacity: 0.2 });
            }
        });
    }
    
    function resetHighlight() {
        highlightedRoutes.forEach(e => e.polyline.setStyle({ color: 'blue', weight: 1 }));
        highlightedRoutes.length = 0;
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
    map.setZoom(5);