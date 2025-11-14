'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

export default function VideoTour() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
            <Play className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Video Tour</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Experience the CORE Hub
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Take a virtual walkthrough of our state-of-the-art facility and see where innovation comes to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border-2 border-red-900/30 shadow-2xl shadow-red-900/20 bg-zinc-950"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent pointer-events-none z-10" />
          
          <video
            controls
            className="w-full h-auto"
            poster="/images/hero-new.jpg"
            preload="metadata"
          >
            <source src="/videos/core-hub-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-red-500 mb-2">3 Zones</div>
            <div className="text-sm text-zinc-400">Purpose-Built Spaces</div>
          </div>
          <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-red-500 mb-2">LED Wall</div>
            <div className="text-sm text-zinc-400">Virtual Production Studio</div>
          </div>
          <div className="bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-red-500 mb-2">5 Tracks</div>
            <div className="text-sm text-zinc-400">Future-Ready Careers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
