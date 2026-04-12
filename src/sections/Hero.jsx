import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaDocker } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Welcome! Nice to connect with you.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#21d4fd] text-glow">Shaikh Ismail</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-300 mb-6 font-medium"
          >
            Cloud & DevOps Engineer <span className="text-slate-500">(Enthusiast)</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            "I explore & build scalable applications containerize & automate deployments using cloud-native technologies."
            <br /><span className="text-sm mt-2 block text-primary/80">AWS | Docker | Linux </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-[#820c82] text-white font-semibold rounded-lg transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-primary/30"
            >
              View Projects
            </Link>
            <a
              href="assets/Updated-My-Resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-3 bg-cardBg border border-slate-700 hover:border-primary text-white font-medium rounded-lg transition-all cursor-pointer"
            >
              Download Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="w-full sm:w-auto px-8 py-3 bg-transparent text-slate-300 hover:text-white font-medium rounded-lg transition-all cursor-pointer border border-transparent hover:border-slate-700"
            >
              Contact
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a href="https://github.com/Ismail-dcode" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ismail-shaikh-19798a335/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] hover:scale-110 transition-all text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://hub.docker.com/u/ismaildcode" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2496ED] hover:scale-110 transition-all text-2xl">
              <FaDocker />
            </a>
            <a href="https://x.com/Ismail_dcode/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all text-2xl">
              <FaXTwitter />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
