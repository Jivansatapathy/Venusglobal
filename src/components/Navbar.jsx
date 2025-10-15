import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src="/images/02.png" alt="Ritovex Logo" className="logo-img" />
          </Link>
        </div>
        
        <div className="nav-divider"></div>
        
        <div className="nav-menu">
          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item dropdown" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <a href="#" className="nav-link">
                Services
                <i className="fas fa-chevron-down"></i>
              </a>
                  {isServicesOpen && (
                    <div className="dropdown-menu">
                      <Link to="/agentic-ai" className="dropdown-item">Agentic AI</Link>
                      <Link to="/esg" className="dropdown-item">ESG</Link>
                      <Link to="/digital-reach" className="dropdown-item">Digital Reach</Link>
                      <Link to="/software-data-ai" className="dropdown-item">Software & Data AI</Link>
                      <Link to="/cloud-service" className="dropdown-item">Cloud Service</Link>
                      <Link to="/iatf-auditing" className="dropdown-item">IATF Auditing</Link>
                    </div>
                  )}
            </li>
                <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                  <Link to="/contact" className="nav-link">Contact Us</Link>
                </li>
          </ul>
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
      </div>
    </nav>
  );
};

export default Navbar;
