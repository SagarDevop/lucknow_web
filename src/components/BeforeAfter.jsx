import React, { useState, useRef, useCallback } from 'react';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !e.touches[0]) return;
    updatePosition(e.touches[0].clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section className="section-py bg-white" id="difference">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">Transformation Showcase</div>
          <h2 className="section-title">From Bare Concrete to <span className="highlight-keyword">Operational Masterpiece</span></h2>
          <p className="section-subtitle">
            Drag the slider horizontally to witness our turnkey transformation from unserviced raw shell into an immaculately finished, climate-controlled commercial interior.
          </p>
        </div>

        <div
          className="before-after-wrapper"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseUp={stopDragging}
          onTouchEnd={stopDragging}
          onMouseLeave={stopDragging}
        >
          {/* Before Layer (Base) */}
          <div className="ba-image-container ba-before">
            <img
              src="/images/before-office.jpg"
              alt="Raw Shell Before Fit-Out"
              loading="lazy"
            />
            <span className="ba-badge badge-before">Bare Concrete Shell</span>
          </div>

          {/* After Layer (Clipped) */}
          <div
            className="ba-image-container ba-after"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/images/after-office.jpg"
              alt="Finished Luxury Commercial Interior Fit-Out"
              loading="lazy"
            />
            <span className="ba-badge badge-after">Completed Fit-Out &amp; HVAC</span>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="ba-handle"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="ba-handle-line"></div>
            <div className="ba-handle-circle" aria-label="Drag to compare before and after">
              <span>&#8596;</span>
            </div>
          </div>
        </div>

        <p className="ba-caption">Drag the slider left and right to inspect the MEP integration and architectural finish.</p>
      </div>
    </section>
  );
}
