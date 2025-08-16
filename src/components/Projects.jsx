import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import HkCompany from "../assets/hkcompany.png"

const Projects = () => {
  const projects = [
  {
  title: "Hong Kong Company fromation",
  description: "A multilingual platform automating company registration in Hong Kong, featuring document generation, payment processing, and a client management dashboard.",
  tags: ["React", "Node.js", "MongoDB", "Stripe", "i18n"],
  live: "http://ouvrir-societe-hong-kong.fr/",
  image: HkCompany, 
},
    {
      title: "Task Management App",
      description: "Productivity application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard with data visualization, user management, and customizable reporting features.",
      tags: ["Next.js", "TypeScript", "Chart.js", "MongoDB"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[72px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl  max-w-3xl mx-auto">
            Here are some of my featured works. Each project was built to solve real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white  rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t  to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                  
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
                        aria-label="Live demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold  mb-2">{project.title}</h3>
                <p className=" mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;