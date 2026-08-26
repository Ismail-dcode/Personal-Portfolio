import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const Process = () => {
  return (
    <section id="process" className="py-14 relative overflow-hidden bg-slate-950/70 border-y border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Structured Methodology"
          title="Engineered Development"
          highlight="Lifecycle & Workflow"
          subtitle="A systematic, battle-tested engineering process ensuring high code quality, predictability, and continuous delivery."
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {portfolioData.processSteps.map((step, idx) => {
            const isLast = idx === portfolioData.processSteps.length - 1;

            return (
              <GlassCard
                key={step.step}
                delay={idx * 0.1}
                className="relative flex flex-col justify-between p-6 border border-white/10 group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center text-slate-950 font-mono font-black text-lg shadow-glow-primary group-hover:scale-105 transition-all">
                      {step.step}
                    </span>
                    {!isLast && (
                      <span className="hidden lg:block text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
                        <FaArrowRight className="text-lg" />
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Status Indicator */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <FaCheckCircle className="text-xs" />
                  <span>Phase {step.step} Milestone</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
