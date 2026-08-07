import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaServer, FaCheckCircle, FaGlobe, FaBolt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const Deployments = () => {
  return (
    <section id="deployments" className="py-14 relative overflow-hidden bg-slate-950/80 border-y border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accentEmerald/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Infrastructure & Operations"
          title="Live Production"
          highlight="Deployments & Clusters"
          subtitle="Real-time operational status, multi-region hosting platforms, uptime metrics, and live deployment nodes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.deployments.map((dep, idx) => (
            <GlassCard
              key={dep.id}
              delay={idx * 0.1}
              glowColor="emerald"
              className="flex flex-col justify-between p-6 border border-white/10 group"
            >
              <div>
                {/* Header Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {dep.status}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <FaBolt className="text-amber-400" /> {dep.latency}
                  </span>
                </div>

                {/* Screenshot Placeholder Box */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-slate-900 mb-4 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                  <div className="text-center p-3">
                    <FaServer className="text-2xl text-accentEmerald/60 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono text-slate-400 block">
                      [ Screenshot Placeholder ]
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-slate-300">
                    {dep.uptime} Uptime
                  </div>
                </div>

                {/* Name & Platform Info */}
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {dep.name}
                </h4>
                <p className="text-xs font-mono text-slate-400 mb-3">
                  {dep.type} • {dep.hosting}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono mb-4">
                  <FaGlobe className="text-slate-400" />
                  <span>{dep.region}</span>
                </div>
              </div>

              {/* Visit Action Button */}
              <a
                href={dep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-500/20 text-slate-200 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Visit Node Deployment</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deployments;
