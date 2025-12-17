
import React from 'react';
import { Smartphone, Server, Database, BrainCircuit, Cloud, Lock } from 'lucide-react';

const TechStack: React.FC = () => {
  // Fix: Store component references instead of pre-rendered JSX elements to avoid type errors during cloning.
  // This allows us to pass props like 'className' directly to the component.
  const tech = [
    { title: "Frontend", Icon: Smartphone, items: ["React Native", "Flutter", "Tailwind CSS"], color: "bg-blue-100 text-blue-600" },
    { title: "Backend", Icon: Server, items: ["Node.js", "Express.js", "Firebase Functions"], color: "bg-purple-100 text-purple-600" },
    { title: "Database", Icon: Database, items: ["Firebase Firestore", "PostgreSQL"], color: "bg-amber-100 text-amber-600" },
    { title: "AI Layer", Icon: BrainCircuit, items: ["Gemini API", "TensorFlow Lite"], color: "bg-rose-100 text-rose-600" },
    { title: "Cloud", Icon: Cloud, items: ["Google Cloud Platform", "Netlify"], color: "bg-emerald-100 text-emerald-600" },
    { title: "Auth", Icon: Lock, items: ["Firebase Auth", "JWT"], color: "bg-slate-100 text-slate-600" }
  ];

  return (
    <div className="py-24 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-slate-900 mb-6">Our Tech Stack</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Scalable architecture built for modern performance and high security.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {tech.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${t.color}`}>
                {/* Fixed: Use component reference to render icon with props directly, resolving the cloneElement type error */}
                <t.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-4">{t.title}</h3>
              <ul className="space-y-2">
                {t.items.map((item, idx) => (
                  <li key={idx} className="text-slate-500 font-medium">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-purple-100">
          <h2 className="text-3xl font-bold font-outfit mb-10 text-center">Architecture Workflow</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-2xl w-full border border-dashed border-slate-300">
              <p className="font-bold text-slate-800">User Input</p>
              <p className="text-sm text-slate-500">App Interface</p>
            </div>
            <div className="hidden md:block text-slate-300">&rarr;</div>
            <div className="text-center p-6 bg-purple-100 rounded-2xl w-full border border-purple-200">
              <p className="font-bold text-purple-800">API Gateway</p>
              <p className="text-sm text-purple-600">Auth & Validation</p>
            </div>
            <div className="hidden md:block text-slate-300">&rarr;</div>
            <div className="text-center p-6 bg-rose-100 rounded-2xl w-full border border-rose-200">
              <p className="font-bold text-rose-800">AI Engine</p>
              <p className="text-sm text-rose-600">Personalization</p>
            </div>
            <div className="hidden md:block text-slate-300">&rarr;</div>
            <div className="text-center p-6 bg-emerald-100 rounded-2xl w-full border border-emerald-200">
              <p className="font-bold text-emerald-800">Cloud Storage</p>
              <p className="text-sm text-emerald-600">Persistence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
