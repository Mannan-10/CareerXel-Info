'use client';

import React, { useState } from "react";
import SignalBar from "@/components/sections/SignalBar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import "./employers.css";

interface Candidate {
  id: string;
  name: string;
  role: string;
  stage: string;
  score: number;
  summary: string;
  skills: string;
  activity: string;
  initial: string;
}

interface KanbanCard {
  id: string;
  name: string;
  role: string;
  column: "APPLIED" | "SCREEN" | "INTERVIEW" | "OFFER";
  subText: string;
}

interface TemplateItem {
  id: string;
  category: "INTERVIEW" | "EMAIL" | "CODE QS" | "SCORECARDS" | "OFFER";
  title: string;
  meta: string;
  desc: string;
}

export default function EmployersContent() {
  // Recruiter Dashboard Toasts State
  const [toasts, setToasts] = useState<{ id: number; message: string; sub: string }[]>([]);
  const toastIdRef = React.useRef(0);

  const triggerToast = (msg: string, sub: string) => {
    const id = toastIdRef.current++;
    setToasts((prev) => [...prev, { id, message: msg, sub }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // 1. Kanban Pipeline State
  const [kanbanCards, setKanbanCards] = useState<KanbanCard[]>([
    { id: "1", name: "M. Sundaram", role: "SR FE", column: "APPLIED", subText: "02 MAY" },
    { id: "2", name: "A. Patel", role: "SR FE", column: "APPLIED", subText: "02 MAY" },
    { id: "3", name: "J. Lee", role: "SR FE", column: "SCREEN", subText: "PHONE" },
    { id: "4", name: "D. Shah", role: "SR FE", column: "APPLIED", subText: "02 MAY" },
    { id: "5", name: "P. Khurana", role: "FINAL", column: "INTERVIEW", subText: "15 MAY" },
    { id: "6", name: "R. Kim", role: "SCREEN 1", column: "SCREEN", subText: "SCREEN 1" },
    { id: "7", name: "L. Cruz", role: "SCREEN 2", column: "SCREEN", subText: "CODE" },
    { id: "8", name: "S. Iyer", role: "FINAL", column: "INTERVIEW", subText: "FINAL" },
    { id: "9", name: "N. Adler", role: "TECH", column: "INTERVIEW", subText: "TECH" },
    { id: "10", name: "Priya K.", role: "SIGNED", column: "OFFER", subText: "SIGNED" },
    { id: "11", name: "Maya S.", role: "PENDING", column: "OFFER", subText: "PENDING" },
  ]);

  // Click on Kanban card to advance stage
  const handleCardClick = (id: string) => {
    setKanbanCards((prev) =>
      prev.map((card) => {
        if (card.id === id) {
          let nextCol: "APPLIED" | "SCREEN" | "INTERVIEW" | "OFFER" = "APPLIED";
          if (card.column === "APPLIED") nextCol = "SCREEN";
          else if (card.column === "SCREEN") nextCol = "INTERVIEW";
          else if (card.column === "INTERVIEW") nextCol = "OFFER";
          else if (card.column === "OFFER") nextCol = "APPLIED"; // loop
          return { ...card, column: nextCol };
        }
        return card;
      })
    );
  };

  // Draggable Drop Handlers
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);
  const [draggingCardId, setDraggingCardId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    e.dataTransfer.setData("text/plain", cardId);
    setDraggingCardId(cardId);
  };

  const handleDragEnd = () => {
    setDraggingCardId(null);
    setDragOverCol(null);
  };

  const handleDrop = (e: React.DragEvent, targetColumn: "APPLIED" | "SCREEN" | "INTERVIEW" | "OFFER") => {
    e.preventDefault();
    setDraggingCardId(null);
    setDragOverCol(null);
    const cardId = e.dataTransfer.getData("text/plain");
    if (cardId) {
      setKanbanCards((prev) =>
        prev.map((c) => (c.id === cardId ? { ...c, column: targetColumn } : c))
      );
      const movedCard = kanbanCards.find((c) => c.id === cardId);
      triggerToast(`Moved ${movedCard?.name || 'candidate'} to ${targetColumn} stage successfully.`, "Kanban Pipeline");
    }
  };

  // 2. Candidate Filters & Directory States
  const [filterScore80, setFilterScore80] = useState(false);
  const [filterScreenOnly, setFilterScreenOnly] = useState(false);
  const [filterRemoteOnly, setFilterRemoteOnly] = useState(false);

  // 2. ATS Candidates state
  const [expandedId, setExpandedId] = useState<string>("PK"); // PRIYA KHURANA default
  const candidates: Candidate[] = [
    {
      id: "MS",
      name: "M. Sundaram",
      role: "Sr Frontend",
      stage: "SCREEN 1",
      score: 88,
      summary: "Frontend Lead at Mercer. Architected micro-frontend platform. Expertise in React and Webpack optimization.",
      skills: "React · Redux · Webpack · Micro-frontends · Jest · CSS Modules",
      activity: "Completed technical assessment · 42 min · 10 questions",
      initial: "MS"
    },
    {
      id: "PK",
      name: "P. Khurana",
      role: "Sr Frontend",
      stage: "INTERVIEW",
      score: 92,
      summary: "Senior FE at Quanta. Shipped design-tokens pipeline used by 40+ apps. Edge SSR for 4M MAUs.",
      skills: "React · TypeScript · Edge runtime · Design systems · Perf · A11y",
      activity: "Completed mock interview · 28 min · 12 questions",
      initial: "PK"
    },
    {
      id: "AP",
      name: "A. Patel",
      role: "Sr Frontend",
      stage: "APPLIED",
      score: 81,
      summary: "Fullstack spec. Strong in Node.js backend integrations, React dashboards and CI/CD pipelines.",
      skills: "Next.js · Node.js · GraphQL · AWS · Docker · TailwindCSS",
      activity: "Applied via college portal · Profile parsed successfully",
      initial: "AP"
    },
    {
      id: "JL",
      name: "J. Lee",
      role: "Sr Frontend",
      stage: "SCREEN 2",
      score: 85,
      summary: "Design Engineer with deep focus on UI motion, interactive web-audio graphs, and SVG illustrations.",
      skills: "Three.js · Framer Motion · SVG · Web Audio · TypeScript · WebGL",
      activity: "Completed screening chat · Automated invitation dispatched",
      initial: "JL"
    }
  ];

  // 3. Templates Category State
  const [activeCategory, setActiveCategory] = useState<"INTERVIEW" | "EMAIL" | "CODE QS" | "SCORECARDS" | "OFFER">("INTERVIEW");
  const templates: TemplateItem[] = [
    // INTERVIEWS
    { id: "t1", category: "INTERVIEW", title: "Senior FE · Tech Screen", meta: "12 QS · 45 MIN", desc: "SR FRONTEND" },
    { id: "t2", category: "INTERVIEW", title: "Senior FE · System Design", meta: "8 QS · 60 MIN", desc: "SR FRONTEND" },
    { id: "t3", category: "INTERVIEW", title: "Design Engineer · Portfolio", meta: "10 QS · 30 MIN", desc: "DESIGN ENG" },
    { id: "t4", category: "INTERVIEW", title: "PM · Case Study", meta: "6 QS · 60 MIN", desc: "PRODUCT" },
    { id: "t5", category: "INTERVIEW", title: "SRE · Incident Walkthrough", meta: "10 QS · 45 MIN", desc: "SRE" },
    { id: "t6", category: "INTERVIEW", title: "Data Eng · SQL + Pipelines", meta: "14 QS · 60 MIN", desc: "DATA" },
    // EMAILS
    { id: "t7", category: "EMAIL", title: "Tech Screen Invitation", meta: "AUTO-TRIGGER", desc: "EMAIL / CANDIDATES" },
    { id: "t8", category: "EMAIL", title: "Follow-up (Strong Rec)", meta: "1-CLICK SEND", desc: "EMAIL / SYSTEM" },
    { id: "t9", category: "EMAIL", title: "Accredited Pilot Welcome", meta: "TEMPLATE", desc: "EMAIL / SOLUTIONS" },
    // CODE QS
    { id: "t10", category: "CODE QS", title: "Token Bucket Rate Limiter", meta: "ALGORITHMIC", desc: "CODE / DS" },
    { id: "t11", category: "CODE QS", title: "Design Tokens Transpiler", meta: "PARSING · JS", desc: "CODE / FRONTEND" },
    { id: "t12", category: "CODE QS", title: "Concurrency Scheduler", meta: "ASYNC · INTERMEDIATE", desc: "CODE / TS" },
    // SCORECARDS
    { id: "t13", category: "SCORECARDS", title: "System Design Rubric V2", meta: "12 DIMENSIONS", desc: "RUBRICS" },
    { id: "t14", category: "SCORECARDS", title: "Behavioral Alignment standard", meta: "8 FACTORS", desc: "RUBRICS" },
    // OFFER
    { id: "t15", category: "OFFER", title: "US/SF Standard Offer Package", meta: "S3 SECURE", desc: "OFFERS" },
    { id: "t16", category: "OFFER", title: "India Standard Offer (INR)", meta: "S3 SECURE", desc: "OFFERS" },
  ];

  const filteredTemplates = templates.filter(t => t.category === activeCategory);

  // Template Previews State & Data Mapping
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);

  const getTemplateContent = (tpl: TemplateItem) => {
    switch (tpl.id) {
      case "t1":
        return {
          title: "Senior FE · Tech Screen Rubric",
          body: "1. Core Javascript Event Loop & Async (3 Qs)\n2. React Concurrent Rendering & Server Components (4 Qs)\n3. Browser Engine Performance Optimization (3 Qs)\n4. CSS Grid Layout & Design Tokens integration (2 Qs)\n\nGrading criteria: Calibrated with standard Series-B startup bar.",
        };
      case "t2":
        return {
          title: "System Design Rate Limiter Spec",
          body: "Problem description: Design a distributed rate limiter to handle 10M requests per minute.\n\nEvaluation rubrics:\n- Memory usage scaling per tenant\n- Edge region caching latencies\n- Backpressure fallback strategies under partition failures\n- Sliding window vs Token Bucket tradeoffs.",
        };
      case "t7":
        return {
          title: "Automated Invitation Email Template",
          body: "Subject: Next steps with CareerXel — Technical screening invitation\n\nDear {{candidate_name}},\n\nCongratulations! Your profile has successfully passed our initial ATS filters.\nWe invite you to launch your verified, proctored AI technical screening session within the next 5 days.\n\nLink: https://careerxel.com/screen/{{session_id}}\n\nBest regards,\nTalent Team.",
        };
      case "t10":
        return {
          title: "Coding Question: Token Bucket Algorithm",
          body: "Problem Stub:\n\nexport function isRateLimited(userId: string, limit: number, windowMs: number): boolean {\n  // Implement token bucket logic using Redis or in-memory map\n  const now = Date.now();\n  // ...\n}",
        };
      default:
        return {
          title: tpl.title,
          body: `${tpl.title} configuration spec.\n\nMetadata: ${tpl.meta}\nCategory: ${tpl.category}\n\nCalibrated with enterprise secure compliance formats. Ready to load into recruiter workspace.`,
        };
    }
  };

  return (
    <main>
      <SignalBar />

      {/* §00 HERO */}
      <section className="dark-mesh p-hero" data-screen-label="00 Hero">
        <div className="container">
          <Breadcrumbs />
          <div className="sx-ribbon">
            <span className="idx">§00<span className="slash"> / </span><span className="name">FOR EMPLOYERS</span></span>
            <span>HIRE WITHOUT THE CHAOS</span>
          </div>
          <div className="p-hero-grid">
            <div>
              <div className="serif-kicker">Hiring, without the chaos.</div>
              <div className="eyebrow" style={{ marginTop: "18px" }}>FOR EMPLOYERS</div>
              <h1 className="display mt-24">
                <span className="bone-grad">Source. Screen. Hire.</span><br />
                <span className="muted-weight">Without the chaos.</span>
              </h1>
              <p className="subhead">A full-stack ATS with AI mock interviews and proctoring built in. Configure once, hire 24/7 — and trust the scoring.</p>
              <div className="flex gap-12 mt-32">
                <a className="btn btn-primary" href="#">Start free trial
                  <svg className="icon" viewBox="0 0 20 20"><path d="M5 10h10M11 6l4 4-4 4" /></svg>
                </a>
                <a className="btn btn-ghost" href="#">Talk to sales</a>
              </div>
            </div>
            <div className="p-hero-mock">
              <div className="mock kanban-mock">
                <div className="mock-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>RECRUITER · PIPELINE</span>
                </div>
                <div className="body">
                  <div className="col">
                    <h6><span>APPLIED</span><span className="ct">248</span></h6>
                    <div className="card"><div className="nm">M. Sundaram</div><div className="ro">SR FE</div></div>
                    <div className="card"><div className="nm">A. Patel</div><div className="ro">SR FE</div></div>
                    <div className="card"><div className="nm">J. Lee</div><div className="ro">SR FE</div></div>
                    <div className="card"><div className="nm">D. Shah</div><div className="ro">SR FE</div></div>
                  </div>
                  <div className="col">
                    <h6><span>SCREEN</span><span className="ct">87</span></h6>
                    <div className="card"><div className="nm">P. Khurana</div><div className="ro">SCREEN 1</div></div>
                    <div className="card"><div className="nm">R. Kim</div><div className="ro">SCREEN 1</div></div>
                    <div className="card"><div className="nm">L. Cruz</div><div className="ro">SCREEN 2</div></div>
                  </div>
                  <div className="col">
                    <h6><span>INTERVIEW</span><span className="ct">23</span></h6>
                    <div className="card"><div className="nm">S. Iyer</div><div className="ro">FINAL</div></div>
                    <div className="card"><div className="nm">N. Adler</div><div className="ro">TECH</div></div>
                  </div>
                  <div className="col">
                    <h6><span>OFFER</span><span className="ct" style={{ color: "var(--burnt)" }}>12</span></h6>
                    <div className="card amber"><div className="nm">Priya K.</div><div className="ro">SIGNED</div></div>
                    <div className="card amber"><div className="nm">Maya S.</div><div className="ro">PENDING</div></div>
                  </div>
                </div>
              </div>
              <div className="frag" style={{ top: "8%", left: "-22%", transform: "rotate(-5deg)", maxWidth: "220px" }}>
                <div className="mono" style={{ color: "var(--amber)", marginBottom: "4px" }}>▢ HIRE REC</div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>STRONG · 92/100</div>
              </div>
              <div className="frag" style={{ bottom: "10%", right: "-18%", transform: "rotate(4deg)", maxWidth: "220px" }}>
                <div className="mono" style={{ color: "var(--d-3)", marginBottom: "4px" }}>▢ INTERVIEW</div>
                <div style={{ fontSize: "13px", color: "var(--d-1)" }}>Tomorrow · 14:00 IST</div>
                <div style={{ fontSize: "11px", color: "var(--d-3)", marginTop: "2px" }}>P. Khurana · Sr Frontend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §01 POSTINGS */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§01<span className="slash"> / </span><span className="name">POSTINGS</span></span>
            <span>EDITOR · PUBLIC PAGE</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">POSTINGS</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Job posts that look<br />
              <span className="muted-weight">like the brand they represent.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div className="mock job-mock">
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>JOB EDITOR</span>
              </div>
              <div className="body">
                <div className="field"><div className="l">▢ ROLE TITLE</div><div className="v">Senior Frontend Engineer</div></div>
                <div className="field-row">
                  <div className="field"><div className="l">▢ DEPT</div><div className="v">Engineering</div></div>
                  <div className="field"><div className="l">▢ MODE</div><div className="v">Remote</div></div>
                </div>
                <div className="field-row">
                  <div className="field amber"><div className="l">▢ SALARY MIN</div><div className="v">$180,000</div></div>
                  <div className="field amber"><div className="l">▢ SALARY MAX</div><div className="v">$220,000</div></div>
                </div>
                <div className="field"><div className="l">▢ LOCATIONS</div><div className="v">Remote · NYC · Bengaluru · Berlin</div></div>
                <div className="field"><div className="l">▢ APPLICATION DEADLINE</div><div className="v">2026-06-30 · 23:59 IST</div></div>
                <div className="field"><div className="l">▢ DESCRIPTION</div><div className="v" style={{ lineHeight: "1.5" }}>Build perf-critical UI used by millions. React, TypeScript, Edge SSR, design systems…</div></div>
              </div>
            </div>
            <div className="mock brand-mock">
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>CAREERXEL.COM/HELIX</span>
              </div>
              <div className="hero">
                <div className="tag">▢ HELIX · ENGINEERING</div>
                <h6>Build the next generation of network infra.</h6>
              </div>
              <div className="body">
                <div className="sec"><div className="t">ABOUT</div><div className="b">Helix is the network layer that connects every modern AI app. Hundreds of teams. One platform.</div></div>
                <div className="sec"><div className="t">CULTURE</div><div className="b">Distributed-first. Async-default. Strong opinions, weakly held — and shipped on Fridays.</div></div>
                <div className="sec"><div className="t">BENEFITS</div><div className="b">Equity · Healthcare · Sabbatical at year 4 · Conference budget.</div></div>
                <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                  <span className="m-pill amber">SR FE</span>
                  <span className="m-pill">SRE</span>
                  <span className="m-pill">DESIGN</span>
                  <span className="m-pill">+12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §02 ATS */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§02<span className="slash"> / </span><span className="name">ATS</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--l-2)" }}>EVERY APPLICANT · IN CONTEXT</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">ATS</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Every applicant,<br /><span className="muted-weight">in context.</span>
            </h2>
          </div>
          <div className="mock-l ats-mock" style={{ position: "relative" }}>
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>RECRUITER / APPLICANTS (INTERACTIVE)</span>
            </div>
            <div className="toast-container">
              {toasts.map((toast) => (
                <div key={toast.id} className="toast-item">
                  <span className="toast-title">{toast.sub}</span>
                  <span className="toast-body">{toast.message}</span>
                </div>
              ))}
            </div>

            <div className="filters">
              <span className="f on" style={{ cursor: "default" }}>▢ SR FRONTEND · 248</span>
              <span className={`f cursor-pointer ${filterScreenOnly ? "on" : ""}`} onClick={() => setFilterScreenOnly(prev => !prev)}>▢ SCREEN STAGE</span>
              <span className={`f cursor-pointer ${filterRemoteOnly ? "on" : ""}`} onClick={() => setFilterRemoteOnly(prev => !prev)}>▢ REMOTE SPEC</span>
              <span className={`f cursor-pointer ${filterScore80 ? "on" : ""}`} onClick={() => setFilterScore80(prev => !prev)}>▢ SCORE 80+</span>
              <span className="f" style={{ opacity: 0.5 }}>+ ADD FILTER</span>
            </div>
            <div className="table">
              <div className="row head">
                <div>NAME (CLICK TO DRILL DOWN)</div>
                <div>ROLE</div>
                <div>STAGE</div>
                <div>SCORE</div>
                <div>ACTION</div>
              </div>

              {candidates
                .filter((cand) => {
                  if (filterScore80 && cand.score < 80) return false;
                  if (filterScreenOnly && !cand.stage.includes("SCREEN")) return false;
                  if (filterRemoteOnly && !cand.skills.includes("Edge") && !cand.skills.includes("Three.js")) return false;
                  return true;
                })
                .map((cand) => {
                  const isExpanded = expandedId === cand.id;
                  return (
                    <React.Fragment key={cand.id}>
                      <div
                        className={`row ${isExpanded ? 'expanded' : ''}`}
                        onClick={() => setExpandedId(isExpanded ? "" : cand.id)}
                      >
                        <div className="nm" style={{ color: isExpanded ? 'var(--burnt)' : 'var(--l-1)' }}>
                          {cand.name}
                        </div>
                        <div className="role">{cand.role}</div>
                        <div className="stat">{cand.stage}</div>
                        <div className="score">{cand.score}</div>
                        <div className="stat">{isExpanded ? '▼' : '▶'}</div>
                      </div>

                      {isExpanded && (
                        <div className="expand">
                          <div className="pic">{cand.initial}</div>
                          <div className="col">
                            <h6>SUMMARY</h6>
                            <p>{cand.summary}</p>
                            <h6>SKILLS</h6>
                            <p>{cand.skills}</p>
                          </div>
                          <div className="col">
                            <h6>AI MOCK SCORE</h6>
                            <p style={{ color: "var(--burnt)", fontWeight: 500, fontSize: "18px" }}>
                              {cand.score} / 100 · {cand.score >= 90 ? 'STRONG' : 'PASSED'}
                            </p>
                            <h6>RECENT ACTIVITY</h6>
                            <p>{cand.activity}</p>
                          </div>
                          <div className="col" style={{ borderLeft: "1px solid var(--border-l)", paddingLeft: "16px" }}>
                            <h6>WORKACTION PANEL</h6>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
                              <button onClick={(e) => { e.stopPropagation(); triggerToast(`Sent invitation to ${cand.name} for Round 2 technical screen.`, "ATS Pipeline"); }} className="v-pill active" style={{ fontSize: "10px", padding: "6px 10px", border: "none", textAlign: "center" }}>▢ INVITE ROUND 2</button>
                              <button onClick={(e) => { e.stopPropagation(); triggerToast(`Sign-off completed. Dispatched premium offer letter to ${cand.name}!`, "ATS Pipeline"); }} className="v-pill active" style={{ fontSize: "10px", padding: "6px 10px", border: "none", background: "var(--success, #4A8C5C)", textAlign: "center" }}>▢ INITIATE OFFER</button>
                              <button onClick={(e) => { e.stopPropagation(); triggerToast(`Marked ${cand.name} as declined. Deactivation email dispatched.`, "ATS Pipeline"); }} className="v-pill" style={{ fontSize: "10px", padding: "6px 10px", color: "var(--error)", borderColor: "rgba(196,69,69,0.3)", textAlign: "center" }}>▢ DECLINE APPLICATION</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
            </div>
            <div className="frag" style={{ background: "rgba(252,250,246,0.85)", color: "var(--l-1)", borderColor: "var(--border-l)", top: "12%", right: "-10%", transform: "rotate(4deg)", maxWidth: "220px" }}>
              <div className="mono" style={{ color: "var(--burnt)", marginBottom: "4px" }}>▢ BULK UPLOAD</div>
              <div style={{ fontSize: "13px", fontWeight: 500 }}>247 resumes · 92% parsed</div>
            </div>
          </div>
        </div>
      </section>

      {/* §03 PIPELINE */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§03<span className="slash"> / </span><span className="name">PIPELINE</span></span>
            <span>SLOTS · CALENDAR · OFFER</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">PIPELINE</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              From slot<br /><span className="muted-weight">to signed offer.</span>
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            <div className="mock kanban-mock" style={{ aspectRatio: "16/4.5" }}>
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>PIPELINE / SR FRONTEND (CLICK CARD TO ADVANCE)</span>
              </div>
              <div className="body" id="employers-kanban-board">
                {(["APPLIED", "SCREEN", "INTERVIEW", "OFFER"] as const).map((colName) => {
                  const cardsInCol = kanbanCards.filter(c => c.column === colName);
                  const isHovered = dragOverCol === colName;
                  return (
                    <div
                      key={colName}
                      id={`employers-kanban-col-${colName.toLowerCase()}`}
                      className={`col smooth-all ${isHovered ? "kanban-drag-hover" : ""}`}
                      onDragOver={(e) => e.preventDefault()}
                      onDragEnter={() => setDragOverCol(colName)}
                      onDragLeave={() => setDragOverCol(null)}
                      onDrop={(e) => handleDrop(e, colName)}
                    >
                      <h6>
                        <span>{colName}</span>
                        <span className="ct">{cardsInCol.length}</span>
                      </h6>
                      {cardsInCol.map((card) => {
                        const isDragging = draggingCardId === card.id;
                        return (
                          <div
                            key={card.id}
                            id={`employers-kanban-card-${card.id}`}
                            className={`card smooth-all ${colName === 'OFFER' ? 'amber' : ''} ${isDragging ? "kanban-card-dragging" : ""}`}
                            draggable={true}
                            onDragStart={(e) => handleDragStart(e, card.id)}
                            onDragEnd={handleDragEnd}
                            onClick={() => handleCardClick(card.id)}
                            title="Drag to column or click to advance"
                            style={{ cursor: "grab" }}
                          >
                            <div className="nm">{card.name}</div>
                            <div className="ro">{card.subText}</div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connecting amber line */}
            <div style={{ height: "40px", position: "relative", margin: "16px 0" }}>
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, transparent, var(--amber), transparent)" }}></div>
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", padding: "4px 12px", background: "var(--surface-1)", border: "1px solid rgba(74,139,255,0.4)", borderRadius: "999px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--amber)" }}>↓ FLOW</div>
            </div>

            <div className="mock cal-mock">
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>CALENDAR / MAY 2026</span>
              </div>
              <div className="body">
                <div className="day-h">MON</div><div className="day-h">TUE</div><div className="day-h">WED</div><div className="day-h">THU</div><div className="day-h">FRI</div><div className="day-h">SAT</div><div className="day-h">SUN</div>
                <div className="cell"><span className="num">5</span></div>
                <div className="cell has"><span className="num">6</span></div>
                <div className="cell"><span className="num">7</span></div>
                <div className="cell has2"><span className="num">8</span></div>
                <div className="cell has"><span className="num">9</span></div>
                <div className="cell"><span className="num">10</span></div>
                <div className="cell"><span className="num">11</span></div>
                <div className="cell has"><span className="num">12</span></div>
                <div className="cell"><span className="num">13</span></div>
                <div className="cell has"><span className="num">14</span></div>
                <div className="cell has2"><span className="num">15</span></div>
                <div className="cell has"><span className="num">16</span></div>
                <div className="cell"><span className="num">17</span></div>
                <div className="cell"><span className="num">18</span></div>
                <div className="cell"><span className="num">19</span></div>
                <div className="cell has"><span className="num">20</span></div>
                <div className="cell"><span className="num">21</span></div>
                <div className="cell has"><span className="num">22</span></div>
                <div className="cell"><span className="num">23</span></div>
                <div className="cell"><span className="num">24</span></div>
                <div className="cell"><span className="num">25</span></div>
                <div className="cell"><span className="num">26</span></div>
                <div className="cell has"><span className="num">27</span></div>
                <div className="cell"><span className="num">28</span></div>
                <div className="cell has"><span className="num">29</span></div>
                <div className="cell"><span className="num">30</span></div>
                <div className="cell"><span className="num">31</span></div>
                <div className="cell"><span className="num">1</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §04 AI INTERVIEWS — FEATURED */}
      <section className="dark-mesh" style={{ padding: "144px 0" }}>
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§04<span className="slash"> / </span><span className="name">AI INTERVIEWS</span></span>
            <span style={{ color: "var(--amber)" }}>FEATURED · CENTERPIECE</span>
          </div>
          <div className="serif-kicker">The interview, automated.</div>
          <div className="eyebrow" style={{ marginTop: "18px" }}>AI INTERVIEWS · FEATURED</div>
          <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 72px)", maxWidth: "1100px", marginTop: "24px" }}>
            <span className="bone-grad">Run technical interviews 24/7.</span><br />
            <span className="muted-weight">Without lifting a finger.</span>
          </h2>
          <p className="subhead" style={{ maxWidth: "760px" }}>AI-generated mock interviews per candidate and per job. Configure duration, difficulty, and skills. Identity verification, proctoring with violation detection, secure recording, AI scoring, and a hire recommendation you can trust.</p>

          <div className="mock ai-mock" style={{ marginTop: "64px" }}>
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>PROCTORED · STRIPE / SR FE / SESSION 17</span>
            </div>
            <div className="grid">
              <div className="pane">
                <h6>▢ CANDIDATE FEED</h6>
                <div className="video">
                  <div className="vid-meta"><span className="live">● REC 28:14</span><span>P. KHURANA</span></div>
                  <div className="silhouette">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="30" cy="22" r="10" />
                      <path d="M10 50c2-10 12-14 20-14s18 4 20 14" />
                    </svg>
                  </div>
                </div>
                <div className="badge">▢ PROCTORING ACTIVE · 0 VIOLATIONS</div>
                <div className="code">
                  <div><span className="kw">function</span> rateLimiter(<span className="st">key</span>) {"{"}</div>
                  <div>&nbsp;&nbsp;<span className="kw">const</span> recent = bucket(<span className="st">key</span>);</div>
                  <div>&nbsp;&nbsp;<span className="kw">if</span> (recent.length &gt;= LIMIT) <span className="kw">return</span> <span className="st">false</span>;</div>
                  <div>&nbsp;&nbsp;<span className="kw">return</span> <span className="st">true</span>;</div>
                  <div>{"}"}</div>
                </div>
              </div>
              <div className="pane">
                <h6>▢ INTERVIEWER · AI</h6>
                <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "12px", flex: 1 }}>
                  <div className="mono" style={{ color: "var(--amber)", marginBottom: "8px", fontSize: "10px" }}>Q.07 / 12</div>
                  <div style={{ fontSize: "13px", color: "var(--d-1)", lineHeight: "1.5" }}>Walk me through how you'd design a token-bucket rate limiter for a public API serving 10M req/min. What are the failure modes?</div>
                  <div style={{ marginTop: "16px", borderTop: "1px solid var(--border-d)", paddingTop: "12px" }}>
                    <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px", marginBottom: "6px" }}>FOLLOW-UPS</div>
                    <div style={{ fontSize: "11px", color: "var(--d-2)", lineHeight: "1.5" }}>→ Behavior under partial network failures?<br />→ Where would you add backpressure?<br />→ How would you scale across regions?</div>
                  </div>
                </div>
                <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "8px", padding: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 14a4 4 0 004-4V6a4 4 0 00-8 0v4a4 4 0 004 4zM6 14v1a4 4 0 008 0v-1" /></svg>
                  <div style={{ flex: 1 }}>
                    <div className="mono" style={{ color: "var(--d-3)", fontSize: "9px" }}>TRANSCRIPTION · LIVE</div>
                    <div style={{ fontSize: "11px", color: "var(--d-2)" }}>"…we'd start with an in-memory bucket, then…"</div>
                  </div>
                </div>
              </div>
              <div className="pane">
                <h6>▢ AI SCORING</h6>
                <div className="scoring">
                  <div className="gauge"><div className="gh"><span>TECHNICAL</span><span>82</span></div><div className="bar"><div style={{ width: "82%" }}></div></div></div>
                  <div className="gauge"><div className="gh"><span>COMMUNICATION</span><span>74</span></div><div className="bar"><div style={{ width: "74%", background: "var(--burnt)" }}></div></div></div>
                  <div className="gauge"><div className="gh"><span>PROBLEM SOLVING</span><span>88</span></div><div className="bar"><div style={{ width: "88%" }}></div></div></div>
                  <div className="gauge"><div className="gh"><span>OVERALL</span><span>81</span></div><div className="bar"><div style={{ width: "81%" }}></div></div></div>
                  <div style={{ padding: "10px", background: "rgba(74,139,255,0.06)", border: "1px solid rgba(74,139,255,0.4)", borderRadius: "8px", marginTop: "4px" }}>
                    <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▢ HIRE REC</div>
                    <div style={{ fontSize: "14px", fontWeight: 500, marginTop: "4px" }}>STRONG · 92/100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chips-row" style={{ marginTop: "40px", justifyContent: "center" }}>
            <span className="chip amber">IDENTITY VERIFIED</span>
            <span className="chip">VIOLATION DETECTION</span>
            <span className="chip">S3 RECORDING</span>
            <span className="chip">AI SCORING</span>
          </div>
        </div>
      </section>

      {/* §05 REUSABILITY */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§05<span className="slash"> / </span><span className="name">REUSABILITY</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--l-2)" }}>TEMPLATES · QUESTION BANKS · EMAILS</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">REUSABILITY</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Templates that scale<br /><span className="muted-weight">with your hiring volume.</span>
            </h2>
          </div>
          <div className="mock-l tpl-mock">
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>TEMPLATES / LIBRARY (FILTERABLE)</span>
            </div>
            <div className="body">
              <div className="nav">
                {(["INTERVIEW", "EMAIL", "CODE QS", "SCORECARDS", "OFFER"] as const).map((cat) => (
                  <div
                    key={cat}
                    className={`li ${activeCategory === cat ? 'on' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    ▢ {cat}
                  </div>
                ))}
              </div>
              <div className="grid-tpl">
                {filteredTemplates.map((tpl) => (
                  <div key={tpl.id} className="card" onClick={() => setSelectedTemplate(tpl)} style={{ cursor: "pointer" }}>
                    <div>
                      <div className="d">{tpl.desc}</div>
                      <div className="t" style={{ marginTop: "4px" }}>{tpl.title}</div>
                    </div>
                    <div className="d">{tpl.meta}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §06 ANALYTICS */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§06<span className="slash"> / </span><span className="name">ANALYTICS</span></span>
            <span>FUNNEL · VELOCITY · SOURCES</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">ANALYTICS</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Numbers your leadership<br /><span className="muted-weight">will actually read.</span>
            </h2>
          </div>
          <div className="mock an-mock">
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>RECRUITER · ANALYTICS · Q2 2026</span>
            </div>
            <div className="body">
              <div className="kpi"><div className="l">TIME-TO-HIRE</div><div className="v">14d</div><div className="d">▼ 42%</div></div>
              <div className="kpi"><div className="l">QUALIFIED RATE</div><div className="v">68%</div><div className="d">▲ 11%</div></div>
              <div className="kpi panel-stretch" style={{ padding: "14px" }}>
                <div className="l">▢ HIRE FUNNEL</div>
                <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div><div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.15em", color: "var(--d-2)", marginBottom: "3px" }}><span>APPLIED</span><span>248</span></div><div style={{ height: "18px", background: "rgba(74,139,255,0.7)", borderRadius: "4px" }}></div></div>
                  <div><div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.15em", color: "var(--d-2)", marginBottom: "3px" }}><span>SCREEN</span><span>87</span></div><div style={{ height: "18px", background: "rgba(74,139,255,0.55)", borderRadius: "4px", width: "65%" }}></div></div>
                  <div><div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.15em", color: "var(--d-2)", marginBottom: "3px" }}><span>INTERVIEW</span><span>42</span></div><div style={{ height: "18px", background: "rgba(42,95,217,0.6)", borderRadius: "4px", width: "38%" }}></div></div>
                  <div><div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.15em", color: "var(--d-2)", marginBottom: "3px" }}><span>OFFER</span><span>12</span></div><div style={{ height: "18px", background: "rgba(42,95,217,0.85)", borderRadius: "4px", width: "18%" }}></div></div>
                  <div><div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.15em", color: "var(--d-2)", marginBottom: "3px" }}><span>HIRED</span><span>9</span></div><div style={{ height: "18px", background: "var(--burnt)", borderRadius: "4px", width: "12%" }}></div></div>
                </div>
              </div>
              <div className="panel" style={{ gridColumn: "span 2" }}>
                <h6>HIRE VELOCITY · 6 MONTHS</h6>
                <svg viewBox="0 0 400 100" preserveAspectRatio="none" style={{ width: "100%", flex: 1 }}>
                  <g stroke="rgba(180,210,255,0.06)" strokeWidth="1">
                    <line x1="0" x2="400" y1="25" y2="25" />
                    <line x1="0" x2="400" y1="50" y2="50" />
                    <line x1="0" x2="400" y1="75" y2="75" />
                  </g>
                  <path d="M10 80 L70 70 L130 75 L190 50 L250 55 L310 35 L370 28" stroke="#4A8BFF" strokeWidth="1.8" fill="none" />
                  <path d="M10 80 L70 70 L130 75 L190 50 L250 55 L310 35 L370 28 L370 100 L10 100Z" fill="rgba(74,139,255,0.12)" />
                  <path d="M10 90 L70 88 L130 80 L190 85 L250 70 L310 65 L370 60" stroke="#A0AAC0" strokeWidth="1.4" fill="none" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §07 CTA */}
      <section className="cta-mesh page-cta" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§07<span className="slash"> / </span><span className="name">GET STARTED</span></span>
            <span>30-DAY FREE TRIAL</span>
          </div>
          <div className="eyebrow" style={{ justifyContent: "center", margin: "0 auto 18px" }}>START FREE TRIAL</div>
          <h2 className="display"><span className="bone-grad">See CareerXel for your team.</span></h2>
          <p style={{ fontSize: "19px", color: "var(--d-2)", maxWidth: "600px", margin: "24px auto 0" }}>A 30-minute demo. Real data, real candidates, real time saved.</p>
          <div className="flex gap-12 mt-32" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="#">Book a demo</a>
            <a className="btn btn-ghost" href="#">Start free trial</a>
          </div>
        </div>
      </section>

      {/* Dynamic Template Library Preview Modal */}
      {selectedTemplate && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div className="mock" style={{ maxWidth: "600px", width: "100%", margin: "0 auto", padding: "24px", background: "var(--surface-1)", border: "1px solid var(--border-d)", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="mono" style={{ color: "var(--amber)", fontSize: "10px" }}>TEMPLATE PREVIEW PRESET</div>
              <button onClick={() => setSelectedTemplate(null)} style={{ background: "transparent", border: "none", color: "var(--d-2)", fontSize: "18px", cursor: "pointer" }}>✕</button>
            </div>
            <div>
              <h4 style={{ fontSize: "20px", fontWeight: 600, color: "var(--d-1)" }}>{getTemplateContent(selectedTemplate).title}</h4>
              <p className="mono" style={{ fontSize: "9px", color: "var(--d-3)", marginTop: "4px" }}>{selectedTemplate.category} SPEC · {selectedTemplate.meta}</p>
            </div>
            <div style={{ background: "var(--bg-darkest)", padding: "16px", borderRadius: "8px", border: "1px solid var(--border-d)", fontSize: "12px", lineHeight: "1.6", whiteSpace: "pre-wrap", fontFamily: "var(--font-mono)", color: "var(--d-2)", maxHeight: "280px", overflowY: "auto" }}>
              {getTemplateContent(selectedTemplate).body}
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              <button onClick={() => { setSelectedTemplate(null); triggerToast(`Successfully applied template: "${selectedTemplate.title}" into active talent pipeline!`, "Templates Library"); }} className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>▢ USE THIS TEMPLATE</button>
              <button onClick={() => setSelectedTemplate(null)} className="btn btn-ghost">CANCEL</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
