import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import PortfolioManager from './components/PortfolioManager';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return (
      <div className="App">
        <PortfolioManager />
        <button 
          onClick={() => setShowAdmin(false)}
          style={{
            position: 'fixed',
            bottom: 20,
            left: 20,
            padding: '10px 20px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      
      <main className="main-content">
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'chatbot' && <Chatbot />}
      </main>

      <Footer />

      {/* Admin Button - Press Ctrl+Shift+A to access */}
      <button
        onClick={() => setShowAdmin(true)}
        title="Portfolio Manager (Admin)"
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: '#667eea',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          fontWeight: 'bold'
        }}
      >
        ⚙️
      </button>
    </div>
  );
}

export default App;
