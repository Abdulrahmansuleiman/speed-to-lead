"use client";

import { useState, FormEvent } from "react";

const CHECKLIST_ITEMS = [
  "Instant lead response (under 60 seconds)",
  "24/7 AI follow-up",
  "CRM auto-sync",
  "No missed leads, ever",
  "Works with any lead source",
  "Set up once, runs forever",
];

const STATS = [
  { value: "247+", label: "LEADS RESPONDED TO" },
  { value: "<60s", label: "AVERAGE RESPONSE TIME" },
  { value: "100%", label: "FREE" },
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setTimeout(() => {
        window.location.href = "/resources";
      }, 1500);
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="page-wrapper">
      {/* ── Header: full width, logo left, icons right ── */}
      <header>
        <span className="logo">ABDULRAHMAN SULEIMAN<span className="divider">|</span>AI</span>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/raymon-automate/" className="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.instagram.com/raymon.scales/" className="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </header>

      {/* ── Main: centers the content column vertically + horizontally ── */}
      <main>
        {status === "success" ? (
          <div className="content">
            <div className="success-state">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: 8 }}>You&apos;re In!</h2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}>Check your email for next steps. Welcome aboard.</p>
            </div>
          </div>
        ) : (
          <div className="content">
            {/* Badge */}
            <div className="fade-in">
              <span className="badge">
                <span className="badge-dot"></span>
                Free Resource — Speed-to-Lead System
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-in-1">
              Stop Losing Leads.<br />
              <span className="gradient">Start Closing Them.</span>
            </h1>

            {/* Explainer */}
            <p className="subtitle fade-in-2">
              <strong style={{ color: "#fff", fontWeight: 700 }}>What&apos;s Speed-to-Lead?</strong>{" "}
              The first business to respond to a lead wins the sale most of the time. This system replies in under 60 seconds, every time, so you stop losing deals to slower competitors.
            </p>

            {/* Checklist */}
            <div className="checklist fade-in-2">
              {CHECKLIST_ITEMS.map((item) => (
                <div key={item} className="checklist-item">
                  <svg fill="none" viewBox="0 0 24 24" stroke="#2E7BFF" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {item}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="form-wrapper fade-in-3">
              <form onSubmit={handleSubmit}>
                <div className="form-fields">
                  <input type="text" placeholder="Your name" className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
                  <input type="email" placeholder="Email address" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="submit-btn" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting..." : "Get Instant Access"}
                </button>
                {errorMsg && <p className="form-message visible error">{errorMsg}</p>}
                <label className="consent">
                  <input type="checkbox" defaultChecked />
                  <span>I agree to receive updates about Speed-to-Lead tips and AI automation. Unsubscribe anytime. <a href="#">Privacy policy</a>.</span>
                </label>
              </form>
            </div>

            {/* Stats */}
            <div className="stats fade-in-3">
              {STATS.map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
