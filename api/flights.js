var airports = [
  { name: 'Delhi', iata: 'DEL', coordinates: [28.7041, 77.1025] },
  { name: 'Mumbai', iata: 'BOM', coordinates: [19.0760, 72.8777] },
  { name: 'Chennai', iata: 'MAA', coordinates: [13.0827, 80.2707] },
  { name: 'Kolkata', iata: 'CCU', coordinates: [22.5726, 88.3639] },
  { name: 'Bangalore', iata: 'BLR', coordinates: [12.9716, 77.5946] },
  { name: 'Hyderabad', iata: 'HYD', coordinates: [17.3850, 78.4867] },
  { name: 'Jaipur', iata: 'JAI', coordinates: [26.9124, 75.7873] },
  { name: 'New York', iata: 'JFK', coordinates: [40.6413, -73.7781] },
  { name: 'London', iata: 'LHR', coordinates: [51.4700, -0.4543] },
  { name: 'Paris', iata: 'CDG', coordinates: [49.0097, 2.5479] },
  { name: 'Dubai', iata: 'DXB', coordinates: [25.2532, 55.3657] },
  { name: 'Singapore', iata: 'SIN', coordinates: [1.3644, 103.9915] },
  { name: 'Tokyo', iata: 'HND', coordinates: [35.5494, 139.7798] },
  { name: 'Sydney', iata: 'SYD', coordinates: [-33.8688, 151.2093] },
  { name: 'Los Angeles', iata: 'LAX', coordinates: [33.9416, -118.4085] },
  { name: 'Toronto', iata: 'YYZ', coordinates: [43.6777, -79.6248] },
  { name: 'Beijing', iata: 'PEK', coordinates: [40.0801, 116.5846] },
  { name: 'Hong Kong', iata: 'HKG', coordinates: [22.3080, 113.9185] },
  { name: 'Frankfurt', iata: 'FRA', coordinates: [50.0379, 8.5622] },
  { name: 'Amsterdam', iata: 'AMS', coordinates: [52.3105, 4.7683] }
];

var routes = [
  { startIATA: 'DEL', endIATA: 'BOM' },
  { startIATA: 'DEL', endIATA: 'CCU' },
  { startIATA: 'BOM', endIATA: 'MAA' },
  { startIATA: 'MAA', endIATA: 'CCU' },
  { startIATA: 'CCU', endIATA: 'BLR' },
  { startIATA: 'BLR', endIATA: 'HYD' },
  { startIATA: 'HYD', endIATA: 'DEL' },
  { startIATA: 'DEL', endIATA: 'JAI' },
  { startIATA: 'JAI', endIATA: 'BOM' },
  { startIATA: 'JFK', endIATA: 'LHR' },
  { startIATA: 'LHR', endIATA: 'CDG' },
  { startIATA: 'CDG', endIATA: 'DXB' },
  { startIATA: 'DXB', endIATA: 'SIN' },
  { startIATA: 'SIN', endIATA: 'HND' },
  { startIATA: 'HND', endIATA: 'SYD' },
  { startIATA: 'SYD', endIATA: 'LAX' },
  { startIATA: 'LAX', endIATA: 'JFK' },
  { startIATA: 'YYZ', endIATA: 'LHR' },
  { startIATA: 'PEK', endIATA: 'HKG' },
  { startIATA: 'FRA', endIATA: 'AMS' },
  { startIATA: 'AMS', endIATA: 'JFK' },
  { startIATA: 'DEL', endIATA: 'DXB' },
  { startIATA: 'DEL', endIATA: 'SIN' },
  { startIATA: 'DEL', endIATA: 'LHR' },
  { startIATA: 'BOM', endIATA: 'DXB' },
  { startIATA: 'BOM', endIATA: 'LHR' }
];

var map = L.map('map').setView([20.5937, 78.9629], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var aiportIcon = L.icon({
    iconUrl: '/1ved-cloud/app/assets/airport-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
});

var highlightedRoutes = [];

function getAirportByIATA(iata) {
    return airports.find(a => a.iata === iata);
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
    var startAirport = getAirportByIATA(route.startIATA);
    var endAirport = getAirportByIATA(route.endIATA);

    if (!startAirport || !endAirport) return;

    var markerStart = L.marker(startAirport.coordinates, { icon: aiportIcon, iata: startAirport.iata }).addTo(map)
        .bindPopup(`${startAirport.name}<br>(${startAirport.iata})`);
    var markerEnd = L.marker(endAirport.coordinates, { icon: aiportIcon, iata: endAirport.iata }).addTo(map)
        .bindPopup(`${endAirport.name}<br>(${endAirport.iata})`);

    var curvePoints = calculateBezierCurve(startAirport.coordinates, endAirport.coordinates);
    var polyline = L.polyline(curvePoints, { color: 'blue', weight: 1 }).addTo(map);

    return { markerStart, markerEnd, polyline, route };
}

var elements = routes.map(addRoute);

function handleHover(event, isHover) {
    if (highlightedRoutes.length === 0) {
        var hoveredIATA = event.target.options.iata;
        elements.forEach(e => e.route.startIATA === hoveredIATA || e.route.endIATA === hoveredIATA ?
            e.polyline.setStyle({ color: isHover ? 'red' : 'blue', weight: isHover ? 2.7 : 1 }) :
            e.polyline.setStyle({ opacity: isHover ? 0.2 : 1 })
        );
    }
}

function handleClick(event) {
    var clickedIATA = event.target.options.iata;
    highlightedRoutes.forEach(e => e.polyline.setStyle({ color: 'blue', weight: 1 }));
    highlightedRoutes = [];

    elements.forEach(e => {
        if (e.route.startIATA === clickedIATA || e.route.endIATA === clickedIATA) {
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
    elements.forEach(e => e.polyline.setStyle({ opacity: 0.5 }));
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
