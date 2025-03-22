import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarker, FaUserCheck } from "react-icons/fa";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name and Title Card */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mb-8"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Lawrence Pinto
          </h1>
          <h2 className="text-xl font-semibold mt-4 text-pink-300">
            Agile / Technical Program Manager | Senior Engineering Manager | Digital
            Transformation | Generative AI | Delivery Manager
          </h2>
        </motion.div>

        {/* Contact Details Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {/* Phone */}
          <motion.div
            className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
            variants={itemVariants}
          >
            <FaPhone className="text-3xl text-pink-400" />
            <div>
              <p className="text-xl font-semibold">Phone</p>
              <p className="text-lg text-gray-300">+91-9901721450</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
            variants={itemVariants}
          >
            <FaEnvelope className="text-3xl text-pink-400" />
            <div>
              <p className="text-xl font-semibold">Email</p>
              <p className="text-lg text-gray-300">lpinto1204@gmail.com</p>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
            variants={itemVariants}
          >
            <FaLinkedin className="text-3xl text-pink-400" />
            <div>
              <p className="text-xl font-semibold">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/lawrence-pinto-9a06903/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:text-blue-300 transition-colors"
              >
                Visit Profile
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
            variants={itemVariants}
          >
            <FaMapMarker className="text-3xl text-pink-400" />
            <div>
              <p className="text-xl font-semibold">Current Location</p>
              <p className="text-lg text-gray-300">Bangalore</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Availability Card */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mt-8 flex items-center space-x-4"
          variants={itemVariants}
        >
          <FaUserCheck className="text-4xl text-pink-400" />
          <div>
            <p className="text-2xl font-bold text-green-400">
              Available to Join Immediately
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}