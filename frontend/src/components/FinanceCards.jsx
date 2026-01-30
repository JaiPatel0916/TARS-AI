import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, BarChart3 } from "lucide-react";

const cards = [
  {
    title: "Fraud Protection",
    value: "99.99%",
    icon: ShieldCheck,
    glow: "from-emerald-400/40 to-green-500/40",
  },
  {
    title: "Latency Speed",
    value: "<10ms",
    icon: Zap,
    glow: "from-purple-400/40 to-pink-500/40",
  },
  {
    title: "AI Monitoring",
    value: "24/7",
    icon: Clock,
    glow: "from-cyan-400/40 to-blue-500/40",
  },
  {
    title: "Transactions",
    value: "$50B+",
    icon: BarChart3,
    glow: "from-rose-400/40 to-orange-500/40",
  },
];

export default function FinanceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cards.map((card, i) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative group"
          >
            {/* 🔥 CORNER GLOW (HOVER ONLY) */}
            <div
              className={`
                pointer-events-none
                absolute -inset-[2px]
                rounded-2xl
                bg-gradient-to-br ${card.glow}
                opacity-0 blur-xl
                group-hover:opacity-100
                transition duration-500
              `}
            />

            {/* CARD */}
            <div
              className="
                relative rounded-2xl p-6
                bg-white/70 dark:bg-[#0b1220]/70
                backdrop-blur-xl
                border border-gray-200/60 dark:border-white/10
                shadow-sm group-hover:shadow-xl
                transition
              "
            >
              <Icon className="w-8 h-8 mb-4 text-cyan-500 dark:text-cyan-400" />

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.title}
              </p>

              <h3 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {card.value}
              </h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
