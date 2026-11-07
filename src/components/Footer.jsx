import React from 'react';

export default function Footer({ onOpenModal, setActivePage }) {
  const navigateTo = (page, sectionId) => {
    if (setActivePage) setActivePage(page);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/images/logo-white.svg" alt="Ambient Engineers" width="180" height="38" />
            </div>
            <p className="footer-about">
              Ambient Engineers is Lucknow's foremost engineering contractor for commercial HVAC, comprehensive MEP, and high-end turnkey interior fit-outs. Single-point accountability from concept to operational certification.
            </p>
            <div className="footer-credentials">
              <span>ASHRAE Compliant</span> &bull; <span>NBC 2016 Certified</span>
            </div>
          </div>

          {/* Column 2: Core Capabilities */}
          <div className="footer-col">
            <h4 className="footer-heading">Capabilities</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={() => navigateTo('home', 'services')}>Commercial HVAC &amp; VRV Systems</a></li>
              <li><a href="#services" onClick={() => navigateTo('home', 'services')}>HT / LT Electrical Distribution</a></li>
              <li><a href="#services" onClick={() => navigateTo('home', 'services')}>Fire Protection &amp; Hydrants</a></li>
              <li><a href="#services" onClick={() => navigateTo('home', 'services')}>Turnkey Corporate Fit-Outs</a></li>
              <li><a href="#services" onClick={() => navigateTo('home', 'services')}>Preventive AMC &amp; Breakdown Support</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={() => navigateTo('home', 'about')}>About Ambient Engineers</a></li>
              <li><a href="#projects" onClick={() => navigateTo('home', 'projects')}>Landmark Projects Portfolio</a></li>
              <li><a href="#methodology" onClick={() => navigateTo('home', 'methodology')}>5-Stage Execution Standard</a></li>
              <li><a href="#difference" onClick={() => navigateTo('home', 'difference')}>Before / After Showcase</a></li>
              <li><button onClick={onOpenModal} className="footer-link-btn">Book Technical Consultation</button></li>
            </ul>
          </div>

          {/* Column 4: Contact & Coordinates */}
          <div className="footer-col">
            <h4 className="footer-heading">Regional Headquarters</h4>
            <div className="footer-contact-item">
              <span>&#128205;</span>
              <div>
                <strong>Ambient Engineers</strong><br />
                Indira Nagar, Lucknow<br />
                Uttar Pradesh - 226016, India
              </div>
            </div>
            <div className="footer-contact-item">
              <span>&#128222;</span>
              <div>
                <a href="tel:+918574305998">+91 85743 05998</a><br />
                <a href="tel:+919651506281">+91 96515 06281</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span>&#9993;</span>
              <div>
                <a href="mailto:ambientengineers.lko@gmail.com">ambientengineers.lko@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Ambient Engineers. All rights reserved. Precision HVAC, MEP &amp; Interiors.
          </div>
          <div>
            Design inspired by Serein Spaces &bull; Built for Ambient Engineers Lucknow
          </div>
        </div>
      </div>
    </footer>
  );
}

