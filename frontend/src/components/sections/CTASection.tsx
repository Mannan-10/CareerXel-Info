import Link from "next/link";

export default function CTASection() {
  return (
    <>
{/* §07 Final CTA */}
<section
  className="cta-mesh section-edge"
  style={{ position: "relative", overflow: "hidden" }}
  data-screen-label="07 CTA"
>
  <div className="container cta-band">
    <div className="sx-ribbon">
      <span className="idx">
        §07<span className="slash"> / </span>
        <span className="name">GET STARTED</span>
      </span>
      <span>NO CARD · NO COMMITMENT</span>
    </div>

    <div
      className="eyebrow"
      style={{ justifyContent: "center", margin: "0 auto 18px" }}
    >
      START FREE
    </div>

    <h2
      className="display"
      style={{ fontSize: "clamp(48px, 6.5vw, 80px)" }}
    >
      <span className="bone-grad">Get started in minutes.</span>
    </h2>

    <p
      style={{
        fontSize: 19,
        color: "var(--d-2)",
        maxWidth: 620,
        margin: "24px auto 0",
      }}
    >
      Create your account today. Your first AI mock interview takes less
      than five minutes.
    </p>

    <div
      className="flex gap-12 mt-32"
      style={{ justifyContent: "center" }}
    >
      <Link className="btn btn-primary" href="/pricing">
        Create your account
        <svg className="icon" viewBox="0 0 20 20">
          <path d="M5 10h10M11 6l4 4-4 4" />
        </svg>
      </Link>
      <Link className="btn btn-ghost" href="/about">
        Talk to sales
      </Link>
    </div>
  </div>

  {/* CTA floating fragments */}
  <div
    className="frag"
    style={{
      top: "14%",
      left: "6%",
      transform: "rotate(-7deg)",
      maxWidth: 200,
      opacity: 0.85,
    }}
  >
    <div
      className="mono"
      style={{ color: "var(--amber)", marginBottom: 4 }}
    >
      ▢ HIRE REC
    </div>
    <div style={{ fontSize: 13, fontWeight: 500 }}>STRONG · 92/100</div>
  </div>

  <div
    className="frag"
    style={{
      top: "18%",
      right: "4%",
      transform: "rotate(5deg)",
      maxWidth: 200,
      opacity: 0.85,
    }}
  >
    <div
      className="mono"
      style={{ color: "var(--d-3)", marginBottom: 4 }}
    >
      ▢ MATCHES
    </div>
    <div style={{ fontSize: 13 }}>12 new today</div>
  </div>

  <div
    className="frag"
    style={{
      bottom: "10%",
      left: "10%",
      transform: "rotate(4deg)",
      maxWidth: 220,
      opacity: 0.8,
    }}
  >
    <div
      className="mono"
      style={{ color: "var(--d-3)", marginBottom: 6 }}
    >
      ▢ PIPELINE
    </div>
    <div style={{ display: "flex", gap: 4 }}>
      <span
        style={{
          flex: 1,
          height: 14,
          background: "var(--surface-3)",
          borderRadius: 3,
          border: "1px solid var(--border-d)",
        }}
      />
      <span
        style={{
          flex: 1,
          height: 14,
          background: "var(--surface-3)",
          borderRadius: 3,
          border: "1px solid var(--border-d)",
        }}
      />
      <span
        style={{
          flex: 1,
          height: 14,
          background: "var(--amber)",
          borderRadius: 3,
        }}
      />
    </div>
  </div>

  <div
    className="frag"
    style={{
      bottom: "14%",
      right: "8%",
      transform: "rotate(-3deg)",
      maxWidth: 220,
      opacity: 0.8,
    }}
  >
    <div
      className="mono"
      style={{ color: "var(--amber)", marginBottom: 4 }}
    >
      ▢ INTERVIEW
    </div>
    <div style={{ fontSize: 13 }}>Tomorrow · 3:00 IST</div>
  </div>
</section>
    </>
  );
}
