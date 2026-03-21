import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing_page/LandingPage";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Landing Page as the default route */}
      <Route path="/home" element={<Home />} /> {/* Home Page */}

    </Routes>
  );
};

export default App;