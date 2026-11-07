import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section hero-pure-video-section" id="hero">
      <div className="hero-video-container">
        <video
          className="hero-showcase-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-architectural-illustration.mp4" type="video/mp4" />
        </video>

        {/* Option 3: Architectural Blueprint Stamp (Ultra-sleek, Minimalist, No White Box) */}
        <div className="blueprint-stamp">
          <div className="stamp-eyebrow">
            <span className="stamp-dot"></span>
            <span>LUCKNOW HEADQUARTERS</span>
          </div>
          <h2 className="blueprint-stamp-title">
            ENGINEERING COMFORT<br />
            FOR A BETTER TOMORROW
          </h2>
          <div className="blueprint-stamp-sub">
            <span>DESIGN</span>
            <span className="stamp-bullet">&bull;</span>
            <span>EXECUTE</span>
            <span className="stamp-bullet">&bull;</span>
            <span>MAINTAIN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
