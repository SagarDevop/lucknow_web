import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenModal, activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page, sectionId) => {
    if (activePage !== page) {
      setActivePage(page);
      window.scrollTo(0, 0);
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-wide header-inner">
          {/* Brand Logo - Smoothly fades out on scroll */}
          <a
            href="#"
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
            }}
            aria-label="Ambient Engineers Home"
          >
            <img src="/images/logo.svg" alt="Ambient Engineers" width="180" height="38" />
          </a>

          {/* Single-line centered floating pill on scroll */}
          <nav className="nav-center-pill" aria-label="Main Navigation">
            <button
              className="nav-link"
              onClick={() => navigateTo('home', 'about')}
            >
              About Us
            </button>
            <button
              className="nav-link"
              onClick={() => navigateTo('home', 'services')}
            >
              Services
            </button>
            <button
              className="nav-link"
              onClick={() => navigateTo('home', 'difference')}
            >
              The Difference
            </button>
            <button
              className="nav-link"
              onClick={() => navigateTo('home', 'methodology')}
            >
              Execution
            </button>
            <button
              className="nav-link"
              onClick={() => navigateTo('home', 'projects')}
            >
              Landmark Projects
            </button>

            {/* Seamless Book Consultation action - NO nested pill! */}
            <button
              className="nav-cta-btn open-consultation-modal"
              onClick={onOpenModal}
            >
              <span>Book Consultation</span>
              <svg
                className="cta-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className="hamburger-btn"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'active' : ''}`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      <aside className={`mobile-drawer ${drawerOpen ? 'active' : ''}`} aria-label="Mobile Navigation">
        <div>
          <div className="drawer-header">
            <img src="/images/logo.svg" alt="Ambient Engineers" width="180" height="38" />
            <button
              className="drawer-close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav className="mobile-nav-links">
            <button
              className="mobile-nav-link text-left"
              onClick={() => navigateTo('home', 'about')}
            >
              About Us
            </button>
            <button
              className="mobile-nav-link text-left"
              onClick={() => navigateTo('home', 'services')}
            >
              Services
            </button>
            <button
              className="mobile-nav-link text-left"
              onClick={() => navigateTo('home', 'difference')}
            >
              The Difference
            </button>
            <button
              className="mobile-nav-link text-left"
              onClick={() => navigateTo('home', 'methodology')}
            >
              Execution
            </button>
            <button
              className="mobile-nav-link text-left"
              onClick={() => navigateTo('home', 'projects')}
            >
              Landmark Projects
            </button>
          </nav>
        </div>

        <div className="mobile-drawer-contact">
          <div className="drawer-contact-item">
            <strong>Headquarters:</strong><br />
            Indira Nagar, Lucknow, UP - 226016
          </div>
          <div className="drawer-contact-item">
            <strong>Direct Lines:</strong><br />
            <a href="tel:+918574305998">+91 85743 05998</a> / <a href="tel:+919651506281">+91 96515 06281</a>
          </div>
          <div className="drawer-contact-item">
            <strong>Email:</strong><br />
            <a href="mailto:ambientengineers.lko@gmail.com">ambientengineers.lko@gmail.com</a>
          </div>
          <button
            className="btn btn-accent btn-sm open-consultation-modal"
            style={{ width: '100%', marginTop: '16px' }}
            onClick={() => {
              setDrawerOpen(false);
              onOpenModal();
            }}
          >
            Request Consultation
          </button>
        </div>
      </aside>
    </>
  );
}

