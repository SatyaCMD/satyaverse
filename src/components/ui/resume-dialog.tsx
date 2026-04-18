"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, BrainCircuit, Download, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import resumeData from "@/data/resume.json";

interface ResumeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeDialog({ isOpen, onClose }: ResumeDialogProps) {
  const [activeTab, setActiveTab] = useState<"ai_summary" | "data">("ai_summary");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BrainCircuit className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">AI Resume Analysis</h2>
                  <p className="text-xs text-muted-foreground">Dynamic interpretation of {resumeData.name}'s Profile</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="flex border-b border-border bg-muted/10">
              <button 
                onClick={() => setActiveTab("ai_summary")}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'ai_summary' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}
              >
                AI Interpretation
              </button>
              <button 
                onClick={() => setActiveTab("data")}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'data' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}
              >
                Raw Data Sync
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              {activeTab === "ai_summary" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-100">
                    <p className="text-sm font-medium text-purple-800 leading-relaxed">
                      "I've analyzed Satya's latest resume file. He is a highly specialized {resumeData.title}. Based on his data, he straddles the rare intersection between deep systems knowledge (C, Operating Systems), robust web architecture (Next.js, FastAPI), and cutting-edge intelligence (AI Models, Neural Networks)."
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-green-500" /> Key Strengths
                    </h3>
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground"><strong className="text-foreground">Full Stack Competence:</strong> Proficient in {resumeData.skills.frameworks.slice(0, 3).join(", ")}.</li>
                      <li className="text-sm text-muted-foreground"><strong className="text-foreground">Security Focus:</strong> Demonstrated professional experience with {resumeData.skills.security[0]} and threat mitigation.</li>
                      <li className="text-sm text-muted-foreground"><strong className="text-foreground">Complex Problem Solving:</strong> Proven by building an advanced {resumeData.projects[0].name} and a {resumeData.projects[1].name}.</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "data" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                   <p className="text-xs text-muted-foreground mb-4">Because this dashboard is linked to `resume.json`, the website will dynamically auto-update whenever the resume source changes.</p>
                   <pre className="p-4 bg-black/90 text-green-400 rounded-xl text-xs overflow-x-auto shadow-inner">
                     {JSON.stringify(resumeData, null, 2)}
                   </pre>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-border bg-muted/30 flex justify-end gap-3">
              <a href="/satya-resume.pdf" download className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg text-sm flex items-center hover:opacity-90 transition-opacity shadow-sm">
                <Download className="w-4 h-4 mr-2" /> Download Original PDF
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
