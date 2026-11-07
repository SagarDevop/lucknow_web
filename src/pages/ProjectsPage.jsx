import React from 'react';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import CtaBanner from '../components/CtaBanner';

export default function ProjectsPage({ onOpenModal }) {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section-py bg-white">
        <div className="container text-center" style={{ maxWidth: '840px', margin: '0 auto 60px' }}>
          <div className="section-eyebrow">Portfolio Archive</div>
          <h1 className="hero-manifesto-title">Landmark Commercial &amp; Industrial Projects</h1>
          <p className="hero-manifesto-desc">
            Explore 150+ successfully commissioned projects delivered on schedule and with single-point accountability.
          </p>
        </div>
      </section>

      <Projects onOpenModal={onOpenModal} />
      <Clients />
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}

