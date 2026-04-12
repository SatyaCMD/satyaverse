"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import Navbar from "@/components/layout/navbar";
import TerminalModal from "@/components/ui/terminal";
import CustomCursor from "@/components/ui/custom-cursor";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative selection:bg-purple-200">
      <CustomCursor />
      
      <Navbar onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)} />
      
      <div className="w-full">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </div>

      <TerminalModal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />

      {/* Footer */}
      <footer className="w-full py-6 text-center border-t border-border bg-card backdrop-blur-sm mt-12">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Satya. Built with Next.js, Framer Motion, and Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
