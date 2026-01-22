import FlowingMenu from "./ui/FlowingMenu";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const coreServices = [
    { link: "#", text: "AI & LLM", image: "/images/accordai.png" },
    { link: "#", text: "Chatbots", image: "/images/virtual-bot.jpg" },
    { link: "#", text: "Blockchain", image: "/images/docshift.png" },
    { link: "#", text: "Cybersecurity", image: "/images/RegaticAi.png" },
    { link: "#", text: "IT Writing", image: "/images/docshift.png" },
];

export default function CoreServices() {
    const [isDark, setIsDark] = useState(false);
    const sectionRef = useRef(null);

    /* ---------------- DARK MODE DETECTION ---------------- */
    useEffect(() => {
        const html = document.documentElement;
        setIsDark(html.classList.contains("dark"));

        const observer = new MutationObserver(() => {
            setIsDark(html.classList.contains("dark"));
        });

        observer.observe(html, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    /* ---------------- STRONG, VISIBLE PARALLAX ---------------- */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start center"],
    });

    // Big entry movement so it is NOTICEABLE
    const y = useTransform(scrollYProgress, [0, 1], [140, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return (
        <motion.section
            ref={sectionRef}
            style={{ y, opacity }}
            className={`w-full py-28 relative overflow-hidden transition-colors duration-500
        ${isDark ? "bg-[#060010]" : "bg-[#f6f8fc]"}`}
        >
            {/* ---------------- HEADING ---------------- */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight
          text-gray-900 dark:text-white">
                    Core Services
                </h2>
            </div>

            {/* ---------------- FLOWING MENU (FULL WIDTH) ---------------- */}
            <div
                className={`w-full h-[420px] overflow-hidden
          ${isDark ? "" : "bg-white shadow-sm"}`}
            >
                <FlowingMenu
                    items={coreServices}
                    speed={18}
                    textColor={isDark ? "#ffffff" : "#0f172a"}
                    bgColor="transparent"
                    marqueeBgColor={isDark ? "#ffffff" : "#0f172a"}
                    marqueeTextColor={isDark ? "#0f172a" : "#ffffff"}
                    borderColor={
                        isDark
                            ? "rgba(255,255,255,0.18)"
                            : "rgba(15,23,42,0.15)"
                    }
                />
            </div>
        </motion.section>
    );
}
