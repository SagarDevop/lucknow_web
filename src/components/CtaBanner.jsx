import React from 'react';

export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="cta-banner-section" aria-label="Consultation Request">
      <div className="container">
        <div className="cta-banner-box">
          <div className="cta-content">
            <div className="cta-eyebrow">Ready to Transform Your Commercial Space?</div>
            <h2 className="cta-title">Schedule a Technical Site Assessment with Our Chief Engineers</h2>
            <p className="cta-desc">
              Whether preparing a new retail showroom, setting up a corporate floor, or commissioning heavy-duty HVAC infrastructure, our engineers conduct complete site feasibility studies and budgetary estimation.
            </p>
            <div className="cta-buttons">
              <button onClick={onOpenModal} className="btn btn-accent">
                <span>Book On-Site Survey</span>
                <span className="btn-icon">&rarr;</span>
              </button>
              <a href="tel:+918574305998" className="btn btn-outline-white">
                <span>Call +91 85743 05998</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

