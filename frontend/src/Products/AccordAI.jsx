import ShaderWaveBackground from "../components/ShaderWaveBackground";
import { useTheme } from "../context/ThemeProvider";

import AccrordCap from "../components/keycapabilities/accrordCap";

export default function AccordAI() {
  const { theme } = useTheme();

  return (
    <>
      {/* HERO SECTION ONLY */}
      <section className="relative pt-2 pb-10 overflow-hidden">

        <div className="absolute inset-0 z-0">
          <ShaderWaveBackground theme={theme} />
          <div
            className={`absolute inset-0 ${theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">

          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Accord AI — Enterprise Intelligence System
          </h1>

          <p className={`mt-6 max-w-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            The AI brain of your organization — automating tasks, predicting outcomes,
            and optimizing resource consumption for sustainable growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full px-6">
            <button className="w-full sm:w-auto max-w-sm px-6 py-3 rounded-2xl text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-purple-500/30 active:scale-95">
              Get Live Demo
            </button>

            <button className="w-full sm:w-auto max-w-sm px-6 py-3 rounded-2xl text-base font-medium text-pink-500 border border-pink-500/60 bg-transparent hover:bg-pink-500/10 active:scale-95">
              Download Datasheet
            </button>
          </div>
        </div>
      </section>

      {/* ✅ OUTSIDE HERO */}
      <AccrordCap />
    </>
  );
}
