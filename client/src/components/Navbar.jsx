import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import { GiCoffeeCup } from "react-icons/gi";

const Navbar = () => {
  const linkClass = ({ isActive}) => 
    isActive 
    ? "px-4 py-3 inline-block no-underline hover:scale-105 text-yellow-500"
    : "px-4 py-3 text-white inline-block no-underline hover:scale-105" ;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const isToggle = () => setIsMenuOpen(!isMenuOpen);
  

  return (
    <nav className='bg-black p-3 text-white'>
        <div className='max-w-7x1 mx-auto flex justify-between items-center'>
          <div className='flex'>
          <NavLink to="/" className='text-2xl font-bold text-white  no-underline'>Coffee Shop</NavLink>
          <GiCoffeeCup className='text-4xl pb-1 hover:scale-125'/>
          </div>

          <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

          <div className='hidden lg:flex'>
            <NavLink className={linkClass} to="/">Home</NavLink>
            <NavLink className={linkClass}  to="/menu">Menu</NavLink>
            <NavLink className={linkClass} to="/about">About</NavLink>
            <NavLink className={linkClass} to="/contact">Contact</NavLink>
            <NavLink className={linkClass} to="/gallery">Gallery</NavLink>
          </div>
        </div>

        {isMenuOpen && (
        <div className="lg:hidden flex flex-col mt-4 space-y-2">
          <NavLink className={linkClass} to="/">Home</NavLink>
          <NavLink className={linkClass} to="/menu">Menu</NavLink>
          <NavLink className={linkClass} to="/about">About</NavLink>
          <NavLink className={linkClass} to="/contact">Contact</NavLink>
          <NavLink className={linkClass} to="/gallery">Gallery</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar


