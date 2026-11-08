import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const amcParameters = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '2-Hour Emergency SLA',
    desc: 'Rapid on-site emergency dispatch of certified engineering technicians within 120 minutes across UP.',
    metric: 'MAX 2-HR ON-SITE ARRIVAL',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h5l3 5 4-11 3 6h5" />
      </svg>
    ),
    title: 'Infrared Thermography',
    desc: 'Scanning LT panels and compressor terminals with FLIR thermal cameras to stop electrical fire hazards.',
    metric: 'FLIR THERMAL SCAN &bull; < 1°C',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Zero-Leak Refrigerant',
    desc: 'Electronic halogen leak detection on VRF joints, maintaining subcooling and stopping power bill surges.',
    metric: 'ELECTRONIC SNIFFER AUDIT',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: '100% Genuine OEM Spares',
    desc: 'Direct factory replacement parts from Daikin, Blue Star, Voltas, and Schneider with batch serial codes.',
    metric: 'OEM SPEC &bull; 1-YR WARRANTY',
  },
];

const amcPlanStages = [
  {
    step: '01',
    phase: 'AUDIT',
    title: 'Baseline Asset Health',
    desc: 'Baseline audit of all compressors, motor current draws, and operating refrigerant pressures.',
    tag: 'BASELINE CONDITION REPORT',
  },
  {
    step: '02',
    phase: 'CADENCE',
    title: 'Chemical Coil Washes',
    desc: 'High-pressure chemical foam coil washes, condenser descaling, filter cleanings, and drain sanitizing.',
    tag: 'SIGNED SERVICE CHECKLIST',
  },
  {
    step: '03',
    phase: 'DIAGNOSTICS',
    title: 'Megger & Vibration Test',
    desc: '1000V Megger motor winding tests and ISO 10816 electronic vibration analysis on fan blowers.',
    tag: 'PREDICTIVE DIAGNOSTIC LOG',
  },
  {
    step: '04',
    phase: 'SLA',
    title: '2-Hour Emergency SLA',
    desc: 'Round-the-clock priority dispatch arriving on site within 120 minutes with diagnostic kits.',
    tag: 'MAX 2-HR ARRIVAL SLA',
  },
  {
    step: '05',
    phase: 'SPARES',
    title: 'Genuine OEM Part Swap',
    desc: 'Replacing worn contactors, PCBs, and expansion valves with 100% genuine factory parts.',
    tag: '12-MONTH PART WARRANTY',
  },
  {
    step: '06',
    phase: 'EFFICIENCY',
    title: 'Quarterly Energy Dossier',
    desc: 'kW/TR efficiency evaluations, thermostat recalibration, and verified power bill savings reports.',
    tag: 'ENERGY SAVINGS AUDIT',
  },
];

const amcWorkStrips = [
  {
    name: 'IDFC First Bank Branch Network',
    loc: 'Sultanpur & Regional Hubs',
    code: 'PRJ-UP-05',
    scope: '24/7 Server Precision AC Maintenance, ATM Vestibule Climate Checks & 2-Hour Emergency SLA.',
    pills: ['99.99% UPTIME', '2-HR SLA DISPATCH', 'ZERO SHUTDOWNS', 'BANK SPEC'],
    img: '/images/projects/idfc-bank.jpg',
  },
  {
    name: 'Maruti Suzuki Arena Facilities',
    loc: 'Faizabad & Basti',
    code: 'PRJ-UP-07',
    scope: 'Automobile Dealership Full Facility AMC: VRF Systems, Substation Servicing & Compressor Overhauls.',
    pills: ['QUARTERLY DESCALING', 'INVERTER LOGS', 'GENUINE SPARES', 'SHOWROOM SPEC'],
    img: '/images/projects/arena-faizabad.jpg',
  },
  {
    name: 'Star Light Palace Grand Banquets',
    loc: 'Dubagga, Lucknow',
    code: 'PRJ-LKO-01',
    scope: 'Pre-Event Preventive Maintenance: 120 TR VRF Cooling Capacity Audits & Standby Event Support.',
    pills: ['PRE-EVENT TESTING', '24/7 STANDBY', 'KITCHEN EXHAUST', 'BANQUET SPEC'],
    img: '/images/projects/starlight-palace.jpg',
  },
  {
    name: 'Geeta Wholesale Mart',
    loc: 'Padrauna',
    code: 'PRJ-UP-04',
    scope: 'Hypermarket Packaged Ductable AMC: Filter Swaps, Belt Alignments & Refrigerant Tuning.',
    pills: ['100 TR PLANT AMC', '14% POWER SAVING', 'BIMONTHLY VISITS', 'HYPERMARKET'],
    img: '/images/projects/geeta-mart.jpg',
  },
  {
    name: 'Emerald Paper Mills',
    loc: 'Mohanlalganj, Lucknow',
    code: 'PRJ-LKO-03',
    scope: 'Industrial Manufacturing AMC: Blower Dynamic Balancing, Fire Pump Testing & Busbar Tightening.',
    pills: ['BLOWER BALANCING', 'FIRE PUMP AUTO', 'ZERO DEFECTS', 'PLANT SPEC'],
    img: '/images/projects/emerald-paper.jpg',
  },
  {
    name: 'Golden Paradise Resort Banquet',
    loc: 'Indira Nagar, Lucknow',
    code: 'PRJ-LKO-02',
    scope: 'Resort Central AC Maintenance, Hydro-Pneumatic Water Booster Checks & Sewage Pump Servicing.',
    pills: ['BOOSTER PUMP OVERHAUL', 'REFRIGERANT AUDIT', '2-HR ARRIVAL', 'RESORT SPEC'],
    img: '/images/projects/golden-paradise.jpg',
  },
];

const amcLedgerRows = [
  { code: 'AMC-PRV-01', title: 'Scheduled Preventative Maintenance Cycles', desc: 'Structured monthly chemical coil washes, condenser descaling & electronic control tuning.', specs: 'CADENCE: MONTHLY / QUARTERLY • DIGITAL CHECKLIST SIGN-OFF' },
  { code: 'AMC-DGN-02', title: 'Diagnostic System Health Check-ups', desc: 'FLIR infrared thermography, digital manifold gauges, and 1000V Megger insulation logs.', specs: 'FLIR FL-60 THERMOGRAPHY • ±0.5 PSI MANIFOLDS • 1000V MEGGER' },
  { code: 'AMC-SLA-03', title: 'Guaranteed Emergency Breakdown Response (SLA)', desc: 'Priority emergency dispatch with certified technicians on-site within 2 hours across UP.', specs: 'RESPONSE TIME: MAX 2 HOURS • 24/7/365 EMERGENCY HELPDESK' },
  { code: 'AMC-AST-04', title: 'Asset Lifespan Extension & Vibration Audits', desc: 'Dynamic balancing of fan wheels and anti-vibration mount swaps preventing motor failures.', specs: 'ISO 10816 VIBRATION STANDARDS • 5–8 YRS ASSET EXTENSION' },
  { code: 'AMC-ENR-05', title: 'Energy Optimization & Power Bill Reduction', desc: 'Superheat/subcool tuning and electronic leak detection lowering monthly power bills by 18%.', specs: '12%–18% ENERGY REDUCTION • ZERO LEAK PROTOCOL' },
  { code: 'AMC-SPR-06', title: '100% Genuine OEM Spares Replacement', desc: 'Direct factory spare sourcing from Daikin, Voltas, Blue Star, Schneider, and Grundfos.', specs: 'TIER-1 OEM SOURCING • 12-MONTH REPLACED PART WARRANTY' },
];

export default function AmcWorksPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Annual Maintenance Contracts (AMC) | Ambient Engineers Lucknow';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="cad-page-wrapper">
      {/* 1. VISUAL HERO STRIP */}
      <section className="cad-page-hero">
        <ScatteredDecor section="services" />
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">DISCIPLINE 04 // LIFECYCLE PRESERVATION &amp; AMC</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">2-HOUR SLA RESPONSE &bull; 100% GENUINE OEM SPARES</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                ANNUAL MAINTENANCE CONTRACTS &bull;<br />
                <span className="cad-headline-accent">2-HOUR EMERGENCY SLA &bull; OEM SPARES</span>
              </h1>
              <p className="cad-page-hero-lead">
                Ensure zero downtime and peak energy efficiency with certified commercial AMC contracts. Protecting HVAC plants, VRF systems, chillers, and electrical switchgear with guaranteed 2-hour emergency dispatch.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>MAX 2-HR ARRIVAL SLA</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>100% GENUINE OEM SPARES</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>FLIR THERMOGRAPHY</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>24/7 PRIORITY HELPDESK</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>ENQUIRE AMC CONTRACT</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <span className="cad-cta-annotation">24/7 HELPDESK: +91 97920 18889</span>
              </div>
            </div>

            <div className="cad-page-hero-visual">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/services/amc-technician-multimeter.jpg"
                  alt="Certified HVAC Engineer Testing Electrical Controls"
                  className="cad-viewport-photo"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>2-HR SLA ACTIVE</span>
                  </div>
                  <div className="cad-telemetry-meta">OEM SPARES &bull; PREDICTIVE FLIR AUDIT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS AN AMC? (VISUAL STRIP ARCHITECTURE) */}
      <section className="cad-def-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">KNOWLEDGE BASE // CORE DEFINITION</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS A COMMERCIAL AMC CONTRACT?</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>WHAT IS AN AMC? // PREDICTIVE PROTECTION VS COSTLY BREAKDOWNS</h3>
              <p>A commercial AMC is an active lifecycle health agreement ensuring scheduled chemical maintenance, predictive diagnostics, and guaranteed emergency dispatch to prevent multi-lakh plant failures.</p>
            </div>
            <span className="cad-def-banner-tag">ASSET PRESERVATION</span>
          </div>

          <div className="cad-params-strip-row">
            {amcParameters.map((p, idx) => (
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

      {/* 3. WHAT IS OUR PLAN ON AMC? (CONNECTED 6-PHASE PROCESS RIBBON) */}
      <section className="cad-process-ribbon-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">EXECUTION FRAMEWORK // 6-STAGE ROADMAP</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS OUR PLAN ON AMC CONTRACTS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON AMC &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">From baseline health audits to scheduled chemical maintenance and rapid emergency dispatch:</p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {amcPlanStages.map((stage, idx) => (
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

      {/* 4. WORK DONE ON AMC (VISUAL PROJECT STRIPS) */}
      <section className="cad-work-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">OFFICIAL ARCHIVE // VERIFIED DEPLOYMENTS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WORK DONE ON AMC &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON AMC &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">Active commercial facilities and retail networks under Ambient Engineers maintenance management:</p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE AMC FOR YOUR SITE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {amcWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">AMC LIFECYCLE MODULES</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {amcLedgerRows.map((row, idx) => (
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
              <span className="cad-comp-badge">ISO 10816 VIBRATION</span>
              <span className="cad-comp-badge">IEEE 43 MEGGER</span>
              <span className="cad-comp-badge">ASTM E1934 THERMOGRAPHY</span>
              <span className="cad-comp-badge">ASHRAE GUIDELINE 4</span>
              <span className="cad-comp-badge">OEM CERTIFIED SPARES</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
