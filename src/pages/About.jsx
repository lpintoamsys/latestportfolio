import { motion } from "framer-motion";
import React from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mb-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Professional Summary */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mb-8"
          variants={itemVariants}
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
          className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mb-8"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold mb-4 text-pink-300">
            Key Achievements
          </h2>
          <ul className="list-disc list-inside text-md text-gray-300 space-y-2">
            <li>Reduced cloud costs by 45% through optimization strategies.</li>
            <li>Accelerated release cycles by 80% using Agile and DevSecOps.</li>
            <li>
              Successfully delivered 300+ APIs and 30+ microservices at scale.
            </li>
            <li>
              Managed distributed teams of 100+ resources across diverse roles and
              geographies.
            </li>
          </ul>
        </motion.div>

        {/* Career Objective */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg"
          variants={itemVariants}
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