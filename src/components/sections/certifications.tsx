"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const certifications = [
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", date: "Jul 2023" },
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "Jul 2023" },
  { title: "Introduction to Internet of Things (IoT)", issuer: "Cisco Networking Academy", date: "Jul 2023" },
  { title: "Artificial Intelligence Job Simulation", issuer: "Cognizant", date: "Dec 2023" },
  { title: "Building Android Apps with React Native", issuer: "Professional Development", date: "Sep 2024" }
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
                className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 text-foreground"
              >
                <Award className="text-purple-600 w-8 h-8" /> Certifications
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "80px" }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
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
                  className="p-6 rounded-2xl bg-card border border-border hover:border-purple-300 shadow-sm hover:shadow-md transition-all backdrop-blur-sm flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-600 transition-colors">{cert.title}</h3>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-right">{cert.issuer}</span>
                    <span className="text-xs text-muted-foreground mr-1">{cert.date}</span>
                  </div>
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
                className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 text-foreground"
              >
                <Trophy className="text-blue-600 w-8 h-8" /> Achievements
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "80px" }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
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
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all backdrop-blur-sm group"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">{achievement.title}</h3>
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
