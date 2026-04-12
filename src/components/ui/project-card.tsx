"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isHighlighted?: boolean;
}

export function ProjectCard({ title, description, tags, githubUrl, liveUrl, isHighlighted }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation limits (-10 to 10 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`h-full relative group rounded-xl ${isHighlighted ? 'p-[2px] bg-gradient-to-br from-purple-500 to-blue-500' : ''}`}
    >
      <Card className="h-full bg-card backdrop-blur-sm border-border hover:bg-accent/50 transition-colors duration-300 relative overflow-hidden group shadow-sm hover:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <CardContent className="p-6 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
          {isHighlighted && (
            <span className="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wider">
              ✦ Highlighted Project
            </span>
          )}
          <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-purple-100 text-purple-700 border border-purple-200">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-auto">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-purple-600 transition-colors">
                <Code2 className="w-4 h-4 mr-1.5" /> Source
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-purple-600 transition-colors">
                <ExternalLink className="w-4 h-4 mr-1.5" /> Live Demo
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
