import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { SiUpwork, SiFreelancer } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaCode className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              <h2 className="text-xl font-bold">
                Najeeb <span className="text-indigo-600 dark:text-indigo-400">Ullah</span>
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Crafting exceptional digital experiences with the MERN stack. Focused on clean code and user-centric solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:najeebkhanlaku@gmail.com"
                className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="https://upwork.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-green-500 transition-all duration-300"
                aria-label="Upwork"
              >
                <SiUpwork size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center group">
                <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                About
              </a></li>
              <li><a href="#skills" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center group">
                <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                Skills
              </a></li>
              <li><a href="#projects" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center group">
                <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                Projects
              </a></li>
              <li><a href="#contact" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center group">
                <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                Contact
              </a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Technologies</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">React.js</li>
              <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Node.js</li>
              <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Express.js</li>
              <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">MongoDB</li>
              <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Next.js</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-2 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                <a href="mailto:najeebkhanlaku@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  najeebkhanlaku@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>Peshawar, Pakistan</span>
              </li>
              <li className="flex items-start">
                <SiFreelancer className="mt-1 mr-2 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>Available for freelance work</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Najeeb Ullah. All rights reserved.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              <span>Made with ❤️ and React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;