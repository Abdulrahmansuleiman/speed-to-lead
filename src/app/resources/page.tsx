"use client";

const VSL_CARDS = [
  {
    num: "01",
    title: "How I Turn Cold Traffic Into Booked Calls in 60 Seconds",
    hook: "The exact Speed-to-Lead system that replies faster than any competitor and closes the deal before they even respond.",
    badge: "Start Here",
    href: "#",
  },
  {
    num: "02",
    title: "The AI Follow-Up That Works 24/7 While You Sleep",
    hook: "Stop losing leads at 2am. This system follows up instantly, qualifies automatically, and books the call for you.",
    badge: "Popular",
    href: "#",
  },
  {
    num: "03",
    title: "Why the First Business to Respond Wins Every Time",
    hook: "The data behind lead response time and how to make sure you're always first — even if you're a one-person team.",
    badge: "",
    href: "#",
  },
  {
    num: "04",
    title: "From Missed Leads to Missed Revenue — Fix It Today",
    hook: "How much money are you leaving on the table? This breakdown shows the real cost of slow follow-up.",
    badge: "",
    href: "#",
  },
  {
    num: "05",
    title: "Set Up Your Speed-to-Lead System in One Afternoon",
    hook: "Step-by-step walkthrough. No coding, no complex tools. Just plug in and start responding in under 60 seconds.",
    badge: "New",
    href: "#",
  },
  {
    num: "06",
    title: "How I Manage 50+ Leads a Day Without Hiring Anyone",
    hook: "One person, one system, zero missed leads. The exact workflow that scales without the overhead.",
    badge: "",
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
        <h1 className="fade-in">The <span className="gr">Speed-to-Lead</span> System</h1>
        <p className="fade-in-1">The exact videos, scripts, and automations behind my Speed-to-Lead system. Watch each one, follow along, and start closing leads before your competitors even see them.</p>
      </div>

      {/* VSL Section */}
      <div className="section-header fade-in-2"><span className="section-label">VSL Training Videos</span></div>
      <div className="grid-wrap">
        <div className="cards">
          {VSL_CARDS.map((card) => (
            <a key={card.num} href={card.href} className="card fade-in-2">
              {/* VSL Thumbnail Placeholder */}
              <div className="vsl-thumb">
                <div className="vsl-play">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div className="vsl-duration">3:42</div>
              </div>
              <div className="card-num">{card.num}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-hook">{card.hook}</div>
              {card.badge && <span className="new-badge">{card.badge}</span>}
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
            <p>Watch the full Speed-to-Lead training and set up your system today.</p>
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
