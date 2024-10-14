// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css"; // Updated CSS for better visuals

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          VESIT
        </Link>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about-us">
            About Us
          </Link>
          <Link className="nav-link" to="/program">
            Programs
          </Link>
          <Link className="nav-link" to="/admission">
            Admissions
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
