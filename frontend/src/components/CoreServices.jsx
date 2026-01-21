import FlowingMenu from "./ui/FlowingMenu";
import { useEffect, useState } from "react";

const coreServices = [
    { link: "#", text: "AI & LLM", image: "/images/accordai.png" },
    { link: "#", text: "Chatbots", image: "/images/virtual-bot.jpg" },
    { link: "#", text: "Blockchain", image: "/images/docshift.png" },
    { link: "#", text: "Cybersecurity", image: "/images/RegaticAi.png" },
    { link: "#", text: "IT Writing", image: "/images/docshift.png" },
];

export default function CoreServices() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        setIsDark(html.classList.contains("dark"));

        const observer = new MutationObserver(() => {
            setIsDark(html.classList.contains("dark"));
        });

        observer.observe(html, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`w-full py-28 transition-colors duration-500 ${isDark ? "bg-[#060010]" : "bg-[#f6f8fc]"
                }`}
        >
            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                {/* <p className="text-sm md:text-base tracking-widest uppercase font-medium text-gray-600 dark:text-gray-400">
                    Core Services
                </p> */}

                <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                   Core Services
                </h2>
            </div>

            {/* Flowing rows */}
            <div
                className={`w-full h-[420px] ${isDark ? "" : "bg-white shadow-sm"
                    }`}
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
        </section>
    );
}
