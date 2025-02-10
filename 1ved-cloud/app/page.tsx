import Head from 'next/head';
import styles from '/app/styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>1ved Cloud API</title>
        <meta name="description" content="1ved Cloud API - Airport Gate Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        <p>Neon API Key: wqzxl5em6ow7ize9ffin9y9q3p5yytrr45yy4ul2uhh8at07n8gsjf7e2lzm8kr9</p>
        <p>Neon Project ID: floral-water-34306284</p>
        <p>Vercel API Token: 4Xwsa7w37dUuLIzUjP5MIBvD</p>
        <p>GitHub Repo: <a href="https://github.com/eldrago4/if-gatekeeper-hono">if-gatekeeper-hono</a></p>
      </footer>
    </div>
  );
};

export default Home;