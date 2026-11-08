import React, { useState, useEffect, useRef } from 'react';
import ScatteredDecor from './ScatteredDecor';

const statsData = [
  { target: 150, suffix: '+', label: 'Commercial Deployments', tag: 'HVAC & MEP' },
  { target: 12, suffix: '+', label: 'Years Engineering Practice', tag: 'SINCE 2012' },
  { target: 100, suffix: '%', label: 'Standards & Compliance', tag: 'ASHRAE / NBC' },
  { target: 24, suffix: '/7', label: 'Critical AMC Support', tag: 'MAX 2-HR SLA' },
];

const businessFocusList = [
  {
    title: 'Commercial Infrastructure',
    desc: 'Offices, Retail Flagships, Hospitality, Healthcare & Mixed-Use Complexes',
    code: 'SEC-01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Turnkey Execution Model',
    desc: 'Engineering Design, Procurement, Mechanical Installation, Testing & Handover',
    code: 'SEC-02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Precision Compliance',
    desc: 'ASHRAE, NBC & National Electrical Code Standards with Calibrated Instrumentation',
    code: 'SEC-03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Lifecycle AMC Partnerships',
    desc: 'Structured Preventative Health Checkups & Rapid Breakdown Recovery',
    code: 'SEC-04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
        <circle cx="12" cy="15" r="1.5" />
      </svg>
    ),
  },
];

const technicalTiles = [
  { img: '/images/about/tech-chillers.jpg', title: 'Commercial HVAC Chillers', sub: 'Centrifugal & VRF Plants', spec: '120–850 TR' },
  { img: '/images/about/tech-ducting.jpg', title: 'Ductwork & Ventilation', sub: 'CNC Flanged Aerodynamics', spec: 'SMACNA CLASS' },
  { img: '/images/about/tech-electrical.jpg', title: 'Electrical Infrastructure', sub: 'LT Panels & Busduct Racks', spec: '415V / 3Φ' },
  { img: '/images/about/tech-firefighting.jpg', title: 'Hydraulics & Life Safety', sub: 'Sprinkler Lines & Risers', spec: 'NFPA / NBC' },
];

const approachSteps = [
  { num: '01', title: 'Requirement Audit', desc: 'Site load calculations, BIM model review & energy benchmarks.' },
  { num: '02', title: 'Coordinated Engineering', desc: 'Clash-free MEP routing, spatial schematics & shop drawings.' },
  { num: '03', title: 'Precision Execution', desc: 'Certified technicians, quality torque-checked installations.' },
  { num: '04', title: 'Commissioning & Test', desc: 'Air balancing, pressure test logs, dielectric audits & signoff.' },
  { num: '05', title: 'Lifecycle AMC Support', desc: '24/7 emergency response, planned preventive schedules.' },
];

export default function About({ onOpenModal }) {
  const [topInView, setTopInView] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const topRef = useRef(null);

  // Number Counter Observer
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

  return (
    <section className="cad-about-editorial" id="about">
      <ScatteredDecor section="about" />

      <div className="cad-editorial-container">
        {/* ============================================================
            1. EDITORIAL HEADER & ARCHITECTURAL PROFILE SPREAD
            ============================================================ */}
        <div className="cad-dossier-top" ref={topRef}>
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">SPEC-LKO // AMB-2024-ENG</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">CORPORATE PROFILE &bull; AMBIENT ENGINEERS</span>
          </div>

          <div className="cad-dossier-spread">
            {/* Left Monograph Column */}
            <div className="cad-dossier-prose">
              <h2 className="cad-dossier-headline">
                ENGINEERING EXCELLENCE.<br />
                <span className="cad-headline-accent">INTEGRATED EXECUTION.</span>
              </h2>

              <p className="cad-prose-lead">
                Ambient Engineers is a premier contracting and engineering firm headquartered in Lucknow, delivering high-performance HVAC, Mechanical, Electrical, Plumbing (MEP), and Turnkey Interior Fit-Out solutions for mission-critical commercial infrastructure.
              </p>

              <p className="cad-prose-body">
                We engineer spaces from schematic conception to final commissioning. Our multidisciplinary team combines rigorous engineering compliance (ASHRAE, NBC, IS Standards) with field execution mastery, guaranteeing clash-free delivery, thermal efficiency, and lifelong equipment reliability.
              </p>

              {/* Action consultation link */}
              <div className="cad-dossier-cta">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>REQUEST TECHNICAL DOSSIER</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <span className="cad-cta-annotation">TEL: +91 97920 18889 &bull; LUCKNOW HQ</span>
              </div>
            </div>

            {/* Right Architectural Visual Viewport */}
            <div className="cad-dossier-viewport">
              <div className="cad-viewport-frame">
                {/* CAD Brackets */}
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>

                <img
                  src="/images/about/about-building.jpg"
                  alt="Modern Commercial Architecture & 3D MEP Coordination"
                  className="cad-viewport-photo"
                  loading="lazy"
                />

                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>BIM 3D MEP COORDINATED</span>
                  </div>
                  <div className="cad-telemetry-meta">
                    <span>ELEVATION: +18.40m FFL</span>
                    <span className="cad-sep">&bull;</span>
                    <span>CLASH TOLERANCE: ZERO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            2. OPEN ARCHITECTURAL TELEMETRY (NO BOXES)
            ============================================================ */}
        <div className="cad-telemetry-strip">
          <div className="cad-telemetry-grid">
            {statsData.map((stat, idx) => (
              <div key={idx} className="cad-telemetry-cell">
                <span className="cad-cell-tag">{stat.tag}</span>
                <div className="cad-cell-number">
                  {counts[idx]}
                  <span className="cad-cell-suffix">{stat.suffix}</span>
                </div>
                <div className="cad-cell-title">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            3. CORE DISCIPLINES & TECHNICAL BENCHMARKS (ASYMMETRIC GRID)
            ============================================================ */}
        <div className="cad-disciplines-section">
          <div className="cad-section-bar">
            <span className="cad-bar-label">SECTION 02 // TECHNICAL SCOPE & DOMAIN COMPETENCY</span>
            <span className="cad-bar-line"></span>
            <span className="cad-bar-index">[ 04 CORE FOCUS PILLARS ]</span>
          </div>

          <div className="cad-matrix-spread">
            {/* Left 4 Strategic Pillars */}
            <div className="cad-pillars-stack">
              {businessFocusList.map((item, idx) => (
                <div key={idx} className="cad-pillar-row">
                  <div className="cad-pillar-code">{item.code}</div>
                  <div className="cad-pillar-icon">{item.icon}</div>
                  <div className="cad-pillar-content">
                    <h3 className="cad-pillar-title">{item.title}</h3>
                    <p className="cad-pillar-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Technical Execution Gallery */}
            <div className="cad-gallery-stack">
              <div className="cad-gallery-header">
                <span className="cad-sub-label">ON-SITE DISCIPLINE VISUALS</span>
                <span className="cad-sub-meta">DOCUMENTED DEPLOYMENTS</span>
              </div>
              <div className="cad-gallery-grid">
                {technicalTiles.map((tile, idx) => (
                  <div key={idx} className="cad-tile-card">
                    <div className="cad-tile-img-stage">
                      <img src={tile.img} alt={tile.title} loading="lazy" />
                      <span className="cad-tile-badge">{tile.spec}</span>
                    </div>
                    <div className="cad-tile-caption">
                      <h4 className="cad-tile-name">{tile.title}</h4>
                      <p className="cad-tile-sub">{tile.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            4. 5-STAGE ENGINEERING EXECUTION PIPELINE
            ============================================================ */}
        <div className="cad-pipeline-section">
          <div className="cad-section-bar">
            <span className="cad-bar-label">SECTION 03 // STANDARD OPERATING PROCEDURE (SOP)</span>
            <span className="cad-bar-line"></span>
            <span className="cad-bar-index">[ 5-STAGE CONDUIT ]</span>
          </div>

          <div className="cad-pipeline-rail">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="cad-station-node">
                <div className="cad-node-header">
                  <span className="cad-node-index">{step.num}</span>
                  <span className="cad-node-conn"></span>
                </div>
                <h4 className="cad-node-title">{step.title}</h4>
                <p className="cad-node-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
