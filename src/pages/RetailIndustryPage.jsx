import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const retailParameters = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: 'Footfall Thermal Spikes',
    desc: 'Dynamic heat load compensation as customer footfall surges during evening rush hours.',
    metric: 'PEAK DIVERSITY LOAD',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Storefront Air Curtains',
    desc: 'High-velocity aerodynamic air curtains stopping outdoor heat and dust at open entrances.',
    metric: 'VELOCITY: 20 M/S',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
      </svg>
    ),
    title: 'High-CRI Retail Lighting',
    desc: '90+ CRI glare-free architectural spotlighting making apparel and merchandise colors pop.',
    metric: 'LUX: 800–1200 | CRI > 90',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: 'Fast-Track Fit-Out',
    desc: 'Rapid overnight mall execution complying with strict handover deadlines and zero noise.',
    metric: 'FAST-TRACK 45-DAY SLA',
  },
];

const retailPlanStages = [
  {
    step: '01',
    phase: 'LOAD SURVEY',
    title: 'Footfall & Heat Sizing',
    desc: 'Computing peak customer density, storefront glass solar radiation, and display lighting heat.',
    tag: 'RETAIL DIVERSITY SIZING',
  },
  {
    step: '02',
    phase: 'ZONING',
    title: 'Multi-Zone VRF Design',
    desc: 'Zoning cassette units across fitting rooms, billing counters, and open merchandise aisles.',
    tag: 'INDIVIDUAL VRF CONTROLS',
  },
  {
    step: '03',
    phase: '3D BIM',
    title: 'Ceiling Plenum Layout',
    desc: 'Concealing AC ducts and track light busways within open industrial ceiling architecture.',
    tag: 'EXPOSED SPIRAL DUCTS',
  },
  {
    step: '04',
    phase: 'STOREFRONT',
    title: 'MEP & Millwork Erection',
    desc: 'Erecting high-security POS power raceways, custom display casework, and vitrines.',
    tag: 'POS CLEAN POWER RACEWAYS',
  },
  {
    step: '05',
    phase: 'AIRFLOW',
    title: 'Air Curtains & TAB',
    desc: 'Air velocity balancing and entrance air curtain alignment preventing cold air escape.',
    tag: 'ASHRAE 111 AIR BALANCING',
  },
  {
    step: '06',
    phase: 'HANDOVER',
    title: 'Mall Sign-Off Handover',
    desc: 'Mall management statutory inspection, fire NOC compliance, and client trading handover.',
    tag: 'STORE TRADING CLEARANCE',
  },
];

const retailWorkStrips = [
  {
    name: 'Azorte Flagship Apparel Store',
    loc: 'Gorakhpur',
    code: 'PRJ-UP-11',
    scope: 'High-Capacity Retail VRF Plant, Concealed Ducting Across Sales Floors & Entrance Air Curtains.',
    pills: ['85 TR VRF', '28,000 CFM', 'AIR CURTAINS', 'APPAREL SPEC'],
    img: '/images/projects/azorte-gorakhpur.jpg',
  },
  {
    name: 'Geeta Wholesale Mart',
    loc: 'Padrauna',
    code: 'PRJ-UP-04',
    scope: 'Commercial Wholesale Hypermarket Packaged Ductables, High-Bay Lighting & Heavy Floor Tiling.',
    pills: ['100 TR DUCTABLE', '45,000 SQ.FT', 'HIGH FOOTFALL', 'HYPERMARKET'],
    img: '/images/projects/geeta-mart.jpg',
  },
  {
    name: 'Reliance Jewels Showroom',
    loc: 'Jhansi',
    code: 'PRJ-UP-09',
    scope: 'Luxury Jewelry Boutique Fit-Out: High-CRI Spotlighting, Precision VRF & High-Security Cashiers.',
    pills: ['95+ CRI LIGHTING', 'DIAMOND VITRINES', 'SECURE POS', 'RETAIL SPEC'],
    img: '/images/projects/reliance-jewels.jpg',
  },
];

const retailLedgerRows = [
  { code: 'SOL-RET-01', title: 'High-Capacity VRF / VRV Multi-Split Inverters', desc: 'Precision zoning across fitting rooms, sales floors, and cashier pods with BACnet automation.', specs: 'COP: 4.2+ • VARIABLE AIRFLOW • LOW-NOISE CASSETTES' },
  { code: 'SOL-RET-02', title: 'Linear Slot Diffusers & Architectural Exposed Ducts', desc: 'Powder-coated spiral and rectangular ductwork blending with open-ceiling retail aesthetics.', specs: 'SMACNA CLASS • CLASS-0 NITRILE • MINIMAL CEILING INTRUSION' },
  { code: 'SOL-RET-03', title: 'Turnkey Storefront Electrical & Clean POS Power', desc: 'Branch submetering panels, concealed floor raceways, and uninterrupted UPS feeds for POS counters.', specs: 'IS 732 COMPLIANT • FRLS POWER LINES • 24/7 SURGE PROTECTION' },
  { code: 'SOL-RET-04', title: 'Turnkey Retail Millwork & Security Vitrines', desc: 'Bespoke perimeter shelving, cashier desks, and frameless storefront glass installations.', specs: 'MARINE-GRADE PLY • HIGH-TRAFFIC LAMINATE • CNC PRECISION' },
];

export default function RetailIndustryPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Retail Stores & Hypermarkets | Ambient Engineers Lucknow';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="cad-page-wrapper">
      {/* 1. HERO WITH VIDEO BACKGROUND / VIEWPORT */}
      <section className="cad-page-hero">
        <ScatteredDecor section="industries" />
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">SECTOR 01 // RETAIL &amp; COMMERCE</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">HIGH-CFM IAQ &bull; ASHRAE 62.1 &bull; FAST-TRACK FIT-OUT</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                RETAIL STORES &amp; HYPERMARKETS &bull;<br />
                <span className="cad-headline-accent">CLIMATE &amp; FIT-OUT ENGINEERING</span>
              </h1>
              <p className="cad-page-hero-lead">
                Modern, comfortable retail environments engineered for enhanced customer flow, optimal thermal zoning, and elevated shopper experiences across North India.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>HIGH-CFM IAQ</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>±1.0°C MULTI-ZONE</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>45-DAY FAST-TRACK</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>CRI 90+ LIGHTING</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>DISCUSS RETAIL FIT-OUT</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <span className="cad-cta-annotation">TEL: +91 97920 18889 &bull; LUCKNOW HQ</span>
              </div>
            </div>

            {/* Video Viewport with Live Telemetry */}
            <div className="cad-page-hero-visual">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <video
                  className="cad-viewport-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/videos/industry-retail.mp4" type="video/mp4" />
                </video>
                <div className="cad-viewport-telemetry">
                  <div className="cad-video-indicator">
                    <span className="pulse-dot"></span>
                    <span>LIVE SIMULATION</span>
                  </div>
                  <div className="cad-telemetry-meta">SEC-01 // RETAIL STREAM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT ARE RETAIL CRITICAL DEMANDS? (VISUAL STRIP ARCHITECTURE) */}
      <section className="cad-def-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">CRITICAL DEMANDS // SEC-RET-01</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">RETAIL SPATIAL &amp; ENVIRONMENTAL DEMANDS</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>RETAIL CHALLENGES // FOOTFALL SURGES &amp; CUSTOMER COMFORT</h3>
              <p>Retail engineering demands rapid heat load pull-down as customer density shifts, high air changes without drafts, and high-CRI glare-free merchandise lighting.</p>
            </div>
            <span className="cad-def-banner-tag">COMMERCE MATRIX</span>
          </div>

          <div className="cad-params-strip-row">
            {retailParameters.map((p, idx) => (
              <div key={idx} className="cad-param-strip-card">
                <div className="cad-param-card-header">
                  <div className="cad-param-icon-badge">{p.icon}</div>
                  <span className="cad-param-strip-badge">{p.metric}</span>
                </div>
                <h4 className="cad-param-strip-title">{p.title}</h4>
                <p className="cad-param-strip-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PLAN ON RETAIL (CONNECTED 6-PHASE PROCESS RIBBON) */}
      <section className="cad-process-ribbon-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">EXECUTION FRAMEWORK // 6-STAGE ROADMAP</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS OUR PLAN ON RETAIL PROJECTS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON RETAIL &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">Fast-track turnkey execution tailored to strict shopping mall guidelines and handover deadlines:</p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {retailPlanStages.map((stage, idx) => (
              <div key={idx} className="cad-process-strip-step">
                <div className="cad-step-top-row">
                  <span className="cad-step-index-badge">{stage.step}</span>
                  <span className="cad-step-phase-pill">{stage.phase}</span>
                </div>
                <h4 className="cad-step-compact-title">{stage.title}</h4>
                <p className="cad-step-compact-desc">{stage.desc}</p>
                <div className="cad-step-compact-tag">{stage.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK DONE ON RETAIL (VISUAL PROJECT STRIPS) */}
      <section className="cad-work-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">OFFICIAL ARCHIVE // VERIFIED DEPLOYMENTS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WORK DONE ON RETAIL &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON RETAIL &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">Flagship retail apparel stores, luxury jewelry boutiques, and commercial hypermarkets by Ambient Engineers:</p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE RETAIL SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {retailWorkStrips.map((prj, idx) => (
              <div key={idx} className="cad-project-strip-item">
                <div className="cad-project-strip-media">
                  <span className="cad-bracket cad-bracket-tl">┌</span>
                  <span className="cad-bracket cad-bracket-tr">┐</span>
                  <span className="cad-bracket cad-bracket-bl">└</span>
                  <span className="cad-bracket cad-bracket-br">┘</span>
                  <img src={prj.img} alt={prj.name} loading="lazy" />
                  <div className="cad-project-strip-overlay">
                    <span className="cad-project-code-tag">{prj.code}</span>
                  </div>
                </div>

                <div className="cad-project-strip-body">
                  <div className="cad-project-pin-header">
                    <div className="cad-project-pin-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#EA580C">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div className="cad-project-pin-info">
                      <h4 className="cad-project-strip-name">{prj.name}</h4>
                      <span className="cad-project-strip-location">{prj.loc}</span>
                    </div>
                  </div>

                  <p className="cad-project-strip-scope">{prj.scope}</p>

                  <div className="cad-project-metrics-strip">
                    {prj.pills.map((pill, pIdx) => (
                      <span key={pIdx} className="cad-metric-badge-pill">{pill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SYSTEMS DELIVERED (ARCHITECTURAL LEDGER STRIPS) */}
      <section className="cad-process-ribbon-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">DELIVERED SYSTEMS // SPECIFICATION LEDGER</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">RETAIL INFRASTRUCTURE MODULES</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {retailLedgerRows.map((row, idx) => (
              <div key={idx} className="cad-system-strip-row">
                <span className="cad-row-code">{row.code}</span>
                <div className="cad-row-title-desc">
                  <h4>{row.title}</h4>
                  <p>{row.desc}</p>
                </div>
                <div className="cad-row-specs-tag">{row.specs}</div>
              </div>
            ))}
          </div>

          <div className="cad-compliance-ribbon">
            <span className="cad-compliance-label">STANDARDS &amp; CODE COMPLIANCE:</span>
            <div className="cad-compliance-badges-group">
              <span className="cad-comp-badge">ASHRAE 62.1 IAQ</span>
              <span className="cad-comp-badge">NBC COMMERCIAL</span>
              <span className="cad-comp-badge">CRI 90+ LIGHTING</span>
              <span className="cad-comp-badge">IS 732 WIRING</span>
              <span className="cad-comp-badge">FAST-TRACK SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
