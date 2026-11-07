import React, { useState, useEffect, useRef } from 'react';

const missionPillars = [
  {
    title: 'Technical Competence',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Efficient Coordination',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Quality Commitment',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-3.2-3.2a2 2 0 0 0-2.8 0L12 9" />
        <path d="m7 14 1.5-1.5" />
        <path d="m14 7-1.5 1.5" />
        <path d="m3 11 4.5 4.5a2 2 0 0 0 2.8 0l2.7-2.7" />
        <path d="M2 13l4-4a2 2 0 0 1 2.8 0l1.2 1.2" />
      </svg>
    ),
  },
];

const visionPillars = [
  {
    title: 'Trusted Partner',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Commercial Engineering',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Interior Projects',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Across India',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

export default function MissionVision() {
  const [missionInView, setMissionInView] = useState(false);
  const [visionInView, setVisionInView] = useState(false);

  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !missionInView) {
          setMissionInView(true);
        }
      },
      { threshold: 0.15 }
    );
    if (missionRef.current) observer.observe(missionRef.current);
    return () => observer.disconnect();
  }, [missionInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visionInView) {
          setVisionInView(true);
        }
      },
      { threshold: 0.15 }
    );
    if (visionRef.current) observer.observe(visionRef.current);
    return () => observer.disconnect();
  }, [visionInView]);

  return (
    <section className="section-py bg-secondary mission-vision-section" id="mission-vision">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mv-header">
          <div className="section-eyebrow">Institutional Purpose &amp; Growth</div>
          <h2 className="section-title">
            Mission &amp; <span className="highlight-keyword">Vision</span>
          </h2>
          <p className="section-subtitle">
            Guiding our engineering standards and nationwide contracting delivery with absolute technical integrity.
          </p>
        </div>

        {/* Dual Alternating Cards Showcase */}
        <div className="mv-cards-grid">
          {/* ==========================================================
              BOX 1: OUR MISSION
              LAYOUT: TEXT ON LEFT, IMAGE ON RIGHT
              ========================================================== */}
          <div
            className={`mv-card mv-mission-card scroll-reveal ${missionInView ? 'is-in-view' : ''}`}
            ref={missionRef}
          >
            {/* Text Side (Left) */}
            <div className="mv-card-body">
              {/* Refined Luxury Pill Header */}
              <div className="mv-header-pill mission-pill-theme">
                <span className="mv-pill-bullet-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </span>
                <span className="mv-pill-title">OUR MISSION</span>
              </div>

              <p className="mv-statement">
                To deliver dependable HVAC, MEP and interior execution solutions through technical competence, efficient coordination, and a commitment to quality and customer satisfaction.
              </p>

              {/* 4 Sleek Circular Badge Pillars in a Horizontal Row */}
              <div className="mv-pillars-horizontal-strip">
                {missionPillars.map((pillar, idx) => (
                  <div key={idx} className="mv-circle-pillar">
                    <div className="mv-circle-icon mission-circle-tint">{pillar.icon}</div>
                    <span className="mv-circle-label">{pillar.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Side (Right) */}
            <div className="mv-card-media">
              <img
                src="/images/mission-vision/mission-exposed-ducts.jpg"
                alt="Exposed Commercial MEP Ceiling Installation with Ducts and Diffusers"
                className="mv-media-img"
                loading="lazy"
              />
              <div className="mv-media-overlay">
                <div className="mv-media-tag">
                  <span className="mv-live-dot orange-dot"></span>
                  <span>100% SPECIFICATION ADHERENCE</span>
                </div>
                <div className="mv-media-caption">
                  <span>HVAC &bull; ELECTRICAL &bull; PLUMBING &bull; FIRE</span>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
              BOX 2: OUR VISION
              LAYOUT: IMAGE ON LEFT, TEXT ON RIGHT (ALTERNATING ZIG-ZAG!)
              ========================================================== */}
          <div
            className={`mv-card mv-vision-card mv-card-reversed scroll-reveal ${visionInView ? 'is-in-view' : ''}`}
            ref={visionRef}
          >
            {/* Media Side (Left) */}
            <div className="mv-card-media">
              <img
                src="/images/mission-vision/vision-commercial-skyline.jpg"
                alt="Pan-India Commercial Engineering & Urban Skyline Towers"
                className="mv-media-img"
                loading="lazy"
              />
              <div className="mv-media-overlay">
                <div className="mv-media-tag">
                  <span className="mv-live-dot blue-dot"></span>
                  <span>PAN-INDIA CONTRACTING DELIVERY</span>
                </div>
                <div className="mv-media-caption">
                  <span>CORPORATE TOWERS &bull; RETAIL &bull; INDUSTRIAL</span>
                </div>
              </div>
            </div>

            {/* Text Side (Right) */}
            <div className="mv-card-body">
              {/* Refined Luxury Pill Header */}
              <div className="mv-header-pill vision-pill-theme">
                <span className="mv-pill-bullet-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <span className="mv-pill-title">OUR VISION</span>
              </div>

              <p className="mv-statement">
                To establish Ambient Engineers as a trusted contracting partner for commercial engineering and interior projects across India.
              </p>

              {/* 4 Sleek Circular Badge Pillars in a Horizontal Row */}
              <div className="mv-pillars-horizontal-strip">
                {visionPillars.map((pillar, idx) => (
                  <div key={idx} className="mv-circle-pillar">
                    <div className="mv-circle-icon vision-circle-tint">{pillar.icon}</div>
                    <span className="mv-circle-label">{pillar.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
