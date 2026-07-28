"use client";

export default function BookPage() {
  return (
    <div className="page">
      {/* Header */}
      <header>
        <a href="/" className="book-logo">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-logo-icon">
            <path d="M16 2L4 9v14l12 7 12-7V9L16 2z" stroke="#2E7BFF" strokeWidth="1.5" fill="none"/>
            <path d="M16 6l-8 4.5v9L16 24l8-4.5v-9L16 6z" fill="rgba(46,123,255,0.1)" stroke="#2E7BFF" strokeWidth="0.5"/>
            <circle cx="16" cy="14" r="3" fill="#2E7BFF"/>
            <path d="M16 17v4" stroke="#2E7BFF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
      </header>

      {/* Hero */}
      <div className="hero">
        <div className="glow-1"></div>

        {/* Eyebrow */}
        <p className="book-eyebrow fade-in-1">
          <span className="book-eyebrow-dot"></span>
          For Founders &amp; Marketing Teams Ready to Scale with AI
        </p>

        {/* Headline */}
        <h1 className="fade-in-2">
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
