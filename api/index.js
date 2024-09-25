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

import { injectSpeedInsights } from "@vercel/speed-insights"

const app = new Hono();

import dotenv, { config } from 'dotenv';
dotenv.config();

const client = new Client({
  connectionString: process.env.neon,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect(async (err) => {
  if (err) {
    console.error('neon connection ', err.stack);

    setTimeout(() => {
      client.connect(async (err) => {
        if (err) {
          console.error('neon connection ', err.stack);
        } else {
          console.log('Connected to the database successfully.');
        }
      });
    }, 5000); // Retry after 5 seconds
  } else {
    console.log('Connected to the database successfully.');
  }
});

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

app.get('/api/v2/sessions', async (c) => {
  try {
    // Fetch data from the Infinite Flight API
    const response = await fetch('https://api.infiniteflight.com/public/v2/sessions', {
      headers: {
        'Authorization': `Bearer jvr8xfkoobd7vogtjq9xehellk23g9g0` // Make sure to set your API key in the environment variable
      }
    });
    
    const data = await response.json();

    if (data.errorCode !== 0) {
      return c.json({ error: 'Error fetching sessions from Infinite Flight API' }, 500);
    }

    // Filter the result to include only the "Expert" server
    const expertServer = data.result.filter(server => server.name === 'Expert');

    if (expertServer.length === 0) {
      return c.json({ error: 'No Expert server found' }, 404);
    }

    // Return the filtered server information
    return c.json({ result: expertServer });
  } catch (err) {
    // Catch and return any errors
    return c.json({ error: err.message }, 500);
  }
});

app.get('/api/v2/sessions/:session_id/flights', async (c) => {
  const session_id = c.req.param('session_id');
  
  try {
    // Fetch data from the Infinite Flight API
    const response = await fetch(`https://api.infiniteflight.com/public/v2/sessions/${session_id}/flights`, {
      headers: {
        'Authorization': `Bearer jvr8xfkoobd7vogtjq9xehellk23g9g0` // Use your API key from .env
      }
    });

    const data = await response.json();

    // Check if the API returned an error
    if (data.errorCode !== 0) {
      return c.json({ error: 'Error fetching flights from Infinite Flight API' }, 500);
    }

    // Filter flights whose callsigns end with 'dddIN' where d is a digit
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
        flightId: flight.flightId, // Optionally keep flightId if needed
        heading: flight.heading,
      }));

    // Return the filtered flights as JSON
    return c.json({ result: filteredFlights });
  } catch (err) {
    // Catch and return any errors
    return c.json({ error: err.message }, 500);
  }
});

app.get('/api/v2/sessions/:sessionId/flights/:flightId/route', async (c) => {
  const sessionId = c.req.param('sessionId');
  const flightId = c.req.param('flightId');

  try {
    // Fetch data from the Infinite Flight API
    const response = await fetch(`https://api.infiniteflight.com/public/v2/sessions/${sessionId}/flights/${flightId}/route`, {
      headers: {
        'Authorization': `Bearer jvr8xfkoobd7vogtjq9xehellk23g9g0` // Use your API key from .env
      }
    });

    const data = await response.json();

    // Check if the API returned an error
    if (data.errorCode !== 0) {
      return c.json({ error: 'Error fetching flight route from Infinite Flight API' }, 500);
    }

    // Return the flight route as is (as per the API response)
    return c.json({ result: data.result });
  } catch (err) {
    // Catch and return any errors
    return c.json({ error: err.message }, 500);
  }
});

app.get('/api/v2/sessions/:sessionId/flights/:flightId/flightplan', async (c) => {
  const sessionId = c.req.param('sessionId');
  const flightId = c.req.param('flightId');

  try {
    // Fetch data from the Infinite Flight API
    const response = await fetch(`https://api.infiniteflight.com/public/v2/sessions/${sessionId}/flights/${flightId}/flightplan`, {
      headers: {
        'Authorization': `Bearer jvr8xfkoobd7vogtjq9xehellk23g9g0` // Use your API key from .env
      }
    });

    const data = await response.json();

    // Check if the API returned an error
    if (data.errorCode !== 0) {
      return c.json({ error: 'Error fetching flight plan from Infinite Flight API' }, 500);
    }

    // Return the flight plan as is (as per the API response)
    return c.json({ result: data.result });
  } catch (err) {
    // Catch and return any errors
    return c.json({ error: err.message }, 500);
  }
});


const handler = handle(app);

export const GET = handler;
// export const POST = handler;
// export const PATCH = handler;
// export const PUT = handler;
export const OPTIONS = handler;