'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Users, Briefcase, Award } from 'lucide-react';
import Image from 'next/image';

export default function StrategicImperative() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      value: "75%",
      label: "of knowledge workers now use generative AI"
    },
    {
      icon: Briefcase,
      value: "28%",
      label: "salary premium for AI-skilled professionals"
    },
    {
      icon: Brain,
      value: "143%",
      label: "surge in AI Engineer job postings"
    },
    {
      icon: Award,
      value: "134%",
      label: "surge in AI Content Creator roles"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Why Now?
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            The future of work is already here. AI fluency is the new literacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur border border-red-900/20 rounded-xl p-6 text-center hover:border-red-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20"
            >
              <stat.icon className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">The Human + Machine Imperative</h3>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Microsoft and LinkedIn data shows that <strong className="text-red-400">75% of global knowledge professionals</strong> now utilize generative AI at work. AI Fluency has become the new baseline requirement.
              </p>
              <p>
                The market is aggressively rewarding "T-shaped" individuals who merge human skills—analytical thinking, creativity, empathy—with the technical proficiency to direct and leverage AI partners.
              </p>
              <p>
                Jobs requiring AI skills command a tangible <strong className="text-red-400">28% salary premium</strong>, approximately $18,000 per year more than traditional roles.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-red-900/30 shadow-2xl shadow-red-900/20">
              <Image 
                src="/images/ai-concept.png" 
                alt="AI Concept" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
