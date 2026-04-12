import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { 
  FaAws, FaDocker, FaLinux, FaGithub, FaGitAlt, 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import { SiGithubactions, SiPostman, SiCplusplus, SiJavascript, SiGnubash, SiVercel } from 'react-icons/si';

const skillsData = [
  {
    category: "Cloud",
    skills: [
      { name: "AWS (EC2, S3)", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> }
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> }
    ]
  },
  {
    category: "OS",
    skills: [
      { name: "Linux (RHCSA)", icon: <FaLinux className="text-[#FCC624]" /> },
      { name: "Bash Scripting", icon: <SiGnubash className="text-[#4EAA25]" /> }
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "HTML & CSS", icon: <span className="flex gap-1"><FaHtml5 className="text-[#E34F26]"/><FaCss3Alt className="text-[#1572B6]"/></span> }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-darkBg relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with to build and deploy applications." 
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: index * 0.1 } }
              }}
              className="bg-cardBg rounded-2xl p-6 border border-slate-800 hover:border-primary/50 transition-colors shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center text-white border-b border-slate-700/50 pb-3">
                <span className="w-8 h-1 bg-primary rounded-full mr-3 inline-block"></span>
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    className="flex items-center gap-3 bg-darkBg p-3 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors group cursor-default"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
