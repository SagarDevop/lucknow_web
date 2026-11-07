import React from 'react';
import Services from '../components/Services';
import CtaBanner from '../components/CtaBanner';

export default function ServicesPage({ onOpenModal }) {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section-py bg-white">
        <div className="container text-center" style={{ maxWidth: '840px', margin: '0 auto 60px' }}>
          <div className="section-eyebrow">Comprehensive Engineering</div>
          <h1 className="hero-manifesto-title">Specialized MEP, HVAC &amp; Interior Fit-Out Services</h1>
          <p className="hero-manifesto-desc">
            Explore our end-to-end technical capabilities. We design, execute, and maintain critical institutional infrastructure for enterprise clients across India.
          </p>
        </div>
      </section>

      <Services onOpenModal={onOpenModal} />
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}

