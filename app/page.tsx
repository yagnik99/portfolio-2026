"use client";

import { Button } from "@/components/ui/button"
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    // Updated background to the Gunmetal Grey you requested
    <div className="min-h-screen bg-[#212121] text-slate-50 font-sans relative overflow-hidden">
      
      {/* Subtle "Light Leak" to give the grey depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.02)_0%,_transparent_50%)] pointer-events-none"></div>

      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#212121]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-500 tracking-tighter">HC.</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#resume" className="hover:text-blue-400 transition-colors">Resume</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION - Picture on Right, Text on Left */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          
          {/* LEFT PART: Content (3/5 Columns) */}
          <div className="md:col-span-3 space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
                Hi There! <span className="animate-wave inline-block">👋🏻</span>
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase leading-tight">
                I'M <span className="text-blue-500">HEET CHHATRALA</span>
              </h1>
            </div>
            
            {/* Typewriter Title */}
            <div className="h-12 text-2xl md:text-4xl font-bold text-blue-400">
              <Typewriter
                options={{
                  strings: [
                    "Senior AI Engineer",
                    "Data Scientist",
                    "Deloitte Consultant",
                    "Open Source Contributor",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-6">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Connect with Me
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg rounded-full transition-all">
                View Projects
              </Button>
            </div>
          </div>

          {/* RIGHT PART: Profile Picture (2/5 Columns) */}
          <div className="md:col-span-2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer Glow Ring matching the grey theme */}
              <div className="absolute inset-[-10px] rounded-full bg-white/5 blur-xl"></div>
              
              <div className="w-full h-full rounded-full border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden relative z-10 bg-[#2a2a2a]">
                <img 
                  src="https://github.com/yagnik99.png" 
                  alt="Heet Chhatrala" 
                  className="w-full h-full object-cover aspect-square scale-100 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 uppercase tracking-tight">
            LET ME <span className="text-blue-500">INTRODUCE</span> MYSELF
          </h3>
          <div className="space-y-8 text-xl text-slate-300 leading-relaxed font-light">
            <p>
              I am a Senior AI Engineer and Data Scientist based in <span className="text-blue-400 font-medium">Gujarat, India</span>.
            </p>
            <p>
              Currently, I serve as a Consultant at <span className="text-blue-400 font-medium">Deloitte</span>, focusing on 
              <span className="text-slate-100 italic"> Agentic AI</span> and <span className="text-slate-100 italic">RAG systems</span>.
            </p>
            <p>
              My passion lies in building scalable <span className="text-slate-100 font-medium">LLM Frameworks</span> and 
              advanced <span className="text-slate-100 italic">Data Pipelines</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}