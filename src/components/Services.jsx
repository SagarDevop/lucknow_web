import React, { useState, useEffect, useRef } from 'react';

const trustPillars = [
  {
    title: 'SINGLE POINT SOLUTION',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'QUALITY EXECUTION',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'EXPERIENCED TEAM',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'LONG-TERM PARTNERSHIP',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const coreServicesData = [
  {
    id: 'hvac',
    badgeTitle: 'HVAC WORKS',
    badgeSub: 'COMFORT | EFFICIENCY | RELIABILITY',
    theme: 'hvac-theme',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <line x1="6" y1="12" x2="6" y2="12.01" />
        <line x1="10" y1="12" x2="10" y2="12.01" />
        <line x1="14" y1="12" x2="14" y2="12.01" />
        <line x1="18" y1="12" x2="18" y2="12.01" />
        <path d="M6 16c1.5 2 3.5 2 5 0s3.5-2 5 0" />
        <path d="M8 20c1.5 1.5 3.5 1.5 5 0" />
      </svg>
    ),
    points: [
      'VRF/VRV air-conditioning systems',
      'Ductable and package AC systems',
      'Chillers and AHU installation',
      'Cassette and Hi-wall AC systems',
      'HVAC ducting, grilles and dampers',
      'Copper piping, insulation and condensate drainage',
      'Testing, commissioning and AMC',
    ],
    photos: [
      {
        src: '/images/about/tech-chillers.jpg',
        title: 'Chiller Plants & VRF Outdoor Units',
      },
      {
        src: '/images/services/hvac-cassette-ceiling.jpg',
        title: '4-Way Cassette & Clean Air Ducting',
      },
    ],
  },
  {
    id: 'mep',
    badgeTitle: 'MEP WORKS',
    badgeSub: 'INTEGRATED SYSTEMS | SAFE | EFFICIENT',
    theme: 'mep-theme',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 15v-6" />
      </svg>
    ),
    points: [
      'LT/HT electrical works, as applicable',
      'Electrical panels and distribution systems',
      'Cable trays, wiring and lighting',
      'Earthing and lightning protection',
      'Power distribution and load management',
      'Water supply and drainage systems',
      'Pumps and associated piping',
      'STP/ETP piping works',
      'Hydrant and sprinkler systems',
      'Fire pumps and fire alarm/detection systems',
    ],
    photos: [
      {
        src: '/images/services/mep-electrical-panels.jpg',
        title: 'LT/HT Switchgear & Distribution Panels',
      },
      {
        src: '/images/about/tech-firefighting.jpg',
        title: 'Fire Hydrants & Sprinkler Networks',
      },
      {
        src: '/images/services/mep-pump-piping.jpg',
        title: 'Industrial Pumps & Water Piping',
      },
    ],
  },
  {
    id: 'fitout',
    badgeTitle: 'INTERIOR FIT-OUT WORKS',
    badgeSub: 'FUNCTIONAL | AESTHETIC | TURNKEY SOLUTIONS',
    theme: 'fitout-theme',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
        <path d="M2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7z" />
        <path d="M4 18v2" />
        <path d="M20 18v2" />
        <line x1="12" y1="11" x2="12" y2="18" />
      </svg>
    ),
    points: [
      'False ceiling and partition works',
      'Flooring, tiles and painting',
      'Carpentry and finishing works',
      'Retail showroom and store fit-outs',
      'Office and commercial interior execution',
      'Turnkey execution, as per agreed scope',
    ],
    photos: [
      {
        src: '/images/services/interior-modern-office.jpg',
        title: 'Corporate Workspaces & Baffle Ceilings',
      },
      {
        src: '/images/services/interior-luxury-retail.jpg',
        title: 'High-End Retail Showroom Fit-Outs',
      },
    ],
  },
  {
    id: 'amc',
    badgeTitle: 'AMC SERVICES',
    badgeSub: 'KEEPING YOUR SPACES RUNNING SMOOTHLY',
    theme: 'amc-theme',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    points: [
      'Preventive maintenance schedules',
      'Regular inspection and system health check-up',
      'Quick response and support',
      'Reduced downtime',
      'Extended equipment life',
      'Cost-efficient operations',
    ],
    photos: [
      {
        src: '/images/services/amc-technician-gauges.jpg',
        title: 'Certified HVAC Diagnostics & Servicing',
      },
    ],
  },
];

export default function Services({ onOpenModal }) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <section className="section-py bg-white core-services-section" id="services" ref={sectionRef}>
      <div className="container">
        {/* ==========================================================
            SECTION HEADER & TOP TRUST PILLARS
            ========================================================== */}
        <div className="core-services-header text-center">
          <div className="section-eyebrow">Comprehensive Contracting Capabilities</div>
          <h2 className="section-title">
            CORE <span className="highlight-keyword">SERVICES</span>
          </h2>
          <p className="section-subtitle">
            Delivering high-precision HVAC engineering, integrated MEP systems, turnkey commercial fit-outs, and dedicated lifetime AMC operations.
          </p>

          {/* 4 Value Badges from the brochure */}
          <div className="services-trust-row">
            {trustPillars.map((tp, idx) => (
              <div key={idx} className="services-trust-pill">
                <span className="services-trust-icon">{tp.icon}</span>
                <span className="services-trust-title">{tp.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================
            4 COMPREHENSIVE SERVICE QUADRANTS (BENTO CARDS)
            ========================================================== */}
        <div className="core-services-grid">
          {coreServicesData.map((service, idx) => (
            <div
              key={service.id}
              className={`core-service-bento-card ${service.theme} scroll-reveal ${inView ? 'is-in-view' : ''}`}
              style={{ transitionDelay: `${0.12 * idx}s` }}
            >
              {/* Card Header Pill */}
              <div className="cs-card-header">
                <div className="cs-header-pill">
                  <span className="cs-pill-icon">{service.icon}</span>
                  <div className="cs-pill-text-group">
                    <span className="cs-pill-title">{service.badgeTitle}</span>
                    <span className="cs-pill-sub">{service.badgeSub}</span>
                  </div>
                </div>
              </div>

              {/* Card Body: Split into Scope List & Visual Photo Panel */}
              <div className="cs-card-body">
                {/* Left: Detailed Scope List */}
                <div className="cs-scope-column">
                  <ul className="cs-points-list">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="cs-point-item">
                        <span className="cs-point-bullet">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="cs-point-text">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onOpenModal}
                    className="btn btn-outline btn-sm cs-inquire-btn"
                  >
                    <span>Consult on {service.badgeTitle.replace(' WORKS', '')} Scope</span>
                    <span className="btn-icon">&rarr;</span>
                  </button>
                </div>

                {/* Right: Media Photo Showcase */}
                <div className="cs-photos-column">
                  <div className={`cs-photos-gallery count-${service.photos.length}`}>
                    {service.photos.map((photo, phIdx) => (
                      <div key={phIdx} className="cs-photo-card">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="cs-photo-img"
                          loading="lazy"
                        />
                        <div className="cs-photo-tag">
                          <span>{photo.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
