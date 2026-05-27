"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (!pathname || pathname === "/") return null;

  // Split and filter path
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav 
      aria-label="breadcrumb" 
      className="breadcrumbs-nav"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--d-3, #6B7590)",
        marginBottom: "24px",
      }}
    >
      <Link 
        href="/"
        style={{
          color: "inherit",
          textDecoration: "none",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--amber, #FFBF00)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
      >
        HOME
      </Link>

      {pathParts.map((part, idx) => {
        const href = "/" + pathParts.slice(0, idx + 1).join("/");
        const isLast = idx === pathParts.length - 1;
        // Clean display label
        const displayLabel = part.replace(/-/g, " ");

        return (
          <React.Fragment key={href}>
            <span style={{ color: "rgba(255,255,255,0.15)", userSelect: "none" }}>/</span>
            {isLast ? (
              <span style={{ color: "var(--amber, #FFBF00)", fontWeight: 500 }}>
                {displayLabel}
              </span>
            ) : (
              <Link
                href={href}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--amber, #FFBF00)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                {displayLabel}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
