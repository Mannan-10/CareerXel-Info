"use client";

import React, { useMemo, useRef, useState } from "react";
import Carousel from "@/components/ui/Carousel";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BackToTop from "@/components/ui/BackToTop";
import type { ResourceItem } from "@/app/resources/page";
import "./resources.css";

type ResourcesContentProps = {
  resources: ResourceItem[];
};

const categories = [
  { label: "All", id: "All" },
  { label: "Engineering", id: "Engineering" },
  { label: "Hiring", id: "Hiring" },
  { label: "Placements", id: "Placements" },
  { label: "AI & Methodology", id: "AI" },
  { label: "Customer Stories", id: "Stories" },
  { label: "Product", id: "Product" },
];

const defaultFallbackResources: ResourceItem[] = [
  {
    id: 991,
    title: "How we calibrate the scoring engine — every month, against real outcomes",
    slug: "calibrate-scoring-engine",
    description: "Most interview-AI vendors run a model and never look back. We started with the opposite assumption: any model that doesn't track its own predictions against real hires is going to drift. Here's the loop we built, the metrics we publish, and what we do when fairness regresses.",
    category: "AI",
    resourceType: "article",
    publishedDate: "APR 2026",
    readTime: "14 MIN READ",
    authorName: "CareerXel Team",
    isFeatured: true,
    order: 1
  },
  {
    id: 992,
    title: "The 2026 Indian campus placement report — 47 colleges, 23k offers, open data",
    slug: "indian-campus-placement-report-2026",
    description: "Year-over-year placement rates, package distributions, recruiter mix. Free for download.",
    category: "Placements",
    resourceType: "dataset",
    downloadFormat: "PUBLIC",
    publishedDate: "APR 2026",
    readTime: "CSV · XLSX · PDF",
    isFeatured: true,
    order: 2
  },
  {
    id: 993,
    title: "Bulk cohort onboarding in 5 days — the placement officer's checklist",
    slug: "bulk-cohort-onboarding-checklist",
    description: "The same checklist Riverbend used to onboard 412 students in a single afternoon.",
    category: "Placements",
    resourceType: "playbook",
    downloadFormat: "PRINT",
    publishedDate: "MAR 2026",
    readTime: "PDF · 12 PAGES",
    isFeatured: true,
    order: 3
  },
  {
    id: 994,
    title: "Hiring through 2026 — what 340 employers told us",
    slug: "hiring-through-2026-employer-insights",
    description: "50-min recorded panel with talent leads from Stripe, Helix, Quanta. Slides included.",
    category: "Hiring",
    resourceType: "webinar",
    downloadFormat: "REPLAY",
    publishedDate: "MAR 2026",
    readTime: "REPLAY",
    isFeatured: true,
    order: 4
  }
];

export default function ResourcesContent({ resources }: ResourcesContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterName, setNewsletterName] = useState("");
  const [activeWebinar, setActiveWebinar] = useState<string | null>(null);
  const [activeFeatMetric, setActiveFeatMetric] =
    useState("Calibration Overview");

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

  const handleDownload = (resName: string, format: string) => {
    triggerToast(
      `Initializing download of ${resName} (${format})...`,
      "Secure Downloader"
    );

    setTimeout(() => {
      triggerToast(`✓ Completed download of ${resName}.`, "Secure Downloader");
    }, 1200);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubscribed(true);

    triggerToast(
      `Welcome to CareerXel, ${newsletterName || "Subscriber"}!`,
      "Newsletter Subscription"
    );
  };

  const activeResources = useMemo(() => {
    return resources && resources.length > 0 ? resources : defaultFallbackResources;
  }, [resources]);

  const featuredResources = useMemo(() => {
    const featured = activeResources
      .filter((resource) => resource.isFeatured)
      .sort((a, b) => a.order - b.order);
    return featured.length > 0 ? featured : defaultFallbackResources.filter(r => r.isFeatured);
  }, [activeResources]);

  const mainFeatured = useMemo(() => {
    return (
      featuredResources.find((resource) => resource.resourceType === "article") ||
      activeResources.find((resource) => resource.resourceType === "article") ||
      activeResources[0]
    );
  }, [featuredResources, activeResources]);

  const sideFeatured = useMemo(() => {
    const preferredSideCards = featuredResources.filter(
      (resource) => resource.id !== mainFeatured?.id
    );

    const fallbackSideCards = activeResources.filter(
      (resource) =>
        resource.id !== mainFeatured?.id &&
        ["dataset", "playbook", "webinar", "guide"].includes(resource.resourceType)
    );

    const combined = [...preferredSideCards];
    fallbackSideCards.forEach(item => {
      if (combined.length < 3 && !combined.some(c => c.id === item.id)) {
        combined.push(item);
      }
    });
    defaultFallbackResources.forEach(item => {
      if (combined.length < 3 && item.id !== mainFeatured?.id && !combined.some(c => c.id === item.id)) {
        combined.push(item);
      }
    });

    return combined.sort((a, b) => a.order - b.order).slice(0, 3);
  }, [featuredResources, activeResources, mainFeatured]);

  const articles = useMemo(() => {
    return activeResources
      .filter((resource) =>
        ["article", "dataset", "playbook", "webinar", "guide"].includes(
          resource.resourceType
        )
      )
      .sort((a, b) => {
        const dateA = a.publishedDate || "";
        const dateB = b.publishedDate || "";

        return new Date(dateB).getTime() - new Date(dateA).getTime();
      });
  }, [activeResources]);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") {
      return articles;
    }

    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory, articles]);

  const featMetrics: Record<string, string> = {
    FAIRNESS:
      "Assessed across gender, regional accents, and university tiers. Fairness score: 99.8%.",
    CALIBRATION:
      "Calibrated monthly against active on-the-job hire reviews. 94% predictive alignment.",
    EXPLAINABILITY:
      "Every dimension score features transcript-linked traces. Zero black-box logic.",
    OUTCOMES:
      "Tuned to optimize retention and time-to-hire. Average candidate NPS ranks at +82.",
    "Calibration Overview":
      "Hover or click any node of the CXL-V4 engine model map on the left to read live calibrated metrics.",
  };

  return (
    <main>
      <BackToTop />

      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-item">
            <span className="toast-title">{toast.sub}</span>
            <span className="toast-body">{toast.message}</span>
          </div>
        ))}
      </div>

      {activeWebinar ? (
        <div className="video-overlay" onClick={() => setActiveWebinar(null)} role="dialog" aria-modal="true" aria-label="Webinar details">
          <div className="video-box" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setActiveWebinar(null)} aria-label="Close webinar details">
              ✕ CLOSE
            </button>
            <div className="mono" style={{ fontSize: "10px", color: "var(--amber)", letterSpacing: "0.12em", marginBottom: "8px" }}>
              WEBINAR · ON-DEMAND REPLAY
            </div>
            <h3 style={{ margin: "0 0 12px", fontSize: "18px", lineHeight: "1.35", color: "var(--d-1)" }}>{activeWebinar}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              {[
                { label: "Format", val: "Live panel · On-demand access" },
                { label: "Duration", val: "~45 minutes" },
                { label: "Includes", val: "Slides, summary PDF, full transcript" },
                { label: "Access", val: "Free with CareerXel account" }
              ].map(({ label, val }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", borderBottom: "1px solid var(--border-d)", paddingBottom: "6px" }}>
                  <span style={{ color: "var(--d-3)", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
                  <span style={{ color: "var(--d-2)" }}>{val}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: "0 0 20px", color: "var(--d-2)", fontSize: "12px", lineHeight: "1.6" }}>
              Panel discussion recorded from talent summits. Slides, summaries, and transcripts are available in your dashboard after registration.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => { triggerToast(`Access granted: ${activeWebinar}`, "Webinar Replay"); setActiveWebinar(null); }}
                className="v-pill active"
                style={{ flex: 1, border: "none", cursor: "pointer", padding: "10px" }}
              >
                ACCESS REPLAY
              </button>
              <button
                onClick={() => setActiveWebinar(null)}
                className="v-pill"
                style={{ flex: 1, cursor: "pointer", padding: "10px" }}
              >
                DOWNLOAD SLIDES
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <section
        className="dark-mesh"
        id="featured"
        style={{ padding: "64px 0 48px" }}
      >
        <div className="container">
          <Breadcrumbs />

          <div className="serif-kicker">Field notes from the front lines.</div>

          <h1 className="display mt-24" style={{ maxWidth: "1100px" }}>
            <span className="bone-grad">What we&apos;ve learned</span>
            <br />
            <span className="muted-weight">building this — in writing.</span>
          </h1>

          <p className="subhead">
            Long-form essays, playbooks, public datasets, webinars. No SEO sludge,
            no &quot;10 tips for your career.&quot; Things our partners actually read.
          </p>

          <div className="rule-label" style={{ marginTop: "48px" }}>
            EDITOR&apos;S PICKS · WEEK 28
          </div>

          {mainFeatured ? (
            <div className="feat-grid">
              {/* Left Big Editor Pick */}
              <article className="feat-card">
                <div className="head-art">
                  <svg
                    viewBox="0 0 600 340"
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <g stroke="rgba(74,139,255,0.4)" strokeWidth="1" fill="none">
                      <circle cx="300" cy="170" r="140" />
                      <circle cx="300" cy="170" r="100" />
                      <circle cx="300" cy="170" r="60" />
                    </g>

                    <g fill="#4A8BFF">
                      <circle
                        cx="300"
                        cy="30"
                        r="4"
                        className="node-circle cursor-pointer"
                        onMouseEnter={() => setActiveFeatMetric("FAIRNESS")}
                      />
                      <circle
                        cx="440"
                        cy="170"
                        r="4"
                        className="node-circle cursor-pointer"
                        onMouseEnter={() => setActiveFeatMetric("CALIBRATION")}
                      />
                      <circle
                        cx="160"
                        cy="170"
                        r="4"
                        className="node-circle cursor-pointer"
                        onMouseEnter={() => setActiveFeatMetric("EXPLAINABILITY")}
                      />
                      <circle
                        cx="300"
                        cy="310"
                        r="4"
                        className="node-circle cursor-pointer"
                        onMouseEnter={() => setActiveFeatMetric("OUTCOMES")}
                      />
                      <circle cx="300" cy="170" r="6" fill="#2A5FD9" />
                    </g>

                    <g
                      fontFamily="JetBrains Mono"
                      fontSize="10"
                      letterSpacing="0.1em"
                      fill="#C2D8FF"
                    >
                      <text x="300" y="20" textAnchor="middle">
                        FAIRNESS
                      </text>
                      <text x="455" y="174" textAnchor="start">
                        CALIBRATION
                      </text>
                      <text x="145" y="174" textAnchor="end">
                        EXPLAINABILITY
                      </text>
                      <text x="300" y="328" textAnchor="middle">
                        OUTCOMES
                      </text>
                    </g>

                    <text
                      x="300"
                      y="174"
                      textAnchor="middle"
                      fontFamily="Fraunces"
                      fontSize="22"
                      fill="#C2D8FF"
                    >
                      CXL-V4
                    </text>
                  </svg>
                </div>

                <div
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    padding: "10px 14px",
                    border: "1px solid var(--border-d)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "var(--d-2)",
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: "9px",
                      color: "var(--amber)",
                      display: "block",
                      marginBottom: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    METHODOLOGY COMPLIANCE: {activeFeatMetric}
                  </span>
                  {featMetrics[activeFeatMetric]}
                </div>

                <div className="meta">
                  <span className="pill amber">
                    ▢ {mainFeatured.resourceType === "article" ? "ESSAY" : mainFeatured.resourceType.toUpperCase()}
                  </span>
                  <span className="pill">
                    {mainFeatured.resourceType === "article" ? "METHODOLOGY" : (mainFeatured.downloadFormat || mainFeatured.category).toUpperCase()}
                  </span>
                  <span className="pill">
                    {mainFeatured.readTime ? mainFeatured.readTime.toUpperCase() : ""}
                  </span>
                </div>

                <h3>{mainFeatured.title}</h3>
                <p>{mainFeatured.description}</p>

                <div className="auth">
                  <div className="av">
                    {(mainFeatured.authorName || "CX")
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>

                  <div>
                    <div className="nm">
                      {mainFeatured.authorName || "CareerXel Team"}
                      {mainFeatured.authorRole ? ` · ${mainFeatured.authorRole}` : ""}
                    </div>
                    <div className="when">
                      {mainFeatured.publishedDate} · {mainFeatured.readTime}
                    </div>
                  </div>
                </div>
              </article>

              {/* Right 3 Cards */}
              <div className="side-feat">
                {sideFeatured.map((resource) => {
                  const isWebinar = resource.resourceType === "webinar";

                  const isDownload =
                    resource.resourceType === "dataset" ||
                    resource.resourceType === "playbook" ||
                    resource.resourceType === "guide";

                  return (
                    <article
                      key={resource.documentId || resource.id}
                      className="side-card"
                      onClick={() => {
                        if (isWebinar) {
                          setActiveWebinar(resource.title);
                        } else if (isDownload) {
                          handleDownload(
                            resource.title,
                            resource.downloadFormat || resource.resourceType
                          );
                        }
                      }}
                    >
                      <div className="meta">
                        <span className="pill amber">
                          ▢ {resource.resourceType.toUpperCase()}
                        </span>

                        <span className="pill">
                          {isWebinar
                            ? "REPLAY"
                            : resource.downloadFormat || resource.category}
                        </span>
                      </div>

                      <h4>{resource.title}</h4>

                      <p>{resource.description}</p>

                      <div className="when">
                        ▢ {resource.publishedDate} · {resource.readTime}
                        {isWebinar ? " · CLICK TO VIEW REPLAY" : ""}
                        {isDownload ? " · CLICK TO EXPORT" : ""}
                      </div>
                    </article>
                  );
                })}

                {!sideFeatured.length && (
                  <div className="side-card">
                    <div className="meta">
                      <span className="pill amber">▢ EMPTY</span>
                    </div>
                    <h4>No side resources found</h4>
                    <p>
                      Add dataset, playbook, webinar, or guide resources in Strapi and set
                      them active.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p style={{ color: "var(--d-2)", marginTop: "32px" }}>
              No resources found. Please publish at least one resource in Strapi.
            </p>
          )}
        </div>
      </section>

      <section className="light section" id="blog">
        <div className="container">
          <div className="section-header">            <h2 className="h-section" style={{ marginTop: "18px" }}>
            Read the latest.
            <br />
            <span className="muted-weight">Skip the rest.</span>
          </h2>
          </div>

          <div className="cat-bar">
            {categories.map((cat) => (
              <span
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cat ${activeCategory === cat.id ? "on" : ""}`}
              >
                {cat.label}
              </span>
            ))}
          </div>

          <div className="art-grid">
            {filteredArticles.map((article) => (
              <article
                key={article.documentId || article.id}
                className="art-card"
                onClick={() =>
                  triggerToast(`Navigating to essay "${article.title}"`, "Read Essay")
                }
              >
                <div className="thumb">
                  <div className="grid" />
                  <div className="glyph">{article.glyph || "CX"}</div>
                  <span className="tag">{article.category.toUpperCase()}</span>
                </div>

                <div className="body">
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>
                  <div className="row">
                    <span>{article.publishedDate}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!filteredArticles.length && (
            <p
              style={{
                marginTop: "32px",
                color: "var(--l-2)",
                textAlign: "center",
              }}
            >
              No articles found for this category.
            </p>
          )}
        </div>
      </section>

      <section className="dark-mesh section" id="shelves">
        <div className="container">
          <div className="section-header">            <h2 className="h-section" style={{ marginTop: "18px" }}>
            Browse by shelf.
            <br />
            <span className="muted-weight">Or by what&apos;s open in your tab.</span>
          </h2>
          </div>

          <p style={{ color: "var(--d-2)" }}>
            Next step: we can also make these guide, doc, and webinar shelves
            fully dynamic from the same Resource collection.
          </p>
        </div>
      </section>
    </main>
  );
}

