import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import ScatteredDecor from '../components/ScatteredDecor';
import CtaBanner from '../components/CtaBanner';

const industryDetails = [
  {
    id: 'retail',
    title: 'Retail Stores & Apparel Chains',
    code: 'SEC-01 // RETAIL INFRASTRUCTURE',
    desc: 'Modern and comfortable retail environments engineered for enhanced customer experience, high pedestrian traffic, and precision thermal zoning.',
    img: '/images/industries/industry-retail.jpg',
    requirements: [
      'High-CFM variable air distribution handling continuous customer footfall without drafts.',
      'Aesthetic duct concealment and low-noise cassette units for uninterrupted shopping.',
      'High-CRI 90+ architectural spotlighting integration and perimeter showcase casework.',
      'Low operating energy consumption minimizing retailer monthly overheads.',
    ],
    realProjects: 'Azorte (Gorakhpur), Reliance Trends, Smart Bazaar',
    standards: 'ASHRAE 62.1 IAQ • NBC Commercial Code',
  },
  {
    id: 'banks',
    title: 'Banking Institutions & Financial Hubs',
    code: 'SEC-02 // FINANCIAL NETWORKS',
    desc: 'Safe, energy-efficient and customer-friendly spaces engineered for 24/7 banking branches, customer lounges, ATM vestibules, and server rooms.',
    img: '/images/industries/industry-banks.jpg',
    requirements: [
      'Precision climate control for continuous data processing and ATM server uptime.',
      'Uninterrupted dual-source electrical panels with auto-transfer switchgear.',
      'Clean acoustic partitions and private consultation cabins with sound insulation.',
      'Clean agent gaseous fire suppression systems protecting critical financial archives.',
    ],
    realProjects: 'IDFC First Bank (Sultanpur Branch), HDFC, ICICI, SBI Commercial Hubs',
    standards: 'IS 732 • NBC Life Safety • Precision Server Room Standards',
  },
  {
    id: 'cooperative-offices',
    title: 'Cooperative Offices & Corporate Workspaces',
    code: 'SEC-03 // CORPORATE WORKSPACES',
    desc: 'Productive and inspiring commercial workspaces designed for corporate headquarters, cooperative societies, open office floors, and executive conference suites.',
    img: '/images/industries/industry-corporate.jpg',
    requirements: [
      'Zoned multi-split VRF air conditioning delivering customized comfort per room.',
      'Acoustic mineral fiber and baffle ceilings suppressing ambient workspace reverberation.',
      'Flexible under-desk structured cabling raceways and modular workstation distribution.',
      'Air filtration with MERV-13 filters ensuring high productivity and low CO2 levels.',
    ],
    realProjects: 'Regional Corporate Hubs, Institutional Headquarters Lucknow',
    standards: 'ASHRAE 55 Thermal Comfort • LEED Green Building Norms',
  },
  {
    id: 'showrooms',
    title: 'Automotive & Luxury Brand Showrooms',
    code: 'SEC-04 // AUTOMOTIVE & LUXURY',
    desc: 'Visually appealing, high-lux architectural spaces crafted to showcase premier automobile lines, jewelry, and luxury consumer goods.',
    img: '/images/industries/industry-showroom.jpg',
    requirements: [
      'High-bay commercial air conditioning providing uniform cooling over high glass facades.',
      'Glare-free high-lux accent luminaires highlighting vehicle finishes and jewelry vitrines.',
      'Heavy-load polished vitrified and resin floor finishes with laser flatness.',
      'Turnkey facade lighting and brand perimeter display casework integration.',
    ],
    realProjects: 'Maruti Suzuki Arena (Faizabad & Basti), NEXA, Reliance Jewels (Jhansi)',
    standards: 'ISMB Structural Standards • High-Lux Lighting Codes',
  },
  {
    id: 'banquet-halls',
    title: 'Banquet Halls & Hospitality Resorts',
    code: 'SEC-05 // HOSPITALITY & EVENTS',
    desc: 'Expansive, elegant and functional grand gathering spaces requiring massive variable cooling capacities and high-static air handling.',
    img: '/images/industries/industry-banquet.jpg',
    requirements: [
      'Rapid pull-down cooling capable of handling 500+ guests during peak summer banquets.',
      'Multi-stage ventilation with fresh air purging preventing odor and humidity buildup.',
      'Heavy-gauge acoustic duct insulation preventing mechanical noise intrusion into event halls.',
      'High-capacity commercial kitchen exhaust and makeup air ventilation systems.',
    ],
    realProjects: 'Star Light Palace (Dubagga, Lucknow), Golden Paradise Resort (Indira Nagar)',
    standards: 'NFPA 96 Commercial Kitchens • ISHRAE High-Diversity Load Norms',
  },
  {
    id: 'commercial-buildings',
    title: 'Multi-Story Commercial Buildings',
    code: 'SEC-06 // INFRASTRUCTURE & MULTI-USE',
    desc: 'End-to-end turnkey MEP infrastructure and interior engineering for high-traffic multi-story complexes, business hubs, and institutional towers.',
    img: '/images/industries/industry-commercial.jpg',
    requirements: [
      'Central chiller plants and high-rise riser piping with vibration isolators.',
      'Complete life safety hydrant systems, wet risers, fire pumps, and smoke evacuation.',
      'High-voltage distribution substations, diesel backup generators, and busduct shafts.',
      'Building Management System (BMS) integration for automated facility energy tracking.',
    ],
    realProjects: 'Commercial Mixed-Use Towers, Emerald Paper Plant (Mohanlalganj)',
    standards: 'NBC 2016 Part 4 • ECBC (Energy Conservation Building Code)',
  },
];

export default function IndustriesPage({ onOpenModal }) {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Industries We Serve | Ambient Engineers Lucknow';
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="cad-page-wrapper">
      {/* Page Hero with Cinematic Video Viewport */}
      <section className="cad-page-hero">
        <ScatteredDecor section="industries" />
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">SECTOR PROFILES // AMB-IND-PAGE</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">6 DEDICATED COMMERCIAL DOMAINS</span>
          </div>

          <div className="cad-page-hero-grid">
            <div className="cad-page-hero-text">
              <h1 className="cad-page-hero-title">
                INDUSTRIES WE SERVE &bull;<br />
                <span className="cad-headline-accent">SPECIALIZED SECTOR SOLUTIONS</span>
              </h1>
              <p className="cad-page-hero-lead">
                Every industry carries distinct engineering demands. Ambient Engineers tailors turnkey HVAC, MEP, and interior fit-out solutions for retail flagships, banking hubs, corporate workspaces, automotive dealerships, grand banquets, and commercial complexes across India.
              </p>

              {/* Metric Pills Ribbon */}
              <div className="cad-hero-metrics-ribbon">
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>6 SPECIALIZED DOMAINS</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>NBC &bull; ASHRAE &bull; IS</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>TURNKEY EXECUTION</span>
                </div>
                <div className="cad-metric-pill-item">
                  <span className="cad-pill-dot"></span>
                  <span>PAN-INDIA CAPACITY</span>
                </div>
              </div>

              <div className="cad-hero-btn-row">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>BOOK SECTOR CONSULTATION</span>
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
                  <source src="/videos/hero-architectural-illustration.mp4" type="video/mp4" />
                </video>
                <div className="cad-viewport-telemetry">
                  <div className="cad-video-indicator">
                    <span className="pulse-dot"></span>
                    <span>CAD SIMULATION</span>
                  </div>
                  <div className="cad-telemetry-meta">ALL 6 DOMAINS // MULTI-SECTOR</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Anchor Jumper Bar */}
          <div className="cad-ind-anchor-bar">
            {industryDetails.map((ind) => (
              <a key={ind.id} href={`#${ind.id}`} className="cad-ind-anchor-btn">
                <span>{ind.title.split('&')[0].trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Visually Distinct Industry Sections */}
      <div className="cad-ind-detailed-sections">
        {industryDetails.map((sec, idx) => (
          <section key={sec.id} id={sec.id} className={`cad-ind-deep-section ${idx % 2 === 1 ? 'cad-ind-alt' : ''}`}>
            <div className="cad-editorial-container">
              <div className="cad-spec-header">
                <span className="cad-spec-dot"></span>
                <span className="cad-spec-code">{sec.code}</span>
                <span className="cad-spec-divider">|</span>
                <span className="cad-spec-title">{sec.standards}</span>
              </div>

              <div className="cad-ind-split-grid">
                {/* Visual Viewport */}
                <div className="cad-ind-visual-flank">
                  <div className="cad-viewport-frame">
                    <span className="cad-bracket cad-bracket-tl">┌</span>
                    <span className="cad-bracket cad-bracket-tr">┐</span>
                    <span className="cad-bracket cad-bracket-bl">└</span>
                    <span className="cad-bracket cad-bracket-br">┘</span>
                    <img src={sec.img} alt={sec.title} className="cad-viewport-photo" loading="lazy" />
                    <div className="cad-viewport-telemetry">
                      <div className="cad-telemetry-badge">
                        <span className="cad-telemetry-pulse"></span>
                        <span>PROVEN DEPLOYMENTS</span>
                      </div>
                      <div className="cad-telemetry-meta">{sec.realProjects}</div>
                    </div>
                  </div>
                </div>

                {/* Content Flank */}
                <div className="cad-ind-content-flank">
                  <h2 className="cad-ind-section-title">{sec.title}</h2>
                  <p className="cad-ind-section-desc">{sec.desc}</p>

                  <div className="cad-ind-reqs-box">
                    <h4 className="cad-reqs-label">TECHNICAL ENGINEERING CRITERIA:</h4>
                    <ul className="cad-reqs-list">
                      {sec.requirements.map((req, rIdx) => (
                        <li key={rIdx}>
                          <span className="cad-check-bullet">&bull;</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="cad-ind-action-row" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="cad-btn-editorial"
                      onClick={() => navigate(`/industries/${sec.id}`)}
                    >
                      <span>EXPLORE DEDICATED {sec.title.toUpperCase().split(' ')[0]} PAGE</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="cad-btn-editorial"
                      style={{ background: 'transparent', color: '#0F172A', borderColor: 'rgba(15,23,42,0.2)' }}
                      onClick={onOpenModal}
                    >
                      <span>CONSULT SCOPE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom Consultation CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
