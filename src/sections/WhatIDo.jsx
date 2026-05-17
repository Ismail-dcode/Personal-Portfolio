import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { FiUploadCloud, FiServer, FiSettings, FiBox, FiActivity } from 'react-icons/fi';

const services = [
  {
    icon: <FiUploadCloud className="text-4xl text-primary" />,
    title: 'Application Deployment',
    description:
      'I help applications move from development environments into live production systems.',
    accent: 'from-primary/20 to-primary/5',
    border: 'hover:border-primary/50',
  },
  {
    icon: <FiServer className="text-4xl text-fuchsia-400" />,
    title: 'Infrastructure Management',
    description:
      'I manage Linux-based environments and cloud servers to keep applications running smoothly.',
    accent: 'from-fuchsia-500/20 to-fuchsia-500/5',
    border: 'hover:border-fuchsia-500/50',
  },
  {
    icon: <FiSettings className="text-4xl text-cyan-400" />,
    title: 'Automation',
    description:
      'I build automated workflows that reduce manual deployment work.',
    accent: 'from-cyan-400/20 to-cyan-400/5',
    border: 'hover:border-cyan-400/50',
  },
  {
    icon: <FiBox className="text-4xl text-sky-400" />,
    title: 'Containerization',
    description:
      'I package applications into portable environments using Docker.',
    accent: 'from-sky-400/20 to-sky-400/5',
    border: 'hover:border-sky-400/50',
  },
  {
    icon: <FiActivity className="text-4xl text-emerald-400" />,
    title: 'Monitoring',
    description:
      'I monitor application and server performance to improve reliability.',
    accent: 'from-emerald-400/20 to-emerald-400/5',
    border: 'hover:border-emerald-400/50',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const WhatIDo = () => {
  return (
    <section
      id="whatido"
      className="py-20 bg-darkBg relative border-t border-slate-800/50"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="What I Do"
          subtitle="Helping applications run efficiently through modern infrastructure and automation."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className={`group relative bg-cardBg rounded-2xl p-6 border border-slate-800 ${item.border} transition-all duration-300 shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden`}
            >
              {/* gradient blob behind icon */}
              <div
                className={`absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br ${item.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon box */}
              <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-darkBg border border-slate-700 mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="relative text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              <p className="relative text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-fuchsia-500 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
