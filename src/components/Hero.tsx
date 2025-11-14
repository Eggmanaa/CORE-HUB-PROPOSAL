'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-zinc-950 to-zinc-950" />
      
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/images/hero-new.jpg" 
          alt="CORE Hub Facility" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-8 mb-12">
            <Image 
              src="/images/bd-logo.png" 
              alt="Bishop Diego Logo" 
              width={150} 
              height={150}
              className="object-contain"
            />
            <Image 
              src="/images/cardinal-logo.png" 
              alt="Cardinal Logo" 
              width={120} 
              height={120}
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent tracking-tight"
        >
          CORE HUB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl md:text-4xl font-light text-zinc-300 mb-8 tracking-wide"
        >
          Creative • Operations • Reality Engine
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-light"
        >
          Future-Ready Learning in Action
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="inline-flex flex-col items-center gap-4"
        >
          <div className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white font-semibold text-lg shadow-lg shadow-red-900/50">
            Bishop Diego High School
          </div>
          <p className="text-zinc-500 text-sm uppercase tracking-wider">Where Innovation Meets Education</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-red-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
