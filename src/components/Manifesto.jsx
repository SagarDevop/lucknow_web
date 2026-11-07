import React from 'react';

export default function Manifesto({ onOpenModal }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-manifesto-section bg-white" id="overview">
      <div className="container text-center manifesto-container">
        <h1 className="hero-manifesto-title" style={{ textTransform: 'uppercase' }}>
          ENGINEERING COMFORT<br />FOR A BETTER TOMORROW
        </h1>
        <p style={{ color: 'var(--accent-orange)', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '18px', fontSize: '1.05rem' }}>
          DESIGN &bull; EXECUTE &bull; MAINTAIN
        </p>
        <p className="hero-manifesto-desc">
          Precision HVAC, MEP &amp; Turnkey Interior Solutions delivering integrated engineering design, robust installations, and luxury commercial fit-outs across India.
        </p>

        <div className="hero-actions">
          <a href="#projects" onClick={scrollToProjects} className="btn btn-accent">
            <span>Explore Projects</span>
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <button className="btn btn-outline-dark open-consultation-modal" onClick={onOpenModal}>
            <span>Request Consultation</span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="hero-quick-highlights" style={{ justifyContent: 'center' }}>
          <div className="hero-hl-item">
            <strong>150+</strong>
            <span>Projects Delivered</span>
          </div>
          <div className="hero-hl-divider"></div>
          <div className="hero-hl-item">
            <strong>100%</strong>
            <span>Compliance &amp; Safety</span>
          </div>
          <div className="hero-hl-divider"></div>
          <div className="hero-hl-item">
            <strong>Indira Nagar, Lucknow</strong>
            <span>Headquarters &bull; UP - 226016</span>
          </div>
        </div>
      </div>
    </section>
  );
}
