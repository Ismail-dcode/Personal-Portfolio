import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './pages/Work';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import SmoothScroll from './components/SmoothScroll';
import Intro from './components/Intro';

const validTabs = ['work', 'profile', 'contact'];

function getTabFromHash() {
  const hash = window.location.hash.replace('#', '');
  return validTabs.includes(hash) ? hash : 'work';
}

function App() {
  const [tab, setTab] = useState(getTabFromHash);

  const onChange = (next) => {
    setTab(next);
    window.location.hash = next;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onHash = () => setTab(getTabFromHash());
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) {
      window.location.hash = 'work';
    }
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <Intro>
      <SmoothScroll>
        <div className="site-grid relative min-h-screen bg-ink text-paper">
          <div className="grain" aria-hidden="true" />
          <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <Header active={tab} onChange={onChange} />
            <main>
              <AnimatePresence mode="wait">
                {tab === 'work' && <Work key="work" onNavigate={onChange} />}
                {tab === 'profile' && <Profile key="profile" />}
                {tab === 'contact' && <Contact key="contact" />}
              </AnimatePresence>
            </main>
            <Footer onNavigate={onChange} />
          </div>
        </div>
      </SmoothScroll>
    </Intro>
  );
}

export default App;
