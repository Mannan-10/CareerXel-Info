"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import SignalBar from "@/components/sections/SignalBar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import "./PricingPageClient.css";

type Audience = "individual" | "employer" | "college";

type PricingPlan = {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
  audience: Audience;
  tag?: string | null;
  priceMonthly: string;
  priceAnnual: string;
  period: string;
  description: string;
  ctaText: string;
  ctaUrl?: string | null;
  isFeatured?: boolean | null;
  features: Record<string, string[]>;
  order: number;
};

type PricingPageClientProps = {
  plans: PricingPlan[];
};

const audienceLabels: Record<Audience, string> = {
  individual: "Individuals",
  employer: "Employers",
  college: "Colleges",
};

const comparisonFeatures: Record<Audience, { name: string; val1: string; val2: string }[]> = {
  individual: [
    { name: "ATS Resume Builder", val1: "Basic (1 page limit)", val2: "Advanced (Unlimited specs)" },
    { name: "Smart Job Matching", val1: "Up to 5 roles/month", val2: "Unlimited live matching" },
    { name: "AI Mock Sessions", val1: "2 sessions / month", val2: "Unlimited proctoring slots" },
    { name: "Audio Transcriptions", val1: "✓ (Standard)", val2: "✓ (High fidelity)" },
    { name: "Explainable ML Scoring", val1: "—", val2: "✓ (Full 12-dimension transcript trace)" },
    { name: "Integration & Auth", val1: "Google Auth Only", val2: "Google, Phone OTP, SAML SSO" }
  ],
  employer: [
    { name: "Active Job Postings", val1: "1 Active Slot", val2: "Unlimited Active Slots" },
    { name: "Recruiter ATS", val1: "✓ (Basic)", val2: "✓ (Full Kanban custom stages)" },
    { name: "AI Screening & Proctoring", val1: "50 candidates / month", val2: "Unlimited proctored candidates" },
    { name: "Candidate video replay", val1: "—", val2: "✓ (Stored in secure S3 bucket)" },
    { name: "SAML SSO & SOC 2", val1: "—", val2: "✓ (SOC 2 Type II compliant)" },
    { name: "Dedicated SLA Support", val1: "—", val2: "✓ (4-hour SLA live chat support)" }
  ],
  college: [
    { name: "Student Onboarding", val1: "Up to 500 students", val2: "Unlimited students & graduates" },
    { name: "Funnel Placement Analytics", val1: "✓ (Cohort aggregate)", val2: "✓ (Deep sector-by-sector trends)" },
    { name: "Compliance Reports", val1: "✓ (Basic metrics)", val2: "✓ (Co-signed NAAC & NIRF standard)" },
    { name: "Isolated Database Tenant", val1: "—", val2: "✓ (Per-tenant isolated database)" },
    { name: "Unified LMS SSO integration", val1: "—", val2: "✓ (Moodle, Canvas, Blackboard)" },
    { name: "Dedicated Support Officer", val1: "Email only (48h)", val2: "Phone, Chat & Video (4h SLA)" }
  ]
};

export default function PricingPageClient({ plans }: PricingPageClientProps) {
  const [currentAud, setCurrentAud] = useState<Audience>("individual");
  const [billingAnnual, setBillingAnnual] = useState(true);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [toasts, setToasts] = useState<
    { id: number; message: string; sub: string }[]
  >([]);

  const toastIdRef = useRef(0);

  const triggerToast = (msg: string, sub: string) => {
    const id = toastIdRef.current++;
    setToasts((prev) => [...prev, { id, message: msg, sub }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3500);
  };

  const currentPlans = useMemo(() => {
    return plans
      .filter((plan) => plan.audience === currentAud)
      .sort((a, b) => a.order - b.order);
  }, [plans, currentAud]);

  const handleCTAClick = (planName: string) => {
    triggerToast(
      `${planName} checkout pipeline initialized. Redirecting to sandbox...`,
      "Subscription Handshake"
    );
  };

  const faqs = [
    {
      q: "Is there really a free tier?",
      a: "Yes. Forever. For individual candidates and 1-job employers, the platform is free with no card on file.",
    },
    {
      q: "How does per-seat billing work?",
      a: "Each seat is one recruiter or hiring-manager login. You can add or remove seats any month.",
    },
    {
      q: "What counts as an AI interview?",
      a: "One completed AI mock or screening session per candidate per role.",
    },
    {
      q: "Do colleges pay per student?",
      a: "No — colleges are billed per cohort, annually.",
    },
    {
      q: "Can I switch plans mid-cycle?",
      a: "Upgrades pro-rate immediately. Downgrades take effect at the next billing period.",
    },
  ];

  return (
    <main>
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-item">
            <span className="toast-title">{toast.sub}</span>
            <span className="toast-body">{toast.message}</span>
          </div>
        ))}
      </div>

      <SignalBar />

      <section className="dark-mesh" style={{ padding: "96px 0 64px" }}>
        <div className="container">
          <Breadcrumbs />
          <div className="sx-ribbon">
            <span className="idx">
              §00<span className="slash"> / </span>
              <span className="name">PRICING</span>
            </span>
            <span>HONEST · ITEMIZED · NO LOCK-IN</span>
          </div>

          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="serif-kicker">No surprises. Ever.</div>
            <div
              className="eyebrow"
              style={{ justifyContent: "center", margin: "18px auto 0" }}
            >
              PRICING
            </div>

            <h1 className="display mt-24">
              <span className="bone-grad">Pay for what you ship,</span>
              <br />
              <span className="muted-weight">not what you might.</span>
            </h1>

            <p
              className="subhead"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Free forever for individuals. Per-seat for teams. Annual contracts
              for institutions. Public, itemized, never negotiated behind closed
              doors.
            </p>
          </div>

          <div className="price-tabs" id="price-tabs-container">
            {(Object.keys(audienceLabels) as Audience[]).map((audience) => (
              <div
                key={audience}
                id={`price-tab-${audience}`}
                onClick={() => setCurrentAud(audience)}
                className={`price-tab ${currentAud === audience ? "on" : ""}`}
              >
                {audienceLabels[audience]}
              </div>
            ))}
          </div>

          <div className="billing-toggle" id="billing-toggle-container">
            <span style={{ color: "var(--d-1)" }}>Monthly</span>
            <div
              id="billing-switch-toggle"
              onClick={() => setBillingAnnual(!billingAnnual)}
              className={`switch ${billingAnnual ? "on" : ""}`}
            />
            <span style={{ color: "var(--d-1)" }}>Annual</span>
            <span className="pill">SAVE 20%</span>
          </div>

          <div className="pricing-grid">
            {currentPlans.map((plan) => {
              const price = billingAnnual
                ? plan.priceAnnual
                : plan.priceMonthly;

              const isFree = price === "$0" || price === "Custom";

               return (
                <div
                  key={plan.documentId || plan.id}
                  id={`pricing-plan-${plan.slug || plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`plan ${plan.isFeatured ? "feat" : ""}`}
                >
                  <div className="plan-h">
                    <div className="plan-name">{plan.name}</div>
                    {plan.tag ? <span className="plan-tag">{plan.tag}</span> : null}
                  </div>

                  <div className="plan-price">
                    <span className={`v ${isFree && price === "$0" ? "free" : ""}`}>
                      {price}
                    </span>
                    <span className="per">{plan.period}</span>
                  </div>

                  <div className="plan-desc">{plan.description}</div>

                  <button
                    id={`pricing-cta-${plan.slug || plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleCTAClick(plan.name)}
                    className={`plan-cta ${plan.isFeatured ? "prim" : "ghost"}`}
                  >
                    {plan.ctaText}
                  </button>

                  <div className="plan-divider" />

                  {Object.entries(plan.features || {}).map(
                    ([section, items], index, array) => (
                      <React.Fragment key={section}>
                        <div className="feat-l">▢ {section}</div>
                        <ul>
                          {items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>

                        {index < array.length - 1 && (
                          <div className="plan-divider" />
                        )}
                      </React.Fragment>
                    )
                  )}
                </div>
              );
            })}
          </div>

          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "var(--d-3)",
              marginTop: "32px",
            }}
          >
            ▢ ALL PLANS · NO CARD REQUIRED · CANCEL ANYTIME · DATA EXPORT
            INCLUDED
          </p>

          {/* Dynamic Feature Comparison Table */}
          <div className="comparison-sec" id="pricing-comparison-table-section">
            <div className="comparison-title">
              <h2 className="h-section" style={{ fontSize: "28px", marginBottom: "8px" }} id="comparison-table-title">Compare plan features</h2>
              <p style={{ color: "var(--d-2)", fontSize: "14px" }}>
                Dynamic breakdown for {audienceLabels[currentAud]} plans
              </p>
            </div>
            <div className="comp-table-wrap">
              <table className="comp-table">
                <thead>
                  <tr>
                    <th>FEATURE DETAIL</th>
                    <th>{currentAud === "individual" ? "FREE PLAN" : currentAud === "employer" ? "STARTUP PLAN" : "STANDARD PLAN"}</th>
                    <th>{currentAud === "individual" ? "PRO PLAN" : currentAud === "employer" ? "ENTERPRISE PLAN" : "ELITE PLAN"}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures[currentAud].map((feat) => (
                    <tr key={feat.name}>
                      <td className="feature-name">▢ {feat.name}</td>
                      <td className="val-col">
                        {feat.val1 === "—" ? <span className="tick-no">—</span> : feat.val1.startsWith("✓") ? <span className="tick-yes">{feat.val1}</span> : feat.val1}
                      </td>
                      <td className="val-col">
                        {feat.val2 === "—" ? <span className="tick-no">—</span> : feat.val2.startsWith("✓") ? <span className="tick-yes">{feat.val2}</span> : feat.val2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>
              §03<span className="slash"> / </span>
              <span className="name">FAQ</span>
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--l-2)",
              }}
            >
              PRICING · BILLING · LEGAL
            </span>
          </div>

          <div className="faq-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: "18px" }}>
                FAQ
              </div>
              <h2
                className="h-section"
                style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
              >
                Pricing,
                <br />
                <span className="muted-weight">in plain English.</span>
              </h2>
              <p
                style={{
                  color: "var(--l-2)",
                  marginTop: "24px",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Still have questions?{" "}
                <Link
                  href="/about"
                  style={{
                    color: "var(--burnt)",
                    borderBottom: "1px solid currentColor",
                  }}
                >
                  Talk to a human
                </Link>
                .
              </p>
            </div>

            <div>
              {faqs.map((faq, index) => {
                const isExpanded = expandedFAQ === index;

                return (
                  <div
                    key={faq.q}
                    className="faq-q"
                    onClick={() => setExpandedFAQ(isExpanded ? null : index)}
                  >
                    <div className="q-h">
                      <h3 className="q">{faq.q}</h3>
                      <span>{isExpanded ? "▼" : "▶"}</span>
                    </div>

                    <div className={`a ${isExpanded ? "open" : ""}`}>{faq.a}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        className="cta-mesh page-cta"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">
              §04<span className="slash"> / </span>
              <span className="name">START</span>
            </span>
            <span>NO CARD REQUIRED</span>
          </div>

          <div
            className="eyebrow"
            style={{ justifyContent: "center", margin: "0 auto 18px" }}
          >
            START FREE
          </div>

          <h2 className="display">
            <span className="bone-grad">Try it in your tab today.</span>
          </h2>

          <p
            style={{
              fontSize: "19px",
              color: "var(--d-2)",
              maxWidth: "600px",
              margin: "24px auto 0",
            }}
          >
            No card required. Cancel anytime. Data export included on every plan.
          </p>

          <div
            className="flex gap-12 mt-32"
            style={{ justifyContent: "center" }}
          >
            <Link className="btn btn-primary" href="#">
              Start free
            </Link>
            <Link className="btn btn-ghost" href="/about">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}