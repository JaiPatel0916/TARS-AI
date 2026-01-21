import React from 'react'
import { useTheme } from '../context/ThemeProvider'

const Footer = () => {
  const { theme } = useTheme()
  
  return (
    <footer className="bg-white text-gray-900 dark:bg-[#0c0c0c] dark:text-white transition-colors duration-150">
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        
        {/* Top Section: Logo + Heading with Buttons */}
        <div className="mb-8 sm:mb-12">
          {/* Logo */}
          <img src="/logo.png" alt="Tars.Ai Logo" className="h-12 w-18 sm:h-16 sm:w-22 lg:h-18 lg:w-30  mb-4 sm:mb-6" />
          
          {/* Heading + Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
            <h2 className="text-lg sm:text-2xl md:text-3xl  lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight flex-1">
              Ready to Build Intelligent, Sustainable &amp; Secure AI Systems?
            </h2>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 flex-shrink-0 w-full sm:w-auto">
              <a href="#contact" className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-center text-xs sm:text-base shadow-md transition-colors">
                Talk to Our Team
              </a>
              <a href="#request-demo" className="inline-flex items-center justify-center border-2 border-pink-500 text-pink-500 dark:text-pink-400 hover:bg-pink-500 hover:text-white dark:hover:text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-center text-xs sm:text-base transition-colors">
                Request a Demo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
          <div>
            <h4 className="text-xs sm:text-sm font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Products</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors ">Accord AI</a></li>
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Regatic AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Company</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Resources</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer