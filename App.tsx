
import React, { Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import SpaceBackground from './components/SpaceBackground';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30">
      {/* 3D Space Background Layer */}
      <div className="fixed inset-0 z-0">
        <SpaceBackground />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
        </main>
        <Footer />
      </div>

      {/* Global Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default App;
