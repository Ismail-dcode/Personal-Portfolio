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
      'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-slate-950 font-extrabold shadow-glow-primary hover:from-emerald-400 hover:to-green-400 border border-emerald-400/40',
    secondary:
      'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm',
    outline:
      'bg-slate-900/80 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 hover:text-white hover:bg-emerald-500/10',
    glass:
      'glass-panel text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 border border-emerald-500/20',
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
