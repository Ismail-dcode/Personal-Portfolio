import React from 'react';
import { motion } from 'framer-motion';

const GradientButton = ({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'glass'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold gap-1.5',
    md: 'px-6 py-3 text-sm font-semibold gap-2',
    lg: 'px-8 py-3.5 text-base font-bold gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary via-purple-600 to-indigo-600 text-white shadow-glow-primary hover:shadow-primary/50 border border-primary/40',
    secondary:
      'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 font-bold shadow-glow-cyan hover:shadow-cyan/50 border border-cyan-400/40',
    outline:
      'bg-slate-900/60 text-slate-200 border border-slate-700/80 hover:border-primary/60 hover:text-white hover:bg-primary/10',
    glass:
      'glass-panel text-white hover:bg-primary/20 hover:border-primary/50 border border-white/10',
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {Icon && <Icon className="text-lg transition-transform group-hover:translate-x-0.5" />}
      <span>{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block group" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block group" {...props}>
      {content}
    </button>
  );
};

export default GradientButton;
