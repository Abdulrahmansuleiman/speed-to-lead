"use client";

export default function BookPage() {
  return (
    <div className="page">
      {/* Header */}
      <header>
        <a href="/" className="book-logo">
          <img src="/logo.png" alt="LaunchOps" className="book-logo-img" />
        </a>
      </header>

      {/* Hero */}
      <div className="book-hero">
        <div className="glow-1"></div>

        {/* Eyebrow */}
        <p className="book-eyebrow fade-in">
          <span className="book-eyebrow-dot"></span>
          For Founders &amp; Marketing Teams Ready to Scale with AI
        </p>

        {/* Headline */}
        <h1 className="fade-in-1">
          Save <span className="gr">$5K to $10K Per Month</span> on New Hires and <span className="gr">20+ Hours Per Week</span> with AI Reps
        </h1>

        {/* Subheadline */}
        <p className="fade-in-2" style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", fontWeight: 400, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, maxWidth: "40rem", margin: "24px auto 0" }}>
          We implement our AI Operating System in your business in 14 days.
        </p>
      </div>

      {/* Calendly Embed */}
      <div className="calendly-wrap fade-in-3">
        <iframe
          src="https://calendly.com/launchops-automation/30min?month=2026-07"
          width="100%"
          height="800"
          frameBorder="0"
          title="Book a Call"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen
        />
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Abdulrahman Suleiman | AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
