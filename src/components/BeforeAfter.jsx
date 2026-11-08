import React, { useState, useRef } from 'react';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const onTouchMove = (e) => handleMove(e.touches[0].clientX);
  const onMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  return (
    <section className="cad-before-after-section" id="transformation">
      <div className="cad-editorial-container">
        {/* Section Header */}
        <div className="cad-spec-header">
          <span className="cad-spec-dot"></span>
          <span className="cad-spec-code">STUDY // DWG NO: TR-001 / REV-C</span>
          <span className="cad-spec-divider">|</span>
          <span className="cad-spec-title">INTERACTIVE SITE TRANSFORMATION STUDY</span>
        </div>

        <div className="cad-study-heading-box">
          <h2 className="cad-study-title">
            SITE EVOLUTION &bull; <span className="cad-headline-accent">RAW SHELL TO HIGH-SPEC INTERIOR</span>
          </h2>
          <p className="cad-study-lead">
            Drag the laser slider to inspect our turnkey HVAC ducting, acoustic ceiling, electrical cable trays and architectural finishes in place.
          </p>
        </div>

        {/* CAD Study Frame */}
        <div className="cad-study-frame">
          {/* Top Measurement Scale */}
          <div className="cad-study-scale cad-study-scale-top">
            <span>0.00m</span>
            <span className="cad-ruler-line"></span>
            <span>SECTION A-A // LONGITUDINAL FIT-OUT ELEVATION</span>
            <span className="cad-ruler-line"></span>
            <span>+15.80m</span>
          </div>

          <div
            className="cad-study-canvas"
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {/* After Image (Full Background) */}
            <img
              src="/images/after-office.jpg"
              alt="Commissioned High-Spec Commercial Office"
              className="cad-study-img cad-img-after"
            />
            <div className="cad-state-badge cad-badge-after">
              <span className="cad-state-dot cad-dot-green"></span>
              <span>COMMISSIONED FACILITY (AFTER)</span>
            </div>

            {/* Before Image (Clipped Left Layer) */}
            <div
              className="cad-study-clipped-layer"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img
                src="/images/before-office.jpg"
                alt="Pre-Fitout Unfinished Bare Concrete Shell"
                className="cad-study-img cad-img-before"
              />
              <div className="cad-state-badge cad-badge-before">
                <span className="cad-state-dot cad-dot-orange"></span>
                <span>BARE CONCRETE SHELL (BEFORE)</span>
              </div>
            </div>

            {/* Precision Laser Slider Divider */}
            <div className="cad-laser-divider" style={{ left: `${sliderPos}%` }}>
              <div className="cad-laser-line"></div>
              <div className="cad-laser-handle" title="Drag to Compare">
                <span className="cad-handle-notch">&lang;</span>
                <span className="cad-handle-core"></span>
                <span className="cad-handle-notch">&rang;</span>
              </div>
              <span className="cad-laser-coord">X: {sliderPos.toFixed(1)}%</span>
            </div>
          </div>

          {/* Bottom Measurement Scale */}
          <div className="cad-study-scale cad-study-scale-bottom">
            <span>±0.000 FFL</span>
            <span className="cad-ruler-line"></span>
            <span>PROJECT: REGIONAL COMMERCIAL HEADQUARTERS &bull; LUCKNOW</span>
            <span className="cad-ruler-line"></span>
            <span>100% COMMISSIONED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
