import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCloud,
  FaServer,
  FaCode,
  FaTools,
  FaAws,
  FaGlobe,
  FaDocker,
  FaLinux,
  FaGithub,
  FaTerminal,
  FaJs,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFileAlt,
  FaCogs,
  FaLaptopCode,
  FaLayerGroup
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const categoryIcons = {
  'Cloud & Infrastructure': FaCloud,
  'DevOps & Automation': FaTerminal,
  'Development & Languages': FaCode,
  'Tools & Workflows': FaTools,
};

const skillIcons = {
  'AWS (EC2, S3, IAM)': FaAws,
  'CloudFront & Route53': FaCloud,
  'Cloud Native Basics': FaServer,
  'Vercel / Netlify': FaGlobe,
  'Virtual Machines (VMs)': FaServer,
  'Apache Web Server': FaServer,
  'Docker & Containers': FaDocker,
  'Docker Compose': FaDocker,
  'Linux Administration': FaLinux,
  'Red Hat (RHCSA concepts)': FaLinux,
  'GitHub Actions (CI/CD)': FaGithub,
  'Bash / Shell Scripting': FaTerminal,
  'JavaScript (ES6+)': FaJs,
  'React.js': FaReact,
  'HTML5 & CSS3': FaHtml5,
  'Node.js & Express': FaNodeJs,
  'C & C++ Programming': FaCode,
  'SQL & Databases': FaDatabase,
  'Git & GitHub': FaGitAlt,
  'Nginx Reverse Proxy': FaServer,
  'Postman / API Testing': FaCogs,
  'VS Code & Terminal': FaLaptopCode,
  'Command Line (CLI)': FaTerminal,
  'Canva / Documentation': FaFileAlt,
};

const levelColors = {
  Expert: 'bg-primary/20 text-primary-light border-primary/30',
  Advanced: 'bg-accentCyan/20 text-accentCyan border-accentCyan/30',
  Intermediate: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
};

const Skills = () => {
  return (
    <section id="skills" className="py-14 relative overflow-hidden bg-radial-grid">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Technical Skills Matrix"
          title="Core Technologies &"
          highlight="Proficiency Spectrum"
          subtitle="Comprehensive overview of programming languages, frameworks, cloud tools, databases, and DevOps practices."
        />

        {/* 4 Skill Cards in a single line on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolioData.skills.map((categoryGroup, catIdx) => {
            const CategoryIcon = categoryIcons[categoryGroup.category] || FaLayerGroup;

            return (
              <GlassCard
                key={categoryGroup.category}
                delay={catIdx * 0.1}
                className="p-5 border border-white/10 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shrink-0">
                        <CategoryIcon className="text-sm" />
                      </div>
                      <span className="leading-tight">{categoryGroup.category}</span>
                    </h3>
                  </div>

                  {/* Animated Skill Chips with Icons */}
                  <div className="flex flex-col gap-2">
                    {categoryGroup.items.map((skill, sIdx) => {
                      const SkillIcon = skillIcons[skill.name] || FaCode;
                      const levelStyle =
                        levelColors[skill.level] ||
                        'bg-slate-800 text-slate-300 border-slate-700';

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: sIdx * 0.04 }}
                          whileHover={{ scale: 1.02, x: 2 }}
                          className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-default ${levelStyle}`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <SkillIcon className="text-sm shrink-0" />
                            <span className="truncate">{skill.name}</span>
                          </div>
                          <span className="text-[10px] opacity-75 font-mono shrink-0 ml-1">
                            {skill.level}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
