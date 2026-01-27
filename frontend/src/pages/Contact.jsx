import React from 'react'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs';
import Message from '../components/Message';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
        <Navbar/>
      <ContactUs/>
      <Message/>
      <Footer/>
    </div>
  )
}

export default Contact
