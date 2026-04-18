"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "AI Stock Price Predictor",
    description: "An advanced machine learning model to forecast stock prices using real-time market data. Built with an intuitive dashboard for interactive analysis.",
    tags: ["Python", "TensorFlow", "React", "Next.js", "FastAPI"],
    githubUrl: "https://github.com/SatyaCMD",
    liveUrl: "https://satya.dev",
    imageUrls: ["/project_aistock.png", "/project_aistock_2.png"],
    isHighlighted: true,
  },
  {
    title: "Custom Operating System",
    description: "A minimal, educational operating system written from scratch to understand process management, memory allocation, and hardware interactions.",
    tags: ["C", "Assembly", "x86 Architecture", "Make"],
    githubUrl: "https://github.com/SatyaCMD",
    liveUrl: "https://satya.dev",
    imageUrls: ["/project_os.png", "/project_os_2.png"],
  },
  {
    title: "Airline Booking Simulator",
    description: "A comprehensive booking system simulator modeling multi-user reservations, database concurrency, and ticketing edge cases.",
    tags: ["Java", "Spring Boot", "MySQL", "Docker"],
    githubUrl: "https://github.com/SatyaCMD",
    liveUrl: "https://satya.dev",
    imageUrls: ["/project_airline.png", "/project_airline_2.png"],
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
