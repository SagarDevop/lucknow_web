import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const fitoutParameters = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    title: 'Acoustic Privacy',
    desc: 'High-density rockwool drywall barriers stopping voice bleed into boardroom cabins.',
    metric: 'STC 48+ &bull; NRC 0.85',
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
    title: 'Architectural Lux',
    desc: 'Glare-free UGR < 19 downlighting with shadow-cove illumination enhancing brand aesthetics.',
    metric: 'UGR < 19 &bull; CRI > 90',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: 'Heavy-Traffic Flooring',
    desc: 'Laser-screeded porcelain tiles and seamless self-leveling epoxies built for foot traffic.',
    metric: 'MOHS 7+ &bull; ±1.0MM LEVEL',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'MEP Concealment',
    desc: 'AC ducts, sprinklers, and raceways seamlessly hidden behind flush ceiling access panels.',
    metric: 'FLUSH TRAPDOOR ACCESS',
  },
];

const fitoutPlanStages = [
  {
    step: '01',
    phase: 'SURVEY',
    title: '3D Spatial Planning',
    desc: 'Laser site survey, 3D architectural walkthroughs, and executive furniture space planning.',
    tag: '3D BLUEPRINT RENDERS',
  },
  {
    step: '02',
    phase: 'SUBSTRUCTURE',
    title: 'Floor Screed & Studs',
    desc: 'Polymer self-leveling subfloor screeds and galvanized steel drywall framing.',
    tag: 'LASER LEVEL ±1.0MM',
  },
  {
    step: '03',
    phase: 'CEILINGS',
    title: 'Acoustic Ceilings',
    desc: 'Multi-tier moisture gypsum, Armstrong mineral fiber tiles and aluminum linear baffles.',
    tag: '2-HR FIRE CLASS-0',
  },
  {
    step: '04',
    phase: 'GLASS',
    title: 'Frameless Partitions',
    desc: '12mm toughened frameless clear glass cabins with matte black anodized hardware.',
    tag: 'SOUNDPROOF CABINS',
  },
  {
    step: '05',
    phase: 'FLOORING',
    title: 'Porcelain & Resins',
    desc: 'Large-format porcelain tiles, epoxy grouting, and modular commercial carpet tiles.',
    tag: 'ANTI-STAIN PORCELAIN',
  },
  {
    step: '06',
    phase: 'HANDOVER',
    title: 'Millwork & Handover',
    desc: 'Custom reception millwork, white-glove cleaning, and zero-snag client audit sign-off.',
    tag: 'ZERO-SNAG & 12-MO DLP',
  },
];

const fitoutWorkStrips = [
  {
    name: 'Reliance Jewels Showroom',
    loc: 'Jhansi',
    code: 'PRJ-UP-09',
    scope: 'Luxury Jewelry Boutique Fit-Out: Custom Glass Vitrines, Multi-Tier Gypsum & 95+ CRI Diamond Lighting.',
    pills: ['LUXURY MILLWORK', '95+ CRI LIGHTING', 'DIAMOND VITRINES', 'SECURE CASHIERS'],
    img: '/images/projects/reliance-jewels.jpg',
  },
  {
    name: 'Aisshpra Gems & Jewels',
    loc: 'Azamgarh',
    code: 'PRJ-UP-12',
    scope: 'Premium Jewelry Commercial Interior: Custom Perimeter Casework, Laser-Leveled Vitrified Floors & Frameless Glass.',
    pills: ['CUSTOM CASEWORK', 'LASER PORCELAIN', 'GOLD COVES', 'SHOWROOM SPEC'],
    img: '/images/projects/aisshpra-jewels.jpg',
  },
  {
    name: 'Geeta Wholesale Mart',
    loc: 'Padrauna',
    code: 'PRJ-UP-04',
    scope: 'Commercial Wholesale Hypermarket Fit-Out: Heavy Industrial Floor Tiling, Structural Racks & Checkout Pods.',
    pills: ['45,000 SQ.FT', 'HEAVY AXLE TILES', 'MERCHANDISE RACKS', 'HYPERMARKET'],
    img: '/images/projects/geeta-mart.jpg',
  },
  {
    name: 'Star Light Palace',
    loc: 'Dubagga, Lucknow',
    code: 'PRJ-LKO-01',
    scope: 'Grand Banquet Luxury Interior: Acoustic Multi-Tier Ceiling Domes, Crystal Chandelier Mounts & VIP Suites.',
    pills: ['COFFER CEILINGS', 'CHANDELIER MOUNTS', 'VIP BRIDAL SUITES', 'MARBLE FOYER'],
    img: '/images/projects/starlight-palace.jpg',
  },
  {
    name: 'IDFC First Bank',
    loc: 'Sultanpur Branch',
    code: 'PRJ-UP-05',
    scope: 'Turnkey Banking Hall Interior: STC 48+ Acoustic Drywalls, Toughened Frameless Glass & Anti-Skid Tiling.',
    pills: ['STC 48+ WALLS', 'TOUGHENED GLASS', 'ATM VESTIBULE', 'BANK SPEC'],
    img: '/images/projects/idfc-bank.jpg',
  },
  {
    name: 'Physics Wallah (PW Vidyapeeth)',
    loc: 'Deoria',
    code: 'PRJ-UP-08',
    scope: 'Multi-Floor High-Density Education Campus: Acoustic Lecture Hall Ceilings, Faculty Cabins & Durable Floors.',
    pills: ['HIGH DENSITY', 'ACOUSTIC HALLS', 'FACULTY CABINS', 'CAMPUS SPEC'],
    img: '/images/projects/physics-wallah.jpg',
  },
];

const fitoutLedgerRows = [
  { code: 'FIT-CEL-01', title: 'Architectural False Ceilings & Bulkheads', desc: 'Suspended multi-tier gypsum board, Armstrong acoustic tiles & aluminum linear baffles.', specs: '2-HOUR GYPSUM • ACOUSTIC NRC 0.85 • GI T-BAR SUSPENSION' },
  { code: 'FIT-PAR-02', title: 'Demountable Acoustic & Frameless Glass Partitions', desc: 'High-acoustic drywall partitions with rockwool infill & 12mm toughened frameless glass.', specs: 'STC 48+ SOUND ISOLATION • 12mm TOUGHENED CLEAR • MATTE BLACK' },
  { code: 'FIT-FLR-03', title: 'Commercial Flooring & Specialist Resins', desc: 'Heavy vitrified floor tiling, seamless 3mm self-leveling epoxy & modular carpet tiles.', specs: 'UP TO 1200×1800mm TILES • 3mm EPOXY SCREED • 50KN ACCESS FLOOR' },
  { code: 'FIT-RET-04', title: 'Retail Showroom & Brand Store Casework', desc: 'Bespoke retail fixtures, display vitrines, CNC-routed brand walls & 90+ CRI spotlighting.', specs: 'MARINE-GRADE PLY • PU MATTE FINISH • SOFT-CLOSE HARDWARE' },
  { code: 'FIT-OFF-05', title: 'Corporate Workspace Execution & Cabins', desc: 'Managing director suites, boardroom tables & modular workstations with data raceways.', specs: 'BIFMA ERGONOMIC • CAT6A UNDER-DESK DATA • LOW-VOC FINISHES' },
  { code: 'FIT-TRN-06', title: 'Turnkey Handover & Single-Point Delivery', desc: 'Unified site execution combining civil finishes, carpentry, HVAC duct concealment & lighting.', specs: 'TOLERANCE ±1.0mm LASER LEVEL • 12-MONTH DLP WARRANTY' },
];

export default function InteriorFitOutPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Commercial Interior Fit-Out Contracting | Ambient Engineers Lucknow';
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
            <span className="cad-spec-code">DISCIPLINE 03 // ARCHITECTURAL INTERIOR FIT-OUT</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">BIFMA ERGONOMICS &bull; STC 48+ &bull; TURNKEY EXECUTION</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                COMMERCIAL INTERIOR FIT-OUT &bull;<br />
                <span className="cad-headline-accent">OFFICES, RETAIL &amp; SHOWROOMS</span>
              </h1>
              <p className="cad-page-hero-lead">
                Transforming bare commercial shells into luxurious, acoustically tuned, and high-productivity spaces. Full turnkey execution combining false ceilings, frameless glass cabins, and heavy flooring.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>STC 48+ ACOUSTIC</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>UGR &lt; 19 LOW GLARE</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>MOHS 7+ PORCELAIN</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>BIFMA ERGONOMICS</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>DISCUSS FIT-OUT SCOPE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <span className="cad-cta-annotation">TEL: +91 97920 18889 &bull; SINGLE-POINT ACCOUNTABILITY</span>
              </div>
            </div>

            <div className="cad-page-hero-visual">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/services/fitout-luxury-reception.jpg"
                  alt="Modern Commercial Interior Fit-Out"
                  className="cad-viewport-photo"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>TURNKEY FIT-OUT</span>
                  </div>
                  <div className="cad-telemetry-meta">ACOUSTIC NRC 0.85 &bull; LASER LEVEL ±1.0MM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS COMMERCIAL INTERIOR FIT-OUT? (VISUAL STRIP ARCHITECTURE) */}
      <section className="cad-def-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">KNOWLEDGE BASE // CORE DEFINITION</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS COMMERCIAL INTERIOR FIT-OUT?</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>WHAT IS INTERIOR FIT-OUT? // FROM BARE SHELL TO INSPIRING PHYSICAL SPACE</h3>
              <p>Commercial fit-out transforms raw concrete into an operational, brand-aligned interior, engineering acoustic partitions, frameless glass cabins, and concealed MEP services.</p>
            </div>
            <span className="cad-def-banner-tag">ARCHITECTURAL TRANSFORMATION</span>
          </div>

          <div className="cad-params-strip-row">
            {fitoutParameters.map((p, idx) => (
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

      {/* 3. WHAT IS OUR PLAN ON FIT-OUT? (CONNECTED 6-PHASE PROCESS RIBBON) */}
      <section className="cad-process-ribbon-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">EXECUTION FRAMEWORK // 6-STAGE ROADMAP</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS OUR PLAN ON FIT-OUT PROJECTS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON FIT-OUT &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">Rigorous milestone-based interior construction ensuring zero delays and white-glove finishing:</p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {fitoutPlanStages.map((stage, idx) => (
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

      {/* 4. WORK DONE ON FIT-OUT (VISUAL PROJECT STRIPS) */}
      <section className="cad-work-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">OFFICIAL ARCHIVE // VERIFIED DEPLOYMENTS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WORK DONE ON FIT-OUT &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON FIT-OUT &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">Luxury jewelry boutiques, commercial hypermarkets, corporate suites &amp; banquets completed by Ambient Engineers:</p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE FIT-OUT SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {fitoutWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">INTERIOR FIT-OUT MODULES</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {fitoutLedgerRows.map((row, idx) => (
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
              <span className="cad-comp-badge">ASTM E90 ACOUSTICS</span>
              <span className="cad-comp-badge">BS 476 FIRE RATING</span>
              <span className="cad-comp-badge">IS 2553 SAFETY GLASS</span>
              <span className="cad-comp-badge">BIFMA ERGONOMICS</span>
              <span className="cad-comp-badge">EN 14411 TILES</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
