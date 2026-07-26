"use client";

const SECTIONS = [
  {
    label: "Start Here",
    cards: [
      {
        num: "01",
        title: "Speed-to-Lead System",
        hook: "The exact system that responds to leads in under 60 seconds and closes deals before competitors even see them.",
        href: "#",
      },
    ],
  },
  {
    label: "Bonus",
    cards: [
      {
        num: "02",
        title: "How to Install Claude Code",
        hook: "5 minutes to install. The foundation for building everything else.",
        href: "#",
      },
      {
        num: "03",
        title: "How to Build Custom Dashboards Using Claude Code",
        hook: "One screen shows your entire business. Revenue, leads, pipeline — built with Claude Code.",
        href: "#",
      },
    ],
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
        <h1 className="fade-in">The <span className="gr">Speed-to-Lead</span> System</h1>
        <p className="fade-in-1">You&apos;re in. Here&apos;s the system that replies to leads in under 60 seconds — plus some bonuses to help you build even more with Claude Code.</p>
      </div>

      {/* Sections */}
      {SECTIONS.map((section) => (
        <div key={section.label}>
          <div className="section-header fade-in-2"><span className="section-label">{section.label}</span></div>
          <div className="grid-wrap">
            <div className="cards">
              {section.cards.map((card) => (
                <a key={card.num} href={card.href} className="card fade-in-2">
                  <div className="card-num">{card.num}</div>
                  <div className="card-title">{card.title}</div>
                  <div className="card-hook">{card.hook}</div>
                  <span className="arrow">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}

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
