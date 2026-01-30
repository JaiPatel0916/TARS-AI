import { motion } from "framer-motion";
import FinanceCards from "./FinanceCards";

export default function FinanceHero() {
  return (
    <section
  className="
    relative overflow-hidden
    bg-white
    dark:bg-black
  "
>
      {/* subtle animated gradient blur */}
      <motion.div
  className="
    absolute -top-32 -left-32 w-[500px] h-[500px]
    rounded-full blur-[120px]
    hidden dark:block
    bg-cyan-400/20
  "
  animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
  transition={{ duration: 18, repeat: Infinity }}
/>

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="
              inline-block mb-4 px-4 py-1 text-xs rounded-full
              bg-cyan-500/10 text-cyan-600
              dark:bg-cyan-400/10 dark:text-cyan-400
            ">
              Secure Financial Operations
            </span>

            <h1 className="
              text-4xl md:text-5xl font-bold
              text-gray-900 dark:text-white
            ">
              Next-Gen AI for{" "}
              <span className="
                bg-gradient-to-r
                from-cyan-500 to-purple-500
                bg-clip-text text-transparent
              ">
                Modern Finance
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-300">
              Empower financial institutions with TARS AI. From intelligent
              trading using <b>Accord AI</b> to compliance automation via{" "}
              <b>Regatic AI</b>.
            </p>

            <motion.div
              className="mt-8 flex gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button className="px-6 py-3 rounded-xl bg-pink-500 text-white shadow-lg hover:scale-105 transition">
                Schedule Demo
              </button>
              <button className="
                px-6 py-3 rounded-xl border
                border-pink-500 text-pink-500
                hover:bg-pink-500 hover:text-white transition
              ">
                View Use Cases
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT CARDS */}
          <FinanceCards />

        </div>
      </div>
    </section>
  );
}
