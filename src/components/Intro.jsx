import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Intro = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  const name = 'Ismail Shaikh';
  const letters = name.split('');

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.3 + i * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const fadeOut = {
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-ink"
            exit={fadeOut}
          >
            {/* Background grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            {/* Radial glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute h-[500px] w-[500px] rounded-full bg-paper/[0.02] blur-3xl"
            />

            <div className="relative flex flex-col items-center gap-6 px-6">
              {/* Logo mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-2 text-paper"
              >
                <div className="scale-150">
                  <Logo />
                </div>
              </motion.div>

              {/* Animated line */}
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="h-px w-16 origin-center bg-paper/30"
              />

              {/* Name - letter by letter */}
              <div className="flex overflow-hidden">
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-display text-4xl italic tracking-tight text-paper sm:text-5xl md:text-6xl"
                    style={{ display: 'inline-block', perspective: '600px' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>

              {/* Tagline */}
              <motion.p
                variants={taglineVariants}
                initial="hidden"
                animate="visible"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute sm:text-xs"
              >
                Cloud & DevOps
              </motion.p>

              {/* Loading bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 h-px w-40 overflow-hidden bg-line"
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                  className="h-full w-full bg-paper/40"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with delayed render */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Intro;
