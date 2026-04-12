"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C++", "C", "TypeScript", "JavaScript"],
  },
  {
    title: "Web Technologies",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    title: "Cybersecurity",
    skills: ["Wireshark", "Metasploit", "Burp Suite", "Nmap", "Kali Linux", "OWASP Top 10"],
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + sIdx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-black/40 border border-white/5 text-sm font-medium text-gray-300 hover:text-white hover:border-purple-500/50 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
