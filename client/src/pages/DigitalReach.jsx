import React from 'react';
import Lottie from 'lottie-react';
import '../components/digitalreach.css';
import Footer from '../components/Footer';

const DigitalReach = () => {
  // Load Lottie animation data
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    // Load the Digital marketing services animation JSON file
    fetch('/lottie/Digital Marketing Services.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, []);

  // FAQ Accordion functionality
  React.useEffect(() => {
    const faqItems = document.querySelectorAll('.digital-faq-item');
    
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
    <div className="digital-page">
      {/* Hero Section */}
      <section className="digital-hero">
        <div className="digital-hero-container">
          <div className="digital-hero-content">
            <div className="digital-hero-badge">
              <span>Digital Reach</span>
            </div>
            <h1 className="digital-hero-title">
              <span className="title-line">Amplify Your Brand</span>
              <span className="title-line">Across Digital Channels</span>
            </h1>
            <p className="digital-hero-description">
              Expand your digital presence and reach your target audience with strategic digital marketing solutions. Our comprehensive approach drives engagement, builds brand awareness, and delivers measurable results across all digital platforms.
            </p>
            <div className="digital-hero-cta">
              <button className="digital-hero-button">Get Started</button>
            </div>
          </div>
          <div className="digital-hero-lottie">
            <div className="digital-lottie-container">
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
                    <i className="fas fa-bullhorn"></i>
                    <p>Digital Reach Animation</p>
                    <small>Add your Lottie JSON file</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="digital-benefits">
        <div className="digital-benefits-container">
          <div className="digital-benefits-header">
            <div className="digital-benefits-badge">
              <i className="fas fa-star"></i>
              <span>Benefits</span>
            </div>
            <h2 className="digital-benefits-title">Why Choose Digital Reach Solutions?</h2>
            <p className="digital-benefits-description">
              Discover the transformative benefits that digital reach solutions bring to your brand visibility and audience engagement.
            </p>
          </div>
          
          <div className="digital-benefits-grid">
            <div className="digital-benefit-card">
              <div className="digital-benefit-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="digital-benefit-title">Increased Visibility</h3>
              <p className="digital-benefit-description">
                Boost your brand's online presence and reach a wider audience across multiple digital platforms and channels.
              </p>
            </div>
            
            <div className="digital-benefit-card">
              <div className="digital-benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="digital-benefit-title">Targeted Engagement</h3>
              <p className="digital-benefit-description">
                Connect with your ideal customers through precise targeting and personalized digital marketing strategies.
              </p>
            </div>
            
            <div className="digital-benefit-card">
              <div className="digital-benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="digital-benefit-title">Measurable Results</h3>
              <p className="digital-benefit-description">
                Track and measure your digital marketing performance with detailed analytics and ROI reporting.
              </p>
            </div>
            
            <div className="digital-benefit-card">
              <div className="digital-benefit-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="digital-benefit-title">Multi-Platform Reach</h3>
              <p className="digital-benefit-description">
                Extend your reach across social media, search engines, email, and other digital channels simultaneously.
              </p>
            </div>
            
            <div className="digital-benefit-card">
              <div className="digital-benefit-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="digital-benefit-title">Cost-Effective Marketing</h3>
              <p className="digital-benefit-description">
                Maximize your marketing budget with efficient digital strategies that deliver better results at lower costs.
              </p>
            </div>
            
            <div className="digital-benefit-card">
              <div className="digital-benefit-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="digital-benefit-title">Rapid Growth</h3>
              <p className="digital-benefit-description">
                Accelerate your business growth with scalable digital marketing solutions that adapt to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="digital-process">
        <div className="digital-process-container">
          <div className="digital-process-header">
            <div className="digital-process-badge">
              <i className="fas fa-cogs"></i>
              <span>Our Process</span>
            </div>
            <h2 className="digital-process-title">How We Expand Your Digital Reach</h2>
            <p className="digital-process-description">
              Our proven 4-step process ensures your digital reach strategy is comprehensive, targeted, and delivers maximum impact.
            </p>
          </div>
          
          <div className="digital-process-timeline">
            <div className="digital-process-step" data-step="1">
              <div className="digital-process-step-content">
                <div className="digital-process-step-number">01</div>
                <div className="digital-process-step-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="digital-process-step-title">Audience Research & Analysis</h3>
              </div>
            </div>
            
            <div className="digital-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="digital-process-step" data-step="2">
              <div className="digital-process-step-content">
                <div className="digital-process-step-number">02</div>
                <div className="digital-process-step-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="digital-process-step-title">Strategy Development</h3>
              </div>
            </div>
            
            <div className="digital-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="digital-process-step" data-step="3">
              <div className="digital-process-step-content">
                <div className="digital-process-step-number">03</div>
                <div className="digital-process-step-icon">
                  <i className="fas fa-play"></i>
                </div>
                <h3 className="digital-process-step-title">Campaign Launch</h3>
              </div>
            </div>
            
            <div className="digital-process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="digital-process-step" data-step="4">
              <div className="digital-process-step-content">
                <div className="digital-process-step-number">04</div>
                <div className="digital-process-step-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3 className="digital-process-step-title">Optimization & Growth</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="digital-tools">
        <div className="digital-tools-container">
          <div className="digital-tools-header">
            <div className="digital-tools-badge">
              <i className="fas fa-cube"></i>
              <span>Digital Tools</span>
            </div>
            <h2 className="digital-tools-title">Tools We Use for Digital Excellence</h2>
            <p className="digital-tools-description">
              We leverage cutting-edge digital marketing tools and platforms to create comprehensive, measurable, and impactful reach solutions.
            </p>
          </div>
          
          <div className="digital-tools-grid">
            <div className="digital-tools-row">
              <div className="digital-tool-item">
                <div className="digital-tool-icon">
                  <i className="fas fa-search"></i>
                  <span className="digital-tool-name">SEO Tools</span>
                </div>
              </div>
              
              <div className="digital-tool-item">
                <div className="digital-tool-icon">
                  <i className="fas fa-ad"></i>
                  <span className="digital-tool-name">PPC Ads</span>
                </div>
              </div>
              
              <div className="digital-tool-item">
                <div className="digital-tool-icon">
                  <i className="fas fa-share-alt"></i>
                  <span className="digital-tool-name">Social Media</span>
                </div>
              </div>
              
              <div className="digital-tool-item">
                <div className="digital-tool-icon">
                  <i className="fas fa-envelope"></i>
                  <span className="digital-tool-name">Email Marketing</span>
                </div>
              </div>
            </div>
            
            <div className="digital-tools-row">
              <div className="digital-tool-item">
                <div className="digital-tool-icon">
                  <i className="fas fa-chart-line"></i>
                  <span className="digital-tool-name">Analytics</span>
                </div>
              </div>
              
              <div className="digital-tool-item">
                <div className="digital-tool-icon">
                  <i className="fas fa-video"></i>
                  <span className="digital-tool-name">Content Creation</span>
                </div>
              </div>
              
              <div className="digital-tool-item">
                <div className="digital-tool-icon">
                  <i className="fas fa-cogs"></i>
                  <span className="digital-tool-name">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Digital Reach Section */}
      <section className="digital-why-choose">
        <div className="digital-why-choose-container">
          <div className="digital-why-choose-image">
            <img src="/images/05.jpg" alt="Digital Reach Team" />
          </div>
          <div className="digital-why-choose-content">
            <div className="digital-why-choose-badge">
              <i className="fas fa-cube"></i>
              <span>Benefits</span>
            </div>
            <h2 className="digital-why-choose-title">Why Choose Our Digital Reach Services</h2>
            <p className="digital-why-choose-description">
              Get comprehensive digital reach solutions, expert guidance, and measurable growth. We focus on visibility, engagement, and transformative results for every digital campaign.
            </p>
            <div className="digital-why-choose-divider"></div>
            <div className="digital-why-choose-benefits">
              <div className="digital-why-choose-benefit-flip-card">
                <div className="digital-why-choose-benefit-flip-inner">
                  <div className="digital-why-choose-benefit-flip-front">
                    <div className="digital-why-choose-benefit-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <h3 className="digital-why-choose-benefit-title">Strategic & Data-Driven</h3>
                  </div>
                  <div className="digital-why-choose-benefit-flip-back">
                    <p className="digital-why-choose-benefit-description">Our digital reach strategies are backed by data and designed for maximum impact and ROI.</p>
                  </div>
                </div>
              </div>
              <div className="digital-why-choose-benefit-flip-card">
                <div className="digital-why-choose-benefit-flip-inner">
                  <div className="digital-why-choose-benefit-flip-front">
                    <div className="digital-why-choose-benefit-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <h3 className="digital-why-choose-benefit-title">Multi-Channel & Scalable</h3>
                  </div>
                  <div className="digital-why-choose-benefit-flip-back">
                    <p className="digital-why-choose-benefit-description">Every solution spans multiple channels and scales with your business growth and objectives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="digital-faq">
        <div className="digital-faq-container">
          <div className="digital-faq-header">
            <div className="digital-faq-badge">
              <i className="fas fa-cube"></i>
              <span>FAQS</span>
            </div>
            <h2 className="digital-faq-title">Frequently Asked Questions</h2>
            <p className="digital-faq-description">
              We use cutting-edge digital marketing technologies to deliver comprehensive, measurable solutions that transform your reach.
              <br />
              Our digital reach solutions are built for visibility, engagement, and seamless integration.
            </p>
          </div>
          
          <div className="digital-faq-content">
            <div className="digital-faq-contact">
              <div className="digital-faq-contact-card">
                <h3 className="digital-faq-contact-title">Still Have More Questions?</h3>
                <div className="digital-faq-contact-divider"></div>
                <p className="digital-faq-contact-description">
                  If you're curious about digital reach solutions or need more information, feel free to reach out—we're here to help!
                </p>
                <button className="digital-faq-contact-button" onClick={() => window.location.href = '/contact'}>Contact Us Now</button>
              </div>
            </div>
            
            <div className="digital-faq-list">
              <div className="digital-faq-item">
                <div className="digital-faq-question">
                  <h4>What Digital Reach Services Do You Offer?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="digital-faq-answer">
                  <p>We offer comprehensive digital reach solutions including SEO, PPC advertising, social media marketing, email campaigns, content marketing, and multi-channel digital strategies to maximize your online presence.</p>
                </div>
              </div>
              
              <div className="digital-faq-item">
                <div className="digital-faq-question">
                  <h4>What Is the Digital Reach Implementation Timeline?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="digital-faq-answer">
                  <p>Our digital reach implementation typically takes 2-6 weeks depending on complexity. We follow a structured approach: research (1 week), strategy (1-2 weeks), launch (1-2 weeks), and optimization (ongoing).</p>
                </div>
              </div>
              
              <div className="digital-faq-item">
                <div className="digital-faq-question">
                  <h4>Do You Offer Ongoing Digital Support?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="digital-faq-answer">
                  <p>Yes, we provide comprehensive ongoing support including campaign monitoring, performance optimization, content updates, and continuous strategy refinement to ensure your digital reach remains effective.</p>
                </div>
              </div>
              
              <div className="digital-faq-item">
                <div className="digital-faq-question">
                  <h4>How Do You Measure Digital Reach Success?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="digital-faq-answer">
                  <p>We implement robust measurement frameworks using analytics tools, KPI tracking, conversion monitoring, and regular reporting to ensure your digital reach campaigns deliver measurable and meaningful results.</p>
                </div>
              </div>
              
              <div className="digital-faq-item">
                <div className="digital-faq-question">
                  <h4>Can I Request Custom Digital Strategies?</h4>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="digital-faq-answer">
                  <p>Absolutely! We specialize in custom digital reach strategies tailored to your industry, audience, and specific goals. Our team works closely with you to develop bespoke campaigns that align with your business objectives.</p>
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

export default DigitalReach;
