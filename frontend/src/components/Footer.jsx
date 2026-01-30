import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme()
  return (
    <footer className={`${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-pink-50 text-black'} transition-colors duration-150 relative overflow-hidden`}>
      {/* Background Company Name */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-40">
        <div className={`text-[6rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] font-extrabold whitespace-nowrap tracking-wide select-none pointer-events-none ${theme === 'dark' ? 'text-gray-200/10 dark:text-gray-200/6' : 'text-gray-300/40'}` }>
          TARS AI
        </div>
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Top CTA */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${theme === 'dark' ? 'text-gray-500' : 'text-black'}`}>
            Ready to Build Intelligent, Sustainable &amp; Secure AI Systems?
          </h2>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-6 sm:mt-8 lg:mt-16 ">
          {/* Company */}
          <div className="space-y-4 col-span-2 sm:col-span-2 lg:col-span-2 ">
            {/* <h3 className={`flex items-center gap-3 text-lg font-medium relative z-20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <img
                src="/logo.png"
                alt="TARS AI Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-18 md:w-18 lg:h-20 lg:w-20 object-contain -mt-1"
              />
            </h3> */}
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm font-bold/300 mt-2`}>
             <span className="text-pink-700 font-bold"> TARS  AI</span> delivers innovative AI solutions that help organizations
              streamline operations, improve performance, and drive sustainable
              growth.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-3">
              <a
                href="#contact"
                aria-label="Talk to Our Team"
                className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white text-xs sm:text-sm font-semibold py-2 sm:py-3 px-3 sm:px-6 rounded-xl shadow-2xl transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-pink-300 w-full sm:w-auto"
              >
                Talk to Our Team
              </a>
              <a
                href="#request-demo"
                aria-label="Request a Demo"
                className="inline-flex items-center justify-center border-2 border-pink-500 text-pink-500 bg-white/6 hover:bg-pink-50 text-xs sm:text-sm font-semibold py-2 sm:py-3 px-3 sm:px-6 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-pink-200 w-full sm:w-auto"
              >
                Request a Demo
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className={`text-sm font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Products</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} text-sm`}>
              <li>
                <a href="#accord-ai" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Accord AI
                </a>
              </li>
              <li>
                <a href="#ragnetic-ai" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Ragnetic AI
                </a>
              </li>
              <li>
                <a href="#docshift-ai" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  DocShift AI
                </a>
              </li>
              <li>
                <a href="#3d-virtual-bot" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  3D Virtual Bot
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-sm font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Services</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} text-sm`}>
              <li>
                <a href="#ai-llm" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  AI &amp; LLM Modules
                </a>
              </li>
              <li>
                <a href="#chatbots" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Chatbots
                </a>
              </li>
              <li>
                <a href="#blockchain" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#cybersecurity" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#automation" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Automation
                </a>
              </li>
              <li>
                <a href="#managed-services" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Managed Services
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className={`text-sm font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Solutions</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} text-sm`}>
              <li>
                <a href="#finance" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Finance
                </a>
              </li>
              <li>
                <a href="#healthcare" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#retail" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Retail &amp; E-commerce
                </a>
              </li>
              <li>
                <a href="#government" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  Government
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="cursor-pointer sm:pl-0 pl-2">
            <h4 className={`text-sm font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contact Us</h4>
            <ul className={`${theme === 'dark' ? 'space-y-3 text-gray-300' : 'space-y-3 text-gray-700'} text-sm`}>
              <li className="flex items-start gap-3">
                <span className="p-1.5 rounded-full bg-purple-600/10 text-purple-400 inline-flex items-center justify-center border border-purple-400/20">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:info@tars.ai" className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  info@tars.ai
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1.5 rounded-full bg-purple-600/10 text-purple-400 inline-flex items-center justify-center border border-purple-400/20">
                  <Phone className="h-4 w-4" />
                </span>
                <span className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-pink-600'}`}>
                  +91-4587963251
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1.5 rounded-full bg-purple-600/10 text-purple-400 inline-flex items-center justify-center border border-purple-400/20">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block sm:inline">Dharampeth, Nagpur</span>
                  <span className="block sm:inline sm:ml-1">441236</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      
      {/* Follow Us Icons */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <a
          href="#"
          aria-label="Facebook"
          className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-purple-600/10 text-purple-400' : 'bg-purple-400/60 text-purple-900'} inline-flex items-center justify-center border border-purple-400/20 hover:text-pink-600`}
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-purple-600/10 text-purple-400' : 'bg-purple-400/60 text-purple-900'} inline-flex items-center justify-center border border-purple-400/20 hover:text-pink-600`}
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-purple-600/10 text-purple-400' : 'bg-purple-400/60 text-purple-900'} inline-flex items-center justify-center border border-purple-400/20 hover:text-pink-600`}
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-purple-600/10 text-purple-400' : 'bg-purple-400/60 text-purple-900'}  inline-flex items-center justify-center border border-purple-400/20 hover:text-pink-600`}
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
      
      {/* Divider & bottom */}
      <div className={`mt-8 border-t ${theme === 'dark' ? 'border-gray-400/10' : 'border-black'} pt-6 pb-6 mx-16`}>
        <p className={`text-center text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2026 TARS AI. All rights reserved.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
