"use client";

import Typewriter from 'typewriter-effect';
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Hero({ onConnect }: { onConnect: () => void }) {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        
        {/* LEFT PART: Content */}
        <div className="md:col-span-3 space-y-8 text-center md:text-left order-2 md:order-1">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
              Hi There! <span className="animate-wave inline-block">👋🏻</span>
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-slate-50">
              I'm <span className="text-blue-500">Yagnik Pandya</span>
            </h1>
          </div>
          
          <div className="h-12 text-2xl md:text-4xl font-bold text-blue-400">
            <Typewriter options={{ strings: ["Data Scientist", "AI Engineer", "AI Specialist"], autoStart: true, loop: true, deleteSpeed: 50, delay: 75 }} />
          </div>

          <div className="flex gap-4 justify-center md:justify-start pt-6">
            <Button onClick={onConnect} className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Connect with Me
            </Button>
           <Button 
              variant="outline" 
              onClick={() => window.dispatchEvent(new CustomEvent('openSkillsModal'))}
              className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg rounded-full transition-all"
            >
              Expertise
            </Button>
          </div>
        </div>

        {/* RIGHT PART: Profile Picture + Contact Icons */}
        <div className="md:col-span-2 flex flex-col items-center order-1 md:order-2 gap-4">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-[-10px] rounded-full bg-white/5 blur-xl"></div>
            <div className="w-full h-full rounded-full border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden relative z-10 bg-[#2a2a2a]">
              <img src="https://github.com/yagnik99.png" alt="Yagnik Pandya" className="w-full h-full object-cover aspect-square scale-100 hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* --- Updated Contact Icons Bar --- */}
          {/* Changed mt-2 to mt-10 to lower the icons relative to the image */}
          <div className="flex gap-6 justify-center items-center mt-10">
            
            {/* Email with Hover Text (No Blue Bg) */}
            <a href="mailto:mahadev.pandya3@gmail.com" className="group relative flex items-center justify-center p-2 text-slate-400">
              {/* Icon highlights blue on hover */}
              <FaEnvelope className="w-6 h-6 transition-colors group-hover:text-blue-400" />
              {/* Hover text: White text, no background, positioned slightly differently */}
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all text-xs font-light text-slate-50 whitespace-nowrap">
                mahadev.pandya3@gmail.com
              </span>
            </a>
            
            {/* Phone with Hover Text (No Blue Bg) */}
            <a href="tel:+918141464747" className="group relative flex items-center justify-center p-2 text-slate-400">
              {/* Icon highlights blue on hover */}
              <FaPhone className="w-6 h-6 transition-colors group-hover:text-blue-400" />
              {/* Hover text: White text, no background */}
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all text-xs font-light text-slate-50 whitespace-nowrap">
                +91 8141464747
              </span>
            </a>
            
            {/* LinkedIn (Standard Icon Hover) */}
            <a href="https://linkedin.com/in/yagnik-pandya9" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            
            {/* GitHub (Standard Icon Hover) */}
            <a href="https://github.com/yagnik99" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}