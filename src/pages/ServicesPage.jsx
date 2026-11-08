import React, { useEffect } from 'react';
import Services from '../components/Services';
import CtaBanner from '../components/CtaBanner';
import ScatteredDecor from '../components/ScatteredDecor';
import { useRouter } from '../context/RouterContext';

export default function ServicesPage({ onOpenModal }) {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Core Engineering Services | Ambient Engineers Lucknow';
    window.scrollTo(0, 0);
  }, []);

  const serviceLinks = [
    { name: 'HVAC Works', path: '/services/hvac-works', desc: 'VRF/VRV, Chillers, AHU & Air Distribution', code: 'DISC-01' },
    { name: 'MEP Works', path: '/services/mep-works', desc: 'LT Panels, Cabling, Plumbing & Fire Hydrants', code: 'DISC-02' },
    { name: 'Interior Fit-Out Works', path: '/services/interior-fit-out-works', desc: 'Acoustic Ceilings, Glass Partitions & Luxury Casework', code: 'DISC-03' },
    { name: 'AMC Works', path: '/services/amc-works', desc: 'Preventative Maintenance, 2-Hr SLA & Diagnostics', code: 'DISC-04' },
  ];

  return (
    <main className="cad-page-wrapper">
      {/* Service Page Hero Banner */}
      <section className="cad-page-hero">
        <ScatteredDecor section="services" />
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">SERVICES // AMB-SRV-OVERVIEW</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">INTEGRATED ENGINEERING &amp; CONTRACTING DISCIPLINES</span>
          </div>

          <div className="cad-page-hero-content">
            <h1 className="cad-page-hero-title">
              OUR CORE DISCIPLINES &bull;<br />
              <span className="cad-headline-accent">SPECIALIZED ENGINEERING DOMAINS</span>
            </h1>
            <p className="cad-page-hero-lead">
              Ambient Engineers provides complete single-point engineering contracting across commercial HVAC, integrated MEP systems, turnkey architectural fit-outs, and lifecycle AMC facility management.
            </p>
          </div>

          {/* Quick Sub-Navigation Grid */}
          <div className="cad-service-nav-grid">
            {serviceLinks.map((srv, idx) => (
              <div
                key={idx}
                className="cad-service-nav-card"
                onClick={() => navigate(srv.path)}
                role="button"
                tabIndex={0}
              >
                <div className="cad-srv-card-top">
                  <span className="cad-srv-code">{srv.code}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <h3 className="cad-srv-name">{srv.name}</h3>
                <p className="cad-srv-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Architectural Spreads */}
      <Services onOpenModal={onOpenModal} />

      {/* Bottom Consultation CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}
