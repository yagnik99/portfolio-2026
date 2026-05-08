"use client";
import { useState } from 'react';

// Organize your library details here
const skillDetails: Record<string, { title: string, items: string[], certs?: string[], links?: { name: string, url: string }[] }> = {
  "Python": { title: "Python Ecosystem", items: ["Pandas", "NumPy", "Scikit-Learn", "FastAPI", "AsyncIO", "NLTK", "Selenium"] },
  "SQL": { title: "SQL & Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "BigQuery", "Snowflake", "Query Optimization"] },
  "Statistics": { title: "Statistical Modeling", items: ["SciPy", "Statsmodels", "Hypothesis Testing", "A/B Testing", "Probability Theory"] },
  "Advanced Visualization": { title: "Data Visualization", items: ["Tableau", "PowerBI", "Seaborn", "Matplotlib", "Plotly"] },
  "ML/Deep Learning": { title: "Machine Learning & AI", items: ["PyTorch", "TensorFlow", "Keras", "XGBoost", "LightGBM"], certs: ["AWS Machine Learning Specialty"], links: [{ name: "Read my insights on Medium", url: "https://medium.com/@mahadev-pandya3" }] },
  "AWS": { title: "AWS Architecture", items: ["Amazon Bedrock", "Lambda", "DynamoDB", "Kinesis", "S3", "SageMaker", "Glue"], certs: ["AWS Certified Solutions Architect – Professional"] },
  "GCP": { title: "GCP Architecture", items: ["BigQuery", "Dataflow", "Vertex AI", "Cloud Functions"], certs: ["Professional Data Engineer"] },
  "GenAI": { title: "GenAI & Agentic Systems", items: ["LangChain", "LlamaIndex", "ChromaDB", "FAISS", "Prompt Engineering"] },
};

export default function SkillsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  if (!isOpen) return null;

  const expertisePillars = [
    { title: "Data Foundations", skills: ["Python", "SQL", "Statistics", "Advanced Visualization"] },
    { title: "AI & Machine Intelligence", skills: ["ML/Deep Learning", "Time-Series", "NLP", "Computer Vision"] },
    { title: "Cloud & Data Engineering", skills: ["AWS", "GCP", "Apache Airflow", "Kafka", "Hudi"] },
    { title: "GenAI & Agentic Systems", skills: ["GenAI", "LLM Orchestration", "Vector DBs"] },
    { title: "Strategic Leadership", skills: ["FDA/GxP Compliance", "Stakeholder Management", "Agile Leadership"] }
  ];

  // If in detail view, go back to main grid. If in main grid, close modal.
  const handleClose = () => {
    if (activeDetail) {
      setActiveDetail(null);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div className="bg-[#2a2a2a] p-8 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {activeDetail ? skillDetails[activeDetail]?.title || activeDetail : "Expertise Architecture"}
          </h2>
          <button onClick={handleClose} className="text-slate-400 hover:text-white text-3xl">
            ×
          </button>
        </div>

        {/* View 1: Main Pillars */}
        {!activeDetail ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertisePillars.map((pillar) => (
              <div key={pillar.title} className="bg-[#333333] p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-blue-400 mb-4">{pillar.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {pillar.skills.map((skill) => (
                    <button 
                      key={skill} 
                      onClick={() => skillDetails[skill] && setActiveDetail(skill)}
                      className={`px-3 py-1 rounded-md text-xs border transition-all ${
                        skillDetails[skill] 
                          ? "bg-blue-600/20 text-blue-200 border-blue-500/30 hover:bg-blue-600/40 cursor-pointer" 
                          : "bg-[#1a1a1a] text-slate-300 border-white/5"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View 2: Sub-Details */
          <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillDetails[activeDetail]?.items.map((item) => (
                <div key={item} className="bg-[#3f3f3f] p-4 rounded-xl border border-white/5 text-center text-sm text-slate-200 hover:border-blue-500 transition-colors">
                  {item}
                </div>
              ))}
            </div>

            {/* Certs & Blogs section */}
            {(skillDetails[activeDetail]?.certs || skillDetails[activeDetail]?.links) && (
              <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 space-y-4">
                {skillDetails[activeDetail]?.certs && (
                  <div>
                    <h4 className="text-blue-400 text-xs font-bold uppercase mb-2">Certifications</h4>
                    {skillDetails[activeDetail].certs?.map(c => <p key={c} className="text-slate-300 text-sm">✓ {c}</p>)}
                  </div>
                )}
                {skillDetails[activeDetail]?.links && (
                  <div className="pt-4 border-t border-white/10">
                    {skillDetails[activeDetail].links?.map(l => (
                      <a key={l.name} href={l.url} target="_blank" className="text-blue-400 hover:underline text-sm font-semibold">{l.name} →</a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}