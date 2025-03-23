import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarker, FaUserCheck } from "react-icons/fa";
import React, { useState } from "react";

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

const flipVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-black p-8 italic">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name and Title Card */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mb-8 italic"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-400">
            Lawrence Pinto
          </h1>
          <h2 className="text-lg font-semibold mt-4">
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
            className="relative cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              variants={itemVariants}
              style={{ transformStyle: "preserve-3d" }}
              animate={isFlipped ? "back" : "front"}
              transition={{ duration: 0.6 }}
            >
              <div className="front-face" style={{ backfaceVisibility: "hidden" }}>
                <FaPhone className="text-3xl text-pink-400" />
                <div>
                  <p className="text-xl font-semibold">Phone</p>
                  <p className="text-lg text-gray-300">+91-9901721450</p>
                </div>
              </div>
              <div className="back-face absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-700 to-purple-700 rounded-lg shadow-lg" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <p className="text-xl font-semibold">Back Side Content</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="relative cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              variants={itemVariants}
              style={{ transformStyle: "preserve-3d" }}
              animate={isFlipped ? "back" : "front"}
              transition={{ duration: 0.6 }}
            >
              <div className="front-face" style={{ backfaceVisibility: "hidden" }}>
                <FaEnvelope className="text-3xl text-pink-400" />
                <div>
                  <p className="text-xl font-semibold">Email</p>
                  <p className="text-lg text-gray-300">lpinto1204@gmail.com</p>
                </div>
              </div>
              <div className="back-face absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-700 to-purple-700 rounded-lg shadow-lg" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <p className="text-xl font-semibold">Back Side Content</p>
              </div>
            </motion.div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="relative cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              variants={itemVariants}
              style={{ transformStyle: "preserve-3d" }}
              animate={isFlipped ? "back" : "front"}
              transition={{ duration: 0.6 }}
            >
              <div className="front-face" style={{ backfaceVisibility: "hidden" }}>
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
              </div>
              <div className="back-face absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-700 to-purple-700 rounded-lg shadow-lg" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <p className="text-xl font-semibold">Back Side Content</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="relative cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              variants={itemVariants}
              style={{ transformStyle: "preserve-3d" }}
              animate={isFlipped ? "back" : "front"}
              transition={{ duration: 0.6 }}
            >
              <div className="front-face" style={{ backfaceVisibility: "hidden" }}>
                <FaMapMarker className="text-3xl text-pink-400" />
                <div>
                  <p className="text-xl font-semibold">Current Location</p>
                  <p className="text-lg text-gray-300">Bangalore</p>
                </div>
              </div>
              <div className="back-face absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-700 to-purple-700 rounded-lg shadow-lg" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <p className="text-xl font-semibold">Back Side Content</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Availability Card */}
        <motion.div
          className="bg-gradient-to-br from-purple-700 to-indigo-700 p-8 rounded-lg shadow-lg mt-8 flex items-center space-x-4"
          variants={itemVariants}
        >
          <FaUserCheck className="text-4xl text-pink-400" />
          <div>
            <p className="text-xl font-bold text-green-400">
              Available to Join Immediately
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}