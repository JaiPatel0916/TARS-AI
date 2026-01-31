import React from "react";
import { useTheme } from "../context/ThemeProvider";
import HealthcareOrbit from "../components/HealthcareOrbit";
import HealthcareFeatureCards from "../components/HealthcareFeatureCards";

export default function Healthcare() {
  const { theme } = useTheme();

  return (
    <section className="pt-12 pb-28 px-4 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* BADGE */}
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6
              ${
                theme === "dark"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "bg-indigo-100 text-indigo-600"
              }`}
          >
            ⚡ AI-POWERED HEALTHCARE
          </span>

          <h2
            className={`font-extrabold leading-tight
              text-4xl sm:text-5xl md:text-6xl
              ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Revolutionizing <br />
            Patient Care with{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Intelligent AI
            </span>
          </h2>

          <p
            className={`mt-8 max-w-xl text-lg
              ${theme === "dark" ? "text-slate-400" : "text-gray-600"}`}
          >
            Accelerate diagnosis, enable real-time monitoring, and ensure
            secure, data-driven healthcare outcomes using intelligent AI
            solutions.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="px-6 py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-pink-500 to-indigo-500
              hover:opacity-90 transition"
            >
              Request Demo
            </button>

            <button
              className={`px-6 py-3 rounded-lg font-semibold transition
                ${
                  theme === "dark"
                    ? "border border-white/20 text-white hover:bg-white/10"
                    : "border border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
            >
              Explore Solutions
            </button>
          </div>
        </div>

        {/* RIGHT ORBIT */}
       <div
  className="
    flex justify-center
    lg:justify-end
    lg:-translate-x-16
    xl:-translate-x-24
    scale-100
    lg:scale-110
    xl:scale-125
    transition-transform
  "
>
  <HealthcareOrbit />
</div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-7xl mx-auto mt-24">
        <HealthcareFeatureCards />
      </div>
    </section>
  );
}
