import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';

export default function Navbar({ onOpenModal }) {
  const { currentPath, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Desktop Dropdown States
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  // Mobile Accordion States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const servicesDropdownRef = useRef(null);
  const industriesDropdownRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const industriesTimeoutRef = useRef(null);

  // Track scroll position for dynamic sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(e.target)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  const handleNavClick = (path, hash = '') => {
    navigate(path, hash);
    setDrawerOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  // Hover handlers with debounce to prevent flickering
  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
    setIndustriesOpen(false);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleIndustriesMouseEnter = () => {
    clearTimeout(industriesTimeoutRef.current);
    setIndustriesOpen(true);
    setServicesOpen(false);
  };

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 150);
  };

  return (
    <>
      <header className={`cad-site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="cad-header-inner">
          {/* Brand Logo */}
          <a
            href="/"
            className="cad-brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            aria-label="Ambient Engineers Home"
          >
            <img src="/images/logo.svg" alt="Ambient Engineers" width="180" height="38" />
          </a>

          {/* Centered Desktop Navigation Bar */}
          <nav className="cad-desktop-nav" aria-label="Main Navigation">
            {/* 1. Home */}
            <a
              href="/"
              className={`cad-nav-item ${currentPath === '/' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
            >
              <span>Home</span>
            </a>

            {/* 2. About Us */}
            <a
              href="/about-us"
              className={`cad-nav-item ${currentPath === '/about-us' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/about-us');
              }}
            >
              <span>About Us</span>
            </a>

            {/* 3. Services (with Hover & Click Dropdown) */}
            <div
              className={`cad-nav-dropdown-wrap ${servicesOpen ? 'open' : ''}`}
              ref={servicesDropdownRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                className={`cad-nav-item cad-dropdown-trigger ${
                  currentPath.startsWith('/services') ? 'active' : ''
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <svg
                  className={`cad-caret ${servicesOpen ? 'rotate' : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Services Dropdown Menu */}
              <div className={`cad-dropdown-menu cad-services-menu ${servicesOpen ? 'show' : ''}`}>
                <div className="cad-menu-header">
                  <span className="cad-menu-code">DISCIPLINES // 04</span>
                  <a
                    href="/services"
                    className="cad-menu-all-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/services');
                    }}
                  >
                    View All Services &rarr;
                  </a>
                </div>

                <div className="cad-dropdown-items-grid">
                  <a
                    href="/services/hvac-works"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/services/hvac-works');
                    }}
                  >
                    <div className="cad-item-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div className="cad-item-text">
                      <span className="cad-item-title">HVAC Works</span>
                      <span className="cad-item-sub">VRF/VRV, Chillers &amp; Ductwork</span>
                    </div>
                  </a>

                  <a
                    href="/services/mep-works"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/services/mep-works');
                    }}
                  >
                    <div className="cad-item-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <div className="cad-item-text">
                      <span className="cad-item-title">MEP Works</span>
                      <span className="cad-item-sub">Electrical, Plumbing &amp; Hydrants</span>
                    </div>
                  </a>

                  <a
                    href="/services/interior-fit-out-works"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/services/interior-fit-out-works');
                    }}
                  >
                    <div className="cad-item-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <div className="cad-item-text">
                      <span className="cad-item-title">Interior Fit-Out Works</span>
                      <span className="cad-item-sub">Acoustic Ceilings &amp; Glass Cabins</span>
                    </div>
                  </a>

                  <a
                    href="/services/amc-works"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/services/amc-works');
                    }}
                  >
                    <div className="cad-item-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    </div>
                    <div className="cad-item-text">
                      <span className="cad-item-title">AMC Works</span>
                      <span className="cad-item-sub">2-Hr SLA &bull; Preventative Diagnostics</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 4. Industries (with Hover & Click Dropdown) */}
            <div
              className={`cad-nav-dropdown-wrap ${industriesOpen ? 'open' : ''}`}
              ref={industriesDropdownRef}
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
            >
              <button
                type="button"
                className={`cad-nav-item cad-dropdown-trigger ${
                  currentPath.startsWith('/industries') ? 'active' : ''
                }`}
                onClick={() => setIndustriesOpen(!industriesOpen)}
                aria-expanded={industriesOpen}
                aria-haspopup="true"
              >
                <span>Industries</span>
                <svg
                  className={`cad-caret ${industriesOpen ? 'rotate' : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Industries Dropdown Menu */}
              <div className={`cad-dropdown-menu cad-industries-menu ${industriesOpen ? 'show' : ''}`}>
                <div className="cad-menu-header">
                  <span className="cad-menu-code">SECTORS // 06</span>
                  <a
                    href="/industries"
                    className="cad-menu-all-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/industries');
                    }}
                  >
                    View All Sectors &rarr;
                  </a>
                </div>

                <div className="cad-dropdown-items-grid cad-ind-items-grid">
                  <a
                    href="/industries/retail"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/industries/retail');
                    }}
                  >
                    <span className="cad-ind-code">01</span>
                    <div className="cad-item-text">
                      <span className="cad-item-title">Retail</span>
                      <span className="cad-item-sub">Stores &amp; Hypermarkets</span>
                    </div>
                  </a>

                  <a
                    href="/industries/banks"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/industries/banks');
                    }}
                  >
                    <span className="cad-ind-code">02</span>
                    <div className="cad-item-text">
                      <span className="cad-item-title">Banks</span>
                      <span className="cad-item-sub">Branches &amp; Data Hubs</span>
                    </div>
                  </a>

                  <a
                    href="/industries/cooperative-offices"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/industries/cooperative-offices');
                    }}
                  >
                    <span className="cad-ind-code">03</span>
                    <div className="cad-item-text">
                      <span className="cad-item-title">Cooperative Offices</span>
                      <span className="cad-item-sub">Corporate Workspaces</span>
                    </div>
                  </a>

                  <a
                    href="/industries/showrooms"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/industries/showrooms');
                    }}
                  >
                    <span className="cad-ind-code">04</span>
                    <div className="cad-item-text">
                      <span className="cad-item-title">Showrooms</span>
                      <span className="cad-item-sub">Automotive &amp; Jewelry</span>
                    </div>
                  </a>

                  <a
                    href="/industries/banquet-halls"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/industries/banquet-halls');
                    }}
                  >
                    <span className="cad-ind-code">05</span>
                    <div className="cad-item-text">
                      <span className="cad-item-title">Banquet Halls</span>
                      <span className="cad-item-sub">Resorts &amp; Grand Venues</span>
                    </div>
                  </a>

                  <a
                    href="/industries/commercial-buildings"
                    className="cad-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/industries/commercial-buildings');
                    }}
                  >
                    <span className="cad-ind-code">06</span>
                    <div className="cad-item-text">
                      <span className="cad-item-title">Commercial Buildings</span>
                      <span className="cad-item-sub">Multi-Story Towers &amp; Plants</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 5. Why Us */}
            <a
              href="/why-us"
              className={`cad-nav-item ${currentPath === '/why-us' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/why-us');
              }}
            >
              <span>Why Us</span>
            </a>

            {/* 6. Contact Us */}
            <a
              href="/contact-us"
              className={`cad-nav-item ${currentPath === '/contact-us' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/contact-us');
              }}
            >
              <span>Contact Us</span>
            </a>
          </nav>

          {/* Rightmost Action Area: Book Now CTA & Mobile Hamburger */}
          <div className="cad-header-right">
            {/* 7. Book Now Primary Navbar CTA */}
            <button
              type="button"
              className="cad-nav-cta-btn"
              onClick={onOpenModal}
              aria-label="Book Engineering Consultation"
            >
              <span>Book Now</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="cad-hamburger-btn"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={drawerOpen}
            >
              <span className={`cad-ham-bar ${drawerOpen ? 'open-1' : ''}`}></span>
              <span className={`cad-ham-bar ${drawerOpen ? 'open-2' : ''}`}></span>
              <span className={`cad-ham-bar ${drawerOpen ? 'open-3' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`cad-drawer-overlay ${drawerOpen ? 'active' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Drawer Navigation Menu */}
      <aside className={`cad-mobile-drawer ${drawerOpen ? 'active' : ''}`} aria-label="Mobile Navigation">
        <div className="cad-drawer-top">
          <img src="/images/logo.svg" alt="Ambient Engineers" width="160" height="34" />
          <button
            type="button"
            className="cad-drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="cad-drawer-nav">
          {/* Home */}
          <button
            type="button"
            className={`cad-drawer-link ${currentPath === '/' ? 'active' : ''}`}
            onClick={() => handleNavClick('/')}
          >
            <span>Home</span>
          </button>

          {/* About Us */}
          <button
            type="button"
            className={`cad-drawer-link ${currentPath === '/about-us' ? 'active' : ''}`}
            onClick={() => handleNavClick('/about-us')}
          >
            <span>About Us</span>
          </button>

          {/* Services Expandable Accordion */}
          <div className="cad-drawer-accordion">
            <button
              type="button"
              className={`cad-drawer-accordion-btn ${mobileServicesOpen ? 'expanded' : ''}`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <span className="cad-accordion-icon">{mobileServicesOpen ? '−' : '+'}</span>
            </button>

            {mobileServicesOpen && (
              <div className="cad-accordion-body">
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/services/hvac-works')}
                >
                  HVAC Works
                </button>
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/services/mep-works')}
                >
                  MEP Works
                </button>
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/services/interior-fit-out-works')}
                >
                  Interior Fit-Out Works
                </button>
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/services/amc-works')}
                >
                  AMC Works
                </button>
              </div>
            )}
          </div>

          {/* Industries Expandable Accordion */}
          <div className="cad-drawer-accordion">
            <button
              type="button"
              className={`cad-drawer-accordion-btn ${mobileIndustriesOpen ? 'expanded' : ''}`}
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
            >
              <span>Industries</span>
              <span className="cad-accordion-icon">{mobileIndustriesOpen ? '−' : '+'}</span>
            </button>

            {mobileIndustriesOpen && (
              <div className="cad-accordion-body">
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/industries/retail')}
                >
                  Retail
                </button>
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/industries/banks')}
                >
                  Banks
                </button>
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/industries/cooperative-offices')}
                >
                  Cooperative Offices
                </button>
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/industries/showrooms')}
                >
                  Showrooms
                </button>
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/industries/banquet-halls')}
                >
                  Banquet Halls
                </button>
                <button
                  type="button"
                  className="cad-sub-link"
                  onClick={() => handleNavClick('/industries/commercial-buildings')}
                >
                  Commercial Buildings
                </button>
              </div>
            )}
          </div>

          {/* Why Us */}
          <button
            type="button"
            className={`cad-drawer-link ${currentPath === '/why-us' ? 'active' : ''}`}
            onClick={() => handleNavClick('/why-us')}
          >
            <span>Why Us</span>
          </button>

          {/* Contact Us */}
          <button
            type="button"
            className={`cad-drawer-link ${currentPath === '/contact-us' ? 'active' : ''}`}
            onClick={() => handleNavClick('/contact-us')}
          >
            <span>Contact Us</span>
          </button>
        </nav>

        {/* Mobile Drawer Bottom Action */}
        <div className="cad-drawer-footer">
          <button
            type="button"
            className="cad-btn-editorial cad-btn-large"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              setDrawerOpen(false);
              onOpenModal();
            }}
          >
            <span>Book Now</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <div className="cad-drawer-contacts">
            <span>TEL: +91 97920 18889</span>
            <span>HQ: INDIRA NAGAR, LUCKNOW</span>
          </div>
        </div>
      </aside>
    </>
  );
}
