import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'INVA Live Map',
  description: 'Interactive Indian Virtual live map and route network on 1ved Cloud.',
};

export default function MapPage() {
  return (
    <main className="mapShell">
      <div id="map" aria-label="Indian Virtual live route map" />

      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
        strategy="beforeInteractive"
      />
      <Script src="https://cdn.jsdelivr.net/npm/leaflet-curve@1.0.0/leaflet.curve.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/leaflet-ant-path/dist/leaflet-ant-path.min.js" strategy="afterInteractive" />
      <Script src="/map/flights.js" strategy="afterInteractive" />

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <style>{`
        html,
        body {
          margin: 0;
          min-height: 100%;
          background: #050816;
        }

        .mapShell {
          min-height: 100dvh;
          width: 100%;
          overflow: hidden;
          background: #050816;
        }

        #map {
          width: 100%;
          height: 100dvh;
          min-height: 560px;
          background: #050816;
        }
      `}</style>
    </main>
  );
}
