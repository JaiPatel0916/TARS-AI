import {
  ShieldCheck,
  Zap,
  Clock,
  BarChart3,
} from "lucide-react";

export default function FinanceCards() {
  const cards = [
    {
      title: "Fraud Protection",
      value: "99.99%",
      icon: ShieldCheck,
    },
    {
      title: "Latency Speed",
      value: "<10ms",
      icon: Zap,
    },
    {
      title: "AI Monitoring",
      value: "24/7",
      icon: Clock,
    },
    {
      title: "Transactions",
      value: "$50B+",
      icon: BarChart3,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="
              rounded-2xl p-6
              bg-white dark:bg-[#0b1220]
              border border-gray-200 dark:border-white/10
              shadow-sm
            "
          >
            <Icon className="w-8 h-8 text-cyan-500 dark:text-cyan-400 mb-4" />

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {card.title}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {card.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
