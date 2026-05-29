"use client";

import Link from "next/link";
import Carousel from "@/components/ui/Carousel";

export default function AudienceSection() {
  const showcaseSlides = [
    {
      title: "Adaptive Resume OS",
      audience: "FOR CANDIDATES",
      desc: "Watch your profile adapt to each JD automatically. Complete with ATS scan scores and real-time optimized technical bullets.",
      tag: "/RESUME-OS",
      mockup: (
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>LIVE OPTIMIZING</div>
          <div style={{ fontWeight: 500, fontSize: "14px", color: "var(--d-1)" }}>Stripe · Senior FE Spec</div>
          <div style={{ fontSize: "12px", color: "var(--d-2)", borderLeft: "2px solid var(--amber)", paddingLeft: "8px", fontStyle: "italic" }}>
            &ldquo;Scaled Edge SSR for 4M MAUs using Vercel. Standardized local rendering paths.&rdquo;
          </div>
          <div style={{ flex: 1 }}></div>
          <div className="mono" style={{ color: "var(--d-3)", fontSize: "8px" }}>ATS SCAN SCORE · 96% MATCH</div>
        </div>
      ),
    },
    {
      title: "Proctored AI Interviews",
      audience: "FOR EMPLOYERS",
      desc: "Run automated, cheat-free assessments 24/7. Identity verification and violation detection are built right in.",
      tag: "/AI-PROCTORING",
      mockup: (
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>PROCTORED SESSION 17</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "var(--d-1)" }}>Candidate Feed</span>
            <span className="mono" style={{ fontSize: "9px", color: "var(--amber)" }}>● REC 28:14</span>
          </div>
          <div style={{ height: "40px", background: "var(--surface-3)", border: "1px dashed var(--border-d)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--d-3)", fontSize: "11px", paddingLeft: "10px" }}>
            [Live camera stream verified]
          </div>
          <div className="mono" style={{ color: "var(--brand-green, #1F8A5B)", fontSize: "9px" }}>✓ 0 VIOLATIONS REGISTERED</div>
        </div>
      ),
    },
    {
      title: "Placement Analytics Dashboard",
      audience: "FOR COLLEGES",
      desc: "Track every cohort from onboarding to offer letter. Generate NAAC-ready PDF reports with a single click.",
      tag: "/PLACEMENT-ANALYTICS",
      mockup: (
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "10px", padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>RIVERBEND U / CSE 2026</div>
          <div style={{ display: "flex", gap: "10px" }}>
            {[["PLACED", "84%", "var(--amber)"], ["AVG PKG", "₹14.8L", "var(--d-1)"], ["TOP", "₹62L", "var(--d-2)"]].map(([label, val, col]) => (
              <div key={label} style={{ flex: 1, background: "var(--surface-3)", border: "1px solid var(--border-d)", borderRadius: "6px", padding: "8px" }}>
                <div className="mono" style={{ color: "var(--d-3)", fontSize: "8px" }}>{label}</div>
                <div style={{ fontSize: "13px", fontWeight: 500, color: col, marginTop: "2px" }}>{val}</div>
              </div>
            ))}
          </div>
          <div className="mono" style={{ color: "var(--d-3)", fontSize: "8px", marginTop: "4px" }}>PDF REPORT · READY TO EXPORT</div>
        </div>
      ),
    },
  ];

  return (
    <section className="light section" data-screen-label="01 Solutions">
      <div className="container">
        <h2 className="h-section">
          One platform.
          <br />
          <span className="muted-weight">Three ways to win.</span>
        </h2>

        <div className="aud-grid" style={{ marginBottom: "64px" }}>
          {/* Candidates */}
          <Link className="card-l aud-card" href="/candidates">
            <div className="top">
              <div
                className="icbox"
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid var(--border-l)",
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--l-1)",
                }}
              >
                <svg className="icon" viewBox="0 0 20 20">
                  <circle cx="10" cy="7" r="3" />
                  <path d="M3 17c1.5-3 4-4 7-4s5.5 1 7 4" />
                </svg>
              </div>
              <h3>For Candidates</h3>
              <p>
                AI-built profiles, smart matching, mock interviews, and
                learning roadmaps.
              </p>
            </div>
            <div className="bottom">
              <span className="learn">Learn more →</span>
              <span className="tag">/CANDIDATES</span>
            </div>
          </Link>

          {/* Employers */}
          <Link className="card-l aud-card" href="/employers">
            <div className="top">
              <div
                className="icbox"
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid var(--border-l)",
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--l-1)",
                }}
              >
                <svg className="icon" viewBox="0 0 20 20">
                  <rect x="3" y="6" width="14" height="11" rx="1.5" />
                  <path d="M7 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                </svg>
              </div>
              <h3>For Employers</h3>
              <p>
                Full-stack ATS plus AI mock interviews, proctoring, and hire
                recommendations.
              </p>
            </div>
            <div className="bottom">
              <span className="learn">Learn more →</span>
              <span className="tag">/EMPLOYERS</span>
            </div>
          </Link>

          {/* Colleges */}
          <Link className="card-l aud-card" href="/colleges">
            <div className="top">
              <div
                className="icbox"
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid var(--border-l)",
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--l-1)",
                }}
              >
                <svg className="icon" viewBox="0 0 20 20">
                  <path d="M10 2L2 7l8 5 8-5-8-5z" />
                  <path d="M2 7v6c0 2 3 4 8 4s8-2 8-4V7" />
                </svg>
              </div>
              <h3>For Colleges</h3>
              <p>
                Placement cohorts dashboard, bulk CSV onboarding, custom PDF
                compliance exporter, and unified student SSO.
              </p>
            </div>
            <div className="bottom">
              <span className="learn">Learn more →</span>
              <span className="tag">/COLLEGES</span>
            </div>
          </Link>
        </div>

        {/* Audience Feature Showcase sub-carousel */}
        <div style={{ background: "var(--surface-1)", border: "1px solid var(--border-d)", borderRadius: "14px", padding: "32px" }}>
          <Carousel autoPlay={true} showDots={true} showArrows={true} slidesToShow={1}>
            {showcaseSlides.map((slide, idx) => (
              <div key={idx} className="aud-showcase-grid">
                <div>
                  <div className="mono" style={{ color: "var(--amber)", fontSize: "10px", letterSpacing: "0.14em", marginBottom: "8px" }}>
                    {slide.audience}
                  </div>
                  <h3 style={{ fontSize: "28px", fontWeight: "500", margin: "0 0 12px 0", fontFamily: "var(--font-display)", color: "var(--bone)" }}>
                    {slide.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--d-2)", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                    {slide.desc}
                  </p>
                  <span className="mono" style={{ fontSize: "10px", color: "var(--amber)" }}>
                    {slide.tag}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "stretch", minHeight: "160px" }}>
                  {slide.mockup}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
