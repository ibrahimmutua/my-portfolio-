import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Ibrahim Mutua Rose. All rights reserved.</p>
        <p className="footer-credit">Built with <span className="heart">❤️</span> using React</p>
      </div>
    </footer>
  );
}

export default Footer;
