"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#212121] text-slate-50 font-sans relative overflow-hidden">
      {/* Light Leak background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.02)_0%,_transparent_50%)] pointer-events-none"></div>
      
      <Navbar />
      <Hero onConnect={() => setIsModalOpen(true)} />
      <About />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}