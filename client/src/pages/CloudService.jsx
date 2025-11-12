import React from 'react';
import Lottie from 'lottie-react';
import '../components/cloudservice.css';
import Footer from '../components/Footer';

const CloudService = () => {
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    fetch('/lottie/Automation Process.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, []);

  React.useEffect(() => {
    const faqItems = document.querySelectorAll('.cloud-faq-item');
    
    const handleFaqClick = (event) => {
      const faqItem = event.currentTarget;
      const isActive = faqItem.classList.contains('active');
      
      faqItems.forEach(item => {
        item.classList.remove('active');
      });
      
      if (!isActive) {
        faqItem.classList.add('active');
      }
    };
    
    faqItems.forEach(item => {
      item.addEventListener('click', handleFaqClick);
    });
    
    return () => {
      faqItems.forEach(item => {
        item.removeEventListener('click', handleFaqClick);
      });
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="cloud-page">
      {/* Hero Section */}
      <section className="cloud-hero">
        <div className="cloud-hero-container">
          <div className="cloud-hero-content">
            <div className="cloud-hero-badge">
              <span>Cloud Services</span>
            </div>
            <h1 className="cloud-hero-title">
              <span className="title-line">Scalable Cloud</span>
              <span className="title-line">Infrastructure Solutions</span>
            </h1>
            <p className="cloud-hero-description">
              Transform your business with comprehensive cloud services that provide scalability, security, and reliability. Our cloud solutions help you migrate, optimize, and manage your infrastructure for maximum performance and cost efficiency.
            </p>
            <div className="cloud-hero-cta">
              <button className="cloud-hero-button">Get Started</button>
            </div>
          </div>
          <div className="cloud-hero-lottie">
            <div className="cloud-lottie-container">
              <Lottie
                animationData={defaultOptions.animationData}
                loop={defaultOptions.loop}
                autoplay={defaultOptions.autoplay}
                style={{ width: '100%', height: '100%' }}
                rendererSettings={defaultOptions.rendererSettings}
              />
              {!defaultOptions.animationData && (
                <div className="lottie-placeholder">
                  <div className="lottie-placeholder-content">
                    <i className="fas fa-cloud"></i>
                    <p>Cloud Service Animation</p>
                    <small>Add your Lottie JSON file</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="cloud-benefits">
        <div className="cloud-benefits-container">
          <div className="cloud-benefits-header">
            <div className="cloud-benefits-badge">
              <i className="fas fa-star"></i>
              <span>Benefits</span>
            </div>
            <h2 className="cloud-benefits-title">Why Choose Cloud Services?</h2>
            <p className="cloud-benefits-description">
              Discover the transformative benefits that cloud services bring to your business infrastructure and operations.
            </p>
          </div>
          
          <div className="cloud-benefits-grid">
            <div className="cloud-benefit-flip-card">
              <div className="cloud-benefit-flip-inner">
                <div className="cloud-benefit-flip-front">
                  <div className="cloud-benefit-icon">
                    <i className="fas fa-expand-arrows-alt"></i>
                  </div>
                  <h3 className="cloud-benefit-title">Scalability</h3>
                </div>
                <div className="cloud-benefit-flip-back">
                  <p className="cloud-benefit-description">
                    Scale your infrastructure up or down based on demand, ensuring optimal performance and cost efficiency.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cloud-benefit-flip-card">
              <div className="cloud-benefit-flip-inner">
                <div className="cloud-benefit-flip-front">
                  <div className="cloud-benefit-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="cloud-benefit-title">Enhanced Security</h3>
                </div>
                <div className="cloud-benefit-flip-back">
                  <p className="cloud-benefit-description">
                    Protect your data and applications with enterprise-grade security measures and compliance standards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cloud-benefit-flip-card">
              <div className="cloud-benefit-flip-inner">
                <div className="cloud-benefit-flip-front">
                  <div className="cloud-benefit-icon">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h3 className="cloud-benefit-title">Cost Efficiency</h3>
                </div>
                <div className="cloud-benefit-flip-back">
                  <p className="cloud-benefit-description">
                    Reduce infrastructure costs with pay-as-you-go pricing models and eliminate upfront hardware investments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cloud-benefit-flip-card">
              <div className="cloud-benefit-flip-inner">
                <div className="cloud-benefit-flip-front">
                  <div className="cloud-benefit-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h3 className="cloud-benefit-title">High Availability</h3>
                </div>
                <div className="cloud-benefit-flip-back">
                  <p className="cloud-benefit-description">
                    Ensure 99.9% uptime with redundant systems and automatic failover capabilities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cloud-benefit-flip-card">
              <div className="cloud-benefit-flip-inner">
                <div className="cloud-benefit-flip-front">
                  <div className="cloud-benefit-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="cloud-benefit-title">Global Reach</h3>
                </div>
                <div className="cloud-benefit-flip-back">
                  <p className="cloud-benefit-description">
                    Deploy your applications globally with data centers located worldwide for optimal performance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cloud-benefit-flip-card">
              <div className="cloud-benefit-flip-inner">
                <div className="cloud-benefit-flip-front">
                  <div className="cloud-benefit-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3 className="cloud-benefit-title">Managed Services</h3>
                </div>
                <div className="cloud-benefit-flip-back">
                  <p className="cloud-benefit-description">
                    Focus on your business while we handle infrastructure management, monitoring, and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="cloud-process">
        <div className="cloud-process-container">
          <div className="cloud-process-header">
            <div className="cloud-process-badge">
              <i className="fas fa-cogs"></i>
              <span>Our Process</span>
            </div>
            <h2 className="cloud-process-title">How We Implement Your Cloud Solution</h2>
            <p className="cloud-process-description">
              Our proven 4-step process ensures your cloud implementation is seamless, secure, and optimized for your business needs.
            </p>
          </div>
          
          <div className="cloud-process-timeline">
            <div className="cloud-process-step" data-step="1">
              <div className="cloud-process-step-content">
                <div className="cloud-process-step-number">01</div>
                <div className="cloud-process-step-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="cloud-process-step-title">Assessment & Planning</h3>
              </div>
            </div>
            
            <div className="cloud-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="cloud-process-step" data-step="2">
              <div className="cloud-process-step-content">
                <div className="cloud-process-step-number">02</div>
                <div className="cloud-process-step-icon">
                  <i className="fas fa-drafting-compass"></i>
                </div>
                <h3 className="cloud-process-step-title">Architecture Design</h3>
              </div>
            </div>
            
            <div className="cloud-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="cloud-process-step" data-step="3">
              <div className="cloud-process-step-content">
                <div className="cloud-process-step-number">03</div>
                <div className="cloud-process-step-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="cloud-process-step-title">Migration & Deployment</h3>
              </div>
            </div>
            
            <div className="cloud-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="cloud-process-step" data-step="4">
              <div className="cloud-process-step-content">
                <div className="cloud-process-step-number">04</div>
                <div className="cloud-process-step-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="cloud-process-step-title">Optimization & Support</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="cloud-tools">
        <div className="cloud-tools-container">
          <div className="cloud-tools-header">
            <div className="cloud-tools-badge">
              <i className="fas fa-cube"></i>
              <span>Cloud Technology</span>
            </div>
            <h2 className="cloud-tools-title">Cloud Platforms We Use for Excellence</h2>
            <p className="cloud-tools-description">
              We leverage leading cloud platforms and technologies to create robust, scalable, and secure cloud solutions.
            </p>
          </div>
          
          <div className="cloud-tools-grid">
            <div className="cloud-tools-row">
              <div className="cloud-tool-item">
                <div className="cloud-tool-icon">
                  <i className="fab fa-aws"></i>
                  <span className="cloud-tool-name">AWS</span>
                </div>
              </div>
              
              <div className="cloud-tool-item">
                <div className="cloud-tool-icon">
                  <i className="fab fa-microsoft"></i>
                  <span className="cloud-tool-name">Azure</span>
                </div>
              </div>
              
              <div className="cloud-tool-item">
                <div className="cloud-tool-icon">
                  <i className="fab fa-google"></i>
                  <span className="cloud-tool-name">Google Cloud</span>
                </div>
              </div>
              
              <div className="cloud-tool-item">
                <div className="cloud-tool-icon">
                  <i className="fas fa-server"></i>
                  <span className="cloud-tool-name">Kubernetes</span>
                </div>
              </div>
            </div>
            
            <div className="cloud-tools-row">
              <div className="cloud-tool-item">
                <div className="cloud-tool-icon">
                  <i className="fas fa-docker"></i>
                  <span className="cloud-tool-name">Docker</span>
                </div>
              </div>
              
              <div className="cloud-tool-item">
                <div className="cloud-tool-icon">
                  <i className="fas fa-database"></i>
                  <span className="cloud-tool-name">Database</span>
                </div>
              </div>
              
              <div className="cloud-tool-item">
                <div className="cloud-tool-icon">
                  <i className="fas fa-shield-alt"></i>
                  <span className="cloud-tool-name">Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cloud Service Section */}
      <section className="cloud-why-choose">
        <div className="cloud-why-choose-container">
          <div className="cloud-why-choose-image">
            <img src="/images/05.jpg" alt="Cloud Service Team" />
          </div>
          <div className="cloud-why-choose-content">
            <div className="cloud-why-choose-badge">
              <i className="fas fa-cube"></i>
              <span>Benefits</span>
            </div>
            <h2 className="cloud-why-choose-title">Why Choose Our Cloud Services</h2>
            <p className="cloud-why-choose-description">
              Get comprehensive cloud solutions, expert guidance, and reliable infrastructure. We focus on scalability, security, and transformative results for every cloud project.
            </p>
            <div className="cloud-why-choose-divider"></div>
            <div className="cloud-why-choose-benefits">
              <div className="cloud-why-choose-benefit-flip-card">
                <div className="cloud-why-choose-benefit-flip-inner">
                  <div className="cloud-why-choose-benefit-flip-front">
                    <div className="cloud-why-choose-benefit-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <h3 className="cloud-why-choose-benefit-title">Expert & Reliable</h3>
                  </div>
                  <div className="cloud-why-choose-benefit-flip-back">
                    <p className="cloud-why-choose-benefit-description">Our cloud solutions are built by experts with proven reliability and enterprise-grade security.</p>
                  </div>
                </div>
              </div>
              <div className="cloud-why-choose-benefit-flip-card">
                <div className="cloud-why-choose-benefit-flip-inner">
                  <div className="cloud-why-choose-benefit-flip-front">
                    <div className="cloud-why-choose-benefit-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <h3 className="cloud-why-choose-benefit-title">Scalable & Future-Ready</h3>
                  </div>
                  <div className="cloud-why-choose-benefit-flip-back">
                    <p className="cloud-why-choose-benefit-description">Every solution is designed to scale and adapt with your evolving business needs and growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cloud-faq">
        <div className="cloud-faq-container">
          <div className="cloud-faq-header">
            <div className="cloud-faq-badge">
              <i className="fas fa-cube"></i>
              <span>FAQS</span>
            </div>
            <h2 className="cloud-faq-title">Frequently Asked Questions</h2>
            <p className="cloud-faq-description">
              We use cutting-edge cloud technologies to deliver scalable, secure, and reliable infrastructure solutions.
              <br />
              Our cloud services are built for performance, security, and seamless integration.
            </p>
          </div>
          
          <div className="cloud-faq-content">
            <div className="cloud-faq-contact">
              <div className="cloud-faq-contact-card">
                <h3 className="cloud-faq-contact-title">Still Have More Questions?</h3>
                <div className="cloud-faq-contact-divider"></div>
                <p className="cloud-faq-contact-description">
                  If you're curious about cloud services or need more information, feel free to reach out—we're here to help!
                </p>
                <button className="cloud-faq-contact-button" onClick={() => window.location.href = '/contact'}>Contact Us Now</button>
              </div>
            </div>
            
            <div className="cloud-faq-list">
              <div className="cloud-faq-item">
                <div className="cloud-faq-question">
                  <h4>What Cloud Services Do You Offer?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="cloud-faq-answer">
                  <p>We offer comprehensive cloud services including cloud migration, infrastructure setup, managed services, security implementation, disaster recovery, and 24/7 monitoring across AWS, Azure, and Google Cloud platforms.</p>
                </div>
              </div>
              
              <div className="cloud-faq-item">
                <div className="cloud-faq-question">
                  <h4>What Is the Cloud Implementation Timeline?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="cloud-faq-answer">
                  <p>Our cloud implementation typically takes 4-8 weeks depending on complexity. We follow a structured approach: assessment (1 week), design (1-2 weeks), migration (2-4 weeks), and optimization (1 week).</p>
                </div>
              </div>
              
              <div className="cloud-faq-item">
                <div className="cloud-faq-question">
                  <h4>Do You Offer Ongoing Cloud Support?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="cloud-faq-answer">
                  <p>Yes, we provide comprehensive ongoing support including 24/7 monitoring, performance optimization, security updates, backup management, and technical assistance to ensure your cloud infrastructure runs smoothly.</p>
                </div>
              </div>
              
              <div className="cloud-faq-item">
                <div className="cloud-faq-question">
                  <h4>How Do You Ensure Cloud Security?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="cloud-faq-answer">
                  <p>We implement multi-layered security measures including encryption, access controls, network security, compliance monitoring, and regular security audits to protect your data and applications in the cloud.</p>
                </div>
              </div>
              
              <div className="cloud-faq-item">
                <div className="cloud-faq-question">
                  <h4>Can I Request Custom Cloud Solutions?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="cloud-faq-answer">
                  <p>Absolutely! We specialize in custom cloud solutions tailored to your specific requirements. Our team works closely with you to design and implement cloud infrastructure that meets your unique business objectives.</p>
                </div>
              </div>
            </div>
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
                <div className="office-flag">🇨🇦</div>
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
                <div className="office-flag">🇺🇸</div>
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
                <div className="office-flag">🇮🇳</div>
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

export default CloudService;
