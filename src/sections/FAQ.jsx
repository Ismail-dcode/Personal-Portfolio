import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 relative overflow-hidden bg-radial-grid">
      {/* Glow accent */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Questions About Me &"
          highlight="Common Queries"
          subtitle="Clear answers regarding my background, technical focus, degree, availability, and certifications."
        />

        <div className="space-y-4">
          {portfolioData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <GlassCard
                key={idx}
                delay={idx * 0.05}
                hoverEffect={false}
                className="p-0 overflow-hidden border border-white/10"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-emerald-300 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg">
                    <FaQuestionCircle className="text-emerald-400 text-base shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full transition-colors shrink-0 ${isOpen ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-900 text-slate-400'}`}
                  >
                    <FaChevronDown className="text-xs" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80"
                    >
                      <p className="pt-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
