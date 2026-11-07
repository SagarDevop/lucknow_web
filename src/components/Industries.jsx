import React, { useState, useEffect, useRef } from 'react';

const industryCards = [
  {
    id: 'retail',
    title: 'RETAIL',
    badgeType: 'cyan',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    image: '/images/industries/industry-retail.jpg',
    description: 'Modern and comfortable retail environments for an enhanced customer experience.',
    highlights: ['Flagship Retail Stores', 'Fashion & Lifestyle Outlets', 'Supermarkets & Hypermarkets'],
  },
  {
    id: 'banks',
    title: 'BANKS',
    badgeType: 'gold',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="3 10 12 4 21 10" />
        <line x1="6" y1="10" x2="6" y2="21" />
        <line x1="12" y1="10" x2="12" y2="21" />
        <line x1="18" y1="10" x2="18" y2="21" />
      </svg>
    ),
    image: '/images/industries/industry-banks.jpg',
    description: 'Safe, efficient and customer-friendly spaces for banking operations.',
    highlights: ['Regional Bank Hubs', 'Currency Chests & Vaults', 'Customer Lounge & Counters'],
  },
  {
    id: 'corporate-offices',
    title: 'CORPORATE OFFICES',
    badgeType: 'cyan',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
    image: '/images/industries/industry-corporate.jpg',
    description: 'Productive and inspiring workspaces designed for modern businesses.',
    highlights: ['IT & Tech Campuses', 'Corporate Headquarters', 'Modern Coworking Spaces'],
  },
  {
    id: 'showrooms',
    title: 'SHOWROOMS',
    badgeType: 'amber',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 12 1 12.8V16c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    image: '/images/industries/industry-showroom.jpg',
    description: 'Visually appealing and well-designed spaces to showcase your brand and products.',
    highlights: ['Automobile Flagships', 'Premium Luxury Boutiques', 'Consumer Electronics Pavilions'],
  },
  {
    id: 'banquet-halls',
    title: 'BANQUET HALLS',
    badgeType: 'cyan',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    image: '/images/industries/industry-banquet.jpg',
    description: 'Elegant and functional spaces for memorable events and gatherings.',
    highlights: ['Grand Ballrooms', 'Convention & Exhibition Venues', 'Celebration & Party Lawns'],
  },
  {
    id: 'commercial-buildings',
    title: 'COMMERCIAL BUILDINGS',
    badgeType: 'gold',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7h2v2H8zM14 7h2v2h-2zM8 11h2v2H8zM14 11h2v2h-2zM8 15h2v2H8zM14 15h2v2h-2z" />
      </svg>
    ),
    image: '/images/industries/industry-commercial.jpg',
    description: 'End-to-end MEP and interior solutions for diverse commercial infrastructure developments.',
    highlights: ['Integrated Business Towers', 'Shopping Malls & Plazas', 'Mixed-Use Developments'],
  },
];

const bottomPillars = [
  {
    title: 'TAILORED SOLUTIONS',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'QUALITY EXECUTION',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'INDUSTRY EXPERIENCE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'SUSTAINABLE SPACES',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: 'LONG-TERM PARTNERSHIP',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function Industries({ onOpenModal }) {
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
    <section className="section-py bg-light-soft industries-section" id="industries" ref={sectionRef}>
      <div className="container">
        {/* ==========================================================
            SECTION HEADER
            ========================================================== */}
        <div className="industries-header text-center">
          <div className="section-eyebrow">Integrated Contracting Across Sectors</div>
          <h2 className="section-title">
            <span className="highlight-keyword">INDUSTRIES</span> WE SERVE
          </h2>
          <p className="section-subtitle">
            We deliver integrated HVAC, MEP and interior fit-out solutions for a wide range of commercial and business environments.
          </p>
        </div>

        {/* ==========================================================
            6 INDUSTRY CARDS (3x2 GRID)
            ========================================================== */}
        <div className="industries-grid">
          {industryCards.map((card, idx) => (
            <div
              key={card.id}
              className={`industry-card scroll-reveal ${inView ? 'is-in-view' : ''}`}
              style={{ transitionDelay: `${0.1 * idx}s` }}
            >
              {/* Card Header Pill with Overlapping Icon Badge */}
              <div className="industry-pill-header">
                <div className={`industry-circle-icon icon-${card.badgeType}`}>
                  {card.icon}
                </div>
                <div className="industry-pill-banner">
                  <span className="industry-pill-title">{card.title}</span>
                </div>
              </div>

              {/* Card Media Preview */}
              <div className="industry-media">
                <img
                  src={card.image}
                  alt={card.title}
                  className="industry-img"
                  loading="lazy"
                />
                <div className="industry-media-overlay">
                  <span className="industry-tag-text">{card.highlights[0]}</span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="industry-card-body">
                <p className="industry-desc">{card.description}</p>
                <div className="industry-tags-strip">
                  {card.highlights.map((tag, tIdx) => (
                    <span key={tIdx} className="industry-chip">{tag}</span>
                  ))}
                </div>

                <button
                  onClick={onOpenModal}
                  className="industry-consult-btn"
                  aria-label={`Enquire for ${card.title}`}
                >
                  <span>Consult for {card.title}</span>
                  <span className="industry-arrow">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================
            BOTTOM 5 VALUE PILLARS STRIP (FROM BROCHURE)
            ========================================================== */}
        <div className={`industries-pillars-strip scroll-reveal ${inView ? 'is-in-view' : ''}`}>
          <div className="industries-pillars-row">
            {bottomPillars.map((p, pIdx) => (
              <div key={pIdx} className="industries-pillar-item">
                <div className="industries-pillar-circle">
                  {p.icon}
                </div>
                <span className="industries-pillar-label">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

