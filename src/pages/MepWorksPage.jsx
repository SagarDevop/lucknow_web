import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const mepParameters = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: '415V Power Distribution',
    desc: 'Balanced 3-phase loads with automated APFC power factor correction of 0.99 and harmonic control.',
    metric: 'APFC 0.99 &bull; THD < 3%',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Chemical Earthing',
    desc: 'Maintenance-free copper-bonded earth pits providing low impedance protection for equipment.',
    metric: '< 1.0 OHM &bull; IS 3043',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Hydro-Pneumatic PHE',
    desc: 'Multi-pump variable speed booster sets delivering constant water pressure to all upper levels.',
    metric: '3.5–5.0 KG/CM² CONSTANT',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Fire Life Safety',
    desc: 'Automated wet risers with main electric, diesel standby, and jockey pumps complying with Fire NOC.',
    metric: 'NBC PART 4 &bull; CFO NOC',
  },
];

const mepPlanStages = [
  {
    step: '01',
    phase: 'LOAD AUDIT',
    title: 'Connected Load & SLD',
    desc: 'Connected kVA audit, Single Line Diagram design, circuit breaker sizing and hydraulic demand.',
    tag: 'CERTIFIED SLD SCHEMATIC',
  },
  {
    step: '02',
    phase: '3D BIM',
    title: 'Service Shaft Routing',
    desc: 'Coordinating vertical risers and horizontal corridors to eliminate inter-trade clashes.',
    tag: 'COMBINED SERVICES CSD',
  },
  {
    step: '03',
    phase: 'PANELS',
    title: 'Switchgear Erection',
    desc: 'Assembling 415V PCC/MCC panels, busbar trunking systems and automatic transfer switches.',
    tag: 'IP55 SWITCHGEAR CERTS',
  },
  {
    step: '04',
    phase: 'CONTAINMENT',
    title: 'Cable Trays & Grounding',
    desc: 'Hot-dip GI cable trays, FRLS multi-core power feeders, and chemical earthing electrodes.',
    tag: 'MEGGER INSULATION LOGS',
  },
  {
    step: '05',
    phase: 'HYDRAULICS',
    title: 'Fire & Water Hydro-Test',
    desc: 'Class-C MS fire lines, ceiling sprinklers and CPVC piping with 16-bar hydrostatic hold test.',
    tag: '24-HR 16-BAR PRESSURE HOLD',
  },
  {
    step: '06',
    phase: 'STATUTORY',
    title: 'CFO NOC & Inspectorate',
    desc: 'Live pump auto-trip testing, diesel generator synchronization, and statutory government sign-offs.',
    tag: 'GOVERNMENT CFO FIRE NOC',
  },
];

const mepWorkStrips = [
  {
    name: 'Maruti Suzuki Arena Facility',
    loc: 'Basti',
    code: 'PRJ-UP-10',
    scope: 'Complete Turnkey MEP: Main LT Switchgear, Transformer Substation, Cable Trays & Fire Life Safety.',
    pills: ['250 KVA SUBSTATION', '3200A BUSBAR', 'WORKSHOP MEP', 'FIRE HYDRANTS'],
    img: '/images/projects/arena-basti.jpg',
  },
  {
    name: 'IDFC First Bank',
    loc: 'Sultanpur Branch',
    code: 'PRJ-UP-05',
    scope: 'Critical Banking Power MEP: Dual-Source Auto Transfer Switchgear & Server Room Precision Grounding.',
    pills: ['DUAL-SOURCE POWER', '< 0.8 OHM EARTHING', 'CAT6A DATA', 'BANK SPEC'],
    img: '/images/projects/idfc-bank.jpg',
  },
  {
    name: 'Golden Paradise Resort Banquet',
    loc: 'Indira Nagar, Lucknow',
    code: 'PRJ-LKO-02',
    scope: 'Resort Turnkey Plumbing: Hydro-Pneumatic Booster Pumps, Deep Drainage & 8.5 Bar Fire Hydrants.',
    pills: ['HYDRO-PNEUMATIC PUMPS', '8.5 BAR FIRE RISER', 'DG SYNC', 'RESORT SPEC'],
    img: '/images/projects/golden-paradise.jpg',
  },
  {
    name: 'Emerald Paper Mills',
    loc: 'Mohanlalganj, Lucknow',
    code: 'PRJ-LKO-03',
    scope: 'Industrial Manufacturing MEP: High-Voltage Power Distribution, Heavy MCC Panels & Yard Hydrants.',
    pills: ['HEAVY MCC PANELS', '16-BAR YARD HYDRANTS', 'PROCESS WATER', 'PLANT SPEC'],
    img: '/images/projects/emerald-paper.jpg',
  },
  {
    name: 'Star Light Palace',
    loc: 'Dubagga, Lucknow',
    code: 'PRJ-LKO-01',
    scope: 'Banquet Luxury MEP: 3-Phase Main LT Distribution, Synchronized Diesel Generators & Kitchen Drainage.',
    pills: ['DUAL DG SYNC', 'GREASE TRAP DRAINAGE', 'CHANDELIER FEEDS', 'BANQUET SPEC'],
    img: '/images/projects/starlight-palace.jpg',
  },
  {
    name: 'Geeta Wholesale Mart',
    loc: 'Padrauna',
    code: 'PRJ-UP-04',
    scope: 'Hypermarket Turnkey MEP: Commercial Lighting Busways, Cash Desk Clean Power & Auto Sprinklers.',
    pills: ['LIGHTING BUSWAYS', 'FIRE SPRINKLERS', 'SUB-METERED POWER', 'HYPERMARKET'],
    img: '/images/projects/geeta-mart.jpg',
  },
];

const mepLedgerRows = [
  { code: 'SYS-ELE-01', title: 'LT / HT Electrical Switchgear & Distribution Panels', desc: 'Custom 415V 3-phase LT panels, MCC, PCC, and automated APFC power factor banks.', specs: 'VOLTAGE: 415V 3Φ • BUSBAR: E91E COPPER/ALUMINUM • ENCLOSURE: IP55' },
  { code: 'SYS-CBL-02', title: 'Cable Trays, Containment & Power Cabling', desc: 'Pre-galvanized & hot-dip GI cable trays, ladder raceways, and FRLS multi-core power feeds.', specs: 'IS 694 / IS 1554 • HOT-DIP GALVANIZED • FIRE RETARDANT LOW SMOKE' },
  { code: 'SYS-EAR-03', title: 'Chemical Earthing & Lightning Defense Pits', desc: 'Copper-bonded steel chemical electrodes with carbon backfill compound & ESE arresters.', specs: 'RESISTANCE: < 1.0 OHM • IS 3043 / IEEE 80 / NFC 17-102 COMPLIANT' },
  { code: 'SYS-PHE-04', title: 'Hydro-Pneumatic Water Supply & Waste Sanitation', desc: 'Multi-pump variable speed booster skids, water softening plants, and SWR drainage manifolds.', specs: 'SDR-11 CPVC RISERS • RING-SEALED SWR • PRESSURE: 3.5–5.0 BAR' },
  { code: 'SYS-FIR-05', title: 'Fire Hydrant Wet Risers & Ceiling Sprinklers', desc: 'Heavy MS ERW wet risers, landing valves, hose reels, and automated triple-pump skids.', specs: 'NBC 2016 PART 4 • PUMP PRESSURE: 7.0–10.5 KG/CM² • CFO NOC COMPLIANT' },
  { code: 'SYS-STP-06', title: 'Sewage Treatment (STP) & Water Reclamation', desc: 'Biological MBBR treatment plants, tertiary sand/carbon filters, and cooling tower reuse lines.', specs: 'CPCB DISCHARGE NORMS • ZERO LIQUID DISCHARGE CAPABLE' },
];

export default function MepWorksPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Turnkey MEP Contracting & Engineering | Ambient Engineers Lucknow';
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
            <span className="cad-spec-code">DISCIPLINE 02 // MULTI-DISCIPLINARY MEP WORKS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">IS 732 &bull; IS 3043 &bull; NBC 2016 PART 4 CERTIFIED</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                TURNKEY MEP WORKS &bull;<br />
                <span className="cad-headline-accent">ELECTRICAL, PLUMBING &amp; FIRE SAFETY</span>
              </h1>
              <p className="cad-page-hero-lead">
                Unified Mechanical, Electrical, and Plumbing (MEP) infrastructure delivered under a single accountable contract for corporate towers, bank branches, showrooms, and industrial plants.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>415V 3Φ DISTRIBUTION</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>&lt; 1.0 OHM EARTHING</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>APFC 0.99 POWER FACTOR</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>NBC 2016 PART 4 NOC</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>REQUEST MEP PROPOSAL</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <span className="cad-cta-annotation">TEL: +91 97920 18889 &bull; SINGLE-POINT CONTRACT</span>
              </div>
            </div>

            <div className="cad-page-hero-visual">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/services/mep-electrical-panel.jpg"
                  alt="Commercial LT Electrical Panel and Busbar Assembly"
                  className="cad-viewport-photo"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>415V SWITCHGEAR READY</span>
                  </div>
                  <div className="cad-telemetry-meta">IP55 ENCLOSURE &bull; IS 732 COMPLIANT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS MEP? (VISUAL STRIP ARCHITECTURE) */}
      <section className="cad-def-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">KNOWLEDGE BASE // CORE DEFINITION</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS INTEGRATED MEP ENGINEERING?</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>WHAT IS MEP? // MECHANICAL, ELECTRICAL &amp; PLUMBING</h3>
              <p>MEP is the operational nervous and circulatory infrastructure of a building — powering lights and machines, circulating pressurized water, and protecting human life from fire.</p>
            </div>
            <span className="cad-def-banner-tag">BUILDING NERVOUS SYSTEM</span>
          </div>

          <div className="cad-params-strip-row">
            {mepParameters.map((p, idx) => (
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

      {/* 3. WHAT IS OUR PLAN ON MEP? (CONNECTED 6-PHASE PROCESS RIBBON) */}
      <section className="cad-process-ribbon-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">EXECUTION FRAMEWORK // 6-STAGE ROADMAP</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS OUR PLAN ON MEP PROJECTS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON MEP &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">Disciplined engineering eliminating spatial clashes between wires, pipes, and ceilings before execution:</p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {mepPlanStages.map((stage, idx) => (
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

      {/* 4. WORK DONE ON MEP (VISUAL PROJECT STRIPS) */}
      <section className="cad-work-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">OFFICIAL ARCHIVE // VERIFIED DEPLOYMENTS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WORK DONE ON MEP &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON MEP &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">Verified turnkey MEP deployments across Uttar Pradesh delivered by Ambient Engineers:</p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE MEP SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {mepWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">MEP INFRASTRUCTURE MODULES</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {mepLedgerRows.map((row, idx) => (
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
              <span className="cad-comp-badge">IS 732 WIRING</span>
              <span className="cad-comp-badge">IS 3043 EARTHING</span>
              <span className="cad-comp-badge">NBC 2016 PART 4</span>
              <span className="cad-comp-badge">IEC 61439 SWITCHGEAR</span>
              <span className="cad-comp-badge">UPC-INDIA PLUMBING</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
