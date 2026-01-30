import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function SolutionLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b1a] via-[#0b1220] to-[#14001f]">
      <Navbar />
      <Outlet />   {/* Solution pages render here */}
      <Footer />
    </div>
  );
}
