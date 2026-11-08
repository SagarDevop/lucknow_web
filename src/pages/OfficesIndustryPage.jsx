import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const officeParameters = [
  {
    code: 'PARAM-01',
    metric: 'NRC 0.85+ TARGET',
    title: 'Acoustic Reverberation & Echo Control',
    desc: 'Dense corporate seating generates voice echo and ambient hiss that disrupts focus without acoustic ceiling baffles and sound isolation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3" />
      </svg>
    ),
  },
  {
    code: 'PARAM-02',
    metric: '±0.5°C INDEPENDENT',
    title: 'Zoned VRF Microclimates',
    desc: 'Executive boardrooms, glass cabins, and open desk areas possess contrasting thermal loads requiring multi-split inverter zoning.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    code: 'PARAM-03',
    metric: 'CO2 < 800 PPM',
    title: 'MERV-13 ERV Fresh Air Exchange',
    desc: 'Preventing afternoon cognitive fatigue through continuous treated fresh air purge with sensible and latent heat recovery rotors.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    code: 'PARAM-04',
    metric: 'CAT6A 10-GIGABIT',
    title: 'Under-Desk Structured Raceways',
    desc: 'Concealed power raceways, floor pop-up junction boxes, and clean UPS feeds providing clutter-free ergonomic desk configurations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const officePlanStages = [
  {
    step: '01',
    phase: 'LOAD CALC',
    title: 'Occupancy Diversity Sizing',
    desc: 'Calculating heat dissipation from monitors, conference cabins, and dynamic workstation densities.',
    tag: 'ASHRAE 55 DIVERSITY',
  },
  {
    step: '02',
    phase: 'VRF ZONING',
    title: 'Multi-Split Inverter Layout',
    desc: 'Mapping individual ceiling cassettes with independent digital thermostats and BMS BACnet integration.',
    tag: 'INDEPENDENT VRF ZONING',
  },
  {
    step: '03',
    phase: 'ACOUSTICS',
    title: 'Baffle Ceilings & Lighting',
    desc: 'Suspending sound-absorbing felt baffles with integrated UGR < 19 glare-free 400 lux linear LEDs.',
    tag: 'NRC 0.85 SOUND ISOLATION',
  },
  {
    step: '04',
    phase: 'VENTILATION',
    title: 'ERV Fresh Air Integration',
    desc: 'Installing Energy Recovery Ventilators delivering continuous pre-cooled fresh air to prevent CO2 spikes.',
    tag: '78% HEAT RECOVERY ROTOR',
  },
  {
    step: '05',
    phase: 'ELECTRICAL',
    title: 'Floor Trunking & Raceways',
    desc: 'Laying clean UPS subpanels, floor pop-up boxes, and structured Cat6A cabling for zero-clutter desks.',
    tag: 'IS 732 CABLE MANAGEMENT',
  },
  {
    step: '06',
    phase: 'COMMISSIONING',
    title: 'TAB & Office Handover',
    desc: 'Acoustic decay audit, lux level calibration, airflow balancing, and facility management sign-off.',
    tag: 'BIFMA WORKSPACE HANDOVER',
  },
];

const officeWorkStrips = [
  {
    name: 'Physics Wallah (PW Vidyapeeth)',
    loc: 'Deoria',
    code: 'PRJ-UP-08',
    scope: 'Multi-Floor High-Density Education Campus HVAC, Turnkey Power MEP, Low-Noise Classrooms & Fresh Air Purging.',
    pills: ['75 TR VRF', '18,000 SQ.FT', 'HIGH DENSITY', 'EDUCATION SPEC'],
    img: '/images/projects/physics-wallah.jpg',
  },
  {
    name: 'Corporate Headquarters & Workspaces',
    loc: 'Indira Nagar & Gomti Nagar, Lucknow',
    code: 'PRJ-LKO-OFF',
    scope: 'Turnkey Executive Cabins, Acoustic Baffle Ceilings, Modular Workstation Power Raceways & Zoned VRF Multi-Splits.',
    pills: ['EXECUTIVE CABINS', 'NRC 0.85 BAFFLES', 'CAT6A RACEWAYS', 'LUCKNOW HQ'],
    img: '/images/industries/industry-corporate.jpg',
  },
  {
    name: 'Regional Financial & Corporate Offices',
    loc: 'Purvanchal Hubs',
    code: 'PRJ-REG-OFF',
    scope: 'Commercial Modernization, Soundproof Boardrooms, Clean Agent Fire Suppression & High-Efficiency Inverter Systems.',
    pills: ['35 TR VRV', 'STC 48 GLASS', 'SERVER PAC', 'TURNKEY MEP'],
    img: '/images/why-choose-us/why-project-support-lobby.jpg',
  },
];

const officeLedgerRows = [
  { code: 'SOL-OFF-01', title: 'Zoned Multi-Split VRV / VRF Comfort', desc: 'Ceiling cassette and concealed duct units providing individual room thermostats with simultaneous heat-recovery capability.', specs: 'INVERTER COMPRESSORS • LOW NOISE 28 DB(A) • BACNET BMS INTEGRATION' },
  { code: 'SOL-OFF-02', title: 'Acoustic Baffle Ceilings & Shadow Coves', desc: 'Suspended mineral fiber acoustic panels, felt baffles, and architectural linear LED profiles providing glare-free 400 lux desk illumination.', specs: 'UGR < 19 LOW GLARE • NRC 0.85 SOUND ABSORPTION • SHADOW-LINE EDGES' },
  { code: 'SOL-OFF-03', title: 'Treated Fresh Air Units (TFA) with Heat Recovery', desc: 'Energy Recovery Ventilators (ERV) with sensible and latent heat exchange rotors delivering continuous filtered fresh air at minimal energy cost.', specs: 'EFFICIENCY: 78% HEAT RECOVERY • DOUBLE-SKIN GSS CASING • MERV-13 FILTERS' },
  { code: 'SOL-OFF-04', title: 'Turnkey Cabins, Boardrooms & Glass Partitions', desc: '12mm architectural toughened glass partitions, acoustic rockwool drywall barriers, magnetic hardware, and ergonomic executive millwork.', specs: 'STC 45 SOUND ISOLATION • MATTE BLACK ANODIZED CHANNELS • ZERO VIBRATION' },
];

export default function OfficesIndustryPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Corporate & Cooperative Offices | Ambient Engineers Lucknow';
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
            <span className="cad-spec-code">SECTOR 03 // CORPORATE &amp; COOPERATIVE WORKSPACES</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">ASHRAE 55 COMFORT &bull; LEED GREEN &bull; STC 48 ACOUSTICS</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                CORPORATE &amp; COOPERATIVE OFFICES &bull;<br />
                <span className="cad-headline-accent">HIGH-PERFORMANCE WORKSPACES</span>
              </h1>
              <p className="cad-page-hero-lead">
                Productive, ergonomic and acoustically calibrated workspaces engineered for corporate headquarters, open developer floors, and executive suites across North India.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>ASHRAE 55 COMFORT</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>NRC 0.85 BAFFLES</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>CO2 &lt; 800 PPM</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>CAT6A RACEWAYS</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>PLAN WORKSPACE FIT-OUT</span>
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
                  <source src="/videos/industry-offices.mp4" type="video/mp4" />
                </video>
                <div className="cad-viewport-telemetry">
                  <div className="cad-video-indicator">
                    <span className="pulse-dot"></span>
                    <span>LIVE SIMULATION</span>
                  </div>
                  <div className="cad-telemetry-meta">SEC-03 // CORPORATE STREAM</div>
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
            <span className="cad-spec-code">CRITICAL DEMANDS // SEC-CRP-03</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">ACOUSTIC &amp; PRODUCTIVITY CRITERIA</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>WORKPLACE IAQ &amp; ACOUSTIC EQUILIBRIUM</h3>
              <p>Balancing employee acoustic privacy, high ventilation air exchange, and individual microclimate zones across collaborative office floors.</p>
            </div>
            <span className="cad-def-banner-tag">CORPORATE MATRIX</span>
          </div>

          <div className="cad-params-strip-row">
            {officeParameters.map((p, idx) => (
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
            <span className="cad-spec-title">WHAT IS OUR PLAN ON CORPORATE WORKSPACES?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON OFFICES &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">
                From heat diversity modeling to BIFMA testing and turnkey handover, synchronized for zero downtime:
              </p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {officePlanStages.map((stage, idx) => (
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
            <span className="cad-spec-title">WORK DONE ON CORPORATE &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON OFFICES &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">
                Corporate headquarters, high-density education campuses, and executive suites delivered across North India:
              </p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE OFFICE FIT-OUT</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {officeWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">ARCHITECTURAL WORKSPACE SPECIFICATIONS</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {officeLedgerRows.map((row, idx) => (
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
              <span className="cad-comp-badge">ASHRAE 55 COMFORT</span>
              <span className="cad-comp-badge">LEED GREEN BUILDING</span>
              <span className="cad-comp-badge">IS 732 WIRING CODE</span>
              <span className="cad-comp-badge">NBC PART 8 ACOUSTICS</span>
              <span className="cad-comp-badge">STC 48 ISOLATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
