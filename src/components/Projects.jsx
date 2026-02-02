import React from "react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import "./Projects.css";

/* Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* Section Header */}
        <motion.div
          className="projects-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Real-world applications showcasing my skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resumeData.projects.map((project, index) => (
            <motion.div
              className="col-lg-4 col-md-6"
              key={index}
              variants={cardVariants}
            >
              <motion.div
                className="project-card"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* Card Top */}
                <div className="project-card-header">
                  <h5>{project.name}</h5>
                  <span>{project.date}</span>
                </div>

                {/* Card Content */}
                <div className="project-card-body">
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="project-card-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100"
                    aria-label={`View ${project.name} source code on GitHub`}
                  >
                    <i className="fab fa-github me-2"></i>
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
