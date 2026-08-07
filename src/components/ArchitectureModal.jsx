import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheckCircle, FaNetworkWired } from 'react-icons/fa';

const ArchitectureModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-panel bg-slate-900/95 rounded-2xl border border-accentCyan/30 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-slate-800 flex items-start justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-bold uppercase tracking-wider mb-2">
                <FaNetworkWired /> {item.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {item.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-white/10"
              aria-label="Close architecture modal"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* Diagram Preview */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 sm:h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
                <p className="text-xs text-slate-400 font-mono">
                  [Architecture Diagram Blueprint Placeholder]
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              {item.description}
            </p>

            {/* Highlights */}
            {item.highlights && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-accentCyan mb-3">
                  Architectural Benefits & Specs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-medium text-slate-200 flex items-start gap-2.5"
                    >
                      <FaCheckCircle className="text-accentCyan shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Infrastructure & Stack Componentry
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-accentCyan/10 border border-accentCyan/20 text-accentCyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ArchitectureModal;
