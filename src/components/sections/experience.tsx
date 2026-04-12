"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Python Developer",
    company: "Infosys Springboard",
    date: "2023 - Present",
    description: "Developed and optimized Python-based backends, improving data processing workflows and contributing to open-source style initiatives internally.",
  },
  {
    title: "Cyber Security Analyst",
    company: "The Drop Organization",
    date: "2022 - 2023",
    description: "Performed penetration testing, identified security vulnerabilities, and crafted mitigation reports. Secured internal applications against OWASP top 10 threats.",
  },
  {
    title: "Cyber Security Engineer",
    company: "DRDO",
    date: "2021 - 2022",
    description: "Collaborated on defense-level security protocols, analyzing network traffic for anomaly detection, and hardening critical infrastructure systems.",
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 inline-block"
          >
            Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
          />
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block md:w-5/12" />
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-purple-500 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors backdrop-blur-sm relative group`}>
                    <span className="text-sm font-semibold text-purple-400 mb-2 block">{exp.date}</span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">{exp.title}</h3>
                    <h4 className="text-md text-gray-400 mb-4">{exp.company}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
