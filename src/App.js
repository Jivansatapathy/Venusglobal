import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AgenticAI from './pages/AgenticAI';
import ESG from './pages/ESG';
import DigitalReach from './pages/DigitalReach';
import SoftwareDataAI from './pages/SoftwareDataAI';
import CloudService from './pages/CloudService';
import IATFAuditing from './pages/IATFAuditing';
import Contact from './pages/Contact';
import './App.css';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/esg" element={<ESG />} />
          <Route path="/digital-reach" element={<DigitalReach />} />
              <Route path="/software-data-ai" element={<SoftwareDataAI />} />
          <Route path="/cloud-service" element={<CloudService />} />
          <Route path="/iatf-auditing" element={<IATFAuditing />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here as we create more pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
