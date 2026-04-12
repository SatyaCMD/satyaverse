"use client";

import { motion } from "framer-motion";
import { Send, Globe, Link as LinkIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 text-center shadow-sm">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 inline-block"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <h3 className="text-2xl font-semibold mb-2">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <a href="mailto:hello@satya.dev" className="text-lg">hello@satya.dev</a>
            </div>

            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <LinkIcon className="w-5 h-5 text-blue-400" />
              </div>
              <a href="#" className="text-lg">LinkedIn</a>
            </div>

            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center border border-gray-500/20">
                <Globe className="w-5 h-5 text-gray-400" />
              </div>
              <a href="#" className="text-lg">GitHub</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-black/50 border-white/10 focus-visible:ring-purple-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10 focus-visible:ring-purple-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Hello Satya, I'd like to talk about..." 
                  className="min-h-[150px] bg-black/50 border-white/10 focus-visible:ring-purple-500 resize-none"
                />
              </div>

              <Button type="button" className="w-full sm:w-auto self-end bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold">
                Send Message <Send className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
