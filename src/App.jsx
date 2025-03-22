import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import DomainExpertise from "./pages/DomainExpertise";
import Skills from "./pages/Skills";
import KeyHighlights from "./pages/KeyHighlights";
import Strenghts from "./pages/Strengths";
import WorkExperience from "./pages/WorkExperience";
import References from "./pages/References";
import React from "react";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/domain" element={<DomainExpertise />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/highlights" element={<KeyHighlights />}/>
          <Route path="/strengths" element={<Strenghts />}/>
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </Router>
  );
}