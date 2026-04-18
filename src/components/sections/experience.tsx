"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Python Developer",
    company: "Infosys Springboard",
    date: "November 2025 – January 2026",
    description: "Developed and optimized Python-based backends, improving data processing workflows and contributing to open-source style initiatives internally.",
    skills: ["Python", "Django", "REST APIs", "Data Pipelines", "SQL"],
  },
  {
    title: "Cyber Security Analyst",
    company: "The Drop Organization",
    date: "July 2025 – September 2025",
    description: "Performed penetration testing, identified security vulnerabilities, and crafted mitigation reports. Secured internal applications against OWASP top 10 threats.",
    skills: ["Penetration Testing", "OWASP Top 10", "Burp Suite", "Network Sniffing", "Report Writing"],
  },
  {
    title: "Cyber Security Engineer",
    company: "DRDO",
    date: "March 2023 – July 2024",
    description: "Collaborated on defense-level security protocols, analyzing network traffic for anomaly detection, and hardening critical infrastructure systems.",
    skills: ["Threat Intelligence", "Wireshark", "Linux Sec", "Splunk", "Incident Response"],
  }
];

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 inline-block text-foreground tracking-tight"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto relative cursor-default">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400/50 via-blue-400/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block md:w-1/2 px-8" />

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-purple-500 -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] mt-4 md:mt-0 z-20">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>

                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 mt-2 md:mt-0">
                  <div
                    onClick={() => toggleExpand(index)}
                    className={`p-8 rounded-3xl bg-white/60 backdrop-blur-xl border cursor-pointer transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 group ${expandedIndex === index ? 'border-purple-300/80 ring-4 ring-purple-500/10' : 'border-white/60 hover:border-purple-200/80 hover:bg-white/80'}`}
                  >
                    <span className="text-sm font-semibold text-purple-600 mb-2 block">{exp.date}</span>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">{exp.title}</h3>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                    </div>
                    <h4 className="text-md text-gray-600 mb-4 font-medium">{exp.company}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-100">
                            <h5 className="text-sm font-semibold text-foreground mb-3">Tech Skills Learned:</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <span key={skill} className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100 rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
