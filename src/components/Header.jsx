import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">Vibe App</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#cta" className="hover:text-slate-900 transition-colors">Get Started</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
            <Star size={16} />
            Star
          </button>
        </div>
      </div>
    </header>
  );
}
