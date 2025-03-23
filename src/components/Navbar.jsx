import { NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <NavLink to="/" className="text-2xl font-bold text-pink-400">
          Portfolio of Lawrence Pinto
        </NavLink>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="text-white hover:text-pink-400 focus:outline-none lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 text-md font-semibold mt-4 lg:mt-0`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/domain"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              Domain Expertise
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/highlights"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              Key Highlights
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/strengths"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              Strengths
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              Work Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/references"
              className={({ isActive }) =>
                `block lg:inline-block text-white hover:text-pink-400 transition-colors p-2 ${
                  isActive ? "text-pink-400 font-bold" : ""
                }`
              }
            >
              References
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}