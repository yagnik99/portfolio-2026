interface ModalProps { 
  isOpen: boolean; 
  onClose: () => void; 
}

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#2a2a2a] p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-white/10 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
        <h3 className="text-xl font-bold mb-6 text-center text-slate-50">Connect with Yagnik</h3>
        <div className="space-y-4">
          <a href="mailto:mahadev.pandya3@gmail.com" className="block p-3 rounded-lg hover:bg-white/5 transition text-slate-300 hover:text-blue-400">
            Email: mahadev.pandya3@gmail.com
          </a>
          <a href="tel:+918141464747" className="block p-3 rounded-lg hover:bg-white/5 transition text-slate-300 hover:text-blue-400">
            Phone: +91-8141464747
          </a>
          <a href="https://linkedin.com/in/yagnik-pandya9" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-white/5 transition text-slate-300 hover:text-blue-400">
            LinkedIn: yagnik-pandya9
          </a>
          {/* Added GitHub link */}
          <a href="https://github.com/yagnik99" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-white/5 transition text-slate-300 hover:text-blue-400">
            GitHub: github.com/yagnik99
          </a>
        </div>
      </div>
    </div>
  );
}