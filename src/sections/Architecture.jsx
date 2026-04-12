import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { FaReact, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { SiGithubactions } from 'react-icons/si';

const Architecture = () => {
  return (
    <section id="architecture" className="py-20 bg-darkBg relative border-t border-slate-800/50 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#b721ff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Infrastructure Architecture"
          subtitle="Visual representation of the deployment workflows and CI/CD pipelines I build."
        />

        <div className="mt-16 space-y-20">

          {/* Flow 1: Web App -> Docker -> AWS */}
          <div className="relative">
            <h3 className="text-xl font-semibold text-white text-center mb-8">Modern Web App Deployment</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-cardBg p-6 rounded-2xl border border-slate-700 shadow-lg text-center w-48 relative z-10"
              >
                <FaReact className="text-6xl text-[#61DAFB] mx-auto mb-3" />
                <h4 className="font-bold text-white">React / Node.js</h4>
                <p className="text-xs text-slate-400 mt-1">Application Code</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                className="hidden md:block h-1 bg-slate-600 relative my-4 w-12 shrink-0 transition-all duration-1000"
              >
                <div className="absolute right-0 top-1/2 -mt-1.5 border-t-6 border-b-6 border-l-8 border-transparent border-l-slate-600"></div>
              </motion.div>

              <div className="md:hidden w-1 h-8 bg-slate-600 my-2"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-cardBg p-6 rounded-2xl border border-primary shadow-lg shadow-primary/10 text-center w-48 relative z-10"
              >
                <FaDocker className="text-6xl text-[#2496ED] mx-auto mb-3" />
                <h4 className="font-bold text-white">Containerization</h4>
                <p className="text-xs text-slate-400 mt-1">Docker Image Build</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                className="hidden md:block h-1 bg-slate-600 relative my-4 w-12 shrink-0 transition-all duration-1000 delay-300"
              >
                <div className="absolute right-0 top-1/2 -mt-1.5 border-t-6 border-b-6 border-l-8 border-transparent border-l-slate-600"></div>
              </motion.div>

              <div className="md:hidden w-1 h-8 bg-slate-600 my-2"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-cardBg p-6 rounded-2xl border border-[#FF9900] shadow-lg shadow-[#FF9900]/10 text-center w-48 relative z-10"
              >
                <FaAws className="text-6xl text-[#FF9900] mx-auto mb-3" />
                <h4 className="font-bold text-white">AWS EC2 Server</h4>
                <p className="text-xs text-slate-400 mt-1">Production Run</p>
              </motion.div>

            </div>
          </div>




        </div>
      </div>


    </section>
  );
};

export default Architecture;
