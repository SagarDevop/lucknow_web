import React from 'react';
import { useRouter } from '../context/RouterContext';

export default function Footer({ onOpenModal }) {
  const { navigate } = useRouter();

  const handleLink = (path, hash = '') => {
    navigate(path, hash);
  };

  return (
    <footer className="site-footer">
      <div className="cad-editorial-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo-white.svg" alt="Ambient Engineers" width="180" height="38" />
            </div>
            <p className="footer-tagline">
              Ambient Engineers is Lucknow's foremost engineering contractor for commercial HVAC, comprehensive MEP infrastructure, and turnkey architectural fit-outs across India. Single-point accountability from concept to operational certification.
            </p>
            <div className="footer-credentials-row">
              <span className="footer-cred-pill">ASHRAE 62.1 &bull; 90.1</span>
              <span className="footer-cred-pill">NBC 2016 CERTIFIED</span>
              <span className="footer-cred-pill">IS STANDARDS</span>
            </div>
          </div>

          {/* Column 2: Dedicated Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={() => handleLink('/services/hvac-works')}>
                  HVAC Works &bull; VRF &amp; Chillers
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLink('/services/mep-works')}>
                  MEP Works &bull; Electrical &amp; Hydrants
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLink('/services/interior-fit-out-works')}>
                  Interior Fit-Out Works &bull; Turnkey
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLink('/services/amc-works')}>
                  AMC Works &bull; 2-Hr SLA Response
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLink('/services')}>
                  View All Disciplines &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries & Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={() => handleLink('/')}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLink('/about-us')}>
                  About Us
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLink('/industries')}>
                  Industries We Serve
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLink('/why-us')}>
                  Why Us &bull; Competitive Edge
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLink('/contact-us')}>
                  Contact Us &bull; Head Office
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenModal} style={{ color: 'var(--accent-orange, #DC2626)', fontWeight: '700' }}>
                  Book Technical Consultation &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Coordinates */}
          <div className="footer-col">
            <h4 className="footer-col-title">Headquarters</h4>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <strong>Ambient Engineers</strong><br />
                Indira Nagar, Lucknow<br />
                Uttar Pradesh - 226016, India
              </div>
            </div>

            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <a href="tel:+919792018889">+91 97920 18889</a><br />
                <a href="tel:+918574305998">+91 85743 05998</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <a href="mailto:ambientengineers.lko@gmail.com">ambientengineers.lko@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Ambient Engineers. All rights reserved. Commercial HVAC, MEP &amp; Turnkey Interiors.
          </div>
          <div>
            LUCKNOW HEADQUARTERS &bull; PAN-UP &bull; INDIA
          </div>
        </div>
      </div>
    </footer>
  );
}
