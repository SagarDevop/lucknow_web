import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const banquetParameters = [
  {
    code: 'PARAM-01',
    metric: '45-MIN PULL DOWN',
    title: 'Extreme Rapid Thermal Pull-Down',
    desc: 'Grand banquet halls must pull room temperature down from 45°C ambient to 22°C within 45 minutes as 500 to 1,500 guests arrive simultaneously.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
  {
    code: 'PARAM-02',
    metric: 'NC 30–35 NOISE CRITERIA',
    title: 'Acoustic Containment & Zero Rattle',
    desc: 'Lavish weddings and corporate keynotes demand silent HVAC operation with heavy acoustic duct lining to eliminate air roar and fan whine.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    code: 'PARAM-03',
    metric: 'NFPA 96 COMPLIANT',
    title: 'Kitchen Ventilation & Grease Purge',
    desc: 'Heavy commercial catering produces massive heat, grease, and spices that must be captured by NFPA 96 exhaust hoods with makeup air.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    code: 'PARAM-04',
    metric: '10–100% VFD DIVERSITY',
    title: 'Staged Power & Chiller Diversity',
    desc: 'Facilities remain empty during preparation and surge to 100% capacity during events, requiring stepped compressors and dual DG sync.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const banquetPlanStages = [
  {
    step: '01',
    phase: 'THERMAL SURGE',
    title: 'Occupant Heat Surge Sizing',
    desc: 'Calculating sensible and latent heat loads for 500+ guests, catering buffets, and stage illumination.',
    tag: 'PEAK SURGE CALCULATION',
  },
  {
    step: '02',
    phase: 'CHILLED AHU',
    title: 'Double-Skin AHU Erection',
    desc: 'Installing double-skin 35,000 CFM air handling units with low face velocity coils for draft-free cooling.',
    tag: 'DOUBLE-SKIN 35,000 CFM AHU',
  },
  {
    step: '03',
    phase: 'ACOUSTICS',
    title: 'NC-30 Duct Soundproofing',
    desc: 'Applying Class-0 acoustic nitrile lining, sound attenuators, and flexible canvas vibration isolators.',
    tag: 'NC-30 SILENT DUCTWORK',
  },
  {
    step: '04',
    phase: 'KITCHEN EXHAUST',
    title: 'NFPA 96 Hoods & Scrubbers',
    desc: 'Fabricating heavy 18-gauge SS304 kitchen exhaust hoods with baffle filters and 2-hr fire-rated duct wraps.',
    tag: 'SS304 COMMERCIAL HOODS',
  },
  {
    step: '05',
    phase: 'DG BACKUP',
    title: 'Dual DG Auto-Synchronizing',
    desc: 'Commissioning automatic AMF changeover panels with synchronized generator feeds for zero blackouts during events.',
    tag: 'AMF AUTO-SYNC SWITCHGEAR',
  },
  {
    step: '06',
    phase: 'LIVE TEST',
    title: 'Full-Load Thermal Trial',
    desc: 'Performing live smoke purge, airflow swirl distribution balancing, and banquet handover sign-off.',
    tag: 'BANQUET LAUNCH CLEARANCE',
  },
];

const banquetWorkStrips = [
  {
    name: 'Star Light Palace',
    loc: 'Dubagga, Lucknow',
    code: 'PRJ-LKO-01',
    scope: 'Grand Banquet Central HVAC Plant, Long-Throw Aerodynamic Swirl Diffusers, Grand Hall False Ceilings & Turnkey MEP.',
    pills: ['120 TR CENTRAL', '35,000 CFM', 'NC-32 ACOUSTICS', 'DUBAGGA LKO'],
    img: '/images/projects/starlight-palace.jpg',
  },
  {
    name: 'Golden Paradise Resort Banquet',
    loc: 'Indira Nagar, Lucknow',
    code: 'PRJ-LKO-02',
    scope: 'Resort Central Air-Conditioning, Double-Skin AHUs, Turnkey Power MEP & Life Safety Fire Hydrant Ring.',
    pills: ['90 TR CHILLER', 'FIRE HYDRANTS', 'DUAL DG SYNC', 'RESORT SPEC'],
    img: '/images/projects/golden-paradise.jpg',
  },
  {
    name: 'Regional Hospitality Ballrooms & Pavilions',
    loc: 'Awadh Region',
    code: 'PRJ-REG-BNQ',
    scope: 'Multi-Tier Event Ballrooms, NFPA 96 Kitchen Exhaust Hoods, Stepped VRF Inverters & Chandelier Electrical Mounting.',
    pills: ['70 TR DUCTABLE', 'SS304 HOODS', 'SWIRL DIFFUSERS', 'HOSPITALITY'],
    img: '/images/industries/industry-banquet.jpg',
  },
];

const banquetLedgerRows = [
  { code: 'SOL-BNQ-01', title: 'High-Static Double-Skin AHU & Chiller Plants', desc: 'Floor-mounted double-skin air handling units with forward-curved / airfoil centrifugal blowers paired with modular air-cooled scroll chillers.', specs: 'AIRFLOW: UP TO 35,000 CFM • DOUBLE SKIN 25/50MM PUF • CLASS-0 ACOUSTIC LINING' },
  { code: 'SOL-BNQ-02', title: 'Grand Ceiling Integrated Slot & Swirl Diffusers', desc: 'Continuous linear slot diffusers integrated invisibly into multi-tier gypsum bulkheads, cove lighting channels, and chandelier coffers.', specs: 'SWIRL DIFFUSERS FOR RAPID MIXING • SHADOW COVE INTEGRATION • ZERO DRAPING CONDENSATION' },
  { code: 'SOL-BNQ-03', title: 'NFPA Commercial Kitchen Exhaust & Makeup Air', desc: 'Heavy 18-gauge SS304 kitchen exhaust hoods with baffle filters, fire-rated duct wraps, centrifugal inline exhaust fans, and tempered makeup air.', specs: 'SS304 HOODS • GREASE CAPTURE EFFICIENCY: 95% • 2-HR FIRE DUCT WRAP' },
  { code: 'SOL-BNQ-04', title: 'Turnkey Luxury Electrical, DG Backup & Grand Chandeliers', desc: 'Heavy 3-phase LT distribution switchboards, automatic AMF panels for dual diesel generator synchronizing, and high-load structural chandelier mounts.', specs: 'AMF GENERATOR SYNC • LIGHTING SCENE DIMMING • COPPER HEAVY FEEDERS' },
];

export default function BanquetHallsIndustryPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Banquet Halls & Hospitality Resorts | Ambient Engineers Lucknow';
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
            <span className="cad-spec-code">SECTOR 05 // GRAND BANQUETS &amp; HOSPITALITY RESORTS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">HIGH DIVERSITY HVAC &bull; NC 30 ACOUSTICS &bull; NFPA 96 EXHAUST</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                BANQUET HALLS &amp; RESORTS &bull;<br />
                <span className="cad-headline-accent">HIGH-CAPACITY CLIMATE &amp; MEP</span>
              </h1>
              <p className="cad-page-hero-lead">
                Expansive, acoustically refined gathering destinations engineered for rapid heat pull-down, high-capacity commercial kitchen exhaust, and synchronized power backup across Uttar Pradesh.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>45-MIN PULL-DOWN</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>NC-30 SILENT HVAC</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>NFPA 96 EXHAUST</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>DUAL DG AUTO-SYNC</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>PLAN BANQUET INFRASTRUCTURE</span>
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
                  <source src="/videos/industry-banquet.mp4" type="video/mp4" />
                </video>
                <div className="cad-viewport-telemetry">
                  <div className="cad-video-indicator">
                    <span className="pulse-dot"></span>
                    <span>LIVE SIMULATION</span>
                  </div>
                  <div className="cad-telemetry-meta">SEC-05 // HOSPITALITY STREAM</div>
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
            <span className="cad-spec-code">CRITICAL DEMANDS // SEC-BNQ-05</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">HIGH-OCCUPANCY THERMAL &amp; VENTILATION CRITERIA</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>PULL-DOWN DYNAMICS &amp; TRANSIENT GUEST HEAT LOADS</h3>
              <p>Engineering chilled water AHUs and multi-stage packaged plants to absorb sudden 500+ guest footfalls without thermal lag, air stagnant spots, or acoustic duct noise.</p>
            </div>
            <span className="cad-def-banner-tag">HOSPITALITY MATRIX</span>
          </div>

          <div className="cad-params-strip-row">
            {banquetParameters.map((p, idx) => (
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
            <span className="cad-spec-title">WHAT IS OUR PLAN ON BANQUETS &amp; RESORTS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON BANQUETS &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">
                From peak thermal surge calculations to silent NC-30 acoustic attenuation and synchronized generator handover:
              </p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {banquetPlanStages.map((stage, idx) => (
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
            <span className="cad-spec-title">WORK DONE ON BANQUETS &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON BANQUETS &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">
                Grand banquet palaces and luxury hospitality resorts commissioned across Uttar Pradesh:
              </p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE BANQUET SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {banquetWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">HOSPITALITY SYSTEM ARCHITECTURE</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {banquetLedgerRows.map((row, idx) => (
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
              <span className="cad-comp-badge">ISHRAE HIGH-DIVERSITY</span>
              <span className="cad-comp-badge">NFPA 96 COMMERCIAL HOODS</span>
              <span className="cad-comp-badge">NBC 2016 PART 4 HYDRANTS</span>
              <span className="cad-comp-badge">NC-30 SILENT HVAC</span>
              <span className="cad-comp-badge">AMF DG SYNCHRONIZING</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
