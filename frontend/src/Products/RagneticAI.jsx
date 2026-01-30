import { useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import { useTheme } from "../context/ThemeProvider";
import RagneticCap from "../components/keycapabilities/ragneticCap";

export default function RagneticAI() {
    const ref = useRef(null);
    const { theme } = useTheme(); // ✅ USING THE PROVIDER

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const paths = Array(5).fill(
        useTransform(scrollYProgress, [0, 0.6], [0, 1])
    );

    return (
        <div className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
            {/* 🔒 LOCKED ANIMATION ZONE */}
            

            {/* RagneticAI SECTION */}
            <RagneticCap />

            {/* SPACER ZONE */}
            {/* <section
                className={`h-[60vh] transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"
                    }`}
            /> */}
        </div>
    );
}
