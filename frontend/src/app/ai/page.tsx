import React from "react";
import { Metadata } from "next";
import SignalBar from "@/components/sections/SignalBar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import "./ai.css";

export const metadata: Metadata = {
  title: "AI & Intelligence | CareerXel Calibrated AI Placement Platform",
  description: "Explore CareerXel's transparent and explainable AI models. We calibrate hiring and placement outcomes based on real student performance, not vibes.",
  alternates: {
    canonical: "https://careerxel.com/ai",
  },
  openGraph: {
    title: "AI & Intelligence | CareerXel Calibrated AI Placement Platform",
    description: "Explore CareerXel's transparent and explainable AI models. We calibrate hiring and placement outcomes based on real student performance, not vibes.",
    type: "website",
  },
};

export default function AIPage() {
  return (
    <main>

      <SignalBar />

      {/* §00 HERO */}
      <section className="dark-mesh p-hero" data-screen-label="00 Hero">
        <div className="container">
          <Breadcrumbs />
          <div className="sx-ribbon">
            <span className="idx">§00<span className="slash"> / </span><span className="name">AI &amp; INTELLIGENCE</span></span>
            <span>EXPLAINABLE · CALIBRATED · YOURS</span>
          </div>
          <div className="p-hero-grid">
            <div>
              <div className="serif-kicker">No black boxes.</div>
              <div className="eyebrow" style={{ marginTop: "18px" }}>AI &amp; INTELLIGENCE</div>
              <h1 className="display mt-24">
                <span className="bone-grad">Explainable AI</span><br />
                <span className="muted-weight">across the whole journey.</span>
              </h1>
              <p className="subhead">From resume parse to hire recommendation, every model output is traceable, auditable, and tuned to real outcomes — not vibes.</p>
              <div className="flex gap-12 mt-32">
                <a className="btn btn-primary" href="#">Read the model card
                  <svg className="icon" viewBox="0 0 20 20"><path d="M5 10h10M11 6l4 4-4 4" /></svg>
                </a>
                <a className="btn btn-ghost" href="#">See methodology</a>
              </div>
            </div>
            <div className="p-hero-mock">
              <div className="ai-diagram">
                <div className="head">
                  <span className="lt">▢ MODEL · CXL-V4</span>
                  <span>EXPLAINABLE · CALIBRATED</span>
                </div>
                <svg className="flow" viewBox="0 0 400 400">
                  <defs>
                    <marker id="arr" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M0 0 L8 4 L0 8 Z" fill="#4A8BFF" />
                    </marker>
                  </defs>
                  {/* Stage 1 - Input */}
                  <g>
                    <rect x="20" y="60" width="100" height="40" rx="6" fill="#1A1F2E" stroke="#4A8BFF" />
                    <text x="70" y="78" textAnchor="middle" fontFamily="Fraunces" fontSize="13" fill="#C2D8FF">Resume</text>
                    <text x="70" y="92" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#A0AAC0">PARSE · OCR</text>
                  </g>
                  <g>
                    <rect x="20" y="170" width="100" height="40" rx="6" fill="#1A1F2E" stroke="#4A8BFF" />
                    <text x="70" y="188" textAnchor="middle" fontFamily="Fraunces" fontSize="13" fill="#C2D8FF">Mock IV</text>
                    <text x="70" y="202" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#A0AAC0">VIDEO · AUDIO</text>
                  </g>
                  <g>
                    <rect x="20" y="280" width="100" height="40" rx="6" fill="#1A1F2E" stroke="#4A8BFF" />
                    <text x="70" y="298" textAnchor="middle" fontFamily="Fraunces" fontSize="13" fill="#C2D8FF">Job Spec</text>
                    <text x="70" y="312" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#A0AAC0">JD · TAXONOMY</text>
                  </g>
                  {/* arrows to embed */}
                  <path d="M125 80 L170 175" stroke="#4A8BFF" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
                  <path d="M125 190 L170 190" stroke="#4A8BFF" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
                  <path d="M125 300 L170 215" stroke="#4A8BFF" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
                  {/* Embed */}
                  <g>
                    <rect x="170" y="170" width="110" height="40" rx="6" fill="rgba(74,139,255,0.1)" stroke="#4A8BFF" strokeWidth="1.5" />
                    <text x="225" y="188" textAnchor="middle" fontFamily="Fraunces" fontSize="13" fill="#C2D8FF">Embeddings</text>
                    <text x="225" y="202" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#4A8BFF">CXL-V4</text>
                  </g>
                  {/* Arrow to scoring */}
                  <path d="M283 190 L330 100" stroke="#4A8BFF" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
                  <path d="M283 190 L330 190" stroke="#4A8BFF" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
                  <path d="M283 190 L330 280" stroke="#4A8BFF" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
                  {/* Outputs */}
                  <g>
                    <rect x="330" y="80" width="60" height="40" rx="6" fill="#2A5FD9" />
                    <text x="360" y="96" textAnchor="middle" fontFamily="Fraunces" fontSize="11" fill="#C2D8FF">Match</text>
                    <text x="360" y="110" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#C2D8FF">96%</text>
                  </g>
                  <g>
                    <rect x="330" y="170" width="60" height="40" rx="6" fill="#2A5FD9" />
                    <text x="360" y="186" textAnchor="middle" fontFamily="Fraunces" fontSize="11" fill="#C2D8FF">Score</text>
                    <text x="360" y="200" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#C2D8FF">82</text>
                  </g>
                  <g>
                    <rect x="330" y="260" width="60" height="40" rx="6" fill="#2A5FD9" />
                    <text x="360" y="276" textAnchor="middle" fontFamily="Fraunces" fontSize="11" fill="#C2D8FF">Hire?</text>
                    <text x="360" y="290" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#C2D8FF">YES</text>
                  </g>
                  {/* guidewires labels */}
                  <text x="200" y="50" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="0.1em" fill="#6B7590">INPUT</text>
                  <text x="200" y="148" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="0.1em" fill="#6B7590">SHARED REPRESENTATION</text>
                  <text x="200" y="248" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="0.1em" fill="#6B7590">OUTPUT</text>
                  <text x="330" y="50" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="0.1em" fill="#6B7590">DECISIONS</text>
                </svg>
              </div>
              <div className="frag" style={{ top: "4%", left: "-16%", transform: "rotate(-5deg)", maxWidth: "200px" }}>
                <div className="mono" style={{ color: "var(--amber)", marginBottom: "4px" }}>▢ TRACE</div>
                <div style={{ fontSize: "13px", fontWeight: 500 }}>Every score is auditable.</div>
              </div>
              <div className="frag" style={{ bottom: "8%", right: "-12%", transform: "rotate(5deg)", maxWidth: "200px" }}>
                <div className="mono" style={{ color: "var(--d-3)", marginBottom: "4px" }}>▢ MODEL CARD</div>
                <div style={{ fontSize: "13px", fontWeight: 500 }}>Public. Versioned. Signed.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §01 THREE PILLARS LIGHT */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§01<span className="slash"> / </span><span className="name">THREE PILLARS</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--l-2)" }}>EXPLAIN · CALIBRATE · TRUST</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">PRINCIPLES</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Three things we won't compromise on.
            </h2>
          </div>
          <div className="pillar-grid">
            <div className="pillar">
              <div className="num">01</div>
              <h3>Explainable</h3>
              <p>Every score, every match, every recommendation comes with a trace — which inputs mattered, by how much, and why.</p>
              <ul>
                <li>FACTOR-LEVEL CONTRIBUTIONS</li>
                <li>SOURCE QUOTES PER ANSWER</li>
                <li>HUMAN-READABLE TRACES</li>
              </ul>
              <span className="tag">/EXPLAIN</span>
            </div>
            <div className="pillar">
              <div className="num">02</div>
              <h3>Calibrated</h3>
              <p>Models are tuned monthly against real hiring outcomes from real partners. We track precision, recall, and bias on every release.</p>
              <ul>
                <li>MONTHLY OUTCOME RECAL</li>
                <li>FAIRNESS · PER COHORT</li>
                <li>VERSIONED MODEL CARDS</li>
              </ul>
              <span className="tag">/CALIBRATE</span>
            </div>
            <div className="pillar">
              <div className="num">03</div>
              <h3>Yours</h3>
              <p>Your data trains your private models. Never pooled. Never sold. Per-tenant fine-tuning available for enterprise.</p>
              <ul>
                <li>PER-TENANT ISOLATION</li>
                <li>NO POOLED TRAINING</li>
                <li>BYOK · OPTIONAL</li>
              </ul>
              <span className="tag">/YOURS</span>
            </div>
          </div>
        </div>
      </section>

      {/* §02 SCORING DIMENSIONS DARK */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§02<span className="slash"> / </span><span className="name">SCORING DIMENSIONS</span></span>
            <span>12 SIGNALS · ONE VERDICT</span>
          </div>
          <div className="section-header">
            <div className="eyebrow">12 DIMENSIONS</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              What we score.<br /><span className="muted-weight">All of it. Out in the open.</span>
            </h2>
            <p className="subhead">Sample session · Senior Frontend Engineer track</p>
          </div>
          <div className="dim-grid">
            <div className="dim">
              <div className="lab"><span className="l">D.01</span><span className="v">82</span></div>
              <div className="nm">Technical depth</div>
              <div className="desc">Specificity, mechanism-level reasoning, debugging fluency.</div>
              <div className="bar"><div style={{ width: "82%" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.02</span><span className="v">74</span></div>
              <div className="nm">Communication</div>
              <div className="desc">Clarity, structure, listener-awareness, word economy.</div>
              <div className="bar"><div style={{ width: "74%", background: "var(--burnt)" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.03</span><span className="v">88</span></div>
              <div className="nm">Problem solving</div>
              <div className="desc">Strategy selection, dead-end recovery, time-to-insight.</div>
              <div className="bar"><div style={{ width: "88%" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.04</span><span className="v">79</span></div>
              <div className="nm">Systems thinking</div>
              <div className="desc">Tradeoffs, scaling instincts, second-order awareness.</div>
              <div className="bar"><div style={{ width: "79%" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.05</span><span className="v">85</span></div>
              <div className="nm">Code fluency</div>
              <div className="desc">Idiom, syntax, debugger comfort, refactoring instincts.</div>
              <div className="bar"><div style={{ width: "85%" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.06</span><span className="v">71</span></div>
              <div className="nm">Domain knowledge</div>
              <div className="desc">Stack-specific recall, framework idioms, library mastery.</div>
              <div className="bar"><div style={{ width: "71%", background: "var(--burnt)" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.07</span><span className="v">90</span></div>
              <div className="nm">Behavioral fit</div>
              <div className="desc">STAR-quality stories, ownership signals, conflict patterns.</div>
              <div className="bar"><div style={{ width: "90%" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.08</span><span className="v">68</span></div>
              <div className="nm">Curiosity &amp; growth</div>
              <div className="desc">Self-direction, learning velocity, asks good questions.</div>
              <div className="bar"><div style={{ width: "68%", background: "var(--burnt)" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.09</span><span className="v">76</span></div>
              <div className="nm">Tooling</div>
              <div className="desc">Editor, terminal, CI, observability, local-dev velocity.</div>
              <div className="bar"><div style={{ width: "76%" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.10</span><span className="v">83</span></div>
              <div className="nm">Architecture</div>
              <div className="desc">Module boundaries, contract design, abstraction taste.</div>
              <div className="bar"><div style={{ width: "83%" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.11</span><span className="v">87</span></div>
              <div className="nm">Composure</div>
              <div className="desc">Pace under pressure, recovery from errors, signal stability.</div>
              <div className="bar"><div style={{ width: "87%" }}></div></div>
            </div>
            <div className="dim">
              <div className="lab"><span className="l">D.12</span><span className="v">81</span></div>
              <div className="nm">Overall</div>
              <div className="desc">Weighted composite. Calibrated against real hiring outcomes.</div>
              <div className="bar"><div style={{ width: "81%" }}></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* §03 EXPLAINABILITY MOCK LIGHT */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>§03<span className="slash"> / </span><span className="name">EXPLAINABILITY</span></span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--l-2)" }}>EVERY DECISION · TRACED</span>
          </div>
          <div className="two-asym">
            <div>
              <div className="eyebrow" style={{ marginBottom: "18px" }}>EXPLAINABILITY</div>
              <h2 className="h-section">
                Click any score.<br />
                <span className="muted-weight">See the receipts.</span>
              </h2>
              <p className="subhead">Recruiters see exactly what drove the recommendation. Candidates see exactly where to improve. Models can't hide behind aggregates.</p>
              <div className="chips-row">
                <span className="chip">FACTOR ATTRIBUTION</span>
                <span className="chip">SOURCE QUOTES</span>
                <span className="chip">CONFIDENCE INTERVALS</span>
                <span className="chip amber">EXPORTABLE</span>
              </div>
            </div>
            <div className="mock-l explain-mock">
              <div className="mock-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mono" style={{ color: "#6B7590", marginLeft: "auto" }}>EXPLAIN · P. KHURANA · SR FE</span>
              </div>
              <div className="body">
                <div className="col">
                  <h6>▢ TOP POSITIVE FACTORS</h6>
                  <div className="factor"><span className="nm">React internals · 4 specific examples</span><span className="impact"><span className="pos">+12.4</span></span></div>
                  <div className="factor"><span className="nm">Perf debugging story · Quanta</span><span className="impact"><span className="pos">+8.7</span></span></div>
                  <div className="factor"><span className="nm">System design · cache invalidation</span><span className="impact"><span className="pos">+7.2</span></span></div>
                  <div className="factor"><span className="nm">STAR · ownership of design tokens</span><span className="impact"><span className="pos">+5.1</span></span></div>
                </div>
                <div className="col">
                  <h6>▢ NEGATIVE FACTORS</h6>
                  <div className="factor"><span className="nm">DS · binary tree confusion</span><span className="impact"><span className="neg">−4.2</span></span></div>
                  <div className="factor"><span className="nm">Spoke over interviewer · 3 instances</span><span className="impact"><span className="neg">−2.1</span></span></div>
                  <div className="verdict">
                    <div className="v-l">VERDICT</div>
                    <div className="v-h" style={{ color: "var(--burnt)" }}>RECOMMEND HIRE · 81 / 100</div>
                    <div className="v-d">High signal on systems and ownership. Recommend a brief follow-up on data structures before final round.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §04 TRUST LIGHT (extends §03 light) */}
      <section className="light" style={{ paddingBottom: "120px" }}>
        <div className="container">
          <div className="rule-label" style={{ color: "var(--l-2)" }}>TRUST · GOVERNANCE</div>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2L3 5v5c0 4 3 7 7 8 4-1 7-4 7-8V5l-7-3z" /></svg>
              </div>
              <div className="h">SOC 2 · Type II</div>
              <div className="d">Annual audit. Per-tenant data isolation. Encryption in transit and at rest.</div>
            </div>
            <div className="trust-card">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="7" /><path d="M2 10h16M10 3a10 10 0 010 14M10 3a10 10 0 000 14" /></svg>
              </div>
              <div className="h">GDPR · DPDP</div>
              <div className="d">Right-to-delete, data export, regional data residency on enterprise plans.</div>
            </div>
            <div className="trust-card">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="14" height="14" rx="2" /><path d="M7 8h6M7 11h6M7 14h4" /></svg>
              </div>
              <div className="h">Fairness audit</div>
              <div className="d">Quarterly bias review across age, gender, geography, college tier. Public summary.</div>
            </div>
            <div className="trust-card">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 10l3 3 7-7" /><circle cx="10" cy="10" r="8" /></svg>
              </div>
              <div className="h">Human-in-the-loop</div>
              <div className="d">Model never auto-rejects. Recruiters always make the final call. Ever.</div>
            </div>
          </div>
        </div>
      </section>

      {/* §05 CTA */}
      <section className="cta-mesh page-cta" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">§05<span className="slash"> / </span><span className="name">READ MORE</span></span>
            <span>OPEN MODEL CARD</span>
          </div>
          <div className="eyebrow" style={{ justifyContent: "center", margin: "0 auto 18px" }}>DEEPER DIVE</div>
          <h2 className="display"><span className="bone-grad">Read the full model card.</span></h2>
          <p style={{ fontSize: "19px", color: "var(--d-2)", maxWidth: "600px", margin: "24px auto 0" }}>Versioned, signed, and updated every release. Methodology, datasets, fairness audits — all public.</p>
          <div className="flex gap-12 mt-32" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="#">Read the model card</a>
            <a className="btn btn-ghost" href="#">Talk to security</a>
          </div>
        </div>
      </section>
    </main>
  );
}
