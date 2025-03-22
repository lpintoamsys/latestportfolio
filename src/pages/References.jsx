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

export default function References() {
  const references = [
    {
      name: "Chokha",
      position: "Chief Technology Officer",
      phone: "+1 508 740 1870",
    },
    {
      name: "Anya Sherwood",
      position: "Program Manager",
      phone: "+1 314 503 8171",
    },
    {
      name: "Frank",
      position: "HR Director",
      phone: "98203 81249",
    },
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
          References
        </motion.h1>

        {/* References List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {references.map((reference, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold mb-2 text-pink-300">
                {reference.name}
              </h2>
              <p className="text-sm text-gray-300">
                <strong>Position:</strong> {reference.position}
              </p>
              <p className="text-lg text-gray-300">
                <strong>Phone:</strong> {reference.phone}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}