import Link from "next/link";

export default function WorkflowSection() {
  return (
    <>
{/* §04 How It Works */}
<section className="light section" data-screen-label="04 Workflow">
  <div className="container">
    <h2 className="h-section" style={{ maxWidth: 760 }}>
      From profile
      <br />
      <span className="muted-weight">to placement.</span>
    </h2>

    <div className="steps">
      <div className="stp">
        <div className="num">01</div>
        <h3>Build your profile.</h3>
        <p>
          AI parses your resume, fills your profile, and asks the right
          follow-up questions.
        </p>
        <Link href="/candidates" className="mono block text-xs tracking-wider text-[#4A8BFF] hover:underline" style={{ marginTop: "12px" }}>
          Candidate profile builder →
        </Link>
      </div>

      <div className="conn" />

      <div className="stp">
        <div className="num">02</div>
        <h3>Match &amp; practice.</h3>
        <p>
          Smart matching finds roles. Mock interviews score you and tell
          you what to fix.
        </p>
        <Link href="/candidates" className="mono block text-xs tracking-wider text-[#4A8BFF] hover:underline" style={{ marginTop: "12px" }}>
          Calibrated AI mocks →
        </Link>
      </div>

      <div className="conn" />

      <div className="stp">
        <div className="num">03</div>
        <h3>Get placed.</h3>
        <p>
          Apply, interview, sign. Recruiters get hire recommendations they
          can trust.
        </p>
        <Link href="/employers" className="mono block text-xs tracking-wider text-[#4A8BFF] hover:underline" style={{ marginTop: "12px" }}>
          Smart ATS funnel →
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
