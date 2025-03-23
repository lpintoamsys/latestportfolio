import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaImage, FaNotesMedical, FaVideo, FaHeartbeat, FaFlask, FaCalendarAlt } from 'react-icons/fa';
import { SiOpenai, SiLangchain } from 'react-icons/si';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: 'Symptoms Checker',
    description: 'AI-powered medical symptoms analysis and preliminary diagnosis system using advanced language models.',
    icon: FaNotesMedical,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Image Analysis',
    description: 'Advanced computer vision system for medical image analysis and interpretation using state-of-the-art AI models.',
    icon: FaImage,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Notes Summarization',
    description: 'Intelligent document summarization system that extracts key insights from medical notes and reports.',
    icon: FaRobot,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Video to Text Summarization',
    description: 'AI system that transcribes and summarizes medical videos into concise, actionable text summaries.',
    icon: FaVideo,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Health Care AI Assistant',
    description: 'Intelligent healthcare assistant providing personalized medical information and guidance.',
    icon: FaHeartbeat,
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Analysis of Lab Reports',
    description: 'Advanced AI system for analyzing and interpreting medical laboratory reports, providing detailed insights and recommendations.',
    icon: FaFlask,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Historical Appointments Interaction',
    description: 'AI-powered system that analyzes past medical appointments and interactions to provide better healthcare insights and predictions.',
    icon: FaCalendarAlt,
    color: 'from-violet-500 to-purple-500',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Generative AI Projects
          </h1>
          <p className="text-gray-300 text-lg">
            Exploring the frontiers of AI in healthcare and data analysis
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <project.icon className="text-white text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-100 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-white/10 backdrop-blur-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
              <SiOpenai className="text-2xl" />
              <span>OpenAI</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
              <FaRobot className="text-2xl" />
              <span>GPT</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
              <FaRobot className="text-2xl" />
              <span>BioMistral</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
              <SiLangchain className="text-2xl" />
              <span>Langchain</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
              <SiLangchain className="text-2xl" />
              <span>React</span>
            </div>
            
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}