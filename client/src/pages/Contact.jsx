import React, { useState } from 'react';
import '../components/contact.css';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    inquiry: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Submit to cloud function
      const response = await fetch('https://submitform2-cyucomi7gq-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          inquiry: formData.inquiry
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: '',
          inquiry: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Get in touch with our team to discuss your project requirements, learn more about our services, or schedule a consultation. We're here to help you achieve your business goals with innovative solutions and expert guidance.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-image">
            <img src="/images/06.jpg" alt="Contact Us" />
          </div>
          <div className="contact-form-content">
            <div className="contact-form-header">
              <div className="contact-form-badge">
                <i className="fas fa-cube"></i>
                <span>Get in touch</span>
              </div>
              <h2 className="contact-form-title">Send Your Message</h2>
              <div className="contact-form-divider"></div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name*</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Thomas Alison"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="example@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number*</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input" 
                    placeholder="+91 123 456789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="budget" className="form-label">Budget*</label>
                  <input 
                    type="text" 
                    id="budget" 
                    name="budget" 
                    className="form-input" 
                    placeholder="Type Your Budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group full-width">
                  <label htmlFor="inquiry" className="form-label">Inquiry about</label>
                  <textarea 
                    id="inquiry" 
                    name="inquiry" 
                    className="form-textarea" 
                    placeholder="Write your message"
                    rows="4"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              {submitStatus === 'success' && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-error">
                  <i className="fas fa-exclamation-circle"></i>
                  <span>There was an error sending your message. Please try again.</span>
                </div>
              )}
              
              <button 
                type="submit" 
                className="contact-form-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
