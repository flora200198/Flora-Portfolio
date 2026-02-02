import React from "react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="col-lg-8 text-center">
            {/* Title */}
            <motion.h2
              className="section-title mb-3"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            {/* Description */}
            <motion.p
              className="lead text-muted"
              variants={itemVariants}
            >
              {resumeData.about}
            </motion.p>

            <motion.hr
              className="my-5"
              variants={itemVariants}
            />

            {/* Info Cards */}
            <div className="row mt-4">
              {/* Education */}
              <motion.div
                className="col-md-4 mb-4"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="p-4 rounded shadow-sm h-100 about-card">
                  <i className="fas fa-graduation-cap fa-2x text-primary mb-3"></i>
                  <h5>Education</h5>
                  <p className="text-muted small mb-0">
                    {resumeData.education[0].degree}<br />
                    {resumeData.education[0].institution}
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="col-md-4 mb-4"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="p-4 rounded shadow-sm h-100 about-card">
                  <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
                  <h5>Location</h5>
                  <p className="text-muted small mb-0">
                    {resumeData.personal.location}
                  </p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                className="col-md-4 mb-4"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="p-4 rounded shadow-sm h-100 about-card">
                  <i className="fas fa-briefcase fa-2x text-primary mb-3"></i>
                  <h5>Experience</h5>
                  <p className="text-muted small mb-0">
                    Full Stack Developer<br />
                    SEO & Digital Marketing
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
