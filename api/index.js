import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { airports } from './data.js';
import { routes } from './data.js';

import pkg from 'pg';
const { Client } = pkg;

// import { readFile } from 'fs/promises';
// import path from 'path';

import { serveStatic } from 'hono/serve-static';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


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

    if (existingRoutes.rowCount > 0) {
      return c.json({ error: "One or more routes already exist in the database." }, 400);
    }

    //  don't exist in the airports table
    const existingICAOsSet = new Set(existingICAOs.rows.map(row => row.icao));
    const missingICAOs = uniqueICAOs.filter(icao => !existingICAOsSet.has(icao));

    if (missingICAOs.length > 0) {
      // Insert missing 
      await inva_client.query(
        `INSERT INTO airports (icao) SELECT * FROM UNNEST($1::text[]) ON CONFLICT DO NOTHING`,
        [missingICAOs]
      );
    }

    // Insert the new routes 
    const routeValues = routes.map(({ fno, startICAO, endICAO }) => [fno, startICAO, endICAO]);
    await inva_client.query(
      `INSERT INTO routes (fnum, starticao, endicao) SELECT * FROM UNNEST($1::text[], $2::text[], $3::text[])`,
      [routes.map(r => r.fno), startICAOs, endICAOs]
    );

    // Send notification
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
});

app.get('/api/fpldirection', async (c) => {
  try {
    const html = await readFile(join(__dirname, 'revpath.html'), 'utf-8');
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

    const expertServer = data.result.filter(server => server.name === 'Expert');

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

app.get('/api/packey', async (c) => {
  try {
    const requestOrigin = c.req.headers.get("origin");

    if (!requestOrigin || (!requestOrigin.endsWith("1ved.cloud") && requestOrigin !== "https://1ved.cloud")) {
      throw new Error("Unauthorized");
    }

    c.header("Access-Control-Allow-Origin", requestOrigin);
    c.header("Access-Control-Allow-Methods", "GET");
    c.header("Access-Control-Allow-Headers", "Content-Type");

    const packerKey = process.env.packerKey;
    if (!packerKey) {
      throw new Error("Missing Packer Key");
    }

    return c.json({ packerKey });
  } catch (err) {
    console.error("Error in /api/packey:", err.message);

    if (err.message === "Unauthorized") {
      return c.json({ error: "Unauthorized" }, 403);
    } else if (err.message === "Missing Packer Key") {
      return c.json({ error: "Server misconfiguration: packerKey is missing" }, 500);
    }

    return c.json({ error: "An unexpected error occurred" }, 500);
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
