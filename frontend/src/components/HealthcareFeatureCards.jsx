import React from "react";
import { useTheme } from "../context/ThemeProvider";
import {
  FiActivity,
  FiHeart,
  FiShield,
  FiDatabase,
} from "react-icons/fi";

const Card = ({ title, subtitle, Icon }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full p-5 rounded-xl border relative overflow-hidden group transition-colors
        ${
          theme === "dark"
            ? "bg-slate-900/70 border-white/10"
            : "bg-white border-gray-200"
        }`}
    >
      {/* Hover Gradient Overlay (same as before) */}
      <div
        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300
          ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-600 to-pink-600"
              : "bg-gradient-to-r from-indigo-500/90 to-pink-500/90"
          }`}
      />

      {/* BIG ICON (background decorative) */}
      <Icon
        className={`absolute z-0 -top-10 -right-10 text-8xl transition-all duration-300
          ${
            theme === "dark"
              ? "text-white/10 group-hover:text-white/20 group-hover:rotate-12"
              : "text-gray-100 group-hover:text-white/40 group-hover:rotate-12"
          }`}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <Icon
          className={`mb-3 text-2xl transition-colors duration-300
            ${
              theme === "dark"
                ? "text-indigo-400 group-hover:text-white"
                : "text-indigo-600 group-hover:text-white"
            }`}
        />

        <h3
          className={`font-semibold text-lg transition-colors duration-300
            ${
              theme === "dark"
                ? "text-white group-hover:text-white"
                : "text-gray-900 group-hover:text-white"
            }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm mt-1 transition-colors duration-300
            ${
              theme === "dark"
                ? "text-slate-400 group-hover:text-indigo-100"
                : "text-gray-600 group-hover:text-indigo-100"
            }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default function HealthcareFeatureCards() {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <Card
        title="40%"
        subtitle="Faster & accurate Diagnosis"
        Icon={FiActivity}
      />
      <Card
        title="24/7"
        subtitle="Patient Monitoring"
        Icon={FiHeart}
      />
      <Card
        title="99.9%"
        subtitle="Data Accuracy"
        Icon={FiShield}
      />
      <Card
        title="HIPAA"
        subtitle="Compliant Ready"
        Icon={FiDatabase}
      />
    </div>
  );
}
