const airports = [{
    name: 'Abu Dhabi',
    icao: 'OMAA',
    coordinates: [24.442856,
        54.651474]
},

    {
        name: 'Agartala',
        icao: 'VEAT',
        coordinates: [23.886971,
            91.240448]
    },

    {
        name: 'Ahmedabad',
        icao: 'VAAH',
        coordinates: [23.07724,
            72.634651]
    },

    {
        name: 'Amritsar',
        icao: 'VIAR',
        coordinates: [31.709591,
            74.797256]
    },

    {
        name: 'Amsterdam',
        icao: 'EHAM',
        coordinates: [52.308609,
            4.763889]
    },

    {
        name: 'Aurangabad',
        icao: 'VAAU',
        coordinates: [19.86272,
            75.398109]
    },

    {
        name: 'Bahrain',
        icao: 'OBBI',
        coordinates: [26.27083,
            50.63361]
    },

    {
        name: 'Bangkok',
        icao: 'VTBS',
        coordinates: [13.6811,
            100.7472]
    },

    {
        name: 'Bengaluru',
        icao: 'VOBL',
        coordinates: [13.198889,
            77.705559]
    },

    {
        name: 'Bhopal',
        icao: 'VABP',
        coordinates: [23.28746,
            77.337372]
    },

    {
        name: 'Birmingham',
        icao: 'EGBB',
        coordinates: [52.45385,
            -1.74802]
    },

    {
        name: 'Chandigarh',
        icao: 'VICG',
        coordinates: [30.67346,
            76.788544]
    },

    {
        name: 'Chennai',
        icao: 'VOMM',
        coordinates: [12.99441,
            80.180511]
    },

    {
        name: 'Chicago',
        icao: 'KORD',
        coordinates: [41.978142,
            -87.9058]
    },

    {
        name: 'Cochin',
        icao: 'VOCI',
        coordinates: [10.15199,
            76.401901]
    },

    {
        name: 'Coimbatore',
        icao: 'VOCB',
        coordinates: [11.03003,
            77.043381]
    },

    {
        name: 'Colombo',
        icao: 'VCBI',
        coordinates: [7.180756,
            79.884109]
    },

    {
        name: 'Copenhagen',
        icao: 'EKCH',
        coordinates: [55.608387,
            12.645351]
    },

    {
        name: 'Dammam',
        icao: 'OEDF',
        coordinates: [26.471161,
            49.79789]
    },

    {
        name: 'Delhi',
        icao: 'VIDP',
        coordinates: [28.5665,
            77.103081]
    },

    {
        name: 'Dhaka',
        icao: 'VGHS',
        coordinates: [23.84333,
            90.397781]
    },

    {
        name: 'Dibrugarh',
        icao: 'VEMN',
        coordinates: [27.48385,
            95.016922]
    },

    {
        name: 'Dimapur',
        icao: 'VEMR',
        coordinates: [25.879816,
            93.772865]
    },

    {
        name: 'Doha',
        icao: 'OTHH',
        coordinates: [25.273056,
            51.608055]
    },

    {
        name: 'Dubai',
        icao: 'OMDB',
        coordinates: [25.252769,
            55.364441]
    },

    {
        name: 'Frankfurt',
        icao: 'EDDF',
        coordinates: [50.026421,
            8.543125]
    },

    {
        name: 'Fiji Nadi International',
        icao: 'FIMP',
        coordinates: [-17.7500,
            177.4425]
    },

    {
        name: 'Goa',
        icao: 'VOGO',
        coordinates: [15.380789,
            73.832108]
    },

    {
        name: 'Goa',
        icao: 'VOGA',
        coordinates: [15.744402,
            73.860626]
    },

    {
        name: 'Guwahati',
        icao: 'VEGT',
        coordinates: [26.106091,
            91.58593]
    },

    {
        name: 'Hong Kong',
        icao: 'VHHH',
        coordinates: [22.30888,
            113.914703]
    },

    {
        name: 'Hyderabad',
        icao: 'VOHS',
        coordinates: [17.254,
            78.431]
    },

    {
        name: 'Imphal',
        icao: 'VEIM',
        coordinates: [24.759951,
            93.89669]
    },

    {
        name: 'Indore',
        icao: 'VAID',
        coordinates: [22.721781,
            75.801079]
    },

    {
        name: 'Jaipur',
        icao: 'VIJP',
        coordinates: [26.82419,
            75.812157]
    },

    {
        name: 'Jammu',
        icao: 'VIJU',
        coordinates: [32.68914,
            74.837379]
    },

    {
        name: 'Jamnagar',
        icao: 'VAJM',
        coordinates: [22.465521,
            70.01255]
    },

    {
        name: 'Jeddah',
        icao: 'OEJN',
        coordinates: [21.67956,
            39.156528]
    },

    {
        name: 'Jodhpur',
        icao: 'VIJO',
        coordinates: [26.251089,
            73.048859]
    },

    {
        name: 'Kathmandu',
        icao: 'VNKT',
        coordinates: [27.696581,
            85.3591]
    },

    {
        name: 'Kolkata',
        icao: 'VECC',
        coordinates: [22.65473,
            88.446716]
    },

    {
        name: 'Kozhikode',
        icao: 'VOCL',
        coordinates: [11.13683,
            75.955299]
    },

    {
        name: 'Kuwait City',
        icao: 'OKKK',
        coordinates: [29.226561,
            47.968922]
    },

    {
        name: 'Leh',
        icao: 'VILH',
        coordinates: [34.135872,
            77.546509]
    },

    {
        name: 'London',
        icao: 'EGKK',
        coordinates: [51.148048,
            -0.19027]
    },

    {
        name: 'London',
        icao: 'EGLL',
        coordinates: [51.477501,
            -0.46138]
    },

    {
        name: 'Lucknow',
        icao: 'VILK',
        coordinates: [26.76059,
            80.889328]
    },

    {
        name: 'Madurai',
        icao: 'VOMD',
        coordinates: [9.834508,
            78.093369]
    },

    {
        name: 'Mangalore',
        icao: 'VOML',
        coordinates: [12.96126,
            74.89006]
    },

    {
        name: 'Melbourne',
        icao: 'YMML',
        coordinates: [-37.673302,
            144.843307]
    },

    {
        name: 'Milan',
        icao: 'LIMC',
        coordinates: [45.6306,
            8.728111]
    },

    {
        name: 'Mumbai',
        icao: 'VABB',
        coordinates: [19.08868,
            72.867912]
    },

    {
        name: 'Muscat',
        icao: 'OOMS',
        coordinates: [23.593269,
            58.284439]
    },

    {
        name: 'Nagpur',
        icao: 'VANP',
        coordinates: [21.09219,
            79.04718]
    },

    {
        name: 'Nairobi',
        icao: 'HKJK',
        coordinates: [-1.31924,
            36.927769]
    },

    {
        name: 'New York',
        icao: 'KJFK',
        coordinates: [40.639751,
            -73.7789]
    },

    {
        name: 'New York',
        icao: 'KEWR',
        coordinates: [40.692501,
            -74.168602]
    },

    {
        name: 'Paris',
        icao: 'LFPG',
        coordinates: [49.012516,
            2.555752]
    },

    {
        name: 'Patna',
        icao: 'VEPT',
        coordinates: [25.591311,
            85.08799]
    },

    {
        name: 'Port Blair',
        icao: 'VOPB',
        coordinates: [11.64116,
            92.729736]
    },

    {
        name: 'Pune',
        icao: 'VAPO',
        coordinates: [18.582109,
            73.919693]
    },

    {
        name: 'Rajkot',
        icao: 'VAHS',
        coordinates: [22.376785,
            71.037094]
    },

    {
        name: 'Riyadh',
        icao: 'OERK',
        coordinates: [24.95764,
            46.698769]
    },

    {
        name: 'San Francisco',
        icao: 'KSFO',
        coordinates: [37.618969,
            -122.374001]
    },

    {
        name: 'Seoul',
        icao: 'RKSI',
        coordinates: [37.46907,
            126.4505]
    },

    {
        name: 'Silchar',
        icao: 'VEKU',
        coordinates: [24.91292,
            92.978737]
    },

    {
        name: 'Singapore',
        icao: 'WSSS',
        coordinates: [1.350189,
            103.9944]
    },

    {
        name: 'Srinagar',
        icao: 'VISR',
        coordinates: [33.987129,
            74.774246]
    },

    {
        name: 'Sydney',
        icao: 'YSSY',
        coordinates: [-33.946098,
            151.1772]
    },

    {
        name: 'Tel Aviv',
        icao: 'LLBG',
        coordinates: [32.011379,
            34.886662]
    },

    {
        name: 'Tirupati',
        icao: 'VOTP',
        coordinates: [13.63249,
            79.543251]
    },

    {
        name: 'Tokyo',
        icao: 'RJAA',
        coordinates: [35.764721,
            140.386307]
    },

    {
        name: 'Toronto',
        icao: 'CYYZ',
        coordinates: [43.677219,
            -79.630501]
    },

    {
        name: 'Thiruvananthapuram',
        icao: 'VOTV',
        coordinates: [8.482122,
            76.920113]
    },

    {
        name: 'Udaipur',
        icao: 'VAUD',
        coordinates: [24.617689,
            73.896103]
    },

    {
        name: 'Vadodara',
        icao: 'VABO',
        coordinates: [22.336161,
            73.22628]
    },

    {
        name: 'Vancouver',
        icao: 'CYVR',
        coordinates: [49.193878,
            -123.183998]
    },

    {
        name: 'Varanasi',
        icao: 'VEBN',
        coordinates: [25.45208,
            82.862297]
    },

    {
        name: 'Vienna',
        icao: 'LOWW',
        coordinates: [48.110271,
            16.569719]
    },

    {
        name: 'Vijayawada',
        icao: 'VOBZ',
        coordinates: [16.53043,
            80.796837]
    },

    {
        name: 'Visakhapatnam',
        icao: 'VOVZ',
        coordinates: [17.721161,
            83.22448]
    },

    {
        name: 'Washington',
        icao: 'KIAD',
        coordinates: [38.947441,
            -77.4599]
    },

    {
        name: 'Yangon',
        icao: 'VYYY',
        coordinates: [16.907301,
            96.133217]
    }];

const routes = [{
    startICAO: 'OTHH',
    endICAO: 'VIDP'
}, {
    startICAO: 'VABB',
    endICAO: 'VOCI'
}, {
    startICAO: 'VAAH',
    endICAO: 'VABB'
},
    {
        startICAO: 'VABB',
        endICAO: 'VOML'
    }, {
        startICAO: 'VCBI',
        endICAO: 'VOMM'
    }, {
        startICAO: 'LIMC',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VNKT'
    }, {
        startICAO: 'VABP',
        endICAO: 'VIDP'
    }, {
        startICAO: 'OKKK',
        endICAO: 'VIDP'
    }, {
        startICAO: 'CYVR',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VOTV'
    }, {
        startICAO: 'VABB',
        endICAO: 'VTBS'
    }, {
        startICAO: 'VAAH',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VECC',
        endICAO: 'VEKU'
    }, {
        startICAO: 'VABO',
        endICAO: 'VIDP'
    }, {
        startICAO: 'OEJN',
        endICAO: 'VABB'
    }, {
        startICAO: 'VOCB',
        endICAO: 'VOMM'
    }, {
        startICAO: 'EGKK',
        endICAO: 'VOCI'
    }, {
        startICAO: 'VOHS',
        endICAO: 'VOTP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VEPT'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VOTV'
    }, {
        startICAO: 'VABB',
        endICAO: 'VOCB'
    }, {
        startICAO: 'VIDP',
        endICAO: 'WSSS'
    }, {
        startICAO: 'OMAA',
        endICAO: 'VABB'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VILH'
    }, {
        startICAO: 'OEJN',
        endICAO: 'VOHS'
    }, {
        startICAO: 'VAID',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VOBL'
    }, {
        startICAO: 'VABB',
        endICAO: 'VAID'
    }, {
        startICAO: 'OKKK',
        endICAO: 'VABB'
    }, {
        startICAO: 'EGBB',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VOBZ'
    }, {
        startICAO: 'EHAM',
        endICAO: 'VIDP'
    }, {
        startICAO: 'LLBG',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VECC',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'YMML'
    }, {
        startICAO: 'RKSI',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VILK'
    }, {
        startICAO: 'OMDB',
        endICAO: 'VABB'
    }, {
        startICAO: 'VGHS',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VILH',
        endICAO: 'VISR'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VOMM'
    }, {
        startICAO: 'KEWR',
        endICAO: 'VABB'
    }, {
        startICAO: 'EGBB',
        endICAO: 'VIAR'
    }, {
        startICAO: 'VIAR',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VIJP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VIJO'
    }, {
        startICAO: 'OMDB',
        endICAO: 'VOHS'
    }, {
        startICAO: 'VIDP',
        endICAO: 'YSSY'
    }, {
        startICAO: 'LFPG',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VYYY'
    }, {
        startICAO: 'OEJN',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VANP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VTBS'
    }, {
        startICAO: 'OTHH',
        endICAO: 'VABB'
    }, {
        startICAO: 'VHHH',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VAUD',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VOMM',
        endICAO: 'VOPB'
    }, {
        startICAO: 'VABB',
        endICAO: 'VOGO'
    }, {
        startICAO: 'VECC',
        endICAO: 'VNKT'
    }, {
        startICAO: 'VABB',
        endICAO: 'VECC'
    }, {
        startICAO: 'KORD',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VOBL'
    }, {
        startICAO: 'VIJU',
        endICAO: 'VILH'
    }, {
        startICAO: 'VAAU',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VAHS',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VIAR'
    }, {
        startICAO: 'VEGT',
        endICAO: 'VEMR'
    }, {
        startICAO: 'OKKK',
        endICAO: 'VOMM'
    }, {
        startICAO: 'VABB',
        endICAO: 'VAJM'
    }, {
        startICAO: 'EGKK',
        endICAO: 'VOGA'
    }, {
        startICAO: 'VOPB',
        endICAO: 'VOVZ'
    }, {
        startICAO: 'KJFK',
        endICAO: 'VABB'
    }, {
        startICAO: 'KSFO',
        endICAO: 'VIDP'
    }, {
        startICAO: 'OMDB',
        endICAO: 'VOMM'
    }, {
        startICAO: 'VABB',
        endICAO: 'VAHS'
    }, {
        startICAO: 'VABB',
        endICAO: 'VEBN'
    }, {
        startICAO: 'VEBN',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VEPT',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VIJO'
    }, {
        startICAO: 'KSFO',
        endICAO: 'VOBL'
    }];

const codeshares = [{
    startICAO: 'WSSS',
    endICAO: 'YSSY'
},
    {
        startICAO: 'YSSY',
        endICAO: 'WSSS'
    },
    {
        startICAO: 'WSSS',
        endICAO: 'EGLL'
    },
    {
        startICAO: 'OMDB',
        endICAO: 'FIMP'
    },
    {
        startICAO: 'FIMP',
        endICAO: 'OMDB'
    },
    {
        startICAO: 'OMDB',
        endICAO: 'VABB'
    },
    {
        startICAO: 'VABB',
        endICAO: 'OMDB'
    },
    {
        startICAO: 'VHHH',
        endICAO: 'RKSI'
    },
    {
        startICAO: 'RKSI',
        endICAO: 'VHHH'
    },
    {
        startICAO: 'RKSI',
        endICAO: 'PHNL'
    },
];


const URLBASE = 'https://1ved.cloud/api/v2';

const UPDATE_INTERVAL = 60000; // 60 seconds for smooth animation
const ANIMATION_DURATION = 59000; // 59 seconds for smooth interpolation

const map = L.map('map').setView([20.5937, 78.9629], 4);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    setZoom: 7,
    maxZoom: 18,
});

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
});
Stadia_AlidadeSmoothDark.addTo(map);

var Thunderforest_TransportDark = L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: 'ca647681c7b146619b484d6ee36fd93b',
    maxZoom: 22
});


var CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
});



var baseMaps = {
    'Open Street Map': osm,
    'Smooth Dark': Stadia_AlidadeSmoothDark,
    'Dark Matter': CartoDB_DarkMatter,
    'Thunderforest Dark': Thunderforest_TransportDark,
    'CycIOSM': CyclOSM
};

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
            (callsign.endsWith('IN') || callsign.endsWith('IN Heavy') || callsign.endsWith('IN Super'));
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
            const {
                flightId,
                heading,
                latitude,
                longitude,
                altitude,
                speed,
                callsign
            } = flight;
            const newPosition = [latitude,
                longitude];
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

                    const dep = isICAO(firstWaypoint.identifier) ? firstWaypoint.identifier: 'N/A';
                    const arrv = isICAO(lastWaypoint.identifier) ? lastWaypoint.identifier: 'N/A';

                    const depLatLng = [firstWaypoint.location.latitude,
                        firstWaypoint.location.longitude];
                    const arrvLatLng = [lastWaypoint.location.latitude,
                        lastWaypoint.location.longitude];

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
                            ${altitude < 10000 ? Math.ceil(altitude) + ' ft': 'FL' + Math.ceil(altitude / 100)} |
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

                        const curvePoints = calculateBezierCurve(startAirport.coordinates, endAirport.coordinates);
                        const polyline = L.polyline(curvePoints, {
                            color: 'blue', weight: 1
                        }).addTo(map);

                        return {
                            markerStart,
                            markerEnd,
                            polyline,
                            route
                        };
                    }

                    const elements = routes.map(addRoute);

                    function handleHover(event, isHover) {
                        if (highlightedRoutes.length === 0) {
                            const hoveredIcao = event.target.options.icao;
                            elements.forEach(e => e.route.startICAO === hoveredIcao || e.route.endICAO === hoveredIcao ?
                                e.polyline.setStyle({
                                    color: isHover ? 'red': 'blue', weight: isHover ? 2.7: 1
                                }):
                                e.polyline.setStyle({
                                    opacity: isHover ? 0.2: 1
                                })
                            );
                        }
                    }

                    function handleClick(event) {
                        const clickedIcao = event.target.options.icao;
                        highlightedRoutes.forEach(e => e.polyline.setStyle({
                            color: 'blue', weight: 1
                        }));
                        highlightedRoutes.length = 0;

                        elements.forEach(e => {
                            if (e.route.startICAO === clickedIcao || e.route.endICAO === clickedIcao) {
                                e.polyline.setStyle({
                                    color: 'red', weight: 2.7
                                });
                                highlightedRoutes.push(e);
                            } else {
                                e.polyline.setStyle({
                                    opacity: 0.2
                                });
                            }
                        });
                    }

                    function resetHighlight() {
                        highlightedRoutes.forEach(e => e.polyline.setStyle({
                            color: 'blue', weight: 1
                        }));
                        highlightedRoutes.length = 0;
                        elements.forEach(e => e.polyline.setStyle({
                            opacity: 1
                        }));
                    }

                    // Add codeshares routes as green polylines
                    codeshares.forEach(route => {
                        const startAirport = getAirportByICAO(route.startICAO);
                        const endAirport = getAirportByICAO(route.endICAO);

                        if (startAirport && endAirport) {
                            const curvePoints = calculateBezierCurve(startAirport.coordinates, endAirport.coordinates);
                            const polyline = L.polyline(curvePoints, {
                                color: 'green', weight: 2
                            });
                            polyline.addTo(codesharesLayer); // Add to the codesharesLayer
                        }
                    });
                    var codesharesLayer = L.layerGroup().addTo(map);

                    
                    

                    elements.forEach(e => {
                        e.markerStart.on('mouseover', event => handleHover(event, true));
                        e.markerStart.on('mouseout', event => handleHover(event, false));
                        e.markerEnd.on('mouseover', event => handleHover(event, true));
                        e.markerEnd.on('mouseout', event => handleHover(event, false));
                        e.markerStart.on('click', handleClick);
                        e.markerEnd.on('click', handleClick);
                    });

                    map.on('click',
                        resetHighlight);
                    map.on('popupclose',
                        resetHighlight);
                    map.setZoom(5);