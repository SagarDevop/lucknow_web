import React, { useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const bankParameters = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    title: 'Server PAC Uptime',
    desc: 'Dual-circuit precision cooling maintaining strict temperature and humidity for critical bank servers.',
    metric: '99.999% UPTIME SLA',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
      </svg>
    ),
    title: 'Acoustic Privacy',
    desc: 'STC 48+ drywall partitions stopping confidential customer conversations from leaking out of cabins.',
    metric: 'STC 48+ ACOUSTIC',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Dual-Power Auto ATS',
    desc: 'Automatic mains failure switches delivering seamless transfer between grid, UPS, and backup generators.',
    metric: 'ZERO-DOWNTIME ATS',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Clean Gas Fire Flooding',
    desc: 'Waterless Novec 1230 gas fire suppression extinguishing fires without damaging electronics or currency.',
    metric: 'NFPA 2001 CLEAN GAS',
  },
];

const bankPlanStages = [
  {
    step: '01',
    phase: 'AUDIT',
    title: 'Critical IT & Power Sizing',
    desc: 'Auditing 24/7 ATM/server thermal loads, kVA power demand, and UPS emergency autonomy.',
    tag: 'CONNECTED IT LOAD SIZING',
  },
  {
    step: '02',
    phase: 'PAC DESIGN',
    title: 'N+1 Redundant Cooling',
    desc: 'Selecting dual-redundant Precision Air Conditioners (PAC) with EC fans and Modbus BMS.',
    tag: 'N+1 REDUNDANCY SPECS',
  },
  {
    step: '03',
    phase: 'SWITCHGEAR',
    title: 'Dual-Source AMF Panels',
    desc: 'Assembling automatic transfer switchgear and low-impedance chemical earthing electrodes (<0.8 Ohm).',
    tag: '< 0.8 OHM IS 3043 GROUND',
  },
  {
    step: '04',
    phase: 'ACOUSTICS',
    title: 'Soundproof Branch Cabins',
    desc: 'Erecting high-density mineral wool acoustic drywall partitions and toughened glass cashier counters.',
    tag: 'STC 48+ GYPROC WALLS',
  },
  {
    step: '05',
    phase: 'SUPPRESSION',
    title: 'Clean Gas Total Flooding',
    desc: 'Installing Novec 1230 / FM-200 cylinder manifolds and VESDA early laser aspirating smoke detectors.',
    tag: 'NFPA 2001 SUPPRESSION',
  },
  {
    step: '06',
    phase: 'COMMISSION',
    title: 'Live Simulation & Sign-Off',
    desc: 'Executing full power blackout simulation, auto-transfer verification, and banking security sign-off.',
    tag: 'BANKING UPTIME CLEARANCE',
  },
];

const bankWorkStrips = [
  {
    name: 'IDFC First Bank',
    loc: 'Sultanpur Branch',
    code: 'PRJ-UP-05',
    scope: 'Complete Bank Branch Fit-Out: Dual-Source Auto Power ATS, Precision Server AC & Soundproof Private Cabins.',
    pills: ['DUAL-SOURCE POWER', '< 0.8 OHM EARTHING', 'SERVER PAC', 'BANK SPEC'],
    img: '/images/projects/idfc-bank.jpg',
  },
  {
    name: 'Commercial Banking Hubs',
    loc: 'Lucknow & Eastern UP',
    code: 'PRJ-LKO-BNK',
    scope: 'Turnkey Electrical Infrastructure, ATM Vestibule Climate Systems & Clean Agent Server Room Gas Flooding.',
    pills: ['N+1 REDUNDANCY', 'CLEAN AGENT GAS', 'UPS DISTRIBUTION', 'FINANCIAL SPEC'],
    img: '/images/industries/industry-banks.jpg',
  },
];

const bankLedgerRows = [
  { code: 'SOL-BNK-01', title: 'Precision Air Conditioning (PAC) Server Units', desc: 'Dual-circuit precision units with EC blowers, micro-humidity control and Modbus tracking.', specs: 'SENSIBLE HEAT RATIO: 0.95+ • N+1 DUAL REDUNDANT • 24/7/365' },
  { code: 'SOL-BNK-02', title: 'Dual-Source Power Distribution & Chemical Grounding', desc: 'Dedicated branch LT boards, copper busbars, and chemical earthing pits under 0.8 ohms.', specs: 'IS 3043 CHEMICAL EARTHING • TYPE 1+2 SURGE ARRESTERS • FRLS LINES' },
  { code: 'SOL-BNK-03', title: 'Acoustic Drywall Partitions & Cashier Cabins', desc: 'Multi-layer Gyproc acoustic drywall stuffed with 50mm high-density mineral wool.', specs: 'STC 48+ SOUND TRANSMISSION LOSS • 120-MIN FIRE RATED INTEGRITY' },
  { code: 'SOL-BNK-04', title: 'Clean Agent Gaseous Fire Suppression (Novec 1230)', desc: 'Automatic total flooding gas extinguishing systems combined with VESDA laser detectors.', specs: 'WATERLESS • SAFE FOR ELECTRONICS & CASH ARCHIVES • ZERO RESIDUE' },
];

export default function BanksIndustryPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Banking & Financial Institutions | Ambient Engineers Lucknow';
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
            <span className="cad-spec-code">SECTOR 02 // FINANCIAL NETWORKS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">24/7 SERVER UPTIME &bull; IS 732 &bull; PRECISION PAC</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                BANKING &amp; FINANCIAL INSTITUTIONS &bull;<br />
                <span className="cad-headline-accent">CRITICAL INFRASTRUCTURE MEP</span>
              </h1>
              <p className="cad-page-hero-lead">
                Safe, efficient, and customer-friendly spaces engineered for critical 24/7 banking operations, server room uptime, and secure acoustic customer zones across India.
              </p>

              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>99.999% POWER UPTIME</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>PRECISION PAC UNITS</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>STC 48+ SOUNDPROOF</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>CLEAN GAS FIRE NOC</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>ENQUIRE BANKING MEP</span>
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
                <video
                  className="cad-viewport-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/videos/industry-banks.mp4" type="video/mp4" />
                </video>
                <div className="cad-viewport-telemetry">
                  <div className="cad-video-indicator">
                    <span className="pulse-dot"></span>
                    <span>LIVE SIMULATION</span>
                  </div>
                  <div className="cad-telemetry-meta">SEC-02 // FINANCIAL STREAM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT ARE BANKING CRITICAL DEMANDS? (VISUAL STRIP ARCHITECTURE) */}
      <section className="cad-def-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">CRITICAL DEMANDS // SEC-BNK-02</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">SECURITY &amp; POWER CONTINUITY CRITERIA</span>
          </div>

          <div className="cad-def-banner-strip">
            <div className="cad-def-banner-text">
              <h3>BANKING CHALLENGES // 24/7 CONTINUITY &amp; CLIENT PRIVACY</h3>
              <p>Banking branches require zero electrical downtime for servers/ATMs, confidential acoustic consultation cabins, and waterless gaseous fire protection.</p>
            </div>
            <span className="cad-def-banner-tag">FINANCIAL CRITICAL</span>
          </div>

          <div className="cad-params-strip-row">
            {bankParameters.map((p, idx) => (
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

      {/* 3. OUR PLAN ON BANKS (CONNECTED 6-PHASE PROCESS RIBBON) */}
      <section className="cad-process-ribbon-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">EXECUTION FRAMEWORK // 6-STAGE ROADMAP</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WHAT IS OUR PLAN ON BANKING PROJECTS?</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                OUR ENGINEERING PLAN ON BANKS &bull; <span className="cad-headline-accent">6-PHASE ROADMAP</span>
              </h2>
              <p className="cad-ribbon-sub">Mission-critical MEP execution guaranteeing zero downtime and financial data security:</p>
            </div>
          </div>

          <div className="cad-process-strip-timeline">
            {bankPlanStages.map((stage, idx) => (
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

      {/* 4. WORK DONE ON BANKS (VISUAL PROJECT STRIPS) */}
      <section className="cad-work-strip-section">
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">OFFICIAL ARCHIVE // VERIFIED DEPLOYMENTS</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">WORK DONE ON BANKS &bull; REAL CLIENT SITES</span>
          </div>

          <div className="cad-ribbon-intro-bar">
            <div>
              <h2 className="cad-ribbon-title">
                WORK DONE ON BANKS &bull; <span className="cad-headline-accent">PORTFOLIO STRIPS</span>
              </h2>
              <p className="cad-ribbon-sub">Commissioned financial branches and commercial banking hubs by Ambient Engineers:</p>
            </div>
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE BANKING SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="cad-work-strip-grid">
            {bankWorkStrips.map((prj, idx) => (
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
            <span className="cad-spec-title">BANKING INFRASTRUCTURE MODULES</span>
          </div>

          <div className="cad-systems-ledger-strip">
            {bankLedgerRows.map((row, idx) => (
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
              <span className="cad-comp-badge">IS 3043 &lt; 0.8 OHM</span>
              <span className="cad-comp-badge">NBC LIFE SAFETY</span>
              <span className="cad-comp-badge">NFPA 2001 CLEAN AGENT</span>
              <span className="cad-comp-badge">99.999% UPTIME</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
