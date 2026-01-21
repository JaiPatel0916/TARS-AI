import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 dark:bg-[#0c0c0c] dark:text-white transition-colors duration-150">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        
        {/* Top Section: Logo + Heading with Buttons */}
        <div className="mb-12">
          {/* Logo */}
          <img src="/logo.png" alt="Tars.Ai Logo" className="h-16 w-36 lg:h-26 lg:w-40 mb-6 sm:w-26 sm:h-20" />
          
          {/* Heading + Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight flex-1">
              Ready to Build Intelligent, Sustainable &amp; <br/> Secure AI Systems?
            </h2>
            
            {/* Buttons */}
            <div className="flex gap-3 lg:gap-4 flex-shrink-0">
              <a href="#contact" className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg text-center shadow-md transition-colors whitespace-nowrap">
                Talk to Our Team
              </a>
              <a href="#request-demo" className="inline-flex items-center justify-center border-2 border-pink-500 text-pink-500 dark:text-pink-400 hover:bg-pink-500 hover:text-white dark:hover:text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors whitespace-nowrap">
                Request a Demo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900 dark:text-white">Products</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors ">Accord AI</a></li>
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Regatic AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900 dark:text-white">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-pink-600 dark:hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900 dark:text-white">Resources</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
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