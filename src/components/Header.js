import React from 'react';
import './Header.css';

function Header({ setActiveSection }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Ibrahim Mutua Rose</h1>
          <p className="tagline">Mechanical Engineering Student & Tech Enthusiast</p>
        </div>

        <nav className="nav">
          <button 
            className="nav-link" 
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button 
            className="nav-link" 
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button 
            className="nav-link" 
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className="nav-link" 
            onClick={() => setActiveSection('gallery')}
          >
            📸 Gallery
          </button>
          <button 
            className="nav-link" 
            onClick={() => setActiveSection('chatbot')}
          >
            AI Chat
          </button>
          <button 
            className="nav-link" 
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
