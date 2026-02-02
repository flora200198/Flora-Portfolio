import React from 'react';
import resumeData from '../data/resumeData';

const Hero = () => {
  return (
    <header className="hero-section text-center d-flex align-items-center">
      <div className="container">
        <img src={resumeData.personal.avatar} alt={resumeData.personal.name} className="profile-img mb-4" />
        <h1 className="display-4 fw-bold mb-2">{resumeData.personal.name}</h1>
        <h2 className="h3 mb-4 text-light opacity-75">{resumeData.personal.title}</h2>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href={`mailto:${resumeData.personal.email}`} className="btn btn-light btn-lg px-4 fw-bold">
            <i className="fas fa-envelope me-2"></i> Contact Me
          </a>
          <a href="#projects" className="btn btn-outline-light btn-lg px-4">
            <i className="fas fa-code me-2"></i> View Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;