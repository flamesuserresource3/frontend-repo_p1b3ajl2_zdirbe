import React from 'react';
import { Github, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black py-12 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.2),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm text-purple-100/80">Cyber Interface</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#features" className="text-sm text-purple-100/80 hover:text-white">Features</a>
          <a href="#cta" className="text-sm text-purple-100/80 hover:text-white">Get Started</a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-purple-100 hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
