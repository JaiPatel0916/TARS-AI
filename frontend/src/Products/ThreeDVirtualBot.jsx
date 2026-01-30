import { SplineScene } from "../components/ui/splite"
import { Spotlight } from "../components/ui/spotlight"
import { useTheme } from "../context/ThemeProvider"
import { motion } from "framer-motion"


export default function ThreeDVirtualBot() {
  const { theme } = useTheme()

  return (
    <section
      className={`relative w-full px-6 pt-10 md:pt-16 overflow-hidden ${theme === "dark" ? "bg-black/[0.95]" : "bg-white"
        }`}
    >

      {/* Glow */}
      <Spotlight
        className="-top-40 left-1/2 -translate-x-1/2"
        fill={theme === "dark" ? "#a855f7" : "#6366f1"}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[420px] md:min-h-[500px] max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div className="relative z-10 px-6 md:px-10">
         <h1 className="text-4xl md:text-5xl font-bold -mt-4 md:mt-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            VirtualBot — Humanlike AI Avatar
          </h1>

          <p
            className={`mt-4 max-w-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            A real-time talking, interactive 3D AI assistant that listens,
            thinks, responds, and emotionally connects like a human.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Watch Demo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
            >
              Watch Demo
            </motion.button>

            {/* Try VirtualBot */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="px-8 py-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500/10"
            >
              Try VirtualBot Now
            </motion.button>
          </div>
        </div>
        {/* RIGHT CONTENT (SPLINE BOT) */}
        <div
          className="
    absolute inset-0
    md:static
    w-full h-full
    md:h-[500px]
    opacity-30 md:opacity-100
    pointer-events-none md:pointer-events-auto
    -z-0 md:z-auto
  "
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  )
}
