import React, { useState } from 'react';
import ScatteredDecor from './ScatteredDecor';

const completedProjects = [
  {
    title: 'Star Light Palace',
    location: 'Dubagga, Lucknow',
    scope: 'Grand Banquet HVAC, Lighting & Luxury Fit-Out',
    category: 'banquet',
    categoryLabel: 'Banquets & Hospitality',
    img: '/images/projects/starlight-palace.jpg',
    code: 'PRJ-LKO-01',
    gps: '26.8715° N, 80.8652° E',
  },
  {
    title: 'Golden Paradise Resort Banquet',
    location: 'Indira Nagar, Lucknow',
    scope: 'Resort Central Air-Conditioning & Turnkey MEP',
    category: 'banquet',
    categoryLabel: 'Banquets & Hospitality',
    img: '/images/projects/golden-paradise.jpg',
    code: 'PRJ-LKO-02',
    gps: '26.8835° N, 80.9984° E',
  },
  {
    title: 'Emerald Paper',
    location: 'Mohanlalganj, Lucknow',
    scope: 'Industrial Plant Heavy Ventilation & Fire Hydrants',
    category: 'industrial',
    categoryLabel: 'Industrial & Warehousing',
    img: '/images/projects/emerald-paper.jpg',
    code: 'PRJ-LKO-03',
    gps: '26.6742° N, 80.9856° E',
  },
  {
    title: 'Geeta Wholesale Mart',
    location: 'Padrauna',
    scope: 'Commercial Wholesale Hypermarket HVAC & MEP',
    category: 'retail',
    categoryLabel: 'Retail & Showrooms',
    img: '/images/projects/geeta-mart.jpg',
    code: 'PRJ-UP-04',
    gps: '26.9025° N, 83.9818° E',
  },
  {
    title: 'IDFC First Bank',
    location: 'Sultanpur Branch',
    scope: 'Commercial Bank Interior Fit-Out & Safe Power MEP',
    category: 'banking',
    categoryLabel: 'Banking & Corporate',
    img: '/images/projects/idfc-bank.jpg',
    code: 'PRJ-UP-05',
    gps: '26.2648° N, 82.0727° E',
  },
  {
    title: 'Sanimax Cinemas',
    location: 'Purvanchal',
    scope: 'Acoustic Cinema Auditorium High-Static HVAC',
    category: 'civic',
    categoryLabel: 'Education & Civic',
    img: '/images/projects/sanimax-cinemas.jpg',
    code: 'PRJ-UP-06',
    gps: '26.7606° N, 83.3732° E',
  },
  {
    title: 'Maruti Suzuki Arena Showroom',
    location: 'Sahadatganj, Faizabad',
    scope: 'Automotive Dealership Turnkey HVAC & MEP Package',
    category: 'retail',
    categoryLabel: 'Retail & Showrooms',
    img: '/images/projects/arena-faizabad.jpg',
    code: 'PRJ-UP-07',
    gps: '26.7731° N, 82.1460° E',
  },
  {
    title: 'Physics Wallah (PW Vidyapeeth)',
    location: 'Deoria',
    scope: 'Multi-Floor High-Density Education Campus HVAC',
    category: 'civic',
    categoryLabel: 'Education & Civic',
    img: '/images/projects/physics-wallah.jpg',
    code: 'PRJ-UP-08',
    gps: '26.5024° N, 83.7791° E',
  },
  {
    title: 'Reliance Jewels',
    location: 'Jhansi',
    scope: 'High-Lux Jewelry Showroom HVAC & Interior Elegance',
    category: 'retail',
    categoryLabel: 'Retail & Showrooms',
    img: '/images/projects/reliance-jewels.jpg',
    code: 'PRJ-UP-09',
    gps: '25.4484° N, 78.5685° E',
  },
  {
    title: 'Maruti Suzuki Arena',
    location: 'Basti',
    scope: 'Large-Format Automobile Facility MEP & Air Systems',
    category: 'retail',
    categoryLabel: 'Retail & Showrooms',
    img: '/images/projects/arena-basti.jpg',
    code: 'PRJ-UP-10',
    gps: '26.7995° N, 82.7630° E',
  },
  {
    title: 'Azorte',
    location: 'Gorakhpur',
    scope: 'Apparel Flagship Store High-Capacity VRF Systems',
    category: 'retail',
    categoryLabel: 'Retail & Showrooms',
    img: '/images/projects/azorte-gorakhpur.jpg',
    code: 'PRJ-UP-11',
    gps: '26.7606° N, 83.3732° E',
  },
  {
    title: 'Aisshpra Gems & Jewels',
    location: 'Azamgarh',
    scope: 'Premium Jewelry Commercial Interior & Climate Control',
    category: 'retail',
    categoryLabel: 'Retail & Showrooms',
    img: '/images/projects/aisshpra-jewels.jpg',
    code: 'PRJ-UP-12',
    gps: '26.0688° N, 83.1836° E',
  },
];

const layers = [
  { id: 'all', label: 'ALL DEPLOYMENTS', count: 12 },
  { id: 'retail', label: 'RETAIL & SHOWROOMS', count: 5 },
  { id: 'banquet', label: 'BANQUETS & HOSPITALITY', count: 2 },
  { id: 'industrial', label: 'INDUSTRIAL & WAREHOUSING', count: 1 },
  { id: 'banking', label: 'BANKING & CORPORATE', count: 1 },
  { id: 'civic', label: 'EDUCATION & CIVIC', count: 3 },
];

export default function Projects({ onOpenModal }) {
  const [activeLayer, setActiveLayer] = useState('all');

  const filteredProjects =
    activeLayer === 'all'
      ? completedProjects
      : completedProjects.filter((p) => p.category === activeLayer);

  return (
    <section className="cad-projects-section" id="projects">
      <ScatteredDecor section="projects" />

      <div className="cad-editorial-container">
        {/* Section Header */}
        <div className="cad-spec-header">
          <span className="cad-spec-dot"></span>
          <span className="cad-spec-code">ARCHIVE // AMB-PRJ-12</span>
          <span className="cad-spec-divider">|</span>
          <span className="cad-spec-title">OFFICIAL COMMERCIAL PROJECT ARCHIVE</span>
        </div>

        <div className="cad-projects-heading-box">
          <div className="cad-heading-left">
            <h2 className="cad-projects-title">
              PROJECTS WE COMPLETED &bull; <span className="cad-headline-accent">MASTER ARCHIVE</span>
            </h2>
            <p className="cad-projects-lead">
              Verified turnkey engineering deployments across Uttar Pradesh. Explore our landmark retail flagships, banking hubs, luxury banquets, and heavy industrial installations.
            </p>
          </div>

          <div className="cad-heading-right">
            <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
              <span>ENQUIRE SIMILAR SCOPE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* CAD Layer Selector */}
        <div className="cad-layer-selector">
          <span className="cad-selector-label">CAD FILTER:</span>
          {layers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              className={`cad-layer-btn ${activeLayer === layer.id ? 'active' : ''}`}
              onClick={() => setActiveLayer(layer.id)}
            >
              <span>{layer.label}</span>
              <span className="cad-layer-pill">({layer.count})</span>
            </button>
          ))}
        </div>

        {/* Immersive Projects Gallery with Brochure Pin Badges */}
        <div className="cad-projects-gallery">
          {filteredProjects.map((prj, idx) => (
            <div key={idx} className="cad-project-card">
              <div className="cad-card-viewport">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img src={prj.img} alt={prj.title} loading="lazy" />
                <div className="cad-card-telemetry">
                  <span className="cad-prj-code">{prj.code}</span>
                  <span className="cad-prj-gps">{prj.gps}</span>
                </div>
              </div>

              <div className="cad-card-meta">
                {/* Official Brochure Pin Marker Bar */}
                <div className="cad-brochure-pin-row">
                  <div className="cad-brochure-pin-badge" title={prj.location}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#EA580C">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="cad-brochure-pin-info">
                    <h3 className="cad-brochure-prj-name">{prj.title}</h3>
                    <span className="cad-brochure-loc">{prj.location}</span>
                  </div>
                </div>

                <div className="cad-meta-subline">
                  <span className="cad-meta-category">{prj.categoryLabel}</span>
                  <p className="cad-meta-scope">{prj.scope}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
