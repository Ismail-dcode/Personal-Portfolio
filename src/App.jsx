import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Architecture from './sections/Architecture';
import GitHub from './sections/GitHub';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-darkBg min-h-screen text-slate-300 font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <GitHub />
        <Resume />
        <Contact />
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} designed & Developed by <span className="text-primary font-medium">Shaikh Ismail</span></p>
        <p className="mt-1 flex items-center justify-center gap-1">Created with <span className="text-red-500">❤️</span></p>
      </footer>
    </div>
  );
}

export default App;
