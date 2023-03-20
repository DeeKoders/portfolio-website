import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Education from "./Education/Education";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import { AnimatePresence } from "framer-motion";
import Projects from "./Projects/projects";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
