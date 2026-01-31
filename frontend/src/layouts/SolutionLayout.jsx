import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeProvider";

export default function SolutionLayout() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#050b1a] via-[#0b1220] to-[#14001f]"
            : "bg-white"
        }`}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
