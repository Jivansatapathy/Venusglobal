import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../components/blog-detail.css';
import Footer from '../components/Footer';
import { getApiUrl } from '../config/api';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBlog();
  }, [slug]);

  const loadBlog = async () => {
    setLoading(true);
    setError(null);
    try {
      // First, get all blogs to find the one with matching slug
      const response = await fetch(getApiUrl('api/blogs'));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blogs = await response.json();
      const foundBlog = blogs.find(b => b.slug === slug);
      
      if (foundBlog) {
        setBlog(foundBlog);
      } else {
        setError('Blog not found');
      }
    } catch (error) {
      console.error('Failed to load blog:', error);
      setError('Failed to load blog');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="blog-detail-page">
        <div className="blog-not-found">
          <h1>Loading...</h1>
          <p>Please wait while we load the blog post.</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="blog-detail-page">
        <div className="blog-not-found">
          <h1>Blog Post Not Found</h1>
          <p>{error || "The blog post you're looking for doesn't exist."}</p>
          <Link to="/blogs" className="back-to-blogs">Back to Blogs</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="content-h2">{paragraph.replace('## ', '')}</h2>;
      } else if (paragraph.startsWith('- **')) {
        return <li key={index} className="content-li">{paragraph.replace('- **', '').replace('**:', ':')}</li>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="content-h3">{paragraph.replace('### ', '')}</h3>;
      } else if (paragraph.trim() === '') {
        return <br key={index} />;
      } else if (paragraph.startsWith('1. **')) {
        return <li key={index} className="content-li numbered">{paragraph.replace('1. **', '').replace('**:', ':')}</li>;
      } else {
        return <p key={index} className="content-p">{paragraph}</p>;
      }
    });
  };

  return (
    <div className="blog-detail-page">
      {/* Blog Header */}
      <section className="blog-header">
        <div className="blog-header-container">
          <div className="blog-breadcrumb">
            <Link to="/blogs" className="breadcrumb-link">Blogs</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{blog.title}</span>
          </div>
          
          <div className="blog-meta">
            <span className="blog-category">{blog.category}</span>
            <span className="blog-date">{blog.date}</span>
            <span className="blog-read-time">{blog.readTime}</span>
          </div>
          
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-excerpt">{blog.excerpt}</p>
          
          <div className="blog-author-info">
            <div className="author-details">
              <span className="author-label">By</span>
              <span className="author-name">{blog.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Image */}
      {blog.image && (
        <section className="blog-image-section">
          <div className="blog-image-container">
            <img src={blog.image} alt={blog.title} className="blog-featured-image" />
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="blog-content-section">
        <div className="blog-content-container">
          <div className="blog-content">
            {formatContent(blog.content)}
          </div>
          
          {/* Social Share */}
          <div className="blog-share">
            <h3>Share this article</h3>
            <div className="share-buttons">
              <button className="share-button twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`)}>
                <i className="fab fa-twitter"></i>
                Twitter
              </button>
              <button className="share-button linkedin" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`)}>
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </button>
              <button className="share-button facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)}>
                <i className="fab fa-facebook"></i>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="blog-cta-container">
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Let's discuss how our AI solutions can drive your success.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary" 
              onClick={() => window.open('https://wa.me/16477220837', '_blank')}
            >
              Get Free Consultation
            </button>
            <button 
              className="cta-button secondary" 
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="related-posts-section">
        <div className="related-posts-container">
          <h2>Related Articles</h2>
          <div className="related-posts-grid">
            <Link to="/blogs" className="related-post-card">
              <div className="related-post-image">
                <img src="/images/ESG.jpg" alt="ESG Compliance" />
              </div>
              <div className="related-post-content">
                <span className="related-post-category">ESG</span>
                <h3>ESG Compliance: A Strategic Advantage</h3>
                <p>Understanding Environmental, Social, and Governance factors and how they can drive business success.</p>
              </div>
            </Link>
            
            <Link to="/blogs" className="related-post-card">
              <div className="related-post-image">
                <img src="/images/Software & Data.jpg" alt="Digital Transformation" />
              </div>
              <div className="related-post-content">
                <span className="related-post-category">Digital Strategy</span>
                <h3>Digital Transformation Best Practices</h3>
                <p>Key strategies for successful digital transformation in today's competitive landscape.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
