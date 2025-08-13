import React from "react";
import profileImg from "../assets/me.jpg"; // update path if needed
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="bg-[#f4f5f6] py-16">
      <div className="container mx-auto px-6 md:px-6 lg:px-0 xl:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="px-8 lg:px-10 flex pt-10  justify-center">
          <img
            src={profileImg}
            alt="About Me"
            className="shadow-lg w-72 md:w-72"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Who I Am?</h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Hi, I'm{" "}
            <span className="font-semibold text-indigo-600">Najeeb Ullah</span>,
            a passionate MERN Stack Developer with a strong foundation in
            creating responsive, dynamic, and user-friendly web applications. I
            enjoy turning complex problems into simple, beautiful solutions.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I specialize in{" "}
            <span className="text-blue-600">
              React.js, Node.js, Express, and MongoDB
            </span>
            , and I’m always eager to learn new technologies to improve my
            skills. My goal is to build products that not only work flawlessly
            but also create a delightful user experience.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="
      px-8 py-3.5 
      text-base font-medium 
      bg-gradient-to-r from-indigo-600 to-purple-600 
      text-white 
      rounded-xl 
      shadow-lg hover:shadow-xl 
      transform hover:-translate-y-1 
      transition-all duration-300
      hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-700
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      sm:px-10 sm:py-4 sm:text-lg
      md:px-8 md:py-3.5 md:text-base
    "
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
