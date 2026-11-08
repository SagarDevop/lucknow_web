import React from 'react';
import ScatteredDecor from './ScatteredDecor';

const missionPills = [
  {
    title: 'TECHNICAL COMPETENCE',
    desc: 'Certified HVAC & MEP Engineers',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'EFFICIENT COORDINATION',
    desc: 'Seamless Inter-Discipline BIM',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'QUALITY COMMITMENT',
    desc: 'Rigorous Testing & Sign-off',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: 'RELIABLE EXECUTION',
    desc: 'On-Time Handover Guarantee',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
        <circle cx="12" cy="15" r="1.5" />
      </svg>
    ),
  },
];

const visionPills = [
  {
    title: 'TRUSTED PARTNER',
    desc: 'Long-Term Contractual Integrity',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'COMMERCIAL ENGINEERING',
    desc: 'Offices, Retail, Banks, Malls',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="2" />
        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M8 18h.01M16 18h.01" />
      </svg>
    ),
  },
  {
    title: 'INTERIOR PROJECTS',
    desc: 'Turnkey Architectural Fit-Outs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'PAN-INDIA FOOTPRINT',
    desc: 'Across Uttar Pradesh & National Hubs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
  },
];

export default function MissionVision() {
  return (
    <section className="cad-mv-section" id="mission-vision">
      <ScatteredDecor section="mission-vision" />

      <div className="cad-editorial-container">
        {/* Section Header */}
        <div className="cad-spec-header">
          <span className="cad-spec-dot"></span>
          <span className="cad-spec-code">MANIFESTO // AMB-MV-01</span>
          <span className="cad-spec-divider">|</span>
          <span className="cad-spec-title">INSTITUTIONAL PURPOSE & LONG-RANGE VISION</span>
        </div>

        {/* ============================================================
            1. OUR MISSION (ASYMMETRIC ARCHITECTURAL ELEVATION)
            ============================================================ */}
        <div className="cad-manifesto-elevation">
          <div className="cad-elevation-badge">
            <span className="cad-elev-tag">ELEV-01 // OUR MISSION</span>
            <span className="cad-elev-rule"></span>
            <span className="cad-elev-ref">AMB-ENG-MSN</span>
          </div>

          <div className="cad-elevation-split">
            {/* Visual Flank */}
            <div className="cad-elevation-visual">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/mission-vision/mission-mep-hvac.jpg"
                  alt="Industrial Ceiling HVAC Ducting & MEP Piping"
                  className="cad-viewport-photo"
                  loading="lazy"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>HVAC &bull; MEP EXECUTION</span>
                  </div>
                  <div className="cad-telemetry-meta">SPEC: ASHRAE 62.1 &bull; SMACNA</div>
                </div>
              </div>
            </div>

            {/* Prose & Pillars Flank */}
            <div className="cad-elevation-body">
              <div className="cad-mission-callout">
                <div className="cad-target-indicator">
                  <span className="cad-target-core"></span>
                  <span className="cad-target-ring"></span>
                </div>
                <h3 className="cad-manifesto-heading">OUR MISSION</h3>
              </div>

              <blockquote className="cad-manifesto-quote">
                “To deliver dependable HVAC, MEP and interior execution solutions through technical competence, efficient coordination, and a steadfast commitment to engineering quality and client satisfaction.”
              </blockquote>

              <div className="cad-pillars-horizontal">
                {missionPills.map((pill, idx) => (
                  <div key={idx} className="cad-horiz-cell">
                    <div className="cad-horiz-icon">{pill.icon}</div>
                    <div className="cad-horiz-text">
                      <span className="cad-horiz-title">{pill.title}</span>
                      <span className="cad-horiz-desc">{pill.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider Datum */}
        <div className="cad-inter-datum">
          <span className="cad-datum-mark">ELEVATION TRANSITION</span>
          <span className="cad-ruler-line"></span>
          <span className="cad-datum-mark">STRATEGIC TRAJECTORY 2024–2030</span>
        </div>

        {/* ============================================================
            2. OUR VISION (INVERTED ASYMMETRIC ELEVATION)
            ============================================================ */}
        <div className="cad-manifesto-elevation cad-elevation-reverse">
          <div className="cad-elevation-badge">
            <span className="cad-elev-tag">ELEV-02 // OUR VISION</span>
            <span className="cad-elev-rule"></span>
            <span className="cad-elev-ref">AMB-ENG-VSN</span>
          </div>

          <div className="cad-elevation-split">
            {/* Visual Flank */}
            <div className="cad-elevation-visual">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/mission-vision/vision-commercial-skyline.jpg"
                  alt="Modern Commercial Skyline & Infrastructure"
                  className="cad-viewport-photo"
                  loading="lazy"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>NATIONAL INFRASTRUCTURE</span>
                  </div>
                  <div className="cad-telemetry-meta">GEOGRAPHY: PAN-INDIA SCALE</div>
                </div>
              </div>
            </div>

            {/* Prose & Pillars Flank */}
            <div className="cad-elevation-body">
              <div className="cad-mission-callout">
                <div className="cad-target-indicator cad-target-vision">
                  <span className="cad-target-core"></span>
                  <span className="cad-target-ring"></span>
                </div>
                <h3 className="cad-manifesto-heading">OUR VISION</h3>
              </div>

              <blockquote className="cad-manifesto-quote">
                “To establish Ambient Engineers as India's most trusted engineering and contracting partner for commercial engineering, intelligent MEP systems, and premium architectural interior execution.”
              </blockquote>

              <div className="cad-pillars-horizontal">
                {visionPills.map((pill, idx) => (
                  <div key={idx} className="cad-horiz-cell">
                    <div className="cad-horiz-icon">{pill.icon}</div>
                    <div className="cad-horiz-text">
                      <span className="cad-horiz-title">{pill.title}</span>
                      <span className="cad-horiz-desc">{pill.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
