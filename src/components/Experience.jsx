import React from "react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import "./Experience.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              className="timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  variants={itemVariants}
                >
                  <motion.div
                    className="card border-0 shadow-sm p-4 experience-card"
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  >
                    <h3 className="role-title h4 mb-1">{exp.role}</h3>
                    <div className="company-name fw-semibold mb-1">
                      {exp.company}
                    </div>
                    <span className="duration d-inline-block mb-3 text-muted">
                      <i className="far fa-clock me-1"></i> {exp.period}
                    </span>

                    <ul className="list-unstyled mb-0 text-muted">
                      {exp.description.map((point, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start">
                          <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
