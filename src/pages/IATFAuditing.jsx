import React from 'react';
import Lottie from 'lottie-react';
import '../components/iatfauditing.css';
import Footer from '../components/Footer';

const IATFAuditing = () => {
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    fetch('/lottie/hotf-4.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, []);

  React.useEffect(() => {
    const faqItems = document.querySelectorAll('.iatf-faq-item');
    
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
    <div className="iatf-page">
      {/* Hero Section */}
      <section className="iatf-hero">
        <div className="iatf-hero-container">
          <div className="iatf-hero-content">
            <div className="iatf-hero-badge">
              <span>IATF Auditing</span>
            </div>
            <h1 className="iatf-hero-title">
              <span className="title-line">Automotive Quality</span>
              <span className="title-line">Management Excellence</span>
            </h1>
            <p className="iatf-hero-description">
              Achieve IATF 16949 certification with our comprehensive auditing services. Our expert auditors help automotive organizations implement, maintain, and continuously improve their quality management systems to meet international automotive standards.
            </p>
            <div className="iatf-hero-cta">
              <button className="iatf-hero-button">Get Started</button>
            </div>
          </div>
          <div className="iatf-hero-lottie">
            <div className="iatf-lottie-container">
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
                    <i className="fas fa-clipboard-check"></i>
                    <p>IATF Auditing Animation</p>
                    <small>Add your Lottie JSON file</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="iatf-benefits">
        <div className="iatf-benefits-container">
          <div className="iatf-benefits-header">
            <div className="iatf-benefits-badge">
              <i className="fas fa-star"></i>
              <span>Benefits</span>
            </div>
            <h2 className="iatf-benefits-title">Why Choose IATF Auditing Services?</h2>
            <p className="iatf-benefits-description">
              Discover the transformative benefits that IATF auditing services bring to your automotive quality management and compliance processes.
            </p>
          </div>
          
          <div className="iatf-benefits-grid">
            <div className="iatf-benefit-card">
              <div className="iatf-benefit-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="iatf-benefit-title">IATF 16949 Certification</h3>
              <p className="iatf-benefit-description">
                Achieve and maintain IATF 16949 certification with our comprehensive auditing and compliance services.
              </p>
            </div>
            
            <div className="iatf-benefit-card">
              <div className="iatf-benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="iatf-benefit-title">Quality Assurance</h3>
              <p className="iatf-benefit-description">
                Ensure your quality management system meets international automotive industry standards and requirements.
              </p>
            </div>
            
            <div className="iatf-benefit-card">
              <div className="iatf-benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="iatf-benefit-title">Process Improvement</h3>
              <p className="iatf-benefit-description">
                Identify opportunities for continuous improvement and optimize your automotive manufacturing processes.
              </p>
            </div>
            
            <div className="iatf-benefit-card">
              <div className="iatf-benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="iatf-benefit-title">Expert Guidance</h3>
              <p className="iatf-benefit-description">
                Work with certified auditors who have extensive experience in automotive quality management systems.
              </p>
            </div>
            
            <div className="iatf-benefit-card">
              <div className="iatf-benefit-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="iatf-benefit-title">Customer Satisfaction</h3>
              <p className="iatf-benefit-description">
                Enhance customer satisfaction through improved product quality and consistent delivery performance.
              </p>
            </div>
            
            <div className="iatf-benefit-card">
              <div className="iatf-benefit-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="iatf-benefit-title">Global Recognition</h3>
              <p className="iatf-benefit-description">
                Gain international recognition and access to global automotive supply chains with IATF certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="iatf-process">
        <div className="iatf-process-container">
          <div className="iatf-process-header">
            <div className="iatf-process-badge">
              <i className="fas fa-cogs"></i>
              <span>Our Process</span>
            </div>
            <h2 className="iatf-process-title">How We Conduct IATF Auditing</h2>
            <p className="iatf-process-description">
              Our proven 4-step process ensures your IATF auditing is comprehensive, thorough, and delivers actionable insights for continuous improvement.
            </p>
          </div>
          
          <div className="iatf-process-timeline">
            <div className="iatf-process-step" data-step="1">
              <div className="iatf-process-step-content">
                <div className="iatf-process-step-number">01</div>
                <div className="iatf-process-step-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="iatf-process-step-title">Pre-Audit Assessment</h3>
              </div>
            </div>
            
            <div className="iatf-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="iatf-process-step" data-step="2">
              <div className="iatf-process-step-content">
                <div className="iatf-process-step-number">02</div>
                <div className="iatf-process-step-icon">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <h3 className="iatf-process-step-title">Documentation Review</h3>
              </div>
            </div>
            
            <div className="iatf-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="iatf-process-step" data-step="3">
              <div className="iatf-process-step-content">
                <div className="iatf-process-step-number">03</div>
                <div className="iatf-process-step-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="iatf-process-step-title">On-Site Audit</h3>
              </div>
            </div>
            
            <div className="iatf-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="iatf-process-step" data-step="4">
              <div className="iatf-process-step-content">
                <div className="iatf-process-step-number">04</div>
                <div className="iatf-process-step-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3 className="iatf-process-step-title">Report & Follow-up</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="iatf-tools">
        <div className="iatf-tools-container">
          <div className="iatf-tools-header">
            <div className="iatf-tools-badge">
              <i className="fas fa-cube"></i>
              <span>Auditing Tools</span>
            </div>
            <h2 className="iatf-tools-title">Tools We Use for IATF Excellence</h2>
            <p className="iatf-tools-description">
              We leverage industry-standard auditing tools and methodologies to ensure comprehensive and accurate IATF assessments.
            </p>
          </div>
          
          <div className="iatf-tools-grid">
            <div className="iatf-tools-row">
              <div className="iatf-tool-item">
                <div className="iatf-tool-icon">
                  <i className="fas fa-clipboard-check"></i>
                  <span className="iatf-tool-name">Checklists</span>
                </div>
              </div>
              
              <div className="iatf-tool-item">
                <div className="iatf-tool-icon">
                  <i className="fas fa-chart-bar"></i>
                  <span className="iatf-tool-name">Risk Assessment</span>
                </div>
              </div>
              
              <div className="iatf-tool-item">
                <div className="iatf-tool-icon">
                  <i className="fas fa-file-alt"></i>
                  <span className="iatf-tool-name">Documentation</span>
                </div>
              </div>
              
              <div className="iatf-tool-item">
                <div className="iatf-tool-icon">
                  <i className="fas fa-users"></i>
                  <span className="iatf-tool-name">Interviews</span>
                </div>
              </div>
            </div>
            
            <div className="iatf-tools-row">
              <div className="iatf-tool-item">
                <div className="iatf-tool-icon">
                  <i className="fas fa-eye"></i>
                  <span className="iatf-tool-name">Observation</span>
                </div>
              </div>
              
              <div className="iatf-tool-item">
                <div className="iatf-tool-icon">
                  <i className="fas fa-database"></i>
                  <span className="iatf-tool-name">Data Analysis</span>
                </div>
              </div>
              
              <div className="iatf-tool-item">
                <div className="iatf-tool-icon">
                  <i className="fas fa-chart-line"></i>
                  <span className="iatf-tool-name">Reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IATF Auditing Section */}
      <section className="iatf-why-choose">
        <div className="iatf-why-choose-container">
          <div className="iatf-why-choose-image">
            <img src="/images/05.jpg" alt="IATF Auditing Team" />
          </div>
          <div className="iatf-why-choose-content">
            <div className="iatf-why-choose-badge">
              <i className="fas fa-cube"></i>
              <span>Benefits</span>
            </div>
            <h2 className="iatf-why-choose-title">Why Choose Our IATF Auditing Services</h2>
            <p className="iatf-why-choose-description">
              Get comprehensive IATF auditing solutions, expert guidance, and certification support. We focus on quality, compliance, and transformative results for every automotive organization.
            </p>
            <div className="iatf-why-choose-divider"></div>
            <div className="iatf-why-choose-benefits">
              <div className="iatf-why-choose-benefit-item">
                <div className="iatf-why-choose-benefit-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="iatf-why-choose-benefit-content">
                  <h3 className="iatf-why-choose-benefit-title">Expert & Certified</h3>
                  <p className="iatf-why-choose-benefit-description">Our auditors are certified professionals with extensive experience in automotive quality management systems.</p>
                </div>
              </div>
              <div className="iatf-why-choose-benefit-item">
                <div className="iatf-why-choose-benefit-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="iatf-why-choose-benefit-content">
                  <h3 className="iatf-why-choose-benefit-title">Comprehensive & Reliable</h3>
                  <p className="iatf-why-choose-benefit-description">Every audit is thorough and reliable, ensuring your organization meets all IATF 16949 requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="iatf-faq">
        <div className="iatf-faq-container">
          <div className="iatf-faq-header">
            <div className="iatf-faq-badge">
              <i className="fas fa-cube"></i>
              <span>FAQS</span>
            </div>
            <h2 className="iatf-faq-title">Frequently Asked Questions</h2>
            <p className="iatf-faq-description">
              We use industry-standard auditing methodologies to deliver comprehensive, accurate, and reliable IATF assessments.
              <br />
              Our IATF auditing services are built for quality, compliance, and continuous improvement.
            </p>
          </div>
          
          <div className="iatf-faq-content">
            <div className="iatf-faq-contact">
              <div className="iatf-faq-contact-card">
                <h3 className="iatf-faq-contact-title">Still Have More Questions?</h3>
                <div className="iatf-faq-contact-divider"></div>
                <p className="iatf-faq-contact-description">
                  If you're curious about IATF auditing or need more information, feel free to reach out—we're here to help!
                </p>
                <button className="iatf-faq-contact-button" onClick={() => window.location.href = '/contact'}>Contact Us Now</button>
              </div>
            </div>
            
            <div className="iatf-faq-list">
              <div className="iatf-faq-item">
                <div className="iatf-faq-question">
                  <h4>What IATF Auditing Services Do You Offer?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="iatf-faq-answer">
                  <p>We offer comprehensive IATF auditing services including IATF 16949 certification audits, internal audits, supplier audits, gap assessments, and ongoing compliance support for automotive organizations.</p>
                </div>
              </div>
              
              <div className="iatf-faq-item">
                <div className="iatf-faq-question">
                  <h4>What Is the IATF Auditing Timeline?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="iatf-faq-answer">
                  <p>Our IATF auditing timeline varies based on organization size and complexity, typically ranging from 2-5 days for initial audits and 1-3 days for surveillance audits, with follow-up activities as needed.</p>
                </div>
              </div>
              
              <div className="iatf-faq-item">
                <div className="iatf-faq-question">
                  <h4>Do You Offer Ongoing IATF Support?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="iatf-faq-answer">
                  <p>Yes, we provide comprehensive ongoing support including surveillance audits, corrective action follow-up, training programs, and continuous improvement guidance to maintain your IATF certification.</p>
                </div>
              </div>
              
              <div className="iatf-faq-item">
                <div className="iatf-faq-question">
                  <h4>How Do You Ensure Audit Quality?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="iatf-faq-answer">
                  <p>We ensure audit quality through certified auditors, standardized methodologies, thorough documentation, peer review processes, and adherence to IATF requirements and industry best practices.</p>
                </div>
              </div>
              
              <div className="iatf-faq-item">
                <div className="iatf-faq-question">
                  <h4>Can You Help with IATF Certification Preparation?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="iatf-faq-answer">
                  <p>Absolutely! We provide comprehensive IATF certification preparation including gap assessments, documentation review, training programs, and pre-audit support to ensure your organization is ready for certification.</p>
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

export default IATFAuditing;
