"use client";

import { useState } from "react";
import type { Testimonial } from "@/components/sections/TestimonialSection";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const initialCount = 6;
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, initialCount);
  const hasMore = testimonials.length > initialCount;

  return (
    <div>
      <div className="testimonial-grid">
        {visibleTestimonials.map((t) => (
          <div
            key={t.documentId || t.id}
            className="card-l quote-card"
          >
            <div>
              <div className="qmark">&ldquo;</div>
              <div className="q">{t.quote}</div>
            </div>

            <div className="meta">
              <div className="who">
                <div className="name">{t.name}</div>
                <div className="role">{t.role}</div>
              </div>
              <div className="co">{t.company}</div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="testimonial-actions">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="btn btn-primary"
        >
          {showAll ? "SHOW LESS TESTIMONIALS" : `SEE MORE TESTIMONIALS (${testimonials.length})`}
        </button>
      </div>
      )}

      <style jsx>{`
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .quote-card {
          min-height: 260px;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .qmark {
          font-family: var(--font-serif);
          font-size: 48px;
          line-height: 0.65;
          height: 28px;
          color: var(--burnt);
        }

        .q {
          margin-top: 16px;
          font-size: 14px;
          line-height: 1.6;
          color: var(--l-1);
        }

        .meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--border-l);
        }

        .name {
          font-size: 14px;
          font-weight: 600;
          color: var(--l-1);
        }

        .role {
          margin-top: 2px;
          font-size: 12px;
          color: var(--l-2);
        }

        .co {
          flex: 0 0 auto;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--burnt);
          text-align: right;
        }

        .testimonial-actions {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .testimonial-actions .btn {
          background: var(--burnt);
          color: var(--bone);
          border: none;
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .quote-card {
            min-height: 0;
            padding: 24px;
          }

          .meta {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .co {
            text-align: left;
          }

          .testimonial-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
