import { useTheme } from "../context/ThemeProvider";
import { useState, useEffect, useRef } from "react";

const Message = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Support",
      description: "Talk directly with our technical and business specialists.",
      info: "+91 98700 12345",
      // color: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Send us your queries and our team will respond quickly.",
      info: "support@tarsai.in",
      // color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office Location",
      description: "Visit our corporate office for demos, presentations & meetings.",
      info: "Nagpur, Maharashtra, India",
      // color: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Working Hours",
      description: "We are available all week.",
      info: "Mon – Sun: 10:00 AM – 7:00 PM",
      // color: "from-orange-500 to-red-500"
    }
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
        }`} style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Connect With Us
          </h2>
          <div className={`h-1 w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>
        </div>

        {/* Content Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12">
          {/* Left Side - Form (animate from left) */}
          <div 
            className={`p-6 sm:p-8 rounded-2xl transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-purple-500/50'
                : 'bg-white border border-gray-200 shadow-xl hover:border-purple-400'
            } backdrop-blur-sm ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6 cursor-pointer">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                }`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* Your Message */}
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                }`}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Info (animate from right) */}
          <div className={`space-y-6 transition-all duration-1000 ease-out cursor-pointer ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'
          }`}>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-500 transform hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-2 rounded-lg">
                    <div className={`${theme === 'dark' ? 'text-purple-400' : 'text-black'}`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 cursor-pointer">
                    <h3 className={`text-lg font-normal mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-black/70'
                    }`}>
                      {item.description}
                    </p>
                    <p className={`text-base font-medium ${
                      theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {item.info}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;


