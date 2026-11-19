import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
          © {new Date().getFullYear()} Ismail Shaikh
        </p>
        <nav className="col-span-2 flex flex-wrap items-center gap-x-5 gap-y-1 sm:col-span-2 sm:justify-self-end">
          {['work', 'profile', 'freelance', 'contact'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => onNavigate(tab)}
              className="text-left font-mono text-[11px] uppercase tracking-[0.16em] text-mute hover:text-paper"
            >
              {tab}
            </button>
          ))}
        </nav>
        <a
          href={portfolioData.contactInfo.socials.find((s) => s.name === 'GitHub')?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mute hover:text-paper sm:col-span-3"
        >
          GitHub · @Ismail-dcode
        </a>
      </div>
    </footer>
  );
};

export default Footer;
