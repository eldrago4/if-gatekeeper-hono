
const { useState, useEffect, useRef } = React;
const Papa = window.Papa;
const L = window.L;

// import 'leaflet/dist/leaflet.css';

const ITEMS_PER_PAGE = 15;

const aircraftOptions = [
  "Airbus A318", "Airbus A319", "Airbus 320", "Airbus A321", "Airbus A220-300",
  "Airbus A330-300", "Airbus A330-900", "Airbus A359", "Airbus A380",
  "Boeing 737-700", "Boeing 737-800", "Boeing 737-900", "Boeing 737MAX",
  "Boeing 747-400", "Boeing 747-8", "Boeing 757-200", "Boeing 767-300", "Boeing 767-300ER",
  "Boeing 777-200ER", "Boeing 777-200LR", "Boeing 777-300ER", "Boeing 777F",
  "Boeing 787-8", "Boeing 787-9", "Boeing 787-10", "Bombardier Dash 8 Q-400",
  "CRJ-700", "CRJ-900", "CRJ-1000", "DC-10", "DC-10F", "ERJ-175", "ERJ-190",
  "E190", "E195", "MD-11", "MD-11F", "TBM-930"
];
const AIRPORTS = [
  { icao: 'KJFK', name: 'John F. Kennedy International Airport', lat: 40.6413, lon: -73.7781 },
  { icao: 'KLAX', name: 'Los Angeles International Airport', lat: 33.9416, lon: -118.4085 },
  { icao: 'EGLL', name: 'London Heathrow Airport', lat: 51.4700, lon: -0.4543 },
  { icao: 'VOBL', name: 'Kempegowda International Airport', lat: 13.1986, lon: 77.7066 },
  { icao: 'VIDP', name: 'Indira Gandhi International Airport', lat: 28.5562, lon: 77.1000 },
  // Add more airports as needed
];
const rankHierarchy = [
  "Yuvraj",        // Crown Prince (Heir)
  "Rajkumar",      // Prince
  "Rajvanshi",     // Of Royal Lineage
  "Rajdhiraj",     // King of Kings
  "Maharaja",      // Great King
  "Samrat",        
  "Chhatrapati"   
];


const aircraftICAOCodes = {
  "Airbus A318": "A318",
  "Airbus A319": "A319",
  "Airbus 320": "A320",
  "Airbus A321": "A321",
  "Airbus A220-300": "BCS3", 
  "Airbus A330-300": "A333",
  "Airbus A330-900": "A339",
  "Airbus A359": "A359", // A350-900
  "Airbus A380": "A388",

  "Boeing 737-700": "B737",
  "Boeing 737-800": "B738",
  "Boeing 737-900": "B739",
  "Boeing 737MAX": "B38M", 

  "Boeing 747-400": "B744",
  "Boeing 747-8": "B748",
  "Boeing 757-200": "B752",
  "Boeing 767-300": "B763",
  "Boeing 767-300ER": "B763", 

  "Boeing 777-200ER": "B772",
  "Boeing 777-200LR": "B77L",
  "Boeing 777-300ER": "B77W",
  "Boeing 777F": "B77F",

  "Boeing 787-8": "B788",
  "Boeing 787-9": "B789",
  "Boeing 787-10": "B78X",

  "Bombardier Dash 8 Q-400": "DH8D",

  "CRJ-700": "CRJ7",
  "CRJ-900": "CRJ9",
  "CRJ-1000": "CRJX",

  "DC-10": "DC10",
  "DC-10F": "DC10", 

  "ERJ-175": "E75L",
  "ERJ-190": "E190",

  "E190": "E190",
  "E195": "E195",

  "MD-11": "MD11",
  "MD-11F": "MD11", // Freighter variant

  "TBM-930": "TBM9" // ICAO for TBM 930
};


const rankAircraftMap = {
  "Yuvraj": [
    "Airbus A220-300",
    "Airbus 320",
    "Boeing 737-800",
    "Bombardier Dash 8 Q-400",
    "Boeing 737MAX",
    "ERJ-175",
    "ERJ-190"
  ],
  "Rajkumar": [
    "Airbus A321",
    "Boeing 737-900",
    "Boeing 757-200",
    "Airbus A330-300"
  ],
  "Rajvanshi": [
    "Boeing 787-8",
    "Boeing 767-300",
    "Boeing 787-9"
  ],
  "Rajdhiraj": [
    "Boeing 777-200LR",
    "Boeing 777F"
  ],
  "Maharaja": [
    "Boeing 777-300ER",
    "Boeing 747-8",
    "Boeing 787-10"
  ],
  "Samrat": [
    "Airbus A359",
    "Boeing 777-200ER",
    "Airbus A340"
  ],
  "Chhatrapati": [
    "Airbus A380",
    "Boeing 747-400"
  ]
};


const RouteFinder = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    flightNumber: '',
    departureIcao: '',
    arrivalIcao: '',
    aircraft: '',
    minTime: '',
    maxTime: '',
    rank: ''
  });
  const [page, setPage] = useState(1);
  const [randomRoute, setRandomRoute] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [showMapFor, setShowMapFor] = useState(null);
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);


  useEffect(() => {
    fetch('/1ved-cloud/app/assets/routes.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          delimiter: ';',
          skipEmptyLines: true,
          complete: results => {
            const cleaned = results.data.map(row => ({
              flight_number: row.flight_number,
              departure_icao: row.departure_icao?.toUpperCase() || '',
              arrival_icao: row.arrival_icao?.toUpperCase() || '',
              aircraft_names: row.aircraft_names || '',
              flight_time_hours: parseInt(row.flight_time_hours, 10) || 0,
              flight_time_minutes: parseInt(row.flight_time_minutes, 10) || 0,
            }));
            setData(cleaned);
          },
        });
      });
  }, []);

  useEffect(() => {
  const sorted = [...data].sort((a, b) => {
    const t1 = a.flight_time_hours * 60 + a.flight_time_minutes;
    const t2 = b.flight_time_hours * 60 + b.flight_time_minutes;
    return t1 - t2;
  });

  const result = sorted.filter(route => {
    const totalMinutes = route.flight_time_hours * 60 + route.flight_time_minutes;
    const minMinutes = (parseInt(filters.minTime) || 0) * 60;
    const maxMinutes = ((parseInt(filters.maxTime) || Infinity) * 60);

    const aircraftFilter = filters.aircraft === '' ||
      route.aircraft_names.toLowerCase().includes(filters.aircraft.toLowerCase());

    // --- Rank filtering logic ---
    let rankAllowed = true;
    if (filters.rank) {
      const selectedRankIndex = rankHierarchy.indexOf(filters.rank);
      const allowedAircrafts = rankHierarchy
        .slice(0, selectedRankIndex + 1)
        .flatMap(rank => rankAircraftMap[rank] || []);

      // Check if any aircraft in the route matches allowed aircrafts
      rankAllowed = allowedAircrafts.some(ac =>
        route.aircraft_names.toLowerCase().includes(ac.toLowerCase())
      );
    }

    return (
      route.flight_number.toLowerCase().includes(filters.flightNumber.toLowerCase()) &&
      route.departure_icao.includes(filters.departureIcao.toUpperCase()) &&
      route.arrival_icao.includes(filters.arrivalIcao.toUpperCase()) &&
      aircraftFilter &&
      rankAllowed &&
      totalMinutes >= minMinutes &&
      totalMinutes <= maxMinutes
    );
  });

  setFiltered(result);
  setPage(1);
}, [filters, data]);


  const formatTime = (h, m) => `${h}:${m.toString().padStart(2, '0')}`;

  const handleRandomRoute = () => {
    if (filtered.length > 0) {
      const random = filtered[Math.floor(Math.random() * filtered.length)];
      setRandomRoute(random);
    }
  };

  const handleAirportSelect = (icaoCode) => {
    if (!showMapFor) return;
    setFilters(prev => ({
      ...prev,
      [showMapFor]: icaoCode,
    }));
    setShowMapFor(null);
  };

  useEffect(() => {
    if (showMapFor && mapRef.current && !leafletMapRef.current) {
      leafletMapRef.current = L.map(mapRef.current).setView([20, 78], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(leafletMapRef.current);

      // Mocked clickable airport selection
      const marker = L.marker([20.5, 78.5]).addTo(leafletMapRef.current);
      marker.bindPopup('Click to select VABB').on('click', () => handleAirportSelect('VABB'));
    }
  }, [showMapFor]);

  const paginatedData = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const getPageNumbers = () => {
    const maxDisplayPages = 5;
    const pageNumbers = [];

    if (totalPages <= maxDisplayPages + 2) {

      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPages = [1, 2, 3, 4, 5];
      const endPages = [totalPages];
      
      if (page <= 3) {
        pageNumbers.push(...startPages, '...', ...endPages);
      } else if (page >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          1,
          '...',
          page - 1,
          page,
          page + 1,
          page + 2,
          page + 3,
          '...',
          totalPages
        );
      }
    }

  return pageNumbers;
  };





  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
{/* Top Title and Banner */}
<div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
  <h1 style={{ margin: 0, whiteSpace: 'nowrap', flex: '0 1 auto' }}>
    Indian Virtual Route Finder
  </h1>
  <img
    src="/1ved-cloud/app/assets/F56EF170-44FF-42E6-99D1-3FC23496F4F2.png"
    alt="Banner"
    style={{
      height: 'auto',
      maxHeight: '6px',
      width: '100%',
      maxWidth: '100%',
      flex: 1,
      alignSelf: 'center'
    }}
  />
</div>

{/* ROW 1: FLIGHT NUMBER + DEP + ARR aligned to full row */}
<div style={{
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  marginTop: '18px',
  marginBottom: '10px'
}}>
  {["flightNumber", "departureIcao", "arrivalIcao"].map(field => (
    <div
      key={field}
      style={{
        flex: '1 1 0', // Stretch to share row equally
        minWidth: '200px',
        position: 'relative'
      }}
    >
      <input
        type="text"
        placeholder={
          field === 'flightNumber'
            ? 'Flight Number'
            : field === 'departureIcao'
              ? 'Departure ICAO'
              : 'Arrival ICAO'
        }
        value={filters[field]}
        onFocus={() => setFocusedField(field)}
        onBlur={() => setTimeout(() => setFocusedField(null), 200)}
        onChange={e =>
          setFilters(prev => ({
            ...prev,
            [field]: e.target.value,
          }))
        }
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #444',
          backgroundColor: '#111',
          color: '#fff',
          boxSizing: 'border-box'
        }}
      />
      {(field === 'departureIcao' || field === 'arrivalIcao') &&
        focusedField === field && (
          <span
            onClick={() => setShowMapFor(field)}
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              color: '#0af',
              fontSize: '13px',
              cursor: 'pointer',
              marginTop: '4px'
            }}
          >
            Pick airport
          </span>
        )}
    </div>
  ))}
</div>

{/* ROW 2: TIME FILTERS */}
<div style={{
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  marginBottom: '12px'
}}>
  {["minTime", "maxTime"].map(field => (
    <div
      key={field}
      style={{
        flex: '1 1 180px',
        minWidth: '160px'
      }}
    >
      <input
        type="text"
        placeholder={field === 'minTime' ? 'Min Time (hrs)' : 'Max Time (hrs)'}
        value={filters[field]}
        onChange={e =>
          setFilters(prev => ({
            ...prev,
            [field]: e.target.value.replace(/\D/g, '') // numbers only
          }))
        }
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #444',
          backgroundColor: '#111',
          color: '#fff',
          boxSizing: 'border-box'
        }}
      />
    </div>
  ))}
</div>

{/* ROW 3: AIRCRAFT + RANK */}
<div style={{
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  marginBottom: '20px'
}}>
  <select
    value={filters.aircraft}
    onChange={e => setFilters({ ...filters, aircraft: e.target.value })}
    style={{
      flex: '1 1 180px',
      minWidth: '160px',
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #444',
      backgroundColor: '#111',
      color: '#fff'
    }}
  >
    <option value=''>Select Aircraft</option>
    {aircraftOptions.map((aircraft, idx) => (
      <option key={idx} value={aircraft}>{aircraft}</option>
    ))}
  </select>

  <select
    value={filters.rank}
    onChange={e => setFilters({ ...filters, rank: e.target.value })}
    style={{
      flex: '1 1 180px',
      minWidth: '160px',
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #444',
      backgroundColor: '#111',
      color: '#fff'
    }}
  >
    <option value=''>Select Rank</option>
    {rankHierarchy.map((rank, idx) => (
      <option key={idx} value={rank}>
        {rank.charAt(0).toUpperCase() + rank.slice(1)}
      </option>
    ))}
  </select>
</div>



      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={handleRandomRoute} style={buttonStyle}>🎲 Random Route</button>
      </div>

      {randomRoute && (
        <div style={{ background: '#222', padding: '10px', marginTop: '10px', borderRadius: '6px' }}>
          <p><strong>#</strong> {randomRoute.flight_number}</p>
          <p><strong>From:</strong> {randomRoute.departure_icao}</p>
          <p><strong>To:</strong> {randomRoute.arrival_icao}</p>
          <p><strong>Aircraft:</strong> {randomRoute.aircraft_names}</p>
          <p><strong>Flight Time:</strong> {formatTime(randomRoute.flight_time_hours, randomRoute.flight_time_minutes)}</p>
        </div>
      )}

      <table style={{ width: '100%', marginTop: '16px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>Flight</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Aircraft</th>
            <th>Flight Time</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((route, index) => {
            const { flight_number, departure_icao, arrival_icao, aircraft_names, flight_time_hours, flight_time_minutes } = route;
            const aircraftIcao = aircraftICAOCodes[aircraft_names];
            const fileLink = `https://www.digitalcrew.app/INVA/pireps/?flight_number=${encodeURIComponent(flight_number)}&departure_icao=${departure_icao}&arrival_icao=${arrival_icao}`;
            const fplLink = `https://www.simbrief.com/system/dispatch.php?orig=${departure_icao}&dest=${arrival_icao}&type=${aircraftIcao}`;

            return (
              <tr key={index}>
                <td data-label="Flight No.">{flight_number}</td>
                <td data-label="From">{departure_icao}</td>
                <td data-label="To">{arrival_icao}</td>
                <td data-label="Aircraft">{aircraft_names}</td>
                <td data-label="Duration">{formatTime(flight_time_hours, flight_time_minutes)}</td>
                <td>
                  <a href={fileLink} target="_blank" rel="noopener noreferrer">
                    <button style={buttonStyle}>File</button>
                  </a>
                </td>
                <td>
                  <a href={fplLink} target="_blank" rel="noopener noreferrer">
                    <button style={{ ...buttonStyle, backgroundColor: '#919090' }}>FPL</button>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {getPageNumbers().map((p, index) => (
          <button
            key={index}
            disabled={p === '...'}
            onClick={() => typeof p === 'number' && setPage(p)}
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #555',
              backgroundColor: p === page ? '#007bff' : '#222',
              color: p === page ? '#fff' : '#ccc',
              cursor: p === '...' ? 'default' : 'pointer',
              minWidth: '40px',
              textAlign: 'center',
            }}
          >
            {p}
          </button>
        ))}
      </div>


      {showMapFor && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{ position: 'relative', width: '90%', height: '80%' }}>
            <button
              onClick={() => setShowMapFor(null)}
              style={{
                position: 'absolute', top: '10px', right: '10px',
                backgroundColor: '#f00', color: '#fff', border: 'none',
                padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', zIndex: 1000
              }}
            >
              Close
            </button>
            <div ref={mapRef} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div>
      <RouteFinder />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);