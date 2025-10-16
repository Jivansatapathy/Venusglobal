import React, { useEffect, useRef } from 'react';
import '../components/home.css';
import Footer from '../components/Footer';

const Home = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, observerOptions);

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  // Handle service image switching
  const handleServiceHover = (serviceType) => {
    const allImages = document.querySelectorAll('.service-image');
    allImages.forEach(img => {
      img.classList.remove('active');
      if (img.dataset.service === serviceType) {
        img.classList.add('active');
      }
    });
  };

  const handleServiceLeave = () => {
    const allImages = document.querySelectorAll('.service-image');
    allImages.forEach(img => {
      img.classList.remove('active');
    });
    // Set first image as default
    const firstImage = document.querySelector('.service-image[data-service="software-data-ai"]');
    if (firstImage) {
      firstImage.classList.add('active');
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>Creative Ideas That Inspire Growth</span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Driving Growth Through</span>
              <span className="title-line">Technology, Compliance & Innovation</span>
            </h1>
            <p className="hero-description">
              Maximise Your Technology Investment, From SEO and Agentic AI to IATF compliance, ESG solutions, Managed IT Services, and Staff Augmentation — we deliver end-to-end expertise to help your business stay competitive and future-proof.
            </p>
            <div className="hero-cta">
              <button className="cta-button" onClick={() => document.querySelector('.about-us').scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img 
                src="/images/01.png" 
                alt="Creative Agency Team Member" 
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="trusted-partners">
        <div className="partners-container">
          <div className="partners-header">
            <div className="partners-badge">
              <span>Trusted Partners Worldwide for Success</span>
            </div>
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

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-container">
          <div className="about-header">
            <div className="about-badge">
              <i className="fas fa-cube"></i>
              <span>About Us</span>
            </div>
            <h2 className="about-title">Who We Are. Learn About us</h2>
            <p className="about-description">
              We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-image">
              <img src="/images/03.png" alt="About Us Team" className="about-img" />
            </div>
            
            <div className="about-stats">
              <div className="about-us-top-grid">
                <div 
                  className="about-us-card _01"
                  ref={(el) => (cardsRef.current[0] = el)}
                >
                  <div className="about-us-card-icon-wrap">
                    <img src="/images/icon1.svg" alt="Document Icon" className="about-us-card-icon" />
                  </div>
                  <div className="about-us-card-typography">
                    <div className="about-us-card-counter-wrap">
                      <h3 className="stat-number">200+</h3>
                    </div>
                    <p className="about-us-card-description">We deliver great work always</p>
                  </div>
                </div>
                
                <div 
                  className="about-us-card _02"
                  ref={(el) => (cardsRef.current[1] = el)}
                >
                  <div className="about-us-card-icon-wrap">
                    <img src="/images/icon2.svg" alt="Briefcase Icon" className="about-us-card-icon" />
                  </div>
                  <div className="about-us-card-typography">
                    <div className="about-us-card-counter-wrap">
                      <h3 className="stat-number">10+</h3>
                    </div>
                    <p className="about-us-card-description">Experience you can count on</p>
                  </div>
                </div>
                
                <div 
                  className="about-us-card _03"
                  ref={(el) => (cardsRef.current[2] = el)}
                >
                  <div className="about-us-card-icon-wrap">
                    <img src="/images/icon3.svg" alt="Trophy Icon" className="about-us-card-icon" />
                  </div>
                  <div className="about-us-card-typography">
                    <div className="about-us-card-counter-wrap">
                      <h3 className="stat-number">20+</h3>
                    </div>
                    <p className="about-us-card-description">Award-Winning Work, Trusted Results</p>
                  </div>
                </div>
                
                <div 
                  className="about-us-card _04"
                  ref={(el) => (cardsRef.current[3] = el)}
                >
                  <div className="about-us-card-icon-wrap">
                    <img src="/images/icon4.svg" alt="Users Icon" className="about-us-card-icon" />
                  </div>
                  <div className="about-us-card-typography">
                    <div className="about-us-card-counter-wrap">
                      <h3 className="stat-number">5K+</h3>
                    </div>
                    <p className="about-us-card-description">We have happy Clients worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="about-cta">
                <button className="about-button" onClick={() => window.location.href = '/about'}>More About Us</button>
                <div className="about-contact">
                  <i className="fas fa-phone"></i>
                  <span>Get free Quote</span>
                  <span className="contact-number" onClick={() => window.open('https://wa.me/16477220837', '_blank')} style={{cursor: 'pointer'}}>647-722-0837</span>
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
                  <div className="service-item" data-service="software-data-ai" onClick={() => window.location.href = '/software-data-ai'} style={{cursor: 'pointer'}}>
                    <div className="service-number">01</div>
                    <div className="service-details">
                      <h3 className="service-title">Software Development & Data AI</h3>
                      <p className="service-description">
                        Cutting-edge software development and AI solutions that transform your business operations. We build intelligent applications, implement machine learning models, and create data-driven solutions that drive innovation and efficiency.
                      </p>
                    </div>
                    <button className="service-arrow" onClick={(e) => { e.stopPropagation(); window.location.href = '/software-data-ai'; }}>
                      <span className="arrow-icon">↗</span>
                    </button>
                    <div className="service-hover-image">
                      <img src="/images/Software & Data.jpg" alt="Software Development & Data AI" />
                    </div>
                  </div>
                  
                  <div className="service-item" data-service="agentic-ai" onClick={() => window.location.href = '/agentic-ai'} style={{cursor: 'pointer'}}>
                    <div className="service-number">02</div>
                    <div className="service-details">
                      <h3 className="service-title">Agentic AI Solutions</h3>
                      <p className="service-description">
                        Next-generation autonomous AI agents that can reason, plan, and execute complex tasks independently. Our agentic AI systems learn, adapt, and make decisions to optimize your business processes and drive intelligent automation.
                      </p>
                    </div>
                    <button className="service-arrow" onClick={(e) => { e.stopPropagation(); window.location.href = '/agentic-ai'; }}>
                      <span className="arrow-icon">↗</span>
                    </button>
                    <div className="service-hover-image">
                      <img src="/images/Agentic AI.jpg" alt="Agentic AI Solutions" />
                    </div>
                  </div>
                  
                  <div className="service-item" data-service="cloud-services" onClick={() => window.location.href = '/cloud-service'} style={{cursor: 'pointer'}}>
                    <div className="service-number">03</div>
                    <div className="service-details">
                      <h3 className="service-title">Cloud Services & Infrastructure</h3>
                      <p className="service-description">
                        Comprehensive cloud solutions that scale with your business. From cloud migration and architecture design to managed services and DevOps, we ensure your infrastructure is secure, scalable, and cost-effective.
                      </p>
                    </div>
                    <button className="service-arrow" onClick={(e) => { e.stopPropagation(); window.location.href = '/cloud-service'; }}>
                      <span className="arrow-icon">↗</span>
                    </button>
                    <div className="service-hover-image">
                      <img src="/images/AI & Cloud.jpg" alt="Cloud Services" />
                    </div>
                  </div>
                  
                  <div className="service-item" data-service="digital-reach" onClick={() => window.location.href = '/digital-reach'} style={{cursor: 'pointer'}}>
                    <div className="service-number">04</div>
                    <div className="service-details">
                      <h3 className="service-title">Digital Marketing & Reach</h3>
                      <p className="service-description">
                        Strategic digital marketing solutions that expand your market reach and drive growth. We combine SEO, social media, content marketing, and data analytics to create campaigns that deliver measurable results and ROI.
                      </p>
                    </div>
                    <button className="service-arrow" onClick={(e) => { e.stopPropagation(); window.location.href = '/digital-reach'; }}>
                      <span className="arrow-icon">↗</span>
                    </button>
                    <div className="service-hover-image">
                      <img src="/images/SEO.webp" alt="Digital Marketing" />
                    </div>
                  </div>
                  
                  <div className="service-item" data-service="esg-solutions" onClick={() => window.location.href = '/esg'} style={{cursor: 'pointer'}}>
                    <div className="service-number">05</div>
                    <div className="service-details">
                      <h3 className="service-title">ESG Solutions & Sustainability</h3>
                      <p className="service-description">
                        Environmental, Social, and Governance solutions that help your organization meet sustainability goals and regulatory requirements. We provide ESG reporting, compliance management, and sustainable technology implementations.
                      </p>
                    </div>
                    <button className="service-arrow" onClick={(e) => { e.stopPropagation(); window.location.href = '/esg'; }}>
                      <span className="arrow-icon">↗</span>
                    </button>
                    <div className="service-hover-image">
                      <img src="/images/ESG.jpg" alt="ESG Solutions" />
                    </div>
                  </div>
                  
                  <div className="service-item" data-service="iatf-auditing" onClick={() => window.location.href = '/iatf-auditing'} style={{cursor: 'pointer'}}>
                    <div className="service-number">06</div>
                    <div className="service-details">
                      <h3 className="service-title">IATF Auditing & Compliance</h3>
                      <p className="service-description">
                        Specialized IATF 16949 automotive quality management system auditing and compliance services. We help automotive suppliers achieve and maintain certification while improving quality processes and reducing risks.
                      </p>
                    </div>
                    <button className="service-arrow" onClick={(e) => { e.stopPropagation(); window.location.href = '/iatf-auditing'; }}>
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

          {/* Working Process Section - Desktop Only */}
          <section className="working-process desktop-only">
            <div className="working-process-container">
              <div className="working-process-content">
                <div className="working-process-badge">
                  <i className="fas fa-cube"></i>
                  <span>Working Process</span>
                </div>
                <h2 className="working-process-title">
                  Explore Our 3 Step Working Process
                </h2>
                <div className="working-process-cta">
                  <button className="working-process-button" onClick={() => window.location.href = '/contact'}>Start Projects</button>
                </div>
              </div>
              
              <div className="working-process-cards">
                <div 
                  className="process-card"
                  ref={(el) => (cardsRef.current[4] = el)}
                >
                  <div className="process-card-number">01</div>
                  <img src="/images/icon5.svg" alt="Discovery Icon" className="process-card-icon" />
                  <h3 className="process-card-title">Discovery & Strategy</h3>
                  <p className="process-card-description">
                    We start by understanding your vision, goals, and target audience to create a comprehensive strategy that aligns with your business objectives.
                  </p>
                </div>
                
                <div 
                  className="process-card"
                  ref={(el) => (cardsRef.current[5] = el)}
                >
                  <div className="process-card-number">02</div>
                  <img src="/images/icon6.svg" alt="Design Icon" className="process-card-icon" />
                  <h3 className="process-card-title">Design & Development</h3>
                  <p className="process-card-description">
                    Our team creates stunning designs and develops robust solutions using cutting-edge technologies to bring your vision to life.
                  </p>
                </div>
                
                <div 
                  className="process-card"
                  ref={(el) => (cardsRef.current[6] = el)}
                >
                  <div className="process-card-number">03</div>
                  <img src="/images/icon7.svg" alt="Launch Icon" className="process-card-icon" />
                  <h3 className="process-card-title">Launch & Optimize</h3>
                  <p className="process-card-description">
                    We launch your project with precision and continuously optimize performance to ensure maximum impact and success.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Working Process Section - Mobile/Tablet Only */}
          <section className="working-process-mobile">
            <div className="working-process-mobile-container">
              <div className="working-process-mobile-content">
                <div className="working-process-badge">
                  <i className="fas fa-cube"></i>
                  <span>Working Process</span>
                </div>
                <h2 className="working-process-title">
                  Explore Our 3 Step Working Process
                </h2>
                <div className="working-process-cta">
                  <button className="working-process-button" onClick={() => window.location.href = '/contact'}>Start Projects</button>
                </div>
              </div>
              
              <div className="working-process-mobile-cards">
                <div className="process-card">
                  <div className="process-card-number">01</div>
                  <img src="/images/icon5.svg" alt="Discovery Icon" className="process-card-icon" />
                  <h3 className="process-card-title">Discovery & Strategy</h3>
                  <p className="process-card-description">
                    We start by understanding your vision, goals, and target audience to create a comprehensive strategy that aligns with your business objectives.
                  </p>
                </div>
                
                <div className="process-card">
                  <div className="process-card-number">02</div>
                  <img src="/images/icon6.svg" alt="Design Icon" className="process-card-icon" />
                  <h3 className="process-card-title">Design & Development</h3>
                  <p className="process-card-description">
                    Our team creates stunning designs and develops robust solutions using cutting-edge technologies to bring your vision to life.
                  </p>
                </div>
                
                <div className="process-card">
                  <div className="process-card-number">03</div>
                  <img src="/images/icon7.svg" alt="Launch Icon" className="process-card-icon" />
                  <h3 className="process-card-title">Launch & Optimize</h3>
                  <p className="process-card-description">
                    We launch your project with precision and continuously optimize performance to ensure maximum impact and success.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Carousel Section */}
          <section className="skills-carousel">
            <div className="skills-carousel-container">
              <div className="skills-track">
                {/* First set of skills */}
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Software Development</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Agentic AI</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Cloud Services</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Data Analytics</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Machine Learning</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Digital Marketing</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">ESG Solutions</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">IATF Auditing</div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Software Development</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Agentic AI</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Cloud Services</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Data Analytics</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Machine Learning</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">Digital Marketing</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">ESG Solutions</div>
                </div>
                <div className="skill-item">
                  <div className="skill-arrow">↗</div>
                  <div className="skill-star">✦</div>
                  <div className="skill-tag">IATF Auditing</div>
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

          {/* Footer Component */}
          <Footer />
        </div>
      );
    };

    export default Home;
