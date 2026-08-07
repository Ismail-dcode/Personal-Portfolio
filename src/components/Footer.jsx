import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaHeart, FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaTelegram, FaGlobe } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaXTwitter: FaTwitter,
  FaDiscord: FaDiscord,
  FaTelegram: FaTelegram,
  FaGlobe: FaGlobe,
};


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400 text-sm">
      {/* Glow gradient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentCyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-glow-primary">
                <FaCode className="text-xl" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Shaikh Ismail
                </span>
                <span className="block text-xs font-mono text-accentCyan">
                  Cloud & DevOps Enthusiast | B.Tech CS '27
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Specializing in AWS Cloud Architecture, Linux Systems Administration, Docker Containerization, and CI/CD Automation. Open for remote internships and entry-level roles.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {portfolioData.contactInfo.socials.map((social) => {
                const IconComponent = iconMap[social.icon] || FaGithub;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/40 border border-slate-800 transition-all"
                    aria-label={social.name}
                  >
                    <IconComponent className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {portfolioData.navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Sections
            </h4>
            <ul className="space-y-2.5 text-xs">
              {portfolioData.navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>© {new Date().getFullYear()} Designed & Engineered by</span>
            <span className="text-white font-semibold">Shaikh Ismail</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-primary border border-slate-800 transition-all shadow-md"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
