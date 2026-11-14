import React, { useState } from 'react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'HVAC Engineering & VRF Plants',
    projectLocation: '',
    scope: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'AMB-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div
      className="cad-modal-overlay active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cad-modal-title"
    >
      <div className="cad-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* CAD Corner Brackets */}
        <span className="cad-bracket cad-bracket-tl">┌</span>
        <span className="cad-bracket cad-bracket-tr">┐</span>
        <span className="cad-bracket cad-bracket-bl">└</span>
        <span className="cad-bracket cad-bracket-br">┘</span>

        {/* Close Button */}
        <button
          type="button"
          className="cad-modal-close-btn"
          onClick={onClose}
          aria-label="Close consultation modal"
        >
          &times;
        </button>

        {submitted ? (
          <div className="cad-modal-success">
            <div className="cad-modal-success-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="cad-modal-success-title">Consultation Request Confirmed</h3>
            <p className="cad-modal-success-desc">
              Thank you, <strong>{formData.name}</strong>. Our senior HVAC &amp; MEP engineering director in Lucknow will review your project parameters and contact you within 2 business hours.
            </p>
            <div className="cad-modal-success-ref">
              PROJECT REFERENCE ID: {refId}
            </div>
            <div style={{ marginTop: '16px', fontSize: '0.78rem', color: '#64748B' }}>
              Immediate queries? Call direct: <a href="tel:+919792018889" style={{ color: '#EA580C', fontWeight: 700 }}>+91 97920 18889</a>
            </div>
          </div>
        ) : (
          <>
            {/* Modal Header & Engineering Telemetry */}
            <div className="cad-modal-header">
              <div className="cad-modal-spec-tag">
                <span className="cad-modal-spec-dot"></span>
                <span>AMB-DIRECT // RFP &amp; SITE SURVEY</span>
                <span style={{ color: '#64748B' }}>|</span>
                <span>LUCKNOW HQ</span>
              </div>
              <h2 id="cad-modal-title" className="cad-modal-title">
                BOOK TECHNICAL CONSULTATION
              </h2>
              <p className="cad-modal-desc">
                Connect directly with our engineering directors for site feasibility audits, heat load calculations, or turnkey commercial fit-out proposals.
              </p>
            </div>

            {/* Quick Reassurance Metric Bar */}
            <div className="cad-modal-trust-bar">
              <div className="cad-modal-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span>2-HR RESPONSE SLA</span>
              </div>
              <div className="cad-modal-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>FREE PRELIMINARY BOQ</span>
              </div>
              <div className="cad-modal-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 97920 18889</span>
              </div>
            </div>

            {/* Structured Engineering Intake Form */}
            <form onSubmit={handleSubmit} className="cad-modal-form">
              {/* Row 1: Name & Phone */}
              <div className="cad-modal-row">
                <div className="cad-modal-field">
                  <label htmlFor="modal-name">
                    Full Name / Organization <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    placeholder="e.g. Reliance Retail / Rajesh Sharma"
                    className="cad-modal-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="cad-modal-field">
                  <label htmlFor="modal-phone">
                    Direct Phone Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    required
                    placeholder="+91 97920 18889"
                    className="cad-modal-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 2: Email & Service Domain */}
              <div className="cad-modal-row">
                <div className="cad-modal-field">
                  <label htmlFor="modal-email">
                    Official Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    required
                    placeholder="contact@company.com"
                    className="cad-modal-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="cad-modal-field">
                  <label htmlFor="modal-service">
                    Engineering Domain <span className="req">*</span>
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    className="cad-modal-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="HVAC Engineering & VRF Plants">HVAC Engineering &amp; VRF Plants</option>
                    <option value="Complete MEP Contracting & Substations">Complete MEP Contracting &amp; Substations</option>
                    <option value="Turnkey Commercial Interior Fit-Out">Turnkey Commercial Interior Fit-Out</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                    <option value="Commercial Complex / Multi-Story Survey">Commercial Complex / Multi-Story Survey</option>
                    <option value="Showroom / Retail / Banquet Hall Fit-Out">Showroom / Retail / Banquet Hall Fit-Out</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Location & Space Specifications */}
              <div className="cad-modal-field">
                <label htmlFor="modal-location">
                  Project Location &amp; Approximate Area
                </label>
                <input
                  type="text"
                  id="modal-location"
                  name="projectLocation"
                  placeholder="e.g. 5,000 sq.ft retail store in Gomti Nagar, Lucknow / Kanpur / Gorakhpur"
                  className="cad-modal-input"
                  value={formData.projectLocation}
                  onChange={handleChange}
                />
              </div>

              {/* Row 4: Specific Scope Details */}
              <div className="cad-modal-field">
                <label htmlFor="modal-scope">
                  Specific Project Requirements / Scope Notes
                </label>
                <textarea
                  id="modal-scope"
                  name="scope"
                  rows="3"
                  placeholder="Tell us about your timeline, floor layout, cooling load requirements, or site survey preferences..."
                  className="cad-modal-textarea"
                  value={formData.scope}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="cad-modal-submit-btn">
                <span>CONFIRM CONSULTATION REQUEST</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              {/* Footnote */}
              <div className="cad-modal-footnote">
                <span>Single-Point Responsibility &bull; Pan-UP Execution</span>
                <span>Urgent inquiries: <a href="tel:+919792018889">+91 97920 18889</a></span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
