"use client";

export default function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-md" onClick={onClose}>
      <div className="bg-[#3f3f3f] p-8 rounded-3xl max-w-5xl w-full h-[85vh] flex flex-col border border-white/20 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">My Resume</h2>
          <div className="flex gap-4">
            <a 
              href="/Yagnik_Data_science_AI_resume.pdf" 
              download="Yagnik_Data_science_AI_resume.pdf"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg"
            >
              Download PDF
            </a>
            <button onClick={onClose} className="text-slate-200 hover:text-white text-2xl px-2">✕</button>
          </div>
        </div>

        {/* PDF Preview Container */}
        <div className="flex-grow w-full bg-slate-200 rounded-2xl overflow-hidden shadow-inner">
          <iframe 
            src="/Yagnik_Data_science_AI_resume.pdf" 
            className="w-full h-full border-none"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
}