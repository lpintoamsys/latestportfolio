import { motion } from "framer-motion";
import React from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Floating Particle Animation
const particleVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.6, 1, 0.6],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// Glitch Effect
const glitchVariants = {
  animate: {
    x: [0, 2, -2, 2, -2, 0],
    transition: { duration: 0.1, repeat: Infinity, ease: "linear" },
  },
};

// Background Animation (Neon Grid)
const gridVariants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    transition: { duration: 10, repeat: Infinity, ease: "linear" },
  },
};

export default function About() {
  return (
    <div className="relative overflow-hidden p-8 rounded-lg shadow-lg mb-8">
      {/* Animated Cyberpunk Neon Grid Background */}
      <motion.div
        className="absolute inset-0"
        variants={gridVariants}
        animate="animate"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(58, 9, 121, 0.8) 10%, rgba(0, 0, 0, 0.8) 80%)",
          backgroundSize: "400% 400%",
          zIndex: -1,
        }}
      />

      {/* Floating Neon Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          animate="animate"
        />
      ))}

      <motion.div
        className="relative max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Professional Summary */}
        <motion.div
          className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8 backdrop-blur-xl border border-cyan-500"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-300">
            <motion.span variants={glitchVariants} animate="animate">
              Professional Summary
            </motion.span>
          </h2>
          <p className="text-md text-gray-300">
            Accomplished Senior Engineering Manager and Technical Program
            Management professional with over 20 years of experience driving
            Digital Transformation, cloud strategy, and operational excellence.
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8 backdrop-blur-xl border border-cyan-500"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-300">
            <motion.span variants={glitchVariants} animate="animate">
              Key Achievements
            </motion.span>
          </h2>
          <ul className="list-disc list-inside text-md text-gray-300 space-y-2">
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring" }}>
              Reduced cloud costs by 45% through optimization strategies.
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring" }}>
              Accelerated release cycles by 80% using Agile and DevSecOps.
            </motion.li>
          </ul>
        </motion.div>

        {/* Career Objective */}
        <motion.div
          className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-xl border border-cyan-500"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-300">
            <motion.span variants={glitchVariants} animate="animate">
              Career Objective
            </motion.span>
          </h2>
          <p className="text-md text-gray-300">
            Seeking a Senior Engineering Leader position at GlobalMed to leverage
            extensive experience in cloud optimization and digital transformation.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
