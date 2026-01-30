import React from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
// Layouts
import ProductLayout from "./layouts/ProductLayout";

// Products
import RagneticAI from "./Products/RagneticAI";
import DocsshiftAI from "./Products/DocsshiftAI";

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        {/* Normal pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>

        {/* Product pages with layout */}
        <Route element={<ProductLayout />}>
          <Route path="/products/ragnetic-ai" element={<RagneticAI />} />
          <Route path="/products/docsshift-ai" element={<DocsshiftAI />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

