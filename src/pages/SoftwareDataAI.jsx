import React from 'react';
import Lottie from 'lottie-react';
import '../components/softwaredataai.css';
import Footer from '../components/Footer';

const SoftwareDataAI = () => {
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    fetch('/lottie/Software Development.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, []);

  React.useEffect(() => {
    const faqItems = document.querySelectorAll('.software-data-faq-item');
    
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
    <div className="software-data-page">
      {/* Hero Section */}
      <section className="software-data-hero">
        <div className="software-data-hero-container">
          <div className="software-data-hero-content">
            <div className="software-data-hero-badge">
              <span>Software & Data AI</span>
            </div>
            <h1 className="software-data-hero-title">
              <span className="title-line">Intelligent Software</span>
              <span className="title-line">& Data Solutions</span>
            </h1>
            <p className="software-data-hero-description">
              Transform your business with cutting-edge software development and intelligent data AI solutions. We create powerful applications and leverage advanced analytics to drive innovation, efficiency, and growth across your organization.
            </p>
            <div className="software-data-hero-cta">
              <button className="software-data-hero-button">Get Started</button>
            </div>
          </div>
          <div className="software-data-hero-lottie">
            <div className="software-data-lottie-container">
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
                    <i className="fas fa-code"></i>
                    <p>Software & Data AI Animation</p>
                    <small>Add your Lottie JSON file</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="software-data-benefits">
        <div className="software-data-benefits-container">
          <div className="software-data-benefits-header">
            <div className="software-data-benefits-badge">
              <i className="fas fa-star"></i>
              <span>Benefits</span>
            </div>
            <h2 className="software-data-benefits-title">Why Choose Software & Data AI Solutions?</h2>
            <p className="software-data-benefits-description">
              Discover the transformative benefits that our combined software development and data AI solutions bring to your business operations and digital transformation.
            </p>
          </div>
          
          <div className="software-data-benefits-grid">
            <div className="software-data-benefit-card">
              <div className="software-data-benefit-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="software-data-benefit-title">Custom Software Development</h3>
              <p className="software-data-benefit-description">
                Build scalable, robust applications tailored to your specific business needs with modern technologies and best practices.
              </p>
            </div>
            
            <div className="software-data-benefit-card">
              <div className="software-data-benefit-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="software-data-benefit-title">Intelligent Data Analytics</h3>
              <p className="software-data-benefit-description">
                Unlock insights from your data with advanced AI algorithms, machine learning models, and predictive analytics.
              </p>
            </div>
            
            <div className="software-data-benefit-card">
              <div className="software-data-benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="software-data-benefit-title">Business Intelligence</h3>
              <p className="software-data-benefit-description">
                Transform raw data into actionable insights with comprehensive dashboards and real-time reporting systems.
              </p>
            </div>
            
            <div className="software-data-benefit-card">
              <div className="software-data-benefit-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="software-data-benefit-title">Process Automation</h3>
              <p className="software-data-benefit-description">
                Automate complex workflows and business processes to increase efficiency and reduce manual errors.
              </p>
            </div>
            
            <div className="software-data-benefit-card">
              <div className="software-data-benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="software-data-benefit-title">Data Security & Compliance</h3>
              <p className="software-data-benefit-description">
                Ensure your data and applications are secure with enterprise-grade security measures and compliance standards.
              </p>
            </div>
            
            <div className="software-data-benefit-card">
              <div className="software-data-benefit-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="software-data-benefit-title">Scalable Solutions</h3>
              <p className="software-data-benefit-description">
                Build solutions that grow with your business, from startup to enterprise scale with cloud-native architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="software-data-process">
        <div className="software-data-process-container">
          <div className="software-data-process-header">
            <div className="software-data-process-badge">
              <i className="fas fa-cogs"></i>
              <span>Our Process</span>
            </div>
            <h2 className="software-data-process-title">How We Build Your Software & Data AI Solution</h2>
            <p className="software-data-process-description">
              Our proven 4-step process ensures your software and data AI implementation is comprehensive, efficient, and delivers exceptional results.
            </p>
          </div>
          
          <div className="software-data-process-timeline">
            <div className="software-data-process-step" data-step="1">
              <div className="software-data-process-step-content">
                <div className="software-data-process-step-number">01</div>
                <div className="software-data-process-step-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="software-data-process-step-title">Analysis & Planning</h3>
              </div>
            </div>
            
            <div className="software-data-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="software-data-process-step" data-step="2">
              <div className="software-data-process-step-content">
                <div className="software-data-process-step-number">02</div>
                <div className="software-data-process-step-icon">
                  <i className="fas fa-drafting-compass"></i>
                </div>
                <h3 className="software-data-process-step-title">Design & Architecture</h3>
              </div>
            </div>
            
            <div className="software-data-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="software-data-process-step" data-step="3">
              <div className="software-data-process-step-content">
                <div className="software-data-process-step-number">03</div>
                <div className="software-data-process-step-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="software-data-process-step-title">Development & Integration</h3>
              </div>
            </div>
            
            <div className="software-data-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="software-data-process-step" data-step="4">
              <div className="software-data-process-step-content">
                <div className="software-data-process-step-number">04</div>
                <div className="software-data-process-step-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="software-data-process-step-title">Deployment & Optimization</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="software-data-tools">
        <div className="software-data-tools-container">
          <div className="software-data-tools-header">
            <div className="software-data-tools-badge">
              <i className="fas fa-cube"></i>
              <span>Technology Stack</span>
            </div>
            <h2 className="software-data-tools-title">Technologies We Use for Software & Data Excellence</h2>
            <p className="software-data-tools-description">
              We leverage cutting-edge technologies and frameworks to create powerful, scalable, and intelligent software and data solutions.
            </p>
          </div>
          
          <div className="software-data-tools-grid">
            <div className="software-data-tools-row">
              <div className="software-data-tool-item">
                <div className="software-data-tool-icon">
                  <i className="fab fa-react"></i>
                  <span className="software-data-tool-name">React</span>
                </div>
              </div>
              
              <div className="software-data-tool-item">
                <div className="software-data-tool-icon">
                  <i className="fab fa-node-js"></i>
                  <span className="software-data-tool-name">Node.js</span>
                </div>
              </div>
              
              <div className="software-data-tool-item">
                <div className="software-data-tool-icon">
                  <i className="fas fa-database"></i>
                  <span className="software-data-tool-name">MongoDB</span>
                </div>
              </div>
              
              <div className="software-data-tool-item">
                <div className="software-data-tool-icon">
                  <i className="fas fa-brain"></i>
                  <span className="software-data-tool-name">Python</span>
                </div>
              </div>
            </div>
            
            <div className="software-data-tools-row">
              <div className="software-data-tool-item">
                <div className="software-data-tool-icon">
                  <i className="fas fa-chart-bar"></i>
                  <span className="software-data-tool-name">TensorFlow</span>
                </div>
              </div>
              
              <div className="software-data-tool-item">
                <div className="software-data-tool-icon">
                  <i className="fas fa-cloud"></i>
                  <span className="software-data-tool-name">AWS</span>
                </div>
              </div>
              
              <div className="software-data-tool-item">
                <div className="software-data-tool-icon">
                  <i className="fas fa-robot"></i>
                  <span className="software-data-tool-name">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="software-data-why-choose">
        <div className="software-data-why-choose-container">
          <div className="software-data-why-choose-image">
            <img src="/images/05.jpg" alt="Software & Data AI Team" />
          </div>
          <div className="software-data-why-choose-content">
            <div className="software-data-why-choose-badge">
              <i className="fas fa-cube"></i>
              <span>Benefits</span>
            </div>
            <h2 className="software-data-why-choose-title">Why Choose Our Software & Data AI Services</h2>
            <p className="software-data-why-choose-description">
              Get comprehensive software development and data AI solutions, expert guidance, and intelligent automation. We focus on innovation, efficiency, and transformative results for every project.
            </p>
            <div className="software-data-why-choose-divider"></div>
            <div className="software-data-why-choose-benefits">
              <div className="software-data-why-choose-benefit-item">
                <div className="software-data-why-choose-benefit-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="software-data-why-choose-benefit-content">
                  <h3 className="software-data-why-choose-benefit-title">Expert & Innovative</h3>
                  <p className="software-data-why-choose-benefit-description">Our team combines software development expertise with cutting-edge data AI technologies to deliver innovative solutions.</p>
                </div>
              </div>
              <div className="software-data-why-choose-benefit-item">
                <div className="software-data-why-choose-benefit-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="software-data-why-choose-benefit-content">
                  <h3 className="software-data-why-choose-benefit-title">Scalable & Future-Ready</h3>
                  <p className="software-data-why-choose-benefit-description">Every solution is designed to scale and adapt with your evolving business needs and technological advancements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="software-data-faq">
        <div className="software-data-faq-container">
          <div className="software-data-faq-header">
            <div className="software-data-faq-badge">
              <i className="fas fa-cube"></i>
              <span>FAQS</span>
            </div>
            <h2 className="software-data-faq-title">Frequently Asked Questions</h2>
            <p className="software-data-faq-description">
              We use cutting-edge technologies to deliver intelligent, scalable, and innovative software and data AI solutions.
              <br />
              Our solutions are built for performance, security, and seamless integration.
            </p>
          </div>
          
          <div className="software-data-faq-content">
            <div className="software-data-faq-contact">
              <div className="software-data-faq-contact-card">
                <h3 className="software-data-faq-contact-title">Still Have More Questions?</h3>
                <div className="software-data-faq-contact-divider"></div>
                <p className="software-data-faq-contact-description">
                  If you're curious about Software & Data AI solutions or need more information, feel free to reach out—we're here to help!
                </p>
                <button className="software-data-faq-contact-button" onClick={() => window.location.href = '/contact'}>Contact Us Now</button>
              </div>
            </div>
            
            <div className="software-data-faq-list">
              <div className="software-data-faq-item">
                <div className="software-data-faq-question">
                  <h4>What Software & Data AI Services Do You Offer?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="software-data-faq-answer">
                  <p>We offer comprehensive software development including web applications, mobile apps, and custom software, combined with data AI services like machine learning, predictive analytics, business intelligence, and data automation solutions.</p>
                </div>
              </div>
              
              <div className="software-data-faq-item">
                <div className="software-data-faq-question">
                  <h4>What Is the Development Timeline?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="software-data-faq-answer">
                  <p>Our development timeline varies based on project complexity, typically ranging from 4-12 weeks for software development and 6-16 weeks for data AI solutions. We provide detailed project timelines during the planning phase.</p>
                </div>
              </div>
              
              <div className="software-data-faq-item">
                <div className="software-data-faq-question">
                  <h4>Do You Offer Ongoing Support?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="software-data-faq-answer">
                  <p>Yes, we provide comprehensive ongoing support including maintenance, updates, performance optimization, data monitoring, and 24/7 technical assistance to ensure your solutions run smoothly and efficiently.</p>
                </div>
              </div>
              
              <div className="software-data-faq-item">
                <div className="software-data-faq-question">
                  <h4>How Do You Ensure Data Security?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="software-data-faq-answer">
                  <p>We implement enterprise-grade security measures including encryption, access controls, secure data storage, compliance with industry standards, and regular security audits to protect your data and applications.</p>
                </div>
              </div>
              
              <div className="software-data-faq-item">
                <div className="software-data-faq-question">
                  <h4>Can You Integrate AI with Existing Systems?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="software-data-faq-answer">
                  <p>Absolutely! We specialize in integrating AI capabilities with existing software systems, databases, and workflows. Our team ensures seamless integration while maintaining system stability and performance.</p>
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

export default SoftwareDataAI;
