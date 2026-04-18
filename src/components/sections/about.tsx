"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, ShieldAlert, Cpu, ChevronDown } from "lucide-react";
import { useState } from "react";

const domains = [
  {
    title: "AI/ML",
    description: "Developing intelligent models, natural language processing, and predictive analytics that drive innovation.",
    details: "I utilize frameworks like PyTorch and TensorFlow to build robust neural networks. My focus includes Computer Vision, NLP tasks, and optimizing ML workflows for edge deployment and fast real-time inference.",
    icon: Cpu,
  },
  {
    title: "Cybersecurity",
    description: "Securing applications, conducting vulnerability assessments, and implementing robust security architectures.",
    details: "From ethical hacking to defensive architecture, I actively follow OWASP guidelines to patch systems. I am experienced in network analysis, threat mitigation, and rigorous penetration testing protocols.",
    icon: ShieldAlert,
  },
  {
    title: "Full Stack Development",
    description: "Architecting scalable web applications from performance-optimized frontends to reliable backend services.",
    details: "Using tools like Next.js, React, Node.js, and SQL/NoSQL databases, I construct highly scalable web apps. I build clean, aesthetic user interfaces paired with highly secure, high-performance API backends.",
    icon: Code2,
  }
];

export default function AboutSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              About Me
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              I am a driven Computer Science aspiring to build secure, scalable, and intelligent systems. By blending Artificial Intelligence, robust Cybersecurity practices, and Full Stack development, I create comprehensive solutions to complex modern problems.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              My journey seamlessly transitions between breaking into systems (ethically) to understand their flaws, and architecting robust applications powered by machine learning insights.
            </motion.p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                onClick={() => toggleExpand(index)}
                className={`p-8 rounded-3xl bg-white/60 backdrop-blur-xl border cursor-pointer transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 group ${index === 2 ? 'sm:col-span-2' : ''} ${expandedIndex === index ? 'border-purple-300/80 ring-4 ring-purple-500/10' : 'border-white/60 hover:border-purple-200/80 hover:bg-white/80'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <domain.icon className="w-10 h-10 text-purple-600" />
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-purple-600 transition-colors">{domain.title}</h3>
                <p className="text-sm text-muted-foreground">{domain.description}</p>
                
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-black/10">
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {domain.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
