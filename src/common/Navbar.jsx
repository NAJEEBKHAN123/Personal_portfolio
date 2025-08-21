import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId, event) => {
    // Prevent default anchor behavior
    if (event) event.preventDefault();
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Special handling for home section - scroll to top
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      
      // Update URL without causing a page reload
      window.history.pushState(null, null, `#`);
      return;
    }
    
    // Get the element to scroll to for other sections
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the position to scroll to (accounting for fixed navbar)
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      // Smooth scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL without causing a page reload
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  // Handle initial page load with hash in URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        if (hash === 'home') {
          scrollToSection('home');
        } else {
          const element = document.getElementById(hash);
          if (element) {
            setTimeout(() => {
              const navbarHeight = document.querySelector('nav').offsetHeight;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }, 100);
          }
        }
      }
    };

    // Run on initial load if there's a hash
    handleHashChange();

    // Also handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection
      
      // Special case for home section (top of page)
      if (scrollPosition < 200) {
        setActiveSection('home');
        return;
      }
      
      for (const section of sections) {
        if (section === 'home') continue; // Skip home as we already handled it
        
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-3 sm:px-6 lg:px-[72px]">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection('home', e)}
          className="text-xl font-bold text-gray-800 hover:text-pink-500 transition-colors md:flex-1"
        >
          Najeeb<span className="text-pink-500">pro</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-4 lg:space-x-8 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(link.id, e)}
                  className={`hover:text-pink-500 transition-colors duration-300 px-1 py-2 ${
                    activeSection === link.id ? 'text-pink-500 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </a>
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
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className={`block text-xl py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${
                      activeSection === link.id ? 'bg-gray-100 text-pink-500 font-semibold' : ''
                    }`}
                  >
                    {link.label}
                  </a>
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