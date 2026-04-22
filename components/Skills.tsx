// components/Skills.tsx
export default function Skills() {
  const skillCategories = [
    {
      title: "Core Competencies",
      items: ["Machine Learning & Deep Learning", "RAG", "Prompt Engineering", "NLP", "Time-Series Forecasting", "Big Data Analysis", "GenAI & LLMs", "Computer Vision", "MLOps", "Stakeholder Management"]
    },
    {
      title: "Languages & Core",
      items: ["Python", "SQL", "Pyspark", "FastAPI", "GIT"]
    },
    {
      title: "Cloud & MLOps",
      items: ["AWS", "GCP", "Kubernetes", "Apache Airflow", "Docker", "AWS Bedrock", "Terraform"]
    },
    {
      title: "ML/DL Frameworks",
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "OpenCV", "Pandas", "Numpy"]
    },
    {
      title: "GenAI & Vector DBs",
      items: ["Gemini", "Anthropic Claude", "ChromaDB", "FAISS", "LangChain", "LlamaIndex", "Hugging Face"]
    },
    {
      title: "Big Data & Databases",
      items: ["Apache Beam/DataFlow", "Google BigQuery", "Kafka", "Postgres", "MongoDB", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Expertise</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/10 hover:border-blue-500/50 transition-colors">
            <h3 className="text-blue-400 font-semibold mb-4 text-lg">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item} className="text-slate-300 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}