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
      <div className="container mx-auto flex items-center justify-between py-4 px-3 sm:px-6 lg:px-[72px]">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-bold text-gray-800 hover:text-pink-500 transition-colors md:flex-1"
        >
          Najeeb<span className="text-pink-500">pro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-4 lg:space-x-8 text-gray-700 font-medium">
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
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end md:flex-1">
          {/* Desktop Hire Me Button */}
          <a
            href="mailto:najeebkhanlaku@gmail.com"
            className="hidden md:inline-block bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 text-sm shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>

          {/* Mobile Hire Me Button (only show on larger mobile screens) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden sm:block xs:hidden">
            <a
              href="mailto:najeebkhanlaku@gmail.com"
              className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 text-sm whitespace-nowrap shadow-md"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none "
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes size={22} className="text-pink-500" /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-300 z-40  px-6 overflow-y-auto" style={{ top: '4rem' }}>
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="block text-xl py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-8 mb-4">
                <a
                  href="mailto:najeebkhanlaku@gmail.com"
                  className="block bg-pink-500 text-white text-center px-4 py-3 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                  onClick={toggleMobileMenu}
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