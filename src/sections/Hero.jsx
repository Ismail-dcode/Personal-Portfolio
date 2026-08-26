import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaBriefcase, FaDownload, FaRocket, FaReact, FaNodeJs, FaAws, FaDocker, FaCode, FaTerminal } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import GradientButton from '../components/GradientButton';

const iconComponents = {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  SiTypescript: FaCode,
  SiGraphql: FaTerminal,
};


const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-grid"
    >
      {/* Dynamic Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-green-400/5 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-glow-primary"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{hero.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              {hero.titlePrefix}{' '}
              <span className="text-gradient hover:text-glow transition-all duration-300">
                {hero.titleHighlight}
              </span>{' '}
              {hero.titleSuffix}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {hero.subtitle}
            </motion.p>

            {/* Three CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <GradientButton
                href={hero.cta.primary.href}
                variant="primary"
                size="lg"
                icon={FaRocket}
              >
                {hero.cta.primary.text}
              </GradientButton>

              <GradientButton
                href={hero.cta.secondary.href}
                variant="secondary"
                size="lg"
                icon={FaBriefcase}
              >
                {hero.cta.secondary.text}
              </GradientButton>

              <GradientButton
                href={hero.cta.tertiary.href}
                variant="outline"
                size="lg"
                icon={FaDownload}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.cta.tertiary.text}
              </GradientButton>
            </motion.div>
          </div>

          {/* Right Column Profile Showcase + Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Glowing Backdrop Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 via-green-500 to-teal-400 p-1 animate-spin-slow opacity-80 shadow-glow-primary" />

              {/* Glass Inner Frame */}
              <div className="absolute inset-2 rounded-full glass-panel overflow-hidden flex items-center justify-center bg-slate-950/90 border border-emerald-500/30">
                {/* Profile Image Placeholder */}
                <div className="w-full h-full relative group">
                  <img
                    src={hero.image || "/assets/Profile-0.png"}
                    alt="Shaikh Ismail"
                    className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                    onError={(e) => {
                      e.target.src = '/assets/Profile-0.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Technology Badges */}
              {hero.floatingBadges.map((badge, idx) => {
                const IconComponent = iconComponents[badge.icon] || FaReact;
                // Position calculations around avatar for mobile and desktop
                const positions = [
                  '-top-4 -left-2 sm:-top-6 sm:-left-6',
                  'top-2 -right-4 sm:top-4 sm:-right-8',
                  '-bottom-4 -left-2 sm:-bottom-6 sm:-left-4',
                  '-bottom-2 -right-4 sm:-bottom-4 sm:-right-8',
                  'top-[65%] -left-6 sm:top-[65%] sm:-left-16',
                  '-top-5 right-6 sm:-top-8 sm:right-12'
                ];
                const posClass = positions[idx % positions.length];

                return (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className={`absolute ${posClass} glass-panel p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl flex items-center gap-1.5 sm:gap-2 border border-emerald-500/30 shadow-xl hover:scale-110 transition-transform cursor-pointer backdrop-blur-md z-20`}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-900 flex items-center justify-center text-emerald-400 text-xs sm:text-base shadow-inner shrink-0">
                      <IconComponent />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-200 pr-0.5 sm:pr-1 whitespace-nowrap">
                      {badge.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="#trust"
            className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-xs font-mono"
          >
            <span>SCROLL DOWN</span>
            <FaArrowDown className="animate-bounce text-sm text-emerald-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
