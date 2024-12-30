import React from 'react'
import { GiCoffeeCup } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    // <footer className='flex flex-col justify-between items-center bg-black text-white p-8 mt-12'>
    //   <div className='text-center md:te'>
    //   <GiCoffeeCup className='text-4xl pb-2'/> 
    //   <h2>Coffee Shop</h2>
    //   </div>
    //   <div>
    //     <p className='font-semibold text-2xl'>@ 2024 Coffee Shop. All rights reserved. </p>
    //     <GiCoffeeCup className='text-4xl pb-2'/> 
    //   </div>
    // </footer>
    <footer className="bg-black text-white p-8 mt-12 ">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Logo and description section */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <GiCoffeeCup className="text-5xl pb-2 mx-auto md:mx-0 hover:text-yellow-400 transition-all duration-300" />
        <p className="font-semibold text-xl">Coffee Shop</p>
        <p className="text-gray-400 mt-2 max-w-xs mx-auto md:mx-0">
          Freshly brewed coffee to fuel your day. Come visit us or order online.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-yellow-400 transition-all duration-300">Home</a></li>
          <li><a href="/menu" className="hover:text-yellow-400 transition-all duration-300">Menu</a></li>
          <li><a href="/about" className="hover:text-yellow-400 transition-all duration-300">About Us</a></li>
          <li><a href="/contact" className="hover:text-yellow-400 transition-all duration-300">Contact</a></li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-6 md:mt-0">
        <a href="https://facebook.com" className="text-2xl hover:text-yellow-400 transition-all duration-300">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" className="text-2xl hover:text-yellow-400 transition-all duration-300">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" className="text-2xl hover:text-yellow-400 transition-all duration-300">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" className="text-2xl hover:text-yellow-400 transition-all duration-300">
          <FaLinkedin />
        </a>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="text-center mt-8 text-gray-400">
      <p className="font-semibold text-lg">© 2024 Coffee Shop. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer