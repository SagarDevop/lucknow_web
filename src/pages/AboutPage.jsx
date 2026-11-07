import React from 'react';
import About from '../components/About';
import Methodology from '../components/Methodology';
import Clients from '../components/Clients';
import CtaBanner from '../components/CtaBanner';

export default function AboutPage({ onOpenModal }) {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section-py bg-white">
        <div className="container text-center" style={{ maxWidth: '840px', margin: '0 auto 60px' }}>
          <div className="section-eyebrow">Our Story &amp; Standards</div>
          <h1 className="hero-manifesto-title">Engineering Comfort for a Better Tomorrow</h1>
          <p className="hero-manifesto-desc">
            Learn more about Ambient Engineers' 12+ years journey, technical leadership, and adherence to international safety codes.
          </p>
        </div>
      </section>

      <About onOpenModal={onOpenModal} />
      <Methodology />
      <Clients />
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}

