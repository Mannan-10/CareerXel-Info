export default function FeatureGrid() {
  return (
    <>
{/* §02 Capabilities Bento */}
<section
  className="dark-mesh section"
  data-screen-label="02 Capabilities"
>
  <div className="container">
    <h2 className="h-section" style={{ color: "var(--d-1)" }}>
      Everything you need.
      <br />
      <span className="muted-weight">Nothing you don&apos;t.</span>
    </h2>

    <div className="bento">
      {/* 2×2 hero tile: AI Mock Interviews */}
      <div className="card-d tile tile-2x2">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div className="icbox">
            <svg className="icon" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="7" />
              <path d="M7 10l2 2 4-4" />
            </svg>
          </div>
          <h4 style={{ fontSize: 26 }}>AI Mock Interviews</h4>
          <p style={{ maxWidth: 380 }}>
            Generated per role, scored on technical &amp; communication,
            with proctoring and hire recommendations.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border-d)",
              borderRadius: 10,
              padding: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--d-3)",
                marginBottom: 8,
              }}
            >
              <span>SESSION 04 · LIVE</span>
              <span style={{ color: "var(--amber)" }}>28:14</span>
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--d-2)",
                marginBottom: 10,
              }}
            >
              Walk me through how you&apos;d design a rate limiter for a
              public API…
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--d-2)",
                }}
              >
                <span>TECHNICAL</span>
                <span>82</span>
              </div>
              <div
                style={{
                  height: 4,
                  background: "var(--surface-3)",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "82%",
                    background: "var(--amber)",
                    borderRadius: 2,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--d-2)",
                }}
              >
                <span>COMMUNICATION</span>
                <span>74</span>
              </div>
              <div
                style={{
                  height: 4,
                  background: "var(--surface-3)",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "74%",
                    background: "var(--burnt)",
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          </div>
          <span className="tag">/INTERVIEW-ENGINE</span>
        </div>
      </div>

      {/* 2×1 wide: Recruiter ATS */}
      <div className="card-d tile tile-2x1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div className="icbox">
            <svg className="icon" viewBox="0 0 20 20">
              <rect x="3" y="4" width="14" height="13" rx="1.5" />
              <path d="M3 8h14M7 4v3" />
            </svg>
          </div>
          <h4>Recruiter ATS</h4>
          <p>
            Stages, slots, calendars, bulk uploads — every applicant in
            context.
          </p>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              flex: 1,
              background: "var(--surface-2)",
              border: "1px solid var(--border-d)",
              borderRadius: 6,
              padding: 6,
            }}
          >
            <div
              className="mono"
              style={{ color: "var(--d-3)", fontSize: 9 }}
            >
              APPLIED 248
            </div>
          </div>
          <div
            style={{
              flex: 1,
              background: "var(--surface-2)",
              border: "1px solid var(--border-d)",
              borderRadius: 6,
              padding: 6,
            }}
          >
            <div
              className="mono"
              style={{ color: "var(--d-3)", fontSize: 9 }}
            >
              SCREEN 87
            </div>
          </div>
          <div
            style={{
              flex: 1,
              background: "var(--surface-2)",
              border: "1px solid rgba(74,139,255,0.4)",
              borderRadius: 6,
              padding: 6,
            }}
          >
            <div
              className="mono"
              style={{ color: "var(--amber)", fontSize: 9 }}
            >
              OFFER 12
            </div>
          </div>
        </div>
      </div>

      {/* 1×1 tiles */}
      <div className="card-d tile">
        <div className="icbox">
          <svg className="icon" viewBox="0 0 20 20">
            <rect x="4" y="3" width="12" height="14" rx="1.5" />
            <path d="M7 7h6M7 10h6M7 13h4" />
          </svg>
        </div>
        <div>
          <h4>Resume Builder</h4>
          <p>Adaptive resumes that retune for every role.</p>
        </div>
        <span className="tag">/RESUME-OS</span>
      </div>

      <div className="card-d tile">
        <div className="icbox">
          <svg className="icon" viewBox="0 0 20 20">
            <circle cx="9" cy="9" r="5" />
            <path d="M13 13l4 4" />
          </svg>
        </div>
        <div>
          <h4>Job Search</h4>
          <p>Full-text search with smart matching beyond keywords.</p>
        </div>
        <span className="tag">/DISCOVERY</span>
      </div>

      <div className="card-d tile">
        <div className="icbox">
          <svg className="icon" viewBox="0 0 20 20">
            <circle cx="5" cy="5" r="2" />
            <circle cx="15" cy="10" r="2" />
            <circle cx="5" cy="15" r="2" />
            <path d="M7 5h6M13 10h-6M7 15h6" />
          </svg>
        </div>
        <div>
          <h4>Career Roadmaps</h4>
          <p>
            Role and skill paths from where you are to where you&apos;re
            going.
          </p>
        </div>
        <span className="tag">/GROWTH</span>
      </div>

      <div className="card-d tile">
        <div className="icbox">
          <svg className="icon" viewBox="0 0 20 20">
            <path d="M3 17h14M5 13v4M9 9v8M13 11v6M17 5v12" />
          </svg>
        </div>
        <div>
          <h4>Placement Analytics</h4>
          <p>Real numbers per college, per cohort, per period.</p>
        </div>
        <span className="tag">/ANALYTICS</span>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
