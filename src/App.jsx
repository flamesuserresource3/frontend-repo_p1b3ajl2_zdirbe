import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TechTicker from './components/TechTicker';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Hero />
      <TechTicker />
      <Features />
      {/* Simple CTA banner */}
      <section id="cta" className="relative bg-black py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,132,252,0.2),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-fuchsia-500/10 to-indigo-500/10 p-8 text-center shadow-[0_0_40px_rgba(168,85,247,0.25)] backdrop-blur">
            <h3 className="text-2xl font-semibold">Ready to add some motion?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-purple-100/80">
              Use this template as a launchpad. Customize the 3D scene, tweak the neon gradients, and ship a striking, interactive experience.
            </p>
            <div className="mt-6 flex justify-center">
              <a href="#features" className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white hover:bg-white/20">See what’s inside</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
