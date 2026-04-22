// Inside app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactModal from "@/components/ContactModal";
import SkillsModal from "@/components/SkillsModal";
import ResumeModal from "@/components/ResumeModal"; // 1. Import

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false); // 2. State

  useEffect(() => {
    const handleOpenSkills = () => setIsSkillsOpen(true);
    window.addEventListener('openSkillsModal', handleOpenSkills);
    return () => window.removeEventListener('openSkillsModal', handleOpenSkills);
  }, []);

  return (
    <main className="min-h-screen bg-[#212121] text-slate-50 font-sans relative overflow-hidden">
      {/* ... existing code ... */}
      
      <Navbar onResumeClick={() => setIsResumeOpen(true)} /> {/* 3. Pass prop */}
      <Hero onConnect={() => setIsContactOpen(true)} />
      <About />
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <SkillsModal isOpen={isSkillsOpen} onClose={() => setIsSkillsOpen(false)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} /> {/* 4. Add component */}
    </main>
  );
}