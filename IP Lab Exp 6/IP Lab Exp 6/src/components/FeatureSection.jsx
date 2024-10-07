import React from 'react';
import './FeatureSection.css'; // Clean, modern feature section

const FeatureSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-graduation-cap feature-icon"></i>
            <h3>Quality Education</h3>
            <p>We provide top-notch education with experienced faculty.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chalkboard-teacher feature-icon"></i>
            <h3>Expert Faculty</h3>
            <p>Learn from industry experts and gain practical knowledge.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-university feature-icon"></i>
            <h3>Modern Campus</h3>
            <p>Our state-of-the-art campus facilities enhance your learning experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
