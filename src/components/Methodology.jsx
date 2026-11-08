import React from 'react';
import ScatteredDecor from './ScatteredDecor';

const steps = [
  {
    num: '01',
    title: 'Consultation & Spatial Audit',
    desc: 'Detailed structural load assessment, heat ingress modeling, airflow calculations and client program alignment.',
    spec: 'METRIC: HEAT LOAD (TR)',
  },
  {
    num: '02',
    title: 'Engineering & BIM Routing',
    desc: '3D clash-detection across HVAC ducts, cable trays, hydrants and plumbing conduits in compliance with IS and NBC codes.',
    spec: 'TOLERANCE: 0.0 CLASH',
  },
  {
    num: '03',
    title: 'Procurement & OEM Quality',
    desc: 'Direct sourcing of Tier-1 DAIKIN, VOLTAS, BLUE STAR, SCHNEIDER and SIEMENS equipment with calibrated factory test reports.',
    spec: 'STANDARD: TIER-1 OEM',
  },
  {
    num: '04',
    title: 'Execution & Supervision',
    desc: 'Certified site technicians executing torque-tested pipe joints, fire-stopped wall penetrations and laser-leveled ceiling grids.',
    spec: 'AUDIT: QA/QC CHECKLIST',
  },
  {
    num: '05',
    title: 'Testing, Commissioning & Handover',
    desc: 'Air volume balancing (TAB), hydrostatic pressure tests, electrical insulation megger audits, documented operational handover.',
    spec: 'SIGN-OFF: COMPREHENSIVE',
  },
];

export default function Methodology() {
  return (
    <section className="cad-methodology-section" id="methodology">
      <ScatteredDecor section="methodology" />

      <div className="cad-editorial-container">
        {/* Section Header */}
        <div className="cad-spec-header">
          <span className="cad-spec-dot"></span>
          <span className="cad-spec-code">PIPELINE // AMB-SOP-05</span>
          <span className="cad-spec-divider">|</span>
          <span className="cad-spec-title">RIGOROUS 5-STAGE CONTRACTING PROTOCOL</span>
        </div>

        <div className="cad-methodology-heading-box">
          <h2 className="cad-methodology-title">
            THE EXECUTION CONDUIT &bull; <span className="cad-headline-accent">FIELD PROTOCOL</span>
          </h2>
          <p className="cad-methodology-lead">
            Every square foot of engineering execution follows our verifiable milestone pipeline, minimizing turnaround time while ensuring zero punch-list defects.
          </p>
        </div>

        {/* Connected Technical Flow Diagram */}
        <div className="cad-conduit-pipeline">
          {/* Main flow line across all nodes */}
          <div className="cad-conduit-backbone"></div>

          <div className="cad-conduit-stations">
            {steps.map((st, idx) => (
              <div key={idx} className="cad-conduit-station">
                <div className="cad-station-indicator">
                  <span className="cad-station-num">{st.num}</span>
                  <span className="cad-station-halo"></span>
                </div>
                <div className="cad-station-card">
                  <span className="cad-station-metric">{st.spec}</span>
                  <h3 className="cad-station-title">{st.title}</h3>
                  <p className="cad-station-desc">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
