import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer",
      organization: "Freelance",
      period: "2023 - Present",
      description: "Developing full-stack applications for clients using MongoDB, Express, React, and Node.js. Currently building business solutions for international clients.",
      icon: <FaBriefcase className="text-indigo-600" />,
      current: true,
      projects: [
        {
          name: "Company Formation Portal",
          url: "https://ouvrir-societe-hong-kong.fr/",
          description: "Developed a complete business solution for company registration in Hong Kong"
        },
        {
          name: "Hydroline (In Progress)",
          description: "Building an advanced business services platform for the same client"
        }
      ]
    },
    {
      title: "BS Information Technology",
      organization: "Agriculture University Peshawar",
      period: "2023 - Present (5th Semester)",
      description: "Currently pursuing bachelor's degree with focus on web development and database systems.",
      icon: <FaUniversity className="text-green-500" />,
      current: true
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800  mb-4">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">& Current Work</span>
          </h2>
          <p className="text-xl text-gray-600  max-w-3xl mx-auto">
            Education and professional development path
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative pl-12"
            >
              {/* Current indicator */}
              {exp.current && (
                <span className="absolute top-0 right-0 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Current
                </span>
              )}

              {/* Icon */}
              <div className="absolute top-0 left-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-4 border-indigo-500 z-10">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="bg-white  p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 ">{exp.title}</h3>
                <div className="flex items-center flex-wrap gap-x-4 mt-1">
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.organization}</span>
                  <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="mt-3">{exp.description}</p>

                {/* Projects */}
                {exp.projects && (
                  <div className="mt-4 space-y-3">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="pl-4 border-l-2 border-indigo-200 dark:border-indigo-800">
                        <div className="flex items-center">
                          <FaLaptopCode className="text-gray-500 mr-2 flex-shrink-0" />
                          <span className="font-medium">
                            {project.name}
                          </span>
                          {project.url && (
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                              <FiExternalLink className="inline" />
                            </a>
                          )}
                        </div>
                        <p className="text-sm  mt-1 pl-6">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 bg-white  rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold  mb-6 text-center">
            My Current Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "React.js", since: "2023" },
              { name: "Node.js", since: "2024" },
              { name: "Express.js", since: "2024" },
              { name: "MongoDB", since: "2024" },
              { name: "Tailwind CSS", since: "2023" },
              { name: "Git/GitHub", since: "2023" },
              { name: "JavaScript (ES6+)", since: "2023" },
              { name: "HTML5/CSS3", since: "2022" }
            ].map((tech, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className=" font-medium">{tech.name}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Since {tech.since}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;