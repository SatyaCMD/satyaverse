"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, TerminalSquare, BrainCircuit } from "lucide-react";
import ParticlesBackground from "@/components/three/Particles";
import { Button, buttonVariants } from "@/components/ui/button";
import { ResumeDialog } from "@/components/ui/resume-dialog";
import { useState } from "react";

export default function HeroSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
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
        {/* Animated Badge - Trading Status style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-1.5 text-sm font-mono font-medium text-slate-800 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>SYSTEM.STATUS: AVAILABLE_FOR_OPPORTUNITIES</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl text-slate-900 leading-tight tracking-[-0.04em]"
        >
          {title}
        </motion.h1>

        {/* Typing Animation */}
        <div className="h-8 md:h-12 flex justify-center items-center mb-8">
          <motion.p
            initial={{ opacity: 1 }}
            className="text-lg md:text-2xl font-light text-slate-500 flex items-center font-mono"
          >
            <span className="text-indigo-600 mr-2">{">"}</span>
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
              className="ml-1 inline-block h-[1.2em] w-2.5 bg-indigo-600 align-middle"
            />
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className={buttonVariants({ size: "lg", className: "rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-md" })}>
            Deploy Vision <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download="Satya-Resume.pdf" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-md border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-semibold shadow-sm transition-all hover:-translate-y-0.5" })}>
            Execute PDF_DL <Download className="ml-2 h-4 w-4" />
          </a>
          <Button onClick={() => setIsResumeOpen(true)} variant="outline" size="lg" className="rounded-md border-indigo-200 bg-indigo-50/50 hover:bg-indigo-100 text-indigo-700 font-semibold shadow-sm transition-all hover:-translate-y-0.5">
            Analyze Metrics <BrainCircuit className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-[128px] z-0 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[128px] z-0 pointer-events-none" />

      <ResumeDialog isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
