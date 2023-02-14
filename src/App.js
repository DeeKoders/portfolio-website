import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import ParticleBackground from "./components/particleBackground";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="container-fluid bg-black text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
      <ParticleBackground />
    </div>
  );
}

export default App;
