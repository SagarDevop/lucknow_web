import React, { useEffect } from 'react';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Clients from '../components/Clients';
import CtaBanner from '../components/CtaBanner';
import ScatteredDecor from '../components/ScatteredDecor';

export default function AboutUsPage({ onOpenModal }) {
  useEffect(() => {
    document.title = 'About Us | Ambient Engineers — Commercial Engineering & Contracting';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="cad-page-wrapper">
      {/* Editorial Page Hero Banner */}
      <section className="cad-page-hero">
        <ScatteredDecor section="about" />
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">DOSSIER // AMB-ABOUT-FULL</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">CORPORATE PROFILE &bull; AMBIENT ENGINEERS</span>
          </div>

          <div className="cad-page-hero-content">
            <h1 className="cad-page-hero-title">
              ENGINEERING MASTERY &bull;<br />
              <span className="cad-headline-accent">INTEGRATED CONTRACTING EXCELLENCE</span>
            </h1>
            <p className="cad-page-hero-lead">
              Headquartered in Lucknow, Ambient Engineers delivers high-performance HVAC systems, complex MEP infrastructure, and luxury commercial fit-outs with unyielding technical precision and code compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Core About Dossier & Capabilities */}
      <About onOpenModal={onOpenModal} />

      {/* Institutional Mission & Vision Manifesto */}
      <MissionVision />

      {/* Verified Enterprise Contractor Registry */}
      <Clients />

      {/* Bottom Consultation Desk */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}

