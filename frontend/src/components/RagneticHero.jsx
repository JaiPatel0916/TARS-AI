import { useTheme } from "../context/ThemeProvider";

export default function RagneticHero() {
    const { theme } = useTheme();

    return (
        <section
            className={`
        relative w-full min-h-screen

        flex flex-col items-center justify-start
pt-24 sm:pt-28 md:pt-32 lg:pt-36
        bg-no-repeat bg-cover

        ${theme === "dark" ? `
          bg-[url('/images/ragnetic-hero-dark.png')]

          bg-[position:center_-60px]
          sm:bg-[position:center_-140px]
          md:bg-[position:center_-220px]
          lg:bg-[position:center_-300px]
          xl:bg-[position:center_-360px]
          2xl:bg-[position:center_-380px]
        ` : `
          bg-[url('/images/ragnetic-hero-light.png')]

          bg-[position:center_-40px]
          sm:bg-[position:center_-80px]
          md:bg-[position:center_-110px]
          lg:bg-[position:center_-150px]
          xl:bg-[position:center_-170px]
          2xl:bg-[position:center_-180px]
        `}
      `}
        >
            {/* Content */}
            <div className="max-w-5xl text-center px-6">
                <h1 className="pb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    RAGnetic AI — Intelligent <br />
                    Document Understanding
                   
                </h1>

                <p
                    className={`mt-6 text-base sm:text-lg md:text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                >
                    The AI that transforms paperwork into smart digital intelligence —
                    reducing human effort and boosting automation efficiency.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                    <button className="px-8 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-purple-500/30 active:scale-95">
                        Request Demo
                    </button>

                    <button
                        className={`px-8 py-3 rounded-xl border active:scale-95 ${theme === "dark"
                                ? "border-white text-white hover:bg-white/10"
                                : "border-gray-800 text-gray-800 hover:bg-gray-100"
                            }`}
                    >
                        View Integrations
                    </button>
                </div>
            </div>
        </section>
    );
}
