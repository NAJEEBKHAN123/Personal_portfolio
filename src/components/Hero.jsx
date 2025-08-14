import React from "react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import profileImg from "../assets/me.jpg";

function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techIcons = [
    { 
      icon: <SiMongodb size="100%" className="text-[#47A248]" />, 
      name: "MongoDB",
      color: "hover:text-[#47A248]"
    },
    { 
      icon: <SiExpress size="100%" className="text-gray-800" />, 
      name: "Express",
      color: "hover:text-gray-800"
    },
    { 
      icon: <FaReact size="100%" className="text-[#61DAFB]" />, 
      name: "React",
      color: "hover:text-[#61DAFB]"
    },
    { 
      icon: <FaNodeJs size="100%" className="text-[#339933]" />, 
      name: "Node.js",
      color: "hover:text-[#339933]"
    },
   
   
  ];

  const socialIcons = [
    { icon: <FaFacebook />, color: "hover:text-[#3b5998]", name: "Facebook", url: "#" },
    { icon: <FaInstagram />, color: "hover:text-[#E1306C]", name: "Instagram", url: "#" },
    { icon: <FaLinkedin />, color: "hover:text-[#0077B5]", name: "LinkedIn", url: "#" },
    { icon: <FaGithub />, color: "hover:text-[#333]", name: "GitHub", url: "#" }
  ];

  return (
    <section className="bg-gradient-to-br from-[#eff1f3] via-[#f1f5f9] to-[#e2e8f0] min-h-screen flex items-center pt-16 md:pt-20 px-4 sm:px-6  lg:px-[72px] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto flex flex-col-reverse justify-center md:flex-row items-center gap-8 md:gap-6 lg:gap-12 xl:gap-16 pt-3 relative z-10">
        {/* Left Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 text-center md:text-left md:pr-4 lg:pr-0"
        >
          <motion.p 
            variants={fadeIn}
            className="uppercase tracking-wider text-gray-500 text-xs sm:text-sm md:text-[0.95rem] font-medium"
          >
            Welcome to my portfolio
          </motion.p>
          
          <motion.h1 
            variants={fadeIn}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-[1.5rem] lg:text-4xl xl:text-[3rem] font-bold mt-3 sm:mt-4 leading-tight md:leading-[1.2] lg:leading-[1.3]"
          >
            Hi, I'm <span className="text-gray-900 font-extrabold">Najeeb Ullah</span> <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">a MERN Stack</span>{" "}
            <span className="text-gray-900 font-extrabold">Developer</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="mt-5 sm:mt-6 md:mt-7 text-gray-600 text-lg sm:text-xl md:text-[1.1rem] max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            I specialize in building modern, scalable web applications using MongoDB, Express, React, and Node.js. Passionate about creating intuitive user experiences with clean, efficient code.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeIn} className="mt-8 sm:mt-10">
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Social & Skills Container */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start sm:gap-10 md:gap-8 lg:gap-14 pb-8 mt-12 sm:mt-14 md:mt-8 md:pb-16"
          >
            {/* Social Icons */}
            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold mb-3 sm:mb-4 text-gray-700 text-sm sm:text-base md:text-[0.95rem]">Connect With Me</p>
              <div className="flex space-x-5 sm:space-x-6 text-gray-600 text-2xl sm:text-2xl">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className={`transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold mb-3 sm:mb-4 text-gray-700 text-sm sm:text-base md:text-[0.95rem]">Tech Stack</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`w-12 h-12 sm:w-7 sm:h-7 md:h-5 md:w-5 lg:h-7 lg:w-7 bg-white rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 ${tech.color} group`}
                    title={tech.name}
                  >
                    <div className="w-7 h-7 sm:w-6 sm:h-6 transition-transform group-hover:scale-110">
                      {tech.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex  mt-8 md:mt-[-70px] md:justify-end relative w-full max-w-xs"
        >
          <div className="relative w-full">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-2xl shadow-xl w-auto object-contain z-10 relative border-4 border-white"
            />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full rounded-2xl border-4 border-pink-400 z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;