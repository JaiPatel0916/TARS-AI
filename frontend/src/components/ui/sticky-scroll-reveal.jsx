import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";


export function StickyScroll({ content = [] }) {
    if (!content.length) return null;

    const ref = useRef(null);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;

        // initial value
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

    // Background color interpolation
    const backgroundColor = useTransform(
        scrollYProgress,
        content.map((_, i) => i / (content.length - 1)),
        content.map((item) =>
            isDark ? item.bgColor.dark : item.bgColor.light
        )
    );


    return (
        <motion.section
            ref={ref}
            style={{ backgroundColor }}
            className="w-full transition-colors duration-500"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* SECTION HEADING */}
                <div className="mt-20 mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                        Key Capabilities
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Transforming operations through intelligent automation and real-time insights.
                    </p>
                </div>



                <div className="flex flex-col lg:flex-row gap-12">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-1/2">
                        {content.map((item, index) => (
                            <section
                                key={index}
                                className="lg:min-h-screen flex flex-col"
                            >
                                {/* Spacer to push content down */}
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
                    </div>

                    {/* RIGHT STICKY – DESKTOP ONLY */}
                    <div className="hidden lg:block w-1/2">
                        <div className="sticky top-24 h-[520px] rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#0b1220]">
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
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}
