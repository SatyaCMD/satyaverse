"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const certifications = [
  { 
    title: "Python Essentials 1", 
    issuer: "Cisco Networking Academy", 
    date: "Jul 2023",
    description: "Built a strong foundation in Python syntax, multi-paradigm programming, and standard library utilization.",
    techStack: ["Python 3", "Data Structures", "Algorithms"]
  },
  { 
    title: "Cybersecurity Essentials", 
    issuer: "Cisco Networking Academy", 
    date: "Jul 2023",
    description: "Learned the principles of data confidentiality, integrity, and availability. Assessed vulnerabilities and implemented defensive architectures.",
    techStack: ["Network Security", "Cryptography", "Threat Mitigation"]
  },
  { 
    title: "Introduction to Internet of Things (IoT)", 
    issuer: "Cisco Networking Academy", 
    date: "Jul 2023",
    description: "Explored the integration of operational technology and IT systems. Programmed micro-controllers to communicate securely over networks.",
    techStack: ["IoT Standards", "C++", "Network Protocols"]
  },
  { 
    title: "Artificial Intelligence Job Simulation", 
    issuer: "Cognizant", 
    date: "Dec 2023",
    description: "Extracted actionable insights from massive datasets. Engineered workflows for predictive AI modeling tailored to enterprise requirements.",
    techStack: ["Machine Learning", "Data Analysis", "Python"]
  },
  { 
    title: "Building Android Apps with React Native", 
    issuer: "Professional Development", 
    date: "Sep 2024",
    description: "Developed and deployed enterprise-grade cross-platform mobile applications using the latest React Native tools and custom native hooks.",
    techStack: ["React Native", "JavaScript", "Mobile UI/UX"]
  }
];

const achievements = [
  { 
    title: "DRDO Placement Offer", 
    description: "Offered elite placement at DRDO after demonstrating exceptional skills in cybersecurity.",
    impact: "This rare opportunity verified my ability to handle defense-grade security protocols, network anomaly detection, and the hardening of mission-critical infrastructure under extreme security clearances."
  }
];

export default function CertificationsSection() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null);
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);

  const toggleCert = (index: number) => {
    setExpandedCert(expandedCert === index ? null : index);
  }

  const toggleAchievement = (index: number) => {
    setExpandedAchievement(expandedAchievement === index ? null : index);
  }

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Certifications */}
          <div>
            <div className="mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold mb-4 flex items-center gap-4 text-foreground tracking-tight"
              >
                <div className="p-3 bg-purple-100 rounded-2xl shadow-sm">
                  <Award className="text-purple-600 w-8 h-8" />
                </div>
                Certifications
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100px" }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              />
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => {
                const isExpanded = expandedCert === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => toggleCert(idx)}
                    className={`p-6 rounded-3xl bg-white/60 backdrop-blur-xl border cursor-pointer transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 ${isExpanded ? 'border-purple-300/80 ring-4 ring-purple-500/10' : 'border-white/60 hover:border-purple-200/80 hover:bg-white/80'}`}
                  >
                    <div className="flex items-start justify-between group">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-purple-600 transition-colors mb-1">{cert.title}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">{cert.issuer}</span>
                          <span className="text-sm text-muted-foreground font-medium">{cert.date}</span>
                        </div>
                      </div>
                      <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-purple-100' : 'bg-gray-50'}`}>
                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180 text-purple-700' : ''}`} />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 border-t border-gray-100">
                            <p className="text-base text-muted-foreground leading-relaxed mb-4">
                              {cert.description}
                            </p>
                            <div className="flex flex-col gap-2">
                              <span className="text-sm font-bold text-foreground">Tech Stack Mastered:</span>
                              <div className="flex flex-wrap gap-2">
                                {cert.techStack.map(tech => (
                                  <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 text-purple-700 text-xs font-bold rounded-lg flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3 h-3 text-purple-500" /> {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold mb-4 flex items-center gap-4 text-foreground tracking-tight"
              >
                <div className="p-3 bg-blue-100 rounded-2xl">
                  <Trophy className="text-blue-600 w-8 h-8" />
                </div>
                Achievements
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100px" }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
              />
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, idx) => {
                const isExpanded = expandedAchievement === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => toggleAchievement(idx)}
                    className={`p-6 rounded-3xl bg-white/60 backdrop-blur-xl border cursor-pointer transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 ${isExpanded ? 'border-blue-300/80 ring-4 ring-blue-500/10' : 'border-white/60 hover:border-blue-200/80 hover:bg-white/80'}`}
                  >
                    <div className="flex items-start justify-between group">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">{achievement.title}</h3>
                        <p className="text-sm font-medium text-muted-foreground">{achievement.description}</p>
                      </div>
                      <div className={`p-2 rounded-full transition-colors ml-4 shrink-0 ${isExpanded ? 'bg-blue-100' : 'bg-gray-50'}`}>
                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180 text-blue-700' : ''}`} />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-foreground mb-2">Impact & Responsibility</h4>
                            <p className="text-base text-muted-foreground leading-relaxed">
                              {achievement.impact}
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

        </div>
      </div>
    </section>
  );
}
