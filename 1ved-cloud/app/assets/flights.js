import ax from './aegi.js';
import rx from './rwef.js';
import { decryptData } from './packer.js';
const URLBASE = "https://1ved.cloud/api/v2";
const UPDATE_INTERVAL = 60000;
const ANIMATION_DURATION = 59000;

const map = L.map("map").setView([20.5937, 78.9629], 4);

var Stadia_AlidadeSmoothDark = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}",
    {
        minZoom: 0,
        maxZoom: 20,
        attribution:
            '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: "png",
    },
).addTo(map);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    setZoom: 7,
    maxZoom: 18,
});

var Thunderforest_TransportDark = L.tileLayer(
    "https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}",
    {
        attribution:
            '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        apikey: "ca647681c7b146619b484d6ee36fd93b",
        maxZoom: 22,
    },
);

var CyclOSM = L.tileLayer(
    "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    {
        maxZoom: 20,
        attribution:
            '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
);

var CartoDB_DarkMatter = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
    },
);

var baseMaps = {
    "Open Street Map": osm,
    "Smooth Dark": Stadia_AlidadeSmoothDark,
    "Dark Matter": CartoDB_DarkMatter,
    "Thunderforest Dark": Thunderforest_TransportDark,
    CycIOSM: CyclOSM,
};

const group1 = [
    "EY", "GA", "SQ", "MS", "KE", 
    "BW", "HU", "AY", "CI", "ET", 
    "FR", "DL"
  ];
  
const group2 = [
    "D7", "LO", "QZ", "AK", "FD", 
    "XJ", "KT", "TK", "OD", "Z2", 
    "ID", "ZS", "SL", "JT", "I5", 
    "TR", "NH", "BR", "UL", "OU", 
    "LX", "U2", "AZ"
  ];

var codesharesA = L.layerGroup();
var codesharesB = L.layerGroup();

function getRouteType(fnum) {
    if (group1.some(prefix => fnum.startsWith(prefix))) return "codeshareA";
    if (group2.some(prefix => fnum.startsWith(prefix))) return "codeshareB";
    return "INVA";
}
L.control.layers(baseMaps, { "Codeshares A": codesharesA, "Codeshares B": codesharesB }).addTo(map);

const flightMarkers = {};

const inactivityTime = 15 * 60000;
let inactivityTimeout;
let isPaused = false;
function showPopup() {
    const popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay active";
    popupOverlay.innerHTML = `
          <div class="popup">
                <h2>Session Timeout</h2>
                <p>Are you still here?</p>
                <button id="resumeButton">Resume</button>
          </div>
     `;
    document.body.appendChild(popupOverlay);

    document.getElementById("resumeButton").addEventListener("click", () => {
        isPaused = false;
        document.body.removeChild(popupOverlay);
        fetchAndDisplayFlights();
    });
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    if (isPaused) {
        isPaused = false;
        fetchAndDisplayFlights();
    }
    inactivityTimeout = setTimeout(() => {
        isPaused = true;
        showPopup();
    }, inactivityTime);
}

window.addEventListener("mousemove", resetInactivityTimer);
window.addEventListener("keydown", resetInactivityTimer);
window.addEventListener("click", resetInactivityTimer);

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
    return (
        identifier && identifier.length === 4 && /^[A-Z]{4}$/.test(identifier)
    );
}

async function fetchOperators() {
    const response = await fetch("/1ved-cloud/app/assets/operators.json");
    const data = await response.json();
    return data.names;
}

let cachedSessionId = null;
const globalFlightPlanCache = {};

async function getSessionId() {
    if (cachedSessionId) {
        return cachedSessionId;
    }
    try {
        const sessionsResponse = await fetch(`${URLBASE}/sessions`);
        const sessionsData = await sessionsResponse.json();
        const expertSession = sessionsData.result.find(
        (session) => session.name === "Expert"
        );
        if (!expertSession) {
        console.error("Expert Server session not found");
        return null;
        }
        cachedSessionId = expertSession.id;
        return cachedSessionId;
    } catch (error) {
        console.error("Error fetching session ID:", error);
        return null;
    }
}
async function fetchAndDisplayFlights() {
    if (isPaused) return;
    try {
      const sessionId = await getSessionId();
      if (!sessionId) return;
      
      const flightsResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights`);
      const flightsData = await flightsResponse.json();
      const filteredFlights = flightsData.result.filter((flight) => {
        const callsign = flight.callsign;
        return (
          callsign.endsWith("IN") ||
          callsign.endsWith("IN Heavy") ||
          callsign.endsWith("IN Super")
        );
      });
  
      const removeStaleMarkers = () => {
        for (const flightId in flightMarkers) {
          if (!filteredFlights.some((flight) => flight.flightId === flightId)) {
            map.removeLayer(flightMarkers[flightId].marker);
            delete flightMarkers[flightId];
          }
        }
      };
  
      const processFlight = async (flight) => {
        const { flightId, heading, latitude, longitude, altitude, speed, callsign } = flight;
        const newPosition = [latitude, longitude];
        const previousPosition = flightMarkers[flightId]?.endPos || newPosition;
        try {
          const routeResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights/${flightId}/route`);
          if (!routeResponse.ok) return;
          const routeData = await routeResponse.json();
          const route = routeData.result;
          if (route.length > 1) {
            let flightPlan;
            if (globalFlightPlanCache[flightId]) {
              flightPlan = globalFlightPlanCache[flightId];
            } else {
              const flightPlanResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights/${flightId}/flightplan`);
              const flightPlanData = await flightPlanResponse.json();
              flightPlan = flightPlanData.result;
              globalFlightPlanCache[flightId] = flightPlan;
            }
            
            const firstWaypoint = flightPlan.flightPlanItems[0];
            const lastWaypoint = flightPlan.flightPlanItems[flightPlan.flightPlanItems.length - 1];
            const dep = isICAO(firstWaypoint.identifier) ? firstWaypoint.identifier : "N/A";
            const arrv = isICAO(lastWaypoint.identifier) ? lastWaypoint.identifier : "N/A";
            const depLatLng = [firstWaypoint.location.latitude, firstWaypoint.location.longitude];
            const arrvLatLng = [lastWaypoint.location.latitude, lastWaypoint.location.longitude];
            
            const updateMarker = (marker) => {
              smoothMoveMarker(marker, previousPosition, newPosition, ANIMATION_DURATION);
              flightMarkers[flightId].endPos = newPosition;
              marker._icon.innerHTML = `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${heading % 360}deg); width: 32px; height: 32px;"/>`;
            };
  
            const createMarker = () => {
              const marker = L.marker(newPosition, {
                icon: L.divIcon({
                  className: "rotated-aircraft-icon",
                  html: `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${heading % 360}deg); width: 32px; height: 32px;" />`,
                  iconSize: [5, 5],
                  iconAnchor: [16, 16],
                }),
              });
              marker.bindTooltip(callsign, {
                permanent: true,
                direction: "top",
                className: "callsign-label",
                opacity: 0.9,
                offset: [0, -11],
              });
              const style = document.createElement("style");
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
                  ${altitude < 10000 ? Math.ceil(altitude) + " ft" : "FL" + Math.ceil(altitude / 100)} |
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
              marker.on("popupopen", () => {
                dashedLine = L.polyline([depLatLng, arrvLatLng], {
                  color: "black",
                  weight: 1,
                  dashArray: "4, 8",
                }).addTo(map);
              });
              marker.on("popupclose", () => {
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
          console.error(`Error fetching route for flight ${callsign}:`, routeError);
        }
      };
  
      await Promise.all(filteredFlights.map(processFlight));
      removeStaleMarkers();
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  }


fetchAndDisplayFlights();
setInterval(fetchAndDisplayFlights, UPDATE_INTERVAL);
let airports, routes;
async function initializeMarkers() {
    airports = await decryptData(ax);
    routes = await decryptData(rx);
}
initializeMarkers();
const airportIcon = L.icon({
    iconUrl:
        "https://github.com/eldrago4/if-gatekeeper-hono/blob/346b253289fd5cce06d9cff82c4d315982dd2c36/1ved-cloud/app/assets/airport-icon.png?raw=true",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
});

const highlightedRoutes = [];

function getAirportByICAO(icao) {
    return airports.find((a) => a.icao === icao);
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLng / 2) ** 2;
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
            (1 - t) ** 2 * start[0] +
                2 * (1 - t) * t * controlLat +
                t ** 2 * end[0],
            (1 - t) ** 2 * start[1] +
                2 * (1 - t) * t * controlLng +
                t ** 2 * end[1],
        ];
    });
}


airports.forEach((airport) => {
    const marker = L.marker(airport.coordinates, {
        icon: airportIcon,
        icao: airport.icao,
    }).addTo(map).bindPopup(
        `<div class="flight-popup">${airport.name}<br>(${airport.icao})</div>
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
        </style>`
    );

    // Store the marker in the airport object
    airport.markerStart = marker;
    
    // Add event listeners
    marker.on("mouseover", (event) => handleHover(event, true));
    marker.on("mouseout", (event) => handleHover(event, false));
    marker.on("click", handleClick);
});
function addRoute(route) {
    const startAirport = getAirportByICAO(route.startICAO);
    const endAirport = getAirportByICAO(route.endICAO);
    if (!startAirport || !endAirport) {
        console.warn(`Route data incomplete: ${JSON.stringify(route)}`);
        return null;
    }

    const curvePoints = calculateBezierCurve(
        startAirport.coordinates,
        endAirport.coordinates,
    );

    const type = getRouteType(route.fnum);
    let polyline;
    if (type === 'codeshareB') {
        polyline = L.polyline(curvePoints, { color: "#c26b00", weight: 1, opacity: 0.5 });
        polyline.addTo(codesharesB);
    } else if (type === 'codeshareA') {
        polyline = L.polyline(curvePoints, { color: "#c26b00", weight: 1 ,opacity: 0.5});
        polyline.addTo(codesharesA);
    } else {
        polyline = L.polyline(curvePoints, { color: "blue", weight: 1, opacity: 0.5}).addTo(map);
    }
    
    return { polyline, route, type };
}

const elements = routes.map(addRoute).filter(Boolean);

function handleHover(event, isHover, isCodeshare = false) {
    if (highlightedRoutes.length === 0) {
        const hoveredIcao = event.target.options.icao;
        elements.forEach((e) => {
            if (!e.polyline) return; // Fixing TypeError issue

            if (e.route.startICAO === hoveredIcao || e.route.endICAO === hoveredIcao) {
                e.polyline.setStyle({
                    color: e.type === "INVA" ? (isHover ? "red" : "blue") : "goldenrod",
                    weight: isHover ? 2.7 : 1,
                    opacity: 0.5
                });
            } else {
                e.polyline.setStyle({ opacity: isHover ? 0.2 : 0.5 });
            }
        });

        if (isCodeshare) {
            [codesharesA, codesharesB].forEach((layerGroup) => {
                layerGroup.eachLayer((layer) => {
                    const hoveredIcao = event.target.options.icao;
                    if (layer.options.startICAO === hoveredIcao || layer.options.endICAO === hoveredIcao) {
                        layer.setStyle({ opacity: 0.5 });
                    } else {
                        layer.setStyle({ opacity: 0.2 });
                    }
                });
            });
        }
    }
}

function handleClick(event) {
    const clickedIcao = event.target.options.icao;
    highlightedRoutes.forEach((e) => {
        e.polyline.setStyle({
            color: e.type === 'INVA' ? "blue" : "goldenrod",
            weight: 1
        });
    });

    highlightedRoutes.length = 0;

    elements.forEach((e) => {
        if ((e.route.startICAO === clickedIcao || e.route.endICAO === clickedIcao)) {
            if (e.type === 'INVA'){
                e.polyline.setStyle({ color: "red", weight: 2.7 });
            }
            highlightedRoutes.push(e);
        } else {
            e.polyline.setStyle({ opacity: 0.2 });
        }
    });
}

function resetHighlight() {
    highlightedRoutes.forEach((e) => {
        if(e.type === 'INVA'){
            e.polyline.setStyle({ color: "blue", weight: 1, opacity: 0.5 });
        }
    });
    highlightedRoutes.length = 0;

    elements.forEach((e) => e.polyline.setStyle({ opacity: 0.5 }));

    [codesharesA, codesharesB].forEach((layerGroup) => {
        layerGroup.eachLayer((layer) => layer.setStyle({ opacity: 0.5, weight: 1}));
    });
}

map.on("click", resetHighlight);
map.on("popupclose", resetHighlight);
map.setZoom(5);
