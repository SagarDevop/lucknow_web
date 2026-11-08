import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const hvacParameters = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
    title: 'Temperature Control',
    desc: '23°C ± 1.0°C constant thermal equilibrium countering peak 47°C North India summers.',
    metric: '±1.0°C ACCURACY',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: 'Humidity (RH)',
    desc: 'Relative humidity maintained at 50% ± 5%, stopping monsoon dampness and electronic corrosion.',
    metric: 'RH 50% ± 5%',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      </svg>
    ),
    title: 'Air Purity & IAQ',
    desc: 'Continuous fresh air replenishment per ASHRAE 62.1, purging CO2 and dust via MERV-13 filters.',
    metric: 'MERV-13 &bull; ASHRAE 62.1',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </svg>
    ),
    title: 'Duct Aerodynamics',
    desc: 'Low-friction SMACNA sheet metal ducts delivering draft-free air under NC-32 acoustic noise.',
    metric: 'NOISE < NC-32',
  },
];

const hvacPlanStages = [
  {
    step: '01',
    phase: 'SURVEY',
    title: 'Heat Load Sizing',
    desc: 'Computerized building envelope solar gain, glass SHGC and occupant load calculation.',
    tag: 'TR & CFM SIZING SHEET',
  },
  {
    step: '02',
    phase: 'DESIGN',
    title: 'System Selection',
    desc: 'Engineering selection: Modular Inverter VRF vs Rooftop Packaged vs Central Chillers.',
    tag: 'TIER-1 OEM SELECTION',
  },
  {
    step: '03',
    phase: '3D BIM',
    title: 'Clash-Free Layout',
    desc: 'Coordinating duct runs and refrigerant lines against structural beams and fire pipes.',
    tag: 'COMBINED BIM DRAWINGS',
  },
  {
    step: '04',
    phase: 'ERECT',
    title: 'Duct & Pipe Erection',
    desc: 'CNC-cut GI ducting with Class-0 nitrile insulation & nitrogen-purged copper lines.',
    tag: '600 PSI HOLD TEST',
  },
  {
    step: '05',
    phase: 'AIRFLOW',
    title: 'Air Balancing (TAB)',
    desc: 'Calibrated anemometer audits ensuring uniform CFM at every diffuser grill without hot spots.',
    tag: 'ASHRAE 111 TAB LOG',
  },
  {
    step: '06',
    phase: 'HANDOVER',
    title: 'BMS Handover',
    desc: 'Centralized Modbus/BACnet integration, sensor calibration and 1-Year DLP dossier.',
    tag: '1-YR DLP & AS-BUILT CAD',
  },
];

const hvacWorkStrips = [
  {
    name: 'Star Light Palace',
    loc: 'Dubagga, Lucknow',
    code: 'PRJ-LKO-01',
    scope: '120 TR Grand Banquet VRF System, High-Throw Linear Slot Diffusers & Kitchen Exhaust.',
    pills: ['120 TR VRF', '42,000 CFM', 'NC-32 NOISE', 'BANQUET SPEC'],
    img: '/images/projects/starlight-palace.jpg',
  },
  {
    name: 'Azorte Flagship Apparel Store',
    loc: 'Gorakhpur',
    code: 'PRJ-UP-11',
    scope: 'High-Capacity Retail VRF Plant, Concealed Ducting Across Sales Floors & Entrance Air Curtains.',
    pills: ['85 TR VRF', '28,000 CFM', 'ZONED CASSETTES', 'AIR CURTAINS'],
    img: '/images/projects/azorte-gorakhpur.jpg',
  },
  {
    name: 'Emerald Paper Mills',
    loc: 'Mohanlalganj, Lucknow',
    code: 'PRJ-LKO-03',
    scope: 'Industrial Plant Heavy Ventilation, Process Dust Extraction & High-Volume Roof Axial Blowers.',
    pills: ['65,000 CFM', 'SMACNA GI', 'DUST EXTRACTION', 'HEAVY PLANT'],
    img: '/images/projects/emerald-paper.jpg',
  },
  {
    name: 'Geeta Wholesale Mart',
    loc: 'Padrauna',
    code: 'PRJ-UP-04',
    scope: 'Commercial Wholesale Hypermarket Packaged Ductables, Thermal Zoning for Grocery & Apparel.',
    pills: ['100 TR DUCTABLE', 'SPIRAL DUCTING', 'HIGH FOOTFALL', 'HYPERMARKET'],
    img: '/images/projects/geeta-mart.jpg',
  },
  {
    name: 'Maruti Suzuki Arena Showroom',
    loc: 'Sahadatganj, Faizabad',
    code: 'PRJ-UP-07',
    scope: 'Automotive Dealership VRF, High-Bay Jet Nozzle Diffusers Countering Glass Facade Solar Heat.',
    pills: ['60 TR VRF', 'JET NOZZLES', 'SOLAR BALANCED', 'SHOWROOM SPEC'],
    img: '/images/projects/arena-faizabad.jpg',
  },
  {
    name: 'Golden Paradise Resort Banquet',
    loc: 'Indira Nagar, Lucknow',
    code: 'PRJ-LKO-02',
    scope: 'Resort Central Air-Conditioning, High-Static Packaged Units with 45-Minute Rapid Pull-Down.',
    pills: ['90 TR HIGH-STATIC', '45-MIN PULL DOWN', 'SILENT OPERATION', 'RESORT SPEC'],
    img: '/images/projects/golden-paradise.jpg',
  },
];

const hvacLedgerRows = [
  { code: 'SYS-VRF-01', title: 'Commercial VRF / VRV Inverter Systems', desc: 'Modular multi-split heat pump & heat recovery systems with BACnet smart automation.', specs: 'CAPACITY: 4–120 HP • COP: 4.2+ • R-410A / R-32' },
  { code: 'SYS-CHL-02', title: 'Central Chiller Plants & Double-Skin AHUs', desc: 'Water-cooled & air-cooled centrifugal chillers paired with VFD floor-mounted AHUs.', specs: '100–1,200 TR • UP TO 50,000 CFM • VFD PRIMARY PUMPING' },
  { code: 'SYS-PKG-03', title: 'High-Static Ductable & Packaged Units', desc: 'Ceiling-suspended and rooftop packaged units delivering high external static pressure.', specs: 'STATIC PRESSURE: UP TO 250 Pa • COPPER CONDENSER' },
  { code: 'SYS-DCT-04', title: 'SMACNA Fabricated GI Ductwork & Diffusers', desc: 'CNC lock-formed rectangular & spiral GI ducts with Class-0 nitrile acoustic insulation.', specs: 'SMACNA CLASS • CLASS-0 NITRILE • LEAKAGE CLASS A' },
  { code: 'SYS-PIP-05', title: 'Nitrogen-Shielded Copper Piping & Drains', desc: 'Seamless deoxidized heavy-gauge copper lines brazed under nitrogen gas shielding.', specs: 'ASTM B280 COPPER • 600 PSI PRESSURE TEST • UV INSULATION' },
  { code: 'SYS-TFA-06', title: 'Treated Fresh Air (TFA) & Energy Recovery ERVs', desc: 'Enthalpy heat recovery wheels pre-conditioning incoming fresh air, lowering utility bills.', specs: '78% HEAT RECOVERY • MERV-13 IAQ • CO2 PURGING' },
];

export default function HvacWorksPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Commercial HVAC Engineering & VRF Systems | Ambient Engineers Lucknow';
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
            <span className="cad-spec-code">DISCIPLINE 01 // THERMAL &amp; AIR ENGINEERING</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">ASHRAE 62.1 &bull; 90.1 &bull; SMACNA CERTIFIED</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                COMMERCIAL HVAC WORKS &bull;<br />
                <span className="cad-headline-accent">VRF &amp; CHILLER INFRASTRUCTURE</span>
              </h1>
              <p className="cad-page-hero-lead">
                Turnkey commercial thermal comfort, energy-optimized air distribution, and central chiller infrastructure engineered for offices, retail, and hospitality across North India.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>4–120 HP MODULATION</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>±1.0°C PRECISION</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>35% POWER SAVINGS</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>ASHRAE 62.1 IAQ</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>REQUEST HVAC ESTIMATE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <span className="cad-cta-annotation">TEL: +91 97920 18889 &bull; LUCKNOW HQ</span>
              </div>
            </div>

            <div className="cad-page-hero-visual">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/services/hvac-cassette-ceiling.jpg"
                  alt="Commercial HVAC Ducting and VRF Installation"
                  className="cad-viewport-photo"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>VRF DEPLOYMENT</span>
                  </div>
                  <div className="cad-telemetry-meta">CFM BALANCED &bull; R-410A / R-32</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS HVAC? (VISUAL STRIP ARCHITECTURE) */}
      <section className="cad-def-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">KNOWLEDGE BASE // CORE DEFINITION</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS COMMERCIAL HVAC ENGINEERING?</span>
          </div>

          {/* Bold Architectural Definition Banner */}
          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>WHAT IS HVAC? // HEATING, VENTILATION &amp; AIR CONDITIONING</h3>
              <p>HVAC is the precise science of regulating Temperature, Relative Humidity, Air Purity (IAQ), and Static Pressure dynamics inside commercial buildings.</p>
            </div>
            <span className="cad-def-banner-tag">THERMODYNAMIC EQUILIBRIUM</span>
          </div>

          {/* 4-Column Visual Parameter Strip */}
          <div className="cad-params-strip-row">
            {hvacParameters.map((p, idx) => (
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

      {/* 3. WHAT IS OUR PLAN ON HVAC? (CONNECTED 6-PHASE PROCESS RIBBON) */}
      <section className="cad-process-ribbon-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">EXECUTION FRAMEWORK // 6-STAGE ROADMAP</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS OUR PLAN ON HVAC PROJECTS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON HVAC &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">Every deployment follows a disciplined engineering timeline from heat load survey to commissioning:</p>
            </div>
          </div>

          {/* Connected 6-Node Horizontal Process Strip */}
          <div className="cad-process-strip-timeline">
            {hvacPlanStages.map((stage, idx) => (
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

      {/* 4. WORK DONE ON HVAC (VISUAL PROJECT STRIPS) */}
      <section className="cad-work-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">OFFICIAL ARCHIVE // VERIFIED DEPLOYMENTS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WORK DONE ON HVAC &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON HVAC &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">Verified commercial HVAC projects delivered by Ambient Engineers across Uttar Pradesh:</p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE HVAC SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Visual Project Cards Grid */}
          <div className="cad-work-strip-grid">
            {hvacWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">HVAC DOMAIN MODULES</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {hvacLedgerRows.map((row, idx) => (
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

          {/* Horizontal Compliance Ribbon */}
          <div className="cad-compliance-ribbon">
            <span className="cad-compliance-label">STANDARDS &amp; CODE COMPLIANCE:</span>
            <div className="cad-compliance-badges-group">
              <span className="cad-comp-badge">ASHRAE 62.1 IAQ</span>
              <span className="cad-comp-badge">ASHRAE 90.1 ENERGY</span>
              <span className="cad-comp-badge">SMACNA DUCTING</span>
              <span className="cad-comp-badge">ASHRAE 111 TAB</span>
              <span className="cad-comp-badge">ASTM B280 COPPER</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
