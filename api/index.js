import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import pkg from 'pg';
const { Client } = pkg;

// import { readFile } from 'fs/promises';
// import path from 'path';

import { serveStatic } from 'hono/serve-static';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { injectSpeedInsights } from "@vercel/speed-insights"

const app = new Hono();

import dotenv, { config } from 'dotenv';
dotenv.config();
const staffsvval = process.env.staffsv;

const client = new Client({
  connectionString: process.env.neon,
  ssl: {
    rejectUnauthorized: false
  }
});
const inva_client = new Client({
  connectionString: process.env.NEON_INVA_ROUTES,
  ssl: {
    rejectUnauthorized: false
  }
});

const connectDb = async (client) => {
  try {
    await client.connect();
    console.log(`Connected to the ${client.database} database successfully.`);
  } catch (err) {
    console.error(`Error connecting to the ${client.database} database:`, err.stack);
    throw new Error("Database connection failed");
  }
};

await Promise.all([
  connectDb(client),
  connectDb(inva_client),
]);


const aircraftClasses = [
  { name: 'B748', class: 'F' },
  { name: 'A380-800', class: 'F' },
  { name: 'B742', class: 'E' },
  { name: 'B744', class: 'E' },
  { name: 'B777-200ER', class: 'E' },
  { name: 'B777-200LR', class: 'E' },
  { name: 'B777-300ER', class: 'E' },
  { name: 'B777F', class: 'E' },
  { name: 'B787-10', class: 'E' },
  { name: 'B787-8', class: 'E' },
  { name: 'B787-9', class: 'E' },
  { name: 'A330-200F', class: 'E' },
  { name: 'A330-300', class: 'E' },
  { name: 'A330-900neo', class: 'E' },
  { name: 'A340-600', class: 'E' },
  { name: 'A350-900', class: 'E' },
  { name: 'VC-25A', class: 'E' },
  { name: 'B757-200', class: 'D' },
  { name: 'B767-300', class: 'D' },
  { name: 'AC-130', class: 'D' },
  { name: 'C-130H', class: 'D' },
  { name: 'C-130J', class: 'D' },
  { name: 'C-130J-30', class: 'D' },
  { name: 'C-17', class: 'D' },
  { name: 'DC-10', class: 'D' },
  { name: 'DC-10F', class: 'D' },
  { name: 'MD-11', class: 'D' },
  { name: 'MD-11F', class: 'D' },
  { name: 'B717-200', class: 'C' },
  { name: 'B737-700', class: 'C' },
  { name: 'B737-800', class: 'C' },
  { name: 'B737-900', class: 'C' },
  { name: 'A220-300', class: 'C' },
  { name: 'A318-100', class: 'C' },
  { name: 'A319-100', class: 'C' },
  { name: 'A320-200', class: 'C' },
  { name: 'A321-200', class: 'C' },
  { name: 'CRJ-1000', class: 'C' },
  { name: 'CRJ-900', class: 'C' },
  { name: 'Dash-8-Q400', class: 'C' },
  { name: 'E175', class: 'C' },
  { name: 'E190', class: 'C' },
  { name: '208-Caravan', class: 'B' },
  { name: 'A-10', class: 'B' },
  { name: 'Challenger-350', class: 'B' },
  { name: 'CRJ-200', class: 'B' },
  { name: 'CRJ-700', class: 'B' },
  { name: 'P-38', class: 'B' },
  { name: '172-Skyhawk', class: 'A' },
  { name: 'F-14', class: 'A' },
  { name: 'F-16C', class: 'A' },
  { name: 'F-22', class: 'A' },
  { name: 'F/A-18E', class: 'A' },
  { name: 'Spitfire-Mk-VIII', class: 'A' },
  { name: 'SR22-GTS', class: 'A' },
  { name: 'TBM-930', class: 'A' },
  { name: 'XCub', class: 'A' }
];

const gateClasses = ['A', 'B', 'C', 'D', 'E', 'F'];

const getAircraftClass = (aircraftName) => {
  const aircraft = aircraftClasses.find(ac => ac.name === aircraftName);
  return aircraft ? aircraft.class : null;
};

async function sendDiscordWebhook(routes, csvRows) {
  try {
    const jsonMessage = `# 🎉 New Route Added\n\`\`\`json\n${JSON.stringify(routes, null, 4)}\n\`\`\``;
    const csvContent = csvRows.map(e => e.join(";")).join("\n");
    const formData = new FormData();
    formData.append("content", jsonMessage);
    formData.append("file", new Blob([csvContent], { type: "text/csv" }), "routes.csv");
    
    console.log("Sending webhook to:", staffsvval);
    
    const webhookResponse = await fetch(staffsvval, {
      method: "POST",
      body: formData
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error("Error sending Discord webhook:", errorText);
    }
  } catch (webhookError) {
    console.error("Error sending Discord webhook:", webhookError);
  }
}

app.get('/api/inva/airports', async (c) => {
  try {
    return c.json(airports);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});
  
app.get('/api/inva/routes', async (c) => {
  try {
    return c.json(routes);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

app.post('/api/submit-routes', async (c) => {
  const { routes, csvRows } = await c.req.json();

  const startICAOs = routes.map(r => r.startICAO);
  const endICAOs = routes.map(r => r.endICAO);
  const uniqueICAOs = [...new Set([...startICAOs, ...endICAOs])];

  try {
    const [existingRoutes, existingICAOs] = await Promise.all([
      inva_client.query(
        `SELECT starticao, endicao FROM routes 
         WHERE (starticao, endicao) IN (SELECT * FROM UNNEST($1::text[], $2::text[]))
         OR (endicao, starticao) IN (SELECT * FROM UNNEST($1::text[], $2::text[]))`,
        [startICAOs, endICAOs]
      ),
      inva_client.query("SELECT icao FROM airports WHERE icao = ANY($1)", [uniqueICAOs])
    ]);

    const existingRoutesSet = new Set(existingRoutes.rows.map(row => `${row.starticao}-${row.endicao}`));
    const newRoutes = routes.filter(({ startICAO, endICAO }) => 
      !existingRoutesSet.has(`${startICAO}-${endICAO}`) && !existingRoutesSet.has(`${endICAO}-${startICAO}`)
    );

    const existingICAOsSet = new Set(existingICAOs.rows.map(row => row.icao));
    const missingICAOs = uniqueICAOs.filter(icao => !existingICAOsSet.has(icao));

    if (missingICAOs.length > 0) {
      await inva_client.query(
        `INSERT INTO airports (icao) SELECT * FROM UNNEST($1::text[]) ON CONFLICT DO NOTHING`,
        [missingICAOs]
      );
    }

    if (newRoutes.length > 0) {
      await inva_client.query(
        `INSERT INTO routes (fnum, starticao, endicao) SELECT * FROM UNNEST($1::text[], $2::text[], $3::text[])`,
        [newRoutes.map(r => r.fno), newRoutes.map(r => r.startICAO), newRoutes.map(r => r.endICAO)]
      );
    }

    await sendDiscordWebhook(routes, csvRows); 
    return c.json({ message: `Routes added successfully!` });
  } catch (error) {
    return c.json({ error: "An error occurred.", details: error.message }, 500);
  }
});





app.get('/api/airport-gates/:icao', async (c) => {
  const icao = c.req.param('icao');
  const aircraft = c.req.query('aircraft');

  if (!icao) {
    return c.json({ error: 'ICAO code is required' }, 400);
  }

  let query = `SELECT * FROM ${icao}`;
  if (aircraft) {
    const aircraftClass = getAircraftClass(aircraft);
    if (!aircraftClass) {
      return c.json({ error: 'Invalid aircraft type' }, 400);
    }
    const classIndex = gateClasses.indexOf(aircraftClass);
    const validClasses = gateClasses.slice(classIndex).map(cls => `'${cls}'`).join(', ');
    query += ` WHERE class IN (${validClasses})`;
  }

  try {
    const res = await client.query(query);
    return c.json(res.rows);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/static/*', serveStatic({ root: '.' }));

app.get('/api', async (c) => {
  try {
    const html = await readFile(join(__dirname, 'leaflet.html'), 'utf-8');
    return c.html(html);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
},
injectSpeedInsights()
);

app.get('/api/fpldirection', async (c) => {
  try {
    const html = await readFile(join(__dirname, 'revpath.html'), 'utf-8');
    return c.html(html);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
}
);
app.get('/api/routes', async (c) => {
  try {
    const html = await readFile(join(__dirname, 'routes.html'), 'utf-8');
    return c.html(html);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
}
);
const API_KEY = process.env.LIVE_API_KEY
app.get('/api/v2/sessions', async (c) => {
  try {
    // Fetch data from the Infinite Flight API
    const response = await fetch('https://api.infiniteflight.com/public/v2/sessions', {
      headers: {
        'Authorization': `Bearer ${API_KEY}` 
      }
    });
    
    const data = await response.json();

    if (data.errorCode !== 0) {
      return c.json({ error: 'Error fetching sessions from Infinite Flight API' }, 500);
    }

    const expertServer = data.result.filter(server => server.name.includes('Expert'));

    if (expertServer.length === 0) {
      return c.json({ error: 'No Expert server found' }, 404);
    }

    return c.json({ result: expertServer });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

app.get('/api/addroute', async (c) => {
  try {
    const html = await readFile(join(__dirname, 'addroute.html'), 'utf-8');
    return c.html(html);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
}
);

app.get('/api/v2/sessions/:session_id/flights', async (c) => {
  const session_id = c.req.param('session_id');
  
  try {
    const response = await fetch(`https://api.infiniteflight.com/public/v2/sessions/${session_id}/flights`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}` 
      }
    });

    const data = await response.json();

    if (data.errorCode !== 0) {
      return c.json({ error: 'Error fetching flights from Infinite Flight API' }, 500);
    }

    // Filter flights whose callsigns end with 'dddIN' 
    const filteredFlights = data.result
      .filter(flight => /\d{3}IN(?: Heavy| Super)?$/.test(flight.callsign))
      .map(flight => ({
        username: flight.username,
        callsign: flight.callsign,
        latitude: flight.latitude,
        longitude: flight.longitude,
        altitude: flight.altitude,
        speed: flight.speed,
        verticalSpeed: flight.verticalSpeed,
        track: flight.track,
        lastReport: flight.lastReport,
        flightId: flight.flightId, 
        heading: flight.heading,
      }));

   
    return c.json({ result: filteredFlights });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

app.get('/api/v2/sessions/:sessionId/flights/:flightId/route', async (c) => {
  const sessionId = c.req.param('sessionId');
  const flightId = c.req.param('flightId');

  try {
    
    const response = await fetch(`https://api.infiniteflight.com/public/v2/sessions/${sessionId}/flights/${flightId}/route`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}` 
      }
    });

    const data = await response.json();

    
    if (data.errorCode !== 0) {
      return c.json({ error: 'Error fetching flight route from Infinite Flight API' }, 500);
    }

    
    return c.json({ result: data.result });
  } catch (err) {
   
    return c.json({ error: err.message }, 500);
  }
});

app.get('/api/v2/sessions/:sessionId/flights/:flightId/flightplan', async (c) => {
  const sessionId = c.req.param('sessionId');
  const flightId = c.req.param('flightId');

  try {
    
    const response = await fetch(`https://api.infiniteflight.com/public/v2/sessions/${sessionId}/flights/${flightId}/flightplan`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}` 
      }
    });

    const data = await response.json();

    
    if (data.errorCode !== 0) {
      return c.json({ error: 'Error fetching flight plan from Infinite Flight API' }, 500);
    }

    
    return c.json({ result: data.result });
  } catch (err) {
    
    return c.json({ error: err.message }, 500);
  }
});

const SIMBRIEF_API_URL = 'https://www.simbrief.com/api/xml.fetcher.php?username={}&json=1';

app.get('/api/simbrief', async (c) => {
    const username = c.req.query('username');

    if (!username) {
        return c.json({ error: 'Missing required parameter: username' }, 400);
    }

    try {
       
        const response = await fetch(SIMBRIEF_API_URL.replace('{}', username));

        if (!response.ok) {
            return c.json({ error: 'Failed to fetch data from SimBrief API' }, response.status);
        }

        const fplData = await response.json();

        const checkEmpty = (value) => {
    return (typeof value === 'object' && Object.keys(value).length === 0) || value === '' || value === null || value === undefined ? 'N/A' : value;
};
        const aircraft = fplData['aircraft'];
        const general = fplData['general'];
        const origin = fplData['origin'];
        const destination = fplData['destination'];
        const fuel = fplData['fuel'];
        const weights = fplData['weights'];
        const params = fplData['params'];
        const tlr = fplData['tlr'];
        const files = fplData['files'];
        const images = fplData['images'];
        const stepclimbs = general['stepclimb_string'].split('/');
        const cruise_wpt = stepclimbs[stepclimbs.length - 2];
        const cruise_alt = stepclimbs[stepclimbs.length - 1].replace(/^0+/, '');
        
        const takeoffTlr = tlr['takeoff'];
        const landingTlr = tlr['landing'];
        const plannedRunway = takeoffTlr['conditions']['planned_runway'];
        const destinationPlannedRunway = landingTlr['conditions']['planned_runway'];
        const runwayData = takeoffTlr['runway'].find(runway => runway['identifier'] === plannedRunway);
        const destinationRunwayData = landingTlr['runway'].find(runway => runway['identifier'] === destinationPlannedRunway);

        
        const routeMapUrl = images['directory'] + images['map'][0]['link'];
        const verticalProfileMap = images['map'].find(image => image['name'] === 'Vertical profile');
        const verticalProfileUrl = verticalProfileMap ? `https://www.simbrief.com/ofp/uads/${verticalProfileMap['link']}` : null;

        
        const pdfFileUrl = files['directory'] + files['pdf']['link'];

        const cruiseAltitude = cruise_wpt + '/FL' + cruise_alt;
        const flightId = checkEmpty(general['icao_airline']) 
    ? general['flight_number'] 
    : `${general['icao_airline']}${general['flight_number']}`;


        const result = {
            flight_id: flightId,
            origin: {
                icao: origin['icao_code'],
                metar: origin['metar'],
                elevation: origin['elevation'],
                planned_runway: plannedRunway
            },
            destination: {
                icao: destination['icao_code'],
                metar: destination['metar'],
                elevation: destination['elevation'],
                planned_runway: destinationPlannedRunway
            },
            aircraft: {
                type: aircraft['icaocode']
            },
            weights: {
                pax: weights['pax_count'],
                cargo: weights['cargo']
            },
            fuel: {
                required: fuel['plan_ramp']
            },
            general: {
                airac: params['airac'],
                units: params['units'],
                route: general['route'],
                route_distance: general['route_distance'],
                avg_wind_comp: general['avg_wind_comp'],
                avg_wind_dir: general['avg_wind_dir'],
                avg_wind_spd: general['avg_wind_spd'],
                cruise_mach: general['cruise_mach'],
                climb_profile: general['climb_profile'],
                descent_profile: general['descent_profile'],
                cruise_profile: general['cruise_profile'],
                cruise_altitude: cruiseAltitude,
                stepclimb: general['stepclimb_string']
            },
            takeoff_tlr: {
                flap_setting: runwayData['flap_setting'],
                speeds_v1: checkEmpty(runwayData['speeds_v1']),
                speeds_vr: checkEmpty(runwayData['speeds_vr']),
                speeds_v2: checkEmpty(runwayData['speeds_v2']),
                length: runwayData['length'],
                true_course: runwayData['true_course'],
                conditions: {
                    wind_direction: takeoffTlr['conditions']['wind_direction'],
                    wind_speed: takeoffTlr['conditions']['wind_speed']
                }
            },
            landing_tlr: {
                flap_setting: landingTlr['distance_dry']['flap_setting'],
                speeds_vref: checkEmpty(landingTlr['distance_dry']['speeds_vref']),
                length: destinationRunwayData['length'],
                true_course: destinationRunwayData['true_course'],
                conditions: {
                    wind_direction: landingTlr['conditions']['wind_direction'],
                    wind_speed: landingTlr['conditions']['wind_speed']
                }
            },
            route_map_url: routeMapUrl,
            vertical_profile_url: verticalProfileUrl,
            pdf_file_url: pdfFileUrl
        };

        return c.json(result);

    } catch (error) {
        return c.json({ error: `Error fetching flight plan: ${error.message}` }, 500);
    }
});


// ═══════════════════════════════════════════════════════════════════════════
// AgriMitra — AI Crop Yield Prediction API
// ═══════════════════════════════════════════════════════════════════════════

// ── Initialise AgriMitra tables (idempotent) ────────────────────────────────
(async () => {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS agrimitra_farmers (
        id          SERIAL PRIMARY KEY,
        name        TEXT NOT NULL,
        phone       TEXT UNIQUE NOT NULL,
        village     TEXT,
        district    TEXT,
        language    TEXT DEFAULT 'mr',
        created_at  TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS agrimitra_fields (
        id                SERIAL PRIMARY KEY,
        farmer_id         INTEGER REFERENCES agrimitra_farmers(id) ON DELETE CASCADE,
        polygon_geo_json  TEXT,
        area_hectares     FLOAT,
        label             TEXT,
        created_at        TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS agrimitra_predictions (
        id                    SERIAL PRIMARY KEY,
        field_id              INTEGER REFERENCES agrimitra_fields(id) ON DELETE SET NULL,
        crop_type             TEXT,
        predicted_yield       FLOAT,
        uncertainty_band      FLOAT,
        fertilizer_advisory   TEXT,
        irrigation_advisory   TEXT,
        market_advisory       TEXT,
        model_version         TEXT DEFAULT 'heuristic_v1.0',
        inference_latency_ms  INTEGER DEFAULT 0,
        is_offline            BOOLEAN DEFAULT FALSE,
        created_at            TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('AgriMitra tables ready.');
  } catch (err) {
    console.error('AgriMitra table init error:', err.message);
  }
})();

// ── Advisory helpers ────────────────────────────────────────────────────────
function amFertilizerAdvisory(cropType, iot) {
  const n = iot?.soilN ?? 100;
  const p = iot?.soilP ?? 50;
  switch (cropType) {
    case 'Rice':
      return n < 80
        ? 'Apply 60 kg/ha Urea in 2 splits (basal + tillering)'
        : p < 30 ? 'Apply 40 kg/ha SSP at basal dose'
                 : 'Apply 50 kg/ha Urea at top-dressing stage';
    case 'Wheat':
      return n < 80 ? 'Apply 60 kg/ha Urea split in 3 doses' : 'Apply 40 kg/ha Urea at CRI stage';
    case 'Soybean':   return 'Apply rhizobium seed treatment + 20 kg/ha starter N';
    case 'Sugarcane': return 'Apply 120 kg/ha Urea in 3 splits (0, 60, 120 days)';
    default:          return 'Follow state agriculture department guidelines';
  }
}

function amIrrigationAdvisory(iot) {
  const m = iot?.moisture ?? 35;
  if (m < 20) return 'Soil moisture critically low (' + m.toFixed(0) + '%). Irrigate 30-40 mm immediately.';
  if (m < 30) return 'Soil moisture low (' + m.toFixed(0) + '%). Schedule irrigation within 48 hours.';
  return 'Soil moisture adequate (' + m.toFixed(0) + '%). Next irrigation in 7-10 days.';
}

function amMarketAdvisory(cropType, plantingDate, yieldPred) {
  const maturity = { Rice: 120, Wheat: 135, Soybean: 95, Sugarcane: 365 };
  const msp      = { Rice: 2183, Wheat: 2275, Soybean: 4600, Sugarcane: 315 };
  const days     = maturity[cropType] ?? 120;
  const price    = msp[cropType] ?? 2000;
  const plant    = plantingDate ? new Date(plantingDate) : new Date();
  const harvest  = new Date(plant.getTime() + days * 86_400_000);
  const s        = new Date(harvest.getTime() + 15 * 86_400_000);
  const e        = new Date(harvest.getTime() + 40 * 86_400_000);
  const fmt = d => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  return 'Best selling window: ' + fmt(s) + ' - ' + fmt(e) + ' ' + e.getFullYear() +
    '. MSP: Rs.' + price + '/quintal. Est. revenue: Rs.' +
    Math.round(yieldPred * price).toLocaleString('en-IN') +
    '. Contact nearest APMC mandi 1 week before harvest.';
}

function amPredictYield(cropType, iot) {
  const base = { Rice: 18.4, Wheat: 18.4, Soybean: 12.0, Sugarcane: 650.0 }[cropType] ?? 15.0;
  if (!iot) return base;
  const n  = iot.soilN    ?? 100;
  const p  = iot.soilP    ?? 50;
  const m  = iot.moisture ?? 35;
  const ph = iot.ph       ?? 6.5;
  const sf =
    Math.min(1, n / 120) * 0.4 +
    Math.min(1, p / 60)  * 0.3 +
    (m >= 25 && m <= 60     ? 1.0 : 0.7) * 0.2 +
    (ph >= 6.0 && ph <= 7.5 ? 1.0 : 0.8) * 0.1;
  return parseFloat((base * sf * (0.93 + Math.random() * 0.14)).toFixed(2));
}

const cropMae = { Rice: 1.83, Wheat: 2.05, Soybean: 1.47, Sugarcane: 3.21 };

// ── Maharashtra APMC Mandis ─────────────────────────────────────────────────
const maharashtraMandis = [
  { name: 'Kankavli APMC',        district: 'Sindhudurg', lat: 16.55, lon: 73.72, phone: '02367-232100', isOpen: true  },
  { name: 'Sindhudurg APMC',      district: 'Sindhudurg', lat: 16.35, lon: 73.73, phone: '02362-228850', isOpen: true  },
  { name: 'Kolhapur APMC',        district: 'Kolhapur',   lat: 16.70, lon: 74.23, phone: '0231-2690456', isOpen: true  },
  { name: 'Sangli APMC',          district: 'Sangli',     lat: 16.86, lon: 74.57, phone: '0233-2322222', isOpen: true  },
  { name: 'Pune APMC (Gultekdi)', district: 'Pune',       lat: 18.48, lon: 73.86, phone: '020-24264685', isOpen: true  },
  { name: 'Nashik APMC',          district: 'Nashik',     lat: 19.99, lon: 73.77, phone: '0253-2316711', isOpen: true  },
  { name: 'Aurangabad APMC',      district: 'Aurangabad', lat: 19.87, lon: 75.34, phone: '0240-2335511', isOpen: true  },
  { name: 'Nagpur APMC',          district: 'Nagpur',     lat: 21.14, lon: 79.09, phone: '0712-2560356', isOpen: true  },
  { name: 'Latur APMC',           district: 'Latur',      lat: 18.40, lon: 76.57, phone: '02382-252333', isOpen: false },
  { name: 'Solapur APMC',         district: 'Solapur',    lat: 17.68, lon: 75.90, phone: '0217-2310500', isOpen: true  },
  { name: 'Ratnagiri APMC',       district: 'Ratnagiri',  lat: 16.99, lon: 73.30, phone: '02352-222543', isOpen: true  },
];

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ── POST /infer ──────────────────────────────────────────────────────────────
app.post('/infer', async (c) => {
  const t0 = Date.now();
  try {
    const { cropType = 'Rice', iotSensorData, plantingDate } = await c.req.json();
    const yieldPred = amPredictYield(cropType, iotSensorData);
    return c.json({
      predictedYield:     yieldPred,
      uncertaintyBand:    cropMae[cropType] ?? 2.0,
      modelVersion:       'heuristic_v1.0',
      inferenceLatencyMs: Date.now() - t0,
      isOffline:          false,
      cropType,
      fertilizerAdvisory: amFertilizerAdvisory(cropType, iotSensorData),
      irrigationAdvisory: amIrrigationAdvisory(iotSensorData),
      marketAdvisory:     amMarketAdvisory(cropType, plantingDate, yieldPred),
    });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

// ── POST /api/predict ────────────────────────────────────────────────────────
app.post('/api/predict', async (c) => {
  const t0 = Date.now();
  try {
    const { cropType = 'Rice', iotSensorData, plantingDate, fieldId } = await c.req.json();
    const yieldPred = amPredictYield(cropType, iotSensorData);
    const result = {
      predictedYield:     yieldPred,
      uncertaintyBand:    cropMae[cropType] ?? 2.0,
      modelVersion:       'heuristic_v1.0',
      inferenceLatencyMs: Date.now() - t0,
      isOffline:          false,
      cropType,
      fertilizerAdvisory: amFertilizerAdvisory(cropType, iotSensorData),
      irrigationAdvisory: amIrrigationAdvisory(iotSensorData),
      marketAdvisory:     amMarketAdvisory(cropType, plantingDate, yieldPred),
    };
    if (fieldId) {
      client.query(
        'INSERT INTO agrimitra_predictions ' +
        '(field_id,crop_type,predicted_yield,uncertainty_band,' +
        'fertilizer_advisory,irrigation_advisory,market_advisory,' +
        'model_version,inference_latency_ms) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
        [fieldId, result.cropType, result.predictedYield, result.uncertaintyBand,
         result.fertilizerAdvisory, result.irrigationAdvisory, result.marketAdvisory,
         result.modelVersion, result.inferenceLatencyMs]
      ).catch(() => {});
    }
    return c.json(result);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

// ── POST/GET /api/farmers ────────────────────────────────────────────────────
app.post('/api/farmers', async (c) => {
  try {
    const { name, phone, village = '', district = '', language = 'mr' } = await c.req.json();
    if (!name || !phone) return c.json({ error: 'name and phone are required' }, 400);
    const res = await client.query(
      'INSERT INTO agrimitra_farmers (name,phone,village,district,language) ' +
      'VALUES ($1,$2,$3,$4,$5) ' +
      'ON CONFLICT (phone) DO UPDATE SET name=$1,village=$3,district=$4,language=$5 ' +
      'RETURNING id,name,phone,village,district,language,created_at',
      [name.trim(), phone.trim(), village, district, language]
    );
    return c.json(res.rows[0], 201);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

app.get('/api/farmers/:id', async (c) => {
  try {
    const res = await client.query('SELECT * FROM agrimitra_farmers WHERE id=$1', [c.req.param('id')]);
    if (!res.rows.length) return c.json({ error: 'Farmer not found' }, 404);
    return c.json(res.rows[0]);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

// ── POST/GET /api/fields ─────────────────────────────────────────────────────
app.post('/api/fields', async (c) => {
  try {
    const { farmerId, polygonGeoJson, areaHectares, label = 'My Field' } = await c.req.json();
    const res = await client.query(
      'INSERT INTO agrimitra_fields (farmer_id,polygon_geo_json,area_hectares,label) ' +
      'VALUES ($1,$2,$3,$4) RETURNING *',
      [farmerId ?? null, polygonGeoJson, areaHectares, label]
    );
    return c.json(res.rows[0], 201);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

app.get('/api/fields', async (c) => {
  try {
    const farmerId = c.req.query('farmerId');
    const res = farmerId
      ? await client.query('SELECT * FROM agrimitra_fields WHERE farmer_id=$1 ORDER BY created_at DESC', [farmerId])
      : await client.query('SELECT * FROM agrimitra_fields ORDER BY created_at DESC LIMIT 100');
    return c.json(res.rows);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

// ── GET /api/market/msp  (government announced MSP 2023-24) ─────────────────
app.get('/api/market/msp', (c) => c.json({
  year: 2023,
  data: [
    { crop: 'Rice',        variety: 'Common',   price: 2183, unit: '/qtl' },
    { crop: 'Wheat',       variety: 'All',       price: 2275, unit: '/qtl' },
    { crop: 'Soybean',     variety: 'Yellow',   price: 4600, unit: '/qtl' },
    { crop: 'Sugarcane',   variety: 'FRP',       price: 315,  unit: '/qtl' },
    { crop: 'Maize',       variety: 'All',       price: 2090, unit: '/qtl' },
    { crop: 'Cotton',      variety: 'Medium',   price: 6620, unit: '/qtl' },
    { crop: 'Groundnut',   variety: 'In shell', price: 6377, unit: '/qtl' },
    { crop: 'Tur (Arhar)', variety: 'All',      price: 7000, unit: '/qtl' },
  ],
}));

// ── GET /api/market/prices  (live AGMARKNET data via data.gov.in) ─────────────
// Query params: state, district, commodity, date (DD/MM/YYYY), limit, offset
const DATA_GOV_KEY = process.env.DATA_GOV_KEY || '579b464db66ec23bdd0000019c2c6fd04bc94be57c33063c3c1baf4a';
const DATA_GOV_RES = '35985678-0d79-46b4-9ed6-6f13308a1d24';

app.get('/api/market/prices', async (c) => {
  try {
    const state     = c.req.query('state')     || 'Maharashtra';
    const district  = c.req.query('district')  || '';
    const commodity = c.req.query('commodity') || '';
    const date      = c.req.query('date')      || '';
    const limit     = c.req.query('limit')     || '20';
    const offset    = c.req.query('offset')    || '0';

    const url = new URL('https://api.data.gov.in/resource/' + DATA_GOV_RES);
    url.searchParams.set('api-key', DATA_GOV_KEY);
    url.searchParams.set('format',  'json');
    url.searchParams.set('limit',   limit);
    url.searchParams.set('offset',  offset);
    if (state)     url.searchParams.set('filters[State]',        state);
    if (district)  url.searchParams.set('filters[District]',     district);
    if (commodity) url.searchParams.set('filters[Commodity]',    commodity);
    if (date)      url.searchParams.set('filters[Arrival_Date]', date);

    const resp = await fetch(url.toString(), { headers: { accept: 'application/json' } });
    if (!resp.ok) return c.json({ error: `data.gov.in error: ${resp.status}` }, 502);
    const body = await resp.json();
    return c.json(body);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

// ── GET /api/market/mandi ────────────────────────────────────────────────────
// lat + lon → nearest APMC from static list; also fetches live prices for district
app.get('/api/market/mandi', async (c) => {
  const lat = parseFloat(c.req.query('lat') ?? '0');
  const lon = parseFloat(c.req.query('lon') ?? '0');
  if (!lat || !lon) return c.json({ error: 'lat and lon are required' }, 400);

  const withDist = maharashtraMandis
    .map(m => ({ ...m, distanceKm: +haversineKm(lat, lon, m.lat, m.lon).toFixed(1) }))
    .sort((a, b) => a.distanceKm - b.distanceKm);

  const nearest = withDist[0];

  // Fetch today's prices for nearest district from AGMARKNET
  let todayPrices = [];
  try {
    const priceUrl = new URL('https://api.data.gov.in/resource/' + DATA_GOV_RES);
    priceUrl.searchParams.set('api-key', DATA_GOV_KEY);
    priceUrl.searchParams.set('format', 'json');
    priceUrl.searchParams.set('limit', '10');
    priceUrl.searchParams.set('filters[State]', 'Maharashtra');
    priceUrl.searchParams.set('filters[District]', nearest.district);
    const pr = await fetch(priceUrl.toString(), { headers: { accept: 'application/json' } });
    if (pr.ok) {
      const pd = await pr.json();
      todayPrices = pd.records ?? [];
    }
  } catch (_) {}

  return c.json({ nearest: { ...nearest, todayPrices }, all: withDist });
});

// ── GET /api/health ──────────────────────────────────────────────────────────
app.get('/api/health', (c) => c.json({ status: 'ok', services: ['if-gatekeeper', 'agrimitra'] }));



// ═══════════════════════════════════════════════════════════════════════════
// Bhoonidhi ISRO Satellite Data Proxy
// Centralises credentials so clients (mobile app, AI pipeline) never
// need to store the NRSC username/password.
// ═══════════════════════════════════════════════════════════════════════════

const BHOONIDHI_API  = process.env.BHOONIDHI_API  || 'https://bhoonidhi.nrsc.gov.in/bhoonidhi-api';
const BHOONIDHI_USER = process.env.BHOONIDHI_USER || 'ved4';
const BHOONIDHI_PASS = process.env.BHOONIDHI_PASS || 'VedBapardekar@1';

let _bToken = null;
let _bTokenExpiry = 0;

async function getBhooinidhiToken() {
  if (_bToken && Date.now() < _bTokenExpiry) return _bToken;
  const resp = await fetch(BHOONIDHI_API + '/auth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: BHOONIDHI_USER, password: BHOONIDHI_PASS }),
  });
  if (!resp.ok) throw new Error('Bhoonidhi auth failed: ' + resp.status);
  const d = await resp.json();
  _bToken = d.accessToken ?? d.access_token ?? d.token;
  // Refresh 5 min before expiry; default 1 hour if not specified
  const expiresIn = d.expiresIn ?? d.expires_in ?? 3600;
  _bTokenExpiry = Date.now() + (expiresIn - 300) * 1000;
  return _bToken;
}

// GET /api/bhoonidhi/token — returns a short-lived token for clients that
// need to call the Bhoonidhi API directly (e.g. AI training script)
app.get('/api/bhoonidhi/token', async (c) => {
  try {
    const token = await getBhooinidhiToken();
    return c.json({ token, expiresAt: new Date(_bTokenExpiry).toISOString() });
  } catch (err) {
    return c.json({ error: err.message }, 502);
  }
});

// POST /api/bhoonidhi/search — proxies STAC search to Bhoonidhi
// Body: { bbox, datetime, collections, limit }
app.post('/api/bhoonidhi/search', async (c) => {
  try {
    const token = await getBhooinidhiToken();
    const body  = await c.req.json();
    const resp  = await fetch(BHOONIDHI_API + '/data/search', {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    });
    if (!resp.ok) {
      const err = await resp.text();
      return c.json({ error: 'Bhoonidhi search failed', details: err }, resp.status);
    }
    return c.json(await resp.json());
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

// GET /api/bhoonidhi/download-url?assetUrl=<encoded> — returns a pre-auth'd
// redirect URL so clients can download GeoTIFFs without storing credentials.
// We proxy the redirect rather than streaming the full file (avoids Vercel limits).
app.get('/api/bhoonidhi/download-url', async (c) => {
  const assetUrl = c.req.query('assetUrl');
  if (!assetUrl) return c.json({ error: 'assetUrl query param required' }, 400);
  try {
    const token = await getBhooinidhiToken();
    // Return signed URL (client fetches the file directly from NRSC CDN)
    const separator = assetUrl.includes('?') ? '&' : '?';
    const signedUrl = assetUrl + separator + 'token=' + encodeURIComponent(token);
    return c.json({ url: signedUrl, token });
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

// POST /api/bhoonidhi/collections — list available datasets
app.get('/api/bhoonidhi/collections', async (c) => {
  try {
    const token = await getBhooinidhiToken();
    const resp  = await fetch(BHOONIDHI_API + '/collections', {
      headers: { 'Authorization': 'Bearer ' + token },
    });
    return c.json(await resp.json());
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});


app.notFound((c) => {
  throw new Error('Not Found');
});

app.onError(async (err, c) => {
  try {
    const html = await readFile(join(__dirname, '404.html'), 'utf-8');
    console.error(`${err}`);
    return c.html(html);
  } catch (readErr) {
    console.error('Error reading error page~', readErr);
    return c.text('Internal Server Error', 500);
  }
}); 

const handler = handle(app);

export const GET = handler;
export const POST = handler;
// export const PATCH = handler;
// export const PUT = handler;
export const OPTIONS = handler;
