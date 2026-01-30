import React, { useState, useRef, useEffect } from 'react'

import { Link } from "react-router-dom";


import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeProvider'


const ChevronDown = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const Sun = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const Moon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

const Navbar = () => {
  const [solutionOpen, setSolutionOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [solutionPersist, setSolutionPersist] = useState(false)
  const [servicesPersist, setServicesPersist] = useState(false)
  const [productPersist, setProductPersist] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false)
  const solutionsRef = useRef(null)
  const servicesRef = useRef(null)
  const productRef = useRef(null)

  // Use global theme from context
  const { theme, toggleTheme } = useTheme()


  useEffect(() => {
    function handleClick(e) {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setSolutionOpen(false)
        setSolutionPersist(false)
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false)
        setServicesPersist(false)
      }
      if (productRef.current && !productRef.current.contains(e.target)) {
        setProductOpen(false)
        setProductPersist(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <nav className={`${theme === 'dark' ? "bg-gradient-to-r from-purple-1000 via-[#220e3b] to-purple-1000"
      : "bg-white"} w-full sticky top-0 z-50 shadow-sm`}>
      <div className="container mx-auto px-2 sm:px-4 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-1 sm:ml-4 lg:ml-20 h-full">
          <img src="/logo.png" alt="Tars.Ai Logo" className="h-12 w-12 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain max-h-full" />
          {/* <span className="text-white text-xl font-semibold">Tars.Ai</span> */}
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-1.5 sm:p-2 focus:outline-none ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mr-1 sm:mr-0`}
          aria-label="Toggle menu"
        >
          <svg className="h-7 w-7 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links - Centered */}
        <div className="hidden lg:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">

          {/* Home */}

          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'} ${isActive ? 'font-semibold' : ''}`}>
            Home
          </NavLink>


          {/* Product Dropdown */}
          <div
            ref={productRef}
            className="relative"
            onMouseEnter={() => {
              setServicesOpen(false)
              setServicesPersist(false)
              setSolutionOpen(false)
              setSolutionPersist(false)
              if (!productPersist) setProductOpen(true)
            }}
            onMouseLeave={() => { if (!productPersist) setProductOpen(false) }}
          >
            <button
              onClick={() => {
                setProductPersist(prev => {
                  const next = !prev
                  setProductOpen(next)
                  return next
                })
              }}
              className={`flex items-center gap-1 transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}
              aria-expanded={productOpen}
              aria-haspopup="true"
            >
              Product
              <ChevronDown />
            </button>

            {productOpen && (
              <div className={`absolute left-0 mt-1 w-80 ${theme === 'dark' ? 'bg-[#081018] rounded-lg shadow-lg border border-gray-800 p-4' : 'bg-white rounded-lg shadow-lg border border-gray-200 p-4 ring-1 ring-gray-100 transition-shadow duration-150'} z-50`}>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/products/accord-ai"
                    onClick={() => {
                      setProductOpen(false);
                      setProductPersist(false);
                    }}
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'
                      }`}
                  >
                    <svg
                      className="h-6 w-6 text-indigo-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Accord AI
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Smart agreements
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/products/ragnetic-ai"
                    className={`flex items-start gap-3 p-2 rounded ${theme === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-100"
                      }`}
                  >
                    <svg
                      className="h-6 w-6 text-pink-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === "dark" ? "text-white" : "text-gray-900"} font-medium`}>
                        Ragnetic AI
                      </div>
                      <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm`}>
                        Retrieval augmented
                      </div>
                    </div>
                  </Link>


                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-teal-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        DocShift AI
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Document processing
                      </div>
                    </div>
                  </button>


                  <Link
                    to="/products/3d-virtual-bot"
                    className={`flex items-start gap-3 p-2 rounded transition-colors ${theme === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-100"
                      }`}
                  >
                    <svg
                      className="h-6 w-6 text-emerald-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                      />
                    </svg>

                    <div>
                      <div
                        className={`font-medium ${theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                      >
                        3D Virtual Bot
                      </div>
                      <div
                        className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                      >
                        Interactive avatars
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => {
              setProductOpen(false)
              setProductPersist(false)
              setSolutionOpen(false)
              setSolutionPersist(false)
              if (!servicesPersist) setServicesOpen(true)
            }}
            onMouseLeave={() => { if (!servicesPersist) setServicesOpen(false) }}
          >
            <button
              onClick={() => {
                setServicesPersist(prev => {
                  const next = !prev
                  setServicesOpen(next)
                  return next
                })
              }}
              className={`flex items-center gap-1 transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown />
            </button>

            {servicesOpen && (
              <div className={`absolute left-0 mt-1 w-96 ${theme === 'dark' ? 'bg-[#081018] rounded-lg shadow-lg border border-gray-800 p-4' : 'bg-white rounded-lg shadow-sm border border-gray-200 p-4'} z-50`}>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 1v6m0 6v6m8.66-15L17 7.34M12 12l-3.66 3.66M23 12h-6m-6 0H1m20.66 8.66L17 16.34M12 12l-3.66-3.66"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        AI &amp; LLM Modules
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Advanced AI solutions
                      </div>
                    </div>
                  </button>


                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-green-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Chatbots
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Intelligent conversations
                      </div>
                    </div>
                  </button>


                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Blockchain &amp; QuantumCrypto
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Next-gen security
                      </div>
                    </div>
                  </button>


                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-red-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Cybersecurity
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Protection &amp; defense
                      </div>
                    </div>
                  </button>


                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-orange-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Automation
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Streamline workflows
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Managed Services
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        End-to-end support
                      </div>
                    </div>
                  </button>

                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            ref={solutionsRef}
            className="relative"
            onMouseEnter={() => {
              setProductOpen(false)
              setProductPersist(false)
              setServicesOpen(false)
              setServicesPersist(false)
              if (!solutionPersist) setSolutionOpen(true)
            }}
            onMouseLeave={() => { if (!solutionPersist) setSolutionOpen(false) }}
          >
            <button
              onClick={() => {
                setSolutionPersist(prev => {
                  const next = !prev
                  setSolutionOpen(next)
                  return next
                })
              }}
              className={`flex items-center gap-1 transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}
              aria-expanded={solutionOpen}
              aria-haspopup="true"
            >
              Solutions
              <ChevronDown />
            </button>

            {solutionOpen && (
              <div className={`absolute left-0 mt-1 w-80 ${theme === 'dark' ? 'bg-[#081018] rounded-lg shadow-lg border border-gray-800 p-4' : 'bg-white rounded-lg shadow-sm border border-gray-200 p-4'} z-50`}>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/solutions/finance"
                    className={`flex items-start gap-3 p-2 rounded transition
    ${theme === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-100"}
  `}
                  >
                    {/* Icon */}
                    <svg
                      className="h-6 w-6 text-pink-400 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12h18M3 6h18M3 18h18"
                      />
                    </svg>

                    {/* Text */}
                    <div>
                      <div
                        className={`font-medium ${theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                      >
                        Finance
                      </div>
                      <div
                        className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                      >
                        Banking & fintech
                      </div>
                    </div>
                  </Link>


                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="8" r="3" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 20c1-4 7-4 8-4s7 0 8 4"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Healthcare
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Medical & life sciences
                      </div>
                    </div>
                  </button>


                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Retail &amp; E-commerce
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Shops &amp; marketplaces
                      </div>
                    </div>
                  </button>


                  <button
                    type="button"
                    className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                  >
                    <svg
                      className="h-6 w-6 text-amber-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7h16M4 12h16M4 17h16"
                      />
                    </svg>

                    <div>
                      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                        Government
                      </div>
                      <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        Public sector
                      </div>
                    </div>
                  </button>

                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'} ${isActive ? 'font-semibold ' : ''}`}>

            About
          </NavLink>
          <a href="/contact" className={`transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}>
            Contact
          </a>

        </div>

        {/* Right-side: Theme Toggle (visible on lg+) */}
        <div className="hidden lg:flex items-center mr-4 lg:mr-20">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className={`${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-200'} p-2 rounded focus:outline-none`}
          >
            {theme === 'dark' ? <Moon /> : <Sun />}
          </button>
        </div>

        {/* Mobile Menu - Side Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Drawer (Left) */}
            <div className={`fixed top-0 left-0 h-full w-80 ${theme === 'dark' ? 'bg-[#0c0c0c]' : 'bg-white'} z-50 lg:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out`}>
              <div className="px-6 py-6 space-y-4">
                {/* Close Button */}
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2 rounded-lg ${theme === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-100'} focus:outline-none`}
                    aria-label="Close menu"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>



                <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={`block py-3 text-lg ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}>Home</NavLink>
                <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={`block py-3 text-lg ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}>About</NavLink>

                {/* Product Mobile Dropdown (with icons) */}
                <div className=" pb-2">
                  <button
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                    className={`flex items-center justify-between w-full transition-colors py-3 text-lg ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}
                  >
                    <span>Product</span>
                    <ChevronDown />
                  </button>
                  {mobileProductOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link
                        to="/products/accord-ai"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-indigo-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Accord AI
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Smart agreements
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/products/ragnetic-ai"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-pink-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Ragnetic AI
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Retrieval augmented
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/products/docshift-ai"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-teal-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            DocShift AI
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Document processing
                          </div>
                        </div>
                      </Link>


                      <Link
                        to="/products/3d-virtual-bot"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-emerald-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            3D Virtual Bot
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Interactive avatars
                          </div>
                        </div>
                      </Link>

                    </div>
                  )}
                </div>

                {/* Services Mobile Dropdown (with icons) */}
                <div className=" pb-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-between w-full transition-colors py-3 text-lg ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}
                  >
                    <span>Services</span>
                    <ChevronDown />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link
                        to="/services/ai-llm-modules"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-blue-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 1v6m0 6v6m8.66-15L17 7.34M12 12l-3.66 3.66M23 12h-6m-6 0H1m20.66 8.66L17 16.34M12 12l-3.66-3.66"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            AI & LLM Modules
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Advanced AI solutions
                          </div>
                        </div>
                      </Link>


                      <Link
                        to="/services/chatbots"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-green-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Chatbots
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Intelligent conversations
                          </div>
                        </div>
                      </Link>


                      <Link
                        to="/services/blockchain-quantumcrypto"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-purple-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <rect x="3" y="3" width="7" height="7" />
                          <rect x="14" y="3" width="7" height="7" />
                          <rect x="3" y="14" width="7" height="7" />
                          <rect x="14" y="14" width="7" height="7" />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Blockchain & QuantumCrypto
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Next-gen security
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/services/cybersecurity"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-red-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Cybersecurity
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Protection & defense
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/services/automation"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-orange-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Automation
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Streamline workflows
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/services/managed-services"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-cyan-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Managed Services
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            End-to-end support
                          </div>
                        </div>
                      </Link>

                    </div>
                  )}
                </div>

                {/* Solutions Mobile Dropdown (with icons) */}
                <div className=" pb-2">
                  <button
                    onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
                    className={`flex items-center justify-between w-full transition-colors py-3 text-lg ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}`}
                  >
                    <span>Solutions</span>
                    <ChevronDown />
                  </button>
                  {mobileSolutionOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link
                        to="/solutions/finance"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-pink-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12h18M3 6h18M3 18h18"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Finance
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Banking & fintech
                          </div>
                        </div>
                      </Link>


                      <Link
                        to="/solutions/healthcare"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-purple-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="12" cy="8" r="3" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 20c1-4 7-4 8-4s7 0 8 4"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Healthcare
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Medical & life sciences
                          </div>
                        </div>
                      </Link>


                      <Link
                        to="/solutions/retail-ecommerce"
                        className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                      >
                        <svg
                          className="h-6 w-6 text-cyan-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <rect x="3" y="3" width="7" height="7" />
                          <rect x="14" y="3" width="7" height="7" />
                          <rect x="3" y="14" width="7" height="7" />
                          <rect x="14" y="14" width="7" height="7" />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Retail & E-commerce
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Shops & marketplaces
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/government"
                        className="flex items-start gap-3 p-2 rounded hover:bg-gray-900"
                      >
                        <svg
                          className="h-6 w-6 text-amber-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 7h16M4 12h16M4 17h16"
                          />
                        </svg>

                        <div>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
                            Government
                          </div>
                          <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                            Public sector
                          </div>
                        </div>
                      </Link>

                    </div>
                  )}
                </div>

                <NavLink
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-lg ${theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-800 hover:text-black"
                    }`}
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-lg ${theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-800 hover:text-black"
                    }`}
                >
                  Contact
                </NavLink>


                {/* Mobile/Tablet Theme Toggle (below Contact) */}
                <div className={`mt-4 pt-4 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                  <button
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    className={`w-full flex items-center justify-center gap-2 py-2 rounded ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-200'}`}
                  >
                    {theme === 'dark' ? <Moon /> : <Sun />}
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar