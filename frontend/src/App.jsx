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
import SolutionLayout from "./layouts/SolutionLayout";

// Products
import RagneticAI from "./Products/RagneticAI";
import AccordAI from "./Products/AccordAI";
import ThreeDVirtualBot from "./Products/ThreeDVirtualBot";

//solutions

import Finance from "./Solutions/Finance";
import Healthcare from "./Solutions/Healthcare";
//import Retail from "./Solutions/Retail";
//import Government from "./Solutions/Government";

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
          <Route path="/products/accord-ai" element={<AccordAI />} />
          <Route path="/products/3d-virtual-bot" element={<ThreeDVirtualBot />} />
          <Route path="/products/docsshift-ai" element={<DocsshiftAI />} />
        </Route>

        <Route element={<SolutionLayout />}>
          <Route path="/solutions/finance" element={<Finance />} />
         <Route path="/solutions/healthcare" element={<Healthcare />} />
         {/* <Route path="/solutions/retail" element={<Retail />} />
          <Route path="/solutions/government" element={<Government />} /> */}
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;

