import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Education from "./components/Education/Education";
import Landing from "./Landing";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="container-fluid bg-black text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
