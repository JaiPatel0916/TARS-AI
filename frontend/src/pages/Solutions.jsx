import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Solution pages
import Finance from "../Solutions/Finance";
import Healthcare from "../Solutions/Healthcare";
import Retail from "../Solutions/Retail";
import Government from "../Solutions/Government";

export default function Solutions() {
  const { solution } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b1a] via-[#0b1220] to-[#14001f]">
      <Navbar />

      {/* Solution Content */}
      {solution === "finance" && <Finance />}
      {solution === "healthcare" && <Healthcare />}
      {solution === "retail" && <Retail />}
      {solution === "government" && <Government />}

      {/* Fallback */}
      {!["finance", "healthcare", "retail", "government"].includes(solution) && (
        <div className="text-white text-center py-40 text-xl">
          Solution not found
        </div>
      )}

      <Footer />
    </div>
  );
}
