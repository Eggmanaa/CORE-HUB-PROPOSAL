'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, TrendingUp, Target } from 'lucide-react';

export default function ExecutiveSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Target,
      title: "Strategic Investment",
      value: "<$150K",
      description: "Initial capital budget for state-of-the-art facility"
    },
    {
      icon: TrendingUp,
      title: "Career Premium",
      value: "28%",
      description: "Higher salaries for AI-skilled professionals"
    },
    {
      icon: Sparkles,
      title: "Learning Tracks",
      value: "5",
      description: "Comprehensive 4-year specialized programs"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Executive Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-900/20 rounded-2xl p-8 hover:border-red-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20"
            >
              <item.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-4xl font-black text-white mb-2">{item.value}</h3>
              <h4 className="text-lg font-semibold text-red-400 mb-2">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-red-900/30 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">The Strategic Imperative</h3>
          <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
            <p>
              The <span className="text-red-400 font-semibold">"2030 future of work"</span> is no longer a distant forecast—it is the <span className="text-red-400 font-semibold">2025 present</span>. The labor market is now defined by a "human + machine" imperative, where generative AI is a baseline reality.
            </p>
            <p>
              The CORE Hub represents a <span className="text-red-400 font-semibold">"leapfrog" strategy</span>, deliberately bypassing the 2015-era "makerspace" model to establish a state-of-the-art virtual production and deep-tech lab featuring a professional-grade <span className="text-red-400 font-semibold">LED Virtual Production Wall</span>.
            </p>
            <p>
              This investment provides a <span className="text-red-400 font-semibold">decisive and defensible competitive advantage</span> for Bishop Diego in the Santa Barbara market, positioning the school as the undisputed regional leader in future-ready education.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
