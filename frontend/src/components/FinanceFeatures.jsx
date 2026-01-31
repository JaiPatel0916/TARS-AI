import React from "react";
import {
  Terminal,
  SlidersHorizontal,
  DollarSign,
  Cloud,
  Route,
  HelpCircle,
  Zap,
  Heart,
} from "lucide-react";

export default function FinanceFeatures() {
  const features = [
    {
      title: "Fraud Detection",
      description:
        "Real-time pattern recognition to flag suspicious activities instantly.",
      icon: <Terminal />,
    },
    {
      title: "Algorithmic Trading",
      description:
        "High-frequency trading bots powered by Accord AI to analyze market sentiment.",
      icon: <SlidersHorizontal />,
    },
    {
      title: "Risk Management",
      description:
        "Predictive modeling to assess loan risks and creditworthiness using alternative data points.",
      icon: <DollarSign />,
    },
    {
      title: "Automated Compliance",
      description:
        "Leverage Regatic AI to automatically update protocols based on changing regulations.",
      icon: <Cloud />,
    },
    {
      title: "Personalized Banking",
      description:
        "AI-driven chatbots that offer personalized investment advice and spending insights.",
      icon: <Route />,
    },
    {
      title: "Blockchain Security",
      description:
        "Decentralized ledger integration for transparent and immutable transaction records.",
      icon: <HelpCircle />,
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-24 ">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
          Solving Complex {" "}
          <span className="
                bg-gradient-to-r
                from-cyan-500 to-purple-500
                bg-clip-text text-transparent
              ">
                Financial Challenges
              </span>
        </h2>
      
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Traditional banking systems are slow and vulnerable. TARS AI implements
          neural networks to modernize your infrastructure.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function Feature({ title, description, icon, index }) {
  return (
    <div
      className={`
        relative group/feature px-10 py-12
        border-neutral-200 dark:border-neutral-800
        ${index % 3 !== 0 ? "lg:border-l" : ""}
        ${index < 3 ? "lg:border-b" : ""}
      `}
    >
      {/* EXACT HOVER OVERLAY (like image) */}
      {index < 3 ? (
        <div className="absolute inset-0 opacity-0 group-hover/feature:opacity-100 transition duration-200 bg-gradient-to-t from-neutral-100 dark:from-neutral-900 to-transparent pointer-events-none" />
      ) : (
        <div className="absolute inset-0 opacity-0 group-hover/feature:opacity-100 transition duration-200 bg-gradient-to-b from-neutral-100 dark:from-neutral-900 to-transparent pointer-events-none" />
      )}

      {/* ICON */}
      <div className="relative z-10 mb-4 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>

      {/* TITLE */}
      <div className="relative z-10 text-lg font-bold mb-2">
        <div className="absolute left-0 inset-y-0 w-1 rounded bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-cyan-500 transition-all duration-200" />
        <span className="ml-4 inline-block group-hover/feature:translate-x-2 transition text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="relative z-10 ml-4 max-w-xs text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}
