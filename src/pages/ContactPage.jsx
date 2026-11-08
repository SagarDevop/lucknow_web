import React, { useState, useEffect } from 'react';
import ScatteredDecor from '../components/ScatteredDecor';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'HVAC Works',
    projectLocation: 'Lucknow',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Ambient Engineers Lucknow Headquarters';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'HVAC Works',
        projectLocation: 'Lucknow',
        message: '',
      });
    }, 4500);
  };

  return (
    <main className="cad-page-wrapper">
      {/* Page Hero */}
      <section className="cad-page-hero">
        <ScatteredDecor section="cta" />
        <div className="cad-editorial-container">
          <div className="cad-spec-header">
            <span className="cad-spec-dot"></span>
            <span className="cad-spec-code">COMMUNICATION // AMB-CONTACT-01</span>
            <span className="cad-spec-divider">|</span>
            <span className="cad-spec-title">LUCKNOW HEADQUARTERS &bull; PAN-UP DISPATCH</span>
          </div>

          <div className="cad-page-hero-content">
            <h1 className="cad-page-hero-title">
              CONNECT WITH OUR LEADERSHIP &bull;<br />
              <span className="cad-headline-accent">ENGINEERING CONSULTATION</span>
            </h1>
            <p className="cad-page-hero-lead">
              Schedule site feasibility audits, heat load studies, MEP assessments, or request turnkey fit-out proposals directly from our senior engineering directors in Lucknow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content & Form Grid */}
      <section className="cad-contact-section">
        <div className="cad-editorial-container">
          <div className="cad-contact-split">
            {/* Left Column: Direct Coordinates */}
            <div className="cad-contact-info-col">
              <div className="cad-spec-header" style={{ marginBottom: '20px' }}>
                <span className="cad-spec-dot"></span>
                <span className="cad-spec-code">REGISTERED HEADQUARTERS</span>
              </div>

              <h2 className="cad-contact-heading">AMBIENT ENGINEERS</h2>
              <p className="cad-contact-sub">Commercial Engineering &amp; Turnkey Contracting</p>

              <div className="cad-contact-block-stack">
                <div className="cad-contact-cell">
                  <span className="cad-cell-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <strong className="cad-cell-title">Head Office Location:</strong>
                    <p className="cad-cell-desc">Indira Nagar, Lucknow, Uttar Pradesh - 226016, India</p>
                    <span className="cad-cell-geo">GPS: 26.8835° N, 80.9984° E &bull; ELEVATION: 123m</span>
                  </div>
                </div>

                <div className="cad-contact-cell">
                  <span className="cad-cell-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="cad-cell-title">Direct Phone Lines:</strong>
                    <p className="cad-cell-desc">
                      <a href="tel:+919792018889" className="cad-phone-link">+91 97920 18889</a> (Primary Consultation)<br />
                      <a href="tel:+918574305998" className="cad-phone-link">+91 85743 05998</a> / <a href="tel:+919651506281" className="cad-phone-link">+91 96515 06281</a>
                    </p>
                    <span className="cad-cell-geo">24/7 AMC EMERGENCY BREAKDOWN HELPDESK ACTIVE</span>
                  </div>
                </div>

                <div className="cad-contact-cell">
                  <span className="cad-cell-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <strong className="cad-cell-title">Official Inquiries &amp; RFPs:</strong>
                    <p className="cad-cell-desc">
                      <a href="mailto:ambientengineers.lko@gmail.com" className="cad-phone-link">ambientengineers.lko@gmail.com</a><br />
                      <a href="mailto:info@ambientengineers.in" className="cad-phone-link">info@ambientengineers.in</a>
                    </p>
                  </div>
                </div>

                <div className="cad-contact-cell">
                  <span className="cad-cell-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div>
                    <strong className="cad-cell-title">Operating Hours:</strong>
                    <p className="cad-cell-desc">Monday – Saturday: 9:00 AM – 7:30 PM (IST)<br />Sunday: Site Project Teams &amp; AMC on Standby</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Functional Technical RFP Form */}
            <div className="cad-contact-form-col">
              <div className="cad-form-box">
                <div className="cad-form-header">
                  <span className="cad-form-tag">RFP FORM // DIRECT ENGINEERING INTAKE</span>
                  <h3 className="cad-form-title">REQUEST TECHNICAL PROPOSAL</h3>
                  <p className="cad-form-sub">Fill out your project specifics for a prompt consultation and preliminary bill of quantities (BOQ) review.</p>
                </div>

                {submitted ? (
                  <div className="cad-form-success">
                    <div className="cad-success-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <h4>Inquiry Received Successfully!</h4>
                    <p>Our senior engineering lead will review your requirements and reach out within 2 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="cad-rfp-form">
                    <div className="cad-form-row">
                      <div className="cad-form-field">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="e.g. Rajesh Kumar"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="cad-form-field">
                        <label htmlFor="phone">Contact Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="cad-form-row">
                      <div className="cad-form-field">
                        <label htmlFor="email">Official Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="rajesh@company.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="cad-form-field">
                        <label htmlFor="service">Primary Engineering Scope *</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="HVAC Works">HVAC Works (VRF, Chillers, Ducting)</option>
                          <option value="MEP Works">MEP Works (Electrical, Plumbing, Fire Fighting)</option>
                          <option value="Interior Fit-Out Works">Interior Fit-Out Works (Turnkey Corporate &amp; Retail)</option>
                          <option value="AMC Works">Annual Maintenance Contract (AMC)</option>
                          <option value="Integrated All-In-One">Integrated All-In-One Turnkey Scope</option>
                        </select>
                      </div>
                    </div>

                    <div className="cad-form-field">
                      <label htmlFor="projectLocation">Project Location / City *</label>
                      <input
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                        required
                        placeholder="e.g. Lucknow, Gorakhpur, Kanpur, Varanasi, Noida"
                        value={formData.projectLocation}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="cad-form-field">
                      <label htmlFor="message">Project Scope Details &amp; Area (Sq. Ft.)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Provide details such as floor area, cooling load estimate, timeline, or specific commercial requirements..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="cad-btn-editorial cad-btn-large" style={{ width: '100%', justifyContent: 'center' }}>
                      <span>SUBMIT FOR ENGINEERING AUDIT</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
