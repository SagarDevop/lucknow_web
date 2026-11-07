import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  { target: 150, suffix: '+', label: 'Commercial Projects' },
  { target: 12, suffix: '+', label: 'Years Experience' },
  { target: 100, suffix: '%', label: 'Safety & Compliance' },
  { target: 24, suffix: '/7', label: 'AMC Response' },
];

const businessFocusList = [
  {
    title: 'Commercial Projects',
    desc: 'Offices, Retail, Hospitality, Healthcare, Industrial & Mixed-Use',
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
    title: 'End-to-End Solutions',
    desc: 'Design, Supply, Installation, Testing & Maintenance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Reliability & Quality',
    desc: 'Measurable Standards and ASHRAE & NBC Compliance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Relationships',
    desc: 'Client-Focused Support and Sustainable Engineering',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
        <circle cx="12" cy="15" r="1.5" />
      </svg>
    ),
  },
];

const technicalTiles = [
  {
    img: '/images/about/tech-chillers.jpg',
    title: 'Commercial HVAC Chillers',
    sub: 'Central Plants & VRF',
  },
  {
    img: '/images/about/tech-ducting.jpg',
    title: 'Ducting & Ventilation',
    sub: 'Clean Air Distribution',
  },
  {
    img: '/images/about/tech-electrical.jpg',
    title: 'Electrical Distribution',
    sub: 'Cable Trays & HT Panels',
  },
  {
    img: '/images/about/tech-firefighting.jpg',
    title: 'Fire Protection & Hydraulics',
    sub: 'Sprinklers & Piping',
  },
];

const approachSteps = [
  {
    num: '01',
    title: 'Understand Requirements',
    desc: 'Clear project scope and client objectives',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Plan & Coordinate',
    desc: 'Detailed planning and integrated MEP coordination',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Execute with Precision',
    desc: 'Professional installation and quality workmanship',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20" />
        <path d="M12 4a8 8 0 0 0-8 8v6h16v-6a8 8 0 0 0-8-8z" />
        <line x1="12" y1="4" x2="12" y2="2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Test & Commission',
    desc: 'Comprehensive testing and system handover',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Support & Maintain',
    desc: 'Ongoing maintenance and long-term support',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function About({ onOpenModal }) {
  const [topInView, setTopInView] = useState(false);
  const [middleInView, setMiddleInView] = useState(false);
  const [approachInView, setApproachInView] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  const topRef = useRef(null);
  const middleRef = useRef(null);
  const approachRef = useRef(null);

  // 1. Top Section Observer & Number Counting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !topInView) {
          setTopInView(true);
          statsData.forEach((stat, index) => {
            const duration = 1800;
            const startTime = performance.now();

            const step = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const currentVal = Math.floor(progress * stat.target);
              setCounts((prev) => {
                const next = [...prev];
                next[index] = currentVal;
                return next;
              });

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCounts((prev) => {
                  const next = [...prev];
                  next[index] = stat.target;
                  return next;
                });
              }
            };
            requestAnimationFrame(step);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (topRef.current) observer.observe(topRef.current);
    return () => observer.disconnect();
  }, [topInView]);

  // 2. Middle Grid Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !middleInView) {
          setMiddleInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (middleRef.current) observer.observe(middleRef.current);
    return () => observer.disconnect();
  }, [middleInView]);

  // 3. Working Approach Strip Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !approachInView) {
          setApproachInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (approachRef.current) observer.observe(approachRef.current);
    return () => observer.disconnect();
  }, [approachInView]);

  return (
    <section className="section-py bg-white about-brochure-section" id="about">
      <div className="container">
        {/* ==============================================================
            1. TOP: ABOUT US INTRO + ARCHITECTURAL BIM SHOWCASE
            ============================================================== */}
        <div
          className={`about-top-grid scroll-reveal ${topInView ? 'is-in-view' : ''}`}
          ref={topRef}
        >
          <div className="about-intro-col">
            <div className="section-eyebrow">About Ambient Engineers</div>
            <h2 className="section-title">
              Engineering Excellence &bull; <span className="highlight-keyword">Integrated Solutions</span>
            </h2>
            <p className="about-lead-text">
              Ambient Engineers is an engineering and contracting company providing HVAC, Mechanical, Electrical and Plumbing (MEP), and Interior Fit-Out solutions for commercial projects.
            </p>
            <p className="about-sub-text">
              We focus on delivering reliable engineering, professional installation, coordinated project execution, testing and commissioning, and maintenance services tailored to project requirements.
            </p>

            {/* Quick Metrics Strip with Scroll Animation */}
            <div className="about-quick-metrics">
              {statsData.map((stat, idx) => (
                <div key={idx} className="about-metric-cell">
                  <div className="about-metric-value">
                    {counts[idx]}
                    {stat.suffix}
                  </div>
                  <div className="about-metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual-col">
            <div className="about-visual-frame">
              <img
                src="/images/about/about-building.jpg"
                alt="Modern Commercial Architecture & 3D MEP Coordination"
                className="about-building-photo"
                loading="lazy"
              />
              <div className="bim-tech-overlay">
                <div className="bim-pill">
                  <span className="bim-dot"></span>
                  <span>BIM 3D MEP COORDINATED</span>
                </div>
                <div className="bim-stats">
                  <span>CLASH-FREE EXECUTION</span> &bull; <span>LUCKNOW HQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            2. MIDDLE DUAL GRID: SERVICE PORTFOLIO / BUSINESS FOCUS & TECHNICAL CAPABILITIES
            ============================================================== */}
        <div
          className={`about-middle-grid scroll-reveal ${middleInView ? 'is-in-view' : ''}`}
          ref={middleRef}
        >
          {/* Left Column: Our Service Portfolio & Business Focus */}
          <div className="about-left-col">
            {/* Service Portfolio Box */}
            <div className="brochure-block portfolio-block">
              <div className="brochure-block-header">
                <span className="block-tag">CAPABILITIES</span>
                <h3 className="brochure-block-title">Our Service Portfolio</h3>
              </div>
              <p className="brochure-block-desc">
                Our service portfolio includes commercial air-conditioning systems, VRF/VRV installations, ducting and ventilation, electrical works, plumbing systems, fire-fighting installations, and commercial interior fit-outs.
              </p>
              
              <div className="service-badges-container">
                {/* Badge 1: MEP Works */}
                <div className="service-pill-card">
                  <div className="service-pill-icon mep-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="service-pill-info">
                    <span className="service-pill-title">MEP WORKS</span>
                    <span className="service-pill-tags">INTEGRATED SYSTEMS &bull; SAFE &bull; EFFICIENT</span>
                  </div>
                </div>

                {/* Badge 2: Interior Fit-Out Works */}
                <div className="service-pill-card">
                  <div className="service-pill-icon fitout-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <div className="service-pill-info">
                    <span className="service-pill-title">INTERIOR FIT-OUT WORKS</span>
                    <span className="service-pill-tags">FUNCTIONAL &bull; AESTHETIC &bull; TURNKEY SOLUTIONS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Focus Box */}
            <div className="brochure-block focus-block">
              <div className="brochure-block-header">
                <span className="block-tag">STRATEGY</span>
                <h3 className="brochure-block-title">Our Business Focus</h3>
              </div>
              <p className="brochure-block-desc">
                We deliver integrated MEP and interior solutions for commercial projects with a focus on quality, safety, efficiency and long-term value.
              </p>

              <div className="business-focus-grid">
                {businessFocusList.map((item, idx) => (
                  <div key={idx} className="focus-cell">
                    <div className="focus-icon-circle">{item.icon}</div>
                    <div className="focus-cell-content">
                      <h4 className="focus-cell-title">{item.title}</h4>
                      <p className="focus-cell-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Technical Capabilities (Dark Architectural Card) */}
          <div className="about-right-col">
            <div className="technical-capabilities-card">
              <div className="tech-card-header">
                <span className="tech-badge">CORE INFRASTRUCTURE</span>
                <h3 className="tech-title">Technical Capabilities</h3>
                <p className="tech-desc">
                  Our team brings technical expertise, industry experience, and a coordinated approach to deliver complex MEP and fit-out projects with precision and efficiency.
                </p>
              </div>

              {/* 2x2 Photo Grid */}
              <div className="tech-photos-grid">
                {technicalTiles.map((tile, idx) => (
                  <div key={idx} className="tech-photo-item">
                    <img
                      src={tile.img}
                      alt={tile.title}
                      className="tech-tile-img"
                      loading="lazy"
                    />
                    <div className="tech-photo-overlay">
                      <span className="tech-tile-title">{tile.title}</span>
                      <span className="tech-tile-sub">{tile.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tech-footer-cta">
                <button onClick={onOpenModal} className="btn btn-accent btn-sm" style={{ width: '100%' }}>
                  <span>Consult Technical Engineering Team</span>
                  <span className="btn-icon">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            3. BOTTOM: OUR WORKING APPROACH (HORIZONTAL 1-LINE STRIP)
            Cascading Staggered Domino Scroll Reveal Animation
            ============================================================== */}
        <div
          className={`working-approach-wrapper scroll-reveal ${approachInView ? 'is-in-view' : ''}`}
          ref={approachRef}
        >
          <div className="approach-header">
            <div className="approach-header-left">
              <span className="approach-eyebrow">QUALITY-FOCUSED EXECUTION</span>
              <h3 className="approach-main-title">Our Working Approach</h3>
            </div>
            <p className="approach-header-desc">
              We aim to support clients, consultants, contractors, facility managers, and business owners through practical engineering solutions, transparent communication, and quality-focused execution.
            </p>
          </div>

          {/* Continuous Single-Line Horizontal Strip */}
          <div className="approach-strip-track">
            {approachSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="approach-step-card">
                  <div className="step-card-top">
                    <span className="step-card-num">{step.num}</span>
                    <div className="step-card-icon">{step.icon}</div>
                  </div>
                  <h4 className="step-card-title">{step.title}</h4>
                  <p className="step-card-desc">{step.desc}</p>
                </div>

                {/* Connecting Chevron with Flowing Energy Pulse */}
                {idx < approachSteps.length - 1 && (
                  <div className="step-connector" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
