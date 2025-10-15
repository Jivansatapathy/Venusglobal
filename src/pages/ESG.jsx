import React from 'react';
import Lottie from 'lottie-react';
import '../components/esg.css';
import Footer from '../components/Footer';

const ESG = () => {
  // Load Lottie animation data
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    // Load the ESG animation JSON file
    fetch('/lottie/ESG Animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, []);

  // FAQ Accordion functionality
  React.useEffect(() => {
    const faqItems = document.querySelectorAll('.esg-faq-item');
    
    const handleFaqClick = (event) => {
      const faqItem = event.currentTarget;
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      faqItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        faqItem.classList.add('active');
      }
    };
    
    // Add click event listeners
    faqItems.forEach(item => {
      item.addEventListener('click', handleFaqClick);
    });
    
    // Cleanup event listeners
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
    <div className="esg-page">
      {/* Hero Section */}
      <section className="esg-hero">
        <div className="esg-hero-container">
          <div className="esg-hero-content">
            <div className="esg-hero-badge">
              <span>ESG Solutions</span>
            </div>
            <h1 className="esg-hero-title">
              <span className="title-line">Sustainable Business</span>
              <span className="title-line">for Future Growth</span>
            </h1>
            <p className="esg-hero-description">
              Transform your business with comprehensive ESG solutions that drive sustainability, enhance stakeholder value, and ensure regulatory compliance. Our expert team helps you build a responsible and profitable future.
            </p>
            <div className="esg-hero-cta">
              <button className="esg-hero-button">Get Started</button>
            </div>
          </div>
          <div className="esg-hero-lottie">
            <div className="esg-lottie-container">
              {/* Lottie animation */}
              <Lottie
                animationData={defaultOptions.animationData}
                loop={defaultOptions.loop}
                autoplay={defaultOptions.autoplay}
                style={{ width: '100%', height: '100%' }}
                rendererSettings={defaultOptions.rendererSettings}
              />
              {/* Fallback placeholder when no animation data */}
              {!defaultOptions.animationData && (
                <div className="lottie-placeholder">
                  <div className="lottie-placeholder-content">
                    <i className="fas fa-leaf"></i>
                    <p>ESG Animation</p>
                    <small>Add your Lottie JSON file</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="esg-benefits">
        <div className="esg-benefits-container">
          <div className="esg-benefits-header">
            <div className="esg-benefits-badge">
              <i className="fas fa-star"></i>
              <span>Benefits</span>
            </div>
            <h2 className="esg-benefits-title">Why Choose ESG Solutions?</h2>
            <p className="esg-benefits-description">
              Discover the transformative benefits that ESG solutions bring to your business operations and stakeholder relationships.
            </p>
          </div>
          
          <div className="esg-benefits-grid">
            <div className="esg-benefit-card">
              <div className="esg-benefit-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="esg-benefit-title">Environmental Impact</h3>
              <p className="esg-benefit-description">
                Reduce your carbon footprint and implement sustainable practices that protect the environment while improving efficiency.
              </p>
            </div>
            
            <div className="esg-benefit-card">
              <div className="esg-benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="esg-benefit-title">Social Responsibility</h3>
              <p className="esg-benefit-description">
                Build stronger communities and stakeholder relationships through ethical business practices and social initiatives.
              </p>
            </div>
            
            <div className="esg-benefit-card">
              <div className="esg-benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="esg-benefit-title">Governance Excellence</h3>
              <p className="esg-benefit-description">
                Implement robust governance frameworks that ensure transparency, accountability, and long-term business sustainability.
              </p>
            </div>
            
            <div className="esg-benefit-card">
              <div className="esg-benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="esg-benefit-title">Financial Performance</h3>
              <p className="esg-benefit-description">
                Drive better financial results through improved risk management, operational efficiency, and stakeholder confidence.
              </p>
            </div>
            
            <div className="esg-benefit-card">
              <div className="esg-benefit-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="esg-benefit-title">Compliance & Reporting</h3>
              <p className="esg-benefit-description">
                Stay ahead of regulatory requirements with comprehensive ESG reporting and compliance management solutions.
              </p>
            </div>
            
            <div className="esg-benefit-card">
              <div className="esg-benefit-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="esg-benefit-title">Stakeholder Trust</h3>
              <p className="esg-benefit-description">
                Build lasting trust with investors, customers, and partners through transparent and responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="esg-process">
        <div className="esg-process-container">
          <div className="esg-process-header">
            <div className="esg-process-badge">
              <i className="fas fa-cogs"></i>
              <span>Our Process</span>
            </div>
            <h2 className="esg-process-title">How We Implement ESG Solutions</h2>
            <p className="esg-process-description">
              Our proven 4-step process ensures your ESG implementation is comprehensive, compliant, and delivers measurable impact.
            </p>
          </div>
          
          <div className="esg-process-timeline">
            <div className="esg-process-step" data-step="1">
              <div className="esg-process-step-content">
                <div className="esg-process-step-number">01</div>
                <div className="esg-process-step-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="esg-process-step-title">ESG Assessment & Strategy</h3>
              </div>
            </div>
            
            <div className="esg-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="esg-process-step" data-step="2">
              <div className="esg-process-step-content">
                <div className="esg-process-step-number">02</div>
                <div className="esg-process-step-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3 className="esg-process-step-title">Framework Development</h3>
              </div>
            </div>
            
            <div className="esg-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="esg-process-step" data-step="3">
              <div className="esg-process-step-content">
                <div className="esg-process-step-number">03</div>
                <div className="esg-process-step-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="esg-process-step-title">Implementation & Training</h3>
              </div>
            </div>
            
            <div className="esg-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="esg-process-step" data-step="4">
              <div className="esg-process-step-content">
                <div className="esg-process-step-number">04</div>
                <div className="esg-process-step-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3 className="esg-process-step-title">Monitoring & Reporting</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="esg-tools">
        <div className="esg-tools-container">
          <div className="esg-tools-header">
            <div className="esg-tools-badge">
              <i className="fas fa-cube"></i>
              <span>ESG Technology</span>
            </div>
            <h2 className="esg-tools-title">Tools We Use for ESG Excellence</h2>
            <p className="esg-tools-description">
              We leverage cutting-edge ESG technologies and frameworks to create comprehensive, measurable, and impactful sustainability solutions.
            </p>
          </div>
          
          <div className="esg-tools-grid">
            <div className="esg-tools-row">
              <div className="esg-tool-item">
                <div className="esg-tool-icon">
                  <i className="fas fa-leaf"></i>
                  <span className="esg-tool-name">Carbon Tracking</span>
                </div>
              </div>
              
              <div className="esg-tool-item">
                <div className="esg-tool-icon">
                  <i className="fas fa-chart-line"></i>
                  <span className="esg-tool-name">ESG Analytics</span>
                </div>
              </div>
              
              <div className="esg-tool-item">
                <div className="esg-tool-icon">
                  <i className="fas fa-file-alt"></i>
                  <span className="esg-tool-name">Reporting Tools</span>
                </div>
              </div>
              
              <div className="esg-tool-item">
                <div className="esg-tool-icon">
                  <i className="fas fa-shield-alt"></i>
                  <span className="esg-tool-name">Compliance</span>
                </div>
              </div>
            </div>
            
            <div className="esg-tools-row">
              <div className="esg-tool-item">
                <div className="esg-tool-icon">
                  <i className="fas fa-users"></i>
                  <span className="esg-tool-name">Stakeholder</span>
                </div>
              </div>
              
              <div className="esg-tool-item">
                <div className="esg-tool-icon">
                  <i className="fas fa-database"></i>
                  <span className="esg-tool-name">Data Management</span>
                </div>
              </div>
              
              <div className="esg-tool-item">
                <div className="esg-tool-icon">
                  <i className="fas fa-cogs"></i>
                  <span className="esg-tool-name">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ESG Section */}
      <section className="esg-why-choose">
        <div className="esg-why-choose-container">
          <div className="esg-why-choose-image">
            <img src="/images/05.jpg" alt="ESG Team" />
          </div>
          <div className="esg-why-choose-content">
            <div className="esg-why-choose-badge">
              <i className="fas fa-cube"></i>
              <span>Benefits</span>
            </div>
            <h2 className="esg-why-choose-title">Why Choose Our ESG Services</h2>
            <p className="esg-why-choose-description">
              Get comprehensive ESG solutions, expert guidance, and measurable impact. We focus on sustainability, compliance, and transformative results for every ESG project.
            </p>
            <div className="esg-why-choose-divider"></div>
            <div className="esg-why-choose-benefits">
              <div className="esg-why-choose-benefit-item">
                <div className="esg-why-choose-benefit-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="esg-why-choose-benefit-content">
                  <h3 className="esg-why-choose-benefit-title">Comprehensive & Measurable</h3>
                  <p className="esg-why-choose-benefit-description">Our ESG solutions provide complete coverage with measurable impact and clear ROI.</p>
                </div>
              </div>
              <div className="esg-why-choose-benefit-item">
                <div className="esg-why-choose-benefit-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="esg-why-choose-benefit-content">
                  <h3 className="esg-why-choose-benefit-title">Expert & Future-Ready</h3>
                  <p className="esg-why-choose-benefit-description">Every solution is designed by experts to meet current and future ESG requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="esg-faq">
        <div className="esg-faq-container">
          <div className="esg-faq-header">
            <div className="esg-faq-badge">
              <i className="fas fa-cube"></i>
              <span>FAQS</span>
            </div>
            <h2 className="esg-faq-title">Frequently Asked Questions</h2>
            <p className="esg-faq-description">
              We use cutting-edge ESG technologies to deliver comprehensive, measurable solutions that transform your business.
              <br />
              Our ESG solutions are built for impact, compliance, and seamless integration.
            </p>
          </div>
          
          <div className="esg-faq-content">
            <div className="esg-faq-contact">
              <div className="esg-faq-contact-card">
                <h3 className="esg-faq-contact-title">Still Have More Questions?</h3>
                <div className="esg-faq-contact-divider"></div>
                <p className="esg-faq-contact-description">
                  If you're curious about ESG solutions or need more information, feel free to reach out—we're here to help!
                </p>
                <button className="esg-faq-contact-button">Contact Us Now</button>
              </div>
            </div>
            
            <div className="esg-faq-list">
              <div className="esg-faq-item">
                <div className="esg-faq-question">
                  <h4>What ESG Services Do You Offer?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="esg-faq-answer">
                  <p>We offer comprehensive ESG solutions including sustainability assessments, carbon footprint analysis, social impact measurement, governance frameworks, compliance reporting, and stakeholder engagement strategies.</p>
                </div>
              </div>
              
              <div className="esg-faq-item">
                <div className="esg-faq-question">
                  <h4>What Is the ESG Implementation Timeline?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="esg-faq-answer">
                  <p>Our ESG implementation typically takes 6-12 weeks depending on complexity. We follow a structured approach: assessment (2 weeks), strategy (2-3 weeks), implementation (4-6 weeks), and monitoring (ongoing).</p>
                </div>
              </div>
              
              <div className="esg-faq-item">
                <div className="esg-faq-question">
                  <h4>Do You Offer Ongoing ESG Support?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="esg-faq-answer">
                  <p>Yes, we provide comprehensive ongoing support including ESG monitoring, performance tracking, regulatory updates, and continuous improvement to ensure your ESG initiatives remain effective and compliant.</p>
                </div>
              </div>
              
              <div className="esg-faq-item">
                <div className="esg-faq-question">
                  <h4>How Do You Measure ESG Impact?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="esg-faq-answer">
                  <p>We implement robust measurement frameworks using industry-standard metrics, KPI tracking, stakeholder feedback, and regular reporting to ensure your ESG initiatives deliver measurable and meaningful impact.</p>
                </div>
              </div>
              
              <div className="esg-faq-item">
                <div className="esg-faq-question">
                  <h4>Can I Request Custom ESG Solutions?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="esg-faq-answer">
                  <p>Absolutely! We specialize in custom ESG solutions tailored to your industry, size, and specific requirements. Our team works closely with you to develop bespoke strategies that align with your business goals.</p>
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

export default ESG;
