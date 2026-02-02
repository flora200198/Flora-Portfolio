import React from "react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import "./Skill.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-muted">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills List */}
        <motion.div
          className="d-flex flex-wrap justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resumeData.skills.map((skill, index) => (
            <motion.span
              key={index}
              className="skill-badge"
              variants={skillVariants}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
