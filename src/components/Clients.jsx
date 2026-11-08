import React from 'react';
import ScatteredDecor from './ScatteredDecor';

const clientsData = [
  { name: 'NEXA', sector: 'Luxury Showrooms', logo: '/images/logos/nexa.svg', code: 'CTR-NX-01' },
  { name: 'Maruti Suzuki', sector: 'Automotive Network', logo: '/images/logos/maruti-suzuki.svg', code: 'CTR-MS-02' },
  { name: 'HDFC Bank', sector: 'Commercial Branches', logo: '/images/logos/hdfc-bank.svg', code: 'CTR-HDFC-03' },
  { name: 'ICICI Bank', sector: 'Regional Hubs', logo: '/images/logos/icici-bank.svg', code: 'CTR-ICICI-04' },
  { name: 'Axis Bank', sector: 'Financial Centres', logo: '/images/logos/axis-bank.svg', code: 'CTR-AXIS-05' },
  { name: 'State Bank of India', sector: 'Institutional Fit-Outs', logo: '/images/logos/sbi.svg', code: 'CTR-SBI-06' },
  { name: 'Reliance Digital', sector: 'Electronics Mega-Stores', logo: '/images/logos/reliance-digital.svg', code: 'CTR-RD-07' },
  { name: 'Reliance Trends', sector: 'Apparel Retail Chains', logo: '/images/logos/reliance-trends.svg', code: 'CTR-RT-08' },
  { name: 'Smart Bazaar', sector: 'Hypermarket HVAC', logo: '/images/logos/smart-bazaar.svg', code: 'CTR-SB-09' },
  { name: 'Tata Motors', sector: 'Automotive Facilities', logo: '/images/logos/tata.svg', code: 'CTR-TM-10' },
  { name: 'Larsen & Toubro', sector: 'Heavy Engineering & MEP', logo: '/images/logos/larsen-toubro.svg', code: 'CTR-LT-11' },
  { name: 'Adani Group', sector: 'Industrial Infrastructure', logo: '/images/logos/adani.svg', code: 'CTR-AG-12' },
  { name: 'KFC', sector: 'Commercial Kitchen Ventilation', logo: '/images/logos/kfc.svg', code: 'CTR-KFC-13' },
  { name: 'Pizza Hut', sector: 'Hospitality Turnkey Interiors', logo: '/images/logos/pizza-hut.svg', code: 'CTR-PH-14' },
];

export default function Clients() {
  return (
    <section className="cad-clients-strip" aria-label="Enterprise Engineering Partnerships">
      <ScatteredDecor section="clients" />

      {/* Top Architectural Scale Ruler */}
      <div className="cad-ruler-bar cad-ruler-top">
        <span className="cad-ruler-notch">0.0m</span>
        <span className="cad-ruler-line"></span>
        <span className="cad-ruler-spec">SCALE 1:1 &bull; ENTERPRISE CONTRACTOR REGISTRY</span>
        <span className="cad-ruler-line"></span>
        <span className="cad-ruler-notch">100.0m</span>
      </div>

      <div className="cad-clients-header">
        <div className="cad-tag-badge">
          <span className="cad-tag-dot"></span>
          <span>APPROVED CONTRACTOR // 150+ INSTITUTIONAL DEPLOYMENTS</span>
        </div>
        <p className="cad-clients-caption">
          Automotive &bull; Retail Mega-Stores &bull; Banking Networks &bull; Heavy Industrial Infrastructure
        </p>
      </div>

      {/* Infinite Seamless Continuous Marquee */}
      <div className="cad-marquee-wrapper">
        <div className="cad-marquee-rail">
          {clientsData.map((client, idx) => (
            <div key={`client-primary-${idx}`} className="cad-partner-cell">
              <span className="cad-cell-code">{client.code}</span>
              <div className="cad-cell-logo">
                <img src={client.logo} alt={client.name} loading="lazy" />
              </div>
              <div className="cad-cell-info">
                <span className="cad-cell-name">{client.name}</span>
                <span className="cad-cell-sector">{client.sector}</span>
              </div>
            </div>
          ))}

          {/* Seamless Duplicate Set */}
          {clientsData.map((client, idx) => (
            <div key={`client-dup-${idx}`} className="cad-partner-cell" aria-hidden="true">
              <span className="cad-cell-code">{client.code}</span>
              <div className="cad-cell-logo">
                <img src={client.logo} alt={client.name} loading="lazy" />
              </div>
              <div className="cad-cell-info">
                <span className="cad-cell-name">{client.name}</span>
                <span className="cad-cell-sector">{client.sector}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Technical Datum Bar */}
      <div className="cad-ruler-bar cad-ruler-bottom">
        <span className="cad-datum-mark">REF: AMB-CTR-REG-2024</span>
        <span className="cad-ruler-line"></span>
        <span className="cad-datum-mark">SPEC: ASHRAE &bull; NBC &bull; IS CODES</span>
      </div>
    </section>
  );
}
