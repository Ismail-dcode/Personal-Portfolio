import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode,
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaCogs,
  FaArrowRight,
  FaCheck,
  FaTimes
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const serviceIcons = [FaCode, FaCloud, FaServer, FaShieldAlt, FaDatabase, FaCogs];


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-14 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Services Offered"
          title="High-Impact Solutions for"
          highlight="Modern Web & Cloud"
          subtitle="Tailored engineering services designed to scale digital platforms, optimize cloud architectures, and deliver resilient software products."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {portfolioData.services.map((service, idx) => {
            const IconComponent = serviceIcons[idx % serviceIcons.length];

            return (
              <GlassCard
                key={service.id}
                delay={idx * 0.1}
                className="flex flex-col justify-between h-full group p-5 sm:p-6"
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-600/20 to-accentCyan/20 flex items-center justify-center text-primary group-hover:text-accentCyan group-hover:scale-110 transition-all border border-primary/30 shadow-glow-primary shrink-0">
                      <IconComponent className="text-lg" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accentCyan px-2.5 py-1 rounded-full bg-slate-900 border border-accentCyan/30 text-right">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-primary-light transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key feature list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <FaCheck className="text-primary text-xs shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-primary-light transition-colors"
                >
                  <span>Learn More Details</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass-panel bg-slate-900/95 rounded-2xl border border-primary/40 p-6 sm:p-8 z-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <FaTimes />
              </button>

              <span className="text-xs font-mono font-bold text-accentCyan uppercase tracking-widest">
                {selectedService.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-4">
                {selectedService.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Deliverables & Execution Scope:
                </h4>
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                      <FaCheck />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="block text-center w-full py-3 rounded-xl bg-primary text-white font-bold shadow-glow-primary hover:bg-primary-hover transition-all"
              >
                Request Service Quote
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
