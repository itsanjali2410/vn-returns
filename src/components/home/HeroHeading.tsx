'use client';

import { motion } from 'framer-motion';

export default function HeroHeading() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug max-w-3xl"
      >
        <span className="mb-4">Your Journey Begins Here</span>
        <span className="font-dancing bg-gradient-to-r from-yellow-400/90 to-yellow-600 bg-clip-text text-transparent lg:text-7xl xs:text-5xl">
          Explore More with Tripstars
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl"
      >
        Discover top holiday packages, exclusive travel deals, and unforgettable experiences crafted
        just for you.
      </motion.p>
    </section>
  );
}
