import React from 'react';
import './Footer.css'; // Updated CSS for full-width footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 College Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a> | 
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
