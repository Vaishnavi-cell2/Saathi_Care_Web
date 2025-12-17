
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PlayCircle } from 'lucide-react';

const Demo: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-slate-900 mb-6">See how SaathiCare simplifies daily life</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">A quick 2-minute walkthrough of the tools designed for your resilience.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 relative group">
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/video/1200/800" 
                alt="Demo Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 p-6 rounded-full shadow-2xl hover:scale-110 transition-transform group-hover:bg-purple-600 group-hover:text-white">
                  <PlayCircle className="w-16 h-16" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-purple-100">
            <h3 className="text-2xl font-bold font-outfit mb-8 text-slate-900">What you'll see:</h3>
            <ul className="space-y-6">
              {[
                { title: "Smart Reminders", desc: "Never miss a health check or a bill." },
                { title: "Job Suggestions", desc: "Flexible opportunities that fit your schedule." },
                { title: "Budget Tracking", desc: "Real-time insights on your expenses." },
                { title: "Health & Wellness", desc: "Guided support for your mental peace." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/login" className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-200">
              Start Using SaathiCare
            </Link>
            <Link to="/login" className="bg-white text-purple-600 border border-purple-200 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
              Create Free Account
            </Link>
          </div>
          <p className="mt-6 text-slate-500 font-medium italic">"Inspirational. Calm. Easy to understand."</p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
