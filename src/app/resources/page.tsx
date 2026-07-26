"use client";

const RESOURCE_CARDS = [
  {
    num: "01",
    title: "Speed-to-Lead System",
    description: "The complete breakdown of how I set up a system that responds to leads in under 60 seconds — and closes deals before competitors even see them.",
    label: "Watch This First",
    type: "video",
    href: "#",
  },
  {
    num: "02",
    title: "How to Install Claude Code",
    description: "Step-by-step guide to getting Claude Code running on your machine. No fluff, no confusion — just the exact setup that works.",
    label: "Watch This Next",
    type: "video",
    href: "#",
  },
  {
    num: "03",
    title: "How to Build Custom Dashboards Using Claude Code",
    description: "The exact process I use to build client-ready dashboards with Claude Code. From prompt to production in one session.",
    label: "Watch This Next",
    type: "video",
    href: "#",
  },
];

export default function ResourcesPage() {
  return (
    <div className="page">
      {/* Header */}
      <header>
        <a href="/" className="logo">ABDULRAHMAN SULEIMAN<span className="divider">|</span>AI</a>
        <a href="/" className="header-cta">Book A Call</a>
      </header>

      {/* Hero */}
      <div className="hero">
        <div className="glow-1"></div>
        <h1 className="fade-in">Free <span className="gr">Resources</span></h1>
        <p className="fade-in-1">Everything you need to automate your lead response, install Claude Code, and start building custom dashboards — all free.</p>
      </div>

      {/* Resource Cards */}
      <div className="grid-wrap">
        <div className="cards">
          {RESOURCE_CARDS.map((card) => (
            <a key={card.num} href={card.href} className="card fade-in-2">
              <div className="card-label">{card.label}</div>
              <div className="vsl-thumb">
                <div className="vsl-play">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div className="card-num">{card.num}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-hook">{card.description}</div>
              <span className="arrow">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-wrap">
        <div className="cta-inner">
          <div>
            <h3>Ready to stop losing leads?</h3>
            <p>Book a call and let me set up your Speed-to-Lead system today.</p>
          </div>
          <a href="/" className="cta-btn">Book A Call</a>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Abdulrahman Suleiman | AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
