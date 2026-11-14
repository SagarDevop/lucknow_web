import React, { useState, useEffect } from 'react';
import '../styles/preloader.css';

export default function Preloader() {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let isFinished = false;

    // Fast-path if user has already seen the preloader in this session
    const hasSeen = typeof window !== 'undefined' && sessionStorage.getItem('ambient_preloader_seen');
    const minDisplay = hasSeen ? 600 : 1600;

    const dismissPreloader = () => {
      if (isFinished) return;
      isFinished = true;

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(minDisplay - elapsed, 0);

      setTimeout(() => {
        setIsFadingOut(true);
        try {
          sessionStorage.setItem('ambient_preloader_seen', 'true');
        } catch (e) {}

        // Unmount from DOM after fade-out transition finishes
        setTimeout(() => {
          setIsMounted(false);
        }, 400);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      dismissPreloader();
    } else {
      window.addEventListener('load', dismissPreloader);
      const timer = setTimeout(dismissPreloader, 2500); // 2.5s fallback safeguard
      return () => {
        window.removeEventListener('load', dismissPreloader);
        clearTimeout(timer);
      };
    }
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`ambient-preloader-overlay ${isFadingOut ? 'ambient-fade-out' : ''}`}
      aria-label="Loading Ambient Engineers"
      role="status"
    >
      <div className="ambient-preloader-bg-grid" />

      <div className="ambient-preloader-stage">
        {/* 3D Isometric Cube Assembly Loader */}
        <div className="ambient-isometric-loader">
          <div className="ambient-loader-ground">
            <div />
          </div>

          <div className="ambient-iso-box ambient-box-0"><div /></div>
          <div className="ambient-iso-box ambient-box-1"><div /></div>
          <div className="ambient-iso-box ambient-box-2"><div /></div>
          <div className="ambient-iso-box ambient-box-3"><div /></div>
          <div className="ambient-iso-box ambient-box-4"><div /></div>
          <div className="ambient-iso-box ambient-box-5"><div /></div>
          <div className="ambient-iso-box ambient-box-6"><div /></div>
          <div className="ambient-iso-box ambient-box-7"><div /></div>
        </div>

        {/* Brand Caption & System Telemetry */}
        <div className="ambient-preloader-telemetry">
          <div className="ambient-preloader-brand-title">
            AMBIENT ENGINEERS
          </div>
          <div className="ambient-preloader-status-pill">
            <span className="ambient-preloader-pulse-dot" />
            <span>ARCHITECTURAL HVAC &bull; MEP INFRASTRUCTURE</span>
          </div>
          <div className="ambient-preloader-bar-wrap">
            <div className="ambient-preloader-bar-fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
