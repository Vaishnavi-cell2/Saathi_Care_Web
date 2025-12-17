
import React from 'react';
// Import Link component to fix "Cannot find name 'Link'" error
import { Link } from 'react-router-dom';
import { Wallet, Briefcase, Stethoscope, Dumbbell, Flower2, Search, TrendingUp, Calendar } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Budget Planner",
      desc: "Detailed expense tracking with AI-driven savings insights tailored for single-income households.",
      icon: <Wallet className="w-12 h-12 text-purple-600" />,
      color: "bg-purple-50",
      items: ["Auto-categorization", "Savings Goals", "Bill Reminders"]
    },
    {
      title: "Job Matching",
      desc: "Personalized job recommendations that prioritize flexibility, remote work, and child-friendly benefits.",
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      color: "bg-blue-50",
      items: ["Flexible Hours Filter", "Remote Work Focus", "Career Pathing"]
    },
    {
      title: "Health Tracker",
      desc: "Comprehensive family health dashboard including vaccination trackers and medication reminders.",
      icon: <Stethoscope className="w-12 h-12 text-rose-600" />,
      color: "bg-rose-50",
      items: ["Medicine Reminders", "Appointment Logs", "Vaccination Calendar"]
    },
    {
      title: "Workout Guide",
      desc: "15-minute high-efficiency workout routines designed to fit into a busy parent's tight schedule.",
      icon: <Dumbbell className="w-12 h-12 text-emerald-600" />,
      color: "bg-emerald-50",
      items: ["Quick Workouts", "No-Equipment Needed", "Progress Tracking"]
    },
    {
      title: "Mental Wellness",
      desc: "Emotional support tools, stress tracking, and guided meditation to prevent parent burnout.",
      icon: <Flower2 className="w-12 h-12 text-amber-600" />,
      color: "bg-amber-50",
      items: ["Stress Meter", "Daily Check-ins", "Guided Meditation"]
    }
  ];

  return (
    <div className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">Empowering Tools</span>
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-slate-900 mt-4 mb-6">Designed specifically for your journey</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Five essential pillars of support, all integrated into one intelligent platform.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] transition-all hover:-translate-y-2 hover:shadow-2xl border border-slate-100 ${feature.color}`}>
              <div className="mb-6 bg-white p-4 inline-block rounded-2xl shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {feature.desc}
              </p>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="p-10 rounded-[2.5rem] bg-purple-600 text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold font-outfit mb-4">And much more...</h3>
            <p className="mb-8 opacity-90">We're constantly evolving our AI to better serve your unique needs.</p>
            <Link to="/login" className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all">
              Join SaathiCare Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
