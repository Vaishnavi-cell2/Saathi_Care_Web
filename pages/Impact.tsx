
import React from 'react';
import { Clock, TrendingUp, Heart, Users } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <div className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-slate-900 mb-6">Our Impact</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Empowering single parents through data-driven support and intelligent automation.</p>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold font-outfit mb-10 text-center">Expected Life Improvements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Clock className="text-blue-600" />, title: "Time Savings", value: "20-30 min", desc: "Daily time recovered from automating administrative tasks and scheduling." },
              { icon: <TrendingUp className="text-emerald-600" />, title: "Burnout Reduction", value: "45%", desc: "Lower stress reported through AI-guided mental wellness and stress tracking." },
              { icon: <Heart className="text-rose-600" />, title: "Quality of Life", value: "+60%", desc: "Improved sense of control and confidence in managing solo parenting journey." },
              { icon: <Users className="text-purple-600" />, title: "Support Circle", value: "Unlimited", desc: "Access to professional-grade insights and career opportunities anytime." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col space-y-4 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:shadow-lg hover:border-purple-200">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white rounded-2xl shadow-sm h-fit">{item.icon}</div>
                  <span className="text-2xl font-bold text-purple-600">{item.value}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-purple-600 rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl shadow-purple-100">
            <h3 className="text-3xl font-bold font-outfit mb-6">Driven by Empathy, Powered by AI</h3>
            <p className="text-xl opacity-90 mb-0 leading-relaxed max-w-2xl mx-auto">
              SaathiCare is more than an application. It's a movement to recognize and support the hardest workers in our society: single parents. Our goal is to reduce the mental load by 30% within the first month of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
