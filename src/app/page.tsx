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
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* ── 0. Page Container ── */}
      <div className="w-full max-w-[1000px] mx-auto px-6 flex flex-col flex-1">

        {/* ── 1. Top Nav Row ── */}
        <nav className="w-full pt-8 flex items-center justify-between">
          <div className="text-[16px] font-medium text-white">
            Abdulrahman Suleiman | AI
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#B0B0B0] hover:text-[#2E7BFF] transition-colors" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-[#B0B0B0] hover:text-[#2E7BFF] transition-colors" aria-label="X">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-[#B0B0B0] hover:text-[#2E7BFF] transition-colors" aria-label="YouTube">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="text-[#B0B0B0] hover:text-[#2E7BFF] transition-colors" aria-label="Instagram">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </nav>

        {/* ── Main Content ── */}
        <main className="flex-1 flex flex-col items-center pt-10">
          {status === "success" ? (
            /* ── Success State ── */
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-[#2E7BFF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">You&apos;re In!</h2>
              <p className="text-gray-400">Check your email for next steps. Welcome aboard.</p>
            </div>
          ) : (
            <>
              {/* ── 2. Badge ── */}
              <div className="flex justify-center mt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#141414]">
                  <span className="w-2 h-2 rounded-full bg-[#2E7BFF] shrink-0"></span>
                  <span className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                    Free Resource — Speed-to-Lead System
                  </span>
                </div>
              </div>

              {/* ── 3. Headline ── */}
              <div className="text-center mt-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
                  <span className="text-white block">Stop Losing Leads.</span>
                  <span className="text-[#2E7BFF] block mt-1" style={{ textShadow: "0 0 20px rgba(46,123,255,0.6)" }}>Start Closing Them.</span>
                </h1>
              </div>

              {/* ── 4. Explainer ── */}
              <div className="text-center mt-10 max-w-[720px] w-full">
                <p className="text-[15px] leading-relaxed mx-auto" style={{ color: "#A0A0A0" }}>
                  <span className="font-semibold text-white">What&apos;s Speed-to-Lead?</span>{" "}
                  The first business to respond to a lead wins the sale most of the time. This system replies in under 60 seconds, every time, so you stop losing deals to slower competitors.
                </p>
              </div>

              {/* ── 5. Checklist ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mt-8 w-full max-w-[720px]">
                {CHECKLIST_ITEMS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2E7BFF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* ── 6. Form Card ── */}
              <div className="w-full max-w-[480px] mx-auto mt-10 rounded-xl border border-[#2A2A2A] bg-[#141414] p-8">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name" className="block text-[12px] font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full h-[48px] px-4 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#2E7BFF] focus:ring-1 focus:ring-[#2E7BFF]/40 transition-all"
                  />

                  <label htmlFor="email" className="block text-[12px] font-medium text-gray-500 uppercase tracking-wide mb-2 mt-5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full h-[48px] px-4 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#2E7BFF] focus:ring-1 focus:ring-[#2E7BFF]/40 transition-all"
                  />

                  {errorMsg && (
                    <p className="text-red-400 text-sm font-medium mt-3">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-[48px] mt-6 rounded-lg bg-[#2E7BFF] hover:bg-[#1a5fcc] active:scale-[0.98] text-white font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(46,123,255,0.4)] hover:shadow-[0_0_30px_rgba(46,123,255,0.5)]"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Get Instant Access"
                    )}
                  </button>
                </form>

                <div className="flex items-start gap-2 mt-4">
                  <input
                    type="checkbox"
                    id="agree"
                    defaultChecked
                    className="mt-0.5 h-3.5 w-3.5 rounded border-gray-600 bg-[#1A1A1A] text-[#2E7BFF] focus:ring-[#2E7BFF]/40 focus:ring-offset-0 cursor-pointer shrink-0"
                  />
                  <label htmlFor="agree" className="text-[13px] text-gray-500 leading-relaxed cursor-pointer">
                    I agree to receive updates about Speed-to-Lead tips and AI automation. Unsubscribe anytime.{" "}
                    <a href="#" className="underline text-gray-400 hover:text-[#2E7BFF] transition-colors">Privacy policy</a>.
                  </label>
                </div>
              </div>

              {/* ── 7. Social Proof Row ── */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2E7BFF] to-[#1a5fcc] border-2 border-[#0A0A0A] flex items-center justify-center text-[11px] text-white font-bold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-300">247+ people</span> already got access
                </p>
              </div>

              {/* ── 8. Stats Bar ── */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-[600px] mt-10 pt-10 pb-10 border-t border-[#1A1A1A]">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center">
                    <div className="text-[28px] font-extrabold text-[#2E7BFF] leading-none mb-2">{stat.value}</div>
                    <div className="text-[12px] font-semibold tracking-wider text-gray-600 uppercase text-center">{stat.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>

        {/* ── 9. Footer ── */}
        <footer className="w-full pt-6 pb-8 border-t border-[#1A1A1A] text-center">
          <p className="text-[12px] text-gray-600">
            &copy; 2026 Abdulrahman Suleiman | AI. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
