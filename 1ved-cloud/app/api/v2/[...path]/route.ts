import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const IF_BASE = 'https://api.infiniteflight.com/public/v2';

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

async function fetchInfiniteFlight(path: string) {
  const apiKey = process.env.LIVE_API_KEY;

  if (!apiKey) {
    return {
      ok: false,
      status: 500,
      data: { error: 'LIVE_API_KEY is not configured' },
    };
  }

  const response = await fetch(`${IF_BASE}${path}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: 'no-store',
  });

  const data = await response.json().catch(() => null);
  return { ok: response.ok, status: response.status, data };
}

export async function GET(
  _request: Request,
  { params }: { params: { path?: string[] } },
) {
  const path = params.path ?? [];

  try {
    if (path.length === 1 && path[0] === 'sessions') {
      const result = await fetchInfiniteFlight('/sessions');
      if (!result.ok) return json(result.data, result.status);

      if (result.data?.errorCode !== 0) {
        return json({ error: 'Error fetching sessions from Infinite Flight API' }, 500);
      }

      const expertServers = result.data.result.filter((session: any) =>
        session.name?.includes('Expert') || session.worldType === 3,
      );

      if (expertServers.length === 0) {
        return json({ error: 'No Expert server found' }, 404);
      }

      return json({ result: expertServers });
    }

    if (path.length === 3 && path[0] === 'sessions' && path[2] === 'flights') {
      const sessionId = path[1];
      const result = await fetchInfiniteFlight(`/sessions/${sessionId}/flights`);
      if (!result.ok) return json(result.data, result.status);

      if (result.data?.errorCode !== 0) {
        return json({ error: 'Error fetching flights from Infinite Flight API' }, 500);
      }

      const filteredFlights = result.data.result
        .filter((flight: any) => /\d{3}IN(?: Heavy| Super)?$/.test(flight.callsign))
        .map((flight: any) => ({
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

      return json({ result: filteredFlights });
    }

    if (
      path.length === 5 &&
      path[0] === 'sessions' &&
      path[2] === 'flights' &&
      (path[4] === 'route' || path[4] === 'flightplan')
    ) {
      const [sessionId, flightId, endpoint] = [path[1], path[3], path[4]];
      const result = await fetchInfiniteFlight(`/sessions/${sessionId}/flights/${flightId}/${endpoint}`);
      if (!result.ok) return json(result.data, result.status);

      if (result.data?.errorCode !== 0) {
        return json({ error: `Error fetching flight ${endpoint} from Infinite Flight API` }, 500);
      }

      return json({ result: result.data.result });
    }

    return json({ error: 'Not found' }, 404);
  } catch (error: any) {
    return json({ error: error.message }, 500);
  }
}
