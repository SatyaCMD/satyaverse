"use client";

import { motion } from "framer-motion";
import { Code2, ShieldAlert, Cpu } from "lucide-react";

const domains = [
  {
    title: "AI/ML",
    description: "Developing intelligent models, natural language processing, and predictive analytics that drive innovation.",
    icon: Cpu,
  },
  {
    title: "Cybersecurity",
    description: "Securing applications, conducting vulnerability assessments, and implementing robust security architectures.",
    icon: ShieldAlert,
  },
  {
    title: "Full Stack Development",
    description: "Architecting scalable web applications from performance-optimized frontends to reliable backend services.",
    icon: Code2,
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
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
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <domain.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
                <p className="text-sm text-muted-foreground">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
