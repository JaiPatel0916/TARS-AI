import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function FinanceRegaticSection() {
  return (
    <section className="bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – CARD */}
        <HoverAnimatedCard />

        {/* RIGHT – CONTENT */}
        <div>
          <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            Featured Product
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Automate Calculations with{" "}
            <span className="text-pink-500">Regatic AI</span>
          </h2>

          <p className="mt-5 text-gray-700 dark:text-gray-300 max-w-xl">
            Financial institutions spend thousands of hours on manual compliance
            and tax calculations. Regatic AI automates this with 99.9% accuracy.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Automated Regulatory Reporting (Basel III, GDPR)",
              "Complex Tax Calculation Engine",
              "Real-time Audit Trails",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 text-pink-500 font-medium hover:gap-3 transition-all"
          >
            Learn about Regatic AI →
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/* CARD WITH UI-VERSE MIX EFFECT */
/* -------------------------------------------------- */

function HoverAnimatedCard() {
  return (
    <div className="relative w-full max-w-md mx-auto group">
      {/* Animated border (Daniel1227k inspired) */}
      <div
        className="
          absolute -inset-[2px] rounded-2xl
          bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#a855f7,#ec4899,#22d3ee)]
          opacity-70 blur-md
          group-hover:animate-spinSlow
          transition
        "
      />

      {/* Card */}
      <div
        className="
          relative z-10 rounded-2xl overflow-hidden
          bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
          h-[320px]
          shadow-2xl
        "
      >
        {/* Default content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
          <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center mb-4">
            <div className="w-6 h-6 border-l-2 border-b-2 border-white rotate-45" />
          </div>
          <h3 className="text-xl font-semibold">Regatic AI Core</h3>
          <p className="text-sm opacity-80 mt-1">Processing Data...</p>
        </div>

        {/* Hover content (ElSombrero2 inspired) */}
        <div
          className="
            absolute inset-0 p-6 flex flex-col justify-center
            bg-black/80 text-white
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <h4 className="text-lg font-semibold mb-2">
            Compliance Intelligence Engine
          </h4>
          <p className="text-sm text-gray-300">
            Automates regulatory calculations, validates financial data,
            and ensures audit-ready compliance in real time.
          </p>
        </div>
      </div>
    </div>
  );
}
