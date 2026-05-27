"use client";

import React, { useMemo, useRef, useState } from "react";
import SignalBar from "@/components/sections/SignalBar";
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

  const featuredResources = useMemo(() => {
    return resources
      .filter((resource) => resource.isFeatured)
      .sort((a, b) => a.order - b.order);
  }, [resources]);

  const articles = useMemo(() => {
    return resources
      .filter((resource) =>
        ["article", "dataset", "playbook", "webinar", "guide"].includes(
          resource.resourceType
        )
      )
      .sort((a, b) => {
        const dateA = a.publishedDate || a.publishedDate || "";
        const dateB = b.publishedDate || b.publishedDate || "";

        return new Date(dateB).getTime() - new Date(dateA).getTime();
      });
  }, [resources]);

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
              ▢ WEBINAR · ON-DEMAND REPLAY
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
                ▢ ACCESS REPLAY
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

      <SignalBar />

      <section
        className="dark-mesh"
        id="featured"
        style={{ padding: "96px 0 80px" }}
      >
        <div className="container">
          <Breadcrumbs />

          <div className="sx-ribbon">
            <span className="idx">
              §00<span className="slash"> / </span>
              <span className="name">RESOURCES</span>
            </span>
            <span>FIELD NOTES · GUIDES · DATA</span>
          </div>

          <div className="serif-kicker">Field notes from the front lines.</div>
          <div className="eyebrow" style={{ marginTop: "18px" }}>
            RESOURCES
          </div>

          <h1 className="display mt-24" style={{ maxWidth: "1100px" }}>
            <span className="bone-grad">What we&apos;ve learned</span>
            <br />
            <span className="muted-weight">building this — in writing.</span>
          </h1>

          <p className="subhead">
            Long-form essays, playbooks, public datasets, webinars. No SEO
            sludge, no &quot;10 tips for your career.&quot; Things our partners
            actually read.
          </p>

          <div className="rule-label" style={{ marginTop: "64px" }}>
            EDITOR&apos;S PICKS · FEATURED
          </div>

          <div style={{ marginTop: "40px" }}>
            <Carousel
              slidesToShow={1}
              showDots={true}
              showArrows={true}
              autoPlay={false}
            >
              {featuredResources.map((resource) => {
                const isWebinar = resource.resourceType === "webinar";
                const isDownload =
                  resource.resourceType === "dataset" ||
                  resource.resourceType === "playbook" ||
                  resource.resourceType === "guide";

                return (
                  <article
                    key={resource.documentId || resource.id}
                    className={
                      resource.resourceType === "article"
                        ? "feat-card"
                        : "side-card"
                    }
                    style={{
                      height: "100%",
                      margin: "0 auto",
                      maxWidth: "900px",
                      minHeight: "440px",
                      padding:
                        resource.resourceType === "article" ? undefined : "40px",
                      display:
                        resource.resourceType === "article" ? undefined : "flex",
                      flexDirection:
                        resource.resourceType === "article"
                          ? undefined
                          : "column",
                      justifyContent:
                        resource.resourceType === "article"
                          ? undefined
                          : "center",
                    }}
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
                    {resource.resourceType === "article" && (
                      <>
                        <div className="head-art">
                          <svg
                            viewBox="0 0 600 340"
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "relative",
                            }}
                          >
                            <g
                              stroke="rgba(74,139,255,0.4)"
                              strokeWidth="1"
                              fill="none"
                            >
                              <circle cx="300" cy="170" r="140" />
                              <circle cx="300" cy="170" r="100" />
                              <circle cx="300" cy="170" r="60" />
                            </g>
                            <g fill="#4A8BFF">
                              <circle
                                cx="300"
                                cy="30"
                                r="4"
                                onMouseEnter={() => setActiveFeatMetric("FAIRNESS")}
                              />
                              <circle
                                cx="440"
                                cy="170"
                                r="4"
                                onMouseEnter={() =>
                                  setActiveFeatMetric("CALIBRATION")
                                }
                              />
                              <circle
                                cx="160"
                                cy="170"
                                r="4"
                                onMouseEnter={() =>
                                  setActiveFeatMetric("EXPLAINABILITY")
                                }
                              />
                              <circle
                                cx="300"
                                cy="310"
                                r="4"
                                onMouseEnter={() => setActiveFeatMetric("OUTCOMES")}
                              />
                              <circle cx="300" cy="170" r="6" fill="#2A5FD9" />
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
                      </>
                    )}

                    <div className="meta" style={{ marginTop: "16px" }}>
                      <span className="pill amber">
                        ▢ {resource.resourceType.toUpperCase()}
                      </span>
                      <span className="pill">{resource.category}</span>
                      <span className="pill">{resource.readTime}</span>
                    </div>

                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>

                    <div className="auth">
                      <div className="av">
                        {(resource.authorName || "CX")
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>

                      <div>
                        <div className="nm">
                          {resource.authorName || "CareerXel Team"}
                          {resource.authorRole
                            ? ` · ${resource.authorRole}`
                            : ""}
                        </div>
                        <div className="when">
                          {resource.publishedDate} · {resource.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="light section" id="blog">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>
              §01<span className="slash"> / </span>
              <span className="name">BLOG</span>
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
              FRESH · FIELD NOTES · ESSAYS
            </span>
          </div>

          <div className="section-header">
            <div className="eyebrow">BLOG</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
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
                  <span className="tag">▢ {article.category.toUpperCase()}</span>
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
          <div className="sx-ribbon">
            <span className="idx">
              §02<span className="slash"> / </span>
              <span className="name">SHELVES</span>
            </span>
            <span>GUIDES · DOCS · WEBINARS</span>
          </div>

          <div className="section-header">
            <div className="eyebrow">RESOURCE SHELVES</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
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

      <section className="dark-mesh section" id="newsletter">
        <div className="container">
          <div className="news-card">
            <div>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>
                NEWSLETTER
              </div>
              <h3>
                <span className="bone-grad">One email a month.</span>
                <br />
                <span className="muted-weight">No fluff. No promo.</span>
              </h3>
              <p
                style={{
                  color: "var(--d-2)",
                  marginTop: "18px",
                  fontSize: "14.5px",
                  lineHeight: "1.6",
                  maxWidth: "380px",
                }}
              >
                Field notes from our team, the latest essays, and the one chart
                from each placement report you&apos;ll actually want to read.
              </p>
            </div>

            {newsletterSubscribed ? (
              <div
                style={{
                  background: "rgba(0,0,0,0.25)",
                  border: "1px dashed var(--amber)",
                  borderRadius: "12px",
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    fontSize: "22px",
                    color: "var(--amber)",
                  }}
                >
                  ✓ Subscribed successfully!
                </h4>
              </div>
            ) : (
              <form className="news-form" onSubmit={handleNewsletterSubmit}>
                <div className="row2">
                  <div className="field">
                    <label>First name</label>
                    <input
                      type="text"
                      placeholder="Priya"
                      required
                      value={newsletterName}
                      onChange={(e) => setNewsletterName(e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label>Last name</label>
                    <input type="text" placeholder="Khurana" required />
                  </div>
                </div>

                <div className="field">
                  <label>Work email</label>
                  <input type="email" placeholder="priya@company.com" required />
                </div>

                <button type="submit">▢ SUBSCRIBE</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}