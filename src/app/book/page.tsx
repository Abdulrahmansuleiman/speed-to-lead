"use client";

export default function BookPage() {
  return (
    <div className="page">
      {/* Header */}
      <header>
        <a href="/" className="logo">ABDULRAHMAN SULEIMAN<span className="divider">|</span>AI</a>
        <a href="/" className="header-cta">Home</a>
      </header>

      {/* Hero */}
      <div className="hero">
        <div className="glow-1"></div>
        <h1 className="fade-in">Cut Over <span className="gr">$5K Per Month</span> and Save <span className="gr">20+ Hours</span> Per Week</h1>
        <p className="fade-in-1">With Our Claude Code Systems</p>
      </div>

      {/* Offer Bar */}
      <div className="offer-bar fade-in-2">
        <span className="offer-tag">Live In 14 Days</span>
        <span className="offer-text">Helping Founders &amp; Marketing Teams Stop Hiring &amp; Retaining — with AI Reps That Never Quit.</span>
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
