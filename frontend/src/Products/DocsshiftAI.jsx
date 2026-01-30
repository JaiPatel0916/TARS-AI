import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import DocshiftCap  from "../components/keycapabilities/docshiftCap"
import DocUse from "../components/uses/docuse";

export default function DocsshiftAI() {
    const ref = useRef(null);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
    const opacity1 = useTransform(smoothProgress, [0, 0.3, 0.5], [0, 1, 0]);
    const opacity2 = useTransform(smoothProgress, [0.2, 0.5, 0.7], [0, 1, 0]);
    const scale1 = useTransform(smoothProgress, [0, 0.3, 0.5], [0.5, 1, 1.5]);
    const scale2 = useTransform(smoothProgress, [0.2, 0.5, 0.7], [0.5, 1, 1.5]);
    const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

    return (
        <>
            {/* HERO ANIMATION SECTION */}
            <section
                ref={ref}
                className={`relative overflow-hidden overflow-x-hidden transition-colors duration-300 md:h-screen min-h-[420px] sm:min-h-[520px] ${
                    theme === "dark" ? "bg-black" : "bg-white"
                }`}
            >
                <div className="sticky top-0 md:h-screen min-h-[420px] flex items-center justify-center px-2 sm:px-4 md:px-6">
                    {/* Animated Background Circles */}
                    <motion.div
                        style={{ rotate, scale: scale1, opacity: opacity1 }}
                        className="absolute hidden sm:block w-38 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-2 border-teal-500/30"
                    />
                    <motion.div
                        style={{ rotate: useTransform(rotate, (r) => -r), scale: scale2, opacity: opacity2 }}
                        className="absolute hidden sm:block w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-2 border-blue-500/30"
                    />

                    {/* Main Content */}
                    <div className="relative z-10 w-full px-0 sm:px-4 md:px-6 text-center">
                        {/* Animated Documents Icon */}
                        <motion.div
                            style={{ y }}
                            className="mb-4 sm:mb-6 md:mb-8 flex justify-center"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={mounted ? { scale: 1, rotate: 0 } : {}}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative"
                            >
                                {/* Document 1 */}
                                <motion.svg
                                    className={`w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 ${theme === "dark" ? "text-teal-400" : "text-teal-600"}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    animate={{
                                        x: [-10, 10, -10],
                                        rotate: [-5, 5, -5]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </motion.svg>
                                
                                {/* Arrow */}
                                <motion.svg
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 ${
                                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                                    }`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    animate={{
                                        x: [0, 5, 0],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </motion.svg>
                            </motion.div>
                        </motion.div>

                        {/* Title with Typewriter Effect */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 ${
                                theme === "dark" 
                                    ? "bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                                    : "bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                            }`}
                        >
                            DocShift
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed ${
                                theme === "dark" ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            AI-Powered Document Conversion Engine
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={mounted ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className={`text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 md:mt-4 px-0 sm:px-2 ${
                                theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            Convert, transform & migrate documents seamlessly — powered by secure, compliant & scalable AI automation
                        </motion.p>

                        {/* Floating particles - Hidden on very small screens */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full hidden sm:block ${
                                    theme === "dark" ? "bg-teal-400" : "bg-teal-600"
                                }`}
                                animate={{
                                    y: [0, -100, 0],
                                    x: [0, Math.random() * 100 - 50, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                                style={{
                                    left: `${20 + i * 15}%`,
                                    bottom: "20%",
                                }}
                            />
                        ))}

                        {/* CTA Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center px-2 w-full">
                            <button
                                onClick={() => {
                                    const el = document.getElementById('docshift-capabilities');
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                aria-label="Try DocShift Demo"
                                className={`w-full sm:w-auto text-center px-4 py-3 rounded-full font-semibold shadow-md transition ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 text-black'
                                        : 'bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 text-white'
                                }`}
                            >
                                Try DocShift Demo
                            </button>

                            <a
                                href="#"
                                aria-label="Technical Datasheet"
                                className={`w-full sm:w-auto text-center px-4 py-3 rounded-full border font-semibold ${
                                    theme === 'dark' ? 'border-white/20 text-white/90' : 'border-gray-300 text-gray-700'
                                }`}
                            >
                                Technical Datasheet
                            </a>
                        </div>
                    </div>
                </div>
            </section>

             {/* Docshift SECTION */}
                        <section id="docshift-capabilities" className={`transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
                            <DocshiftCap />
                        </section>

                          {/*uses SECTION */}
                        <section id="docshift-uses" className={`transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
                            <DocUse />
                        </section>

            
          
        </>
    );
}
