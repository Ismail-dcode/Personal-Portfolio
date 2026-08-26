import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  delay = 0,
  glowColor = 'primary', // 'primary' | 'cyan' | 'emerald'
  ...props
}) => {
  const glowMap = {
    primary: 'hover:border-emerald-500/50 hover:shadow-[0_10px_30px_-5px_rgba(16,185,129,0.3)]',
    cyan: 'hover:border-green-400/50 hover:shadow-[0_10px_30px_-5px_rgba(74,222,128,0.3)]',
    emerald: 'hover:border-teal-400/50 hover:shadow-[0_10px_30px_-5px_rgba(45,212,191,0.3)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverEffect ? { y: -6 } : undefined}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
        hoverEffect ? glowMap[glowColor] : ''
      } ${className}`}
      {...props}
    >
      {/* Subtle background glow effect */}
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
