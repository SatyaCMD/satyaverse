"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Code, Layout, Brain, Shield } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "C", "TypeScript", "JavaScript"],
    description: "Versatile in multi-paradigm programming, with hands-on experience ranging from low-level system programming in C to high-level asynchronous development in TypeScript. Applied these skills in building custom OS components and developing scalable backend APIs.",
  },
  {
    title: "Web Technologies",
    icon: Layout,
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "HTML5", "CSS3"],
    description: "Experienced in building scalable web applications using Next.js, with a focus on responsive, pixel-perfect user interfaces and seamless integration with high-performance Express.js backends.",
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy"],
    description: "Deep capability in training and deploying sequential models (LSTMs) and transformers. Passionate about computer vision, data wrangling pipeline optimization, and AI stock prediction architectures.",
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Wireshark", "Metasploit", "Burp Suite", "Nmap"],
    description: "Proficient in proactive threat hunting, vulnerability assessment, and securing edge applications. Proven hands-on background in penetration testing APIs against modern Burpsuite.",
  }
];

export default function SkillsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight"
          >
            Technical Arsenal
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => toggleExpand(idx)}
                className={`p-8 rounded-3xl bg-white/60 backdrop-blur-xl border cursor-pointer transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 ${isExpanded ? 'border-purple-300/80 ring-4 ring-purple-500/10' : 'border-white/60 hover:border-purple-200/80 hover:bg-white/80'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground group-hover:text-purple-700 transition-colors">
                    <div className={`p-3 rounded-2xl transition-colors ${isExpanded ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600'}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    {category.title}
                  </h3>
                  <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-purple-100' : 'bg-gray-50'}`}>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180 text-purple-700' : ''}`} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + sIdx * 0.05 }}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${isExpanded ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-md' : 'bg-gray-50 border border-gray-100 text-gray-700'}`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-gray-100">
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {category.description}
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
