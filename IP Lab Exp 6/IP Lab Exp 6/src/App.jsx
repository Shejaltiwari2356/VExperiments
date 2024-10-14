// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import AboutUs from "./components/AboutUs";
import Program from "./components/Program";
import Admission from "./components/Admission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; // Global CSS

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar applied to all routes */}
        <Navbar />

        {/* Route management */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/program" element={<Program />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer applied to all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
