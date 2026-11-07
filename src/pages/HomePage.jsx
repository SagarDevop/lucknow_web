import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Services from '../components/Services';
import Industries from '../components/Industries';
import BeforeAfter from '../components/BeforeAfter';
import Methodology from '../components/Methodology';
import Projects from '../components/Projects';
import CtaBanner from '../components/CtaBanner';

export default function HomePage({ onOpenModal }) {
  return (
    <main>
      {/* 100vw x 100vh Full Screen Pure Architectural Video Hero */}
      <Hero />

      {/* Verified Continuous Client Logo Marquee Slider directly underneath Hero */}
      <Clients />

      {/* About Company, Capabilities & Working Approach directly after Client Slider */}
      <About onOpenModal={onOpenModal} />

      {/* Institutional Mission & Vision Section */}
      <MissionVision />

      {/* Core Solutions Matrix */}
      <Services onOpenModal={onOpenModal} />

      {/* Official Brochure: Industries We Serve */}
      <Industries onOpenModal={onOpenModal} />

      {/* Interactive Transformation Slider */}
      <BeforeAfter />

      {/* 5-Stage Execution Framework */}
      <Methodology />

      {/* Landmark Projects Portfolio */}
      <Projects onOpenModal={onOpenModal} />

      {/* Mid-Page Consultation Banner */}
      <CtaBanner onOpenModal={onOpenModal} />
    </main>
  );
}

