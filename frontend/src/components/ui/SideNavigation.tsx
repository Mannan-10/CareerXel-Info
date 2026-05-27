"use client";

import React, { useState, useEffect } from "react";

interface Section {
  id: string;
  label: string;
}

interface SideNavigationProps {
  sections: Section[];
}

export default function SideNavigation({ sections }: SideNavigationProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in upper-middle of viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Fallback state update
      setActiveId(id);
    }
  };

  return (
    <aside
      className="cxl-side-navigation"
      style={{
        position: "fixed",
        top: "160px",
        left: "calc(50% - 640px - 220px)", // Position it to the left of the main container (max-width 1280px)
        width: "180px",
        zIndex: 40,
        display: "none", // Will be responsive via media queries in standard CSS or handled inside JS
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
          paddingLeft: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "9px",
            letterSpacing: "0.16em",
            color: "var(--amber, #FFBF00)",
            textTransform: "uppercase",
            marginBottom: "8px",
            display: "block",
            fontWeight: 600,
          }}
        >
          TOC · INDEX
        </span>
        {sections.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => handleLinkClick(e, sec.id)}
              style={{
                fontSize: "12px",
                color: isActive ? "var(--amber, #FFBF00)" : "var(--d-2, #A0AAC0)",
                textDecoration: "none",
                fontFamily: "var(--font-sans, sans-serif)",
                fontWeight: isActive ? 600 : 400,
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                transform: isActive ? "translateX(4px)" : "translateX(0)",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "var(--amber, #FFBF00)";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = "var(--d-2, #A0AAC0)";
              }}
            >
              {sec.label}
            </a>
          );
        })}
      </nav>

      {/* Inject styling block to ensure responsiveness (only visible on wide desktops) */}
      <style jsx global>{`
        @media (min-width: 1480px) {
          .cxl-side-navigation {
            display: block !important;
          }
        }
      `}</style>
    </aside>
  );
}
