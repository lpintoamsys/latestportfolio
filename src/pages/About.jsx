import { motion } from "framer-motion";
import React from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mb-8 overflow-hidden">

      {/* Background Animation Effect */}
      <motion.div
        className="absolute inset-0 opacity-40 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="relative max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Professional Summary */}
        <motion.div
          className="bg-black bg-opacity-10 p-8 rounded-lg shadow-lg mb-8 backdrop-blur-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-pink-300">
            Professional Summary
          </h2>
          <p className="text-md text-gray-300">
            Accomplished Senior Engineering Manager and Technical Program
            Management professional with over 20 years of experience driving
            Digital Transformation, cloud strategy, and operational excellence.
            Expert in Agile adoption, DevSecOps methodologies, software
            development, software design, and distributed systems, with a proven
            track record of leading high-impact initiatives. Key achievements
            include reducing cloud costs by 45%, accelerating release cycles by
            80%, and successfully delivering 300+ APIs and 30+ microservices at
            scale. Skilled in managing distributed teams of 100+ resources across
            diverse roles and geographies, fostering collaboration, and aligning
            technical solutions with business objectives.
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          className="bg-black bg-opacity-10 p-8 rounded-lg shadow-lg mb-8 backdrop-blur-lg"
          variants={itemVariants}
          whileHover={{ rotate: 2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-pink-300">
            Key Achievements
          </h2>
          <ul className="list-disc list-inside text-md text-gray-300 space-y-2">
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring" }}>
              Reduced cloud costs by 45% through optimization strategies.
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring" }}>
              Accelerated release cycles by 80% using Agile and DevSecOps.
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring" }}>
              Successfully delivered 300+ APIs and 30+ microservices at scale.
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring" }}>
              Managed distributed teams of 100+ resources across diverse roles and
              geographies.
            </motion.li>
          </ul>
        </motion.div>

        {/* Career Objective */}
        <motion.div
          className="bg-black bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-lg"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-pink-300">
            Career Objective
          </h2>
          <p className="text-md text-gray-300">
            Seeking a Senior Engineering Leader position at GlobalMed to leverage
            extensive experience in cloud optimization and digital transformation,
            advancing AI-driven healthcare innovations and supporting the mission
            to enhance patient outcomes through cutting-edge technology.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
