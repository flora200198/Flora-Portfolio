import React from "react";
import { motion } from "framer-motion";
import resumeData from "../data/resumeData";
import "./Hero.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <header className="hero-section text-center d-flex align-items-center">
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.img
          src={resumeData.personal.avatar}
          alt={resumeData.personal.name}
          className="profile-img mb-4"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        />

        {/* Name */}
        <motion.h1
          className="display-4 fw-bold mb-2 text-white"
          variants={fadeUp}
        >
          {resumeData.personal.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="h3 mb-4 text-light opacity-75"
          variants={fadeUp}
        >
          {resumeData.personal.title}
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="d-flex justify-content-center gap-3 flex-wrap"
          variants={fadeUp}
        >
          <motion.a
            href={`mailto:${resumeData.personal.email}`}
            className="btn btn-light btn-lg px-4 fw-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-envelope me-2"></i> Contact Me
          </motion.a>

          <motion.a
            href="#projects"
            className="btn btn-outline-light btn-lg px-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-code me-2"></i> View Work
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;
