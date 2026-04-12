import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20 bg-darkBg relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to who I am and what I do."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar/Image Col */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/50 max-w-sm aspect-[4/5] bg-cardBg">
                <img
                  src="assets/Profile-pic.jpeg"
                  alt="Shaikh Ismail Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500?text=Profile+Image';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Col */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-cardBg/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">I'm</span> Shaikh Ismail Sardar
            </h3>

            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                A Computer Science Engineering student at Maharashtra Institute of Technology, focused on building robust infrastructures and automating software delivery lifecycle.
              </p>
              <p>
                My passion lies in <span className="text-white font-medium">Cloud computing, DevOps, and Automation</span>. I enjoy optimizing deployment workflows, building fault-tolerant cloud architectures, and exploring how systems integrate efficiently in real-world environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700/50">
                <div className="bg-darkBg/50 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-primary font-semibold mb-1">Focus Areas</h4>
                  <ul className="list-disc list-inside text-sm text-slate-300">
                    <li>Cloud Native Architecture</li>
                    <li>Containerization</li>
                    <li>Deployment</li>
                  </ul>
                </div>
                <div className="bg-darkBg/50 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-primary font-semibold mb-1">Certifications</h4>
                  <ul className="list-disc list-inside text-sm text-slate-300">
                    <li>RHCSA (Red Hat)</li>
                    <li>Git & GitHub (Udemy)</li>

                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
