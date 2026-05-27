export default function SignalBar() {
  return (
    <>
{/* Signal Bar */}
<div className="signal" data-screen-label="Signal Bar">
  <div className="signal-inner">
    <span className="pulse-dot" />
    <div style={{ overflow: "hidden", flex: 1 }}>
      <div className="signal-track">
        <span>
          <span className="hi">LIVE</span> · 12,847 INTERVIEWS THIS WEEK
          · 3.2K JOBS POSTED ·{" "}
          <span className="hi">47 COLLEGES ONBOARDED</span> · 8 LANGUAGES
          SUPPORTED · UPTIME 99.98%
        </span>
        <span>
          <span className="hi">LIVE</span> · 12,847 INTERVIEWS THIS WEEK
          · 3.2K JOBS POSTED ·{" "}
          <span className="hi">47 COLLEGES ONBOARDED</span> · 8 LANGUAGES
          SUPPORTED · UPTIME 99.98%
        </span>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
