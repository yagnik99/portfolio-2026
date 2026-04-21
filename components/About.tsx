export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 relative z-10">
      <div className="max-w-4xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-slate-50">
          <span className="text-blue-500">Introduction</span>
        </h3>
        <div className="space-y-8 text-xl text-slate-300 leading-relaxed font-light">
          <p>
            I am a <span className="text-slate-100 font-medium">Data Scientist/ AI Engineer</span> with over seven years of experience delivering sophisticated computational solutions. 
            Currently based at <span className="text-blue-400 font-medium">Deloitte</span>, I lead initiatives in generative AI and enterprise information ecosystems, 
            focusing on building high-performance systems that streamline complex workflows and enhance operational precision.
          </p>
          <p>
            My background is defined by orchestrating large-scale recommendation engines and predictive forecasting platforms for major media institutions in the UK. 
            Beyond media, I bring deep domain expertise in transportation, logistics, and supply chain management, having architected complex forecasting systems 
            to optimize vessel throughput, berth allocation, and resource planning for global maritime operations.
          </p>
          <p>
            Furthermore, I have developed advanced visual analytics pipelines—including high-precision video and image classification systems—to automate industrial 
            operations, consistently bridging the gap between intricate analytical requirements and robust, production-ready systems that deliver measurable business impact.
          </p>
        </div>
      </div>
    </section>
  );
}