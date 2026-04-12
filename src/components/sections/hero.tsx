"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, TerminalSquare } from "lucide-react";
import ParticlesBackground from "@/components/three/Particles";
import { Button, buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
  const title = "Hi, I'm Satya";
  const roles = "AI Engineer | Cybersecurity Analyst | Full Stack Developer";

  // Split roles into array of characters for typing effect
  const typingCharacters = roles.split("");

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden w-full">
      <ParticlesBackground />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-background/60 z-10" />

      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-md"
        >
          <TerminalSquare className="h-4 w-4" />
          <span>Available for New Opportunities</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
        >
          {title}
        </motion.h1>

        {/* Typing Animation */}
        <div className="h-8 md:h-12 flex justify-center items-center mb-8">
          <motion.p
            initial={{ opacity: 1 }}
            className="text-lg md:text-2xl font-light text-muted-foreground flex items-center"
          >
            {typingCharacters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.05 + 0.6,
                }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-1 inline-block h-6 w-0.5 bg-purple-500 align-middle"
            />
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all hover:scale-105" })}>
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full border-purple-500/50 hover:bg-purple-500/10 font-semibold transition-all hover:scale-105" })}>
            Download Resume <Download className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Neon Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] z-0 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] z-0 pointer-events-none" />
    </section>
  );
}
