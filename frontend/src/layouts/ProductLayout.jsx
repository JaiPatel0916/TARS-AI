import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function ProductLayout() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Outlet />   {/* Product pages render here */}
            <Footer />
        </div>
    );
}
