'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Film, Cpu, Users } from 'lucide-react';
import Image from 'next/image';

export default function FacilityZones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const zones = [
    {
      icon: Film,
      title: "Zone 1: Virtual Production Studio",
      subtitle: "The CORE",
      color: "from-red-600 to-orange-600",
      borderColor: "border-red-900/30",
      features: [
        "LED Virtual Production Wall",
        "Professional Camera & Lighting",
        "Sound-Dampened Audio Station",
        "Real-Time Rendering"
      ],
      description: "The heart of the Hub and primary marketing showpiece. Houses the LED wall for in-camera visual effects and virtual cinematography.",
      image: "/images/virtual-production.jpg"
    },
    {
      icon: Cpu,
      title: "Zone 2: Deep Tech Lab",
      subtitle: "The ENGINE",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-900/30",
      features: [
        "High-Performance Computing Rigs",
        "AI & Machine Learning Workstations",
        "3D Asset Development",
        "VR/AR Testing Area"
      ],
      description: "High-computational-power zone serving as the brain of the facility. Powers AI development and 3D world-building.",
      image: "/images/facility-zones.png"
    },
    {
      icon: Users,
      title: "Zone 3: Collab & Design Studio",
      subtitle: "The HUB",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-900/30",
      features: [
        "Wall-to-Wall Whiteboards",
        "Reconfigurable Furniture",
        "Design Sprint Spaces",
        "Project Management Pods"
      ],
      description: "Clean, human-centric workspace for UI/UX and entrepreneurship. Flexible setup for design thinking and collaboration.",
      image: "/images/collab-space.jpg"
    }
  ];

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
            The 3-Zone Facility
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A studio-first design philosophy: flexible, reconfigurable, and interdisciplinary
          </p>
        </motion.div>

        <div className="space-y-12">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className={`bg-gradient-to-br ${zone.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <zone.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">{zone.title}</h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${zone.color} bg-clip-text text-transparent mb-4`}>
                  {zone.subtitle}
                </p>
                <p className="text-zinc-400 mb-6 leading-relaxed">{zone.description}</p>

                <div className="space-y-3">
                  {zone.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${zone.color}`} />
                      <span className="text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`relative rounded-2xl overflow-hidden border-2 ${zone.borderColor} shadow-2xl`}>
                  <Image 
                    src={zone.image} 
                    alt={zone.title} 
                    width={600} 
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-900/30 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">The LED Wall: A Game-Changing Technology</h3>
          <p className="text-zinc-300 text-lg max-w-4xl mx-auto leading-relaxed mb-6">
            The LED Virtual Production Wall is not just a display—it's a real-time production tool driven by game engines like Unreal. 
            Unlike green screens, it enables in-camera visual effects with realistic lighting and reflections, teaching students 
            the entire virtual production pipeline used by Hollywood and cutting-edge content creators.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 border border-red-600/30 rounded-lg">
            <span className="text-red-400 font-semibold">This is the "leapfrog" technology that sets us apart</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
