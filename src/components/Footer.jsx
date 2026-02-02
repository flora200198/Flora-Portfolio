import React from 'react';
import resumeData from '../data/resumeData';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container text-center footer-content">

        <h2 className="footer-title">Get In Touch</h2>

        <div className="footer-contacts">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>{resumeData.personal.email}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>{resumeData.personal.phone}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{resumeData.personal.location}</span>
          </div>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/flora398/" className="social-link" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/flora200198" className="social-link" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <hr className="footer-divider" />

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
