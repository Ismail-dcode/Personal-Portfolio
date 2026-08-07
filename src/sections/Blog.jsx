import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-slate-950/70 border-y border-slate-800/80">
      {/* Glow accent */}
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accentCyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Technical Writings & Insights"
          title="Engineering Articles &"
          highlight="Blog Publications"
          subtitle="Deep dives into cloud computing, backend architectures, React micro-interactions, and system design patterns."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.blogPosts.map((post, idx) => (
            <GlassCard
              key={post.id}
              delay={idx * 0.1}
              className="p-0 overflow-hidden flex flex-col justify-between h-full border border-white/10 group"
            >
              {/* Thumbnail Placeholder */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/90 border border-primary/30 text-[10px] font-mono font-bold uppercase tracking-wider text-accentCyan">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[10px]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[10px]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3">
                    {post.snippet}
                  </p>
                </div>

                {/* Read More Action */}
                <a
                  href={post.url}
                  className="w-full pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-primary-light transition-colors"
                >
                  <span>Read Article</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
