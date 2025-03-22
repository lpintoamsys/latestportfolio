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

export default function DomainExpertise() {
  const domains = [
    {
      name: "Banking",
      description:
        "Extensive experience in building scalable and secure banking solutions, including digital payment systems, fraud detection, and customer management platforms. Managed Core Banking Re-engineering projects for leading banks.",
    },
    {
      name: "Telecom",
      description:
        "Proven expertise in developing telecom solutions, such as billing systems, network management tools, and customer engagement platforms.",
    },
    {
      name: "Health Care",
      description:
        "Deep understanding of healthcare systems, including electronic health records (EHR), telemedicine platforms, and patient management systems.",
    },
    {
      name: "Insurance",
      description:
        "Experience in designing and implementing insurance platforms, including policy management, claims processing, and risk assessment systems.",
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
          Domain Expertise
        </motion.h1>

        {/* Domain Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold mb-4 text-pink-300">
                {domain.name}
              </h2>
              <p className="text-lg text-gray-300">{domain.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}