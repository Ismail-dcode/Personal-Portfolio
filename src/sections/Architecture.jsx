import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExpand, FaCheckCircle, FaNetworkWired } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import ArchitectureModal from '../components/ArchitectureModal';

const Architecture = () => {
  const [selectedArch, setSelectedArch] = useState(null);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-accentCyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="System Design Case Studies"
          title="Cloud & DevOps"
          highlight="System Architectures"
          subtitle="Architectural breakdowns showcasing AWS cloud-native topologies, container orchestration, and automated CI/CD deployment pipelines."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.architectures.map((item, idx) => (
            <GlassCard
              key={item.id}
              delay={idx * 0.1}
              glowColor="cyan"
              className="flex flex-col justify-between p-0 overflow-hidden group border border-white/10"
            >
              {/* Architecture Blueprint Image Placeholder */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950 p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/90 border border-accentCyan/30 text-[10px] font-mono font-bold uppercase tracking-wider text-accentCyan flex items-center gap-1.5">
                  <FaNetworkWired /> {item.subtitle}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accentCyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 py-2 border-y border-slate-800/80">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <FaCheckCircle className="text-accentCyan shrink-0 text-[10px]" />
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-accentCyan/10 border border-accentCyan/20 text-accentCyan text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => setSelectedArch(item)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-accentCyan/20 text-slate-200 hover:text-accentCyan border border-slate-800 hover:border-accentCyan/40 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <FaExpand className="text-xs" />
                  <span>Expand Architectural Blueprint</span>
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      <ArchitectureModal
        item={selectedArch}
        onClose={() => setSelectedArch(null)}
      />
    </section>
  );
};

export default Architecture;
