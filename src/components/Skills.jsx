import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiExpress,
  SiRedux,
  SiPython
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="w-full h-full" />, color: "text-[#E34F26]" },
    { name: "CSS3", icon: <SiCss3 className="w-full h-full" />, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: <SiJavascript className="w-full h-full" />, color: "text-[#F7DF1E]" },
    { name: "React", icon: <SiReact className="w-full h-full" />, color: "text-[#61DAFB]" },
    { name: "Redux", icon: <SiRedux className="w-full h-full" />, color: "text-[#764ABC]" },
    { name: "Node.js", icon: <SiNodedotjs className="w-full h-full" />, color: "text-[#339933]" },
    { name: "Express", icon: <SiExpress className="w-full h-full" />, color: "text-gray-900 " },
    { name: "Python", icon: <SiPython className="w-full h-full" />, color: "text-[#3776AB]" },
    { name: "MongoDB", icon: <SiMongodb className="w-full h-full" />, color: "text-[#47A248]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-full h-full" />, color: "text-[#38B2AC]" },
    { name: "Git", icon: <SiGit className="w-full h-full" />, color: "text-[#F05032]" },
    { name: "GitHub", icon: <SiGithub className="w-full h-full" />, color: "text-gray-900 " },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

return (
    <section id="skills" className="py-16   bg-gradient-to-b from-[#c5c8cb] to-[#e3e9f0]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-[72px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            My <span className="text-pink-500">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 ${skill.color} transition-transform group-hover:scale-110`}>
                {skill.icon}
              </div>
              <p className="text-sm sm:text-base md:text-lg font-medium text-black text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Progress Bars Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 mx-auto bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100 max-w-full md:max-w-4xl"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
            My Expertise Levels
          </h3>
          {[
            { name: "Frontend Development", level: 90, color: "from-blue-500 to-indigo-600" },
            { name: "Backend Development", level: 85, color: "from-purple-500 to-pink-600" },
            { name: "Database Management", level: 80, color: "from-emerald-500 to-teal-600" },
            { name: "DevOps & Tools", level: 75, color: "from-amber-500 to-orange-600" },
          ].map((item, index) => (
            <div key={index} className="mb-4 md:mb-6">
              <div className="flex justify-between mb-1 md:mb-2">
                <span className="text-sm md:text-base font-medium">{item.name}</span>
                <span className="text-sm md:text-base font-medium">{item.level}%</span>
              </div>
              <div className="w-full rounded-full h-2 md:h-2.5 bg-gray-200">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;