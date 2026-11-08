import React from 'react';
import ScatteredDecor from './ScatteredDecor';

const fourPillars = [
  {
    title: 'INTEGRATED SERVICES',
    tag: 'SINGLE-POINT CONTRACT',
    desc: 'End-to-end HVAC, electrical, plumbing and turnkey interior execution managed under one unified responsibility.',
    img: '/images/why-choose-us/why-integrated-hvac.jpg',
    colorTheme: 'blue',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.5 12c0-.83.67-1.5 1.5-1.5a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2h-4.5a1 1 0 0 0-1 1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2v4.5a1 1 0 0 0 1 1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5a1 1 0 0 0-1 1V19a2 2 0 0 0 2 2h4.5a1 1 0 0 0 1-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5a1 1 0 0 0 1 1H19a2 2 0 0 0 2-2v-4.5a1 1 0 0 0-1-1c-.83 0-1.5-.67-1.5-1.5z" />
      </svg>
    ),
  },
  {
    title: 'COORDINATED EXECUTION',
    tag: 'CLASH-FREE 3D BIM',
    desc: 'Seamless inter-trade MEP engineering and on-site alignment preventing spatial clashes, schedule delays, and cost overruns.',
    img: '/images/why-choose-us/why-coordinated-execution.jpg',
    colorTheme: 'orange',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'RESPONSIVE COMMUNICATION',
    tag: 'DEDICATED SPOC',
    desc: 'Direct point-of-contact access, live milestone reporting, transparent progress dashboards, and prompt query resolution.',
    img: '/images/why-choose-us/why-responsive-support.jpg',
    colorTheme: 'blue',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'PROJECT SUPPORT',
    tag: 'LIFECYCLE WARRANTY & AMC',
    desc: 'Comprehensive post-handover testing audits, warranty assurance, and 24/7 dedicated AMC emergency breakdown coverage.',
    img: '/images/why-choose-us/why-project-support-lobby.jpg',
    colorTheme: 'orange',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const bottomBadges = [
  {
    title: 'COMMERCIAL SPACES',
    desc: 'Offices, Retail, Malls, Banks',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="2" />
        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M8 18h.01M16 18h.01" />
      </svg>
    ),
  },
  {
    title: 'TECHNICAL EXPERTISE',
    desc: 'ASHRAE, NBC & IS Standards',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'SKILLED TEAM',
    desc: 'Certified Site Technicians',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'QUALITY ASSURANCE',
    desc: 'Torque & Airflow Balanced',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'SUSTAINABLE SOLUTIONS',
    desc: 'Energy Star Inverter Plants',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
];

export default function WhyChooseUs({ onOpenModal }) {
  return (
    <section className="cad-why-section" id="why-choose-us">
      <ScatteredDecor section="why-choose-us" />

      <div className="cad-editorial-container">
        {/* Section Header */}
        <div className="cad-spec-header">
          <span className="cad-spec-dot"></span>
          <span className="cad-spec-code">BENCHMARK // AMB-WHY-04</span>
          <span className="cad-spec-divider">|</span>
          <span className="cad-spec-title">INSTITUTIONAL ADVANTAGE &amp; CLIENT VALUE</span>
        </div>

        {/* ============================================================
            1. TOP EDITORIAL INTRO & ON-SITE INSPECTION VIEWPORT
            ============================================================ */}
        <div className="cad-why-top">
          <div className="cad-why-headline-col">
            <h2 className="cad-why-title">
              WHY CHOOSE<br />
              <span className="cad-headline-accent">AMBIENT ENGINEERS</span>
            </h2>
            <p className="cad-why-lead">
              We go beyond just delivering services — we build long-term relationships by offering end-to-end solutions, clear communication and dependable support throughout your project journey.
            </p>
            <div className="cad-why-actions">
              <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                <span>DISCUSS YOUR REQUIREMENT</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          <div className="cad-why-visual-col">
            <div className="cad-viewport-frame">
              <span className="cad-bracket cad-bracket-tl">┌</span>
              <span className="cad-bracket cad-bracket-tr">┐</span>
              <span className="cad-bracket cad-bracket-bl">└</span>
              <span className="cad-bracket cad-bracket-br">┘</span>

              <img
                src="/images/why-choose-us/why-engineers-inspecting.jpg"
                alt="Engineers inspecting site HVAC ducting installation with blueprints"
                className="cad-viewport-photo"
                loading="lazy"
              />

              <div className="cad-viewport-telemetry">
                <div className="cad-telemetry-badge">
                  <span className="cad-telemetry-pulse"></span>
                  <span>ON-SITE SUPERVISION</span>
                </div>
                <div className="cad-telemetry-meta">QA/QC ZERO TOLERANCE PROTOCOL</div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            2. THE 4 CORE DIFFERENTIATOR PILLARS
            ============================================================ */}
        <div className="cad-why-pillars-grid">
          {fourPillars.map((p, idx) => (
            <div key={idx} className={`cad-why-card cad-why-card-${p.colorTheme}`}>
              <div className="cad-why-card-top">
                <div className={`cad-why-icon-badge cad-badge-${p.colorTheme}`}>
                  {p.icon}
                </div>
                <span className="cad-why-card-tag">{p.tag}</span>
              </div>

              <div className="cad-why-card-img-stage">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>

              <div className="cad-why-card-body">
                <h3 className="cad-why-card-title">{p.title}</h3>
                <p className="cad-why-card-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================
            3. ARCHITECTURAL COMMITMENT BANNER
            ============================================================ */}
        <div className="cad-commitment-banner">
          <div className="cad-banner-left">
            <div className="cad-banner-handshake">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m11 17 2 2a1 1 0 0 0 1.42 0l4.58-4.58a1 1 0 0 0 0-1.42l-2.58-2.58a1 1 0 0 0-1.42 0L13 12.41" />
                <path d="m13 7.59 2.58-2.59a1 1 0 0 1 1.42 0l4.58 4.59a1 1 0 0 1 0 1.41L19 13.59" />
                <path d="m9 9.59 2.41-2.42a1 1 0 0 1 1.42 0l1.17 1.17" />
                <path d="M2.5 13.5 8 19l4-4" />
                <path d="m6 10-3.5 3.5a1.5 1.5 0 0 0 0 2.12l2.38 2.38a1.5 1.5 0 0 0 2.12 0L10.5 14.5" />
              </svg>
            </div>
            <div className="cad-banner-titleblock">
              <span className="cad-banner-motto">OUR CORE VALUES</span>
              <h3 className="cad-banner-heading">YOUR VISION. OUR COMMITMENT.</h3>
            </div>
          </div>

          <div className="cad-banner-right">
            <p className="cad-banner-desc">
              With the right mix of experience, technology and people, Ambient Engineers is your trusted partner for efficient, sustainable and future-ready spaces.
            </p>
          </div>
        </div>

        {/* ============================================================
            4. BOTTOM 5 PILLARS OF RELIABILITY
            ============================================================ */}
        <div className="cad-bottom-badges-grid">
          {bottomBadges.map((badge, idx) => (
            <div key={idx} className="cad-badge-cell">
              <div className="cad-badge-icon-wrap">
                {badge.icon}
              </div>
              <div className="cad-badge-text-wrap">
                <h4 className="cad-badge-name">{badge.title}</h4>
                <p className="cad-badge-sub">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

