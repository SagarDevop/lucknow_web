import React from 'react';

/**
 * AMBIENT ENGINEERS — REUSABLE ENGINEERING DECORATIVE VISUAL SYSTEM
 * Precision technical line-art SVGs inspired by architectural drafting & mechanical drawings.
 * Non-interactive, aria-hidden, optimized SVG stroke geometry.
 */

// 1. HVAC Ductwork Illustration
export function HVACDuctIllustration({
  size = 180,
  opacity = 0.16,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 240 132"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-duct ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Main Rectangular Duct Trunk */}
      <rect x="24" y="36" width="168" height="60" strokeDasharray="4 2" />
      <line x1="24" y1="36" x2="60" y2="12" />
      <line x1="192" y1="36" x2="228" y2="12" />
      <line x1="192" y1="96" x2="228" y2="72" />
      <line x1="60" y1="12" x2="228" y2="12" />
      <line x1="228" y1="12" x2="228" y2="72" />

      {/* Flange Connectors */}
      <line x1="72" y1="32" x2="72" y2="100" />
      <line x1="72" y1="32" x2="96" y2="12" />
      <line x1="140" y1="32" x2="140" y2="100" />
      <line x1="140" y1="32" x2="164" y2="12" />

      {/* Acoustic Turning Vanes & Airflow Arrows */}
      <path d="M40 76 Q 52 76 60 56" />
      <path d="M48 86 Q 64 86 72 56" />
      <path d="M96 66 L 124 66 M 118 60 L 126 66 L 118 72" />
      <path d="M152 66 L 180 66 M 174 60 L 182 66 L 174 72" />

      {/* Dimension Line & Tag */}
      <line x1="24" y1="112" x2="192" y2="112" strokeDasharray="2 2" />
      <line x1="24" y1="108" x2="24" y2="116" />
      <line x1="192" y1="108" x2="192" y2="116" />
      <text x="108" y="124" fill={stroke} fontSize="8" fontFamily="monospace" textAnchor="middle" stroke="none">
        DUCT // 600x450 mm
      </text>
    </svg>
  );
}

// 2. Ventilation Fan / Blower Symbol
export function VentilationIllustration({
  size = 90,
  opacity = 0.18,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      aria-hidden="true"
      className={`eng-decor eng-fan ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      <circle cx="50" cy="50" r="44" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="38" />
      <circle cx="50" cy="50" r="10" />
      {/* 4 Fan Blades */}
      <path d="M50 40 C 42 24 58 14 50 12 C 42 14 38 28 50 40 Z" fill={stroke} fillOpacity="0.08" />
      <path d="M50 60 C 58 76 42 86 50 88 C 58 86 62 72 50 60 Z" fill={stroke} fillOpacity="0.08" />
      <path d="M40 50 C 24 58 14 42 12 50 C 14 58 28 62 40 50 Z" fill={stroke} fillOpacity="0.08" />
      <path d="M60 50 C 76 42 86 58 88 50 C 86 42 72 38 60 50 Z" fill={stroke} fillOpacity="0.08" />
      {/* Rotation Arrow */}
      <path d="M72 28 A 34 34 0 0 1 84 50" strokeDasharray="2 2" />
      <polyline points="80 50 84 54 88 50" />
      <text x="50" y="53" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        CFM
      </text>
    </svg>
  );
}

// 3. MEP Pipeline & Valve Assembly
export function PipelineIllustration({
  size = 180,
  opacity = 0.16,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 0.45}
      viewBox="0 0 200 90"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-pipe ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Horizontal Run */}
      <line x1="8" y1="40" x2="192" y2="40" />
      <line x1="8" y1="52" x2="192" y2="52" />
      {/* Flanged Joint Left */}
      <line x1="36" y1="34" x2="36" y2="58" />
      <line x1="42" y1="34" x2="42" y2="58" />
      {/* Gate Valve Symbol in Center */}
      <polygon points="80,34 80,58 116,34 116,58" fill={stroke} fillOpacity="0.06" />
      <line x1="98" y1="46" x2="98" y2="20" />
      <ellipse cx="98" cy="18" rx="14" ry="4" />
      {/* Vertical Branch Downward */}
      <line x1="152" y1="52" x2="152" y2="82" />
      <line x1="164" y1="52" x2="164" y2="82" />
      <line x1="148" y1="82" x2="168" y2="82" />
      {/* Flow Direction Indicator */}
      <path d="M54 46 L 68 46 M 64 42 L 70 46 L 64 50" />
      <text x="126" y="28" fill={stroke} fontSize="7" fontFamily="monospace" stroke="none">
        DN80 PN16
      </text>
    </svg>
  );
}

// 4. Electrical Single-Line Circuit Schematic
export function ElectricalSymbolIllustration({
  size = 140,
  opacity = 0.16,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 160 104"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-elec ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Distribution Busbar Line */}
      <line x1="12" y1="20" x2="148" y2="20" strokeWidth="2.4" />
      <circle cx="36" cy="20" r="3" fill={stroke} />
      <circle cx="80" cy="20" r="3" fill={stroke} />
      <circle cx="124" cy="20" r="3" fill={stroke} />

      {/* Feeders & Breakers */}
      <line x1="36" y1="20" x2="36" y2="44" />
      <rect x="28" y="44" width="16" height="20" />
      <line x1="30" y1="46" x2="42" y2="62" />
      <line x1="36" y1="64" x2="36" y2="86" />

      {/* Center Feeder - Interlocking Transformer Symbol */}
      <line x1="80" y1="20" x2="80" y2="38" />
      <circle cx="80" cy="46" r="10" />
      <circle cx="80" cy="60" r="10" />
      <line x1="80" y1="70" x2="80" y2="86" />

      {/* Right Feeder - Capacitor / Earth Ground Symbol */}
      <line x1="124" y1="20" x2="124" y2="56" />
      <line x1="112" y1="56" x2="136" y2="56" />
      <line x1="116" y1="62" x2="132" y2="62" />
      <line x1="120" y1="68" x2="128" y2="68" />

      <text x="80" y="98" fill={stroke} fontSize="7" fontFamily="monospace" textAnchor="middle" stroke="none">
        415V // 3Φ LT PANEL
      </text>
    </svg>
  );
}

// 5. Structural I-Beam / Steel Profile
export function StructuralBeamIllustration({
  size = 110,
  opacity = 0.16,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-beam ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Top Flange */}
      <rect x="18" y="16" width="64" height="12" fill={stroke} fillOpacity="0.06" />
      {/* Web */}
      <rect x="44" y="28" width="12" height="44" fill={stroke} fillOpacity="0.06" />
      {/* Bottom Flange */}
      <rect x="18" y="72" width="64" height="12" fill={stroke} fillOpacity="0.06" />
      {/* Technical Centerlines */}
      <line x1="50" y1="8" x2="50" y2="92" strokeDasharray="3 2" />
      <line x1="8" y1="50" x2="92" y2="50" strokeDasharray="3 2" />
      <text x="82" y="52" fill={stroke} fontSize="6" fontFamily="monospace" stroke="none">
        ISMB
      </text>
    </svg>
  );
}

// 6. Architectural Compass / Calipers
export function ArchitecturalCompassIllustration({
  size = 120,
  opacity = 0.18,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 100 110"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-compass ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Top Pivot Knurled Hinge */}
      <circle cx="50" cy="18" r="8" />
      <circle cx="50" cy="18" r="3" fill={stroke} />
      <line x1="50" y1="10" x2="50" y2="6" strokeWidth="2" />
      {/* Left Compass Leg */}
      <line x1="44" y1="22" x2="20" y2="94" strokeWidth="1.6" />
      <polyline points="20 94 18 102 22 102" />
      {/* Right Compass Leg */}
      <line x1="56" y1="22" x2="80" y2="94" strokeWidth="1.6" />
      <polyline points="80 94 82 102 78 102" />
      {/* Crossbar & Adjustment Thumb Screw */}
      <line x1="31" y1="60" x2="69" y2="60" strokeDasharray="2 1" />
      <circle cx="50" cy="60" r="4" fill={stroke} fillOpacity="0.15" />
      {/* Measured Arc */}
      <path d="M 28 88 A 46 46 0 0 1 72 88" strokeDasharray="2 2" />
      <text x="50" y="84" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        R=45.00
      </text>
    </svg>
  );
}

// 7. Spirit Level
export function SpiritLevelIllustration({
  size = 150,
  opacity = 0.16,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 0.3}
      viewBox="0 0 180 54"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-level ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Aluminum Profile Body */}
      <rect x="12" y="14" width="156" height="26" rx="3" />
      <line x1="12" y1="18" x2="168" y2="18" strokeDasharray="3 2" />
      <line x1="12" y1="36" x2="168" y2="36" strokeDasharray="3 2" />
      {/* Hanging Holes */}
      <circle cx="24" cy="27" r="4" />
      <circle cx="156" cy="27" r="4" />
      {/* Center Horizontal Vial Window */}
      <rect x="68" y="20" width="44" height="14" rx="7" fill={stroke} fillOpacity="0.05" />
      <line x1="84" y1="20" x2="84" y2="34" />
      <line x1="96" y1="20" x2="96" y2="34" />
      {/* Level Bubble Centered */}
      <ellipse cx="90" cy="27" rx="4" ry="3" fill={stroke} fillOpacity="0.3" />
      {/* Level Pitch Stamp */}
      <text x="90" y="47" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        TOL ±0.5 mm/m
      </text>
    </svg>
  );
}

// 8. Construction Safety Helmet
export function ConstructionHelmetIllustration({
  size = 100,
  opacity = 0.16,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 120 90"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-helmet ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Helmet Shell Dome */}
      <path d="M20 58 C 20 28, 42 16, 60 16 C 78 16, 100 28, 100 58 Z" fill={stroke} fillOpacity="0.06" />
      {/* Center Reinforcement Ridge */}
      <path d="M54 18 C 54 28, 54 46, 54 58" />
      <path d="M66 18 C 66 28, 66 46, 66 58" />
      {/* Extended Visor / Rim */}
      <path d="M12 58 C 12 58, 20 54, 60 54 C 100 54, 108 58, 108 58 L 112 64 C 112 64, 98 62, 60 62 C 22 62, 8 64, 8 64 Z" />
      <text x="60" y="78" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        PPE // EN 397
      </text>
    </svg>
  );
}

// 9. Maintenance Wrench & Gear Assembly
export function ServiceGearIllustration({
  size = 110,
  opacity = 0.16,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-gear ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Gear Pitch Circle */}
      <circle cx="50" cy="50" r="32" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="16" fill={stroke} fillOpacity="0.08" />
      <circle cx="50" cy="50" r="8" />

      {/* 8 Gear Teeth Profile */}
      <path d="M46 16 L 54 16 L 52 24 L 48 24 Z" />
      <path d="M46 84 L 54 84 L 52 76 L 48 76 Z" />
      <path d="M16 46 L 16 54 L 24 52 L 24 48 Z" />
      <path d="M84 46 L 84 54 L 76 52 L 76 48 Z" />
      <path d="M26 26 L 32 20 L 37 26 L 31 32 Z" />
      <path d="M74 74 L 68 80 L 63 74 L 69 68 Z" />
      <path d="M26 74 L 20 68 L 26 63 L 32 69 Z" />
      <path d="M74 26 L 80 32 L 74 37 L 68 31 Z" />

      {/* Diagonal Spanner Handle */}
      <line x1="62" y1="38" x2="88" y2="12" strokeWidth="3" />
      <polyline points="84 8 92 16" strokeWidth="2" />
    </svg>
  );
}

// 10. Modular Suspended Ceiling Grid
export function CeilingGridIllustration({
  size = 160,
  opacity = 0.15,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 160 120"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-ceiling ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* 600x600 Suspended T-Bar Grid */}
      <rect x="12" y="12" width="136" height="96" strokeDasharray="3 3" />
      <line x1="57" y1="12" x2="57" y2="108" />
      <line x1="103" y1="12" x2="103" y2="108" />
      <line x1="12" y1="60" x2="148" y2="60" />

      {/* Recessed Troffer Diffuser in Top-Left Tile */}
      <rect x="22" y="22" width="25" height="25" />
      <line x1="22" y1="22" x2="47" y2="47" />
      <line x1="47" y1="22" x2="22" y2="47" />

      {/* Circular Downlight in Bottom-Right Tile */}
      <circle cx="126" cy="84" r="10" strokeDasharray="2 1" />
      <circle cx="126" cy="84" r="5" fill={stroke} fillOpacity="0.1" />

      <text x="80" y="116" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        MODULAR GRID 600×600
      </text>
    </svg>
  );
}

// 11. Brick Masonry Illustration
export function BrickIllustration({
  size = 120,
  opacity = 0.15,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 140 76"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-brick ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Course 1 */}
      <rect x="10" y="10" width="56" height="16" />
      <rect x="74" y="10" width="56" height="16" />
      {/* Course 2 Stretcher Bond */}
      <rect x="10" y="30" width="24" height="16" />
      <rect x="42" y="30" width="56" height="16" />
      <rect x="106" y="30" width="24" height="16" />
      {/* Course 3 */}
      <rect x="10" y="50" width="56" height="16" />
      <rect x="74" y="50" width="56" height="16" />
      <text x="70" y="72" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        BOND // 230×115×75 mm
      </text>
    </svg>
  );
}

// 12. Building Wireframe Isometric
export function BuildingWireframeIllustration({
  size = 130,
  opacity = 0.16,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 120 130"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-building ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Isometric Tower Wireframe */}
      {/* Top Roof */}
      <polygon points="60,14 102,36 60,58 18,36" fill={stroke} fillOpacity="0.05" />
      {/* Vertical Edges */}
      <line x1="18" y1="36" x2="18" y2="100" />
      <line x1="60" y1="58" x2="60" y2="122" />
      <line x1="102" y1="36" x2="102" y2="100" />
      {/* Floor Slabs */}
      <polyline points="18,52 60,74 102,52" />
      <polyline points="18,68 60,90 102,68" />
      <polyline points="18,84 60,106 102,84" />
      <polyline points="18,100 60,122 102,100" />
      {/* Center Structural Axis */}
      <line x1="60" y1="8" x2="60" y2="128" strokeDasharray="3 2" />
      <text x="60" y="128" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        BIM // STRUCT
      </text>
    </svg>
  );
}

// 13. Blueprint Drawing Fragment with Scale
export function BlueprintIllustration({
  size = 140,
  opacity = 0.15,
  rotate = 0,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 160 120"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`eng-decor eng-blueprint ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)`, pointerEvents: 'none', ...style }}
    >
      {/* Outer Title Box Border */}
      <rect x="8" y="8" width="144" height="104" />
      <line x1="8" y1="88" x2="152" y2="88" />
      <line x1="80" y1="88" x2="80" y2="112" />
      {/* Internal Floor Layout Outline */}
      <polyline points="20,24 70,24 70,50 136,50 136,78 20,78 20,24" fill={stroke} fillOpacity="0.04" />
      <line x1="45" y1="24" x2="45" y2="78" strokeDasharray="2 2" />
      <line x1="95" y1="50" x2="95" y2="78" strokeDasharray="2 2" />
      {/* Dimension Arrow */}
      <line x1="20" y1="16" x2="136" y2="16" />
      <polyline points="24 13 20 16 24 19" />
      <polyline points="132 13 136 16 132 19" />
      {/* Title Block Text */}
      <text x="44" y="102" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        DWG: AMB-GA-04
      </text>
      <text x="116" y="102" fill={stroke} fontSize="6" fontFamily="monospace" textAnchor="middle" stroke="none">
        SCALE 1:50
      </text>
    </svg>
  );
}

// 14. Technical Crosshair Target
export function TechnicalCrosshair({
  size = 28,
  opacity = 0.25,
  className = '',
  style = {},
  accent = false,
}) {
  const stroke = accent ? 'var(--accent-orange, #DC2626)' : 'currentColor';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      aria-hidden="true"
      className={`eng-decor eng-crosshair ${className}`}
      style={{ opacity, pointerEvents: 'none', ...style }}
    >
      <circle cx="16" cy="16" r="10" strokeDasharray="2 2" />
      <line x1="16" y1="2" x2="16" y2="30" />
      <line x1="2" y1="16" x2="30" y2="16" />
    </svg>
  );
}

// 15. Linear Dimension Measurement Callout
export function DimensionLine({
  length = 180,
  label = '14,200 mm',
  vertical = false,
  opacity = 0.2,
  className = '',
  style = {},
}) {
  if (vertical) {
    return (
      <svg
        width="36"
        height={length}
        viewBox={`0 0 36 ${length}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
        className={`eng-decor eng-dim-vert ${className}`}
        style={{ opacity, pointerEvents: 'none', ...style }}
      >
        <line x1="18" y1="4" x2="18" y2={length - 4} />
        <line x1="4" y1="4" x2="32" y2="4" />
        <line x1="4" y1={length - 4} x2="32" y2={length - 4} />
        <text
          x="12"
          y={length / 2}
          fill="currentColor"
          fontSize="7"
          fontFamily="monospace"
          textAnchor="middle"
          transform={`rotate(-90 12 ${length / 2})`}
          stroke="none"
        >
          {label}
        </text>
      </svg>
    );
  }

  return (
    <svg
      width={length}
      height="30"
      viewBox={`0 0 ${length} 30`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      className={`eng-decor eng-dim-horiz ${className}`}
      style={{ opacity, pointerEvents: 'none', ...style }}
    >
      <line x1="4" y1="15" x2={length - 4} y2="15" />
      <line x1="4" y1="4" x2="4" y2="26" />
      <line x1={length - 4} y1="4" x2={length - 4} y2="26" />
      <text
        x={length / 2}
        y="11"
        fill="currentColor"
        fontSize="7"
        fontFamily="monospace"
        textAnchor="middle"
        stroke="none"
      >
        {label}
      </text>
    </svg>
  );
}

// Default Unified Exporter
const EngineeringDecor = {
  HVACDuctIllustration,
  VentilationIllustration,
  PipelineIllustration,
  ElectricalSymbolIllustration,
  StructuralBeamIllustration,
  ArchitecturalCompassIllustration,
  SpiritLevelIllustration,
  ConstructionHelmetIllustration,
  ServiceGearIllustration,
  CeilingGridIllustration,
  BrickIllustration,
  BuildingWireframeIllustration,
  BlueprintIllustration,
  TechnicalCrosshair,
  DimensionLine,
};

export default EngineeringDecor;

