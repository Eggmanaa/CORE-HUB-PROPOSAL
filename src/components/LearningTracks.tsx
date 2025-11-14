'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Palette, Video, Rocket, Boxes } from 'lucide-react';

export default function LearningTracks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tracks = [
    {
      icon: Brain,
      title: "AI & Data Science",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-900/30 hover:border-blue-600/50",
      shadowColor: "hover:shadow-blue-900/20",
      careers: ["AI/ML Specialist", "Data Scientist", "AI Prompt Engineer", "AI Ethicist"],
      description: "Cultivate dual mastery of building AI models and the human-centric thinking to question them.",
      highlights: ["Python & Machine Learning", "Neural Networks", "Data Ethics", "Portfolio Capstone"]
    },
    {
      icon: Palette,
      title: "Interactive Experience & UI/UX",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-900/30 hover:border-purple-600/50",
      shadowColor: "hover:shadow-purple-900/20",
      careers: ["UX/UI Designer", "Immersive Experience Designer", "Creative Technologist"],
      description: "Master human-computer interaction, blending empathy, psychology, visual design, and logic.",
      highlights: ["Design Thinking", "User Research", "Prototyping", "Interactive Design"]
    },
    {
      icon: Video,
      title: "Virtual Production & Storytelling",
      color: "from-red-600 to-orange-600",
      borderColor: "border-red-900/30 hover:border-red-600/50",
      shadowColor: "hover:shadow-red-900/20",
      careers: ["Virtual Production Specialist", "Video Producer", "Content Creator", "Audio Engineer"],
      description: "Master next-generation storytelling with LED wall virtual production and real-time rendering.",
      highlights: ["Virtual Cinematography", "LED Wall Production", "Unreal Engine", "Audio Production"]
    },
    {
      icon: Rocket,
      title: "Digital Entrepreneurship & Marketing",
      color: "from-green-600 to-emerald-600",
      borderColor: "border-green-900/30 hover:border-green-600/50",
      shadowColor: "hover:shadow-green-900/20",
      careers: ["Digital Marketing Strategist", "SEO Specialist", "Social Media Manager", "Founder"],
      description: "Learn to build brands, analyze data, find audiences, and create companies in the digital economy.",
      highlights: ["Digital Marketing", "SEO & Analytics", "Brand Building", "Startup Creation"]
    },
    {
      icon: Boxes,
      title: "Immersive World-Building & XR",
      color: "from-violet-600 to-fuchsia-600",
      borderColor: "border-violet-900/30 hover:border-violet-600/50",
      shadowColor: "hover:shadow-violet-900/20",
      careers: ["XR Developer", "VR/AR Designer", "3D Modeler", "Game Developer"],
      description: "Fuse art and code to build 3D interactive worlds for LED walls, VR headsets, and beyond.",
      highlights: ["Unity & Unreal", "3D Modeling", "VR/AR Development", "Interactive Experiences"]
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Five 4-Year Learning Tracks
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Each track culminates in a professional portfolio capstone project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-zinc-950/80 backdrop-blur border ${track.borderColor} rounded-2xl p-8 transition-all duration-300 ${track.shadowColor} hover:shadow-xl ${index === 4 ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto' : ''}`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-6`}>
                <track.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{track.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{track.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Career Paths</h4>
                <div className="flex flex-wrap gap-2">
                  {track.careers.map((career) => (
                    <span key={career} className="text-xs px-3 py-1 bg-zinc-800/50 rounded-full text-zinc-300 border border-zinc-700/50">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Program Highlights</h4>
                <ul className="space-y-2">
                  {track.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-zinc-400 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${track.color}`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-red-950/30 to-zinc-950/50 border border-red-900/30 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">4-Year Curriculum Structure</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <div className="text-2xl font-black text-red-500 mb-2">9th Grade</div>
              <div className="text-sm text-zinc-400">Foundations of Media & Technology</div>
            </div>
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <div className="text-2xl font-black text-red-500 mb-2">10th Grade</div>
              <div className="text-sm text-zinc-400">Track Selection & Core Skills</div>
            </div>
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <div className="text-2xl font-black text-red-500 mb-2">11th Grade</div>
              <div className="text-sm text-zinc-400">Advanced Specialization</div>
            </div>
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <div className="text-2xl font-black text-red-500 mb-2">12th Grade</div>
              <div className="text-sm text-zinc-400">Capstone Portfolio Project</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
