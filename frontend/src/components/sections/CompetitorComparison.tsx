"use client";

import React, { useState } from "react";
import "./competitor-comparison.css";

export default function CompetitorComparison() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const capabilities = [
    {
      cap: "AI Mock Interviews (24/7 client per-role)",
      cx: "✓ YES",
      workable: "— NO",
      lever: "— NO",
      greenhouse: "— NO",
    },
    {
      cap: "Identity Verification & Proctoring",
      cx: "✓ YES",
      workable: "— NO",
      lever: "— NO",
      greenhouse: "— NO",
    },
    {
      cap: "Full Recruiter ATS (stages, slots, calendars)",
      cx: "✓ YES",
      workable: "✓ YES",
      lever: "✓ YES",
      greenhouse: "✓ YES",
    },
    {
      cap: "College Placement & Cohort Aggregates",
      cx: "✓ YES",
      workable: "— NO",
      lever: "— NO",
      greenhouse: "— NO",
    },
    {
      cap: "12-Dimension Explainable Scoring Engine",
      cx: "✓ YES",
      workable: "— NO",
      lever: "— NO",
      greenhouse: "— NO",
    },
    {
      cap: "Transparent Public Itemized Pricing",
      cx: "✓ YES",
      workable: "— NO",
      lever: "— NO",
      greenhouse: "— NO",
    },
    {
      cap: "Custom Career Roadmaps & LMS SSO",
      cx: "✓ YES",
      workable: "— NO",
      lever: "— NO",
      greenhouse: "— NO",
    },
  ];

  return (
    <div className="comparison-container">
      {/* Desktop view */}
      <div className="comp-table-wrap">
        <table className="comp-table">
          <thead>
            <tr>
              <th>Capability</th>
              <th className="highlight" style={{ color: "var(--burnt)" }}>CareerXel</th>
              <th>Workable</th>
              <th>Lever</th>
              <th>Greenhouse</th>
            </tr>
          </thead>
          <tbody>
            {capabilities.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setActiveRow(idx)}
                onMouseLeave={() => setActiveRow(null)}
                style={{
                  backgroundColor: activeRow === idx ? "rgba(74, 139, 255, 0.02)" : "transparent",
                }}
              >
                <td style={{ color: "var(--l-1)", fontWeight: 500 }}>{row.cap}</td>
                <td className="highlight yes">{row.cx}</td>
                <td className={row.workable === "✓ YES" ? "yes" : "no"}>{row.workable}</td>
                <td className={row.lever === "✓ YES" ? "yes" : "no"}>{row.lever}</td>
                <td className={row.greenhouse === "✓ YES" ? "yes" : "no"}>{row.greenhouse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="comp-cards-grid">
        {capabilities.map((row, idx) => (
          <div key={idx} className="comp-mobile-card">
            <h4>{row.cap}</h4>
            <div className="row">
              <span className="label">CareerXel</span>
              <span className="val yes">{row.cx}</span>
            </div>
            <div className="row">
              <span className="label">Workable</span>
              <span className="val no">{row.workable}</span>
            </div>
            <div className="row">
              <span className="label">Lever</span>
              <span className="val no">{row.lever}</span>
            </div>
            <div className="row">
              <span className="label">Greenhouse</span>
              <span className="val no">{row.greenhouse}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
