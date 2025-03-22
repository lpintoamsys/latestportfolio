import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 shadow-lg justify-center">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-pink-400">
          Portfolio of Lawrence Pinto
        </NavLink>
        <ul className="flex space-x-6 text-md font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-pink-400 transition-colors ${
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
                `text-white hover:text-pink-400 transition-colors ${
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
                `text-white hover:text-pink-400 transition-colors ${
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
                `text-white hover:text-pink-400 transition-colors ${
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
                `text-white hover:text-pink-400 transition-colors ${
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
                `text-white hover:text-pink-400 transition-colors ${
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
                `text-white hover:text-pink-400 transition-colors ${
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
                `text-white hover:text-pink-400 transition-colors ${
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
                `text-white hover:text-pink-400 transition-colors ${
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

export { Navbar}