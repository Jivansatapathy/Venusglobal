import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link" onClick={handleLinkClick}>
            <img src="/images/02.png" alt="Ritovex Logo" className="logo-img" />
          </Link>
        </div>
        
        <div className="nav-divider"></div>
        
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about" className="nav-link" onClick={handleLinkClick}>About Us</Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <a href="#" className="nav-link">
                Services
                <i className="fas fa-chevron-down"></i>
              </a>
              {isServicesOpen && (
                <div className="dropdown-menu">
                  <Link to="/agentic-ai" className="dropdown-item" onClick={handleLinkClick}>Agentic AI</Link>
                  <Link to="/esg" className="dropdown-item" onClick={handleLinkClick}>ESG</Link>
                  <Link to="/digital-reach" className="dropdown-item" onClick={handleLinkClick}>Digital Reach</Link>
                  <Link to="/software-data-ai" className="dropdown-item" onClick={handleLinkClick}>Software & Data AI</Link>
                  <Link to="/cloud-service" className="dropdown-item" onClick={handleLinkClick}>Cloud Service</Link>
                  <Link to="/iatf-auditing" className="dropdown-item" onClick={handleLinkClick}>IATF Auditing</Link>
                </div>
              )}
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact Us</Link>
            </li>
          </ul>
          {/* Mobile-only call option */}
          <div className="mobile-only">
            <div className="nav-call">
              <button className="nav-call-wrap" onClick={() => window.open('https://wa.me/16477616277', '_blank')}>
                <i className="fas fa-phone"></i>
                <span>Call Us</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="nav-divider"></div>
        
        <div className="nav-contact">
          <div className="contact-info">
            <div className="contact-text">Call Any Time</div>
            <div className="contact-number" onClick={() => window.open('https://wa.me/16477616277', '_blank')} style={{cursor: 'pointer'}}>+1 (647) 761-6277</div>
          </div>
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
        </div>

        {/* Hamburger Toggle */}
        <button className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
      </div>
      {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
