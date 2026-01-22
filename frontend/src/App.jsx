
// src/App.jsx
// src/App.jsx
import React from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Layouts
import ProductLayout from "./layouts/ProductLayout";

// Products
import RagneticAI from "./Products/RagneticAI";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Normal pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Product pages with layout */}
        <Route element={<ProductLayout />}>
          <Route path="/products/ragnetic-ai" element={<RagneticAI />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

