import React from 'react';
import '../components/aboutus.css';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      {/* About Us Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-description">
            We're Venus Global Technology, a leading provider of innovative technology solutions and digital transformation services. We partner with businesses to drive growth through cutting-edge AI, cloud services, software development, and compliance solutions. From concept to execution, we blend strategic thinking with advanced technology to deliver results that don't just meet expectations — they exceed them. Let's transform your business together.
          </p>
          <div className="about-hero-buttons">
            <button className="about-hero-button primary" onClick={() => window.location.href = '/#services'}>Our Services</button>
            <button className="about-hero-button secondary" onClick={() => window.open('https://wa.me/16477220837', '_blank')}>Get Free Consultation</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card-header">
                <img src="/images/icon1.svg" alt="Document Icon" className="stat-icon" />
                <div className="stat-number">10+</div>
              </div>
              <div className="stat-divider"></div>
              <p className="stat-description">Great Works</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <img src="/images/icon2.svg" alt="Briefcase Icon" className="stat-icon" />
                <div className="stat-number">16+</div>
              </div>
              <div className="stat-divider"></div>
              <p className="stat-description">Years Experience</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <img src="/images/icon3.svg" alt="Trophy Icon" className="stat-icon" />
                <div className="stat-number">2</div>
              </div>
              <div className="stat-divider"></div>
              <p className="stat-description">Award-Winning Work</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <img src="/images/icon4.svg" alt="Users Icon" className="stat-icon" />
                <div className="stat-number">100+</div>
              </div>
              <div className="stat-divider"></div>
              <p className="stat-description">We have happy Clients worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section">
        <div className="about-content-container">
          <div className="about-content-grid">
            <div className="about-content-image">
              <div className="about-image-wrapper">
                <img src="/images/03.png" alt="About Us Team" className="about-content-img" />
              </div>
            </div>
            
            <div className="about-content-text">
              <div className="about-content-badge">
                <i className="fas fa-cube"></i>
                <span>About Us</span>
              </div>
              
              <h2 className="about-content-title">Your Success, Our Priority.</h2>
              
              <p className="about-content-description">
                We're dedicated to helping you achieve your goals with a simple, user-friendly experience. We believe our commitment to your success sets us apart.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <h3 className="feature-title">Innovate to Lead</h3>
                  <p className="feature-description">Foster creativity and embrace innovation to stay ahead of the competition.</p>
                </div>
                
                <div className="feature-item">
                  <h3 className="feature-title">Optimize for Growth</h3>
                  <p className="feature-description">Streamline processes and resources to maximize efficiency and profitability.</p>
                </div>
                
                <div className="feature-item">
                  <h3 className="feature-title">Engage with Purpose</h3>
                  <p className="feature-description">Build meaningful relationships with customers through authentic engagement.</p>
                </div>
                
                <div className="feature-item">
                  <h3 className="feature-title">Scale with Strategy</h3>
                  <p className="feature-description">Expand your business by implementing structured, scalable plans.</p>
                </div>
              </div>
              
              <button className="about-content-button" onClick={() => window.location.href = '/contact'}>Start Projects</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="trusted-partners">
        <div className="partners-container">
          <div className="partners-divider">
            <div className="partners-line"></div>
            <div className="partners-badge">
              <span>Trusted Partners Worldwide for Success</span>
            </div>
            <div className="partners-line"></div>
          </div>
          <div className="sponsors-ticker-wrapper">
            <div className="sponsors-ticker">
              <div className="ticker">
                <div className="inner-ticker-wrapper">
                  <div className="ticker-circle"></div>
                  <div className="company-logo">GIGL</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">LeddarTech</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Sanofi</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Apobiologix</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Ford</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">GM</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Woodmizer</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Appili</div>
                </div>
                <div className="inner-ticker-wrapper">
                  <div className="ticker-circle"></div>
                  <div className="company-logo">GIGL</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">LeddarTech</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Sanofi</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Apobiologix</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Ford</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">GM</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Woodmizer</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Appili</div>
                </div>
                <div className="inner-ticker-wrapper">
                  <div className="ticker-circle"></div>
                  <div className="company-logo">GIGL</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">LeddarTech</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Sanofi</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Apobiologix</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Ford</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">GM</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Woodmizer</div>
                  <div className="ticker-circle"></div>
                  <div className="company-logo">Appili</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <div className="services-header">
            <div className="services-badge">
              <i className="fas fa-cube"></i>
              <span>Services</span>
            </div>
            <h2 className="services-title">Your Needs, Our Expertise</h2>
            <p className="services-description">
              Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real results. Let's build something amazing.
            </p>
          </div>
          
          <div className="services-content">
            <div className="services-list">
              <div className="service-item" data-service="software-data-ai">
                <div className="service-number">01</div>
                <div className="service-details">
                  <h3 className="service-title">Software Development & Data AI</h3>
                  <p className="service-description">
                    Cutting-edge software development and AI solutions that transform your business operations. We build intelligent applications, implement machine learning models, and create data-driven solutions that drive innovation and efficiency.
                  </p>
                </div>
                <button className="service-arrow">
                  <span className="arrow-icon">↗</span>
                </button>
                <div className="service-hover-image">
                  <img src="/images/Software & Data.jpg" alt="Software Development & Data AI" />
                </div>
              </div>
              
              <div className="service-item" data-service="agentic-ai">
                <div className="service-number">02</div>
                <div className="service-details">
                  <h3 className="service-title">Agentic AI Solutions</h3>
                  <p className="service-description">
                    Next-generation autonomous AI agents that can reason, plan, and execute complex tasks independently. Our agentic AI systems learn, adapt, and make decisions to optimize your business processes and drive intelligent automation.
                  </p>
                </div>
                <button className="service-arrow">
                  <span className="arrow-icon">↗</span>
                </button>
                <div className="service-hover-image">
                  <img src="/images/Agentic AI.jpg" alt="Agentic AI Solutions" />
                </div>
              </div>
              
              <div className="service-item" data-service="cloud-services">
                <div className="service-number">03</div>
                <div className="service-details">
                  <h3 className="service-title">Cloud Services & Infrastructure</h3>
                  <p className="service-description">
                    Comprehensive cloud solutions that scale with your business. From cloud migration and architecture design to managed services and DevOps, we ensure your infrastructure is secure, scalable, and cost-effective.
                  </p>
                </div>
                <button className="service-arrow">
                  <span className="arrow-icon">↗</span>
                </button>
                <div className="service-hover-image">
                  <img src="/images/AI & Cloud.jpg" alt="Cloud Services" />
                </div>
              </div>
              
              <div className="service-item" data-service="digital-reach">
                <div className="service-number">04</div>
                <div className="service-details">
                  <h3 className="service-title">Digital Marketing & Reach</h3>
                  <p className="service-description">
                    Strategic digital marketing solutions that expand your market reach and drive growth. We combine SEO, social media, content marketing, and data analytics to create campaigns that deliver measurable results and ROI.
                  </p>
                </div>
                <button className="service-arrow">
                  <span className="arrow-icon">↗</span>
                </button>
                <div className="service-hover-image">
                  <img src="/images/SEO.webp" alt="Digital Marketing" />
                </div>
              </div>
              
              <div className="service-item" data-service="esg-solutions">
                <div className="service-number">05</div>
                <div className="service-details">
                  <h3 className="service-title">ESG Solutions & Sustainability</h3>
                  <p className="service-description">
                    Environmental, Social, and Governance solutions that help your organization meet sustainability goals and regulatory requirements. We provide ESG reporting, compliance management, and sustainable technology implementations.
                  </p>
                </div>
                <button className="service-arrow">
                  <span className="arrow-icon">↗</span>
                </button>
                <div className="service-hover-image">
                  <img src="/images/ESG.jpg" alt="ESG Solutions" />
                </div>
              </div>
              
              <div className="service-item" data-service="iatf-auditing">
                <div className="service-number">06</div>
                <div className="service-details">
                  <h3 className="service-title">IATF Auditing & Compliance</h3>
                  <p className="service-description">
                    Specialized IATF 16949 automotive quality management system auditing and compliance services. We help automotive suppliers achieve and maintain certification while improving quality processes and reducing risks.
                  </p>
                </div>
                <button className="service-arrow">
                  <span className="arrow-icon">↗</span>
                </button>
                <div className="service-hover-image">
                  <img src="/images/IATF.jpg" alt="IATF Auditing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div 
            className="cta-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/bg.jpg')`
            }}
          >
            <p className="cta-prompt">Have a project in mind? Just let us know!</p>
            <h2 className="cta-title">Let's Start Talk</h2>
            <button className="cta-button" onClick={() => window.open('https://wa.me/16477220837', '_blank')}>Connect With Us</button>
          </div>
        </div>
      </section>

      {/* Upper Footer - Contact Details */}
      <section className="upper-footer">
        <div className="upper-footer-container">
          <div className="upper-footer-header">
            <h2>Our Global Offices</h2>
            <p>Connect with us across multiple locations worldwide</p>
          </div>
          
          <div className="offices-grid">
            {/* Toronto Office */}
            <div className="office-card">
              <div className="office-header">
                <div className="office-flag"><img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" style={{width: '24px', height: '16px', objectFit: 'cover'}} /></div>
                <h3>Toronto, Canada</h3>
              </div>
              <div className="office-details">
                <div className="office-address">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>#205 - 1085 Bellamy Road North, Toronto, ON</span>
                </div>
                <div className="office-phone">
                  <i className="fas fa-phone"></i>
                  <a href="https://wa.me/16477220837" target="_blank" rel="noopener noreferrer">647-722-0837</a>
                </div>
              </div>
            </div>

            {/* Michigan Office */}
            <div className="office-card">
              <div className="office-header">
                <div className="office-flag"><img src="https://flagcdn.com/w40/us.png" alt="United States Flag" style={{width: '24px', height: '16px', objectFit: 'cover'}} /></div>
                <h3>Michigan, USA</h3>
              </div>
              <div className="office-details">
                <div className="office-address">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>880 W Long Lake Rd Ste 225 | Troy, MI 48098</span>
                </div>
                <div className="office-phones">
                  <div className="office-phone">
                    <i className="fas fa-phone"></i>
                    <a href="https://wa.me/12482751077" target="_blank" rel="noopener noreferrer">248-275-1077</a>
                  </div>
                  <div className="office-phone">
                    <i className="fas fa-phone"></i>
                    <a href="https://wa.me/17187150770" target="_blank" rel="noopener noreferrer">718-715-0770</a>
                  </div>
                </div>
              </div>
            </div>

            {/* India Office */}
            <div className="office-card">
              <div className="office-header">
                <div className="office-flag"><img src="https://flagcdn.com/w40/in.png" alt="India Flag" style={{width: '24px', height: '16px', objectFit: 'cover'}} /></div>
                <h3>India</h3>
              </div>
              <div className="office-details">
                <div className="office-address">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Mumbai, Surat, Chennai, Hyderabad</span>
                </div>
                <div className="office-phones">
                  <div className="office-phone">
                    <i className="fas fa-phone"></i>
                    <a href="https://wa.me/912612601177" target="_blank" rel="noopener noreferrer">+91-261-2601177</a>
                  </div>
                  <div className="office-phone">
                    <i className="fas fa-phone"></i>
                    <a href="https://wa.me/91261391177" target="_blank" rel="noopener noreferrer">+91-261-391177</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;


