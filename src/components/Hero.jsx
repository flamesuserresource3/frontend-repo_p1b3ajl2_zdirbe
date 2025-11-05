import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for cyber vibe (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-20 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.35),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span className="text-sm text-purple-200/80">Futuristic • Cyber • Animated</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="text-balance bg-gradient-to-br from-white via-purple-100 to-purple-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Build with a Cyberpunk Edge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-2xl text-lg text-purple-100/80"
        >
          Experience an interactive 3D hero, neon gradients, and smooth micro-animations. Turn your ideas into visually striking, high‑performance interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-xl border border-purple-400/30 bg-purple-500/10 px-5 py-3 text-purple-100 shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-colors hover:bg-purple-500/20"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Explore Features
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
