"use client";

export default function SkillsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const categories = [
    { title: "Core Competencies", skills: ["Machine Learning & Deep Learning", "RAG", "Prompt Engineering", "Natural Language Processing (NLP)", "Time-Series Forecasting", "Data Engineering & Big Data", "Business Impact Analysis", "Visualization", "Generative AI & LLMs", "Computer Vision", "MLOps & Cloud AI", "Stakeholder Management", "Cross-Functional Collaboration"] },
    { title: "Languages & Core", skills: ["Python", "SQL", "Pyspark", "FastAPI", "GIT"] },
    { title: "Cloud & MLOps", skills: ["AWS", "GCP", "Kubernetes", "Apache Airflow", "Docker", "AWS Bedrock", "AWS Connect", "Lambda", "DynamoDB", "Kinesis", "Terraform"] },
    { title: "ML/DL Frameworks", skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "OpenCV", "Pandas", "Numpy", "Seaborn", "Matplotlib", "NLTK", "Selenium"] },
    { title: "GenAI & Vector DBs", skills: ["Gemini", "Anthropic Claude", "ChromaDB", "FAISS", "LangChain", "LlamaIndex", "Hugging Face"] },
    { title: "Big Data & Pipelines", skills: ["Apache Beam", "Google BigQuery", "Kafka", "Hudi", "EMR", "Postgres", "MongoDB", "MySQL"] }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md" onClick={onClose}>
      {/* Increased size: max-w-5xl */}
      <div className="bg-[#3f3f3f] p-10 rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-y-auto border border-white/20 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white tracking-tight">Technical Expertise</h2>
          <button onClick={onClose} className="text-slate-200 hover:text-white text-2xl p-2">✕</button>
        </div>
        
        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-blue-300 font-semibold mb-5 uppercase tracking-wider text-sm">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-5 py-2.5 bg-[#2a2a2a] text-slate-100 rounded-lg text-sm border border-white/10 hover:border-blue-400/50 hover:bg-[#505050] transition-all cursor-pointer shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}