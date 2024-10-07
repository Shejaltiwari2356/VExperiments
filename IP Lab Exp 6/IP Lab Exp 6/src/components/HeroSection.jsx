import React from 'react';
import './HeroSection.css'; // Component-specific CSS

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Welcome to VESIT</h1>
        <p>Your Future Starts Here</p>
        <a href="#" className="btn btn-primary btn-lg">Explore Programs</a>
      </div>
    </section>
  );
};

export default HeroSection;
