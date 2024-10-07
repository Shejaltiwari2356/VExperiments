import React from 'react';
import './Footer.css'; // Component-specific CSS

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2024 College Name. All rights reserved.</p>
        <a href="#" className="text-white">Privacy Policy</a> | 
        <a href="#" className="text-white">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
