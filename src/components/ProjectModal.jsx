import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel bg-slate-900/90 rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-slate-950 hover:bg-emerald-400 transition-all duration-200 border border-white/10"
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 text-slate-300">
            <p className="text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Problem & Solution Breakdown */}
            {project.details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                    Challenge / Problem
                  </h4>
                  <p className="text-sm text-slate-400">{project.details.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    Engineering Solution
                  </h4>
                  <p className="text-sm text-slate-400">{project.details.solution}</p>
                </div>
              </div>
            )}

            {/* Key Results */}
            {project.details?.keyResults && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                  Key Metrics & Results
                </h4>
                <div className="space-y-2">
                  {project.details.keyResults.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <FaCheckCircle className="text-emerald-400 shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-slate-950 font-extrabold shadow-glow-primary hover:from-emerald-400 hover:to-green-500 text-sm transition-all"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-bold border border-emerald-500/40 text-sm transition-all"
              >
                <FaGithub className="text-base" /> View Repository on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
