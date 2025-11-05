import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Vite',
  'React',
  'Tailwind',
  'Framer Motion',
  'Spline',
  'FastAPI',
  'MongoDB',
  'TypeScript',
];

const TechTicker = () => {
  return (
    <section className="relative bg-black py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(126,34,206,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          >
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-purple-100"
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechTicker;
