import { useTheme } from "../context/ThemeProvider";
import { useState } from "react";

const ContactUs = () => {
  const { theme } = useTheme();
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section className={`relative py-16 sm:py-20 lg:py-18 px-4 sm:px-6 lg:px-12 overflow-hidden ${
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

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${
            theme === 'dark' 
              ? 'text-white' 
              : 'text-black'
          }`}>
            Contact Us
          </h2>
          <div className={`h-1 w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>
        </div>

        {/* Content Card */}
        <div 
          className={`text-center p-8 sm:p-10 lg:p-12 rounded-2xl transition-all duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50'
              : 'bg-white border border-gray-200 shadow-xl'
          } backdrop-blur-sm`}
          style={{
            animation: 'fadeInUp 0.8s ease-out backwards'
          }}
        >
          {/* Description */}
          <p className={`text-lg sm:text-xl lg:text-2xl mb-3 ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-900'
          }`}>
            Have questions? Need technical assistance? Want to automate your business?
          </p>
          
          <p className={`text-base sm:text-lg mb-10 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            Our team is here to help you 24/7.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onMouseEnter={() => setHoveredButton('callback')}
              onMouseLeave={() => setHoveredButton(null)}
              className={`group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 transform ${
                hoveredButton === 'callback' ? 'scale-105 shadow-2xl' : 'scale-100'
              }`}
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
              }}
            >
              <span className="relative z-10">Request a Callback</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button
              onMouseEnter={() => setHoveredButton('support')}
              onMouseLeave={() => setHoveredButton(null)}
              className={`group relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                hoveredButton === 'support' ? 'scale-105' : 'scale-100'
              } ${
                theme === 'dark'
                  ? 'border-2 border-purple-500/50 text-white hover:bg-purple-500/20'
                  : 'border-2 border-purple-500 text-gray-900 hover:bg-purple-50'
              }`}
            >
              <span className="relative z-10">Chat With Support</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className={`mt-10 pt-8 border-t ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'
          }`}>
            
              
              
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
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

export default ContactUs;
