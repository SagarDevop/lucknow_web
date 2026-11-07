import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Site Audit & Heat Calculations',
    desc: '3D laser survey, architectural load study, solar radiation analysis, and ASHRAE-compliant CFM/tonnage sizing to ensure maximum operational efficiency.',
  },
  {
    num: '02',
    title: '3D MEP & Joinery Coordination',
    desc: 'Clash detection across ductwork, cable trays, sprinkler lines, and ceiling finishes before fabrication, preventing on-site structural interferences.',
  },
  {
    num: '03',
    title: 'Off-Site Precision Fabrication',
    desc: 'Precision pre-insulated ducting, modular electrical panels, and bespoke millwork crafted in controlled workshop environments for pristine finish quality.',
  },
  {
    num: '04',
    title: 'Systematic On-Site Installation',
    desc: 'Deployment of specialized MEP technicians and master carpenters adhering to strict safety protocols, scaffolding regulations, and milestone timelines.',
  },
  {
    num: '05',
    title: 'Testing, Commissioning & Handover',
    desc: 'Pressure testing of refrigerant lines, dielectric insulation checks, CFM anemometer balancing, fire safety sign-off, and operational documentation.',
  },
];

export default function Methodology() {
  return (
    <section className="section-py bg-secondary" id="methodology">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow">Our Methodology</div>
          <h2 className="section-title">The Five-Stage <span className="highlight-keyword">Execution Standard</span></h2>
          <p className="section-subtitle">
            How we eliminate project risk, prevent budget deviations, and deliver institutional-grade engineering every single time.
          </p>
        </div>

        <div className="methodology-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="methodology-card">
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
