'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, DollarSign, Briefcase } from 'lucide-react';

export default function CareerOutcomes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const careers = [
    {
      role: "AI/ML Engineer",
      track: "AI & Data Science",
      salary: "$130K - $180K",
      growth: "+143%",
      color: "from-blue-600 to-cyan-600"
    },
    {
      role: "UX/UI Designer",
      track: "Interactive Experience",
      salary: "$85K - $130K",
      growth: "+45%",
      color: "from-purple-600 to-pink-600"
    },
    {
      role: "Virtual Production Specialist",
      track: "Virtual Production",
      salary: "$75K - $120K",
      growth: "+89%",
      color: "from-red-600 to-orange-600"
    },
    {
      role: "Digital Marketing Manager",
      track: "Digital Entrepreneurship",
      salary: "$70K - $110K",
      growth: "+32%",
      color: "from-green-600 to-emerald-600"
    },
    {
      role: "XR Developer",
      track: "Immersive World-Building",
      salary: "$95K - $145K",
      growth: "+76%",
      color: "from-violet-600 to-fuchsia-600"
    },
    {
      role: "AI Content Creator",
      track: "Multiple Tracks",
      salary: "$80K - $125K",
      growth: "+135%",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Career Outcomes
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            High-value careers with proven salary premiums and explosive growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-red-950/30 to-zinc-950/50 border border-red-900/30 rounded-2xl p-8 text-center">
            <DollarSign className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <div className="text-4xl font-black text-white mb-2">28%</div>
            <div className="text-zinc-400">AI Skills Salary Premium</div>
            <div className="text-sm text-zinc-500 mt-2">≈ $18,000/year more</div>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-zinc-950/50 border border-red-900/30 rounded-2xl p-8 text-center">
            <TrendingUp className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <div className="text-4xl font-black text-white mb-2">143%</div>
            <div className="text-zinc-400">Growth in AI Engineering</div>
            <div className="text-sm text-zinc-500 mt-2">2024-2025 job posting surge</div>
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-zinc-950/50 border border-red-900/30 rounded-2xl p-8 text-center">
            <Briefcase className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <div className="text-4xl font-black text-white mb-2">5</div>
            <div className="text-zinc-400">Future-Ready Career Tracks</div>
            <div className="text-sm text-zinc-500 mt-2">With portfolio capstones</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <motion.div
              key={career.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl p-6 hover:border-red-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${career.color} mb-4`} />
              
              <h3 className="text-xl font-bold text-white mb-2">{career.role}</h3>
              <p className="text-sm text-zinc-500 mb-4">{career.track}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">Salary Range</span>
                  <span className="text-sm font-semibold text-red-400">{career.salary}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">Job Growth</span>
                  <span className="text-sm font-semibold text-green-400">{career.growth}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-900/30 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">The ROI Message for Families</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-red-400 mb-4">College-Focused Families</h4>
              <p className="text-zinc-300 leading-relaxed">
                Elite colleges—MIT, Stanford, Carnegie Mellon, USC—want builders, researchers, and creators. 
                The CORE Hub provides the AI research, VR app, and virtual production portfolio that makes 
                a student's application undeniable. <strong>This is the new "varsity sport" for elite college admissions.</strong>
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-red-400 mb-4">Career-Minded Families</h4>
              <p className="text-zinc-300 leading-relaxed">
                This is a 4-year head start on a six-figure career. Our graduates will be fluent in AI skills 
                that command a 28% salary premium. They'll leave with a professional portfolio, industry certifications, 
                and a network of local tech mentors—<strong>all before their first day of college.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
