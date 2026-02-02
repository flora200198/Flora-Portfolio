import React from 'react';
import resumeData from '../data/resumeData';

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{backgroundColor: '#f8f9fa'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted">Some of the applications I've built</p>
        </div>
        <div className="row g-4">
          {resumeData.projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card project-card h-100">
                <div className="project-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold text-primary">{project.name}</h5>
                  <small className="text-muted">{project.date}</small>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <p className="card-text text-muted small">
                    {project.description}
                  </p>
                </div>
                <div className="card-footer bg-white border-top-0 pb-3">
                  <a href="#" className="btn btn-outline-primary btn-sm w-100 stretched-link">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;