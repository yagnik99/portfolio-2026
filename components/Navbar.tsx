export default function Navbar({ onResumeClick }: { onResumeClick: () => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#212121]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-500 tracking-tighter">YP.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <button 
            onClick={onResumeClick} 
            className="hover:text-blue-400 transition-colors"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}