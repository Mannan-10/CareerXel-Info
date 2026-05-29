"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { GlobalSetting } from "@/lib/global-settings";

type NavbarProps = {
  globalSetting: GlobalSetting;
};

const solutionLinks = [
  {
    label: "For Candidates",
    href: "/candidates",
    description: "Profiles, job matching, mock interviews",
    icon: (
      <svg
        viewBox="0 0 20 20"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="10" cy="7" r="3" />
        <path d="M3 17c1.5-3 4-4 7-4s5.5 1 7 4" />
      </svg>
    ),
  },
  {
    label: "For Employers",
    href: "/employers",
    description: "ATS, hiring pipeline, AI screening",
    icon: (
      <svg
        viewBox="0 0 20 20"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="6" width="14" height="11" rx="1.5" />
        <path d="M7 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
      </svg>
    ),
  },
  {
    label: "For Colleges",
    href: "/colleges",
    description: "Placement tracking and analytics",
    icon: (
      <svg
        viewBox="0 0 20 20"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 2L2 7l8 5 8-5-8-5z" />
        <path d="M2 7v6c0 2 3 4 8 4s8-2 8-4V7" />
      </svg>
    ),
  },
];

const desktopLinks = [
  { label: "Features", href: "/features" },
  { label: "AI", href: "/ai" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [
  { label: "Features", href: "/features" },
  { label: "AI & Intelligence", href: "/ai" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ globalSetting }: NavbarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  const closeMenu = () => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflowX = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflowX = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navLinkClass = (href: string) =>
    `nav-link-ul text-sm font-medium transition-colors duration-200 active:scale-[0.97] ${
      isActive(href) ? "nav-active" : ""
    }`;

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1A1F2E]/85 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2.5 rounded-[10px] text-[#EAF0FB] transition hover:text-white active:scale-[0.98]"
        >
          <span className="h-3.5 w-3.5 rounded-[3px] bg-[#4A8BFF] shadow-[0_0_0_3px_rgba(74,139,255,0.18)]" />

          <span className="flex min-w-0 flex-col leading-none">
            <span className="text-[20px] font-bold tracking-tight sm:text-[23px]">
              {globalSetting.logoText}
            </span>
            <span className="mt-1 whitespace-nowrap text-[11px] font-medium leading-none tracking-wide text-[#A0AAC0] sm:text-[12.5px]">
              Accelerating Careers, Empowering Futures
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-4 md:flex lg:gap-6">
          {/* Solutions Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button
              type="button"
              className={`nav-solutions-btn flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 active:scale-[0.97] ${
                solutionLinks.some((item) => isActive(item.href)) ||
                isSolutionsOpen
                  ? "nav-sol-active"
                  : ""
              }`}
              onClick={() => setIsSolutionsOpen((prev) => !prev)}
              aria-expanded={isSolutionsOpen}
              aria-haspopup="true"
            >
              Solutions

              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 4.5l3 3 3-3" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-200 ${
                isSolutionsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="rounded-2xl border border-white/10 bg-[#1E2438] p-1.5 shadow-2xl shadow-black/40 ring-1 ring-black/20">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`group/item flex items-start gap-3 rounded-xl px-3.5 py-3 transition-all duration-150 hover:bg-white/5 ${
                      isActive(item.href) ? "bg-[rgba(74,139,255,0.08)]" : ""
                    }`}
                  >
                    <span
                      className={`mt-0.5 shrink-0 transition-colors ${
                        isActive(item.href)
                          ? "text-[#4A8BFF]"
                          : "text-[#6B7590] group-hover/item:text-[#4A8BFF]"
                      }`}
                    >
                      {item.icon}
                    </span>

                    <span>
                      <span
                        className={`block text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-[#4A8BFF]"
                            : "text-[#EAF0FB] group-hover/item:text-white"
                        }`}
                      >
                        {item.label}
                      </span>

                      <span className="mt-0.5 block text-xs leading-5 text-[#6B7590]">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex lg:gap-4">
          <Link
            href={globalSetting.secondaryCtaUrl}
            className="inline-flex h-9 items-center justify-center rounded-lg border border-white/12 px-4 text-sm font-medium text-[#EAF0FB] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 active:translate-y-0 active:scale-95"
          >
            {globalSetting.secondaryCtaText}
          </Link>

          <Link
            href={globalSetting.primaryCtaUrl}
            className="inline-flex h-9 items-center justify-center rounded-lg bg-[#4A8BFF] px-4 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(74,139,255,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5E9AFF] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_rgba(74,139,255,0.35)] active:translate-y-0 active:scale-95"
          >
            {globalSetting.primaryCtaText}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-white/5 transition-colors hover:bg-white/10 md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-[#EAF0FB] transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-[#EAF0FB] transition-all duration-300 ${
              isOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-[#EAF0FB] transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer is rendered only when open */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Drawer panel */}
          <div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed right-0 top-0 z-50 flex h-screen w-[70vw] max-w-sm flex-col overflow-hidden border-l border-white/10 bg-[#14182A] shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-2.5 text-[#EAF0FB]"
              >
                <span className="h-3.5 w-3.5 rounded-[3px] bg-[#4A8BFF] shadow-[0_0_0_3px_rgba(74,139,255,0.2)]" />
                <span className="text-base font-semibold tracking-tight">
                  {globalSetting.logoText}
                </span>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#A0AAC0] transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 3l10 10M13 3L3 13" />
                </svg>
              </button>
            </div>

            {/* Scrollable nav area */}
            <div className="flex-1 overflow-y-auto px-3 py-3">
              {/* Solutions group */}
              <p className="px-3 pb-1.5 pt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#4B5270]">
                Solutions
              </p>

              <div className="mb-2 overflow-hidden rounded-xl border border-white/10 bg-white/2">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 border-b border-white/10 px-4 py-3 transition-colors last:border-b-0 ${
                      isActive(item.href)
                        ? "bg-[rgba(74,139,255,0.1)] text-[#4A8BFF]"
                        : "text-[#C0CADF] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span
                      className={`shrink-0 ${
                        isActive(item.href)
                          ? "text-[#4A8BFF]"
                          : "text-[#4B5270]"
                      }`}
                    >
                      {item.icon}
                    </span>

                    <span>
                      <span className="block text-sm font-medium">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[11px] text-[#6B7590]">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>

              {/* Main links */}
              <p className="px-3 pb-1.5 pt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#4B5270]">
                Platform
              </p>

              <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm font-medium transition-colors last:border-b-0 ${
                      isActive(link.href)
                        ? "bg-[rgba(74,139,255,0.1)] text-[#4A8BFF]"
                        : "text-[#C0CADF] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}

                    {isActive(link.href) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4A8BFF]" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA footer */}
            <div className="flex flex-col gap-2.5 border-t border-white/10 px-4 py-4">
              <Link
                href={globalSetting.secondaryCtaUrl}
                onClick={closeMenu}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 px-4 text-sm font-medium text-[#EAF0FB] transition hover:bg-white/10 active:scale-[0.98]"
              >
                {globalSetting.secondaryCtaText}
              </Link>

              <Link
                href={globalSetting.primaryCtaUrl}
                onClick={closeMenu}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#4A8BFF] px-4 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:bg-[#5E9AFF] active:scale-[0.98]"
              >
                {globalSetting.primaryCtaText}
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
    <div className="h-16" aria-hidden="true" />
    </>
  );
}
