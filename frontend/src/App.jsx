// src/App.jsx
import React from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeProvider";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
