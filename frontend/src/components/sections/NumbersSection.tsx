"use client";

import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
  trigger: boolean;
}

function Counter({ end, decimals = 0, suffix = "", trigger }: CounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1500; // 1.5s animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * end;
      
      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, trigger]);

  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function NumbersSection() {
  const [hasIntersected, setHasIntersected] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="dark-mesh section" data-screen-label="05 Numbers">
      <div className="container">
        <div className="sx-ribbon" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span className="idx">
              §05<span className="slash"> / </span>
              <span className="name">NUMBERS</span>
            </span>
            <span>UPDATED REALTIME</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span 
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--amber)",
                boxShadow: "0 0 10px var(--amber)",
                animation: "pulse 1.5s infinite"
              }}
            />
            <span className="mono" style={{ fontSize: "10px", color: "var(--amber)", letterSpacing: "0.12em" }}>LIVE METRICS FEED</span>
          </div>
        </div>

        <div className="eyebrow" style={{ marginBottom: 18 }}>
          BY THE NUMBERS
        </div>

        <h2 className="h-section" style={{ maxWidth: 760 }}>
          The platform, in numbers.
        </h2>

        <div className="stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginTop: "40px" }}>
          <div className="stat" style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "14px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="num gradient-text" style={{ fontSize: "56px", fontWeight: "200", letterSpacing: "-0.04em", fontFamily: "var(--font-display)", color: "var(--amber)" }}>
              <Counter end={52} trigger={hasIntersected} suffix="K+" />
            </div>
            <div className="lab" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--d-2)" }}>
              Candidates onboarded
            </div>
          </div>
          <div className="stat" style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "14px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="num gradient-text" style={{ fontSize: "56px", fontWeight: "200", letterSpacing: "-0.04em", fontFamily: "var(--font-display)", color: "var(--amber)" }}>
              <Counter end={10.4} decimals={1} trigger={hasIntersected} suffix="K" />
            </div>
            <div className="lab" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--d-2)" }}>
              Jobs posted
            </div>
          </div>
          <div className="stat" style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "14px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="num gradient-text" style={{ fontSize: "56px", fontWeight: "200", letterSpacing: "-0.04em", fontFamily: "var(--font-display)", color: "var(--amber)" }}>
              <Counter end={340} trigger={hasIntersected} suffix="K" />
            </div>
            <div className="lab" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--d-2)" }}>
              Mock interviews
            </div>
          </div>
          <div className="stat" style={{ background: "var(--surface-2)", border: "1px solid var(--border-d)", borderRadius: "14px", padding: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="num gradient-text" style={{ fontSize: "56px", fontWeight: "200", letterSpacing: "-0.04em", fontFamily: "var(--font-display)", color: "var(--amber)" }}>
              <Counter end={214} trigger={hasIntersected} />
            </div>
            <div className="lab" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--d-2)" }}>
              Partner colleges
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
