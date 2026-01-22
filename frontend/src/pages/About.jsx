import React from 'react'
import WhatWeDo from '../components/WhatWeDo'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
      <Navbar/>
      <WhatWeDo/>
      <Footer/>
    </div>
  )
}

export default About
