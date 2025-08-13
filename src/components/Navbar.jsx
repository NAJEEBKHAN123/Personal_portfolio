import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-2 sm:px-4 md:px-8 lg:px-0 xl:px-[74px]">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors"
        >
          Najeeb <span className="text-pink-500">Ullah</span>
        </Link>

        {/* Desktop Nav Links */}   
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.path} 
                className="hover:text-pink-500 transition-colors duration-300 px-1 py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me Button */}
        <a
          href="mailto:najeebkhanlaku@gmail.com"
          className="hidden md:inline-block bg-pink-500 text-white px-4 py-2 lg:px-5 lg:py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 text-sm lg:text-base"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="block hover:text-pink-500 transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:najeebkhanlaku@gmail.com"
                  className="block bg-pink-500 text-white text-center px-4 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 mt-2"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;