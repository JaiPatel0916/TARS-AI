import { useTheme } from "../context/ThemeProvider";
import { useState } from "react";

const OurCoreValues = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const values = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: "Innovation with Purpose",
      description: "Driving breakthrough solutions that make a real difference in the world.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Sustainability First",
      description: "Building eco-friendly technology for a greener, sustainable future.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: "Security at the Core",
      description: "Quantum-grade security protecting your data with cutting-edge encryption.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: "Transparency & Trust",
      description: "Open communication and honest relationships with every stakeholder.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className={`relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden cursor-pointer ${
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
        }`} style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4  ${
            theme === 'dark' 
              ? 'text-white' 
              : 'text-black'
          }`}>
            Our Core Values
          </h2>
          <div className={`h-1 w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-6 sm:p-8 rounded-2xl transition-all duration-500 transform ${
                hoveredIndex === index ? 'scale-105 -translate-y-2' : ''
              } ${
                hoveredIndex !== null && hoveredIndex !== index ? 'opacity-60 scale-95' : 'opacity-100'
              } ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50'
                  : 'bg-white border border-gray-200 shadow-lg'
              } backdrop-blur-sm`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Animated border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-4 sm:mb-6 transform transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 rotate-6' : ''
                } text-transparent bg-gradient-to-br ${value.color} bg-clip-text`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12">
                    {value.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
                  theme === 'dark'
                    ? hoveredIndex === index ? 'text-white' : 'text-gray-100'
                    : hoveredIndex === index ? 'text-gray-900' : 'text-gray-800'
                }`}>
                  {value.title}
                </h3>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-400'
                    : 'text-gray-600'
                }`}>
                  {value.description}
                </p>

                {/* Hover indicator */}
                <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${value.color} transform transition-all duration-500 ${
                  hoveredIndex === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}></div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default OurCoreValues;