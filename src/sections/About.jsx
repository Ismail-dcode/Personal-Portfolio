import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { FaCertificate } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-14 bg-darkBg relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to who I am and my credentials."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 max-w-4xl space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Shaikh Ismail Sardar
            </h3>
            <p className="text-accentCyan font-mono text-sm font-semibold">
              Computer Science & Engineering Student (Expected 2027) | Cloud & DevOps Enthusiast
            </p>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I am a Computer Science & Engineering student specializing in AWS Cloud Architecture, Linux System Administration, Docker Containerization, and CI/CD Automation. I focus on building reliable, scalable cloud environments and automating software delivery workflows.
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-primary font-bold text-base mb-3 flex items-center gap-2">
              <FaCertificate className="text-primary" /> Certifications & Training
            </h4>
            <ul className="space-y-2.5 text-slate-300 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">RHCSA</strong> (Red Hat Certified System Administrator) Passed [270/300]</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accentCyan shrink-0" />
                <span><strong className="text-white">Cloud(AWS)</strong> SAA-C03 (Pursuing)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accentCyan shrink-0" />
                <span><strong className="text-white">Redhat(OpenShift)</strong> DO180 (Pursuing)</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
