import React from 'react';
import './footer.css'; // Import the dedicated footer CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">Venus Global Tech</div>
            <p className="footer-description">
              Leading provider of innovative technology solutions, digital transformation, 
              and cutting-edge software development services. We help businesses stay 
              competitive and future-proof through technology, compliance & innovation.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="https://wa.me/16477616277" target="_blank" rel="noopener noreferrer">Get Free Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="/software-data-ai">Software & Data AI</a></li>
              <li><a href="/agentic-ai">Agentic AI Solutions</a></li>
              <li><a href="/cloud-service">Cloud Services</a></li>
              <li><a href="/digital-reach">Digital Marketing</a></li>
              <li><a href="/esg">ESG Solutions</a></li>
              <li><a href="/iatf-auditing">IATF Auditing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <div className="contact-icon location">
                  <i className="fas fa-location-dot"></i>
                </div>
                <span>#205 - 1085 Bellamy Road North, Toronto, ON</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <span><a href="https://wa.me/16477220837" target="_blank" rel="noopener noreferrer">647-722-0837</a></span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>info@venusglobaltech.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2024 Venus Global Technology. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
