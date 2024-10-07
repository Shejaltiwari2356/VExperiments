import React from 'react';
import './FeatureSection.css'; // Component-specific CSS

const FeatureSection = () => {
  return (
    <section className="features-section py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <i className="feature-icon fas fa-graduation-cap"></i>
            <h3>Quality Education</h3>
            <p>We provide top-notch education with experienced faculty.</p>
          </div>
          <div className="col-md-4">
            <i className="feature-icon fas fa-chalkboard-teacher"></i>
            <h3>Expert Faculty</h3>
            <p>Learn from industry experts and gain practical knowledge.</p>
          </div>
          <div className="col-md-4">
            <i className="feature-icon fas fa-university"></i>
            <h3>Modern Campus</h3>
            <p>
              Our state-of-the-art campus facilities enhance your learning
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
