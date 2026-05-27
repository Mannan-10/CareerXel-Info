"use client";

import { useState } from "react";
import Carousel from "@/components/ui/Carousel";
import type { Testimonial } from "@/components/sections/TestimonialSection";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <div>
      {/* Desktop/Tablet Carousel & Mobile Default Slide */}
      <div className={`testimonial-carousel-wrap ${showAllMobile ? "hidden-mobile" : ""}`}>
        <Carousel
          slidesToShow={3}
          showDots={true}
          showArrows={true}
          autoPlay={true}
        >
          {testimonials.map((t) => (
            <div
              key={t.documentId || t.id}
              className="card-l quote-card"
              style={{
                height: "100%",
                margin: "0 10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
              }}
            >
              <div>
                <div className="qmark">&ldquo;</div>

                <div
                  className="q"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "var(--l-1)",
                  }}
                >
                  {t.quote}
                </div>
              </div>

              <div
                className="meta"
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border-l)",
                }}
              >
                <div className="who">
                  <div className="name" style={{ fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div
                    className="role"
                    style={{ fontSize: "12px", color: "var(--l-2)" }}
                  >
                    {t.role}
                  </div>
                </div>

                <div
                  className="co"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--burnt)",
                  }}
                >
                  ▢ {t.company}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Expanded Vertical Stack on Mobile when toggled */}
      {showAllMobile && (
        <div className="mobile-only-stack" style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" }}>
          {testimonials.map((t) => (
            <div
              key={t.documentId || t.id}
              className="card-l quote-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid var(--border-l)",
                background: "var(--paper-2)",
              }}
            >
              <div>
                <div className="qmark" style={{ fontSize: "40px", lineHeight: "0.6", color: "var(--burnt)", height: "24px", fontFamily: "var(--font-serif)" }}>&ldquo;</div>
                <div className="q" style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--l-1)" }}>
                  {t.quote}
                </div>
              </div>
              <div className="meta" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--border-l)" }}>
                <div className="who">
                  <div className="name" style={{ fontWeight: 600, fontSize: "13px" }}>{t.name}</div>
                  <div className="role" style={{ fontSize: "11px", color: "var(--l-2)" }}>{t.role}</div>
                </div>
                <div className="co" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--burnt)" }}>▢ {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* See More Toggle Button (Only visible on mobile viewports) */}
      <div className="mobile-see-more-btn" style={{ marginTop: "24px", display: "none", justifyContent: "center" }}>
        <button
          onClick={() => setShowAllMobile(prev => !prev)}
          className="btn btn-primary"
          style={{ background: "var(--burnt)", color: "var(--bone)", border: "none", cursor: "pointer", width: "100%", justifyContent: "center" }}
        >
          {showAllMobile ? "▢ SHOW LESS TESTIMONIALS" : `▢ SEE MORE TESTIMONIALS (${testimonials.length})`}
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .mobile-see-more-btn {
            display: flex !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}