import React from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Left Side - Text & Features */}
      <div className="left-side">
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="title">Protecting & Serving the Nation</h1>
          <p className="subtitle">File reports, track cases, and ensure justice online.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div 
          className="features-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="feature-box">
            <h2>File FIR</h2>
            <p>Quickly submit an online complaint.</p>
          </div>
          <div className="feature-box">
            <h2>Track Cases</h2>
            <p>Stay updated on case progress.</p>
          </div>
          <div className="feature-box">
            <h2>Emergency Help</h2>
            <p>Instantly reach law enforcement.</p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Flipping Emblem */}
      <div className="right-side">
        <motion.div 
          className="emblem-container"
          animate={{ rotateY: [0, 180, 0] }} // Smooth front-to-back flip
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png" 
            alt="Emblem of India"
            className="flipping-emblem"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
