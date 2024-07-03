import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Hero from "../pages/Hero/Hero";
import Education from "../pages/Education/Education";
import Work from "../pages/Work/Work";
import Portfolio from "../pages/Contact/Portfolio";
// import "./slider.css";

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/expertise" element={<Education />} />
          <Route path="/experience" element={<Work />} />
          <Route path="/project" element={<Portfolio />} />
        </Routes>
    </div>
  );
};

export default Routing;
