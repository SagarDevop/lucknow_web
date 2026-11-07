import React, { useState } from 'react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'HVAC Design & Installation',
    scope: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close dialog">
          &times;
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ fontSize: '3rem', color: '#16a34a', marginBottom: '16px' }}>&check;</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Consultation Request Received!</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Thank you, {formData.name}. Our chief engineer will review your project requirements and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Request a Technical Consultation</h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Connect directly with our engineering team for site surveys, heat calculations, or turnkey fit-out proposals.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Reliance Retail / Rajesh Sharma"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Project Scope</label>
                <select
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="HVAC Design & Installation">HVAC Design &amp; Installation</option>
                  <option value="Complete MEP Contracting">Complete MEP Contracting</option>
                  <option value="Turnkey Commercial Fit-Out">Turnkey Commercial Fit-Out</option>
                  <option value="Preventive AMC Support">Preventive AMC Support</option>
                  <option value="Other / Full Facility Survey">Other / Full Facility Survey</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Location &amp; Space Details</label>
                <textarea
                  rows="3"
                  placeholder="e.g. 5,000 sq.ft retail store in Gomti Nagar, Lucknow..."
                  className="form-textarea"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>
                <span>Submit Consultation Request</span>
                <span className="btn-icon">&rarr;</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

