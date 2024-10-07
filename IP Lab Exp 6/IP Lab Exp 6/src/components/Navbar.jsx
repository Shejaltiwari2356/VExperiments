import React from 'react';
import './Navbar.css'; // Updated CSS for better visuals

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">VESIT</a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-links">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">About Us</a>
          <a className="nav-link" href="#">Programs</a>
          <a className="nav-link" href="#">Admissions</a>
          <a className="nav-link" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
