import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaBriefcase, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaXTwitter: FaTwitter,
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section active link detection
      const sections = portfolioData.navLinks.map((link) =>
        link.href.replace('#', '')
      );

      const current = sections.find((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    
    // Small timeout to allow mobile menu drawer collapse to settle position calculations
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-slate-950 shadow-glow-primary group-hover:scale-105 transition-transform duration-300 font-extrabold">
            <FaCode className="text-xl text-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              Shaikh Ismail
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400">
              Cloud & DevOps Enthusiast
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-950/80 p-1.5 rounded-full border border-emerald-500/20 backdrop-blur-md">
          {portfolioData.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-emerald-500/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 shadow-glow-primary z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Social Icons & CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Header Social Icons (GitHub, LinkedIn, X) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {portfolioData.contactInfo.socials
              .filter((social) => ['GitHub', 'LinkedIn', 'Twitter / X'].includes(social.name))
              .map((social) => {
                const IconComponent = iconMap[social.icon] || FaGithub;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/40 border border-slate-800 transition-all flex items-center justify-center"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <IconComponent className="text-xs sm:text-sm" />
                  </a>
                );
              })}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-extrabold rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 shadow-glow-primary transition-all duration-300"
          >
            <FaBriefcase /> Hire Me
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-panel bg-slate-950/95 border-b border-emerald-500/30 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {portfolioData.navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'text-slate-400 hover:text-white hover:bg-emerald-500/10'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 w-full text-center py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 font-extrabold shadow-glow-primary"
              >
                Get In Touch
              </a>

              <div className="flex items-center justify-center gap-3 pt-3 border-t border-slate-800/80 mt-2">
                {portfolioData.contactInfo.socials
                  .filter((social) => ['GitHub', 'LinkedIn', 'Twitter / X'].includes(social.name))
                  .map((social) => {
                    const IconComponent = iconMap[social.icon] || FaGithub;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/40 border border-slate-800 transition-all flex items-center justify-center"
                        aria-label={social.name}
                        title={social.name}
                      >
                        <IconComponent className="text-base" />
                      </a>
                    );
                  })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
