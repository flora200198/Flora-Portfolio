import React from "react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import "./Projects.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted">
            Some of the applications I’ve built
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
              className="col-md-4"
              key={index}
              variants={cardVariants}
            >
              <motion.div
                className="card project-card h-100"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* Header */}
                <div className="project-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold text-primary">
                    {project.name}
                  </h5>
                  <small className="text-muted">{project.date}</small>
                </div>

                {/* Body */}
                <div className="card-body">
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="card-text text-muted small">
                    {project.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="card-footer bg-white border-top-0 pb-3">
                  <a
                    href={project.link || "#"}
                    className="btn btn-outline-primary btn-sm w-100 stretched-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
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
