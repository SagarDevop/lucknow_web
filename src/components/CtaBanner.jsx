import React from 'react';
import ScatteredDecor from './ScatteredDecor';

export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="cad-cta-desk" id="contact-banner">
      <ScatteredDecor section="cta" />

      <div className="cad-editorial-container">
        <div className="cad-desk-box">
          {/* Top Title Block Header */}
          <div className="cad-desk-titleblock">
            <div className="cad-block-cell">
              <span className="cad-cell-label">PROJECT SHEET</span>
              <span className="cad-cell-value">TECHNICAL CONSULTATION &bull; RFP</span>
            </div>
            <div className="cad-block-cell">
              <span className="cad-cell-label">SCALE</span>
              <span className="cad-cell-value">1:1 FIELD LEVEL</span>
            </div>
            <div className="cad-block-cell">
              <span className="cad-cell-label">STATUS</span>
              <span className="cad-cell-value cad-status-active">ACCEPTING Q4 CONTRACTS</span>
            </div>
            <div className="cad-block-cell">
              <span className="cad-cell-label">LOCATION</span>
              <span className="cad-cell-value">LUCKNOW &bull; PAN-UP &bull; INDIA</span>
            </div>
          </div>

          <div className="cad-desk-content">
            <h2 className="cad-desk-headline">
              READY TO COMMENCE YOUR<br />
              <span className="cad-headline-accent">COMMERCIAL ENGINEERING PROJECT?</span>
            </h2>

            <p className="cad-desk-lead">
              Engage directly with our senior MEP and HVAC engineering leads. From initial heat load calculations to turnkey site execution and AMC lifecycle maintenance, we guarantee technical excellence.
            </p>

            <div className="cad-desk-actions">
              <button type="button" className="cad-btn-editorial cad-btn-large" onClick={onOpenModal}>
                <span>SCHEDULE ENGINEERING CONSULTATION</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <div className="cad-desk-telemetry">
                <a href="tel:+919792018889" className="cad-desk-contact">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 97920 18889</span>
                </a>
                <span className="cad-sep">&bull;</span>
                <a href="mailto:info@ambientengineers.in" className="cad-desk-contact">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>info@ambientengineers.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
