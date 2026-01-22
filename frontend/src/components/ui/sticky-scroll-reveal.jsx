import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function StickyScroll({ content = [] }) {
    if (!content.length) return null;

    const ref = useRef(null);
    const [isDark, setIsDark] = useState(false);
    const endRef = useRef(null);

    // Detect dark mode
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

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const { scrollYProgress: endProgress } = useScroll({
        target: endRef,
        offset: ["start end", "start start"],
    });


    // Section background color animation
    const backgroundColor = useTransform(
        scrollYProgress,
        content.map((_, i) => i / (content.length - 1)),
        content.map((item) =>
            isDark ? item.bgColor.dark : item.bgColor.light
        )
    );

    // 🔴 THIS controls disappearance of the ENTIRE sticky card container
    const hideStickyCard = useTransform(endProgress, [0, 0.01], [1, 0]);

    const headingTranslateY = useTransform(
        scrollYProgress,
        [
            (content.length - 1) / content.length,
            1,
        ],
        [0, -60] // moves heading up as it exits
    );


    return (
        <motion.section
            ref={ref}
            style={{ backgroundColor }}
            className="w-full transition-colors duration-500 dark:bg-gradient-to-r from-purple-1000 via-[#220e3b] to-purple-1000"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* 🔹 STICKY SECTION HEADING */}
                <motion.div
                    style={{
                        opacity: hideStickyCard,
                        y: headingTranslateY,
                    }}
                    className="sticky top-[72px] z-30 backdrop-blur mb-16 pointer-events-none"
                >
                    <div className="pt-12 pb-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                            Key Capabilities
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Transforming operations through intelligent automation and real-time insights.
                        </p>
                    </div>
                </motion.div>



                <div className="flex flex-col lg:flex-row gap-12">

                    {/* 🔹 LEFT CONTENT */}
                    <div className="w-full lg:w-1/2">
                        {content.map((item, index) => (
                            <section
                                key={index}
                                className="lg:min-h-screen flex flex-col"
                            >
                                {/* Spacer */}
                                <div className="hidden lg:block h-[20vh]" />

                                <div className="py-20">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                                        {item.title}
                                    </h2>

                                    <p className="text-gray-700 dark:text-gray-200 max-w-xl leading-relaxed text-justify">
                                        {item.description}
                                    </p>
                                </div>
                            </section>
                        ))}
                        <div ref={endRef} className="h-px" />

                    </div>

                    {/* 🔹 RIGHT STICKY CARD (DESKTOP ONLY) */}
                    <div className="hidden lg:block w-1/2">
                        <motion.div
                            style={{ opacity: hideStickyCard }}   // ✅ WHOLE CARD disappears
className="
    sticky top-[250px]
    h-[400px] xl:h-[440px] 2xl:h-[480px]
    rounded-2xl overflow-hidden
    shadow-lg
    bg-white dark:bg-[#0b1220]
  "                        >
                            {content.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute inset-0"
                                    style={{
                                        opacity: useTransform(
                                            scrollYProgress,
                                            [
                                                (index - 0.5) / content.length,
                                                index / content.length,
                                                (index + 0.5) / content.length,
                                            ],
                                            [0, 1, 0]
                                        ),
                                    }}
                                >
                                    {item.content}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}
