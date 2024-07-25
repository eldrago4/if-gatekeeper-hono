import { Hono } from 'hono'
import { Client } from 'pg'

const app = new Hono()

const client = new Client({
  connectionString: 'postgresql://eldrago:9lYT1WMipcyX@ep-black-meadow-a18ty9xs.ap-southeast-1.aws.neon.tech/gates?sslmode=require'
})

client.connect()

const aircraftClasses = {
  'Cessna 172': 'A',
  'Cirrus SR22': 'A',
  'F-16': 'A',
  'F-22': 'A',
  'A-10 Warthog': 'B',
  'Cessna 208 Caravan': 'B',
  'Bombardier CRJ series': 'B',
  'Citation X': 'B',
  'P-38': 'B',
  'Airbus A321': 'C',
  'Boeing 737 series': 'C',
  'Bombardier Dash-8 Q400': 'C',
  'Embraer E-Jets': 'C',
  'Boeing 757': 'D',
  'Boeing 767': 'D',
  'McDonnell Douglas MD-11/DC-10': 'D',
  'Lockheed C-130 Hercules': 'D',
  'Boeing C-17 Globemaster III': 'D',
  'Airbus A340': 'E',
  'Boeing 747-400': 'E',
  'Boeing 777 series': 'E',
  'Boeing 787 Dreamliner': 'E',
  'Airbus A380': 'F',
  'Boeing 747-8': 'F'
}

app.get('/api/airport-gates', async (c) => {
  const icao = c.req.query('icao')
  const aircraft = c.req.query('aircraft')

  if (!icao) {
    return c.json({ error: 'ICAO code is required' }, 400)
  }

  let query = `SELECT * FROM ${icao}`
  if (aircraft) {
    const aircraftClass = aircraftClasses[aircraft]
    if (!aircraftClass) {
      return c.json({ error: 'Invalid aircraft type' }, 400)
    }
    query += ` WHERE class <= '${aircraftClass}'`
  }

  try {
    const res = await client.query(query)
    return c.json(res.rows)
  } catch (err) {
    return c.json({ error: err.message }, 500)
  }
})

export default app

app.get('/', (c) => {
  return c.json({ message: "Congrats! You've deployed Hono to Vercel" })
})

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('neon connection error', err.stack);
  } else {
    console.log('Connected to the database successfully.');
  }
});