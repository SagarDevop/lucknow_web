import React from 'react';
import ScatteredDecor from './ScatteredDecor';
import { useRouter } from '../context/RouterContext';

const industriesData = [
  {
    title: 'RETAIL',
    code: 'SEC-RET // 01',
    route: '/industries/retail',
    desc: 'Modern and comfortable retail environments for an enhanced customer experience.',
    detail: 'Optimal thermal zoning, high-CFM air distribution, and luxury architectural accent lighting.',
    img: '/images/industries/industry-retail.jpg',
    specs: 'HIGH-CFM • LUXURY ACCENT LIGHTING • FAST COMMERCE FIT-OUT',
    badgeTheme: 'blue',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    title: 'BANKS',
    code: 'SEC-BNK // 02',
    route: '/industries/banks',
    desc: 'Safe, efficient and customer-friendly spaces for banking operations.',
    detail: 'Critical 24/7 financial branch climate control, server room uptime, and soundproof private cabins.',
    img: '/images/industries/industry-banks.jpg',
    specs: 'PRECISION COOLING • FIRE RESISTANT • DUAL-POWER BACKUP',
    badgeTheme: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="3 10 12 3 21 10" />
        <line x1="6" y1="10" x2="6" y2="21" />
        <line x1="10" y1="10" x2="10" y2="21" />
        <line x1="14" y1="10" x2="14" y2="21" />
        <line x1="18" y1="10" x2="18" y2="21" />
      </svg>
    ),
  },
  {
    title: 'CORPORATE OFFICES',
    code: 'SEC-CRP // 03',
    route: '/industries/cooperative-offices',
    desc: 'Productive and inspiring workspaces designed for modern businesses.',
    detail: 'Zoned multi-split VRF air conditioning, acoustic baffle ceilings, and flexible structured power raceways.',
    img: '/images/industries/industry-corporate.jpg',
    specs: 'ACOUSTIC BAFFLES • ASHRAE 62.1 IAQ • SMART BMS INTEGRATION',
    badgeTheme: 'blue',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    title: 'SHOWROOMS',
    code: 'SEC-SHW // 04',
    route: '/industries/showrooms',
    desc: 'Visually appealing and well-designed spaces to showcase your brand and products.',
    detail: 'High-bay air distribution, glare-free high-lux accent lighting, and polished resin floor finishes.',
    img: '/images/industries/industry-showroom.jpg',
    specs: 'GLARE-FREE FIXTURES • HIGH-BAY HVAC • POLISHED RESIN FLOORS',
    badgeTheme: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    title: 'BANQUET HALLS',
    code: 'SEC-BNQ // 05',
    route: '/industries/banquet-halls',
    desc: 'Elegant and functional spaces for memorable events and gatherings.',
    detail: 'Rapid pull-down cooling for 500+ guests, fresh air purging ventilation, and acoustic sound isolation.',
    img: '/images/industries/industry-banquet.jpg',
    specs: 'HIGH DIVERSITY LOAD • RAPID PULL-DOWN • GRAND CEILING INTEGRATION',
    badgeTheme: 'blue',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'COMMERCIAL BUILDINGS',
    code: 'SEC-BLD // 06',
    route: '/industries/commercial-buildings',
    desc: 'End-to-end MEP and interior solutions for diverse commercial infrastructure events and gatherings.',
    detail: 'Central chiller plants, high-rise riser piping, fire hydrant infrastructure, and building management integration.',
    img: '/images/industries/industry-commercial.jpg',
    specs: 'CENTRAL CHILLER RISERS • LIFE-SAFETY CODES • ENERGY STAR BENCHMARK',
    badgeTheme: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <line x1="9" y1="22" x2="9" y2="2" />
        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M8 18h.01M16 18h.01" />
      </svg>
    ),
  },
];

const pillarsData = [
  {
    title: 'TAILORED SOLUTIONS',
    desc: 'Custom engineered to spatial architecture and thermal heat load requirements',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'QUALITY EXECUTION',
    desc: 'Conforming strictly to NBC, ASHRAE and IS engineering codes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'INDUSTRY EXPERIENCE',
    desc: 'Over a decade of successful commercial contracting across North India',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'SUSTAINABLE SPACES',
    desc: 'Energy-efficient invertor compressors and low carbon footprint execution',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: 'LONG-TERM PARTNERSHIP',
    desc: 'Continuous lifecycle AMC maintenance and prioritized 24/7 breakdown support',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function Industries({ onOpenModal }) {
  const { navigate } = useRouter();

  return (
    <section className="cad-industries-section" id="industries">
      <ScatteredDecor section="industries" />

      <div className="cad-editorial-container">
        {/* Section Header */}
        <div className="cad-spec-header">
          <span className="cad-spec-dot"></span>
          <span className="cad-spec-code">SECTOR PROFILES // AMB-IND-06</span>
          <span className="cad-spec-divider">|</span>
          <span className="cad-spec-title">COMMERCIAL INFRASTRUCTURE DOMAINS</span>
        </div>

        {/* Section Headline */}
        <div className="cad-industries-heading-box">
          <h2 className="cad-industries-title">
            INDUSTRIES WE SERVE &bull; <span className="cad-headline-accent">SECTOR PROFILES</span>
          </h2>
          <p className="cad-industries-lead">
            We deliver integrated HVAC, MEP, and interior fit-out solutions for a wide range of commercial and business environments across India.
          </p>
        </div>

        {/* 6 Open Architectural Sector Bays */}
        <div className="cad-sectors-grid">
          {industriesData.map((ind, idx) => (
            <div key={idx} className="cad-sector-bay">
              <div className="cad-bay-top">
                <span className="cad-bay-code">{ind.code}</span>
                <span className="cad-bay-line"></span>
                <span className="cad-bay-dot"></span>
              </div>

              <div className="cad-bay-visual">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <div className={`cad-sector-icon-pill cad-pill-${ind.badgeTheme}`} title={ind.title}>
                  {ind.icon}
                </div>
                <img src={ind.img} alt={ind.title} loading="lazy" />
                <span className="cad-bay-specs">{ind.specs}</span>
              </div>

              <div className="cad-bay-content">
                <h3 className="cad-bay-title">{ind.title}</h3>
                <p className="cad-bay-desc">{ind.desc}</p>
                <div style={{ marginTop: '14px' }}>
                  <a
                    href={ind.route}
                    className="cad-view-all-link"
                    style={{ fontSize: '0.75rem', fontWeight: 700, color: '#DC2626', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(ind.route);
                    }}
                  >
                    <span>View Dedicated Sector Page</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Pillar Architectural Ledger */}
        <div className="cad-pillars-ledger">
          <div className="cad-ledger-header">
            <span className="cad-ledger-label">CONTRACTOR ASSURANCE FRAMEWORK</span>
            <span className="cad-ledger-line"></span>
            <span className="cad-ledger-meta">[ 5 PILLARS OF RELIABILITY ]</span>
          </div>

          <div className="cad-ledger-grid">
            {pillarsData.map((p, idx) => (
              <div key={idx} className="cad-ledger-cell">
                <div className="cad-ledger-icon-wrap">
                  {p.icon}
                </div>
                <h4 className="cad-ledger-name">{p.title}</h4>
                <p className="cad-ledger-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
