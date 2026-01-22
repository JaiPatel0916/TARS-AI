import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "../components/ui/GoogleGeminiEffect";
import { useRef } from "react";
import { useTheme } from "../context/ThemeProvider"; // ✅ REQUIRED

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
        <>
            {/* 🔒 LOCKED ANIMATION ZONE */}
            <section
                ref={ref}
                className={`relative transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"
                    }`}
                style={{ height: "200vh" }}
            >
                <GoogleGeminiEffect
                    title="Ragnetic AI"
                    description="Regulatory-grade AI system for intelligent automation, compliance, and data-driven decisions."
                    pathLengths={paths}
                />
            </section>

            {/* ✅ RELEASE ZONE */}
            <section
                className={`h-[120vh] transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"
                    }`}
            />
        </>
    );
}
