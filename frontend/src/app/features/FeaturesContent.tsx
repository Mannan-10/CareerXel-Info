'use client';

import React, { useState, useEffect, useRef } from "react";
import SignalBar from "@/components/sections/SignalBar";
import ProductTour from "@/components/sections/ProductTour";
import CompetitorComparison from "@/components/sections/CompetitorComparison";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BackToTop from "@/components/ui/BackToTop";
import "./features.css";
const featuresSections = [
  { id: "f00.5", label: "Product Tour" },
  { id: "f01", label: "Resume Builder" },
  { id: "f02", label: "Smart Matching" },
  { id: "f03", label: "AI Interviews" },
  { id: "f04", label: "Career Roadmaps" },
  { id: "f05", label: "Recruiter ATS" },
  { id: "f06", label: "Job Postings" },
  { id: "f07", label: "Proctoring" },
  { id: "f08", label: "Scoring Engine" },
  { id: "f09", label: "Bulk Import" },
  { id: "f10", label: "Placement Analytics" },
  { id: "f11", label: "PDF Reports" },
  { id: "f12", label: "Security" },
  { id: "f13", label: "Compare" }
];

export default function FeaturesContent() {
  // §01 Resume Builder State
  const [activeResumeRole, setActiveResumeRole] = useState<"Stripe" | "Linear" | "Vercel">("Stripe");
  
  const resumeData = {
    Stripe: [
      { label: "Headline · Senior FE — React, TS, Edge", meta: "↺ TUNED" },
      { label: "Summary · Shipping perf-critical UI…", meta: "↺ TUNED" },
      { label: "Experience · Quanta · Senior FE", meta: "PINNED" },
      { label: "Projects · Design tokens pipeline", meta: "SURFACED" }
    ],
    Linear: [
      { label: "Headline · Product Engineer — Canvas, Interaction", meta: "↺ TUNED" },
      { label: "Summary · Sweating details on editor UX…", meta: "↺ TUNED" },
      { label: "Experience · Figma · Design Engineer", meta: "PINNED" },
      { label: "Projects · WebGL canvas graphs", meta: "SURFACED" }
    ],
    Vercel: [
      { label: "Headline · Staff Engineer — Frameworks, Rust", meta: "↺ TUNED" },
      { label: "Summary · Scaling next-gen edge rendering…", meta: "↺ TUNED" },
      { label: "Experience · Stripe · Principal Eng", meta: "PINNED" },
      { label: "Projects · Turbopack core bindings", meta: "SURFACED" }
    ]
  };

  // §02 Smart Matching State
  const [activeMatchFilter, setActiveMatchFilter] = useState<"Frontend" | "Design" | "Fullstack">("Frontend");
  
  const matchData = {
    Frontend: [
      { title: "Stripe — Senior Frontend Engineer", score: "96% MATCH", high: true },
      { title: "Linear — Design Engineer", score: "91% MATCH", high: true },
      { title: "Figma — Product Engineer", score: "88% MATCH", high: false },
      { title: "Vercel — Staff SWE", score: "84% MATCH", high: false }
    ],
    Design: [
      { title: "Linear — Design Engineer", score: "97% MATCH", high: true },
      { title: "Figma — Product Designer", score: "93% MATCH", high: true },
      { title: "Stripe — UI Engineer", score: "86% MATCH", high: false },
      { title: "Airbnb — Design Lead", score: "80% MATCH", high: false }
    ],
    Fullstack: [
      { title: "Vercel — Staff SWE", score: "95% MATCH", high: true },
      { title: "Supabase — Fullstack Engineer", score: "92% MATCH", high: true },
      { title: "Stripe — Senior Frontend Engineer", score: "89% MATCH", high: false },
      { title: "Linear — Product SWE", score: "85% MATCH", high: false }
    ]
  };

  // §03 AI Mock Interviews State
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const questions = [
    { q: "Walk me through how you'd design a token-bucket rate limiter…", tech: 82, comms: 74 },
    { q: "How does React's concurrent rendering engine handle state updates internally?", tech: 91, comms: 85 },
    { q: "Explain how you'd debug a memory leak in a large-scale Next.js application.", tech: 86, comms: 79 },
    { q: "How would you optimize the performance of a real-time SVG charting engine?", tech: 94, comms: 88 }
  ];

  const handleNextQuestion = () => {
    setActiveQuestionIdx((prev) => (prev + 1) % questions.length);
  };

  // §04 Career Roadmaps State
  const [hoveredSkill, setHoveredSkill] = useState("START");
  
  const skillDescriptions: Record<string, string> = {
    "START": "Initial assessment complete. Foundation skills mapped. Hover any node to view targets.",
    "JS · TS": "Deep dive into JS event loop, promises, prototypes, and TypeScript strict types. Complete: 100%.",
    "REACT": "Component styling, custom hooks, Server Components, and concurrent rendering. Complete: 100%.",
    "TEST": "Unit, integration, and end-to-end testing with Jest, Vitest, and Playwright. In-progress: 40%.",
    "TOOLING": "Webpack, Vite, Turbopack, and build performance tuning. Complete: 100%.",
    "PERF": "Web Vitals, runtime rendering benchmarks, and memory leak analysis. Complete: 100%.",
    "EDGE SSR": "Edge runtimes, streaming HTML, and regional caching layouts. In-progress: 20%.",
    "SR FE": "Ready for Senior Front-End assessment track. Pinned to target Stripe role.",
    "DESIGN": "Design system patterns, CSS custom properties, and design tokens pipelines. In-progress."
  };

  // §05 Recruiter ATS State
  const [activeATSStage, setActiveATSStage] = useState<"APPLIED" | "SCREEN" | "INTERVIEW" | "OFFER">("OFFER");
  
  const atsData = {
    APPLIED: [
      { name: "Priya Khurana — Sr Frontend", score: "92", status: "PENDING" },
      { name: "Maya Sundaram — Sr Frontend", score: "88", status: "PENDING" },
      { name: "Rohan Kapoor — Design Eng", score: "84", status: "PENDING" }
    ],
    SCREEN: [
      { name: "Siddharth Sen — Staff SWE", score: "95", status: "PASSED" },
      { name: "Tanvi Nair — UI Specialist", score: "81", status: "REVIEWED" }
    ],
    INTERVIEW: [
      { name: "Arjun Verma — Product Eng", score: "89", status: "LIVE NOW" },
      { name: "Neha Sharma — Backend Lead", score: "90", status: "SCHEDULED" }
    ],
    OFFER: [
      { name: "Priya Khurana — Sr Frontend", score: "92", status: "SENT" },
      { name: "Maya Sundaram — Sr Frontend", score: "88", status: "ACCEPTED" },
      { name: "Rohan Kapoor — Design Eng", score: "84", status: "SENT" }
    ]
  };

  // §06 Job Postings State
  const [activeBoard, setActiveBoard] = useState<"LinkedIn" | "Hacker News" | "Wellfound">("LinkedIn");
  const boardMetrics = {
    LinkedIn: { traffic: "↑ 24 / day", applicants: "184 applicants", sync: "SYNCED 2m AGO" },
    "Hacker News": { traffic: "↑ 42 / day", applicants: "42 applicants", sync: "SYNCED 10m AGO" },
    Wellfound: { traffic: "↑ 18 / day", applicants: "64 applicants", sync: "SYNCED 1h AGO" }
  };

  // §07 Proctoring State
  const [proctorViolations, setProctorViolations] = useState(0);
  const [isTabSwitched, setIsTabSwitched] = useState(false);
  const [simulateActive, setSimulateActive] = useState(false);

  const triggerSimulation = () => {
    if (simulateActive) return;
    setSimulateActive(true);
    setIsTabSwitched(true);
    setProctorViolations(prev => prev + 1);
    setTimeout(() => {
      setIsTabSwitched(false);
      setSimulateActive(false);
    }, 2000);
  };

  // §08 Scoring Engine State
  const [selectedCandidate, setSelectedCandidate] = useState<"Priya" | "Maya" | "Rohan">("Priya");
  
  const candidateScores = {
    Priya: { tech: 92, comms: 88, solving: 94, systems: 90, overall: 91 },
    Maya: { tech: 88, comms: 92, solving: 85, systems: 87, overall: 88 },
    Rohan: { tech: 82, comms: 85, solving: 89, systems: 80, overall: 84 }
  };

  // §09 College Onboarding State
  const [parsingProgress, setParsingProgress] = useState(100);
  const [isParsing, setIsParsing] = useState(false);
  const [parseStatus, setParseStatus] = useState("READY");

  const runParseSimulation = () => {
    if (isParsing) return;
    setIsParsing(true);
    setParsingProgress(0);
    setParseStatus("PARSING CSV...");
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setParsingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsParsing(false);
        setParseStatus("✓ SUCCESSFULLY PARSED CSE 2026 Batch!");
      }
    }, 50);
  };

  // §10 Placement Analytics State
  const [analyticsYear, setAnalyticsYear] = useState<"2024" | "2025" | "2026">("2026");
  
  const analyticsData = {
    "2024": { rate: "61%", pkg: "₹9.8L", top: "₹34L", path: "M10 60 L60 55 L110 52 L160 48 L210 50 L260 42 L310 38 L370 30" },
    "2025": { rate: "67%", pkg: "₹12.2L", top: "₹45L", path: "M10 60 L60 50 L110 48 L160 38 L210 40 L260 30 L310 24 L370 18" },
    "2026": { rate: "72%", pkg: "₹14.8L", top: "₹62L", path: "M10 60 L60 50 L110 45 L160 30 L210 35 L260 22 L310 18 L370 12" }
  };

  // §11 Notifications State
  const [toasts, setToasts] = useState<{ id: number; message: string; sub: string }[]>([]);
  const toastIdRef = useRef(0);

  const triggerToast = (msg: string, sub: string) => {
    const id = toastIdRef.current++;
    setToasts(prev => [...prev, { id, message: msg, sub }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // §12 Security SSO State
  const [activeSSO, setActiveSSO] = useState<"Okta" | "Google" | "Azure">("Google");
  const [ssoStatus, setSsoStatus] = useState("CONNECTED");

  const triggerSSOHandshake = (provider: "Okta" | "Google" | "Azure") => {
    setActiveSSO(provider);
    setSsoStatus("HANDSHAKING...");
    setTimeout(() => {
      setSsoStatus("CONNECTED AND SECURE ✓");
    }, 800);
  };



  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <BackToTop />

      {/* Floating Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-item">
            <span className="toast-title">{toast.sub}</span>
            <span className="toast-body">{toast.message}</span>
          </div>
        ))}
      </div>

      <SignalBar />

      {/* §00 HERO */}
      <section className="dark-mesh section-edge" style={{ padding: "96px 0 80px" }}>
        <div className="container">
          <Breadcrumbs />
          <div className="sx-ribbon">
            <span className="idx">§00<span className="slash"> / </span><span className="name">FEATURES</span></span>
            <span>EVERY MODULE · IN ONE PLACE</span>
          </div>
          <div className="serif-kicker">An honest tour of the platform.</div>
          <div className="eyebrow" style={{ marginTop: "18px" }}>FEATURES INDEX</div>
          <h1 className="display mt-24" style={{ maxWidth: "1100px" }}>
            <span className="bone-grad">Everything we've built,</span><br />
            <span className="muted-weight">on one page.</span>
          </h1>
          <p className="subhead">Twelve modules. One platform. No hidden upsells, no asterisks. Click any item to jump straight to it.</p>

          {/* Index TOC */}
          <div className="rule-label" style={{ marginTop: "56px" }}>CONTENTS · 12 MODULES</div>
          <div className="toc-grid">
            <div onClick={() => smoothScroll("f01")} className="toc-item"><span className="num">§01</span><span className="lab">Resume Builder</span></div>
            <div onClick={() => smoothScroll("f02")} className="toc-item"><span className="num">§02</span><span className="lab">Smart Matching</span></div>
            <div onClick={() => smoothScroll("f03")} className="toc-item"><span className="num">§03</span><span className="lab">AI Mock Interviews</span></div>
            <div onClick={() => smoothScroll("f04")} className="toc-item"><span className="num">§04</span><span className="lab">Career Roadmaps</span></div>
            <div onClick={() => smoothScroll("f05")} className="toc-item"><span className="num">§05</span><span className="lab">Recruiter ATS</span></div>
            <div onClick={() => smoothScroll("f06")} className="toc-item"><span className="num">§06</span><span className="lab">Job Postings</span></div>
            <div onClick={() => smoothScroll("f07")} className="toc-item"><span className="num">§07</span><span className="lab">Proctoring</span></div>
            <div onClick={() => smoothScroll("f08")} className="toc-item"><span className="num">§08</span><span className="lab">Scoring Engine</span></div>
            <div onClick={() => smoothScroll("f09")} className="toc-item"><span className="num">§09</span><span className="lab">Bulk Onboarding</span></div>
            <div onClick={() => smoothScroll("f10")} className="toc-item"><span className="num">§10</span><span className="lab">Placement Analytics</span></div>
            <div onClick={() => smoothScroll("f11")} className="toc-item"><span className="num">§11</span><span className="lab">PDF Reports</span></div>
            <div onClick={() => smoothScroll("f12")} className="toc-item"><span className="num">§12</span><span className="lab">Auth &amp; Security</span></div>
          </div>
        </div>
      </section>

      {/* §00.5 PRODUCT TOUR */}
      <section className="dark-mesh section" id="f00.5" style={{ borderTop: "1px solid var(--border-d)", borderBottom: "1px solid var(--border-d)", padding: "80px 0" }}>
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§00.5<span className="slash"> / </span><span className="name">PRODUCT TOUR</span></span>
            <span>CLICK-THROUGH WALKTHROUGH</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: "16px" }}>PRODUCT TOUR</div>
          <h2 className="h-section" style={{ marginBottom: "40px" }}>
            Take an interactive<br /><span className="muted-weight">product walkthrough.</span>
          </h2>
          <ProductTour />
        </div>
      </section>

      {/* §01 Resume Builder */}
      <section className="light section" id="f01">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§01<span className="slash"> / </span><span className="name">RESUME BUILDER</span></span>
            <span style={{ color: "var(--l-2)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>CANDIDATES</span>
          </div>
          <div className="feat-row">
            <div className="num">01</div>
            <div className="info">
              <h3>Resume Builder</h3>
              <p>Craft a beautifully formatted, single-column resume optimized for ATS parser rubrics. Generates clean PDF exports.</p>
              <div className="checks">
                <span className="ck">ATS-rubric optimized</span>
                <span className="ck">Single-page standard layouts</span>
                <span className="ck">JSON export/import available</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                <span onClick={() => setActiveResumeRole("Stripe")} className={`v-pill ${activeResumeRole === "Stripe" ? "active" : ""}`}>STRIPE SPEC</span>
                <span onClick={() => setActiveResumeRole("Linear")} className={`v-pill ${activeResumeRole === "Linear" ? "active" : ""}`}>LINEAR SPEC</span>
                <span onClick={() => setActiveResumeRole("Vercel")} className={`v-pill ${activeResumeRole === "Vercel" ? "active" : ""}`}>VERCEL SPEC</span>
              </div>
              <div className="v-list" style={{ marginTop: "12px" }}>
                {resumeData[activeResumeRole].map((r, idx) => (
                  <div key={idx} className="v-li">
                    <span>{r.label}</span>
                    <span className="meta">{r.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §02 Smart Matching */}
      <section className="dark-mesh section" id="f02">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§02<span className="slash"> / </span><span className="name">SMART MATCHING</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>CANDIDATES</span>
          </div>
          <div className="feat-row">
            <div className="num">02</div>
            <div className="info">
              <h3>Smart Matching</h3>
              <p>Match your scorecards against active jobs. Skip cold emails and search filters—view role compatibility based on actual technical footprints.</p>
              <div className="checks">
                <span className="ck">Multi-dimensional matrix matches</span>
                <span className="ck">Zero recruiter bias scoring</span>
                <span className="ck">Calibrated matching engine</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                <span onClick={() => setActiveMatchFilter("Frontend")} className={`v-pill ${activeMatchFilter === "Frontend" ? "active" : ""}`}>FRONTEND TRK</span>
                <span onClick={() => setActiveMatchFilter("Design")} className={`v-pill ${activeMatchFilter === "Design" ? "active" : ""}`}>DESIGN TRK</span>
                <span onClick={() => setActiveMatchFilter("Fullstack")} className={`v-pill ${activeMatchFilter === "Fullstack" ? "active" : ""}`}>FULLSTACK TRK</span>
              </div>
              <div className="v-list" style={{ marginTop: "12px" }}>
                {matchData[activeMatchFilter].map((m, idx) => (
                  <div key={idx} className="v-li">
                    <span>{m.title}</span>
                    <span className={`meta ${m.high ? 'amber' : ''}`} style={{ color: m.high ? 'var(--amber)' : 'inherit' }}>{m.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §03 AI Mock Interviews */}
      <section className="light section" id="f03">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§03<span className="slash"> / </span><span className="name">AI INTERVIEWS</span></span>
            <span style={{ color: "var(--l-2)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>CANDIDATES</span>
          </div>
          <div className="feat-row">
            <div className="num">03</div>
            <div className="info">
              <h3>AI Mock Interviews</h3>
              <p>Practice with realistic technical questions from real FAANG &amp; startup pipelines. AI listens, transcribes, and scores your answers immediately.</p>
              <div className="checks">
                <span className="ck">Audio-transcribed answers</span>
                <span className="ck">Calibrated technical rubrics</span>
                <span className="ck">Follow-up questions adapt dynamically</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                <span className="v-pill amber" style={{ pointerEvents: "none" }}>▢ LIVE TRANSCRIPT</span>
                <span className="v-pill active">Q {activeQuestionIdx + 1}/{questions.length}</span>
              </div>
              <div className="v-list" style={{ marginTop: "12px", gap: "10px" }}>
                <div className="v-li" style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
                  <div className="mono" style={{ color: "var(--amber)", fontSize: "9px", letterSpacing: "0.12em" }}>▢ AI INTERVIEWER</div>
                  <div style={{ fontSize: "11px", lineHeight: "1.55", color: "var(--d-1)" }}>{questions[activeQuestionIdx].q}</div>
                </div>
                <div className="v-li">
                  <span style={{ fontSize: "10px", color: "var(--d-2)" }}>Technical Score</span>
                  <span className="meta" style={{ color: "var(--amber)" }}>{questions[activeQuestionIdx].tech}/100</span>
                </div>
                <div className="v-li">
                  <span style={{ fontSize: "10px", color: "var(--d-2)" }}>Comm. Score</span>
                  <span className="meta">{questions[activeQuestionIdx].comms}/100</span>
                </div>
              </div>
              <button
                onClick={handleNextQuestion}
                className="v-pill active"
                style={{ marginTop: "8px", cursor: "pointer", border: "none", width: "100%" }}
              >
                ▢ NEXT QUESTION →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* §04 Career Roadmaps */}
      <section className="dark-mesh section" id="f04">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§04<span className="slash"> / </span><span className="name">ROADMAPS</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>CANDIDATES</span>
          </div>
          <div className="feat-row">
            <div className="num">04</div>
            <div className="info">
              <h3>Career Roadmaps</h3>
              <p>Follow a progressive curriculum that scales with your goals. Identifies skill gaps from assessments and maps them directly to learning tracks.</p>
              <div className="checks">
                <span className="ck">Dynamic interactive node maps</span>
                <span className="ck">Connected directly to LMS specs</span>
                <span className="ck">Actionable progress stats</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                {Object.keys(skillDescriptions).map((sk) => (
                  <span 
                    key={sk} 
                    onMouseEnter={() => setHoveredSkill(sk)}
                    className={`v-pill ${hoveredSkill === sk ? 'active' : ''}`}
                  >
                    {sk}
                  </span>
                ))}
              </div>
              <div className="v-list" style={{ marginTop: "12px" }}>
                <div className="v-li" style={{ minHeight: "48px", display: "block" }}>
                  <div className="mono" style={{ color: "var(--amber)", fontSize: "9px", marginBottom: "4px" }}>▢ TARGET METRIC</div>
                  <div style={{ fontSize: "11px", lineHeight: "1.4" }}>{skillDescriptions[hoveredSkill]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §05 Recruiter ATS */}
      <section className="light section" id="f05">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§05<span className="slash"> / </span><span className="name">RECRUITER ATS</span></span>
            <span style={{ color: "var(--l-2)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>EMPLOYERS</span>
          </div>
          <div className="feat-row">
            <div className="num">05</div>
            <div className="info">
              <h3>Recruiter ATS</h3>
              <p>Track candidates through custom pipeline stages. Move candidates between assessment, screening, technical, and offer stages instantly.</p>
              <div className="checks">
                <span className="ck">Drag and drop Kanban views</span>
                <span className="ck">Scorecards aggregated in timeline</span>
                <span className="ck">Automatic stage-transition triggers</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                {(["APPLIED", "SCREEN", "INTERVIEW", "OFFER"] as const).map((stg) => (
                  <span 
                    key={stg} 
                    onClick={() => setActiveATSStage(stg)}
                    className={`v-pill ${activeATSStage === stg ? 'active' : ''}`}
                  >
                    {stg}
                  </span>
                ))}
              </div>
              <div className="v-list" style={{ marginTop: "12px" }}>
                {atsData[activeATSStage].map((a, idx) => (
                  <div key={idx} className="v-li">
                    <span>{a.name}</span>
                    <span className="meta" style={{ color: a.status === 'ACCEPTED' ? 'var(--brand-green, #1F8A5B)' : 'inherit' }}>{a.status} (SC: {a.score})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §06 Job Postings */}
      <section className="dark-mesh section" id="f06">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§06<span className="slash"> / </span><span className="name">JOB POSTINGS</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>EMPLOYERS</span>
          </div>
          <div className="feat-row">
            <div className="num">06</div>
            <div className="info">
              <h3>Job Postings</h3>
              <p>Create branded public company career pages. Instantly sync open roles to major networks including LinkedIn and Hacker News with single-point posting.</p>
              <div className="checks">
                <span className="ck">Dynamic branded layouts</span>
                <span className="ck">Multi-network API syndication</span>
                <span className="ck">Automatic application parsers</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                {(["LinkedIn", "Hacker News", "Wellfound"] as const).map((b) => (
                  <span 
                    key={b} 
                    onClick={() => setActiveBoard(b)}
                    className={`v-pill ${activeBoard === b ? 'active' : ''}`}
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="v-list" style={{ marginTop: "12px" }}>
                <div className="v-li"><span>Channel Traffic Footprint</span><span className="meta" style={{ color: "var(--amber)" }}>{boardMetrics[activeBoard].traffic}</span></div>
                <div className="v-li"><span>Parsed Candidates (Demo Batch)</span><span className="meta">{boardMetrics[activeBoard].applicants}</span></div>
                <div className="v-li"><span>API Sync Handshake</span><span className="meta" style={{ fontFamily: "var(--font-mono)", fontSize: "9px" }}>{boardMetrics[activeBoard].sync}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §07 Proctoring */}
      <section className="light section" id="f07">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§07<span className="slash"> / </span><span className="name">PROCTORING</span></span>
            <span style={{ color: "var(--l-2)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>EMPLOYERS</span>
          </div>
          <div className="feat-row">
            <div className="num">07</div>
            <div className="info">
              <h3>Proctoring</h3>
              <p>Validate assessment integrity. Monitor tab switches, camera state, and audio presence without heavy browser extensions.</p>
              <div className="checks">
                <span className="ck">Extension-free tab tracking</span>
                <span className="ck">AI presence verification</span>
                <span className="ck">Compliance alerts aggregated in candidate record</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                <span className="v-pill amber" style={{ pointerEvents: "none" }}>▢ PROCTOR LIVE LOG</span>
                <span className="v-pill" style={{ color: isTabSwitched ? "var(--amber)" : undefined }}>
                  {isTabSwitched ? "⚠ TAB SWITCH DETECTED" : "SESSION ACTIVE"}
                </span>
              </div>
              <div className="v-list" style={{ marginTop: "12px" }}>
                <div className="v-li">
                  <span style={{ fontSize: "10px", color: "var(--l-2)" }}>Tab Violations</span>
                  <span className="meta" style={{ color: proctorViolations > 0 ? "var(--amber)" : undefined }}>{proctorViolations}</span>
                </div>
                <div className="v-li">
                  <span style={{ fontSize: "10px", color: "var(--l-2)" }}>AI Camera State</span>
                  <span className="meta" style={{ color: "var(--brand-green, #1F8A5B)" }}>FACE DETECTED ✓</span>
                </div>
                <div className="v-li">
                  <span style={{ fontSize: "10px", color: "var(--l-2)" }}>Audio Presence</span>
                  <span className="meta" style={{ color: "var(--brand-green, #1F8A5B)" }}>ACTIVE ✓</span>
                </div>
              </div>
              <button
                onClick={triggerSimulation}
                className="v-pill active"
                style={{ marginTop: "8px", cursor: simulateActive ? "not-allowed" : "pointer", border: "none", width: "100%" }}
                disabled={simulateActive}
              >
                {simulateActive ? "⚠ SIMULATING TAB SWITCH..." : "▢ SIMULATE VIOLATION"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* §08 Scoring Engine */}
      <section className="dark-mesh section" id="f08">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§08<span className="slash"> / </span><span className="name">SCORING ENGINE</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>EMPLOYERS</span>
          </div>
          <div className="feat-row">
            <div className="num">08</div>
            <div className="info">
              <h3>Scoring Engine</h3>
              <p>Evaluate candidates on 12 objective dimensions calibrated by industry data. Review explainable AI reports highlighting specific strengths and gaps.</p>
              <div className="checks">
                <span className="ck">12 core scoring metrics</span>
                <span className="ck">Explainable transcripts mapped to rubrics</span>
                <span className="ck">Calibrated rating benchmarks</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                {(["Priya", "Maya", "Rohan"] as const).map((cand) => (
                  <span 
                    key={cand} 
                    onClick={() => setSelectedCandidate(cand)}
                    className={`v-pill ${selectedCandidate === cand ? 'active' : ''}`}
                  >
                    {cand}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "var(--d-2)", marginBottom: "3px" }}><span>TECHNICAL SCORE</span><span>{candidateScores[selectedCandidate].tech}%</span></div>
                  <div className="v-bar">
                    <div style={{ width: `${candidateScores[selectedCandidate].tech}%` }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "var(--d-2)", marginBottom: "3px" }}><span>SYSTEMS DESIGN</span><span>{candidateScores[selectedCandidate].systems}%</span></div>
                  <div className="v-bar">
                    <div style={{ width: `${candidateScores[selectedCandidate].systems}%` }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "var(--d-2)", marginBottom: "3px" }}><span>OVERALL RECOMMENDATION</span><span style={{ color: "var(--amber)", fontWeight: 600 }}>{candidateScores[selectedCandidate].overall}/100</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §09 Bulk Onboarding */}
      <section className="light section" id="f09">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§09<span className="slash"> / </span><span className="name">BULK IMPORT</span></span>
            <span style={{ color: "var(--l-2)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>COLLEGES</span>
          </div>
          <div className="feat-row">
            <div className="num">09</div>
            <div className="info">
              <h3>Bulk Onboarding</h3>
              <p>Setup thousands of student accounts instantly. Parse legacy registers, student lists, or CSV spreadsheets into clean candidate dashboards in seconds.</p>
              <div className="checks">
                <span className="ck">Batch student creation via CSV</span>
                <span className="ck">Auto-matched program pipelines</span>
                <span className="ck">Instant email invite dispatches</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-list">
                <div className="v-li"><span>Import status</span><span className="meta" style={{ fontFamily: "var(--font-mono)", color: "var(--burnt)" }}>{parseStatus}</span></div>
              </div>
              <div style={{ marginTop: "10px" }}>
                <div className="v-bar" style={{ height: "4px" }}>
                  <div style={{ width: `${parsingProgress}%`, background: parsingProgress === 100 ? 'var(--brand-green, #1F8A5B)' : 'var(--amber)' }}></div>
                </div>
              </div>
              <button 
                onClick={runParseSimulation} 
                className="v-pill active" 
                style={{ marginTop: "8px", cursor: isParsing ? "not-allowed" : "pointer", border: "none" }}
                disabled={isParsing}
              >
                {isParsing ? '▢ IMPORTING COHORT...' : '▢ SIMULATE BATCH UPLOAD (85 ROWS)'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* §10 Placement Analytics */}
      <section className="dark-mesh section" id="f10">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§10<span className="slash"> / </span><span className="name">ANALYTICS</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>COLLEGES</span>
          </div>
          <div className="feat-row">
            <div className="num">10</div>
            <div className="info">
              <h3>Placement Analytics</h3>
              <p>Monitor cohort outcomes. View aggregated mock assessment rates, time-to-offer funnel metrics, and sector-by-sector hiring details dynamically.</p>
              <div className="checks">
                <span className="ck">Accurate real-time funnels</span>
                <span className="ck">Accreditation metrics standard</span>
                <span className="ck">Accredited group views available</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                {(["2024", "2025", "2026"] as const).map((year) => (
                  <span 
                    key={year} 
                    onClick={() => setAnalyticsYear(year)}
                    className={`v-pill ${analyticsYear === year ? 'active' : ''}`}
                  >
                    COHORT {year}
                  </span>
                ))}
              </div>
              <div className="v-list" style={{ marginTop: "12px" }}>
                <div className="v-li"><span>Aggregate Placement Rate</span><span className="meta" style={{ color: "var(--amber)" }}>{analyticsData[analyticsYear].rate}</span></div>
                <div className="v-li"><span>Average Package (CTC)</span><span className="meta">{analyticsData[analyticsYear].pkg}</span></div>
                <div className="v-li"><span>Highest Campus Offer</span><span className="meta" style={{ color: "var(--amber)" }}>{analyticsData[analyticsYear].top}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §11 PDF Reports */}
      <section className="light section" id="f11">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§11<span className="slash"> / </span><span className="name">PDF REPORTS</span></span>
            <span style={{ color: "var(--l-2)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>COLLEGES</span>
          </div>
          <div className="feat-row">
            <div className="num">11</div>
            <div className="info">
              <h3>PDF Reports</h3>
              <p>Export robust, printable per-student profile packages detailing every mock score, behavioral rubric, and job status. Ready for compliance cycles.</p>
              <div className="checks">
                <span className="ck">Print-ready CSS standards</span>
                <span className="ck">Co-signed verified credentials</span>
                <span className="ck">NAAC &amp; NIRF format compliance</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                <span className="v-pill amber" style={{ pointerEvents: "none" }}>▢ PDF PREVIEW</span>
                <span className="v-pill active">NAAC · NIRF FORMAT</span>
              </div>
              <div className="v-list" style={{ marginTop: "12px" }}>
                <div className="v-li" style={{ flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                  <div className="mono" style={{ fontSize: "9px", color: "var(--amber)", letterSpacing: "0.12em", marginBottom: "4px" }}>▢ REPORT STRUCTURE</div>
                  {[
                    "Section A · Personal Profile",
                    "Section B · Mock Assessment Scores",
                    "Section C · Offer & Placement Status",
                    "Section D · Behavioral Rubric Breakdown",
                    "Section E · Compliance Sign-off"
                  ].map((item, i) => (
                    <div key={i} style={{ fontSize: "10px", color: "var(--l-2)", paddingLeft: "8px" }}>✓ {item}</div>
                  ))}
                </div>
                <div className="v-li">
                  <span style={{ fontSize: "10px", color: "var(--l-2)" }}>Export Format</span>
                  <span className="meta" style={{ color: "var(--brand-green, #1F8A5B)" }}>PDF/A · SIGNED ✓</span>
                </div>
              </div>
              <button
                onClick={() => triggerToast("PDF export queued. Generating compliance report for Batch 2026...", "PDF Exporter")}
                className="v-pill active"
                style={{ marginTop: "8px", cursor: "pointer", border: "none", width: "100%" }}
              >
                ▢ SIMULATE EXPORT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* §12 Auth & Security */}
      <section className="dark-mesh section" id="f12">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§12<span className="slash"> / </span><span className="name">SECURITY</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>SECURITY</span>
          </div>
          <div className="feat-row">
            <div className="num">12</div>
            <div className="info">
              <h3>Auth &amp; Security</h3>
              <p>Google OAuth, phone OTP, SAML SSO for enterprise. SOC 2 Type II. Data encrypted in transit and at rest.</p>
              <div className="checks">
                <span className="ck">GOOGLE OAUTH</span>
                <span className="ck">PHONE OTP</span>
                <span className="ck">SAML · SSO</span>
                <span className="ck">SOC 2 · TYPE II</span>
              </div>
            </div>
            <div className="visual">
              <div className="v-row">
                <span className="v-pill amber" style={{ pointerEvents: "none" }}>▢ SOC 2 TYPE II</span>
                <span onClick={() => triggerSSOHandshake("Google")} className={`v-pill ${activeSSO === "Google" ? "active" : ""}`}>GOOGLE SSO</span>
                <span onClick={() => triggerSSOHandshake("Okta")} className={`v-pill ${activeSSO === "Okta" ? "active" : ""}`}>OKTA SAML</span>
                <span onClick={() => triggerSSOHandshake("Azure")} className={`v-pill ${activeSSO === "Azure" ? "active" : ""}`}>AZURE AD</span>
              </div>
              <div className="v-list" style={{ marginTop: "4px" }}>
                <div className="v-li"><span>TLS 1.3 in transit · AES-256 at rest</span><span className="meta" style={{ color: "var(--burnt)" }}>✓</span></div>
                <div className="v-li"><span>Per-tenant data isolation</span><span className="meta" style={{ color: "var(--burnt)" }}>✓</span></div>
                <div className="v-li"><span>Handshake Status ({activeSSO})</span><span className="meta" style={{ color: "var(--burnt)" }}>{ssoStatus}</span></div>
                <div className="v-li"><span>Quarterly third-party penetration tests</span><span className="meta" style={{ color: "var(--burnt)" }}>✓</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX LIGHT */}
      <section className="light section" id="f13">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§13<span className="slash"> / </span><span className="name">COMPARE</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--l-2)" }}>VS THE CATEGORY</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: "16px" }}>COMPARE</div>
          <h2 className="h-section">
            Why teams switch to<br /><span className="muted-weight">CareerXel.</span>
          </h2>

          <CompetitorComparison />
        </div>
      </section>

      {/* §14 CTA */}
      <section className="cta-mesh page-cta" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§14<span className="slash"> / </span><span className="name">START</span></span>
            <span>FREE · NO CARD</span>
          </div>
          <div className="eyebrow" style={{ justifyContent: "center", margin: "0 auto 18px" }}>START FREE</div>
          <h2 className="display"><span className="bone-grad">Try every feature today.</span></h2>
          <p style={{ fontSize: "19px", color: "var(--d-2)", maxWidth: "600px", margin: "24px auto 0" }}>No card required. Every module included on the free tier.</p>
          <div className="flex gap-12 mt-32" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="#">Start free</a>
            <a className="btn btn-ghost" href="/pricing">See pricing</a>
          </div>
        </div>
      </section>
    </main>
  );
}
