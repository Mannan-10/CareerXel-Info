import Link from "next/link";

export default function HeroSection() {
  return (
    <>
{/* §00 Hero */}
<section className="dark-mesh hero" data-screen-label="00 Hero">
  <div className="container">
    <div className="hero-grid">
      <div>
        <div className="serif-kicker">A career platform, reimagined.</div>

        <h1 className="display mt-24" id="hero-heading">
          <span className="bone-grad">Hire smarter.</span>
          <br />
          <span className="muted-weight">Grow faster.</span>
        </h1>

        <p
          style={{
            fontSize: 19,
            color: "var(--d-2)",
            maxWidth: 580,
            marginTop: 28,
            lineHeight: 1.55,
          }}
        >
          One platform for candidates, employers, and colleges — with AI
          mock interviews, full-stack ATS, and placement analytics that
          actually move the needle.
        </p>

        <div className="flex gap-12 mt-32" id="hero-cta-group">
          <Link className="btn btn-primary" href="/candidates" id="hero-btn-start">
            Start free
            <svg className="icon" viewBox="0 0 20 20">
              <path d="M5 10h10M11 6l4 4-4 4" />
            </svg>
          </Link>

          <Link className="btn btn-ghost" href="/employers" id="hero-btn-demo">
            Book a demo
          </Link>
        </div>

        <div className="micro-stats">
          <div>
            <strong>10K+</strong> JOBS
          </div>
          <div>
            <strong>50K+</strong> CANDIDATES
          </div>
          <div>
            <strong>200+</strong> COLLEGES
          </div>
          <div>
            <strong>7</strong> LANGUAGES
          </div>
        </div>
      </div>

      {/* Hero Mockup */}
      <div className="hero-mock-wrap">
        <div className="mock hero-mock-inner">
          <div className="mock-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--d-3)",
                marginLeft: "auto",
              }}
            >
              CANDIDATE.OS
            </span>
          </div>

          <div className="mockui">
            <div className="row">
              <span
                className="pill"
                style={{
                  color: "var(--amber)",
                  borderColor: "rgba(74,139,255,0.35)",
                }}
              >
                DASHBOARD
              </span>
              <span className="pill">JOBS</span>
              <span className="pill">INTERVIEWS</span>
            </div>

            <div className="row">
              <div className="kpi">
                <div className="lab">PROFILE</div>
                <div className="val">87%</div>
                <div className="delta">▲ COMPLETE</div>
              </div>

              <div className="kpi">
                <div className="lab">MATCHES</div>
                <div className="val">12</div>
                <div className="delta">▲ 4 NEW</div>
              </div>
            </div>

            <div className="chart">
              <div
                className="chart-title"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Application velocity</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    color: "var(--d-3)",
                  }}
                >
                  30D
                </span>
              </div>

              <svg
                className="chart-svg"
                viewBox="0 0 200 80"
                preserveAspectRatio="none"
                role="img"
                aria-label="Line chart representing application velocity over 30 days showing positive trajectory upward"
              >
                <defs>
                  <linearGradient
                    id="heroGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#4A8BFF"
                      stopOpacity="0.4"
                    />
                    <stop
                      offset="100%"
                      stopColor="#4A8BFF"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  className="chart-fill-anim"
                  d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 25 L120 30 L140 18 L160 22 L180 12 L200 16 L200 80 L0 80 Z"
                  fill="url(#heroGradient)"
                />
                <path
                  className="chart-path-anim"
                  d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 25 L120 30 L140 18 L160 22 L180 12 L200 16"
                  stroke="#4A8BFF"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>

            <div className="row" style={{ gap: 6 }}>
              <div className="pipe-col">
                <div className="h">
                  <span>APPLIED</span>
                  <span className="ct">8</span>
                </div>
                <div className="pipe-card">
                  <div className="nm">Stripe</div>
                  <div className="ro">SR FRONTEND</div>
                </div>
                <div className="pipe-card">
                  <div className="nm">Linear</div>
                  <div className="ro">DESIGN ENG</div>
                </div>
              </div>

              <div className="pipe-col">
                <div className="h">
                  <span>INTERVIEW</span>
                  <span className="ct">3</span>
                </div>
                <div className="pipe-card">
                  <div className="nm">Vercel</div>
                  <div className="ro">PLATFORM</div>
                </div>
              </div>

              <div className="pipe-col">
                <div className="h">
                  <span>OFFER</span>
                  <span className="ct">1</span>
                </div>
                <div
                  className="pipe-card"
                  style={{ borderColor: "rgba(74,139,255,0.4)" }}
                >
                  <div className="nm" style={{ color: "var(--amber)" }}>
                    Figma
                  </div>
                  <div className="ro">PRODUCT ENG</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frag frag-pos-1">
          <div
            className="mono"
            style={{ color: "var(--amber)", marginBottom: 4 }}
          >
            ADVISOR
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--d-1)",
              maxWidth: 160,
            }}
          >
            Let&apos;s review your week →
          </div>
        </div>

        <div className="frag frag-pos-2">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="14"
                stroke="rgba(180,210,255,0.12)"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                stroke="#4A8BFF"
                strokeWidth="3"
                fill="none"
                strokeDasharray="76 88"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>

            <div>
              <div className="mono" style={{ color: "var(--d-3)" }}>
                PROFILE
              </div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>
                87% complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
