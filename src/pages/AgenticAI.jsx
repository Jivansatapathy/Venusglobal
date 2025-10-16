import React from 'react';
import Lottie from 'lottie-react';
import '../components/agenticai.css';
import Footer from '../components/Footer';

const AgenticAI = () => {
  // Load Lottie animation data
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    // Load the Actable AI Landing Page Animation JSON file
    fetch('/lottie/Actable AI Landing Page Animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, []);

  // FAQ Accordion functionality
  React.useEffect(() => {
    const faqItems = document.querySelectorAll('.agentic-faq-item');
    
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
    <div className="agentic-ai-page">
      {/* Hero Section */}
      <section className="agentic-hero">
        <div className="agentic-hero-container">
          <div className="agentic-hero-content">
            <div className="agentic-hero-badge">
              <span>Agentic AI</span>
            </div>
            <h1 className="agentic-hero-title">
              <span className="title-line">Intelligent Automation</span>
              <span className="title-line">for Modern Business</span>
            </h1>
            <p className="agentic-hero-description">
              Transform your business with autonomous AI agents that think, learn, and act independently. Our Agentic AI solutions automate complex workflows, enhance decision-making, and drive unprecedented efficiency across your organization.
            </p>
            <div className="agentic-hero-cta">
              <button className="agentic-hero-button">Get Started</button>
            </div>
          </div>
          <div className="agentic-hero-lottie">
            <div className="agentic-lottie-container">
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
                    <i className="fas fa-robot"></i>
                    <p>Lottie Animation</p>
                    <small>Add your Lottie JSON file</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="agentic-benefits">
        <div className="agentic-benefits-container">
          <div className="agentic-benefits-header">
            <div className="agentic-benefits-badge">
              <i className="fas fa-star"></i>
              <span>Benefits</span>
            </div>
            <h2 className="agentic-benefits-title">Why Choose Agentic AI?</h2>
            <p className="agentic-benefits-description">
              Discover the transformative benefits that Agentic AI brings to your business operations and decision-making processes.
            </p>
          </div>
          
          <div className="agentic-benefits-grid">
            <div className="agentic-benefit-card">
              <div className="agentic-benefit-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="agentic-benefit-title">Increased Efficiency</h3>
              <p className="agentic-benefit-description">
                Automate complex workflows and reduce manual tasks by up to 80%, allowing your team to focus on strategic initiatives.
              </p>
            </div>
            
            <div className="agentic-benefit-card">
              <div className="agentic-benefit-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="agentic-benefit-title">Cost Reduction</h3>
              <p className="agentic-benefit-description">
                Significantly reduce operational costs through intelligent automation and optimized resource allocation.
              </p>
            </div>
            
            <div className="agentic-benefit-card">
              <div className="agentic-benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="agentic-benefit-title">Better Decision Making</h3>
              <p className="agentic-benefit-description">
                Leverage real-time data analysis and predictive insights to make informed decisions faster than ever before.
              </p>
            </div>
            
            <div className="agentic-benefit-card">
              <div className="agentic-benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="agentic-benefit-title">24/7 Operations</h3>
              <p className="agentic-benefit-description">
                Maintain continuous operations with AI agents that work around the clock without breaks or downtime.
              </p>
            </div>
            
            <div className="agentic-benefit-card">
              <div className="agentic-benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="agentic-benefit-title">Enhanced Security</h3>
              <p className="agentic-benefit-description">
                Advanced threat detection and automated security protocols to protect your business from emerging risks.
              </p>
            </div>
            
            <div className="agentic-benefit-card">
              <div className="agentic-benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="agentic-benefit-title">Improved Customer Experience</h3>
              <p className="agentic-benefit-description">
                Deliver personalized, instant responses and support that exceeds customer expectations every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="agentic-process">
        <div className="agentic-process-container">
          <div className="agentic-process-header">
            <div className="agentic-process-badge">
              <i className="fas fa-cogs"></i>
              <span>Our Process</span>
            </div>
            <h2 className="agentic-process-title">How We Build Your AI Solution</h2>
            <p className="agentic-process-description">
              Our proven 4-step process ensures your Agentic AI implementation is tailored to your specific business needs and delivers measurable results.
            </p>
          </div>
          
          <div className="agentic-process-timeline">
            <div className="process-step" data-step="1">
              <div className="process-step-content">
                <div className="process-step-number">01</div>
                <div className="process-step-icon">
                  <i className="fas fa-search"></i>
                </div>
                    <h3 className="process-step-title">Analyze Business Needs & Goals</h3>
              </div>
            </div>
            
            <div className="process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="process-step" data-step="2">
              <div className="process-step-content">
                <div className="process-step-number">02</div>
                <div className="process-step-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                    <h3 className="process-step-title">Design Intelligent AI Workflows</h3>
              </div>
            </div>
            
            <div className="process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="process-step" data-step="3">
              <div className="process-step-content">
                <div className="process-step-number">03</div>
                <div className="process-step-icon">
                  <i className="fas fa-brain"></i>
                </div>
                    <h3 className="process-step-title">Develop, Train & Integrate AI Models</h3>
              </div>
            </div>
            
            <div className="process-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="process-step" data-step="4">
              <div className="process-step-content">
                <div className="process-step-number">04</div>
                <div className="process-step-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                    <h3 className="process-step-title">Deploy, Monitor & Optimize Performance</h3>
              </div>
            </div>
          </div>
        </div>
       </section>

       {/* Tools Section */}
       <section className="agentic-tools">
         <div className="agentic-tools-container">
           <div className="agentic-tools-header">
             <div className="agentic-tools-badge">
               <i className="fas fa-cube"></i>
               <span>AI Technology</span>
             </div>
             <h2 className="agentic-tools-title">Tools We Use to Build Intelligent AI</h2>
             <p className="agentic-tools-description">
               We leverage cutting-edge AI technologies and frameworks to create powerful, scalable, and intelligent solutions. Our tech stack is built for performance, accuracy, and seamless integration.
             </p>
           </div>
           
           <div className="agentic-tools-grid">
             <div className="agentic-tools-row">
               <div className="agentic-tool-item">
                 <div className="agentic-tool-icon">
                   <i className="fas fa-brain"></i>
                   <span className="agentic-tool-name">TensorFlow</span>
                 </div>
               </div>
               
               <div className="agentic-tool-item">
                 <div className="agentic-tool-icon">
                   <i className="fas fa-project-diagram"></i>
                   <span className="agentic-tool-name">PyTorch</span>
                 </div>
               </div>
               
               <div className="agentic-tool-item">
                 <div className="agentic-tool-icon">
                   <i className="fas fa-robot"></i>
                   <span className="agentic-tool-name">OpenAI GPT</span>
                 </div>
               </div>
               
               <div className="agentic-tool-item">
                 <div className="agentic-tool-icon">
                   <i className="fas fa-shield-alt"></i>
                   <span className="agentic-tool-name">Hugging Face</span>
                 </div>
               </div>
             </div>
             
             <div className="agentic-tools-row">
               <div className="agentic-tool-item">
                 <div className="agentic-tool-icon">
                   <i className="fas fa-database"></i>
                   <span className="agentic-tool-name">LangChain</span>
                 </div>
               </div>
               
               <div className="agentic-tool-item">
                 <div className="agentic-tool-icon">
                   <i className="fas fa-wave-square"></i>
                   <span className="agentic-tool-name">Vector DB</span>
                 </div>
               </div>
               
               <div className="agentic-tool-item">
                 <div className="agentic-tool-icon">
                   <i className="fas fa-cogs"></i>
                   <span className="agentic-tool-name">AutoML</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Why Choose Agentic AI Section */}
       <section className="agentic-why-choose">
         <div className="agentic-why-choose-container">
           <div className="agentic-why-choose-image">
             <img src="/images/05.jpg" alt="Agentic AI Team" />
           </div>
           <div className="agentic-why-choose-content">
             <div className="agentic-why-choose-badge">
               <i className="fas fa-cube"></i>
               <span>Benefits</span>
             </div>
             <h2 className="agentic-why-choose-title">Why Choose Our Agentic AI Services</h2>
             <p className="agentic-why-choose-description">
               Get intelligent automation, faster implementation, and AI solutions that evolve with your business. We focus on innovation, efficiency, and transformative results for every AI project.
             </p>
             <div className="agentic-why-choose-divider"></div>
             <div className="agentic-why-choose-benefits">
               <div className="agentic-why-choose-benefit-item">
                 <div className="agentic-why-choose-benefit-icon">
                   <i className="fas fa-check"></i>
                 </div>
                 <div className="agentic-why-choose-benefit-content">
                   <h3 className="agentic-why-choose-benefit-title">Intelligent & Autonomous</h3>
                   <p className="agentic-why-choose-benefit-description">Our AI agents think, learn, and act independently to solve complex business challenges.</p>
                 </div>
               </div>
               <div className="agentic-why-choose-benefit-item">
                 <div className="agentic-why-choose-benefit-icon">
                   <i className="fas fa-check"></i>
                 </div>
                 <div className="agentic-why-choose-benefit-content">
                   <h3 className="agentic-why-choose-benefit-title">Scalable & Future-Ready</h3>
                   <p className="agentic-why-choose-benefit-description">Every solution is designed to grow and adapt with your evolving business needs.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* FAQ Section */}
       <section className="agentic-faq">
         <div className="agentic-faq-container">
           <div className="agentic-faq-header">
             <div className="agentic-faq-badge">
               <i className="fas fa-cube"></i>
               <span>FAQS</span>
             </div>
             <h2 className="agentic-faq-title">Frequently Asked Questions</h2>
             <p className="agentic-faq-description">
               We use cutting-edge AI technologies to deliver intelligent, autonomous solutions that transform your business.
               <br />
               Our Agentic AI is built for performance, scalability, and seamless integration.
             </p>
           </div>
           
           <div className="agentic-faq-content">
             <div className="agentic-faq-contact">
               <div className="agentic-faq-contact-card">
                 <h3 className="agentic-faq-contact-title">Still Have More Questions?</h3>
                 <div className="agentic-faq-contact-divider"></div>
                 <p className="agentic-faq-contact-description">
                   If you're curious about Agentic AI or need more information, feel free to reach out—we're here to help!
                 </p>
                 <button className="agentic-faq-contact-button" onClick={() => window.location.href = '/contact'}>Contact Us Now</button>
               </div>
             </div>
             
             <div className="agentic-faq-list">
               <div className="agentic-faq-item">
                 <div className="agentic-faq-question">
                   <h4>What Agentic AI Services Do You Offer?</h4>
                   <i className="fas fa-plus"></i>
                 </div>
                 <div className="agentic-faq-answer">
                   <p>We offer comprehensive Agentic AI solutions including autonomous workflow automation, intelligent decision-making systems, predictive analytics, and custom AI agent development tailored to your specific business needs.</p>
                 </div>
               </div>
               
               <div className="agentic-faq-item">
                 <div className="agentic-faq-question">
                   <h4>What Is the Implementation Timeline?</h4>
                   <i className="fas fa-plus"></i>
                 </div>
                 <div className="agentic-faq-answer">
                   <p>Our Agentic AI implementation typically takes 4-8 weeks depending on complexity. We follow a structured approach: analysis (1 week), design (1-2 weeks), development (2-4 weeks), and deployment (1 week).</p>
                 </div>
               </div>
               
               <div className="agentic-faq-item">
                 <div className="agentic-faq-question">
                   <h4>Do You Offer Ongoing AI Support?</h4>
                   <i className="fas fa-plus"></i>
                 </div>
                 <div className="agentic-faq-answer">
                   <p>Yes, we provide comprehensive ongoing support including AI model monitoring, performance optimization, updates, and 24/7 technical assistance to ensure your Agentic AI systems run smoothly.</p>
                 </div>
               </div>
               
               <div className="agentic-faq-item">
                 <div className="agentic-faq-question">
                   <h4>How Do You Ensure AI Quality & Accuracy?</h4>
                   <i className="fas fa-plus"></i>
                 </div>
                 <div className="agentic-faq-answer">
                   <p>We implement rigorous testing protocols, continuous monitoring, and validation processes. Our AI models undergo extensive training with high-quality data and regular performance evaluations.</p>
                 </div>
               </div>
               
               <div className="agentic-faq-item">
                 <div className="agentic-faq-question">
                   <h4>Can I Request Custom AI Features?</h4>
                   <i className="fas fa-plus"></i>
                 </div>
                 <div className="agentic-faq-answer">
                   <p>Absolutely! We specialize in custom Agentic AI development. Our team works closely with you to understand your unique requirements and build tailored AI solutions that meet your specific business objectives.</p>
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

export default AgenticAI;
