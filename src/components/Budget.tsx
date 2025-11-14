'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, CheckCircle2 } from 'lucide-react';

export default function Budget() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const budgetItems = [
    {
      category: "LED Virtual Production Wall",
      description: "Professional-grade LED wall system with mounting and control",
      amount: "$45,000",
      priority: "Tier 1 - Critical"
    },
    {
      category: "High-Performance Computing Rigs",
      description: "5x workstations with RTX 4080 GPUs for AI/ML and 3D rendering",
      amount: "$20,000",
      priority: "Tier 1 - Critical"
    },
    {
      category: "Camera & Lighting Equipment",
      description: "Professional cinema camera, lenses, lighting kit, tripods",
      amount: "$18,000",
      priority: "Tier 1 - Critical"
    },
    {
      category: "VR/AR Headset Kit",
      description: "10x Meta Quest 3S headsets for immersive development",
      amount: "$3,000",
      priority: "Tier 1 - Critical"
    },
    {
      category: "Audio Production Suite",
      description: "Podcast/audio recording equipment for 2-person studio",
      amount: "$2,500",
      priority: "Tier 1 - Critical"
    },
    {
      category: "Furniture & Reconfigurable Tables",
      description: "Mobile desks, ergonomic chairs, whiteboards",
      amount: "$8,000",
      priority: "Tier 1 - Critical"
    },
    {
      category: "Software Licenses",
      description: "Adobe Creative Cloud, Unreal Engine, Unity, industry tools",
      amount: "$5,500",
      priority: "Tier 1 - Critical"
    },
    {
      category: "Facility Build-Out & Installation",
      description: "Renovation, acoustic treatment, electrical, A/V installation",
      amount: "$35,000",
      priority: "Tier 1 - Critical"
    },
    {
      category: "Contingency & Miscellaneous",
      description: "Cables, adapters, small equipment, unexpected costs",
      amount: "$8,000",
      priority: "Tier 1 - Buffer"
    }
  ];

  const total = budgetItems.reduce((sum, item) => 
    sum + parseInt(item.amount.replace(/[$,]/g, '')), 0
  );

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Investment Breakdown
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Strategic allocation focused on "leapfrog" technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-red-950/30 to-zinc-950/50 border-2 border-red-900/40 rounded-3xl p-12 mb-12 text-center"
        >
          <DollarSign className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <div className="text-6xl md:text-7xl font-black text-white mb-4">
            ${total.toLocaleString()}
          </div>
          <div className="text-xl text-zinc-400 mb-2">Total Initial Investment</div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/20 border border-green-600/30 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Under $150,000 Budget Requirement</span>
          </div>
        </motion.div>

        <div className="space-y-4 mb-12">
          {budgetItems.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl p-6 hover:border-red-700/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{item.category}</h3>
                    <span className="text-xs px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-red-400">
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-red-400">{item.amount}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-900/30 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Strategic Prioritization</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-red-400 mb-4">What's Included (Tier 1)</h4>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Professional LED Virtual Production Wall - the flagship differentiator</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>High-performance computing for AI/ML and 3D development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Cinema-grade production equipment and VR/AR headsets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Flexible, collaborative workspace design</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-zinc-500 mb-4">Deferred to Phase 2</h4>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-zinc-600">•</div>
                  <span>Traditional makerspace equipment (3D printers, laser cutters)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-zinc-600">•</div>
                  <span>Electronics and robotics benches</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-zinc-600">•</div>
                  <span>Expansion of workstation count beyond initial 5 units</span>
                </li>
              </ul>
              <p className="text-sm text-zinc-500 mt-4 italic">
                This "inch wide, mile deep" approach focuses resources on next-generation technologies 
                that competitors lack, rather than spreading thin across conventional equipment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
