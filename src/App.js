import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import ParticleBackground from "./components/particleBackground";
import AnimatedRoutes from "./components/AnimatedRoutes";
function App() {
  return (
    <div className="container-fluid bg-black text-white">
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
      <ParticleBackground />
    </div>
  );
}

export default App;
