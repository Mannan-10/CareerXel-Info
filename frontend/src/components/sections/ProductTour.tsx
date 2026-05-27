"use client";

import React, { useState } from "react";
import "./product-tour.css";

export default function ProductTour() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      tab: "Resume Builder",
      title: "Adaptive Resume OS",
      desc: "Create beautiful, standard-compliant resumes optimized for ATS screeners. Watch bullets and headline optimize in real time for different job criteria with a single toggle.",
      mockup: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
          <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▢ RESUME OPTIMIZER · ACTIVE</div>
          <div style={{ height: "1px", background: "var(--border-d)", margin: "4px 0" }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontSize: "12px", color: "var(--d-1)", fontWeight: "500" }}>Priya Khurana</div>
            <div style={{ fontSize: "10px", color: "var(--d-3)", fontFamily: "var(--font-mono)" }}>PRIYA@MAIL.COM · GITHUB.COM/PRIYA</div>
            <div style={{ fontSize: "11px", color: "var(--d-2)", background: "var(--surface-3)", padding: "8px", borderRadius: "6px", borderLeft: "2px solid var(--amber)", fontStyle: "italic" }}>
              "Built concurrent design token compilation pipeline, scaling SSR to 4M MAUs."
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--d-3)" }}>
            <span>EXPORTS: PDF · DOCX</span>
            <span style={{ color: "var(--brand-green, #1F8A5B)" }}>ATS SCORE: 96% ✓</span>
          </div>
        </div>
      ),
    },
    {
      tab: "Smart Matching",
      title: "Direct Matrix Matching",
      desc: "Ditch keyword algorithms. Our matching engine evaluates your scorecard against verified technical rubrics. Instantly view role matching percentages mapped to your technical footprint.",
      mockup: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
          <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▢ DISCOVERY MATRIX · 3 MATCHES</div>
          <div style={{ height: "1px", background: "var(--border-d)", margin: "4px 0" }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", background: "var(--surface-3)", padding: "6px 10px", borderRadius: "6px" }}>
              <span style={{ fontSize: "11px", color: "var(--d-1)" }}>Stripe — Sr FE</span>
              <span className="mono" style={{ fontSize: "10px", color: "var(--amber)", fontWeight: "bold" }}>96% MATCH</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", background: "var(--surface-3)", padding: "6px 10px", borderRadius: "6px" }}>
              <span style={{ fontSize: "11px", color: "var(--d-1)" }}>Linear — Design Eng</span>
              <span className="mono" style={{ fontSize: "10px", color: "var(--amber)", fontWeight: "bold" }}>91% MATCH</span>
            </div>
          </div>
          <div style={{ marginTop: "auto", fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--d-3)", textAlign: "center" }}>
            [Matching calculated across 12 dimensions]
          </div>
        </div>
      ),
    },
    {
      tab: "Mock Interviews",
      title: "Proctored AI Assessments",
      desc: "Practice under real assessment constraints. Fail technical mock interviews as many times as you need to build absolute muscle memory. AI scores communications and coding in real time.",
      mockup: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
          <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▢ ASSESSMENT IN SESSION · REC ACTIVE</div>
          <div style={{ height: "1px", background: "var(--border-d)", margin: "4px 0" }}></div>
          <div style={{ background: "rgba(0,0,0,0.25)", border: "1px dashed var(--border-d)", padding: "10px", borderRadius: "6px", fontSize: "11px", color: "var(--d-2)", lineHeight: "1.45" }}>
            "Walk me through how you'd design a token-bucket rate limiter for a public API serving 10M requests..."
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "auto", fontSize: "10px", fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "var(--d-3)" }}>TECH: <strong style={{ color: "var(--amber)" }}>82</strong></span>
            <span style={{ color: "var(--d-3)" }}>COMMS: <strong style={{ color: "var(--amber)" }}>74</strong></span>
            <span style={{ color: "var(--amber)", marginLeft: "auto" }}>Q.07 / 12</span>
          </div>
        </div>
      ),
    },
    {
      tab: "ATS Pipeline",
      title: "Full-Stack Recruitment ATS",
      desc: "For employers: track and pipeline candidates from a single, beautiful command dashboard. Coordinate screening, AI scoring transcripts, slot calendars, and secure offers.",
      mockup: (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
          <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▢ PIPELINE COMMAND · SR FE</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", height: "100%" }}>
            <div style={{ background: "var(--surface-3)", padding: "8px", borderRadius: "6px" }}>
              <div style={{ fontSize: "8px", color: "var(--d-3)" }}>SCREEN (2)</div>
              <div style={{ fontSize: "10px", fontWeight: "bold", marginTop: "4px", color: "var(--d-1)" }}>R. Kim</div>
              <div style={{ fontSize: "10px", fontWeight: "bold", color: "var(--d-1)" }}>L. Cruz</div>
            </div>
            <div style={{ background: "var(--surface-3)", padding: "8px", borderRadius: "6px", border: "1px solid rgba(74, 139, 255, 0.3)" }}>
              <div style={{ fontSize: "8px", color: "var(--amber)" }}>OFFER (1)</div>
              <div style={{ fontSize: "10px", fontWeight: "bold", marginTop: "4px", color: "var(--amber)" }}>Priya K.</div>
              <div style={{ fontSize: "8px", color: "var(--d-3)", marginTop: "2px" }}>SIGNED ✓</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      tab: "Placement Office",
      title: "Real-Time Campus Analytics",
      desc: "For colleges: bulk onboard registers via CSV in seconds. Dispatch automated invites, track cohort placement LPA averages, and generate signed individual PDF scorecards on demand.",
      mockup: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
          <div className="mono" style={{ color: "var(--amber)", fontSize: "9px" }}>▢ PLACEMENT PORTAL · RIVERSIDE</div>
          <div style={{ height: "1px", background: "var(--border-d)", margin: "4px 0" }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--d-2)" }}>
              <span>Aggregate Rate:</span>
              <strong style={{ color: "var(--amber)" }}>72% PLACED</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--d-2)" }}>
              <span>Average Package:</span>
              <strong>₹14.8 LPA</strong>
            </div>
          </div>
          <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--d-3)" }}>
            <span>CSE 2026 Batch</span>
            <span style={{ color: "var(--brand-green, #1F8A5B)" }}>NAAC READY ✓</span>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev <= 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <div className="tour-container">
      {/* Top progress bar */}
      <div className="tour-progress-bar">
        <div
          className="tour-progress-fill"
          style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      {/* Tabs navigation */}
      <div className="tour-steps-nav">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`tour-step-tab ${activeStep === idx ? "active" : ""}`}
          >
            {idx + 1}. {step.tab}
          </button>
        ))}
      </div>

      {/* Main step layout */}
      <div className="tour-layout">
        <div className="tour-mockup-panel">
          {steps[activeStep].mockup}
        </div>
        <div className="tour-content-panel">
          <div className="mono" style={{ color: "var(--amber)", fontSize: "10px", letterSpacing: "0.14em" }}>
            MODULE TOUR · STEP {activeStep + 1} OF {steps.length}
          </div>
          <h3>{steps[activeStep].title}</h3>
          <p>{steps[activeStep].desc}</p>
          <div className="tour-buttons">
            <button onClick={handleBack} className="tour-btn back">
              ← Back
            </button>
            <button onClick={handleNext} className="tour-btn next">
              {activeStep === steps.length - 1 ? "Restart Tour" : "Next Module →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
