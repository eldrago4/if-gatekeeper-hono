import type { Metadata } from 'next';
import styles from '/app/styles/Home.module.css';

export const metadata: Metadata = {
  title: '1ved Cloud API',
  description: '1ved Cloud API - Airport Gate Information',
};

const Home = () => {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <h1>1ved Cloud API</h1>
        <p className={styles.tagline}>Providing real-time airport gate information</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>API Methods</h2>
          <p>GET /api/airport-gates</p>
          <p>Parameters:</p>
          <ul>
            <li><strong>ICAO</strong>: Specifies the database table name (required)</li>
            <li><strong>aircraft</strong>: Filters records based on aircraft class (optional)</li>
          </ul>
          <p>Example: <code>aircraft="777"</code> will return records for gates for B777.</p>
        </section>

        <section className={styles.section}>
          <h2>Service Status</h2>
          <p>All services are operational.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>GitHub Repo: <a href="https://github.com/eldrago4/if-gatekeeper-hono">if-gatekeeper-hono</a></p>
      </footer>
    </div>
  );
};

export default Home;