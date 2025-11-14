'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const recommendations = [
    "Approve the $150,000 initial investment budget as detailed",
    "Adopt the five 4-year learning tracks outlined in this proposal",
    "Authorize formation of the 'Techtopia' Advisory Board",
    "Proceed with Phase 1 implementation beginning Q1 2025"
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/images/facility-zones.png" 
          alt="CORE Hub Facility" 
          fill 
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            The Time Is Now
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Position Bishop Diego as the undisputed regional leader in future-ready education
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-red-900/40 rounded-3xl p-12 mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Board Recommendations</h3>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-lg">{rec}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="bg-gradient-to-br from-red-950/30 to-zinc-950/50 border border-red-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">The Opportunity</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>First institution in Santa Barbara to integrate AI, Virtual Production, and XR</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Clear competitive advantage over Dunn, Cate, VADA, and DPEA</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Proven 28% salary premium for AI-skilled graduates</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Partnership with local "Techtopia" tech companies</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-zinc-950/50 border border-red-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">The Outcome</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Graduates with professional portfolios and industry certifications</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Compelling applications to elite universities</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>4-year head start on high-value careers</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>"Automation-proof" graduates equipped to lead in the AI economy</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-1">
            <div className="bg-zinc-950 rounded-xl px-12 py-8">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Future-Ready. Today.
              </h3>
              <p className="text-zinc-400 text-lg mb-6">
                The CORE Hub isn't just about preparing for the future—it's about leading it.
              </p>
              <div className="flex items-center justify-center gap-8 mt-8">
                <Image 
                  src="/images/bd-logo.png" 
                  alt="Bishop Diego Logo" 
                  width={100} 
                  height={100}
                  className="object-contain opacity-80"
                />
                <Image 
                  src="/images/cardinal-logo.png" 
                  alt="Cardinal Logo" 
                  width={80} 
                  height={80}
                  className="object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-600 text-sm">
            Bishop Diego High School | Santa Barbara, California
          </p>
          <p className="text-zinc-700 text-xs mt-2">
            Where Innovation Meets Education
          </p>
        </motion.div>
      </div>
    </section>
  );
}
