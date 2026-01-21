// src/App.jsx
import React from "react";
import "./index.css"; // Tailwind CSS entry file

import Navbar from "./components/Navbar";
import StickyScrollRevealDemo from "./components/StickyScrollRevealDemo";

function App() {
  return (
    <>
      <Navbar />
      <StickyScrollRevealDemo />
    </>
  );
}

export default App;
