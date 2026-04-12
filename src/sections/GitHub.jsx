import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { FaGithub, FaStar, FaCodeBranch, FaBook } from 'react-icons/fa';

const GitHub = () => {
  return (
    <section id="github" className="py-20 bg-darkBg relative border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="GitHub Contributions" 
          subtitle="Check out my open-source activity and repositories." 
        />
        
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cardBg border border-slate-700/50 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden relative"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <FaGithub className="w-64 h-64" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 border-b border-slate-700/50 pb-8 mb-8">
              <img 
                src="https://github.com/Ismail-dcode.png" 
                alt="GitHub Profile" 
                className="w-24 h-24 rounded-full border-4 border-slate-800"
              />
              <div className="text-center md:text-left flex-1">
                <h3 className="text-3xl font-bold text-white">Ismail-dcode</h3>
                <p className="text-primary mt-1">Cloud & DevOps Enthusiast</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                  <div className="flex items-center gap-2 text-slate-400">
                    <FaBook /> <span>Public Repos</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <FaStar /> <span>Stars Earned</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <FaCodeBranch /> <span>Forked Projects</span>
                  </div>
                </div>
              </div>
              <div>
                <a 
                  href="https://github.com/Ismail-dcode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-600"
                >
                  <FaGithub size={20} /> View Profile
                </a>
              </div>
            </div>

            {/* Real Contribution Graph / Stats Images */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=Ismail-dcode&show_icons=true&theme=radium&hide_border=true&bg_color=1a0b2e&title_color=b721ff&icon_color=b721ff"
                  alt="GitHub Stats" 
                  className="w-full rounded-lg shadow-lg border border-slate-700/50"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ismail-dcode&layout=compact&theme=radium&hide_border=true&bg_color=1a0b2e&title_color=b721ff"
                  alt="Top Languages" 
                  className="w-full rounded-lg shadow-lg border border-slate-700/50"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              <div className="text-center mt-6">
                <h4 className="text-xl font-semibold text-white mb-4 text-glow">Contribution Highlights</h4>
                <div className="overflow-x-auto pb-2">
                  <img 
                    src="https://ghchart.rshah.org/b721ff/Ismail-dcode" 
                    alt="Ismail-dcode's Github chart" 
                    className="min-w-[700px] w-full max-w-full rounded-lg bg-[#1a0b2e] p-4 border border-slate-700/50 mx-auto" 
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
                <p className="text-sm text-slate-400 mt-4 italic">Commit history and activity graph dynamically loaded over time.</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
