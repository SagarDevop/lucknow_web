import React from 'react';

export default function Pathways({ onOpenModal }) {
  const scrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-py bg-secondary" id="pathways">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">Integrated Capabilities</div>
          <h2 className="section-title">We Deliver Exactly <span className="highlight-keyword">Where You Need Us</span></h2>
          <p className="section-subtitle">
            Whether you require complete end-to-end interior execution or high-precision mechanical and electrical contracting, Ambient Engineers provides tailored project delivery.
          </p>
        </div>

        <div className="panorama-grid">
          {/* Pathway 1: Turnkey Commercial Fit-Out */}
          <div className="panorama-card">
            <div className="panorama-media">
              <img
                src="/images/path-turnkey.jpg"
                alt="Turnkey Commercial Interior Fit-Out"
                loading="lazy"
              />
              <span className="panorama-tag">Full Turnkey</span>
            </div>
            <div className="panorama-body">
              <div>
                <h3>Turnkey Commercial Fit-Outs</h3>
                <p>
                  Complete interior design execution from bare shell to operational handover. Civil carpentry, false ceilings, custom acoustic paneling, flooring, lighting, and MEP synchronization handled under a single contract.
                </p>
                <ul className="service-features" style={{ marginBottom: '24px' }}>
                  <li>Single-Point Project Accountability</li>
                  <li>Zero Subcontractor Friction</li>
                  <li>Strict Milestone Tracking &amp; Delivery</li>
                </ul>
              </div>
              <a href="#services" onClick={scrollToServices} className="btn btn-outline btn-sm" style={{ width: 'fit-content' }}>
                <span>Explore Fit-Out Services</span>
                <span className="btn-icon">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Pathway 2: Specialized MEP Contracting */}
          <div className="panorama-card">
            <div className="panorama-media">
              <img
                src="/images/path-mep.jpg"
                alt="Specialized MEP Contracting and HVAC"
                loading="lazy"
              />
              <span className="panorama-tag">Engineering Division</span>
            </div>
            <div className="panorama-body">
              <div>
                <h3>Specialized MEP Engineering</h3>
                <p>
                  Heavy-duty commercial HVAC, central ventilation, VRV/VRF systems, high-tension electrical distribution, fire protection hydraulics, and plumbing infrastructure for demanding industrial and commercial complexes.
                </p>
                <ul className="service-features" style={{ marginBottom: '24px' }}>
                  <li>Energy-Optimized HVAC Heat Calculations</li>
                  <li>NBC &amp; ASHRAE Standard Compliance</li>
                  <li>Precision Testing &amp; Commissioning</li>
                </ul>
              </div>
              <button onClick={onOpenModal} className="btn btn-outline btn-sm" style={{ width: 'fit-content' }}>
                <span>Consult Our MEP Engineers</span>
                <span className="btn-icon">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
