import React from 'react';
import resumeData from '../data/resumeData';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container text-center">
        <h2 className="text-white mb-4">Get In Touch</h2>
        <div className="mb-5">
          <div className="contact-item text-white">
            <i className="fas fa-envelope"></i> {resumeData.personal.email}
          </div>
          <div className="contact-item text-white">
            <i className="fas fa-phone"></i> {resumeData.personal.phone}
          </div>
          <div className="contact-item text-white">
            <i className="fas fa-map-marker-alt"></i> {resumeData.personal.location}
          </div>
        </div>
        
        <div className="mb-4">
          <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="social-link"><i className="fab fa-github"></i></a>
        </div>

        <hr className="border-secondary" />
        <p className="small mb-0">
          &copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;