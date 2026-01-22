import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RagneticAI from "../Products/RagneticAI";

export default function Products() {
    const { product } = useParams();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
            <Navbar />

            {/* Render product based on URL */}
            {product === "ragnetic-ai" && <RagneticAI />}

            <Footer />
        </div>
    );
}
