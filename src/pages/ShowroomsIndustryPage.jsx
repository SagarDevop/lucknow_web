import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const showroomParameters = [
  {
    code: 'PARAM-01',
    metric: 'PEAK SOLAR: 350 W/M²',
    title: 'Glazed Facade Solar Radiation',
    desc: 'Large architectural glass curtain walls create massive radiant solar heat gains, requiring high cooling capacity and perimeter thermal barriers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    code: 'PARAM-02',
    metric: '25-METER THROW DISTANCE',
    title: 'High-Bay Air Throw Dynamics',
    desc: 'Showrooms feature 5 to 8-meter clear heights where air must be thrown evenly via aerodynamic jet nozzles without drafting customer tables.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    code: 'PARAM-03',
    metric: '1500+ LUX | CRI > 95',
    title: 'High-Lux Specular Accentuation',
    desc: 'Showcasing automotive clear coats and diamond jewelry vitrines requires ultra-high CRI 95+ glare-free architectural luminaires.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    code: 'PARAM-04',
    metric: 'POINT LOAD: 40 KN/M²',
    title: 'Heavy Concentrated Vehicular Loads',
    desc: 'Automotive dealership floors must withstand multi-ton vehicle movements without tile cracking, chemical staining, or joint fatigue.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const showroomPlanStages = [
  {
    step: '01',
    phase: 'SOLAR DYNAMICS',
    title: 'Façade Solar Heat Modeling',
    desc: 'Simulating radiant heat gain across curtain wall glass to size perimeter cooling barriers and air curtain capacity.',
    tag: 'THERMAL RADIATION SIMULATION',
  },
  {
    step: '02',
    phase: 'HIGH-BAY HVAC',
    title: 'Jet Nozzle Air Distribution',
    desc: 'Installing high-static ceiling ductable units with 25m aerodynamic jet nozzles for uniform floor-level comfort.',
    tag: 'LONG-THROW JET NOZZLES',
  },
  {
    step: '03',
    phase: 'FLOORING',
    title: 'Axle-Load Tiling & Grout',
    desc: 'Laying full-body vitrified porcelain tiles with high-strength polymeric adhesives and zero-stain epoxy grout.',
    tag: 'MOHS 7+ REINFORCED BEDDING',
  },
  {
    step: '04',
    phase: 'LIGHTING',
    title: '1500+ Lux Track Alignment',
    desc: 'Mounting museum-grade CRI 95+ directional track spotlights with anti-glare honeycomb louvers for specular highlights.',
    tag: 'CRI 95+ DALI SMART TRACKS',
  },
  {
    step: '05',
    phase: 'AIR CURTAIN',
    title: 'Delivery Bay Thermal Seals',
    desc: 'Erecting high-velocity heated/unheated air curtains over large vehicle entrance doors to lock out external dust and heat.',
    tag: 'HIGH-VELOCITY AIR BARRIERS',
  },
  {
    step: '06',
    phase: 'HANDOVER',
    title: 'OEM Brand Audit Handover',
    desc: 'Conducting photometric lux surveys, floor flatness verification, and OEM corporate brand standard sign-off.',
    tag: 'DEALERSHIP TRADING CLEARANCE',
  },
];

const showroomWorkStrips = [
  {
    name: 'Maruti Suzuki Arena Showroom',
    loc: 'Sahadatganj, Faizabad',
    code: 'PRJ-UP-07',
    scope: 'Automotive Dealership Turnkey Package: High-Static Ductables, High-Lux Lighting, Customer Lounge & Vehicle Delivery Bay.',
    pills: ['65 TR DUCTABLE', '1500 LUX LIGHTING', '40 KN/M² FLOORS', 'MARUTI OEM SPEC'],
    img: '/images/projects/arena-faizabad.jpg',
  },
  {
    name: 'Maruti Suzuki Arena Facility',
    loc: 'Basti',
    code: 'PRJ-UP-10',
    scope: 'Large-Format Automobile Facility MEP, Ductable HVAC, Showroom Vitrified Flooring & Turnkey Delivery Bay Erection.',
    pills: ['80 TR HVAC', '25,000 SQ.FT', 'JET NOZZLE AIR', 'AUTOMOTIVE SPEC'],
    img: '/images/projects/arena-basti.jpg',
  },
  {
    name: 'Reliance Jewels Showroom',
    loc: 'Jhansi',
    code: 'PRJ-UP-09',
    scope: 'High-Lux Luxury Jewelry Boutique Fit-Out: High-CRI Spotlighting, Microclimate VRF & High-Security Cashier Enclosures.',
    pills: ['95+ CRI ACCENTS', 'DIAMOND VITRINES', 'VRF ZONING', 'JEWELRY SPEC'],
    img: '/images/projects/reliance-jewels.jpg',
  },
  {
    name: 'Aisshpra Gems & Jewels',
    loc: 'Azamgarh',
    code: 'PRJ-UP-12',
    scope: 'Premium Jewelry Commercial Interior, Laser Lighting, Architectural Coves, VRV Air Conditioning & Security Fit-Out.',
    pills: ['45 TR VRV', 'LUXURY MILLWORK', 'UGR < 16 GLARE', 'HIGH SECURITY'],
    img: '/images/projects/aisshpra-jewels.jpg',
  },
];

const showroomLedgerRows = [
  { code: 'SOL-SHW-01', title: 'High-Static Ductable Systems with Jet Diffusers', desc: 'Heavy-duty ceiling-suspended ductable units with long-throw aerodynamic jet nozzle diffusers circulating uniform cooled air down to the floor.', specs: 'THROW DISTANCE: UP TO 25 METERS • STATIC: 150–250 PA • ROTARY JET DIRECTION' },
  { code: 'SOL-SHW-02', title: 'Architectural Glare-Free Track Spotlighting', desc: 'Track-mounted aluminum directional spotlights with honeycomb anti-glare louvers, tunable CCT (3000K–5000K), and museum-grade color rendering.', specs: 'CRI 95+ • FLICKER-FREE DRIVERS • DALI SMART SCENE CONTROL' },
  { code: 'SOL-SHW-03', title: 'Heavy-Duty Reinforced Vitrified & Resin Flooring', desc: 'Full-body vitrified porcelain tiles laid on high-strength polymeric adhesives with epoxy grouting, engineered for high axle loads.', specs: 'MOHS HARDNESS: 7+ • ZERO STAIN EPOXY GROUT • LASER LEVEL TOLERANCE ±0.5MM' },
  { code: 'SOL-SHW-04', title: 'Turnkey Facade Lighting & Brand Perimeter Fit-Out', desc: 'Exterior ACP cladding, facade linear wash fixtures, customer delivery bays, brand lounge counters, and customer consultation pods.', specs: 'IP66 OUTDOOR FIXTURES • OEM BRAND IDENTITY COMPLIANT' },
];

export default function ShowroomsIndustryPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Automotive & Luxury Showrooms | Ambient Engineers Lucknow';
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
            <span className="cad-spec-code">SECTOR 04 // AUTOMOTIVE &amp; LUXURY SHOWROOMS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">1500+ LUX LIGHTING &bull; JET NOZZLE HVAC &bull; MOHS 7+ AXLE FLOORS</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                AUTOMOTIVE &amp; LUXURY SHOWROOMS &bull;<br />
                <span className="cad-headline-accent">HIGH-LUX RETAIL DOMAINS</span>
              </h1>
              <p className="cad-page-hero-lead">
                Visually captivating, architecturally engineered environments tailored for automobile dealerships, fine jewelry boutiques, and luxury consumer showcases across North India.
              </p>

              {/* Quick Visual Metric Strip */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>1500+ LUX LIGHTING</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>JET NOZZLE HVAC</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>MOHS 7+ AXLE FLOORS</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>SOLAR BALANCED</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>PLAN SHOWROOM FIT-OUT</span>
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
                  <source src="/videos/industry-showrooms.mp4" type="video/mp4" />
                </video>
                <div className="cad-viewport-telemetry">
                  <div className="cad-video-indicator">
                    <span className="pulse-dot"></span>
                    <span>LIVE SIMULATION</span>
                  </div>
                  <div className="cad-telemetry-meta">SEC-04 // SHOWROOM STREAM</div>
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
            <span className="cad-spec-code">CRITICAL DEMANDS // SEC-SHW-04</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">HIGH-BAY ENVIRONMENTAL &amp; OPTICAL SPECIFICATIONS</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>HIGH-BAY ILLUMINATION &amp; RADIANT SOLAR CONTROL</h3>
              <p>Countering intense glazed curtain wall solar gain with long-throw jet nozzle air distribution, while spotlighting premium merchandise under 1500+ Lux CRI 95+ luminaires.</p>
            </div>
            <span className="cad-def-banner-tag">SHOWROOM MATRIX</span>
          </div>

          <div className="cad-params-strip-row">
            {showroomParameters.map((p, idx) => (
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
            <span className="cad-spec-title">WHAT IS OUR PLAN ON SHOWROOM FIT-OUTS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON SHOWROOMS &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">
                From facade solar load modeling to precision jet nozzle throw and OEM brand audit sign-off:
              </p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {showroomPlanStages.map((stage, idx) => (
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
            <span className="cad-spec-title">WORK DONE ON SHOWROOMS &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON SHOWROOMS &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">
                Flagship automotive dealerships and premier jewelry boutiques delivered across North India:
              </p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE SHOWROOM SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {showroomWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">AUTOMOTIVE &amp; LUXURY DOMAIN SPECIFICATIONS</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {showroomLedgerRows.map((row, idx) => (
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
              <span className="cad-comp-badge">ISMB STRUCTURAL FLOORS</span>
              <span className="cad-comp-badge">IESNA RP-2 LIGHTING</span>
              <span className="cad-comp-badge">ASHRAE 62.1 HIGH-BAY</span>
              <span className="cad-comp-badge">OEM BRAND AUDITS</span>
              <span className="cad-comp-badge">MOHS 7+ HARDNESS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
