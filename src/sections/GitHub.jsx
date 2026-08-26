import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';


const GitHub = () => {
  const { github } = portfolioData;

  // Mock matrix array for contribution graph grid (7 rows x 26 cols = 182 tiles)
  const contributionGrid = Array.from({ length: 182 }, (_, i) => {
    // Generate simulated contribution intensities (0 to 4)
    const val = (i * 7 + 13) % 11;
    if (val > 8) return 4;
    if (val > 5) return 3;
    if (val > 3) return 2;
    if (val > 1) return 1;
    return 0;
  });

  const levelColors = [
    'bg-slate-900 border-slate-800',
    'bg-emerald-950 border-emerald-900',
    'bg-emerald-800 border-emerald-700',
    'bg-emerald-600 border-emerald-500',
    'bg-green-400 border-green-300'
  ];

  return (
    <section id="github" className="py-14 relative overflow-hidden bg-slate-950/80 border-y border-slate-800/80">
      {/* Glow accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Open Source & Activity"
          title="GitHub Contributions &"
          highlight="Code Metrics"
          subtitle="A snapshot of open-source repositories, activity metrics, pull requests, and multi-language breakdown."
        />

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {github.stats.map((stat, idx) => (
            <GlassCard
              key={stat.label}
              delay={idx * 0.08}
              className="p-5 text-center border border-white/10"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-gradient block mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </div>

        {/* Contribution Matrix Heatmap Card */}
        <GlassCard className="p-6 sm:p-8 mb-8 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white text-xl">
                <FaGithub />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Contribution Activity Matrix
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {github.username} • 240+ Contributions in the last year
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Less</span>
              {levelColors.map((color, i) => (
                <span key={i} className={`w-3 h-3 rounded-sm border ${color}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Grid View of heatmap */}
          <div className="overflow-x-auto pb-2">
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[640px]">
              {contributionGrid.map((intensity, cellIdx) => (
                <div
                  key={cellIdx}
                  className={`w-3.5 h-3.5 rounded-sm border ${levelColors[intensity]} hover:scale-125 transition-transform cursor-pointer`}
                  title={`Simulated activity score: ${intensity}`}
                />
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Two Columns: Top Repositories & Language Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Top Repositories (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FaCode className="text-emerald-400" /> Top Open-Source Repositories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {github.topRepos.map((repo, idx) => (
                <a
                  key={repo.name}
                  href={repo.url || github.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <GlassCard
                    delay={idx * 0.1}
                    className="p-5 flex flex-col justify-between h-full border border-white/10 hover:border-emerald-500/50 group transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                          {repo.name}
                        </h4>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] font-mono text-emerald-300 shrink-0 ml-2">
                          {repo.language}
                        </span>
                      </div>

                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-400 font-mono pt-3 border-t border-slate-800">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-amber-400" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch /> {repo.forks}
                      </span>
                    </div>
                  </GlassCard>
                </a>
              ))}
            </div>
          </div>

          {/* Languages Breakdown & Recent Activity (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard className="p-6 border border-white/10">
              <h3 className="text-base font-bold text-white mb-4">
                Languages Distribution
              </h3>

              {/* Progress Stack */}
              <div className="h-3 w-full rounded-full bg-slate-900 overflow-hidden flex mb-4 border border-slate-800">
                {github.languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%` }}
                    className={`h-full ${lang.color}`}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend List */}
              <div className="space-y-2 text-xs">
                {github.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                      <span className="text-slate-300 font-medium">{lang.name}</span>
                    </div>
                    <span className="font-mono text-slate-400">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Recent Activity Log Placeholder */}
            <GlassCard className="p-6 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Recent Git Activity Feed
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <FaCode className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Pushed 3 commits to <code className="text-emerald-400 font-mono">main</code> on <span className="text-white font-medium">serverless-aws-boilerplate</span></span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <FaCode className="text-green-400 mt-0.5 shrink-0" />
                  <span>Merged PR #42: <span className="text-white font-medium">Add WebAssembly data parser</span></span>
                </div>
              </div>
            </GlassCard>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
