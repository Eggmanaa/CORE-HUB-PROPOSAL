'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Users, Building, Trophy } from 'lucide-react';

export default function Implementation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      icon: Calendar,
      phase: "Phase 1",
      title: "The Foundation",
      timeline: "Year 0 / Q1-Q4 2025",
      color: "from-blue-600 to-cyan-600",
      milestones: [
        "Secure Board approval for $150K budget",
        "Finalize facility renovation plans",
        "Hire full-time Program Director",
        "Form 'Techtopia' Advisory Board"
      ]
    },
    {
      icon: Building,
      phase: "Phase 2",
      title: "The Build & Pilot",
      timeline: "Year 1 / Q1 2026 - Q2 2027",
      color: "from-purple-600 to-pink-600",
      milestones: [
        "Complete facility renovation and equipment installation",
        "Pilot 9th grade 'Foundations' course with first cohort",
        "Begin external marketing campaign",
        "Establish industry partnerships"
      ]
    },
    {
      icon: Users,
      phase: "Phase 3",
      title: "Full Launch",
      timeline: "Year 2 / Q3 2027 - Q2 2028",
      color: "from-red-600 to-orange-600",
      milestones: [
        "Official CORE Hub grand opening",
        "Launch all 9th and 10th grade courses",
        "Host first annual Demo Day event",
        "Full enrollment across all tracks"
      ]
    },
    {
      icon: Trophy,
      phase: "Phase 4",
      title: "Optimization & First Cohort",
      timeline: "Year 4 / Q3 2029+",
      color: "from-green-600 to-emerald-600",
      milestones: [
        "First cohort completes capstone projects",
        "Gather college placement and certification data",
        "Refine curriculum based on outcomes",
        "Launch proven-success marketing campaign"
      ]
    }
  ];

  const partnerships = [
    {
      title: "CORE Advisory Board",
      description: "VPs, Directors, and Lead Engineers from local tech companies meet twice yearly to review curriculum and critique capstone projects"
    },
    {
      title: "Capstone Mentor Program",
      description: "12th grade students paired with local tech professionals for one-on-one guidance on final portfolio projects"
    },
    {
      title: "Industry Certifications",
      description: "Curriculum built to enable students to earn Google, HubSpot, and Adobe certifications that are valuable on day one"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Implementation Roadmap
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A phased, multi-year rollout ensuring excellence at every stage
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${phase.color} rounded-lg mb-3`}>
                    <phase.icon className="w-6 h-6 text-white" />
                    <span className="text-white font-bold">{phase.phase}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-zinc-500 text-sm">{phase.timeline}</p>
                </div>

                <div className="md:col-span-9">
                  <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl p-6">
                    <ul className="space-y-3">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mt-2 flex-shrink-0`} />
                          <span className="text-zinc-300">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < phases.length - 1 && (
                <div className="hidden md:block absolute left-9 top-20 bottom-0 w-0.5 bg-gradient-to-b from-red-600/50 to-transparent h-12" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-900/30 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            The "Techtopia" Partnership Program
          </h3>
          <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12">
            Long-term success fueled by Santa Barbara's tech ecosystem: Procore, Sonos, AppFolio, Invoca, Yardi
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
              >
                <h4 className="text-xl font-semibold text-red-400 mb-3">{partnership.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{partnership.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
