"use client";

import React, { useState, useEffect, useRef } from "react";

// ─── static data outside component — never re-created ────────────────────────

const projects = [
  {
    n: "01",
    tag: "AI / FORENSICS / ON-PREM",
    title: "MEGPOL AI",
    sub: "RAG system for the Meghalaya Police",
    body: "An on-premises RAG system for criminal investigation planning, FIR/SOP generation, and forensic telecom analysis (CDR/SDR). Engineered around the Indian legal transition from IPC to BNS/BNSS, with deterministic legal-code routing that prevents the model from defaulting to repealed sections. Built end-to-end: retrieval pipeline, evals, prompt architecture, deployment.",
    stack: ["Qwen 3.5", "Ollama", "LanceDB", "BM25 + Semantic", "Cross-Encoder Rerank", "Node.js"],
    metrics: [
      { k: "RETRIEVAL", v: "Hybrid BM25 + Semantic, RRF fusion" },
      { k: "GUARDRAILS", v: "LLMGuard" },
      { k: "DEPLOYMENT", v: "Air-gapped, on-prem GPU" },
    ],
    screens: [
      { src: "/works/megpol-ai/screenshot_investigation_plan.png", desc: "Investigation plan — RAG-generated case strategy with BNS / BNSS section mapping" },
      { src: "/works/megpol-ai/screenshot_source_citations.png", desc: "Source citations — hybrid retrieval surfaces ranked legal documents with confidence scores" },
      { src: "/works/megpol-ai/screenshot_global_knowledge_list.png", desc: "Knowledge base — on-prem document index, air-gapped from external networks" },
      { src: "/works/megpol-ai/screenshot_save_and_embed.png", desc: "Document ingestion — save and embed pipeline feeding the LanceDB vector store" },
    ],
  },
  {
    n: "02",
    tag: "FULL-STACK / ML / CLOUD",
    title: "AgriMitra",
    sub: "Crop yield forecasting platform — end-to-end build",
    body: "AI-powered crop yield forecasting (R² = 0.98) using a hybrid ML model with explainable AI. Wrapped in a scalable ASP.NET Core API with PostgreSQL and ML.NET + ONNX Runtime for real-time inference. Shipped through a full CI/CD pipeline — GitHub Actions to Docker to Azure Kubernetes Service, infrastructure provisioned via Terraform.",
    stack: ["ASP.NET Core", "PostgreSQL", "ML.NET", "ONNX Runtime", "Docker", "AKS", "Terraform", "GitHub Actions"],
    metrics: [
      { k: "ACCURACY", v: "R² = 0.98 on yield prediction" },
      { k: "INFRA", v: "Terraform IaC → AKS via GitHub Actions" },
      { k: "DELIVERY", v: "API, CI/CD, model serving — end-to-end" },
    ],
    screens: [
      { src: "/works/agrimitra/IMG-20260426-WA0001.jpg", desc: "Crop Market Dashboard - Pulling crop prices from daily rate API" },
      { src: "/works/agrimitra/IMG-20260426-WA0002.jpg", desc: "Explainability view — SHAP feature importance overlaid on prediction output" },
      { src: "/works/agrimitra/IMG-20260426-WA0003.jpg", desc: "Input Screen after farmer selects their land area." },
      { src: "/works/agrimitra/IMG-20260426-WA0004.jpg", desc: "farm area selection" },
    ],
  },
  {
    n: "03",
    tag: "FULL-STACK / MICROSERVICES",
    title: "Airline Crew Center",
    sub: "Crew scheduling platform serving 200+ users",
    body: "A production-grade scheduling system with a microservices backend, secured via OAuth 2.0 and role-based access control. Built with Next.js and React on the front, PostgreSQL with Drizzle ORM and Redis caching on the back. Includes a flight recommendation engine for optimizing pilot assignments, validated against load and stress tests.",
    stack: ["Next.js", "React", "PostgreSQL", "Drizzle ORM", "Redis", "OAuth 2.0", "RBAC", "Docker"],
    metrics: [
      { k: "SCALE", v: "200+ active users, microservices" },
      { k: "SECURITY", v: "OAuth 2.0 + RBAC throughout" },
      { k: "VALIDATION", v: "Load + stress tested under traffic" },
    ],
    screens: [
      { src: "/works/crew-center/ksnip_20260426-123311.png", desc: "Crew scheduling board — 200+ users, role-filtered view rendering per RBAC policy" },
      { src: "/works/crew-center/ksnip_20260426-123542.png", desc: "Flight recommendation engine — pilot–route assignment optimisation and conflict resolution" },
      { src: "/works/crew-center/ksnip_20260426-123655.png", desc: "Roster management — shift planning with constraint validation and clash detection" },
      { src: "/works/crew-center/ksnip_20260426-125005.png", desc: "Users manage their assigned flight sectors" },
    ],
  },
  {
    n: "04",
    tag: "BACKEND / REAL-TIME / EDGE",
    title: "Flight Tracker",
    sub: "Real-time aircraft tracking at global scale",
    body: "A Hono.js backend ingesting live API feeds from a flight simulator, applying spatial filtering and clustering to handle hundreds of concurrent aircraft. Deployed on Vercel's edge platform with global CDN caching for low-latency reads. Designed for community-scale traffic with efficient data aggregation.",
    stack: ["Hono.js", "TypeScript", "Vercel Edge", "CDN Caching", "Spatial Indexing"],
    metrics: [
      { k: "THROUGHPUT", v: "Hundreds of aircraft, real-time" },
      { k: "LATENCY", v: "Edge-cached, global delivery" },
      { k: "ARCHITECTURE", v: "Clustering + spatial filtering" },
    ],
    screens: [
      { src: "/works/tracker/ksnip_20260426-125500.png", desc: "Live map — hundreds of aircraft with spatial clustering at global scale" },
      { src: "/works/tracker/ksnip_20260426-125718.png", desc: "Cockpit view" },
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

// ─── placeholder shown when no screenshot src is provided ────────────────────

function ScreenPlaceholder({ projectN, screenIndex }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center" style={{ background: "#0d0d0b" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,107,53,0.018) 3px, rgba(255,107,53,0.018) 4px)" }} />
      <span className="absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 opacity-30" style={{ borderColor: "var(--signal)" }} />
      <span className="absolute top-4 right-4 w-5 h-5 border-r-2 border-t-2 opacity-30" style={{ borderColor: "var(--signal)" }} />
      <span className="absolute bottom-4 left-4 w-5 h-5 border-l-2 border-b-2 opacity-30" style={{ borderColor: "var(--signal)" }} />
      <span className="absolute bottom-4 right-4 w-5 h-5 border-r-2 border-b-2 opacity-30" style={{ borderColor: "var(--signal)" }} />
      <span className="font-mono text-xs uppercase tracking-[0.4em] select-none" style={{ color: "var(--bone-dim)", opacity: 0.18 }}>
        {projectN} — {String(screenIndex + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

// ─── component ────────────────────────────────────────────────────────────────

export default function Portfolio() {
  // Only React state that genuinely needs re-renders: the clock (1/sec, negligible)
  const [time, setTime] = useState("");

  // Refs for direct DOM mutation — no React re-renders on scroll or mousemove
  const cursorRef = useRef(null);
  const sectionRefs = useRef([]);
  const sectionTops = useRef([]); // cached absolute tops, invalidated on resize
  const screenItemRefs = useRef([]); // [projectIndex][screenIndex]
  const dotRefs = useRef([]);        // [projectIndex][screenIndex]
  const rafScrollId = useRef(null);

  // ── clock (state ok here — 1 update/sec) ──────────────────────────────────
  useEffect(() => {
    const tick = () => {
      const ist = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      }).format(new Date());
      setTime(ist);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // ── cursor — ref → DOM, zero React renders ────────────────────────────────
  useEffect(() => {
    const onMouse = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 4}px`;
        cursorRef.current.style.top = `${e.clientY - 4}px`;
      }
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  // ── cache section positions (recompute on resize, not on every scroll) ────
  const cacheSectionTops = () => {
    sectionTops.current = sectionRefs.current.map(
      (el) => el ? el.getBoundingClientRect().top + window.scrollY : 0
    );
  };

  // ── scroll gallery — RAF-throttled, direct DOM mutation, zero React renders
  useEffect(() => {
    // defer so the browser completes its first layout pass before we read positions
    requestAnimationFrame(cacheSectionTops);

    const updateGallery = () => {
      projects.forEach((p, i) => {
        const el = sectionRefs.current[i];
        if (!el) return;
        const absTop = sectionTops.current[i];
        const scrollable = el.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.max(0, Math.min(1, (window.scrollY - absTop) / scrollable));
        const activeIndex = Math.min(Math.floor(progress * p.screens.length), p.screens.length - 1);

        p.screens.forEach((_, si) => {
          const item = screenItemRefs.current[i]?.[si];
          const dot = dotRefs.current[i]?.[si];
          if (!item) return;

          const isActive = si === activeIndex;
          item.style.flexGrow = isActive ? "8" : "1";
          item.style.opacity = isActive ? "1" : "0.45";

          const border = item.querySelector(".s-border");
          const dim    = item.querySelector(".s-dim");
          const desc   = item.querySelector(".s-desc");
          if (border) border.style.borderColor = isActive ? "var(--signal)" : "var(--rule)";
          if (dim)    dim.style.opacity    = isActive ? "0"   : "0.45";
          if (desc)   desc.style.opacity   = isActive ? "1"   : "0";

          if (dot) {
            dot.style.height     = isActive ? "20px" : "6px";
            dot.style.background = isActive ? "var(--signal)" : "var(--bone-dim)";
            dot.style.opacity    = isActive ? "1" : "0.3";
          }
        });
      });
    };

    const onScroll = () => {
      if (rafScrollId.current) return;
      rafScrollId.current = requestAnimationFrame(() => {
        updateGallery();
        rafScrollId.current = null;
      });
    };

    const onResize = () => {
      cacheSectionTops();
      updateGallery();
    };

    updateGallery(); // seed on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafScrollId.current) cancelAnimationFrame(rafScrollId.current);
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] min-h-screen relative" style={{ overflowX: "clip" }}>
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
        body { overflow-x: hidden; }

        .font-display { font-family: 'Fraunces', serif; font-variation-settings: 'opsz' 144, 'SOFT' 0; }
        .font-italic  { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-mono    { font-family: 'JetBrains Mono', monospace; }

        ::selection { background: var(--signal); color: var(--ink); }

        @keyframes rise {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Hero signal — GPU-only CSS, replaces canvas pixel loop */
        @keyframes hero-sweep {
          0%   { transform: translateX(-18%) scaleX(0.85); opacity: 0.55; }
          100% { transform: translateX(18%)  scaleX(1.15); opacity: 1; }
        }
        @keyframes hero-grain-shift {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-3%, -2%); }
          50%  { transform: translate(2%, 3%); }
          75%  { transform: translate(-2%, 1%); }
          100% { transform: translate(0, 0); }
        }
        .hero-glow {
          background: radial-gradient(ellipse 110% 70% at 50% 110%,
            rgba(255,107,53,0.13) 0%,
            rgba(255,107,53,0.04) 45%,
            transparent 70%);
          animation: hero-sweep 10s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }
        .hero-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 220px 220px;
          opacity: 0.07;
          mix-blend-mode: screen;
          animation: hero-grain-shift 12s steps(4) infinite;
          will-change: transform;
        }

        .rise { animation: rise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade { animation: fade 1.8s ease both; }

        .grain-overlay {
          position: fixed; inset: 0;
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
          width: 6px; height: 6px;
          background: var(--signal);
          border-radius: 50%;
          margin-right: 8px;
          vertical-align: middle;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        /* Gallery items — CSS transition on flex-grow; compositor handles the rest */
        .screen-item {
          overflow: hidden;
          transition: flex-grow 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity   0.75s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: flex-grow, opacity;
        }
        .s-border, .s-dim, .s-desc {
          transition: border-color 0.75s cubic-bezier(0.16,1,0.3,1),
                      opacity      0.6s  cubic-bezier(0.16,1,0.3,1);
        }

        /* Project section: natural height on mobile, tall for sticky on desktop */
        .project-section { height: auto; overflow-x: hidden; overflow-x: clip; }
        @media (min-width: 768px) {
          .project-section { height: var(--sh); overflow-x: visible; }
        }

        /* Mobile screenshot strip */
        .mobile-gallery {
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-x pinch-zoom;
        }
        .mobile-gallery::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="grain-overlay" />

      {/* Cursor dot — direct DOM via ref, no state */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-50 hidden md:block"
        style={{ backgroundColor: "var(--signal)", mixBlendMode: "difference", position: "fixed", top: 0, left: 0 }}
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
          <div className="flex items-center gap-4 text-[var(--bone-dim)]">
            <div className="flex md:hidden items-center gap-5 text-[var(--bone-dim)]">
              <a href="#work" className="hover:text-[var(--bone)] transition">Work</a>
              <a href="#contact" className="hover:text-[var(--bone)] transition">Contact</a>
            </div>
            <span className="pulse-dot hidden md:inline">IST {time}</span>
            <a
              href="https://drive.google.com/file/d/1wSINipxQ2RHgfsksb506bTNx6Wf0Wdgd/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="border border-[#ff6b35] text-[#ff6b35] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition hover:bg-[#ff6b35] hover:text-[#0a0a0a]"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — CSS-only signal effect, zero JS per frame */}
      <section className="relative min-h-screen flex flex-col justify-end pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 hero-noise" />

        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[var(--bone-dim)] mb-12 fade">
            <span className="hidden sm:inline">Issue 01 — Software Development Engineer</span>
            <span className="sm:hidden">Issue 01</span>
            <span className="hidden md:inline">Full-Stack ✦ Cloud ✦ Applied AI</span>
            <span>Filed 2026</span>
          </div>
          <div className="space-y-2 md:space-y-4">
            <h1 className="font-display text-[14vw] md:text-[11vw] leading-[0.85] tracking-[-0.04em] font-light">
              <span className="block rise" style={{ animationDelay: "0.1s" }}>I ship software</span>
              <span className="block rise" style={{ animationDelay: "0.3s" }}>
                <span className="font-italic font-normal text-[var(--signal)]">that has to work</span>
              </span>
              <span className="block rise font-medium" style={{ animationDelay: "0.5s" }}>in the real world.</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-12 gap-6 md:gap-12 mt-16 md:mt-24 rise" style={{ animationDelay: "0.9s" }}>
            <div className="md:col-span-5 md:col-start-7">
              <p className="font-display text-lg md:text-xl leading-relaxed text-[var(--bone)] font-light">
                Software Development Engineer working across the full stack — backend systems, cloud infrastructure, and applied AI. From microservices serving real users, to CI/CD pipelines deploying to Kubernetes, to RAG systems running inside a police station.{" "}
                <span className="font-italic">Production over demos. Evidence over vibes.</span>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.15em] text-[var(--bone-dim)]">
                <span className="pulse-dot">Graduating June 2026</span>
                <a
                  href="https://drive.google.com/file/d/1wSINipxQ2RHgfsksb506bTNx6Wf0Wdgd/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#ff6b35] text-[#ff6b35] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition hover:bg-[#ff6b35] hover:text-[#0a0a0a]"
                >
                  Resume ↗
                </a>
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
              {["Full-Stack Engineering","Microservices & APIs","Cloud & DevOps","Kubernetes / Terraform / CI-CD","Applied AI & RAG","Real-Time Backends","PostgreSQL / Redis","Next.js / .NET / Python"].map((w, j) => (
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
      <section className="relative py-20 md:py-48 px-6 md:px-12 border-b rule">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-4">✦ Manifesto</div>
            <div className="font-mono text-xs text-[var(--bone-dim)]">§ 001</div>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-2xl md:text-4xl leading-[1.25] font-light tracking-[-0.01em]">
              I'm interested in the unglamorous part of engineering — the part where code leaves localhost and meets real users, real load, real consequences.{" "}
              <span className="font-italic">The bug at 2 AM. The pipeline that has to deploy clean. The system that has to keep working when nobody's watching.</span>{" "}
              Whether the surface is a React dashboard, a .NET API, a Kubernetes cluster, or an on-prem RAG pipeline — the discipline is the same:{" "}
              <span className="font-italic text-[var(--signal)]">build it like someone is depending on it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* WORK — sticky scroll, gallery driven by direct DOM (no React state) */}
      <section id="work" className="relative" style={{ overflowX: "clip" }}>
        <div className="px-6 md:px-12 pt-16 md:pt-32 pb-10 md:pb-20 max-w-[1600px] mx-auto">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-3">✦ Selected Work</div>
              <h2 className="font-display text-4xl md:text-7xl font-light tracking-[-0.03em]">
                Proof, <span className="font-italic">not promises.</span>
              </h2>
            </div>
            <div className="flex flex-col items-end gap-1 font-mono text-xs text-[var(--bone-dim)] uppercase tracking-wider">
              <span>{projects.length} entries</span>
              <span className="opacity-50 hidden md:inline">↓ scroll each</span>
              <span className="opacity-50 md:hidden">swipe shots →</span>
            </div>
          </div>
        </div>

        {projects.map((p, i) => (
          <div
            key={p.n}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="project-section relative border-t rule"
            style={{ '--sh': `${p.screens.length * 100}vh` }}
          >
            <div className="md:sticky md:top-0 md:h-screen flex items-start md:items-center px-6 md:px-12 py-8 md:py-0">
              <div className="max-w-[1600px] mx-auto w-full grid md:grid-cols-12 gap-6 md:gap-10">

                {/* LEFT — project info */}
                <div className="md:col-span-5 flex flex-col justify-center min-w-0">
                  <div className="font-display text-4xl md:text-8xl font-light leading-none" style={{ color: "var(--bone-dim)" }}>{p.n}</div>
                  <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: "var(--signal)" }}>{p.tag}</div>
                  <h3 className="font-display text-2xl md:text-5xl font-medium tracking-[-0.02em] leading-[0.95] mt-5 mb-2">{p.title}</h3>
                  <p className="font-italic text-base md:text-xl mb-5" style={{ color: "var(--bone-dim)" }}>{p.sub}</p>
                  <p className="text-sm md:text-base leading-relaxed font-light md:max-w-md" style={{ color: "var(--bone)" }}>{p.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 border rule rounded-full transition"
                        style={{ color: "var(--bone-dim)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--bone)"; e.currentTarget.style.borderColor = "var(--signal)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--bone-dim)"; e.currentTarget.style.borderColor = ""; }}
                      >{s}</span>
                    ))}
                  </div>
                  <div className="mt-7 space-y-4">
                    {p.metrics.map((m) => (
                      <div key={m.k} className="border-l-2 pl-4" style={{ borderColor: "var(--signal)" }}>
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-1" style={{ color: "var(--bone-dim)" }}>{m.k}</div>
                        <div className="font-display text-sm md:text-base font-medium leading-snug break-words">{m.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — screenshot gallery */}
                <div className="hidden md:flex md:col-span-7 flex-col gap-2 relative overflow-hidden" style={{ height: "85vh" }}>
                  {p.screens.map((screen, si) => (
                    <div
                      key={si}
                      ref={(el) => {
                        if (!screenItemRefs.current[i]) screenItemRefs.current[i] = [];
                        screenItemRefs.current[i][si] = el;
                      }}
                      className="screen-item relative"
                      style={{ flexGrow: si === 0 ? 8 : 1, flexShrink: 1, flexBasis: "0%", minHeight: 0, opacity: si === 0 ? 1 : 0.45 }}
                    >
                      {screen.src
                        ? <img src={screen.src} alt={screen.desc} className="w-full h-full object-contain" style={{ background: "#0d0d0b" }} />
                        : <ScreenPlaceholder projectN={p.n} screenIndex={si} />
                      }

                      <div className="s-border absolute inset-0 pointer-events-none" style={{ border: `1px solid ${si === 0 ? "var(--signal)" : "var(--rule)"}` }} />
                      <div className="s-dim absolute inset-0 pointer-events-none" style={{ background: "#0a0a0a", opacity: si === 0 ? 0 : 0.45 }} />
                      <div
                        className="s-desc absolute bottom-0 left-0 right-0 px-5 py-4 pointer-events-none"
                        style={{
                          background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 60%, transparent 100%)",
                          opacity: si === 0 ? 1 : 0,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--signal)" }}>{String(si + 1).padStart(2, "0")}</span>
                          <span className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: "var(--bone-dim)" }}>{screen.desc}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* scroll progress dots */}
                  <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    {p.screens.map((_, si) => (
                      <div
                        key={si}
                        ref={(el) => {
                          if (!dotRefs.current[i]) dotRefs.current[i] = [];
                          dotRefs.current[i][si] = el;
                        }}
                        className="rounded-full"
                        style={{
                          width: "3px",
                          height: si === 0 ? "20px" : "6px",
                          background: si === 0 ? "var(--signal)" : "var(--bone-dim)",
                          opacity: si === 0 ? 1 : 0.3,
                          transition: "height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease, background 0.5s ease",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* MOBILE — horizontal snap gallery */}
                <div className="md:hidden col-span-full -mx-6 mt-4">
                  <div className="mobile-gallery flex overflow-x-scroll snap-x snap-mandatory gap-3 px-6 pb-4" style={{ WebkitOverflowScrolling: "touch" }}>
                    {p.screens.map((screen, si) => (
                      <div
                        key={si}
                        className="snap-start shrink-0 relative overflow-hidden rounded-sm"
                        style={{ width: "82vw", aspectRatio: "16/9", border: "1px solid var(--rule)" }}
                      >
                        {screen.src
                          ? <img src={screen.src} alt={screen.desc} className="w-full h-full object-cover" style={{ background: "#0d0d0b" }} />
                          : <ScreenPlaceholder projectN={p.n} screenIndex={si} />
                        }
                        <div
                          className="absolute bottom-0 left-0 right-0 px-3 py-2.5"
                          style={{ background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 60%, transparent 100%)" }}
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] shrink-0 mt-0.5" style={{ color: "var(--signal)" }}>{String(si + 1).padStart(2, "0")}</span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.08em] leading-snug line-clamp-2" style={{ color: "var(--bone-dim)" }}>{screen.desc}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* swipe hint + dot indicators */}
                  <div className="flex items-center justify-between px-6 mt-2 pb-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--bone-dim)", opacity: 0.4 }}>swipe</span>
                    <div className="flex gap-2">
                      {p.screens.map((_, si) => (
                        <div key={si} className="rounded-full" style={{ width: "4px", height: "4px", background: "var(--bone-dim)", opacity: 0.3 }} />
                      ))}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--bone-dim)", opacity: 0.4 }}>{p.screens.length} shots</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="relative py-16 md:py-32 px-6 md:px-12 border-y rule">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 md:mb-20 max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-3">✦ Capabilities</div>
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-[-0.03em]">
              Built across the <span className="font-italic">stack,</span> sharp on the{" "}
              <span className="font-italic text-[var(--signal)]">edges.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] border rule">
            {capabilities.map((c, i) => (
              <div key={c.h} className="bg-[#0a0a0a] p-6 md:p-10 hover:bg-[#0d0d0d] transition">
                <div className="font-mono text-xs text-[var(--bone-dim)] uppercase tracking-[0.2em] mb-2">0{i + 1}</div>
                <h3 className="font-display text-xl md:text-3xl font-medium mb-4 md:mb-8 tracking-[-0.01em]">{c.h}</h3>
                <ul className="space-y-3">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-xs md:text-sm font-light leading-relaxed">
                      <span className="text-[var(--signal)] mt-1.5 text-xs">●</span>
                      <span className="text-[var(--bone)]">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-12 pt-12 border-t rule">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-4">✦ Education</div>
              <h4 className="font-display text-2xl md:text-3xl font-medium mb-2 tracking-[-0.01em]">B.E. Computer Engineering</h4>
              <p className="text-[var(--bone-dim)] font-light leading-relaxed">
                Sindhudurg Shikshan Prasarak Mandal's College of Engineering<br />
                University of Mumbai — 2022 / 2026
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-4">✦ Certifications</div>
              <ul className="space-y-2 text-[var(--bone)] font-light">
                {[
                  { y: "2025", t: "Junior Cybersecurity Analyst", org: "Cisco" },
                  { y: "2024", t: "Cloud Computing Foundations", org: "Google Cloud" },
                  { y: "2024", t: "Automation: Arduino & Raspberry Pi", org: "NSDL" },
                  { y: "2024", t: "AI Application Development", org: "Workshop" },
                ].map((c) => (
                  <li key={c.t} className="flex items-start gap-3">
                    <span className="text-[var(--bone-dim)] font-mono text-xs mt-1.5">{c.y}</span>
                    <span>{c.t} — <span className="text-[var(--bone-dim)]">{c.org}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THINKING */}
      <section id="thinking" className="relative py-20 md:py-48 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-8 md:mb-20">
            <div className="md:col-span-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-3">✦ Thinking</div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-5xl md:text-7xl font-light tracking-[-0.03em] leading-[1]">
                Three principles I will <span className="font-italic">not</span> compromise on.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              { n: "I.",   t: "Ship to operators, not to demos",  b: "Real software is judged on a slow connection at 2 AM, not in a glossy stage demo. I optimize for the day after launch — observability, error paths, the boring stuff that decides whether something survives contact with users." },
              { n: "II.",  t: "Constraints sharpen the work",     b: "Air-gapped GPUs, 200-user microservices, R²-graded ML, edge-cached real-time backends — every constraint forces a clearer architecture. I'd rather work inside hard limits than around vague ones." },
              { n: "III.", t: "Boring infrastructure wins",       b: "Terraform over hand-clicked clouds. CI/CD over hope. Type-safe ORMs over raw queries. RBAC over trust. The unglamorous defaults compound — they're how junior projects become production systems." },
            ].map((x) => (
              <div key={x.n} className="border-t rule pt-6">
                <div className="font-display text-3xl font-italic text-[var(--signal)] mb-4">{x.n}</div>
                <h4 className="font-display text-xl md:text-2xl font-medium mb-4 tracking-[-0.01em] leading-snug">{x.t}</h4>
                <p className="text-sm md:text-base text-[var(--bone-dim)] leading-relaxed font-light">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITER QUICK-FACTS */}
      <section className="relative py-20 px-6 md:px-12 border-y rule bg-[#0c0c0c]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { k: "Status",   v: "Open to roles" },
            { k: "Open to",  v: "SDE / Backend / Full-Stack / ML" },
            { k: "Base",     v: "Mumbai, IN — open globally" },
            { k: "Available",v: "From June 2026" },
          ].map((f) => (
            <div key={f.k}>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-2">{f.k}</div>
              <div className="font-display text-base md:text-2xl font-light leading-snug">{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 md:py-48 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--signal)] mb-6">✦ End matter</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-9xl font-light tracking-[-0.04em] leading-[0.9] mb-12">
            Have something <br /><span className="font-italic">worth building?</span>
          </h2>
          <a href="mailto:tred38434@gmail.com" className="inline-block font-display text-3xl md:text-5xl font-light underline-grow" style={{ color: "var(--bone)" }}>
            dev@1ved.cloud
          </a>
          <div className="mt-10 md:mt-20 flex flex-wrap justify-center gap-5 md:gap-10 text-xs font-mono uppercase tracking-[0.2em] text-[var(--bone-dim)]">
            <a href="https://linkedin.com/in/engineeringbyved/" target="_blank" rel="noreferrer" className="hover:text-[var(--signal)] transition">LinkedIn ↗</a>
            <a href="https://github.com/eldrago4" target="_blank" rel="noreferrer" className="hover:text-[var(--signal)] transition">GitHub ↗</a>
            <a href="https://codeforces.com/profile/eldrago4" target="_blank" rel="noreferrer" className="hover:text-[var(--signal)] transition">Codeforces ↗</a>
            <a href="https://www.hackerrank.com/profile/eldrago" target="_blank" rel="noreferrer" className="hover:text-[var(--signal)] transition">HackerRank ↗</a>
            <a href="tel:+919820279131" className="hover:text-[var(--signal)] transition">+91 98202 79131</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t rule py-8 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--bone-dim)]">
          <div>© 2026 Ved Bapardekar</div>
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
