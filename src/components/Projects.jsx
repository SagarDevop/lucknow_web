import React, { useState, useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 'starlight-palace',
    title: 'STAR LIGHT PALACE',
    location: 'DUBAGGA, LUCKNOW',
    client: 'Hospitality & Luxury Banquets',
    category: 'Banquets & Hospitality',
    badge: 'Banquet & Events',
    image: '/images/projects/starlight-palace.jpg',
    scope: 'Complete Turnkey Banquet Fit-Out, 120 TR Central Chiller HVAC, Dynamic LED Facade & Acoustic Ceilings',
  },
  {
    id: 'golden-paradise',
    title: 'GOLDEN PARADISE RESORT BANQUET',
    location: 'INDIRA NAGAR, LUCKNOW',
    client: 'Resort & Celebration Venue',
    category: 'Banquets & Hospitality',
    badge: 'Luxury Resort',
    image: '/images/projects/golden-paradise.jpg',
    scope: 'Resort Infrastructure, Precision HVAC Air Handling, Fire Hydrant Network & Turnkey Architectural Finishing',
  },
  {
    id: 'emerald-paper',
    title: 'EMERALD PAPER',
    location: 'MOHANLALGANJ, LUCKNOW',
    client: 'Industrial Manufacturing',
    category: 'Industrial & Education',
    badge: 'Industrial Plant',
    image: '/images/projects/emerald-paper.jpg',
    scope: 'Heavy Industrial MEP Installation, LT/HT Substation, Industrial Dust Ventilation & Certified Fire Fighting',
  },
  {
    id: 'geeta-mart',
    title: 'GEETA WHOLESALE MART',
    location: 'PADRAUNA',
    client: 'Commercial Retail Hub',
    category: 'Retail & Showrooms',
    badge: 'Wholesale Mart',
    image: '/images/projects/geeta-mart.jpg',
    scope: 'Commercial Retail Fit-Out, Ductable AC Air Distribution, High-Illuminance Electricals & Heavy Load Management',
  },
  {
    id: 'idfc-bank',
    title: 'IDFC FIRST BANK',
    location: 'SULTANPUR BRANCH',
    client: 'Banking & Financial Institution',
    category: 'Corporate & Banking',
    badge: 'Banking Hub',
    image: '/images/projects/idfc-bank.jpg',
    scope: 'Bank Branch Turnkey Execution, High-Security Electrical Panels, Precision Server AC & Ergonomic Workstations',
  },
  {
    id: 'sanimax-cinemas',
    title: 'SANIMAX CINEMAS',
    location: 'PURVANCHAL',
    client: 'Entertainment & Multiplex',
    category: 'Banquets & Hospitality',
    badge: 'Multiplex Cinema',
    image: '/images/projects/sanimax-cinemas.jpg',
    scope: 'Cinema Acoustic Wall Paneling, Ultra-Quiet High-CFM HVAC Ducting, Emergency Lighting & Certified Fire Safety',
  },
  {
    id: 'arena-faizabad',
    title: 'ARENA SHOWROOM',
    location: 'SAHADATGANJ, FAIZABAD',
    client: 'Maruti Suzuki India Limited',
    category: 'Retail & Showrooms',
    badge: 'Automobile Arena',
    image: '/images/projects/arena-faizabad.jpg',
    scope: 'Corporate Identity Arena Fit-Out, VRV Air Conditioning, Glazed Canopy Lighting & High-Gloss Epoxy Flooring',
  },
  {
    id: 'physics-wallah',
    title: 'PHYSICS WALLAH',
    location: 'DEORIA',
    client: 'EdTech & Learning Centers',
    category: 'Industrial & Education',
    badge: 'Education Campus',
    image: '/images/projects/physics-wallah.jpg',
    scope: 'Multi-Story Coaching Campus Fit-Out, High-Occupancy Fresh Air Ventilation, Acoustic Partitions & MEP Synchronization',
  },
  {
    id: 'reliance-jewels',
    title: 'RELIANCE JEWELS',
    location: 'JHANSI',
    client: 'Reliance Retail Conglomerate',
    category: 'Retail & Showrooms',
    badge: 'Luxury Jewelry',
    image: '/images/projects/reliance-jewels.jpg',
    scope: 'Flagship Jewelry Store Interior, Specialized High-CRI Showcase Lighting, Cassette Air Conditioning & Security Paneling',
  },
  {
    id: 'arena-basti',
    title: 'ARENA',
    location: 'BASTI',
    client: 'Maruti Suzuki India Limited',
    category: 'Retail & Showrooms',
    badge: 'Automobile Arena',
    image: '/images/projects/arena-basti.jpg',
    scope: 'Two-Tier Automobile Arena Fit-Out, Central Ductable Cooling, Heavy-Duty Power Distribution & Premium Customer Lounges',
  },
  {
    id: 'azorte-gorakhpur',
    title: 'AZORTE',
    location: 'GORAKHPUR',
    client: 'Reliance Retail Conglomerate',
    category: 'Retail & Showrooms',
    badge: 'Fashion Flagship',
    image: '/images/projects/azorte-gorakhpur.jpg',
    scope: 'Reliance Fashion Flagship Turnkey Execution, High-Capacity Ductwork, Architectural Ceiling Baffles & Trial Room MEP',
  },
  {
    id: 'aisshpra-jewels',
    title: 'AISSHPRA',
    location: 'AZAMGARH',
    client: 'Aisshpra Gems & Jewels',
    category: 'Retail & Showrooms',
    badge: 'Luxury Showroom',
    image: '/images/projects/aisshpra-jewels.jpg',
    scope: 'Bespoke Luxury Jewelry Showroom, Architectural Facade Ribbing, Concealed Cassette HVAC & Master Carpentry Handover',
  },
];

const categories = [
  'All',
  'Retail & Showrooms',
  'Banquets & Hospitality',
  'Corporate & Banking',
  'Industrial & Education',
];

export default function Projects({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('All');
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

  const filteredProjects =
    activeTab === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section className="section-py bg-white projects-section" id="projects" ref={sectionRef}>
      <div className="container">
        {/* ==========================================================
            SECTION HEADER
            ========================================================== */}
        <div className="section-header text-center">
          <div className="section-eyebrow">Proven Engineering & Execution Track Record</div>
          <h2 className="section-title">
            <span className="highlight-keyword">PROJECTS</span> WE COMPLETED
          </h2>
          <p className="section-subtitle">
            Authentic commercial fit-outs, industrial facilities, and high-precision MEP installations delivered across Uttar Pradesh.
          </p>
        </div>

        {/* ==========================================================
            CATEGORY FILTER TABS
            ========================================================== */}
        <div className="portfolio-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
              <span className="filter-count">
                {cat === 'All'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* ==========================================================
            12 REAL PROJECTS GRID (BROCHURE MATCHING)
            ========================================================== */}
        <div className="portfolio-grid brochure-projects-grid">
          {filteredProjects.map((item, idx) => (
            <div
              key={item.id}
              className={`project-card brochure-project-card scroll-reveal ${inView ? 'is-in-view' : ''}`}
              style={{ transitionDelay: `${0.06 * idx}s` }}
            >
              {/* Card Photo Container */}
              <div className="project-media">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.location}`}
                  loading="lazy"
                />
                <span className="project-category">{item.badge}</span>
              </div>

              {/* Card Bottom Panel (Matching Official Flyer) */}
              <div className="project-body brochure-project-body">
                {/* Location Pin & Name Group */}
                <div className="project-location-group">
                  <div className="project-pin-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="project-title-meta">
                    <h3 className="project-card-title">{item.title}</h3>
                    <div className="project-card-location">{item.location}</div>
                  </div>
                </div>

                {/* Scope Description */}
                <p className="project-card-scope">{item.scope}</p>

                {/* Consult Action */}
                <button
                  onClick={onOpenModal}
                  className="project-inquire-btn"
                  aria-label={`Inquire about scope for ${item.title}`}
                >
                  <span>Consult Similar Scope</span>
                  <span className="btn-icon">&rarr;</span>
                </button>

                {/* Brochure Signature Corner Triangle Accent */}
                <div className="brochure-corner-accent" aria-hidden="true"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
