"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LineChart, SearchCode, Globe2, ChevronDown } from "lucide-react";
import { useState } from "react";

const hobbies = [
  {
    title: "Research & Development",
    icon: SearchCode,
    summary: "Financial Markets & Algo Trading",
    description: "Passionate about R&D in financial markets, exploring algorithmic trading strategies, and executing deep quantitative analysis.",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    textHover: "group-hover:text-blue-600"
  },
  {
    title: "Retail Trading",
    icon: LineChart,
    summary: "Equity Markets & Tech Analysis",
    description: "Active interest in equity markets, meticulous technical analysis, and harnessing data-driven methodologies for investment decision-making.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    textHover: "group-hover:text-emerald-600"
  },
  {
    title: "Open Source Contributions",
    icon: Globe2,
    summary: "Wikipedia: Post-quantum Crypto",
    description: "Dedicated to the open-source community. Contributed extensively to the Wikipedia article 'Post-quantum cryptography', specifically authoring the Migration section and Blockchain implications section.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    textHover: "group-hover:text-purple-600"
  }
];

export default function HobbiesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="interests" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight"
          >
            Interests & Hobbies
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                onClick={() => toggleExpand(idx)}
                className={`p-8 rounded-3xl bg-white/60 backdrop-blur-xl border cursor-pointer transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 group ${isExpanded ? 'ring-4 ring-black/5 border-black/10' : 'border-white/60 hover:border-black/5 hover:bg-white/80'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${hobby.color} text-white shadow-md transition-transform group-hover:scale-110`}>
                  <hobby.icon className="w-7 h-7" />
                </div>
                
                <h3 className={`text-2xl font-bold text-foreground mb-2 transition-colors ${hobby.textHover}`}>
                  {hobby.title}
                </h3>
                
                <p className="text-sm font-semibold text-muted-foreground mb-4">
                  {hobby.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-foreground/60">{isExpanded ? 'Less info' : 'More info'}</span>
                  <div className={`p-2 rounded-full transition-colors ${isExpanded ? hobby.bg : 'bg-gray-50 group-hover:bg-gray-100'}`}>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180 text-foreground' : ''}`} />
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className={`p-4 rounded-xl ${hobby.bg} border border-black/5`}>
                        <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                          {hobby.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
