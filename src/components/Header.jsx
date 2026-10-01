import React from 'react';
import Logo from './Logo';

const tabs = [
  { id: 'work', label: 'Work', index: '01' },
  { id: 'profile', label: 'Profile', index: '02' },
  { id: 'contact', label: 'Contact', index: '03' },
];

const Header = ({ active, onChange }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-6 px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => onChange('work')}
          className="group flex items-center justify-self-start text-left"
        >
          <span className="text-paper transition-colors duration-300 group-hover:text-white">
            <Logo />
          </span>
        </button>

        <nav className="grid grid-cols-3 gap-x-5 sm:gap-x-8">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onChange(tab.id)}
                className="grid justify-items-end gap-1"
              >
                <span
                  className={`font-mono text-[10px] tracking-[0.2em] ${
                    isActive ? 'text-paper' : 'text-mute'
                  }`}
                >
                  {tab.index}
                </span>
                <span
                  className={`relative text-xs font-medium uppercase tracking-[0.18em] sm:text-sm ${
                    isActive ? 'text-paper' : 'text-mute hover:text-paper'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-paper" />
                  )}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
