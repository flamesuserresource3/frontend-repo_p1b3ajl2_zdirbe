import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#members', label: 'Members' },
    { href: '#donate', label: 'Donate' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-white/20 dark:border-neutral-800 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-400 to-violet-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-neutral-900 dark:text-white">FRC 10922 • Amped</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              className="text-sm font-semibold px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow hover:opacity-90"
            >
              Support Us
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
            >
              Support Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
