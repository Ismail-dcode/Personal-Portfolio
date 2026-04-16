import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { FaFileDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-darkBg relative border-t border-slate-800/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Resume" 
          subtitle="View or download my professional resume." 
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-cardBg border border-slate-700/50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-primary/5 transition-all"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaFileDownload className="text-3xl text-primary" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Curriculum Vitae</h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Get a comprehensive overview of my experience, education, certifications, and technical skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="assets/Resume_1.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-600"
            >
              <FaEye /> Preview
            </a>
            <a 
              href="assets/Resume_1.pdf" 
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-sky-400 text-slate-900 font-bold rounded-lg transition-colors"
            >
              <FaFileDownload /> Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
