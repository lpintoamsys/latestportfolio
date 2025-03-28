import { motion } from "framer-motion";
import React from "react";
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const skills = {
    "Agile Methodologies": ["Scrum", "Kanban", "SAFe"],
    "Project & Delivery Management": [
      "End to End Delivery",
      "Agile Transformation",
      "Engineering Best Practices",
      "Code Review",
      "Release Management",
      "Technical Roadmap",
      "Customer / Risk Management",
      "Stakeholder Management",
      "Budget Management",
      "Jira", "Confluence",
    ],
    "Architecture": [
      "Microservices",
      "Monolith",
      "Event-Driven Architecture",
      "Software Design Best Practices",
      "API Design",
    ],
    "DevOps & DevSecOps": [
      "CI/CD",
      "Azure Pipelines",
      "Jenkins",
      "Git",
      "Docker",
      "Kubernetes",
      "Grafana / Prometheus",
      "Sentry",
    ],
    "Cloud Platforms": ["AWS", "Azure", "Cloud Strategy", "Cloud Migration", "Cloud Costing"],
    "Programming Languages": ["Java", "Python", "JavaScript"],
    "Frameworks & Libraries": ["Spring Boot", "React", "Node.js"],
    "Databases": ["MySQL", "MongoDB", "Redis"],
    "Tools & Technologies": [
      "Kafka",
      "Key Cloak",
      "Stripe",
      "Gen AI",
      "Microsoft Project",
    ],
    "Compliance": ["GDPR", "HIPAA"],
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
        Skills
      </h1>
      <div className="mt-6 space-y-8 max-w-7xl mx-auto">
        {Object.entries(skills).map(([category, skillsList]) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="text-xl font-semibold mb-6 text-pink-300">
              {category}
            </h2>
            <motion.ul
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {skillsList.map((skill, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg font-medium">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}