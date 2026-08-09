import React from 'react';
import { motion } from 'framer-motion';

/**
 * Hero - "Hearth" identity. No stock photography: the motif is a warm radial hearth glow
 * over the espresso ground with a fine grain, an oversized Fraunces wordmark, and a
 * paprika eyebrow. Moody chef's-table, not a stock-Italian-restaurant template.
 */
const fade = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const Hero = () => (
  <section className="hear relative flex min-h-[92vh] items-center justify-center overflow-hidden">
    <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />

    <div className="relative z-10 px-6 text-center">
      <motion.div {...fade(0.1)} className="mb-6">
        <span className="text-xs uppercase tracking-[0.4em] text-primary">
          Ristorante &middot; Est. 1961
        </span>
      </motion.div>

      <motion.h1
        {...fade(0.25)}
        className="font-display text-6xl text-foreground sm:text-8xl"
        style={{ fontVariationSettings: "'opsz' 120" }}
      >
        San Lorenzo
      </motion.h1>

      <motion.div {...fade(0.4)} className="mx-auto mt-4 h-px w-24 bg-primary/60" />

      <motion.p
        {...fade(0.55)}
        className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
      >
        A small kitchen cooking from scratch over live fire. Seasonal, simple, and honest -
        the way it has been done since 1961.
      </motion.p>
    </div>
  </section>
);

export default Hero;
