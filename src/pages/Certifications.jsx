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

export default function Certifications() {
  const certifications = [
    "Project Management Professional (PMP)",
    "Certified Scrum Master (CSM)",
    "Scaled Agile Framework (SAFe)",
    "AWS Cloud Foundation Certified",
    "Prompt Engineering with LangChain",
    "Leveraging PostgreSQL with RAG",
    "Master Retrieval Augmented Generation (RAG)",
    "Java Programming Master Class",
    "HIPAA for Business Associates",
    "Learning the OWASP Top 10",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
          variants={itemVariants}
        >
          Certifications
        </motion.h1>

        {/* Certifications List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              variants={itemVariants}
            >
              <div className="flex-1">
                <p className="text-md font-semibold">{certification}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}