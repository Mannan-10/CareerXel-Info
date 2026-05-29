"use client";

import React, { useState } from "react";
import "../about/about.css";

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
    label: "HQ",
    city: "Bangalore",
    address: "Block A · Cessna Park\nOuter Ring Road · 560103\nKarnataka · India",
  },
  {
    label: "AMERICAS",
    city: "San Francisco",
    address: "222 2nd St · Floor 11\nSoMa · CA 94105\nUnited States",
  },
  {
    label: "DEV",
    city: "Kota",
    address: "Talwandi · IPB Plaza\nRajasthan · 324005\nIndia",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactContent() {
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
      subject: "Contact page inquiry",
      message: String(formData.get("message") || ""),
      interestType: String(formData.get("interestType") || "other"),
      sourcePage: "contact",
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
      setFormMessage("Message sent successfully. We will reply soon.");
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
      <section className="dark-mesh" style={{ padding: "64px 0 48px" }}>
        <div className="container">
          <div className="serif-kicker">Talk to a real human.</div>
          <h1 className="display mt-24" style={{ maxWidth: "980px" }}>
            <span className="bone-grad">Get in touch.</span>
            <br />
            <span className="muted-weight">We will route you to the right team.</span>
          </h1>
          <p className="subhead" style={{ maxWidth: "680px" }}>
            Sales, support, partnerships, press, and institutional onboarding all
            start here.
          </p>
        </div>
      </section>

      <section className="light section">
        <div className="container">
          <div className="contact-grid">
            <form className="form-card" onSubmit={handleSubmit}>
              <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div className="row2">
                <div className="field">
                  <label htmlFor="contact-firstName">First name</label>
                  <input
                    id="contact-firstName"
                    name="firstName"
                    type="text"
                    placeholder="Priya"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-lastName">Last name</label>
                  <input
                    id="contact-lastName"
                    name="lastName"
                    type="text"
                    placeholder="Khurana"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-email">Work email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="priya@company.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="contact-phone">Phone number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                />
              </div>

              <div className="row2">
                <div className="field">
                  <label htmlFor="contact-company">Company / College</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Your organization"
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-interestType">I am a...</label>
                  <select
                    id="contact-interestType"
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
                <label htmlFor="contact-role">Role / Designation</label>
                <input
                  id="contact-role"
                  name="role"
                  type="text"
                  placeholder="Talent Lead, Placement Officer, Student..."
                />
              </div>

              <div className="field">
                <label htmlFor="contact-message">What can we help with?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about what you're working on..."
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
                  ? "SENT · WE WILL REPLY SOON"
                  : "SEND MESSAGE"}
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
                  <div className="ic">CX</div>
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
