import React from 'react';
import ScatteredDecor, {
  HVACDuctIllustration,
  VentilationIllustration,
  PipelineIllustration,
  ElectricalSymbolIllustration,
  CeilingGridIllustration,
  ServiceGearIllustration,
} from './ScatteredDecor';

const corePillars = [
  { label: 'SINGLE POINT SOLUTION', desc: 'Integrated MEP & Fit-Out Delivery' },
  { label: 'QUALITY EXECUTION', desc: 'Rigorous IS & ASHRAE Compliance' },
  { label: 'EXPERIENCED TEAM', desc: 'Certified Engineering Specialists' },
  { label: 'LONG-TERM PARTNERSHIP', desc: 'Dedicated Lifecycle AMC Contracts' },
];

export default function Services({ onOpenModal }) {
  return (
    <section className="cad-services-section" id="services">
      <ScatteredDecor section="services" />

      <div className="cad-editorial-container">
        {/* Section Header */}
        <div className="cad-spec-header">
          <span className="cad-spec-dot"></span>
          <span className="cad-spec-code">DISCIPLINES // AMB-SRV-CORE</span>
          <span className="cad-spec-divider">|</span>
          <span className="cad-spec-title">ENGINEERING CAPABILITIES & SCOPE MATRIX</span>
        </div>

        {/* Section Title & Credential Strip */}
        <div className="cad-services-intro">
          <div className="cad-intro-col">
            <h2 className="cad-services-heading">
              CORE ENGINEERING<br />
              <span className="cad-headline-accent">&amp; CONTRACTING DISCIPLINES</span>
            </h2>
            <p className="cad-services-lead">
              Comprehensive turnkey contracting capabilities across commercial mechanical, electrical, plumbing, and architectural interior domains.
            </p>
          </div>

          <div className="cad-pillars-strip">
            {corePillars.map((p, idx) => (
              <div key={idx} className="cad-pillar-badge">
                <span className="cad-pillar-dot"></span>
                <div className="cad-pillar-text">
                  <span className="cad-pillar-label">{p.label}</span>
                  <span className="cad-pillar-sub">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            DISCIPLINE 01: HVAC WORKS (COMFORT | EFFICIENCY | RELIABILITY)
            ============================================================ */}
        <div className="cad-discipline-spread cad-hvac-spread">
          <div className="cad-spread-header">
            <div className="cad-spread-title-box">
              <span className="cad-spread-num">DISCIPLINE // 01</span>
              <h3 className="cad-spread-name">HVAC ENGINEERING &amp; EXECUTION</h3>
              <span className="cad-spread-subtitle">COMFORT &bull; THERMAL EFFICIENCY &bull; RELIABILITY</span>
            </div>
            <div className="cad-spread-tag">ASHRAE 62.1 &bull; 90.1</div>
          </div>

          <div className="cad-spread-body">
            {/* Left Scope Checklist */}
            <div className="cad-spread-checklist">
              <ul className="cad-check-grid">
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>VRF / VRV Systems:</strong> Modular heat pump &amp; heat recovery inverter VRF architectures.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Ductable &amp; Packaged Units:</strong> High-CFM commercial packaged units &amp; rooftop chillers.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Chillers &amp; AHU Central Plants:</strong> Water-cooled &amp; air-cooled centrifugal chillers with custom AHUs.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Cassette &amp; Hi-Wall Splits:</strong> Multi-split cassette deployment for retail zones and office pods.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Air Distribution &amp; Ductwork:</strong> GI sheet metal ducting, acoustic lining, grilles, diffusers &amp; fire dampers.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Piping &amp; Thermal Insulation:</strong> Hard copper piping, nitrile rubber insulation &amp; condensate headers.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Testing &amp; Balancing:</strong> Comprehensive TAB (Testing, Adjusting, Balancing) airflow certification.</span>
                </li>
              </ul>

              <div className="cad-spread-actions">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>CONSULT HVAC PROJECT</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Asymmetric Stage: Authentic Photo + Embedded Technical SVG */}
            <div className="cad-spread-stage">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/services/hvac-cassette-ceiling.jpg"
                  alt="Industrial Ceiling VRF and Ducting Installation"
                  className="cad-viewport-photo"
                  loading="lazy"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>CENTRAL PLANT VRF</span>
                  </div>
                  <div className="cad-telemetry-meta">CFM AIR BALANCED &bull; R-410A / R-32</div>
                </div>
              </div>

              {/* Overlapping Technical Line-Art Duct Illustration */}
              <div className="cad-embedded-lineart">
                <HVACDuctIllustration size={220} opacity={0.3} accent />
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            DISCIPLINE 02: MEP WORKS (INTEGRATED | SAFE | EFFICIENT)
            ============================================================ */}
        <div className="cad-discipline-spread cad-mep-spread">
          <div className="cad-spread-header">
            <div className="cad-spread-title-box">
              <span className="cad-spread-num">DISCIPLINE // 02</span>
              <h3 className="cad-spread-name">MEP INTEGRATED SERVICES</h3>
              <span className="cad-spread-subtitle">INTEGRATED SYSTEMS &bull; SAFE &bull; EFFICIENT</span>
            </div>
            <div className="cad-spread-tag">NBC PART 4 &bull; IS 732</div>
          </div>

          <div className="cad-spread-body">
            {/* Left Stage: Authentic Photo + Embedded Schematics */}
            <div className="cad-spread-stage">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/services/mep-electrical-panels.jpg"
                  alt="Commercial LT Electrical Distribution Panels"
                  className="cad-viewport-photo"
                  loading="lazy"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>LT/HT PANEL HUB</span>
                  </div>
                  <div className="cad-telemetry-meta">415V 3-PHASE &bull; DUAL SOURCE AUTO-TRANSFER</div>
                </div>
              </div>

              {/* Overlapping Technical Electrical Schematic & Pipe Rack */}
              <div className="cad-embedded-lineart">
                <ElectricalSymbolIllustration size={170} opacity={0.28} />
              </div>
            </div>

            {/* Right Scope Checklist */}
            <div className="cad-spread-checklist">
              <ul className="cad-check-grid">
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>LT / HT Electrical Works:</strong> Transformer feeder cables, busbar trunking &amp; switchgear installation.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Distribution Panels &amp; DBs:</strong> Compartmentalized MCCs, PCCs, APFC power factor capacitor banks.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Cable Routing &amp; Trays:</strong> Perforated &amp; ladder GI cable trays, structured cabling, bus ducts.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Earthing &amp; Lightning Arresters:</strong> Chemical earthing pits, copper strip rings &amp; ESE lightning protection.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Plumbing &amp; Water Supply:</strong> CPVC/PPR domestic lines, hydro-pneumatic pumping sets, drainage headers.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Fire Hydrants &amp; Sprinklers:</strong> MS pipe risers, diesel jockey fire pumps, pendant sprinkler arrays.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>STP / ETP Integration:</strong> Sewage &amp; effluent treatment piping, aeration systems, water recycling.</span>
                </li>
              </ul>

              <div className="cad-spread-actions">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>CONSULT MEP SCOPE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            DISCIPLINE 03: INTERIOR FIT-OUT WORKS
            ============================================================ */}
        <div className="cad-discipline-spread cad-fitout-spread">
          <div className="cad-spread-header">
            <div className="cad-spread-title-box">
              <span className="cad-spread-num">DISCIPLINE // 03</span>
              <h3 className="cad-spread-name">INDOOR ARCHITECTURAL FIT-OUTS</h3>
              <span className="cad-spread-subtitle">FUNCTIONAL &bull; AESTHETIC &bull; TURNKEY EXECUTION</span>
            </div>
            <div className="cad-spread-tag">ARCHITECTURAL MONOGRAPH</div>
          </div>

          <div className="cad-spread-body">
            {/* Left Scope Checklist */}
            <div className="cad-spread-checklist">
              <ul className="cad-check-grid">
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>False Ceilings &amp; Bulkheads:</strong> Gypsum, Armstrong acoustic mineral fiber, metal baffle ceilings.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Architectural Partitions:</strong> Toughened frameless glass partitions, drywall acoustic drywall barriers.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Flooring &amp; Tiling:</strong> Commercial vitrified tiles, epoxy flooring, carpet tiles, hardwood finishes.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Retail Flagship Fit-Outs:</strong> Showroom casework, brand display perimeter fixtures, luxury lighting integration.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Corporate Workspaces:</strong> Executive cabins, conference acoustics, modular workstation wiring tracks.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Turnkey Handover:</strong> Civil, MEP, finishes and statutory clearances under single-point responsibility.</span>
                </li>
              </ul>

              <div className="cad-spread-actions">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>PLAN FIT-OUT PROJECT</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Stage: Authentic Photo + Ceiling Grid Drawing */}
            <div className="cad-spread-stage">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/services/interior-luxury-retail.jpg"
                  alt="Luxury Retail Showroom Interior Execution"
                  className="cad-viewport-photo"
                  loading="lazy"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>TURNKEY RETAIL FIT-OUT</span>
                  </div>
                  <div className="cad-telemetry-meta">ACCURACY: ±1.0mm TOLERANCE</div>
                </div>
              </div>

              <div className="cad-embedded-lineart">
                <CeilingGridIllustration size={200} opacity={0.28} />
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            DISCIPLINE 04: AMC SERVICES
            ============================================================ */}
        <div className="cad-discipline-spread cad-amc-spread">
          <div className="cad-spread-header">
            <div className="cad-spread-title-box">
              <span className="cad-spread-num">DISCIPLINE // 04</span>
              <h3 className="cad-spread-name">ANNUAL MAINTENANCE CONTRACTS (AMC)</h3>
              <span className="cad-spread-subtitle">CONTINUOUS UPTIME &bull; PREVENTATIVE DIAGNOSTICS</span>
            </div>
            <div className="cad-spread-tag">SLA 2-HR RESPONSE</div>
          </div>

          <div className="cad-spread-body">
            {/* Left Stage: Authentic Technician Photo + Gear Decor */}
            <div className="cad-spread-stage">
              <div className="cad-viewport-frame">
                <span className="cad-bracket cad-bracket-tl">┌</span>
                <span className="cad-bracket cad-bracket-tr">┐</span>
                <span className="cad-bracket cad-bracket-bl">└</span>
                <span className="cad-bracket cad-bracket-br">┘</span>
                <img
                  src="/images/services/amc-technician-gauges.jpg"
                  alt="HVAC Diagnostic Gauge Checks and Refrigerant Audit"
                  className="cad-viewport-photo"
                  loading="lazy"
                />
                <div className="cad-viewport-telemetry">
                  <div className="cad-telemetry-badge">
                    <span className="cad-telemetry-pulse"></span>
                    <span>24/7 AMC OPERATIONS</span>
                  </div>
                  <div className="cad-telemetry-meta">CALIBRATED DIGITAL MANIFOLD AUDIT</div>
                </div>
              </div>

              <div className="cad-embedded-lineart">
                <ServiceGearIllustration size={160} opacity={0.28} />
              </div>
            </div>

            {/* Right Scope Checklist */}
            <div className="cad-spread-checklist">
              <ul className="cad-check-grid">
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Preventative Maintenance Schedules:</strong> Periodic condenser chemical wash, motor lubrication, electrical torque audit.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Comprehensive Health Check-ups:</strong> Thermal imaging of DB panels, compressor current draw logs, air velocity audits.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Guaranteed Rapid Response:</strong> 2-hour on-site technician arrival for mission-critical commercial breakdowns.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Extended Asset Lifespan:</strong> Regular vibration monitoring, preventative belt/bearing swaps to prevent catastrophic failure.</span>
                </li>
                <li>
                  <span className="cad-check-bullet">&bull;</span>
                  <span><strong>Cost-Efficient Operation:</strong> Optimized refrigerant pressures and clean heat exchangers minimizing monthly power bills.</span>
                </li>
              </ul>

              <div className="cad-spread-actions">
                <button type="button" className="cad-btn-editorial" onClick={onOpenModal}>
                  <span>ENROLL IN AMC PROGRAM</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
