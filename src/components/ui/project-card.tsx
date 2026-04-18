"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrls?: string[];
  isHighlighted?: boolean;
}

export function ProjectCard({ title, description, tags, githubUrl, liveUrl, imageUrls, isHighlighted }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isOpen) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const hasImages = imageUrls && imageUrls.length > 0;
  const activeImage = hasImages ? imageUrls[currentImageIndex] : undefined;
  const previewImage = hasImages ? imageUrls[0] : undefined;

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (hasImages && imageUrls) {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (hasImages && imageUrls) {
      setCurrentImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
    }
  };

  // Auto-advance carousel when modal is open
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && hasImages && imageUrls && imageUrls.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
      }, 2000); // 2 seconds per image
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, hasImages, imageUrls]);

  return (
    <>
      <motion.div
        ref={cardRef}
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen(true)}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`h-full relative group rounded-xl cursor-pointer ${isHighlighted ? 'p-[2px] bg-gradient-to-br from-purple-500 to-blue-500' : ''}`}
      >
        <Card className="h-full bg-card backdrop-blur-sm border-border hover:bg-accent/50 transition-colors duration-300 relative overflow-hidden group shadow-sm hover:shadow-md">
          {previewImage && (
            <div className="h-48 w-full overflow-hidden relative border-b border-border">
              <img src={previewImage} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          )}
          <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)] transform-gpu" style={{ transform: "translateZ(30px)" }}>
            {isHighlighted && (
              <span className="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wider">
                ✦ Highlighted Project
              </span>
            )}
            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-purple-600 transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-purple-100 text-purple-700 border border-purple-200">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Expanded Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md border border-border rounded-full hover:bg-background/80 transition-colors z-30 shadow-sm"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {hasImages && (
                  <div className="w-full h-64 md:h-96 relative bg-muted shrink-0 group/carousel overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        src={activeImage}
                        alt={`${title} screenshot ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </AnimatePresence>

                    {/* Carousel Controls */}
                    {imageUrls.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all z-20 backdrop-blur-md shadow-lg"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all z-20 backdrop-blur-md shadow-lg"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                          {imageUrls.map((_, i) => (
                            <div
                              key={i}
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${i === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none z-10" />
                    <h2 className="absolute bottom-10 left-6 right-6 text-3xl md:text-5xl font-bold text-white drop-shadow-md z-20">{title}</h2>
                  </div>
                )}

                <div className="p-6 md:p-8 overflow-y-auto">
                  {!hasImages && <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>}

                  <h3 className="text-xl font-semibold mb-3 text-foreground">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {description}
                    This project was built to address modern complex scaling issues and utilizes state-of-the-art implementations to provide immediate feedback loops.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 text-sm font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border">
                    {githubUrl && (
                      <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium transition-colors">
                        <Code2 className="w-5 h-5 mr-2" /> Source Code
                      </a>
                    )}
                    {liveUrl && (
                      <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white font-medium transition-opacity">
                        <ExternalLink className="w-5 h-5 mr-2" /> View Live Project
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
