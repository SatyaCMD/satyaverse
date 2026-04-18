"use client";

import { motion } from "framer-motion";
import { Send, Globe, Link as LinkIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// Inline SVG for GitHub
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.0000.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

// Inline SVG for LinkedIn
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.0000.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=saisatyabrata952@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground font-medium"
            >
              Open to new opportunities and exciting collaborative projects.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 h-full"
            >
              <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow h-full flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-center gap-4 group">
                      <div className="p-4 bg-purple-50 group-hover:bg-purple-100 transition-colors rounded-2xl text-purple-600 shadow-sm">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">Email</p>
                        <a href="mailto:saisatyabrata952@gmail.com" className="text-foreground hover:text-purple-600 font-bold transition-colors">
                          saisatyabrata952@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="p-4 bg-blue-50 group-hover:bg-blue-100 transition-colors rounded-2xl text-blue-600 shadow-sm">
                        <LinkedinIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">Network</p>
                        <a href="https://www.linkedin.com/in/sai-satyabrata-623311280" target="_blank" rel="noreferrer" className="text-foreground hover:text-blue-600 font-bold transition-colors">
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="p-4 bg-gray-50 group-hover:bg-gray-100 transition-colors rounded-2xl text-gray-700 shadow-sm">
                        <GithubIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">Code</p>
                        <a href="https://github.com/SatyaCMD" target="_blank" rel="noreferrer" className="text-foreground hover:text-gray-900 font-bold transition-colors">
                          GitHub Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 h-full"
            >
              <form onSubmit={handleSubmit} className="h-full p-8 md:p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow flex flex-col gap-6 justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground">Full Name</label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/50 border-gray-200 focus-visible:ring-purple-500 h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/50 border-gray-200 focus-visible:ring-purple-500 h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground">Your Message</label>
                  <Textarea
                    id="message"
                    placeholder="Hello Satya, I'd like to talk about..."
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[160px] bg-white/50 border-gray-200 focus-visible:ring-purple-500 resize-none rounded-xl p-4"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto h-12 px-8 self-end bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Send Message <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
