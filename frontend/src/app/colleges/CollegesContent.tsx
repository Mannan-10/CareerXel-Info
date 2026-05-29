'use client';

import React, { useState, useEffect } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import "./colleges.css";

interface Student {
  id: string;
  name: string;
  role: string;
  sec: string;
  cgpa: number;
  apps: number;
  interviews: number;
  offers: number;
  status: "PLACED" | "OFFER" | "ACTIVE";
  initial: string;
}

interface UploadedFile {
  name: string;
  rows: string;
  meta: string;
  pct: number;
  type: string;
  done: boolean;
}

export default function CollegesContent() {
  // Roster state
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL"); // "ALL", "SEC_A", "PLACED", "CGPA_9"
  
  // Bulk upload state
  const [uploadQueue, setUploadQueue] = useState<UploadedFile[]>([
    { name: "cse-2026-section-A.csv", rows: "142 ROWS", meta: "142 ROWS · PARSED", pct: 100, type: "CSV", done: true },
    { name: "cse-2026-section-B.csv", rows: "138 ROWS", meta: "138 ROWS · PARSED", pct: 100, type: "CSV", done: true },
    { name: "resumes-section-A.zip", rows: "142 RESUMES", meta: "142 RESUMES · OCR RUNNING", pct: 74, type: "ZIP", done: false },
    { name: "cse-2026-section-C.csv", rows: "132 ROWS", meta: "132 ROWS · QUEUED", pct: 18, type: "CSV", done: false },
  ]);
  const [invitesSent, setInvitesSent] = useState(false);

  // Animate parsing of mock upload files
  useEffect(() => {
    const interval = setInterval(() => {
      setUploadQueue((prevQueue) =>
        prevQueue.map((file) => {
          if (file.pct < 100) {
            const nextPct = Math.min(file.pct + Math.floor(Math.random() * 8) + 4, 100);
            return {
              ...file,
              pct: nextPct,
              done: nextPct === 100,
              meta: nextPct === 100 
                ? `${file.rows} · PARSED` 
                : file.type === "ZIP" 
                  ? `${file.rows} · OCR RUNNING (${nextPct}%)` 
                  : `${file.rows} · PROCESSING (${nextPct}%)`
            };
          }
          return file;
        })
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleAddSampleFile = () => {
    const newFile: UploadedFile = {
      name: `sample-students-quantum-${Math.floor(Math.random() * 900) + 100}.csv`,
      rows: "85 ROWS",
      meta: "85 ROWS · QUEUED",
      pct: 0,
      type: "CSV",
      done: false
    };
    setUploadQueue((prev) => [...prev, newFile]);
  };

  const students: Student[] = [
    { id: "PK220314", name: "Priya Khurana", role: "BTECH", sec: "SEC A", cgpa: 9.2, apps: 14, interviews: 5, offers: 2, status: "PLACED", initial: "PK" },
    { id: "RK220207", name: "Rohan Kapoor", role: "BTECH", sec: "SEC A", cgpa: 8.4, apps: 9, interviews: 3, offers: 1, status: "OFFER", initial: "RK" },
    { id: "AS220119", name: "Anika Sundaram", role: "BTECH", sec: "SEC B", cgpa: 8.8, apps: 11, interviews: 4, offers: 1, status: "PLACED", initial: "AS" },
    { id: "DS220402", name: "Dev Shah", role: "BTECH", sec: "SEC B", cgpa: 7.6, apps: 7, interviews: 2, offers: 0, status: "ACTIVE", initial: "DS" },
    { id: "MS220088", name: "Maya Sundaram", role: "BTECH", sec: "SEC C", cgpa: 9.0, apps: 12, interviews: 6, offers: 3, status: "PLACED", initial: "MS" },
    { id: "JL220511", name: "Jaya Lal", role: "BTECH", sec: "SEC C", cgpa: 8.1, apps: 5, interviews: 1, offers: 0, status: "ACTIVE", initial: "JL" }
  ];

  // Filtering logic
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (activeFilter === "SEC_A") return student.sec === "SEC A";
    if (activeFilter === "PLACED") return student.status === "PLACED";
    if (activeFilter === "CGPA_9") return student.cgpa >= 9.0;
    
    return true;
  });

  return (
    <main>
      {/* §00 HERO */}
      <section className="dark-mesh p-hero" data-screen-label="00 Hero">
        <div className="container">
          <Breadcrumbs />          <div className="p-hero-grid">
            <div>
              <div className="serif-kicker">For the placement office.</div>              <h1 className="display mt-24">
                <span className="bone-grad">The placement office,</span><br />
                <span className="muted-weight">brought into focus.</span>
              </h1>
              <p className="subhead">Onboard cohorts in bulk. Track every interview. Show real numbers. Per-student PDF reports your faculty can sign off on.</p>
              <div className="flex gap-12 mt-32">
                <a className="btn btn-primary" href="/contact">Talk to placements
                  <svg className="icon" viewBox="0 0 20 20"><path d="M5 10h10M11 6l4 4-4 4" /></svg>
                </a>
                <a className="btn btn-ghost" href="/features">Explore Features</a>
              </div>
            </div>
            <div className="p-hero-mock">
              <div className="mock co-mock">
                <div className="mock-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>RIVERBEND U / CSE 2026</span>
                </div>
                <div className="body">
                  <div className="row">
                    <div className="kpi"><div className="l">COHORT</div><div className="v">412</div></div>
                    <div className="kpi"><div className="l">PLACED</div><div className="v" style={{ color: "var(--amber)" }}>298</div></div>
                    <div className="kpi"><div className="l">RATE</div><div className="v">72%</div></div>
                  </div>
                  <div className="panel">
                    <h6>PLACEMENTS · BY MONTH</h6>
                    <svg
                      viewBox="0 0 240 90"
                      preserveAspectRatio="none"
                      style={{ width: "100%", flex: 1 }}
                      role="img"
                      aria-label="Bar chart showing monthly placement count increases with Riverbend U 2026 cohort"
                    >
                      <g stroke="rgba(180,210,255,0.06)">
                        <line x1="0" x2="240" y1="22" y2="22" />
                        <line x1="0" x2="240" y1="44" y2="44" />
                        <line x1="0" x2="240" y1="66" y2="66" />
                      </g>
                      <g fill="#4A8BFF">
                        <rect x="14" y="60" width="14" height="22" />
                        <rect x="40" y="48" width="14" height="34" />
                        <rect x="66" y="38" width="14" height="44" />
                        <rect x="92" y="30" width="14" height="52" />
                        <rect x="118" y="40" width="14" height="42" />
                        <rect x="144" y="20" width="14" height="62" />
                        <rect x="170" y="14" width="14" height="68" />
                        <rect x="196" y="22" width="14" height="60" fill="#2A5FD9" />
                      </g>
                    </svg>
                  </div>
                  <div className="panel" style={{ flex: "0 0 auto" }}>
                    <h6>TOP RECRUITERS</h6>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span className="m-pill">HELIX</span>
                      <span className="m-pill">QUANTA</span>
                      <span className="m-pill amber">AXIOM</span>
                      <span className="m-pill">+ 47</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frag" style={{ top: "10%", left: "-20%", transform: "rotate(-5deg)", maxWidth: "220px" }}>
                <div className="mono" style={{ color: "var(--amber)", marginBottom: "4px" }}>COHORT</div>
                <div style={{ fontSize: "13px", fontWeight: 500 }}>412 students · 72% placed</div>
              </div>
              <div className="frag" style={{ bottom: "10%", right: "-16%", transform: "rotate(5deg)", maxWidth: "220px" }}>
                <div className="mono" style={{ color: "var(--d-3)", marginBottom: "4px" }}>AVG PACKAGE</div>
                <div style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "-0.02em" }}>₹14.8 LPA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §01 BULK ONBOARDING */}
      <section className="light section">
        <div className="container">          <div className="section-header">            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Onboard a cohort<br /><span className="muted-weight">in the time it takes for coffee.</span>
            </h2>
          </div>
          <div className="mock-l up-mock">
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>RIVERBEND U / IMPORT STUDENTS</span>
            </div>
            <div className="drop">
              <div className="zone cursor-pointer" onClick={handleAddSampleFile} title="Click to upload mock student data">
                <div className="ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 16V4M6 10l6-6 6 6M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" /></svg>
                </div>
                <div>
                  <div className="h">Drop CSV or resumes here</div>
                  <div className="s" style={{ marginTop: "6px" }}>CSV · PDF · DOCX · ZIP</div>
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                  <span className="chip" style={{ background: "var(--paper)", padding: "4px 10px" }}>CSV TEMPLATE</span>
                  <span className="chip amber" style={{ padding: "4px 10px" }}>SAMPLE FILE (DEMO)</span>
                </div>
              </div>
              <div className="progress">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <h6 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--l-2)", margin: 0 }}>IMPORT QUEUE</h6>
                  <span className="chip" style={{ fontSize: "10px", padding: "2px 8px" }}>{uploadQueue.length + 408} STUDENTS · {Math.ceil(uploadQueue.length / 2) + 6} BATCHES</span>
                </div>
                
                {uploadQueue.map((file, idx) => (
                  <div key={idx} className={`file ${file.done ? 'done' : ''}`}>
                    <div className="ic">{file.type}</div>
                    <div className="info">
                      <div className="nm" title={file.name}>{file.name}</div>
                      <div className="meta">{file.meta}</div>
                    </div>
                    <div className="bar">
                      <div style={{ width: `${file.pct}%` }}></div>
                    </div>
                    <div className="pct">{file.pct}%</div>
                  </div>
                ))}

                <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                  <button className="chip amber" style={{ cursor: "pointer", border: "none" }} onClick={() => setInvitesSent(true)}>
                    {invitesSent ? "INVITES SENT!" : "SEND INVITES (412)"}
                  </button>
                  <span className="chip">DOWNLOAD ERRORS · 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §02 ROSTER */}
      <section className="dark-mesh section">
        <div className="container">          <div className="section-header">            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Every student.<br /><span className="muted-weight">Every interview. Every status.</span>
            </h2>
          </div>
          <div className="mock roster-mock">
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>RIVERBEND U / ROSTER · CSE 2026</span>
            </div>
            <div className="filters">
              <span className={`f ${activeFilter === "ALL" ? "on" : ""}`} onClick={() => setActiveFilter("ALL")}>
                CSE 2026 · {students.length}
              </span>
              <span className={`f ${activeFilter === "SEC_A" ? "on" : ""}`} onClick={() => setActiveFilter("SEC_A")}>
                SECTION A
              </span>
              <span className={`f ${activeFilter === "PLACED" ? "on" : ""}`} onClick={() => setActiveFilter("PLACED")}>
                PLACED · 3
              </span>
              <span className={`f ${activeFilter === "CGPA_9" ? "on" : ""}`} onClick={() => setActiveFilter("CGPA_9")}>
                CGPA 9.0+
              </span>
              <input 
                type="text" 
                className="search" 
                placeholder="SEARCH STUDENTS..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="table-wrap">
              <div className="row head">
                <div></div>
                <div>STUDENT</div>
                <div>SECTION · CGPA</div>
                <div>APPS</div>
                <div>INTERVIEWS</div>
                <div>OFFERS</div>
                <div>STATUS</div>
              </div>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((st) => (
                  <div key={st.id} className="row">
                    <div className="av">{st.initial}</div>
                    <div>
                      <div className="nm">{st.name}</div>
                      <div className="meta">{st.id} · {st.role}</div>
                    </div>
                    <div>
                      <div className="nm" style={{ color: "var(--d-2)" }}>{st.sec}</div>
                      <div className="meta">CGPA {st.cgpa}</div>
                    </div>
                    <div className="stat">{st.apps}</div>
                    <div className="stat">{st.interviews}</div>
                    <div className="stat" style={{ color: "var(--burnt)" }}>{st.offers}</div>
                    <div className={`stat ${st.status === 'PLACED' ? 'placed' : st.status === 'OFFER' ? 'offer' : 'active'}`}>
                      {st.status}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ padding: "24px", textAlign: "center", color: "var(--d-3)", fontSize: "12px", fontFamily: "var(--font-mono)" }}>
                  NO STUDENTS FOUND MATCHING CURRENT FILTER/SEARCH
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* §03 PLACEMENT ANALYTICS */}
      <section className="light section">
        <div className="container">          <div className="section-header">            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Numbers your placement office<br /><span className="muted-weight">can put in the report.</span>
            </h2>
          </div>
          <div className="mock-l pa-mock">
            <div className="mock-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>PLACEMENT REPORT · 2025-26</span>
            </div>
            <div className="body">
              <div className="kpi"><div className="l">PLACEMENT RATE</div><div className="v">72%</div><div className="d">▲ 11% YoY</div></div>
              <div className="kpi"><div className="l">AVG PACKAGE</div><div className="v">₹14.8 LPA</div><div className="d">▲ 18% YoY</div></div>
              <div className="kpi"><div className="l">HIGHEST PACKAGE</div><div className="v">₹62 LPA</div><div className="d">↑ AXIOM</div></div>
              <div className="panel span2">
                <h6>OFFERS BY MONTH · CSE 2026</h6>
                <svg
                  viewBox="0 0 400 120"
                  preserveAspectRatio="none"
                  style={{ width: "100%", flex: 1 }}
                  role="img"
                  aria-label="Line graph representing monthly offer trends for CSE 2026 students indicating progressive placement growth"
                >
                  <g stroke="rgba(15,24,50,0.05)" strokeWidth="1">
                    <line x1="0" x2="400" y1="30" y2="30" />
                    <line x1="0" x2="400" y1="60" y2="60" />
                    <line x1="0" x2="400" y1="90" y2="90" />
                  </g>
                  <path d="M10 100 L50 90 L90 80 L130 60 L170 65 L210 50 L250 35 L290 40 L330 25 L370 22" stroke="#2A5FD9" strokeWidth="2" fill="none" />
                  <path d="M10 100 L50 90 L90 80 L130 60 L170 65 L210 50 L250 35 L290 40 L330 25 L370 22 L370 120 L10 120Z" fill="rgba(74,139,255,0.16)" />
                  <g stroke="#1A1F2E" strokeWidth="0" fill="#2A5FD9">
                    <circle cx="10" cy="100" r="2.5" />
                    <circle cx="50" cy="90" r="2.5" />
                    <circle cx="90" cy="80" r="2.5" />
                    <circle cx="130" cy="60" r="2.5" />
                    <circle cx="170" cy="65" r="2.5" />
                    <circle cx="210" cy="50" r="2.5" />
                    <circle cx="250" cy="35" r="2.5" />
                    <circle cx="290" cy="40" r="2.5" />
                    <circle cx="330" cy="25" r="2.5" />
                    <circle cx="370" cy="22" r="2.5" />
                  </g>
                </svg>
              </div>
              <div className="panel">
                <h6>TOP RECRUITERS</h6>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1, justifyContent: "center" }}>
                  <div>
                    <div className="mono" style={{ fontSize: "9px", color: "var(--l-2)", marginBottom: "3px", display: "flex", justifyContent: "space-between" }}>
                      <span>HELIX</span><span>42 OFFERS</span>
                    </div>
                    <div style={{ height: "5px", background: "var(--paper-2)", borderRadius: "3px", border: "1px solid var(--border-l)" }}>
                      <div style={{ height: "100%", width: "90%", background: "var(--burnt)", borderRadius: "3px" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: "9px", color: "var(--l-2)", marginBottom: "3px", display: "flex", justifyContent: "space-between" }}>
                      <span>QUANTA</span><span>34 OFFERS</span>
                    </div>
                    <div style={{ height: "5px", background: "var(--paper-2)", borderRadius: "3px", border: "1px solid var(--border-l)" }}>
                      <div style={{ height: "100%", width: "72%", background: "var(--amber)", borderRadius: "3px" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: "9px", color: "var(--l-2)", marginBottom: "3px", display: "flex", justifyContent: "space-between" }}>
                      <span>AXIOM</span><span>28 OFFERS</span>
                    </div>
                    <div style={{ height: "5px", background: "var(--paper-2)", borderRadius: "3px", border: "1px solid var(--border-l)" }}>
                      <div style={{ height: "100%", width: "60%", background: "var(--amber)", borderRadius: "3px", opacity: 0.85 }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: "9px", color: "var(--l-2)", marginBottom: "3px", display: "flex", justifyContent: "space-between" }}>
                      <span>MERCER</span><span>21 OFFERS</span>
                    </div>
                    <div style={{ height: "5px", background: "var(--paper-2)", borderRadius: "3px", border: "1px solid var(--border-l)" }}>
                      <div style={{ height: "100%", width: "44%", background: "#A0AAC0", borderRadius: "3px" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: "9px", color: "var(--l-2)", marginBottom: "3px", display: "flex", justifyContent: "space-between" }}>
                      <span>NORTHWELL</span><span>17 OFFERS</span>
                    </div>
                    <div style={{ height: "5px", background: "var(--paper-2)", borderRadius: "3px", border: "1px solid var(--border-l)" }}>
                      <div style={{ height: "100%", width: "36%", background: "#A0AAC0", borderRadius: "3px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §04 PER-STUDENT REPORT */}
      <section className="dark-mesh section">
        <div className="container">          <div className="two-asym-rev">
            <div className="mock pdf-mock" style={{ position: "relative" }}>
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "var(--d-3)", marginLeft: "auto" }}>REPORT · PDF</span>
              </div>
              <div className="pg">
                <div className="head">
                  <div className="l">
                    <h6 style={{ color: "var(--l-1)" }}>P. KHURANA · INTERVIEW REPORT</h6>
                    <div className="meta">PK220314 · CSE · RIVERBEND U · 2026</div>
                  </div>
                  <div className="r">CAREERXEL<br />2026.05.15</div>
                </div>
                <div className="sec">
                  <div className="t">SUMMARY</div>
                  <div className="b" style={{ color: "var(--l-1)" }}>14 mock interviews completed across Sr Frontend &amp; Design Engineer tracks. Strong performance on system design and front-end fundamentals. Minor coaching recommended on data structures.</div>
                </div>
                <div className="sec">
                  <div className="t">AI SCORES (AVG)</div>
                  <div className="scoreband">
                    <div className="sc"><div className="v" style={{ color: "var(--burnt)" }}>82</div><div className="l">TECH</div></div>
                    <div className="sc"><div className="v" style={{ color: "var(--l-1)" }}>74</div><div className="l">COMMS</div></div>
                    <div className="sc"><div className="v" style={{ color: "var(--burnt)" }}>88</div><div className="l">SYS-D</div></div>
                    <div className="sc"><div className="v" style={{ color: "var(--l-1)" }}>81</div><div className="l">OVERALL</div></div>
                  </div>
                </div>
                <div className="sec">
                  <div className="t">TOP COMPANIES INTERVIEWED</div>
                  <div className="b" style={{ color: "var(--l-1)" }}>Stripe · Linear · Vercel · Figma · Helix · Quanta</div>
                </div>
                <div className="sec">
                  <div className="t">RECOMMENDATIONS</div>
                  <div className="b" style={{ color: "var(--l-1)" }}>→ Practice 5 more DS &amp; algorithms sets<br />→ Mock 3 more behavioral rounds before final at Stripe<br />→ Review system design templates · Vol II</div>
                </div>
                <div className="sec">
                  <div className="t">PLACEMENT STATUS</div>
                  <div className="b" style={{ color: "var(--burnt)", fontWeight: 500 }}>PLACED · STRIPE · ₹38 LPA · 2026.06.01</div>
                </div>
                <div className="footer">
                  <span>RIVERBEND U / PLACEMENTS</span>
                  <span>P.01 / 04</span>
                </div>
              </div>
            </div>
            <div>              <h2 className="h-section">
                Per-student PDF reports.<br />
                <span className="muted-weight">On demand. Always current.</span>
              </h2>
              <p className="subhead">Every student, every interview, every score — in one signed PDF. Faculty co-sign. Department aggregates. NAAC-ready.</p>
              <div className="chips-row">
                <span className="chip">PER-STUDENT</span>
                <span className="chip">PER-COHORT</span>
                <span className="chip">PER-DEPT</span>
                <span className="chip amber">EXPORTABLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §05 GROUP-WIDE */}
      <section className="light section">
        <div className="container">          <div className="section-header">            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Multiple campuses.<br /><span className="muted-weight">One source of truth.</span>
            </h2>
          </div>
          <div className="bgrid">
            <div className="card-l tile tile-2x2">
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="icbox" style={{ borderColor: "var(--border-l)", color: "var(--l-1)" }}>
                  <svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><rect x="2" y="4" width="6" height="6" rx="1" /><rect x="12" y="4" width="6" height="6" rx="1" /><rect x="2" y="12" width="6" height="6" rx="1" /><rect x="12" y="12" width="6" height="6" rx="1" /></svg>
                </div>
                <h3 style={{ fontSize: "26px", fontWeight: "500", margin: "0 0 8px 0" }}>Group dashboards</h3>
                <p style={{ maxWidth: "360px", color: "var(--l-2)" }}>Aggregate every college, every campus, every program — in one hierarchy you can drill into.</p>
              </div>
              <div style={{ background: "var(--paper)", border: "1px solid var(--border-l)", borderRadius: "10px", padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--l-2)" }}>TOP COLLEGES BY PLACEMENT</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "12px" }}>Riverbend U</span><span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--burnt)" }}>72%</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "12px" }}>Mercer Tech</span><span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--burnt)" }}>68%</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "12px" }}>Northwell IT</span><span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--l-2)" }}>61%</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: "12px" }}>Quanta College</span><span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--l-2)" }}>58%</span></div>
                </div>
              </div>
              <span className="tag">/GROUP-VIEW</span>
            </div>
            <div className="card-l tile">
              <div className="icbox" style={{ borderColor: "var(--border-l)", color: "var(--l-1)" }}><svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path d="M3 17h14M5 13v4M9 9v8M13 11v6M17 5v12" /></svg></div>
              <div><h3>Cross-college benchmarks</h3><p style={{ color: "var(--l-2)" }}>Compare placement rates, packages, and recruiter mix across your network.</p></div>
              <span className="tag">/BENCHMARKS</span>
            </div>
            <div className="card-l tile">
              <div className="icbox" style={{ borderColor: "var(--border-l)", color: "var(--l-1)" }}><svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><circle cx="10" cy="10" r="7" /><path d="M2 10h16M10 3a10 10 0 010 14M10 3a10 10 0 000 14" /></svg></div>
              <div><h3>Shared recruiter network</h3><p style={{ color: "var(--l-2)" }}>A campus list that opens up to every college in your group.</p></div>
              <span className="tag">/RECRUITERS</span>
            </div>
            <div className="card-l tile">
              <div className="icbox" style={{ borderColor: "var(--border-l)", color: "var(--l-1)" }}><svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><circle cx="10" cy="7" r="3" /><path d="M3 17c1.5-3 4-4 7-4s5.5 1 7 4" /></svg></div>
              <div><h3>Faculty roles &amp; access</h3><p style={{ color: "var(--l-2)" }}>Granular permissions per dept, per role, per campus.</p></div>
              <span className="tag">/ACCESS</span>
            </div>
            <div className="card-l tile">
              <div className="icbox" style={{ borderColor: "var(--border-l)", color: "var(--l-1)" }}><svg className="icon" viewBox="0 0 20 20" stroke="currentColor" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" /><path d="M3 8h14M8 3v14" /></svg></div>
              <div><h3>NAAC / NIRF exports</h3><p style={{ color: "var(--l-2)" }}>Reports formatted for your accreditation cycle. PDF, CSV, XLSX.</p></div>
              <span className="tag">/COMPLIANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* §06 CTA */}
      <section className="cta-mesh page-cta" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">          <h2 className="display"><span className="bone-grad">Bring your campus on board.</span></h2>
          <p style={{ fontSize: "19px", color: "var(--d-2)", maxWidth: "600px", margin: "24px auto 0" }}>Custom onboarding for institutions and college groups. Free pilot for the first cohort.</p>
          <div className="flex gap-12 mt-32" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="/contact">Talk to placements</a>
            <a className="btn btn-ghost" href="/features">Explore Features</a>
          </div>
        </div>
      </section>
    </main>
  );
}
