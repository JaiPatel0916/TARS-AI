import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RagneticAI from "../Products/RagneticAI";
import AccordAI from "../Products/AccordAI";
import ThreeDVirtualBot from "../Products/ThreeDVirtualBot";
import DocsshiftAI from "../Products/DocsshiftAI";

export default function Products() { 
  const { product } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
      <Navbar />

      {/* Product Content */}
      {product === "ragnetic-ai" && <RagneticAI />}
      {product === "accord-ai" && <AccordAI />}
      {product === "3d-virtual-bot" && <ThreeDVirtualBot />}
    return (
        <div className="min-h-screen  bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
            <Navbar />

            {/* Render product based on URL */}
            {product === "ragnetic-ai" && <RagneticAI />}
            {product === "docsshift-ai" && <DocsshiftAI />}

      {/* Optional fallback */}
      {!["ragnetic-ai", "accord-ai"].includes(product) && (
        <div className="text-white text-center py-40 text-xl">
          Product not found
        </div>
      )}

      <Footer />
    </div>
  );
}
