import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const Experience = () => {
  return (
    <section id="experience" className="py-14 relative overflow-hidden bg-radial-grid">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Professional Background"
          title="Career Journey &"
          highlight="Engineering Roles"
          subtitle="A timeline of software engineering roles, client leadership engagements, and impactful technical milestones."
        />

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-primary/30 space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-primary group-hover:bg-primary group-hover:scale-125 shadow-glow-primary transition-all duration-300 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accentCyan animate-pulse" />
              </div>

              {/* Experience Card */}
              <GlassCard
                delay={idx * 0.15}
                className="p-6 sm:p-8 border border-white/10 group-hover:border-primary/40 transition-all"
              >
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light text-xs font-mono font-bold">
                    <FaCalendarAlt className="text-[10px]" /> {exp.period}
                  </span>
                  <span className="text-xs font-mono text-accentCyan">
                    {exp.company}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {exp.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Accomplishments Bullet Points */}
                <div className="space-y-2 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Contributions & Milestones:
                  </h4>
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <FaCheckCircle className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
