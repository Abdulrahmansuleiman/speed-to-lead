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
      <div className="hero book-hero">
        <div className="glow-1"></div>

        {/* Eyebrow */}
        <p className="book-eyebrow fade-in">
          <span className="book-eyebrow-dot"></span>
          For Founders &amp; Marketing Teams Ready to Scale with AI
        </p>

        {/* Headline */}
        <h1 className="fade-in-1">
          Save <span className="gr">$5K to $10K Per Month</span> on New Hires and <span className="gr">20+ Hours Per Week</span> with AI Reps That Never Quit
        </h1>

        <p className="fade-in-2" style={{ color: "rgba(255,255,255,0.35)", fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
          Live in 14 days. We build the system, you keep the savings.
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
