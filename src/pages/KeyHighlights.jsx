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

export default function KeyHighlights() {
  const achievements = [
    {
      title: "Contract Acquisition",
      description:
        "Secured $3 million contract with Veteran Affairs for HL7 Integration with EHR and Care Systems.",
    },
    {
      title: "DevOps Implementation Success",
      description:
        "Reduced release cycle times by 80% through DevOps implementation and automated CI/CD Process.",
    },
    {
      title: "HL7 Implementation",
      description:
        "Managed Veteran Affairs (VA) HL7/FHIR Implementation project to streamline healthcare data interoperability within the VA system.",
    },
    {
      title: "API Implementation",
      description:
        "Managed development and implementation of 300+ APIs with improvement strategies including caching, pooling, and CDN. This involved REST, WebSockets, and Webhooks.",
    },
    {
      title: "Team Management",
      description:
        "Managed resources with a team size of 100+, including 4 Scrum Masters, 5 Project Leads, and 2 Architects across various roles and distributed geographies.",
    },
    {
      title: "CI/CD Process",
      description:
        "Implemented CI/CD Process for 60 microservices across 5 applications from Development to Production stage using Azure Pipelines.",
    },
    {
      title: "Cloud Cost Optimization",
      description:
        "Reduced Cloud costs by 40% across AWS and Azure.",
    },
    {
      title: "Generative AI",
      description:
        "Managed implementation of AI Projects (Symptoms Checker, Image Analysis, Video-to-Text Conversation, Summarization).",
    },
    {
      title: "Migration of Legacy to Modern Applications",
      description:
        "Successfully handled the migration of Legacy Applications to Modern Architecture.",
    },
    {
      title: "Agile Transformation Success",
      description:
        "Increased productivity by 25% through Agile methodologies.",
    },
    {
      title: "Test Coverage Enhancement",
      description:
        "Achieved 80% test coverage using automated pipelines.",
    },
    {
      title: "Client Handling",
      description:
        "Handled Clients across the USA, Europe, and Africa.",
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
          className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
          variants={itemVariants}
        >
          Key KeyHighlights
        </motion.h1>

        {/* Achievements List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-md font-semibold mb-4 text-pink-300">
                {achievement.title}
              </h2>
              <p className="text-lg text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}