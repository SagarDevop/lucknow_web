import React from 'react';
import {
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
} from './EngineeringDecor';

/**
 * ScatteredDecor - Strategic, art-directed technical engineering illustrations
 * placed across margins, empty spaces, and section dividers without overlapping text.
 */
export default function ScatteredDecor({ section = 'default', className = '' }) {
  switch (section) {
    case 'clients':
      return (
        <div className={`eng-scatter-layer eng-scatter-clients ${className}`} aria-hidden="true">
          <TechnicalCrosshair size={22} opacity={0.2} style={{ position: 'absolute', top: 12, left: '4%' }} />
          <TechnicalCrosshair size={22} opacity={0.2} style={{ position: 'absolute', top: 12, right: '4%' }} />
          <DimensionLine length={120} label="TOL ±0.0" opacity={0.18} style={{ position: 'absolute', bottom: 6, left: '6%' }} />
        </div>
      );

    case 'about':
      return (
        <div className={`eng-scatter-layer eng-scatter-about ${className}`} aria-hidden="true">
          {/* Architectural Compass in top-left margin */}
          <div className="eng-float-slow" style={{ position: 'absolute', top: '40px', left: '-15px' }}>
            <ArchitecturalCompassIllustration size={130} opacity={0.16} rotate={-8} />
          </div>
          {/* Blueprint fragment near header */}
          <div style={{ position: 'absolute', top: '15px', right: '5%' }}>
            <BlueprintIllustration size={140} opacity={0.14} rotate={2} />
          </div>
          {/* Structural beam cross-section */}
          <div className="eng-drift" style={{ position: 'absolute', bottom: '120px', left: '2%' }}>
            <StructuralBeamIllustration size={95} opacity={0.14} rotate={12} />
          </div>
          {/* Spirit level near bottom stats */}
          <div style={{ position: 'absolute', bottom: '20px', right: '4%' }}>
            <SpiritLevelIllustration size={160} opacity={0.16} rotate={-3} />
          </div>
          {/* Crosshairs & Dimension Lines */}
          <TechnicalCrosshair size={24} opacity={0.25} style={{ position: 'absolute', top: '45%', right: '2%' }} />
          <DimensionLine length={160} label="SPAN // 24,000 mm" opacity={0.18} style={{ position: 'absolute', top: '55%', left: '-20px' }} vertical />
        </div>
      );

    case 'mission-vision':
      return (
        <div className={`eng-scatter-layer eng-scatter-mv ${className}`} aria-hidden="true">
          <div className="eng-float-slow" style={{ position: 'absolute', top: '30px', right: '-20px' }}>
            <HVACDuctIllustration size={170} opacity={0.15} rotate={6} />
          </div>
          <div style={{ position: 'absolute', bottom: '60px', left: '2%' }}>
            <ConstructionHelmetIllustration size={95} opacity={0.16} rotate={-6} />
          </div>
          <TechnicalCrosshair size={26} opacity={0.25} style={{ position: 'absolute', top: '50%', left: '3%' }} />
          <TechnicalCrosshair size={26} opacity={0.25} style={{ position: 'absolute', bottom: '20px', right: '6%' }} />
        </div>
      );

    case 'services':
      return (
        <div className={`eng-scatter-layer eng-scatter-services ${className}`} aria-hidden="true">
          {/* HVAC area decor */}
          <div className="eng-drift" style={{ position: 'absolute', top: '120px', left: '-25px' }}>
            <VentilationIllustration size={110} opacity={0.18} rotate={-15} accent />
          </div>
          {/* MEP area decor */}
          <div style={{ position: 'absolute', top: '38%', right: '-20px' }}>
            <PipelineIllustration size={180} opacity={0.16} rotate={4} />
          </div>
          <div className="eng-float-slow" style={{ position: 'absolute', top: '48%', left: '1%' }}>
            <ElectricalSymbolIllustration size={135} opacity={0.15} rotate={-2} />
          </div>
          {/* Fit-out area decor */}
          <div style={{ position: 'absolute', bottom: '25%', right: '1%' }}>
            <CeilingGridIllustration size={150} opacity={0.15} rotate={3} />
          </div>
          {/* AMC area decor */}
          <div className="eng-drift" style={{ position: 'absolute', bottom: '40px', left: '-10px' }}>
            <ServiceGearIllustration size={115} opacity={0.16} rotate={18} />
          </div>
          <TechnicalCrosshair size={24} opacity={0.25} style={{ position: 'absolute', top: '18%', right: '4%' }} />
        </div>
      );

    case 'industries':
      return (
        <div className={`eng-scatter-layer eng-scatter-industries ${className}`} aria-hidden="true">
          <div className="eng-float-slow" style={{ position: 'absolute', top: '40px', right: '3%' }}>
            <BuildingWireframeIllustration size={125} opacity={0.16} rotate={-4} />
          </div>
          <div style={{ position: 'absolute', bottom: '80px', left: '-15px' }}>
            <BrickIllustration size={130} opacity={0.15} rotate={5} />
          </div>
          <TechnicalCrosshair size={24} opacity={0.25} style={{ position: 'absolute', top: '40%', left: '2%' }} />
          <DimensionLine length={140} label="GRID 8.4m" opacity={0.18} style={{ position: 'absolute', bottom: '30px', right: '5%' }} />
        </div>
      );

    case 'projects':
      return (
        <div className={`eng-scatter-layer eng-scatter-projects ${className}`} aria-hidden="true">
          <div className="eng-float-slow" style={{ position: 'absolute', top: '30px', left: '-20px' }}>
            <ArchitecturalCompassIllustration size={120} opacity={0.15} rotate={10} />
          </div>
          <div style={{ position: 'absolute', top: '12%', right: '2%' }}>
            <BlueprintIllustration size={130} opacity={0.14} rotate={-3} />
          </div>
          <TechnicalCrosshair size={26} opacity={0.25} style={{ position: 'absolute', bottom: '15%', right: '3%' }} />
          <TechnicalCrosshair size={26} opacity={0.25} style={{ position: 'absolute', bottom: '20px', left: '4%' }} />
        </div>
      );

    case 'methodology':
      return (
        <div className={`eng-scatter-layer eng-scatter-methodology ${className}`} aria-hidden="true">
          <div className="eng-drift" style={{ position: 'absolute', top: '20px', right: '4%' }}>
            <SpiritLevelIllustration size={140} opacity={0.15} rotate={2} />
          </div>
          <TechnicalCrosshair size={24} opacity={0.25} style={{ position: 'absolute', bottom: '20px', left: '3%' }} />
        </div>
      );

    case 'why-choose-us':
      return (
        <div className={`eng-scatter-layer eng-scatter-why ${className}`} aria-hidden="true">
          <div className="eng-float-slow" style={{ position: 'absolute', top: '50px', left: '-20px' }}>
            <BuildingWireframeIllustration size={130} opacity={0.15} rotate={-6} />
          </div>
          <div className="eng-drift" style={{ position: 'absolute', top: '45%', right: '-15px' }}>
            <SpiritLevelIllustration size={150} opacity={0.16} rotate={3} />
          </div>
          <div style={{ position: 'absolute', bottom: '60px', left: '2%' }}>
            <ConstructionHelmetIllustration size={100} opacity={0.15} rotate={-10} />
          </div>
          <TechnicalCrosshair size={26} opacity={0.25} style={{ position: 'absolute', top: '15%', right: '3%' }} />
          <TechnicalCrosshair size={26} opacity={0.25} style={{ position: 'absolute', bottom: '20px', right: '4%' }} />
          <DimensionLine length={150} label="RELIABILITY // 100%" opacity={0.18} style={{ position: 'absolute', bottom: '140px', right: '10%' }} />
        </div>
      );

    case 'cta':
      return (
        <div className={`eng-scatter-layer eng-scatter-cta ${className}`} aria-hidden="true">
          <div style={{ position: 'absolute', top: '15px', left: '3%' }}>
            <ConstructionHelmetIllustration size={90} opacity={0.15} rotate={-8} />
          </div>
          <TechnicalCrosshair size={24} opacity={0.25} style={{ position: 'absolute', bottom: '15px', right: '4%' }} />
        </div>
      );

    default:
      return null;
  }
}

export {
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

