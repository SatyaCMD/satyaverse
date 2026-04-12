"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const certifications = [
  { title: "Cisco Certifications", issuer: "Cisco" },
  { title: "Cognizant AI Simulation", issuer: "Cognizant" }
];

const achievements = [
  { title: "DRDO Placement Offer", description: "Offered elite placement at DRDO after demonstrating exceptional skills in cybersecurity." }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Certifications */}
          <div>
            <div className="mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3"
              >
                <Award className="text-purple-400 w-8 h-8" /> Certifications
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "80px" }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              />
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors backdrop-blur-sm flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{cert.title}</h3>
                  <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">{cert.issuer}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3"
              >
                <Trophy className="text-blue-400 w-8 h-8" /> Achievements
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "80px" }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-colors backdrop-blur-sm group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
