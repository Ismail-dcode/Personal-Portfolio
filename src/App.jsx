import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Trust from './sections/Trust';
import About from './sections/About';
import WhatIDo from './sections/WhatIDo';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Deployments from './sections/Deployments';
import Skills from './sections/Skills';
import Process from './sections/Process';
import Experience from './sections/Experience';
import GitHub from './sections/GitHub';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-darkBg min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <WhatIDo />
        <Skills />
        <Services />
        <Projects />
        <Deployments />
        <Process />
        <Experience />
        <GitHub />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
