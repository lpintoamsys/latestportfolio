import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8 italic">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Education Header */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mb-8"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4">
            <FaGraduationCap className="text-4xl text-pink-400" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Education
            </h1>
          </div>
        </motion.div>

        {/* Education Cards */}
        <motion.div className="space-y-6" variants={containerVariants}>
          {/* Post Graduation Card */}
          <motion.div
            className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-pink-400">
              Post Graduation in Information Technology (PGDIT)
            </h2>
            <p className="text-xl text-gray-300 mt-2">
              Symbiosis Centre for Management Studies, Pune
            </p>
          </motion.div>

          {/* Graduation Card */}
          <motion.div
            className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-pink-400">
              Commerce Graduate (BCOM)
            </h2>
            <p className="text-xl text-gray-300 mt-2">
              Mumbai University
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}