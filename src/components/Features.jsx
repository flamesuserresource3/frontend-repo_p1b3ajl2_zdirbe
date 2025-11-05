import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Rocket, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Optimized Performance',
    desc: 'Snappy interactions with hardware-accelerated animations and smart lazy loading.',
  },
  {
    icon: Shield,
    title: 'Robust Foundations',
    desc: 'Built on modern tooling with sensible defaults for reliability and scale.',
  },
  {
    icon: Rocket,
    title: 'Developer Velocity',
    desc: 'Component-driven workflows that help you ship faster without sacrificing quality.',
  },
  {
    icon: Sparkles,
    title: 'Micro‑Animations',
    desc: 'Subtle motion and neon glows to make interfaces feel alive and responsive.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section id="features" className="relative z-10 bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,7,100,0.5),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Designed for Modern Frontends
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-purple-100/80"
        >
          Clean structure, immersive visuals, and a futuristic aesthetic out of the box.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl border border-purple-400/30 bg-purple-500/10 p-3 text-purple-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-purple-100/80">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
