import React, { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [time, setTime] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ist = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(ist);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  // Animated grain/noise — restrained WebGL moment, evokes signal/data
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const img = ctx.createImageData(w, h);
      const data = img.data;
      for (let i = 0; i < data.length; i += 4) {
        const n = Math.random();
        const v = n > 0.985 ? 255 * (n - 0.985) * 60 : 0;
        const px = (i / 4) % w;
        const py = Math.floor(i / 4 / w);
        const sweep = Math.sin((px / w) * Math.PI * 2 + t * 0.002) * 0.5 + 0.5;
        const edge = 1 - Math.abs(py / h - 0.5) * 1.4;
        const intensity = v * sweep * Math.max(0, edge);
        data[i] = intensity * 1.0;
        data[i + 1] = intensity * 0.42;
        data[i + 2] = intensity * 0.2;
        data[i + 3] = intensity > 0 ? 180 : 0;
      }
      ctx.putImageData(img, 0, 0);
      t += 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const projects = [
    {
      n: "01",
      tag: "AI / FORENSICS / ON-PREM",
      title: "MEGPOL AI",
      sub: "Forensic AI for the Meghalaya Police",
      body:
        "An on-premises RAG system for criminal investigation planning, FIR/SOP generation, and forensic telecom analysis (CDR/SDR). Engineered around the Indian legal transition from IPC to BNS/BNSS, with deterministic legal-code routing that prevents the model from defaulting to repealed sections. Built end-to-end: retrieval pipeline, evals, prompt architecture, deployment.",
      stack: ["Qwen 2.5", "Ollama", "LanceDB", "BM25 + Semantic", "Cross-Encoder Rerank", "Node.js"],
      metrics: [
        { k: "RETRIEVAL", v: "Hybrid BM25 + Semantic, RRF fusion" },
        { k: "GUARDRAILS", v: "Deterministic legal-code routing" },
        { k: "DEPLOYMENT", v: "Air-gapped, on-prem GPU" },
      ],
    },
    {
      n: "02",
      tag: "FULL-STACK / ML / CLOUD",
      title: "AgriMitra",
      sub: "Crop yield forecasting platform — end-to-end build",
      body:
        "AI-powered crop yield forecasting (R² = 0.98) using a hybrid ML model with explainable AI. Wrapped in a scalable ASP.NET Core API with PostgreSQL and ML.NET + ONNX Runtime for real-time inference. Shipped through a full CI/CD pipeline — GitHub Actions to Docker to Azure Kubernetes Service, infrastructure provisioned via Terraform.",
      stack: ["ASP.NET Core", "PostgreSQL", "ML.NET", "ONNX Runtime", "Docker", "AKS", "Terraform", "GitHub Actions"],
      metrics: [
        { k: "ACCURACY", v: "R² = 0.98 on yield prediction" },
        { k: "INFRA", v: "Terraform IaC → AKS via GitHub Actions" },
        { k: "DELIVERY", v: "API, CI/CD, model serving — end-to-end" },
      ],
    },
    {
      n: "03",
      tag: "FULL-STACK / MICROSERVICES",
      title: "Airline Crew Center",
      sub: "Crew scheduling platform serving 200+ users",
      body:
        "A production-grade scheduling system with a microservices backend, secured via OAuth 2.0 and role-based access control. Built with Next.js and React on the front, PostgreSQL with Drizzle ORM and Redis caching on the back. Includes a flight recommendation engine for optimizing pilot assignments, validated against load and stress tests.",
      stack: ["Next.js", "React", "PostgreSQL", "Drizzle ORM", "Redis", "OAuth 2.0", "RBAC", "Docker"],
      metrics: [
        { k: "SCALE", v: "200+ active users, microservices" },
        { k: "SECURITY", v: "OAuth 2.0 + RBAC throughout" },
        { k: "VALIDATION", v: "Load + stress tested under traffic" },
      ],
    },
    {
      n: "04",
      tag: "BACKEND / REAL-TIME / EDGE",
      title: "Flight Tracker",
      sub: "Real-time aircraft tracking at global scale",
      body:
        "A Hono.js backend ingesting live API feeds from a flight simulator, applying spatial filtering and clustering to handle hundreds of concurrent aircraft. Deployed on Vercel's edge platform with global CDN caching for low-latency reads. Designed for community-scale traffic with efficient data aggregation.",
      stack: ["Hono.js", "TypeScript", "Vercel Edge", "CDN Caching", "Spatial Indexing"],
      metrics: [
        { k: "THROUGHPUT", v: "Hundreds of aircraft, real-time" },
        { k: "LATENCY", v: "Edge-cached, global delivery" },
        { k: "ARCHITECTURE", v: "Clustering + spatial filtering" },
      ],
    },
    {
      n: "05",
      tag: "AI / SAFETY-CRITICAL",
      title: "FIR SOP Generator",
      sub: "Hallucination-resistant legal drafting",
      body:
        "A First Information Report drafting system with deterministic legal gates — engineered to refuse incorrect POCSO application, prevent section spamming, and enforce IPC→BNS mapping. Architecture treats the LLM as a writing assistant, not a legal authority. Where the law must be exact, the law is hardcoded.",
      stack: ["Qwen 2.5-3B", "FAISS RAG", "OCR Pipeline", "PII Anonymization", "Python"],
      metrics: [
        { k: "PHILOSOPHY", v: "Deterministic guardrails > model trust" },
        { k: "COVERAGE", v: "BNS, BNSS, BSA, POCSO" },
        { k: "PIPELINE", v: "OCR → Anonymize → Extract → Generate" },
      ],
    },
  ];

  const capabilities = [
    {
      h: "Backend & Full-Stack",
      items: [
        "Next.js, React, Flask, Hono.js",
        "Node.js, Python, C# / .NET Core, Java, C++",
        "PostgreSQL, Redis, Drizzle / Prisma ORM",
        "REST APIs, microservices, OAuth 2.0, RBAC",
      ],
    },
    {
      h: "Cloud, DevOps & Infra",
      items: [
        "Docker, Azure Kubernetes Service, Vercel",
        "GitHub Actions CI/CD, Terraform IaC",
        "Edge deployment, CDN caching, load testing",
        "Air-gapped on-prem GPU deployment",
      ],
    },
    {
      h: "Applied AI / ML",
      items: [
        "RAG pipelines: hybrid retrieval, reranking, evals",
        "PyTorch, ML.NET, ONNX Runtime, FAISS, LanceDB",
        "Local LLM inference (Ollama, Qwen) at production scale",
        "Hallucination guardrails for safety-critical domains",
      ],
    },
    {
      h: "Domain & Specialization",
      items: [
        "Indian legal frameworks: BNS, BNSS, BSA, POCSO",
        "CDR / SDR / IPDR forensic telecom analysis",
        "OCR + PII anonymization pipelines",
        "Cybersecurity foundations (Cisco Junior Analyst)",
      ],
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] min-h-screen overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,400&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

        :root {
          --ink: #0a0a0a;
          --bone: #e8e4dc;
          --bone-dim: #8a8780;
          --rule: #1f1d1a;
          --signal: #ff6b35;
        }

        * { -webkit-font-smoothing: antialiased; }

        .font-display { font-family: 'Fraunces', serif; font-variation-settings: 'opsz' 144, 'SOFT' 0; }
        .font-italic { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        ::selection { background: var(--signal); color: var(--ink); }

        @keyframes rise {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .rise { animation: rise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade { animation: fade 1.8s ease both; }

        .grain-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
          mix-blend-mode: overlay;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .rule { border-color: var(--rule); }

        .underline-grow {
          background-image: linear-gradient(var(--signal), var(--signal));
          background-size: 0% 1px;
          background-repeat: no-repeat;
          background-position: 0 100%;
          transition: background-size 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .underline-grow:hover { background-size: 100% 1px; }

        .marquee-track { animation: marquee 60s linear infinite; }

        .pulse-dot::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--signal);
          border-radius: 50%;
          margin-right: 8px;
          vertical-align: middle;
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>

      <div className="grain-overlay" />

      <div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          backgroundColor: "var(--signal)",
          left: mousePos.x - 4,
          top: mousePos.y - 4,
          transition: "transform 0.1s ease-out",
          mixBlendMode: "difference",
        }}
      />

      {/* TOP NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0a0a0a]/70 border-b rule">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between text-xs font-mono uppercase tracking-[0.15em]">
          <div className="flex items-center gap-6">
            <span className="text-[var(--bone)]">Ved Bapardekar</span>
            <span className="text-[var(--bone-dim)] hidden md:inline">— Vol. I / 2026</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[var(--bone-dim)]">
            <a href="#work" className="hover:text-[var(--bone)] transition">Work</a>
            <a href="#capabilities" className="hover:text-[var(--bone)] transition">Capabilities</a>
            <a href="#thinking" className="hover:text-[var(--bone)] transition">Thinking</a>
            <a href="#contact" className="hover:text-[var(--bone)] transition">Contact</a>
          </div>
          <div className="flex items-center gap-2 text-[var(--bone-dim)]">
            <span className="pulse-dot">IST {time}</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70"
          style={{ filter: "blur(0.3px)" }}
        />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[var(--bone-dim)] mb-12 fade">
            <span>Issue 01 — Software Development Engineer</span>
            <span className="hidden md:inline">Full-Stack ✦ Cloud ✦ Applied AI</span>
            <span>Filed 2026</span>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h1 className="font-display text-[14vw] md:text-[11vw] leading-[0.85] tracking-[-0.04em] font-light">
              <span className="block rise" style={{ animationDelay: "0.1s" }}>
                I ship software
              </span>
              <span className="block rise" style={{ animationDelay: "0.3s" }}>
                <span className="font-italic font-normal text-[var(--signal)]">that has to work</span>
              </span>
              <span className="block rise font-medium" style={{ animationDelay: "0.5s" }}>
                in the real world.
              </span>
            </h1>
          </div>

          <div className="grid md:grid-cols-12 gap-6 md:gap-12 mt-16 md:mt-24 rise" style={{ animationDelay: "0.9s" }}>
            <div className="md:col-span-5 md:col-start-7">
              <p className="font-display text-lg md:text-xl leading-relaxed text-[var(--bone)] font-light">
                Software Development Engineer working across the full stack — backend systems, cloud infrastructure, and applied AI. From microservices serving real users, to CI/CD pipelines deploying to Kubernetes, to RAG systems running inside a police station. <span className="font-italic">Production over demos. Evidence over vibes.</span>
              </p>
              <div className="mt-8 flex items-center gap-6 text-xs font-mono uppercase tracking-[0.15em] text-[var(--bone-dim)]">
                <span className="pulse-dot">Currently @ Meghalaya Police</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative border-y rule py-6 overflow-hidden bg-[#0a0a0a]">
        <div className="flex marquee-track whitespace-nowrap font-display text-2xl md:text-4xl font-light">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {[
                "Full-Stack Engineering",
                "Microservices & APIs",
                "Cloud & DevOps",
                "Kubernetes / Terraform / CI-CD",
                "Applied AI & RAG",
                "Real-Time Backends",
                "PostgreSQL / Redis",
                "Next.js / .NET / Python",
              ].map((w, j) => (
                <React.Fragment key={j}>
                  <span className={j % 3 === 1 ? "font-italic text-[var(--signal)]" : ""}>{w}</span>
                  <span className="text-[var(--bone-dim)] text-xl">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 border-b rule">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-4">
              ✦ Manifesto
            </div>
            <div className="font-mono text-xs text-[var(--bone-dim)]">§ 001</div>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-2xl md:text-4xl leading-[1.25] font-light tracking-[-0.01em]">
              I'm interested in the unglamorous part of engineering — the part where code leaves localhost and meets real users, real load, real consequences. <span className="font-italic">The bug at 2 AM. The pipeline that has to deploy clean. The system that has to keep working when nobody's watching.</span> Whether the surface is a React dashboard, a .NET API, a Kubernetes cluster, or an on-prem RAG pipeline — the discipline is the same: <span className="font-italic text-[var(--signal)]">build it like someone is depending on it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-baseline justify-between mb-16 md:mb-24">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-3">
                ✦ Selected Work
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-light tracking-[-0.03em]">
                Proof, <span className="font-italic">not promises.</span>
              </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-[var(--bone-dim)] uppercase tracking-wider">
              {projects.length} entries
            </div>
          </div>

          <div className="space-y-20 md:space-y-32">
            {projects.map((p, i) => (
              <article
                key={p.n}
                className={`grid md:grid-cols-12 gap-6 md:gap-12 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div className="md:col-span-2 [direction:ltr]">
                  <div className="font-display text-7xl md:text-8xl font-light text-[var(--bone-dim)] leading-none">
                    {p.n}
                  </div>
                  <div className="mt-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--signal)]">
                    {p.tag}
                  </div>
                </div>

                <div className="md:col-span-7 [direction:ltr]">
                  <h3 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.02em] leading-[0.95] mb-3">
                    {p.title}
                  </h3>
                  <p className="font-italic text-xl md:text-2xl text-[var(--bone-dim)] mb-6">
                    {p.sub}
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-[var(--bone)] font-light max-w-2xl">
                    {p.body}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 border rule rounded-full text-[var(--bone-dim)] hover:text-[var(--bone)] hover:border-[var(--signal)] transition"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 [direction:ltr] space-y-6">
                  {p.metrics.map((m) => (
                    <div key={m.k} className="border-l-2 border-[var(--signal)] pl-4">
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--bone-dim)] mb-1">
                        {m.k}
                      </div>
                      <div className="font-display text-base font-medium leading-snug">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — 4 columns */}
      <section id="capabilities" className="relative py-24 md:py-32 px-6 md:px-12 border-y rule">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16 md:mb-20 max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-3">
              ✦ Capabilities
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-[-0.03em]">
              Built across the <span className="font-italic">stack,</span> sharp on the <span className="font-italic text-[var(--signal)]">edges.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] border rule">
            {capabilities.map((c, i) => (
              <div key={c.h} className="bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#0d0d0d] transition">
                <div className="font-mono text-xs text-[var(--bone-dim)] uppercase tracking-[0.2em] mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-8 tracking-[-0.01em]">
                  {c.h}
                </h3>
                <ul className="space-y-3">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm font-light leading-relaxed">
                      <span className="text-[var(--signal)] mt-1.5 text-xs">●</span>
                      <span className="text-[var(--bone)]">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education + Certifications band */}
          <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-12 pt-12 border-t rule">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-4">
                ✦ Education
              </div>
              <h4 className="font-display text-2xl md:text-3xl font-medium mb-2 tracking-[-0.01em]">
                B.E. Computer Engineering
              </h4>
              <p className="text-[var(--bone-dim)] font-light leading-relaxed">
                Sindhudurg Shikshan Prasarak Mandal's College of Engineering<br />
                University of Mumbai — 2022 / 2026
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-4">
                ✦ Certifications
              </div>
              <ul className="space-y-2 text-[var(--bone)] font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--bone-dim)] font-mono text-xs mt-1.5">2025</span>
                  <span>Junior Cybersecurity Analyst — <span className="text-[var(--bone-dim)]">Cisco</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--bone-dim)] font-mono text-xs mt-1.5">2024</span>
                  <span>Cloud Computing Foundations — <span className="text-[var(--bone-dim)]">Google Cloud</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--bone-dim)] font-mono text-xs mt-1.5">2024</span>
                  <span>Automation: Arduino & Raspberry Pi — <span className="text-[var(--bone-dim)]">NSDL</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--bone-dim)] font-mono text-xs mt-1.5">2024</span>
                  <span>AI Application Development — <span className="text-[var(--bone-dim)]">Workshop</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THINKING — universal engineering principles */}
      <section id="thinking" className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-20">
            <div className="md:col-span-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-3">
                ✦ Thinking
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-5xl md:text-7xl font-light tracking-[-0.03em] leading-[1]">
                Three principles I will <span className="font-italic">not</span> compromise on.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                n: "I.",
                t: "Ship to operators, not to demos",
                b: "Real software is judged on a slow connection at 2 AM, not in a glossy stage demo. I optimize for the day after launch — observability, error paths, the boring stuff that decides whether something survives contact with users.",
              },
              {
                n: "II.",
                t: "Constraints sharpen the work",
                b: "Air-gapped GPUs, 200-user microservices, R²-graded ML, edge-cached real-time backends — every constraint forces a clearer architecture. I'd rather work inside hard limits than around vague ones.",
              },
              {
                n: "III.",
                t: "Boring infrastructure wins",
                b: "Terraform over hand-clicked clouds. CI/CD over hope. Type-safe ORMs over raw queries. RBAC over trust. The unglamorous defaults compound — they're how junior projects become production systems.",
              },
            ].map((x) => (
              <div key={x.n} className="border-t rule pt-6">
                <div className="font-display text-3xl font-italic text-[var(--signal)] mb-4">{x.n}</div>
                <h4 className="font-display text-xl md:text-2xl font-medium mb-4 tracking-[-0.01em] leading-snug">
                  {x.t}
                </h4>
                <p className="text-sm md:text-base text-[var(--bone-dim)] leading-relaxed font-light">
                  {x.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITER QUICK-FACTS */}
      <section className="relative py-20 px-6 md:px-12 border-y rule bg-[#0c0c0c]">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-8">
          {[
            { k: "Status", v: "Open to roles" },
            { k: "Open to", v: "SDE / Backend / Full-Stack / ML" },
            { k: "Base", v: "Mumbai, IN — open globally" },
            { k: "Available", v: "From June 2026" },
          ].map((f) => (
            <div key={f.k}>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-2">
                {f.k}
              </div>
              <div className="font-display text-xl md:text-2xl font-light">{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-6">
            ✦ End matter
          </div>
          <h2 className="font-display text-6xl md:text-9xl font-light tracking-[-0.04em] leading-[0.9] mb-12">
            Have something <br />
            <span className="font-italic">worth building?</span>
          </h2>
          <a
            href="mailto:tred38434@gmail.com"
            className="inline-block font-display text-3xl md:text-5xl font-light underline-grow"
            style={{ color: "var(--bone)" }}
          >
            tred38434@gmail.com
          </a>

          <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-mono uppercase tracking-[0.2em] text-[var(--bone-dim)]">
            <a href="https://linkedin.com/in/engineeringbyved/" target="_blank" rel="noreferrer" className="hover:text-[var(--signal)] transition">
              LinkedIn ↗
            </a>
            <a href="https://github.com/eldrago4" target="_blank" rel="noreferrer" className="hover:text-[var(--signal)] transition">
              GitHub ↗
            </a>
            <a href="https://codeforces.com/profile/eldrago4" target="_blank" rel="noreferrer" className="hover:text-[var(--signal)] transition">
              Codeforces ↗
            </a>
            <a href="https://www.hackerrank.com/profile/eldrago" target="_blank" rel="noreferrer" className="hover:text-[var(--signal)] transition">
              HackerRank ↗
            </a>
            <a href="tel:+919820279131" className="hover:text-[var(--signal)] transition">
              +91 98202 79131
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t rule py-8 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--bone-dim)]">
          <div>© 2026 Ved Bapardekar — Set in Fraunces & JetBrains Mono</div>
          <div className="flex gap-6">
            <span>Mumbai, IN</span>
            <span>Vol. I</span>
            <span className="pulse-dot">Live IST {time}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
