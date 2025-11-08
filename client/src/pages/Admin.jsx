import React, { useState, useEffect } from 'react';
import './Admin.css';
import { getApiUrl } from '../config/api';

const Admin = () => {
  console.log('Admin component rendered');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    // Check if already authenticated
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      loadContent();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(getApiUrl('api/admin/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      
      // Check content type before parsing
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        try {
          data = await response.json();
        } catch (jsonError) {
          alert('Error parsing server response. Please check if the server is running.');
          setLoading(false);
          return;
        }
      } else {
        // If not JSON, get text response
        const text = await response.text();
        alert('Server error: ' + (text || 'Invalid response from server. Please check if the server is running.'));
        setLoading(false);
        return;
      }
      
      if (response.ok) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        loadContent();
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      alert('Login error: ' + error.message + '. Please make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    setIsAuthenticated(false);
    localStorage.removeItem('adminToken');
    setContent(null);
  };

  const loadContent = async () => {
    setLoading(true);
    try {
      const response = await fetch(getApiUrl('api/content'));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Content loaded:', data);
      setContent(data);
    } catch (error) {
      console.error('Failed to load content:', error);
      alert('Failed to load content: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (section, subsection, data) => {
    setLoading(true);
    setSaveStatus('');
    try {
      const url = subsection 
        ? getApiUrl(`api/content/${section}/${subsection}`)
        : getApiUrl(`api/content/${section}`);
      
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setContent(prev => {
          const newContent = { ...prev };
          if (subsection) {
            newContent[section] = { ...newContent[section], [subsection]: result.content };
          } else {
            newContent[section] = result.content;
          }
          return newContent;
        });
        setSaveStatus('success');
        setTimeout(() => setSaveStatus(''), 3000);
      } else {
        const error = await response.json();
        setSaveStatus('error');
        alert(error.error || 'Failed to save');
      }
    } catch (error) {
      setSaveStatus('error');
      alert('Error saving: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (section, subsection, field, value, isArray = false, index = null) => {
    setContent(prev => {
      const newContent = { ...prev };
      if (subsection) {
        if (isArray && index !== null) {
          newContent[section][subsection][index][field] = value;
        } else {
          newContent[section][subsection][field] = value;
        }
      } else {
        newContent[section][field] = value;
      }
      return newContent;
    });
  };

  const handleArrayItemChange = (section, subsection, index, field, value) => {
    setContent(prev => {
      const newContent = { ...prev };
      newContent[section][subsection][index][field] = value;
      return newContent;
    });
  };

  const addArrayItem = (section, subsection, template) => {
    setContent(prev => {
      const newContent = { ...prev };
      if (!newContent[section][subsection]) {
        newContent[section][subsection] = [];
      }
      newContent[section][subsection].push({ ...template });
      return newContent;
    });
  };

  const removeArrayItem = (section, subsection, index) => {
    setContent(prev => {
      const newContent = { ...prev };
      newContent[section][subsection].splice(index, 1);
      return newContent;
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="admin-login-container">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading && !content) {
    return (
      <div className="admin-page">
        <div className="admin-loading" style={{ padding: '2rem', textAlign: 'center' }}>
          Loading content...
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="admin-page">
        <div className="admin-header">
          <h1>Content Management System</h1>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
        <div className="admin-error" style={{ padding: '2rem', textAlign: 'center' }}>
          Failed to load content. Please refresh the page.
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Content Management System</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      {saveStatus === 'success' && (
        <div className="save-status success">Content saved successfully!</div>
      )}
      {saveStatus === 'error' && (
        <div className="save-status error">Failed to save content</div>
      )}

      <div className="admin-container">
        <div className="admin-sidebar">
          <h2>Sections</h2>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>
              Home Page
            </li>
            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>
              About Page
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>
              Contact Page
            </li>
            <li className={activeSection === 'navbar' ? 'active' : ''} onClick={() => setActiveSection('navbar')}>
              Navigation
            </li>
            <li className={activeSection === 'footer' ? 'active' : ''} onClick={() => setActiveSection('footer')}>
              Footer
            </li>
          </ul>
        </div>

        <div className="admin-content">
          {activeSection === 'home' && content?.home && (
            <HomeEditor content={content.home} onUpdate={(subsection, data) => updateContent('home', subsection, data)} />
          )}
          {activeSection === 'about' && content?.about && (
            <AboutEditor content={content.about} onUpdate={(subsection, data) => updateContent('about', subsection, data)} />
          )}
          {activeSection === 'contact' && content?.contact && (
            <ContactEditor content={content.contact} onUpdate={(subsection, data) => updateContent('contact', subsection, data)} />
          )}
          {activeSection === 'navbar' && content?.navbar && (
            <NavbarEditor content={content.navbar} onUpdate={(data) => updateContent('navbar', null, data)} />
          )}
          {activeSection === 'footer' && content?.footer && (
            <FooterEditor content={content.footer} onUpdate={(data) => updateContent('footer', null, data)} />
          )}
          {!content && (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <p>No content available. Please check the server connection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Home Editor Component
const HomeEditor = ({ content, onUpdate }) => {
  const [localContent, setLocalContent] = useState(content || {});

  useEffect(() => {
    if (content) {
      setLocalContent(content);
    }
  }, [content]);
  
  if (!content) {
    return <div style={{ padding: '2rem' }}>Loading home content...</div>;
  }

  const handleChange = (subsection, field, value) => {
    const newContent = { ...localContent };
    if (!newContent[subsection]) newContent[subsection] = {};
    newContent[subsection][field] = value;
    setLocalContent(newContent);
  };

  const handleSave = (subsection) => {
    onUpdate(subsection, localContent[subsection]);
  };

  return (
    <div className="editor-section">
      <h2>Home Page Content</h2>

      {/* Hero Section */}
      <div className="editor-subsection">
        <h3>Hero Section</h3>
        <div className="form-group">
          <label>Badge Text</label>
          <input
            type="text"
            value={localContent.hero?.badge || ''}
            onChange={(e) => handleChange('hero', 'badge', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title Line 1</label>
          <input
            type="text"
            value={localContent.hero?.titleLine1 || ''}
            onChange={(e) => handleChange('hero', 'titleLine1', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title Line 2</label>
          <input
            type="text"
            value={localContent.hero?.titleLine2 || ''}
            onChange={(e) => handleChange('hero', 'titleLine2', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={localContent.hero?.description || ''}
            onChange={(e) => handleChange('hero', 'description', e.target.value)}
            rows="4"
          />
        </div>
        <div className="form-group">
          <label>CTA Button Text</label>
          <input
            type="text"
            value={localContent.hero?.ctaButton || ''}
            onChange={(e) => handleChange('hero', 'ctaButton', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Hero Image Path</label>
          <input
            type="text"
            value={localContent.hero?.image || ''}
            onChange={(e) => handleChange('hero', 'image', e.target.value)}
          />
        </div>
        <button onClick={() => handleSave('hero')} className="save-btn">Save Hero Section</button>
      </div>

      {/* About Section */}
      <div className="editor-subsection">
        <h3>About Section</h3>
        <div className="form-group">
          <label>Badge</label>
          <input
            type="text"
            value={localContent.about?.badge || ''}
            onChange={(e) => handleChange('about', 'badge', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={localContent.about?.title || ''}
            onChange={(e) => handleChange('about', 'title', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={localContent.about?.description || ''}
            onChange={(e) => handleChange('about', 'description', e.target.value)}
            rows="4"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={localContent.about?.phoneNumber || ''}
            onChange={(e) => handleChange('about', 'phoneNumber', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>WhatsApp Link</label>
          <input
            type="text"
            value={localContent.about?.whatsappLink || ''}
            onChange={(e) => handleChange('about', 'whatsappLink', e.target.value)}
          />
        </div>
        <h4>Stats</h4>
        {localContent.about?.stats?.map((stat, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              placeholder="Number"
              value={stat.number || ''}
              onChange={(e) => {
                const newStats = [...localContent.about.stats];
                newStats[index].number = e.target.value;
                setLocalContent({ ...localContent, about: { ...localContent.about, stats: newStats } });
              }}
            />
            <input
              type="text"
              placeholder="Description"
              value={stat.description || ''}
              onChange={(e) => {
                const newStats = [...localContent.about.stats];
                newStats[index].description = e.target.value;
                setLocalContent({ ...localContent, about: { ...localContent.about, stats: newStats } });
              }}
            />
            <input
              type="text"
              placeholder="Icon Path"
              value={stat.icon || ''}
              onChange={(e) => {
                const newStats = [...localContent.about.stats];
                newStats[index].icon = e.target.value;
                setLocalContent({ ...localContent, about: { ...localContent.about, stats: newStats } });
              }}
            />
          </div>
        ))}
        <button onClick={() => handleSave('about')} className="save-btn">Save About Section</button>
      </div>

      {/* Services Section */}
      <div className="editor-subsection">
        <h3>Services Section</h3>
        <div className="form-group">
          <label>Badge</label>
          <input
            type="text"
            value={localContent.services?.badge || ''}
            onChange={(e) => handleChange('services', 'badge', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={localContent.services?.title || ''}
            onChange={(e) => handleChange('services', 'title', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={localContent.services?.description || ''}
            onChange={(e) => handleChange('services', 'description', e.target.value)}
            rows="4"
          />
        </div>
        <h4>Service Items</h4>
        {localContent.services?.items?.map((item, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              placeholder="Number"
              value={item.number || ''}
              onChange={(e) => {
                const newItems = [...localContent.services.items];
                newItems[index].number = e.target.value;
                setLocalContent({ ...localContent, services: { ...localContent.services, items: newItems } });
              }}
            />
            <input
              type="text"
              placeholder="Title"
              value={item.title || ''}
              onChange={(e) => {
                const newItems = [...localContent.services.items];
                newItems[index].title = e.target.value;
                setLocalContent({ ...localContent, services: { ...localContent.services, items: newItems } });
              }}
            />
            <textarea
              placeholder="Description"
              value={item.description || ''}
              onChange={(e) => {
                const newItems = [...localContent.services.items];
                newItems[index].description = e.target.value;
                setLocalContent({ ...localContent, services: { ...localContent.services, items: newItems } });
              }}
              rows="3"
            />
            <input
              type="text"
              placeholder="Link"
              value={item.link || ''}
              onChange={(e) => {
                const newItems = [...localContent.services.items];
                newItems[index].link = e.target.value;
                setLocalContent({ ...localContent, services: { ...localContent.services, items: newItems } });
              }}
            />
            <input
              type="text"
              placeholder="Image Path"
              value={item.image || ''}
              onChange={(e) => {
                const newItems = [...localContent.services.items];
                newItems[index].image = e.target.value;
                setLocalContent({ ...localContent, services: { ...localContent.services, items: newItems } });
              }}
            />
          </div>
        ))}
        <button onClick={() => handleSave('services')} className="save-btn">Save Services Section</button>
      </div>

      {/* Working Process */}
      <div className="editor-subsection">
        <h3>Working Process</h3>
        <div className="form-group">
          <label>Badge</label>
          <input
            type="text"
            value={localContent.workingProcess?.badge || ''}
            onChange={(e) => handleChange('workingProcess', 'badge', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={localContent.workingProcess?.title || ''}
            onChange={(e) => handleChange('workingProcess', 'title', e.target.value)}
          />
        </div>
        <h4>Steps</h4>
        {localContent.workingProcess?.steps?.map((step, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              placeholder="Number"
              value={step.number || ''}
              onChange={(e) => {
                const newSteps = [...localContent.workingProcess.steps];
                newSteps[index].number = e.target.value;
                setLocalContent({ ...localContent, workingProcess: { ...localContent.workingProcess, steps: newSteps } });
              }}
            />
            <input
              type="text"
              placeholder="Title"
              value={step.title || ''}
              onChange={(e) => {
                const newSteps = [...localContent.workingProcess.steps];
                newSteps[index].title = e.target.value;
                setLocalContent({ ...localContent, workingProcess: { ...localContent.workingProcess, steps: newSteps } });
              }}
            />
            <textarea
              placeholder="Description"
              value={step.description || ''}
              onChange={(e) => {
                const newSteps = [...localContent.workingProcess.steps];
                newSteps[index].description = e.target.value;
                setLocalContent({ ...localContent, workingProcess: { ...localContent.workingProcess, steps: newSteps } });
              }}
              rows="3"
            />
          </div>
        ))}
        <button onClick={() => handleSave('workingProcess')} className="save-btn">Save Working Process</button>
      </div>

      {/* Offices */}
      <div className="editor-subsection">
        <h3>Office Locations</h3>
        {localContent.offices?.map((office, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              placeholder="City"
              value={office.city || ''}
              onChange={(e) => {
                const newOffices = [...localContent.offices];
                newOffices[index].city = e.target.value;
                setLocalContent({ ...localContent, offices: newOffices });
              }}
            />
            <input
              type="text"
              placeholder="Address"
              value={office.address || ''}
              onChange={(e) => {
                const newOffices = [...localContent.offices];
                newOffices[index].address = e.target.value;
                setLocalContent({ ...localContent, offices: newOffices });
              }}
            />
            <h5>Phone Numbers</h5>
            {office.phones?.map((phone, phoneIndex) => (
              <div key={phoneIndex} className="nested-item">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone.number || ''}
                  onChange={(e) => {
                    const newOffices = [...localContent.offices];
                    newOffices[index].phones[phoneIndex].number = e.target.value;
                    setLocalContent({ ...localContent, offices: newOffices });
                  }}
                />
                <input
                  type="text"
                  placeholder="WhatsApp Link"
                  value={phone.whatsapp || ''}
                  onChange={(e) => {
                    const newOffices = [...localContent.offices];
                    newOffices[index].phones[phoneIndex].whatsapp = e.target.value;
                    setLocalContent({ ...localContent, offices: newOffices });
                  }}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={() => handleSave('offices')} className="save-btn">Save Offices</button>
      </div>
    </div>
  );
};

// About Editor Component
const AboutEditor = ({ content, onUpdate }) => {
  const [localContent, setLocalContent] = useState(content);

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleChange = (subsection, field, value) => {
    const newContent = { ...localContent };
    if (!newContent[subsection]) newContent[subsection] = {};
    newContent[subsection][field] = value;
    setLocalContent(newContent);
  };

  const handleSave = (subsection) => {
    onUpdate(subsection, localContent[subsection]);
  };

  return (
    <div className="editor-section">
      <h2>About Page Content</h2>
      
      <div className="editor-subsection">
        <h3>Hero Section</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={localContent.hero?.title || ''}
            onChange={(e) => handleChange('hero', 'title', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={localContent.hero?.description || ''}
            onChange={(e) => handleChange('hero', 'description', e.target.value)}
            rows="6"
          />
        </div>
        <button onClick={() => handleSave('hero')} className="save-btn">Save Hero</button>
      </div>

      <div className="editor-subsection">
        <h3>Content Section</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={localContent.content?.title || ''}
            onChange={(e) => handleChange('content', 'title', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={localContent.content?.description || ''}
            onChange={(e) => handleChange('content', 'description', e.target.value)}
            rows="4"
          />
        </div>
        <h4>Features</h4>
        {localContent.content?.features?.map((feature, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              placeholder="Feature Title"
              value={feature.title || ''}
              onChange={(e) => {
                const newFeatures = [...localContent.content.features];
                newFeatures[index].title = e.target.value;
                setLocalContent({ ...localContent, content: { ...localContent.content, features: newFeatures } });
              }}
            />
            <textarea
              placeholder="Feature Description"
              value={feature.description || ''}
              onChange={(e) => {
                const newFeatures = [...localContent.content.features];
                newFeatures[index].description = e.target.value;
                setLocalContent({ ...localContent, content: { ...localContent.content, features: newFeatures } });
              }}
              rows="2"
            />
          </div>
        ))}
        <button onClick={() => handleSave('content')} className="save-btn">Save Content</button>
      </div>
    </div>
  );
};

// Contact Editor Component
const ContactEditor = ({ content, onUpdate }) => {
  const [localContent, setLocalContent] = useState(content);

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleChange = (subsection, field, value) => {
    const newContent = { ...localContent };
    if (!newContent[subsection]) newContent[subsection] = {};
    newContent[subsection][field] = value;
    setLocalContent(newContent);
  };

  const handleSave = (subsection) => {
    onUpdate(subsection, localContent[subsection]);
  };

  return (
    <div className="editor-section">
      <h2>Contact Page Content</h2>
      
      <div className="editor-subsection">
        <h3>Hero Section</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={localContent.hero?.title || ''}
            onChange={(e) => handleChange('hero', 'title', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={localContent.hero?.description || ''}
            onChange={(e) => handleChange('hero', 'description', e.target.value)}
            rows="4"
          />
        </div>
        <button onClick={() => handleSave('hero')} className="save-btn">Save Hero</button>
      </div>

      <div className="editor-subsection">
        <h3>Form Section</h3>
        <div className="form-group">
          <label>Badge</label>
          <input
            type="text"
            value={localContent.form?.badge || ''}
            onChange={(e) => handleChange('form', 'badge', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={localContent.form?.title || ''}
            onChange={(e) => handleChange('form', 'title', e.target.value)}
          />
        </div>
        <button onClick={() => handleSave('form')} className="save-btn">Save Form</button>
      </div>
    </div>
  );
};

// Navbar Editor Component
const NavbarEditor = ({ content, onUpdate }) => {
  const [localContent, setLocalContent] = useState(content);

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleChange = (field, value) => {
    setLocalContent({ ...localContent, [field]: value });
  };

  const handleSave = () => {
    onUpdate(localContent);
  };

  return (
    <div className="editor-section">
      <h2>Navigation Bar Content</h2>
      
      <div className="form-group">
        <label>Logo Image Path</label>
        <input
          type="text"
          value={localContent.logo || ''}
          onChange={(e) => handleChange('logo', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Call Text</label>
        <input
          type="text"
          value={localContent.callText || ''}
          onChange={(e) => handleChange('callText', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          value={localContent.phoneNumber || ''}
          onChange={(e) => handleChange('phoneNumber', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>WhatsApp Link</label>
        <input
          type="text"
          value={localContent.whatsappLink || ''}
          onChange={(e) => handleChange('whatsappLink', e.target.value)}
        />
      </div>
      <button onClick={handleSave} className="save-btn">Save Navigation</button>
    </div>
  );
};

// Footer Editor Component
const FooterEditor = ({ content, onUpdate }) => {
  const [localContent, setLocalContent] = useState(content);

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleChange = (section, field, value) => {
    const newContent = { ...localContent };
    if (!newContent[section]) newContent[section] = {};
    newContent[section][field] = value;
    setLocalContent(newContent);
  };

  const handleSave = () => {
    onUpdate(localContent);
  };

  return (
    <div className="editor-section">
      <h2>Footer Content</h2>
      
      <div className="editor-subsection">
        <h3>Brand Section</h3>
        <div className="form-group">
          <label>Brand Name</label>
          <input
            type="text"
            value={localContent.brand?.name || ''}
            onChange={(e) => handleChange('brand', 'name', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={localContent.brand?.description || ''}
            onChange={(e) => handleChange('brand', 'description', e.target.value)}
            rows="4"
          />
        </div>
      </div>

      <div className="editor-subsection">
        <h3>Contact Info</h3>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={localContent.contact?.address || ''}
            onChange={(e) => handleChange('contact', 'address', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={localContent.contact?.phone || ''}
            onChange={(e) => handleChange('contact', 'phone', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={localContent.contact?.email || ''}
            onChange={(e) => handleChange('contact', 'email', e.target.value)}
          />
        </div>
      </div>

      <div className="editor-subsection">
        <h3>Copyright</h3>
        <div className="form-group">
          <label>Copyright Text</label>
          <input
            type="text"
            value={localContent.copyright || ''}
            onChange={(e) => setLocalContent({ ...localContent, copyright: e.target.value })}
          />
        </div>
      </div>

      <button onClick={handleSave} className="save-btn">Save Footer</button>
    </div>
  );
};

export default Admin;


