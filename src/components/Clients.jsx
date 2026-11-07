import React from 'react';

const clientsData = [
  {
    name: 'NEXA',
    sector: 'Luxury Showrooms',
    logo: '/images/logos/nexa.svg',
  },
  {
    name: 'Maruti Suzuki',
    sector: 'Automotive Network',
    logo: '/images/logos/maruti-suzuki.svg',
  },
  {
    name: 'HDFC Bank',
    sector: 'Commercial Branches',
    logo: '/images/logos/hdfc-bank.svg',
  },
  {
    name: 'ICICI Bank',
    sector: 'Regional Hubs',
    logo: '/images/logos/icici-bank.svg',
  },
  {
    name: 'Axis Bank',
    sector: 'Financial Centres',
    logo: '/images/logos/axis-bank.svg',
  },
  {
    name: 'State Bank of India',
    sector: 'Institutional Fit-Outs',
    logo: '/images/logos/sbi.svg',
  },
  {
    name: 'Reliance Digital',
    sector: 'Electronics Mega-Stores',
    logo: '/images/logos/reliance-digital.svg',
  },
  {
    name: 'Reliance Trends',
    sector: 'Apparel Retail Chains',
    logo: '/images/logos/reliance-trends.svg',
  },
  {
    name: 'Smart Bazaar',
    sector: 'Hypermarket Commercial HVAC',
    logo: '/images/logos/smart-bazaar.svg',
  },
  {
    name: 'Tata Motors',
    sector: 'Automotive Facilities',
    logo: '/images/logos/tata.svg',
  },
  {
    name: 'Larsen & Toubro',
    sector: 'Heavy Engineering & MEP',
    logo: '/images/logos/larsen-toubro.svg',
  },
  {
    name: 'Adani Group',
    sector: 'Industrial Infrastructure',
    logo: '/images/logos/adani.svg',
  },
  {
    name: 'KFC',
    sector: 'Commercial Kitchen Ventilation',
    logo: '/images/logos/kfc.svg',
  },
  {
    name: 'Pizza Hut',
    sector: 'Hospitality Turnkey Interiors',
    logo: '/images/logos/pizza-hut.svg',
  },
];

export default function Clients() {
  return (
    <section className="trust-strip" aria-label="Trusted Enterprise Clients">
      {/* Refined Header */}
      <div className="trust-strip-header">
        <span className="trust-eyebrow-line"></span>
        <div className="trust-header-badge">
          <span className="trust-badge-dot"></span>
          <span className="trust-title">
            TRUSTED BY 150+ INDUSTRY LEADERS &bull; AUTOMOTIVE &bull; RETAIL &bull; BANKING &bull; INDUSTRIAL
          </span>
        </div>
        <span className="trust-eyebrow-line"></span>
      </div>

      {/* Infinite Seamless Continuous Slider */}
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Primary client cards set */}
          {clientsData.map((client, idx) => (
            <div key={`client-primary-${idx}`} className="client-brand-card">
              <div className="client-logo-stage">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-real-logo"
                  loading="lazy"
                />
              </div>
              <span className="client-card-divider"></span>
              <div className="client-brand-info">
                <span className="client-brand-name">{client.name}</span>
                <span className="client-brand-tag">{client.sector}</span>
              </div>
            </div>
          ))}

          {/* Duplicate set for 100% seamless, uninterrupted loop */}
          {clientsData.map((client, idx) => (
            <div key={`client-duplicate-${idx}`} className="client-brand-card" aria-hidden="true">
              <div className="client-logo-stage">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-real-logo"
                  loading="lazy"
                />
              </div>
              <span className="client-card-divider"></span>
              <div className="client-brand-info">
                <span className="client-brand-name">{client.name}</span>
                <span className="client-brand-tag">{client.sector}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
