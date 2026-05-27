"use client";

import Link from "next/link";
import { useState } from "react";
import type { GlobalSetting } from "@/lib/global-settings";

type NavbarProps = {
  globalSetting: GlobalSetting;
};

const solutionLinks = [
  {
    label: "For Candidates",
    href: "/candidates",
    description: "Profiles, job matching, mock interviews",
  },
  {
    label: "For Employers",
    href: "/employers",
    description: "ATS, hiring pipeline, AI screening",
  },
  {
    label: "For Colleges",
    href: "/colleges",
    description: "Placement tracking and analytics",
  },
];

const mobileLinks = [
  { label: "Features", href: "/features" },
  { label: "AI", href: "/ai" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export default function Navbar({ globalSetting }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1A1F2E]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3 text-base font-semibold tracking-tight text-[#EAF0FB]"
        >
          <span className="h-3.5 w-3.5 rounded-[3px] bg-[#4A8BFF] shadow-[0_0_0_4px_rgba(74,139,255,0.18)]" />
          {globalSetting.logoText}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          {/* Solutions Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-normal text-[#A0AAC0] transition hover:text-[#EAF0FB]"
              onClick={() => setIsSolutionsOpen((prev) => !prev)}
              aria-expanded={isSolutionsOpen}
            >
              Solutions
              <svg
                className={`h-3 w-3 transition-transform ${
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
              className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 transition-all duration-200 ${
                isSolutionsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="rounded-2xl border border-white/10 bg-[#232A3E] p-2 shadow-2xl shadow-black/30">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/10"
                  >
                    <span className="block text-sm font-medium text-[#EAF0FB]">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#A0AAC0]">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/features"
            className="text-sm font-normal text-[#A0AAC0] transition hover:text-[#EAF0FB]"
          >
            Features
          </Link>

          <Link
            href="/ai"
            className="text-sm font-normal text-[#A0AAC0] transition hover:text-[#EAF0FB]"
          >
            AI
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-normal text-[#A0AAC0] transition hover:text-[#EAF0FB]"
          >
            Pricing
          </Link>

          <Link
            href="/resources"
            className="text-sm font-normal text-[#A0AAC0] transition hover:text-[#EAF0FB]"
          >
            Resources
          </Link>

          <Link
            href="/about"
            className="text-sm font-normal text-[#A0AAC0] transition hover:text-[#EAF0FB]"
          >
            About
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={globalSetting.secondaryCtaUrl}
            className="inline-flex h-10 items-center justify-center rounded-[10px] border border-white/15 px-4 text-sm font-medium text-[#EAF0FB] transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            {globalSetting.secondaryCtaText}
          </Link>

          <Link
            href={globalSetting.primaryCtaUrl}
            className="inline-flex h-10 items-center justify-center rounded-[10px] bg-[#4A8BFF] px-4 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#6BA3FF]"
          >
            {globalSetting.primaryCtaText}
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-white/5 md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-[#EAF0FB] transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-[#EAF0FB] transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-[#EAF0FB] transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen
            ? "pointer-events-auto max-h-[640px] opacity-100 overflow-y-auto"
            : "pointer-events-none max-h-0 opacity-0"
        } overflow-hidden border-b border-white/10 bg-[#14182A]/95 backdrop-blur-2xl transition-all duration-300`}
      >
        <div className="mx-auto grid max-w-[1280px] gap-2 px-4 py-4 sm:px-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
            <p className="px-3 pb-2 pt-1 text-xs uppercase tracking-[0.16em] text-[#6B7590]">
              Solutions
            </p>

            {solutionLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-xl px-3 py-3 transition hover:bg-white/10"
              >
                <span className="block text-sm font-medium text-[#EAF0FB]">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs text-[#A0AAC0]">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>

          {mobileLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-sm font-medium text-[#EAF0FB] transition hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 grid gap-3 border-t border-white/10 pt-4">
            <Link
              href={globalSetting.secondaryCtaUrl}
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center rounded-[10px] border border-white/15 px-4 text-sm font-medium text-[#EAF0FB] transition hover:bg-white/10"
            >
              {globalSetting.secondaryCtaText}
            </Link>

            <Link
              href={globalSetting.primaryCtaUrl}
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#4A8BFF] px-4 text-sm font-medium text-white transition hover:bg-[#6BA3FF]"
            >
              {globalSetting.primaryCtaText}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}