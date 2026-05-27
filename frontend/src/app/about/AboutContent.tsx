"use client";

import React, { useState } from "react";
import SignalBar from "@/components/sections/SignalBar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import "./about.css";

const stats = [
  {
    number: "47",
    label: "COLLEGES ONBOARDED",
    desc: "Across 9 states. Including 4 of India's top engineering schools.",
  },
  {
    number: "128k",
    label: "CANDIDATES SERVED",
    desc: "Resumes built, interviews run, offers landed in 2025 alone.",
  },
  {
    number: "340",
    label: "EMPLOYER PARTNERS",
    desc: "From Series-A startups to Fortune 100 GCCs.",
  },
  {
    number: "8",
    label: "LANGUAGES SUPPORTED",
    desc: "English, Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The first version",
    desc: "CareerXel started as a side project: an AI mock-interview tool for placement preparation. By month three, it had 800 weekly users and zero spend on marketing.",
    meta: "▢ FOUNDED · MAR 2024 · KOTA",
  },
  {
    year: "2024",
    title: "First college partnership",
    desc: "A regional engineering college signed up to onboard their entire 2025 batch. We built bulk CSV onboarding in 11 days.",
    meta: "▢ JUL 2024 · 412 STUDENTS · 1 CAMPUS",
  },
  {
    year: "2025",
    title: "Recruiter ATS launch",
    desc: "We launched the recruiter ATS — stages, scorecards, calendars — and added our first employer partners.",
    meta: "▢ FEB 2025 · ATS · EMPLOYER WORKSPACE",
  },
  {
    year: "2025",
    title: "Proctoring and scoring engine",
    desc: "Identity verification, face presence, and the 12-dimension scoring engine were calibrated against real placement and hiring outcomes.",
    meta: "▢ NOV 2025 · 12 DIMS · AI SCORING",
  },
  {
    year: "2026",
    title: "International launch",
    desc: "Offices in Bangalore and San Francisco. First international cohorts onboarded from Singapore and Dubai.",
    meta: "▢ APR 2026 · INTERNATIONAL COHORTS",
  },
  {
    year: "Now",
    title: "What we are building next",
    desc: "Private fine-tuned models, video-first interview replay, college dashboards, and career roadmaps tied directly into LMS workflows.",
    meta: "▢ ROADMAP · OPEN ROLES · BUILDING",
  },
];

const team = [
  {
    name: "Aarav Sundaram",
    role: "CO-FOUNDER · CEO",
    tag: "CEO",
    initials: "AS",
    bio: "Previously built ed-tech and hiring products. Started CareerXel after seeing strong candidates fail because they lacked structured interview preparation.",
  },
  {
    name: "Priya Khurana",
    role: "CO-FOUNDER · CTO",
    tag: "CTO",
    initials: "PK",
    bio: "ML and platform engineering leader focused on applied NLP, interview scoring, and explainable hiring intelligence.",
  },
  {
    name: "Rohan Kapoor",
    role: "CO-FOUNDER · COO",
    tag: "COO",
    initials: "RK",
    bio: "Worked closely with placement teams and colleges. Leads operations, onboarding, and institutional success.",
  },
  {
    name: "Maya Sundaram",
    role: "VP ENGINEERING",
    tag: "VP ENG",
    initials: "MS",
    bio: "Leads the recruiter ATS, scorecards, interview pipeline, and employer dashboard experience.",
  },
];

const contactInfo = [
  {
    title: "Sales · Enterprise",
    value: "sales@careerxel.com\n+91 80 4567 8901",
  },
  {
    title: "Support · 24/7",
    value: "help@careerxel.com\nLive chat in-app · 4h SLA",
  },
  {
    title: "Press & Partnerships",
    value: "press@careerxel.com\npartners@careerxel.com",
  },
];

const offices = [
  {
    label: "▢ HQ",
    city: "Bangalore",
    address: "Block A · Cessna Park\nOuter Ring Road · 560103\nKarnataka · India",
  },
  {
    label: "▢ AMERICAS",
    city: "San Francisco",
    address: "222 2nd St · Floor 11\nSoMa · CA 94105\nUnited States",
  },
  {
    label: "▢ DEV",
    city: "Kota",
    address: "Talwandi · IPB Plaza\nRajasthan · 324005\nIndia",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function AboutContent() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus("loading");
    setFormMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      role: String(formData.get("role") || ""),
      subject: "About page inquiry",
      message: String(formData.get("message") || ""),
      interestType: String(formData.get("interestType") || "other"),
      sourcePage: "about",
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit message.");
      }

      setFormStatus("success");
      setFormMessage("✓ Message sent successfully. We will reply soon.");
      form.reset();
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <main>
      <SignalBar />

      {/* §00 MANIFESTO HERO */}
      <section className="dark-mesh" style={{ padding: "96px 0 80px" }}>
        <div className="container">
          <Breadcrumbs />

          <div className="sx-ribbon">
            <span className="idx">
              §00<span className="slash"> / </span>
              <span className="name">ABOUT</span>
            </span>
            <span>WHO WE ARE · WHY WE BUILD</span>
          </div>

          <div className="serif-kicker">A small team, on a long road.</div>

          <div className="eyebrow" style={{ marginTop: "18px" }}>
            MANIFESTO
          </div>

          <h1 className="display mt-24" style={{ maxWidth: "1100px" }}>
            <span className="bone-grad">Hiring is broken.</span>
            <br />
            <span className="muted-weight">
              We&apos;re building the better version.
            </span>
          </h1>

          <div className="manifesto" style={{ marginTop: "64px" }}>
            <p>
              The last decade taught the industry how to{" "}
              <span className="muted-weight">post jobs at scale</span>, parse
              resumes at scale, and ghost candidates at scale.
            </p>

            <p>
              It did not teach anyone{" "}
              <span className="muted-weight">how to actually decide</span> if a
              person can do the work.
            </p>

            <p>
              We&apos;re building a platform where the candidate is heard, the
              recruiter has evidence, and the college has the numbers{" "}
              <span className="muted-weight">it can actually defend</span>.
            </p>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--amber)",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-d)",
                marginTop: "56px",
              }}
            >
              ▢ FOUNDED 2024 · KOTA · BANGALORE · SAN FRANCISCO
            </p>
          </div>

          <div className="stats-row">
            {stats.map((stat) => (
              <div className="stat-cell" key={stat.label}>
                <div className="num">
                  {stat.number}
                  <span className="acc">.</span>
                </div>
                <div className="lab">{stat.label}</div>
                <div className="desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §01 TIMELINE LIGHT */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>
              §01<span className="slash"> / </span>
              <span className="name">JOURNEY</span>
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
              2024 → 2026
            </span>
          </div>

          <div className="section-header">
            <div className="eyebrow">JOURNEY</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Every milestone,
              <br />
              <span className="muted-weight">in the order it happened.</span>
            </h2>
          </div>

          <div className="timeline" style={{ marginTop: "56px" }}>
            {timeline.map((item, index) => (
              <div className="tl-row" key={`${item.year}-${item.title}-${index}`}>
                <div className="tl-year">{item.year}</div>
                <div className="tl-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="meta">{item.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §02 TEAM DARK */}
      <section className="dark-mesh section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx">
              §02<span className="slash"> / </span>
              <span className="name">TEAM</span>
            </span>
            <span>47 PEOPLE · 9 OFFICES · 1 MISSION</span>
          </div>

          <div className="section-header">
            <div className="eyebrow">FOUNDING TEAM</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              The people
              <br />
              <span className="muted-weight">building this.</span>
            </h2>
          </div>

          <div className="team-grid">
            {team.map((person) => (
              <div className="person" key={person.name}>
                <div className="av">
                  <div className="blob" />
                  <span className="tag">{person.tag}</span>
                  <div className="ini">{person.initials}</div>
                </div>

                <div>
                  <div className="name">{person.name}</div>
                  <div className="role">{person.role}</div>
                </div>

                <div className="bio">{person.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §03 CONTACT LIGHT */}
      <section className="light section">
        <div className="container">
          <div className="sx-ribbon">
            <span className="idx" style={{ color: "var(--l-2)" }}>
              §03<span className="slash"> / </span>
              <span className="name">CONTACT</span>
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
              SAY HELLO · OR DON&apos;T
            </span>
          </div>

          <div className="section-header">
            <div className="eyebrow">CONTACT</div>
            <h2 className="h-section" style={{ marginTop: "18px" }}>
              Get in touch.
              <br />
              <span className="muted-weight">A real human will reply.</span>
            </h2>
          </div>

          <div className="contact-grid">
            <form className="form-card" onSubmit={handleSubmit}>
              {/* Honeypot field for bots */}
              <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div className="row2">
                <div className="field">
                  <label htmlFor="about-contact-firstName">First name</label>
                  <input
                    id="about-contact-firstName"
                    name="firstName"
                    type="text"
                    placeholder="Priya"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="about-contact-lastName">Last name</label>
                  <input
                    id="about-contact-lastName"
                    name="lastName"
                    type="text"
                    placeholder="Khurana"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="about-contact-email">Work email</label>
                <input
                  id="about-contact-email"
                  name="email"
                  type="email"
                  placeholder="priya@company.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="about-contact-phone">Phone number</label>
                <input
                  id="about-contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                />
              </div>

              <div className="row2">
                <div className="field">
                  <label htmlFor="about-contact-company">Company / College</label>
                  <input
                    id="about-contact-company"
                    name="company"
                    type="text"
                    placeholder="Helix"
                  />
                </div>

                <div className="field">
                  <label htmlFor="about-contact-interestType">I am a…</label>
                  <select
                    id="about-contact-interestType"
                    name="interestType"
                    defaultValue="candidate"
                  >
                    <option value="candidate">Candidate / job seeker</option>
                    <option value="employer">Recruiter / employer</option>
                    <option value="college">College placement officer</option>
                    <option value="partnership">Investor / partner</option>
                    <option value="support">Press / media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="about-contact-role">Role / Designation</label>
                <input
                  id="about-contact-role"
                  name="role"
                  type="text"
                  placeholder="Talent Lead, Placement Officer, Student..."
                />
              </div>

              <div className="field">
                <label htmlFor="about-contact-message">What can we help with?</label>
                <textarea
                  id="about-contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about what you're working on…"
                  required
                />
              </div>

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "12px",
                  color: "var(--l-2)",
                  lineHeight: 1.5,
                }}
              >
                <input name="consent" type="checkbox" />
                <span>
                  I agree that CareerXel may contact me about this inquiry.
                </span>
              </label>

              <button
                type="submit"
                className="submit"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading"
                  ? "SENDING..."
                  : formStatus === "success"
                  ? "✓ SENT · WE WILL REPLY SOON"
                  : "▢ SEND MESSAGE"}
              </button>

              {formMessage && (
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: 1.5,
                    margin: 0,
                    color:
                      formStatus === "success"
                        ? "var(--success)"
                        : "var(--error)",
                  }}
                >
                  {formMessage}
                </p>
              )}

              <p
                style={{
                  fontSize: "11px",
                  color: "var(--l-2)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                By submitting, you agree we may email you back. We don&apos;t
                share or sell your details.
              </p>
            </form>

            <div className="info-block">
              {contactInfo.map((item) => (
                <div className="info-card" key={item.title}>
                  <div className="ic">▢</div>
                  <div>
                    <div className="h">{item.title}</div>
                    <div className="v">
                      {item.value.split("\n").map((line) => (
                        <React.Fragment key={line}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="rule-label"
                style={{ color: "var(--l-2)", marginTop: "12px" }}
              >
                OFFICES · 3 LOCATIONS
              </div>

              <div className="offices-row">
                {offices.map((office) => (
                  <div className="office-card" key={office.city}>
                    <div className="l">{office.label}</div>
                    <div className="h">{office.city}</div>
                    <div className="a">
                      {office.address.split("\n").map((line) => (
                        <React.Fragment key={line}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}