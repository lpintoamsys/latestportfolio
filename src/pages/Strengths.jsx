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

export default function Strengths() {
  const strengths = [
    {
      title: "Program & Project Management",
      description:
        "Expert in Agile, Scrum, and SAFe methodologies, managing end-to-end program lifecycles from inception to execution. Skilled in driving KPIs, OKRs, and metrics-based decision-making, while optimizing budgets, resources, timelines, and risk mitigation.",
    },
    {
      title: "Engineering Best Practices",
      description:
        "Proficient in engineering best practices, including secure coding, version control, and modular design. Adept at implementing robust testing frameworks (unit, integration, and end-to-end) to ensure code quality and reliability. Maintain documentation standards to enhance collaboration and maintainability.",
    },
    {
      title: "Team Leadership",
      description:
        "Managed virtual teams of 40+ members, leading cross-functional engineering teams. Expertise in software architecture, cloud, and system design.",
    },
    {
      title: "Technical Strategy",
      description:
        "Develop and execute technical strategies that align with business goals, ensuring scalable and efficient solutions. Lead teams in adopting emerging technologies to drive innovation and competitive advantage.",
    },
    {
      title: "Proactive Problem Solver",
      description:
        "Implemented risk mitigation strategies that resulted in a 30% decrease in project delays.",
    },
    {
      title: "Budget and Resource Management",
      description:
        "Oversee budget and resource management, optimizing costs and ensuring efficient allocation across projects. Drive decision-making to balance priorities, timelines, and team capacity while meeting business objectives.",
    },
    {
      title: "Quality Assurance",
      description:
        "Ensure high-quality standards by implementing rigorous testing processes and continuous code reviews. Drive the adoption of best practices in automated testing, performance optimization, and defect resolution to maintain software excellence.",
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
          Strengths
        </motion.h1>

        {/* Strengths List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-md font-semibold mb-4 text-pink-300">
                {strength.title}
              </h2>
              <p className="text-md text-gray-300">{strength.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}