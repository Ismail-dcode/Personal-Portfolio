import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaServer,
  FaCloud,
  FaLinux,
  FaDocker,
  FaDatabase,
  FaTerminal,
  FaNetworkWired
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';


const iconMap = {
  FaCode: FaCode,
  FaServer: FaServer,
  FaCloud: FaCloud,
  FaLinux: FaLinux,
  FaDocker: FaDocker,
  FaDatabase: FaDatabase,
  FaTerminal: FaTerminal,
  FaNetworkWired: FaNetworkWired,
};

const Trust = () => {
  return (
    <section id="trust" className="py-12 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Core Technology Stack & Ecosystem Expertise
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {portfolioData.trustTech.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaCode;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-400 group-hover:text-green-300 group-hover:scale-110 transition-all mb-2.5 shadow-inner">
                  <IconComponent className="text-lg" />
                </div>
                <h4 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                  {item.category}
                </h4>
                <span className="text-[10px] text-slate-400 mt-1 font-mono">
                  {item.count}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trust;
