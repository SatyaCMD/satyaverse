"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, X } from "lucide-react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  cmd: string;
  output: string;
  isError?: boolean;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [history, setHistory] = useState<CommandHistory[]>([
    { cmd: "", output: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");
    
    if (!cmd) return;

    let output = "";
    let isError = false;

    switch (cmd) {
      case "help":
        output = "Available commands:\n  about    - Read about me\n  projects - View my projects\n  skills   - List my technical skills\n  clear    - Clear terminal\n  contact  - Get contact info";
        break;
      case "about":
        output = "I'm Satya, an AI Engineer & Cybersecurity Analyst building secure, scalable systems.";
        break;
      case "projects":
        output = "1. AI Stock Price Predictor\n2. Custom Operating System\n3. Airline Booking Simulator\n(Scroll down to see them all!)";
        break;
      case "skills":
        output = "Python, TypeScript, React, Next.js, PyTorch, Wireshark, Metasploit, etc.";
        break;
      case "clear":
        setHistory([]);
        return;
      case "contact":
        output = "Email: hello@satya.dev\nGitHub: github.com/satya";
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
        isError = true;
    }

    setHistory((prev) => [...prev, { cmd, output, isError }]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-6 right-6 w-full max-w-md bg-slate-950/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-[60] overflow-hidden flex flex-col font-mono text-sm"
          style={{ height: "400px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2 text-gray-400">
              <TerminalSquare className="w-4 h-4" />
              <span>satya@portfolio:~</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4" onClick={() => inputRef.current?.focus()}>
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                {entry.cmd && (
                  <div className="text-gray-300">
                    <span className="text-green-400">~/satya</span>$ {entry.cmd}
                  </div>
                )}
                <div className={`whitespace-pre-wrap ${entry.isError ? "text-red-400" : "text-blue-300"}`}>
                  {entry.output}
                </div>
              </div>
            ))}
            
            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center text-gray-300">
              <span className="text-green-400 mr-2">~/satya</span>$
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-transparent outline-none border-none ml-2 text-white placeholder-gray-600"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
