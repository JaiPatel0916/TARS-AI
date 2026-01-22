import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";

import Home from "./pages/Home";
import ProductLayout from "./layouts/ProductLayout";
import RagneticAI from "./Products/RagneticAI";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Home WITHOUT product layout */}
        <Route path="/" element={<Home />} />

        {/* Products WITH ProductLayout */}
        <Route element={<ProductLayout />}>
          <Route path="/products/ragnetic-ai" element={<RagneticAI />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
