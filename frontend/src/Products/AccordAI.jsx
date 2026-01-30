import ShaderWaveBackground from "../components/ShaderWaveBackground";
import { useTheme } from "../context/ThemeProvider";
import Cap from "../components/keycapabilities/accrordCap";
import DocUse from "../components/uses/accordAIuse";

export default function AccordAI() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen  pt-18 overflow-hidden">

      {/* Moving wave shader */}
      <div className="absolute inset-0 z-0">
        <ShaderWaveBackground theme={theme} />

        {/* readability overlay */}
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "bg-black/60" : "bg-white/60"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Accord AI — Enterprise Intelligence System
        </h1>

        <p
          className={`mt-6 max-w-3xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          The AI brain of your organization — automating tasks, predicting outcomes,
          and optimizing resource consumption for sustainable growth.
        </p>

       <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full px-6">
  {/* Primary */}
  <button
    className="
      w-full sm:w-auto
      max-w-sm
      px-6 py-3
      rounded-2xl
      text-base font-medium
      text-white
      bg-gradient-to-r from-blue-500 to-purple-500
      shadow-lg shadow-purple-500/30
      transition-transform active:scale-95
    "
  >
    Get Live Demo
  </button>

  {/* Secondary */}
  <button
    className="
      w-full sm:w-auto
      max-w-sm
      px-6 py-3
      rounded-2xl
      text-base font-medium
      text-pink-500
      border border-pink-500/60
      bg-transparent
      transition-all
      hover:bg-pink-500/10
      active:scale-95
    "
  >
    Download Datasheet
  </button>
</div>
      </div>
    </section>
  
  );
}
