import React from "react";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { useTheme } from "../context/ThemeProvider";

const Future = () => {
  const { theme } = useTheme();
  
  const sustainabilityTitle = [
    { text: "Our" },
    { text: "Sustainability" },
    { text: "Promise" },
  ];

  const futureTitle = [
    { text: "The" },
    { text: "Future" },
    { text: "of" },
    { text: "TARS" },
    { text: "AI" },
  ];

  return (
    <section className={`relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0c0c0c] via-[#1a0a2e] to-[#0c0c0c]' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-purple-1000' : 'bg-purple-300'
        }`} style={{ animationDuration: '4s' }}></div>
        <div className={`absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-pink-1000' : 'bg-pink-300'
        }`} style={{animationDuration: '6s',animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[20rem] text-center space-y-8">
        {/* First Section */}
        <div className="space-y-4">
          <div className="mb-3 sm:mb-4">
            <TypewriterEffect words={sustainabilityTitle} />
          </div>
          <p className={`text-base sm:text-lg lg:text-xl max-w-4xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We design AI that minimizes environmental impact. Sustainability is our responsibility — not an option.
          </p>
        </div>

        {/* Second Section */}
        <div className="space-y-4 mt-8">
          <div className="mb-3 sm:mb-4">
            <TypewriterEffect words={futureTitle} />
          </div>
          <p className={`text-base sm:text-lg lg:text-xl max-w-4xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Building quantum-secure AI, autonomous workflows & real-time intelligent ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Future;
