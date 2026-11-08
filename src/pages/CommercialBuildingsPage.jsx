import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const commercialParameters = [
  {
    code: 'PARAM-01',
    metric: '16-BAR HYDROSTATIC HEAD',
    title: 'Multi-Story Vertical Risers',
    desc: 'High-rise commercial towers require engineered riser shafts with hydraulic expansion loops, anti-vibration springs, and high-pressure valves.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    code: 'PARAM-02',
    metric: '< 0.65 KW/TR BENCHMARK',
    title: 'Central Chiller Efficiency',
    desc: 'Large complexes consume thousands of TR; variable primary flow (VPF) and EC cooling tower loops are vital to prevent energy wastage.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    code: 'PARAM-03',
    metric: 'NBC 2016 PART 4 COMPLIANT',
    title: 'Statutory Fire NOC & Wet Risers',
    desc: 'Mandatory wet riser hydrants, yard hydrants, auto-sprinklers, smoke evacuation blowers, and stairwell pressurization systems.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    code: 'PARAM-04',
    metric: 'BACNET / MODBUS BMS',
    title: 'Automated Building BMS Control',
    desc: 'Integrated DDC controllers, BTU energy meters, and Modbus gateways monitoring subtenant power and chilled water consumption automatically.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const commercialPlanStages = [
  {
    step: '01',
    phase: 'LOAD AUDIT',
    title: 'Whole-Building Diversity Sizing',
    desc: 'Calculating concurrent peak loads across tenant offices, retail ground floors, and shared atriums.',
    tag: 'ASHRAE 90.1 DIVERSITY SIZING',
  },
  {
    step: '02',
    phase: 'CHILLER PLANT',
    title: 'Central Plant & VPF Pumping',
    desc: 'Positioning modular screw/centrifugal chillers with automated variable primary flow distribution.',
    tag: 'HIGH-COP CHILLED WATER PLANT',
  },
  {
    step: '03',
    phase: 'RISER SHAFTS',
    title: 'Hydraulic Riser Pipe Erection',
    desc: 'Welding heavy MS Class-C chilled water risers with expansion loops and heavy seismic spring isolators.',
    tag: '16-BAR HYDROSTATIC RISERS',
  },
  {
    step: '04',
    phase: 'SUBSTATION',
    title: '3200A Busduct & Transformer',
    desc: 'Erecting 11kV substation, VCB switchgear, and vertical sandwich busway trunking across floors.',
    tag: '3200A SANDWICH BUSBAR RISER',
  },
  {
    step: '05',
    phase: 'LIFE SAFETY',
    title: 'Fire Pumps & Smoke Evacuation',
    desc: 'Installing 2850 LPM electric/diesel fire pumps, wet risers, sprinklers, and 250°C smoke spill blowers.',
    tag: 'NBC PART 4 FIRE INFRASTRUCTURE',
  },
  {
    step: '06',
    phase: 'CFO NOC',
    title: 'Statutory Testing & NOC Sign-Off',
    desc: 'Conducting hydrostatic pressure hold tests, smoke spill simulations, and Chief Fire Officer inspection clearance.',
    tag: 'CFO FIRE NOC & OCCUPANCY',
  },
];

const commercialWorkStrips = [
  {
    name: 'Emerald Paper Mills',
    loc: 'Mohanlalganj, Lucknow',
    code: 'PRJ-LKO-03',
    scope: 'Industrial Manufacturing Plant Heavy Industrial Ventilation, Wet Riser Fire Hydrants, Transformer Substation & Heavy Power MEP.',
    pills: ['INDUSTRIAL PLANT', 'FIRE HYDRANTS', '11KV SUBSTATION', 'MOHANLALGANJ'],
    img: '/images/projects/emerald-paper.jpg',
  },
  {
    name: 'Sanimax Cinemas Auditorium',
    loc: 'Purvanchal',
    code: 'PRJ-UP-06',
    scope: 'Acoustic Cinema Auditorium High-Static Low-Noise HVAC, Smoke Evacuation Blowers & Emergency Exit Pressurization.',
    pills: ['CINEMA SPEC', 'NC-28 SILENT', 'SMOKE PURGE', 'PURVANCHAL'],
    img: '/images/projects/sanimax-cinemas.jpg',
  },
  {
    name: 'Multi-Story Commercial Towers',
    loc: 'Lucknow Commercial Hubs',
    code: 'PRJ-LKO-BLD',
    scope: 'Turnkey Chiller Plant Risers, 3200A Busduct Vertical Risers, Fire Life Safety Ring & Integrated Modbus BMS Automation.',
    pills: ['450 TR CHILLER', '3200A BUSDUCT', 'CFO NOC', 'LUCKNOW TOWER'],
    img: '/images/industries/industry-commercial.jpg',
  },
];

const commercialLedgerRows = [
  { code: 'SOL-BLD-01', title: 'Central Water-Cooled & Air-Cooled Chiller Plants', desc: 'High-efficiency screw and centrifugal chillers with automated VFD primary pumping, water softening plants, and low-drift induced-draft towers.', specs: 'CHILLER RANGE: 100–1200 TR • VFD VARIABLE SPEED DRIVES • AUTOMATED PURGING' },
  { code: 'SOL-BLD-02', title: 'Heavy-Duty Electrical Substations & Busbar Risers', desc: 'Turnkey HT transformers, vacuum circuit breakers (VCB), compact sandwich busduct trunking risers, and multi-tenant digital submetering.', specs: 'BUSDUCT RATING: UP TO 3200A • TRANSFORMERS: DRY/OIL TYPE • SCADA READY' },
  { code: 'SOL-BLD-03', title: 'Complete Life Safety & Fire Hydrant Infrastructure', desc: 'Underground fire pump room with main electric pump, standby diesel generator driven pump, and jockey pressure maintenance pump.', specs: 'DISCHARGE: 2850 LPM • PRESSURE: 8.5 KG/CM² • CFO COMPLIANCE CERTIFIED' },
  { code: 'SOL-BLD-04', title: 'Industrial Heavy Ventilation & Stairwell Pressurization', desc: 'High-temperature smoke spill exhaust fans rated at 250°C for 2 hours, fire-rated motorized dampers, and positive stairwell pressurization.', specs: 'FIRE RATING: 250°C / 2 HOURS • AMCA CERTIFIED BLOWERS • AUTOMATED TRIP LINKAGE' },
];

export default function CommercialBuildingsPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Commercial Buildings & Industrial Infrastructure | Ambient Engineers Lucknow';
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
            <span className="cad-spec-code">SECTOR 06 // MULTI-STORY COMMERCIAL BUILDINGS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">CENTRAL CHILLERS &bull; NBC PART 4 &bull; 3200A BUSDUCTS</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                COMMERCIAL BUILDINGS &bull;<br />
                <span className="cad-headline-accent">LARGE-SCALE MEP PLANTS</span>
              </h1>
              <p className="cad-page-hero-lead">
                Comprehensive turnkey MEP engineering, central chiller plants, high-rise risers, and NBC Part 4 fire life safety systems for high-traffic multi-story complexes across Uttar Pradesh.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>CENTRAL CHILLERS</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>3200A BUSDUCTS</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>NBC PART 4 HYDRANTS</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>BMS AUTOMATION</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>PLAN COMMERCIAL COMPLEX MEP</span>
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
                  <source src="/videos/industry-commercial.mp4" type="video/mp4" />
                </video>
                <div className="cad-viewport-telemetry">
                  <div className="cad-video-indicator">
                    <span className="pulse-dot"></span>
                    <span>LIVE SIMULATION</span>
                  </div>
                  <div className="cad-telemetry-meta">SEC-06 // MULTI-STORY STREAM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CRITICAL DEMANDS (VISUAL STRIP ARCHITECTURE) */}
      <section className="cad-def-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">CRITICAL DEMANDS // SEC-BLD-06</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">HIGH-RISE HYDROSTATIC &amp; HIGH-VOLTAGE CRITERIA</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>VERTICAL HEAD PRESSURES &amp; CENTRAL PLANT EFFICIENCY</h3>
              <p>Balancing hydrostatic head pressures across 10+ floors, designing variable primary flow pumping, and integrating multi-tenant submetering under automated building management systems.</p>
            </div>
            <span className="cad-def-banner-tag">HIGH-RISE MATRIX</span>
          </div>

          <div className="cad-params-strip-row">
            {commercialParameters.map((p, idx) => (
              <div key={idx} className="cad-param-strip-card">
                <div className="cad-param-card-header">
                  <div className="cad-param-icon-badge">{p.icon}</div>
                  <span className="cad-param-card-code">{p.code}</span>
                </div>
                <div className="cad-param-card-metric">{p.metric}</div>
                <h4 className="cad-param-card-title">{p.title}</h4>
                <p className="cad-param-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISUAL STRIP PROCESS RIBBON */}
      <section className="cad-process-ribbon-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">DELIVERY TIMELINE // STEP 01 TO 06</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS OUR PLAN ON COMMERCIAL TOWERS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON COMMERCIAL TOWERS &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">
                From central thermal diversity modeling to 16-bar hydrostatic riser testing and Chief Fire Officer NOC handover:
              </p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {commercialPlanStages.map((stage, idx) => (
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

      {/* 4. VERIFIED PROJECTS STRIP */}
      <section className="cad-work-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">OFFICIAL ARCHIVE // VERIFIED DEPLOYMENTS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WORK DONE ON TOWERS &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON COMMERCIAL &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">
                Multi-story commercial office towers, industrial manufacturing plants, and auditoriums commissioned by Ambient Engineers:
              </p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE COMPLEX SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {commercialWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">CENTRAL PLANT &amp; SUBSTATION ENGINEERING</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {commercialLedgerRows.map((row, idx) => (
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
              <span className="cad-comp-badge">NBC 2016 PART 4 HYDRANTS</span>
              <span className="cad-comp-badge">ECBC 2017 ENERGY CODE</span>
              <span className="cad-comp-badge">CEA 3200A BUSDUCT NORMS</span>
              <span className="cad-comp-badge">CFO STATUTORY NOC</span>
              <span className="cad-comp-badge">16-BAR HYDROSTATIC HEAD</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
