import React from 'react';
import resumeData from '../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Work Experience</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline">
              {resumeData.experience.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="card border-0 shadow-sm p-4">
                    <h3 className="role-title h4">{exp.role}</h3>
                    <div className="company-name mb-1">{exp.company}</div>
                    <span className="duration mb-3"><i className="far fa-clock me-1"></i> {exp.period}</span>
                    <ul className="list-unstyled mb-0 text-muted">
                      {exp.description.map((point, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>{point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;