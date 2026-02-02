import React from 'react';
import resumeData from '../data/resumeData';

const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{backgroundColor: '#f8f9fa'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-muted">Technologies and tools I work with</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;