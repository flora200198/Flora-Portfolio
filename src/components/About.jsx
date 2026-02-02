import React from 'react';
import resumeData from '../data/resumeData';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-title">About Me</h2>
            <p className="lead text-muted">
              {resumeData.about}
            </p>
            <hr className="my-5" />
            <div className="row mt-4">
              <div className="col-md-4 mb-3">
                <i className="fas fa-graduation-cap fa-2x text-primary mb-3"></i>
                <h5>Education</h5>
                <p className="text-muted small">
                  {resumeData.education[0].degree}<br/>
                  {resumeData.education[0].institution}
                </p>
              </div>
              <div className="col-md-4 mb-3">
                <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
                <h5>Location</h5>
                <p className="text-muted small">{resumeData.personal.location}</p>
              </div>
              <div className="col-md-4 mb-3">
                <i className="fas fa-briefcase fa-2x text-primary mb-3"></i>
                <h5>Experience</h5>
                <p className="text-muted small">Full Stack Dev<br/>SEO & Digital Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;