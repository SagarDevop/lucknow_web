import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'HVAC Design & Installation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: 'HVAC Design & Installation', message: '' });
    }, 4000);
  };

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section-py bg-white">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            <div className="section-eyebrow">Direct Contact</div>
            <h1 className="hero-manifesto-title">Connect With Our Engineering Leadership</h1>
            <p className="hero-manifesto-desc">
              Schedule site feasibility audits, heat load studies, or request turnkey fit-out estimates directly from our Lucknow headquarters.
            </p>
          </div>

          <div className="about-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left Col: Contact Details */}
            <div className="about-text-col">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Headquarters &amp; Coordinates</h3>
              
              <div style={{ marginBottom: '24px' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '4px' }}>Head Office:</strong>
                <p style={{ margin: 0 }}>Indira Nagar, Lucknow, Uttar Pradesh - 226016, India</p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '4px' }}>Direct Phone Lines:</strong>
                <p style={{ margin: 0 }}>
                  <a href="tel:+918574305998" style={{ color: 'var(--accent-orange)', fontWeight: '600' }}>+91 85743 05998</a><br />
                  <a href="tel:+919651506281" style={{ color: 'var(--accent-orange)', fontWeight: '600' }}>+91 96515 06281</a>
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '4px' }}>Official Email:</strong>
                <p style={{ margin: 0 }}>
                  <a href="mailto:ambientengineers.lko@gmail.com" style={{ color: 'var(--accent-orange)', fontWeight: '600' }}>ambientengineers.lko@gmail.com</a>
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '4px' }}>Operating Hours:</strong>
                <p style={{ margin: 0 }}>Monday &ndash; Saturday: 09:30 AM &ndash; 07:00 PM<br />Emergency AMC Support: 24/7 Available</p>
              </div>
            </div>

            {/* Right Col: Interactive Contact Form */}
            <div className="about-visual-col">
              <div style={{ background: 'var(--bg-secondary)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                    <div style={{ fontSize: '3rem', color: '#16a34a', marginBottom: '16px' }}>&check;</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Message Dispatched Successfully!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Thank you. Our engineering team will review your project details and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Send Project Inquiry</h3>
                    <div className="form-group">
                      <label className="form-label">Full Name / Organization</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Reliance Retail / Manoj Gupta"
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
                      <label className="form-label">Area of Interest</label>
                      <select
                        className="form-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="HVAC Design & Installation">HVAC Design &amp; Installation</option>
                        <option value="Complete MEP Contracting">Complete MEP Contracting</option>
                        <option value="Turnkey Commercial Fit-Out">Turnkey Commercial Fit-Out</option>
                        <option value="Preventive AMC Support">Preventive AMC Support</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message &amp; Site Details</label>
                      <textarea
                        rows="3"
                        placeholder="Describe your site location, area, and timelines..."
                        className="form-textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>
                      <span>Submit Inquiry</span>
                      <span className="btn-icon">&rarr;</span>
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

