import React from 'react'
import WhatWeDo from '../components/WhatWeDo'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OurCoreValues from '../components/OurCoreValues'
import AboutUs from '../components/AboutUs'
import Future from '../components/Future';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
      <Navbar/>
      <AboutUs/>
      <WhatWeDo/>
      <OurCoreValues/>
      <Future/>
      <Footer/>
    </div>
  )
}

export default About
