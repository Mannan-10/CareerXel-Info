export default function ProductDepthSection() {
  return (
    <>
{/* §03 Product Depth */}
<section
  className="dark-mesh section"
  style={{ position: "relative" }}
  data-screen-label="03 Product"
>
  <div className="container">
    <h2
      className="h-section"
      style={{ color: "var(--d-1)", maxWidth: 920 }}
    >
      From the candidate&apos;s first click
      <br />
      <span className="muted-weight">
        to the recruiter&apos;s final hire.
      </span>
    </h2>

    <div className="mock product-mock">
      <div className="mock-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span
          className="mono"
          style={{ color: "var(--d-3)", marginLeft: "auto" }}
        >
          RECRUITER.OS / ANALYTICS
        </span>
      </div>

      <div className="mockui">
        <div className="row">
          <div className="kpi">
            <div className="lab">SCREENED</div>
            <div className="val">128</div>
            <div className="delta">▲ THIS WEEK</div>
          </div>
          <div className="kpi">
            <div className="lab">QUALIFIED</div>
            <div className="val">68%</div>
            <div className="delta">▲ 11%</div>
          </div>
          <div className="kpi">
            <div className="lab">OFFERS</div>
            <div className="val">23</div>
            <div className="delta">▲ THIS MONTH</div>
          </div>
          <div className="kpi">
            <div className="lab">PIPELINE</div>
            <div className="val">412</div>
            <div className="delta">▲ ACTIVE</div>
          </div>
        </div>

        <div className="row" style={{ flex: 1 }}>
          <div className="chart" style={{ flex: 2 }}>
            <div
              className="chart-title"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Hire velocity — last 6 months</span>
              <span
                className="mono"
                style={{ color: "var(--d-3)", fontSize: 9 }}
              >
                AMBER · OFFERS / GRAY · APPLIES
              </span>
            </div>
            <svg
              className="chart-svg"
              viewBox="0 0 400 120"
              preserveAspectRatio="none"
            >
              <g stroke="rgba(180,210,255,0.06)" strokeWidth="1">
                <line x1="0" x2="400" y1="30" y2="30" />
                <line x1="0" x2="400" y1="60" y2="60" />
                <line x1="0" x2="400" y1="90" y2="90" />
              </g>
              <path
                d="M10 90 L70 75 L130 80 L190 55 L250 60 L310 40 L370 30"
                stroke="#4A8BFF"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M10 100 L70 95 L130 88 L190 92 L250 78 L310 70 L370 65"
                stroke="#A0AAC0"
                strokeWidth="1.4"
                fill="none"
                strokeDasharray="3 3"
              />
              <g fill="#4A8BFF">
                <circle cx="10" cy="90" r="2" />
                <circle cx="70" cy="75" r="2" />
                <circle cx="130" cy="80" r="2" />
                <circle cx="190" cy="55" r="2" />
                <circle cx="250" cy="60" r="2" />
                <circle cx="310" cy="40" r="2" />
                <circle cx="370" cy="30" r="2" />
              </g>
            </svg>
          </div>

          <div className="chart" style={{ flex: 1 }}>
            <div className="chart-title">Top sources</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                flex: 1,
                justifyContent: "center",
              }}
            >
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9,
                    color: "var(--d-2)",
                    marginBottom: 3,
                  }}
                >
                  REFERRAL · 142
                </div>
                <div
                  style={{
                    height: 5,
                    background: "var(--surface-3)",
                    borderRadius: 3,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "80%",
                      background: "var(--amber)",
                      borderRadius: 3,
                    }}
                  />
                </div>
              </div>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9,
                    color: "var(--d-2)",
                    marginBottom: 3,
                  }}
                >
                  DIRECT · 96
                </div>
                <div
                  style={{
                    height: 5,
                    background: "var(--surface-3)",
                    borderRadius: 3,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "55%",
                      background: "var(--burnt)",
                      borderRadius: 3,
                    }}
                  />
                </div>
              </div>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9,
                    color: "var(--d-2)",
                    marginBottom: 3,
                  }}
                >
                  COLLEGE · 78
                </div>
                <div
                  style={{
                    height: 5,
                    background: "var(--surface-3)",
                    borderRadius: 3,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "42%",
                      background: "#A0AAC0",
                      borderRadius: 3,
                    }}
                  />
                </div>
              </div>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9,
                    color: "var(--d-2)",
                    marginBottom: 3,
                  }}
                >
                  JOB-BOARD · 54
                </div>
                <div
                  style={{
                    height: 5,
                    background: "var(--surface-3)",
                    borderRadius: 3,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "30%",
                      background: "#6B7590",
                      borderRadius: 3,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="feat-row">
      <div className="ft">
        <div className="top">
          <svg
            className="icon"
            style={{ color: "var(--d-1)" }}
            viewBox="0 0 20 20"
          >
            <path d="M3 5h4v4H3zM10 5h7M10 9h7M3 12h4v4H3zM10 12h7M10 16h5" />
          </svg>
          <span className="lab">PIPELINE</span>
        </div>
        <h5>Stages, slots, signed offers.</h5>
        <p>
          Every stage configurable. Every slot tracked. Bulk invites
          included.
        </p>
      </div>

      <div className="ft">
        <div className="top">
          <svg
            className="icon"
            style={{ color: "var(--d-1)" }}
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="7" />
            <path d="M10 6v4l3 2" />
          </svg>
          <span className="lab">INTERVIEWS</span>
        </div>
        <h5>AI scoring, 24/7.</h5>
        <p>
          Identity-verified, proctored, recorded — with hire
          recommendations.
        </p>
      </div>

      <div className="ft">
        <div className="top">
          <svg
            className="icon"
            style={{ color: "var(--d-1)" }}
            viewBox="0 0 20 20"
          >
            <path d="M3 17h14M6 14V8M10 14V5M14 14v-7" />
          </svg>
          <span className="lab">ANALYTICS</span>
        </div>
        <h5>Numbers leadership reads.</h5>
        <p>
          Hire velocity, source mix, conversion rates, placement rates by
          cohort.
        </p>
      </div>
    </div>
  </div>

</section>
    </>
  );
}
