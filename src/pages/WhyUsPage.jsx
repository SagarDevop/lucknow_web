import React, { useEffect } from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import CtaBanner from '../components/CtaBanner';
import ScatteredDecor from '../components/ScatteredDecor';

const pillarsDeepDive = [
  {
    num: '01',
    title: 'Single-Point Turnkey Accountability',
    desc: 'Eliminating the risk and cost overruns of managing separate electrical, HVAC, and interior contractors. Ambient Engineers assumes single-point responsibility for engineering design, equipment procurement, site execution, and testing.',
    spec: 'ONE UNIFIED CONTRACT • ZERO BLAME-GAME',
  },
  {
    num: '02',
    title: '3D BIM Clash-Free Coordination',
    desc: 'Before any duct is cut or pipe is installed, our engineering draftsmen model every system in 3D to identify spatial conflicts with structural beams, false ceiling bulkheads, and electrical cable trays.',
    spec: 'ZERO ON-SITE RETROFITS • ON-SCHEDULE DELIVERY',
  },
  {
    num: '03',
    title: 'Code-Compliant Engineering Rigor',
    desc: 'Strict adherence to national and international standards including National Building Code (NBC 2016 Part 4), IS Electrical codes, and ASHRAE ventilation benchmarks ensuring safety, insurance approvals, and CFO NOC signoffs.',
    spec: '100% REGULATORY AUDITED • CALIBRATED TESTING',
  },
  {
    num: '04',
    title: 'Proactive Lifecycle Maintenance Support',
    desc: 'Our relationship does not end at handover. With guaranteed 2-hour emergency response SLAs and comprehensive preventative health checkups, we keep corporate facilities running smoothly for years to come.',
    spec: '2-HR MAXIMUM SLA • 24/7 HELPDESK AVAILABILITY',
  },
];

export default function WhyUsPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'Why Ambient Engineers — Competitive Advantage & Reliability';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="cad-page-wrapper">
      {/* Page Hero */}
      <section className="cad-page-hero">
        <ScatteredDecor section="why-choose-us" />
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">ADVANTAGE // AMB-WHY-PAGE</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">CONTRACTUAL INTEGRITY &bull; VERIFIABLE QUALITY</span>
          </div>

          <div className="cad-page-hero-content">
            <h1 className="cad-page-hero-title">
              WHY AMBIENT ENGINEERS &bull;<br />
              <span className="cad-headline-accent">OUR COMPETITIVE ADVANTAGE</span>
            </h1>
            <p className="cad-page-hero-lead">
              We go beyond just delivering services — we build long-term relationships by offering end-to-end solutions, clear communication and dependable support throughout your project journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Official Brochure Why Choose Us Component */}
      <WhyChooseUs onOpenModal={onOpenModal} />

      {/* Deep-Dive Architectural Advantage Ledger */}
      <section className="cad-why-deep-section">
        <div className="cad-editorial-container">
          <div className="cad-section-bar">
            <span className="cad-bar-label">INSTITUTIONAL ADVANTAGES // HOW WE WORK</span>
            <span className="cad-bar-line"></span>
            <span className="cad-bar-index">[ 04 FOUNDATIONAL PILLARS ]</span>
          </div>

          <div className="cad-deep-pillars-grid">
            {pillarsDeepDive.map((item, idx) => (
              <div key={idx} className="cad-deep-pillar-card">
                <div className="cad-deep-num">{item.num}</div>
                <h3 className="cad-deep-title">{item.title}</h3>
                <p className="cad-deep-desc">{item.desc}</p>
                <div className="cad-deep-spec">{item.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Client Partners Registry */}
      <Clients />

      {/* Bottom Consultation CTA */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}

