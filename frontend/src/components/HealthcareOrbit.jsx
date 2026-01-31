"use client";
import React, { useEffect, useState, memo } from "react";
import { useTheme } from "../context/ThemeProvider";
import {
  FiHeart,
  FiActivity,
  FiDatabase,
  FiShield,
  FiCpu,
  FiTrendingUp,
} from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";

/* ---------------- ORBIT DATA ---------------- */
const orbitItems = [
  { id: "ai", icon: FiCpu, label: "AI Diagnosis", color: "#6366F1", r: 90, s: 1 },
  { id: "care", icon: FiHeart, label: "Patient Care", color: "#EC4899", r: 90, s: 1, p: (2 * Math.PI) / 3 },
  { id: "monitor", icon: FiActivity, label: "24/7 Monitoring", color: "#22C55E", r: 90, s: 1, p: (4 * Math.PI) / 3 },

  { id: "data", icon: FiDatabase, label: "Smart EHR", color: "#06B6D4", r: 150, s: -0.6 },
  { id: "security", icon: FiShield, label: "HIPAA Secure", color: "#A855F7", r: 150, s: -0.6, p: (2 * Math.PI) / 3 },
  { id: "outcomes", icon: FiTrendingUp, label: "Better Outcomes", color: "#F59E0B", r: 150, s: -0.6, p: (4 * Math.PI) / 3 },
];

/* ---------------- ORBIT ITEM ---------------- */
const OrbitItem = memo(({ item, angle, theme }) => {
  const [hover, setHover] = useState(false);
  const x = Math.cos(angle) * item.r;
  const y = Math.sin(angle) * item.r;

  const bg =
    theme === "dark"
      ? "bg-slate-900/80 border-white/10"
      : "bg-white/80 border-black/10";

  const textBg =
    theme === "dark"
      ? "bg-black/80 text-white"
      : "bg-white text-gray-900";

  return (
    <div
      className="absolute top-1/2 left-1/2 z-20"
      style={{
        width: 42,
        height: 42,
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-full h-full rounded-full flex items-center justify-center
        backdrop-blur border transition-all duration-300
        ${bg} ${hover ? "scale-125" : ""}`}
        style={{ boxShadow: `0 0 22px ${item.color}` }}
      >
        <item.icon size={18} style={{ color: item.color }} />

        {hover && (
          <span
            className={`absolute -bottom-7 text-xs px-2 py-1 rounded whitespace-nowrap ${textBg}`}
          >
            {item.label}
          </span>
        )}
      </div>
    </div>
  );
});

/* ---------------- ORBIT RING ---------------- */
const OrbitRing = ({ radius, theme }) => (
  <svg
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
    width={radius * 2}
    height={radius * 2}
  >
    <circle
      cx={radius}
      cy={radius}
      r={radius - 2}
      fill="none"
      stroke={theme === "dark" ? "#8B5CF6" : "#6366F1"}
      strokeWidth="1.5"
      strokeDasharray="6 6"
      opacity="0.85"
    />
  </svg>
);

/* ---------------- MAIN ---------------- */
export default function HealthcareOrbit() {
  const { theme } = useTheme();
  const [time, setTime] = useState(0);

  useEffect(() => {
    let raf;
    const animate = (t) => {
      setTime(t / 1000);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">

      {/* RINGS */}
      <OrbitRing radius={90} theme={theme} />
      <OrbitRing radius={150} theme={theme} />

      {/* CENTER (STETHOSCOPE) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-20 h-20 rounded-full z-30 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #6366F1, #EC4899)",
          boxShadow:
            theme === "dark"
              ? "0 0 40px rgba(139,92,246,0.8)"
              : "0 0 30px rgba(99,102,241,0.4)",
        }}
      >
        <FaStethoscope className="text-white" size={28} />
      </div>

      {/* ORBIT ITEMS */}
      {orbitItems.map((item) => (
        <OrbitItem
          key={item.id}
          item={item}
          angle={time * item.s + (item.p || 0)}
          theme={theme}
        />
      ))}
    </div>
  );
}
