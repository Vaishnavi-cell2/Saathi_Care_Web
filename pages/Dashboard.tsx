
import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Wallet, 
  Calendar, 
  Briefcase, 
  Smile, 
  ChevronRight,
  TrendingUp,
  Clock,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { getAIParentingInsight, getAIJobMatch } from '../services/geminiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  const [insight, setInsight] = useState<string>("Loading your daily insight...");
  const [jobs, setJobs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const budgetData = [
    { name: 'Rent', value: 1200 },
    { name: 'Groceries', value: 450 },
    { name: 'School', value: 300 },
    { name: 'Utilities', value: 200 },
    { name: 'Savings', value: 500 },
  ];

  const COLORS = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'];

  useEffect(() => {
    const fetchData = async () => {
      const text = await getAIParentingInsight();
      const jobList = await getAIJobMatch();
      setInsight(text);
      setJobs(jobList);
      setLoading(false);
    };
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-3xl font-bold font-outfit text-slate-900">Hello, Sarah!</h1>
            <p className="text-slate-500">Here's your overview for today, June 12th.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-4">
            <button className="relative p-2 bg-white rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all">
              <Bell className="w-6 h-6 text-slate-600" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-white rounded-full"></span>
            </button>
            <img src="https://picsum.photos/seed/sarah/100/100" alt="Profile" className="w-12 h-12 rounded-full border-2 border-purple-200" />
          </motion.div>
        </header>

        {/* AI Insight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-600 rounded-[2.5rem] p-8 md:p-12 text-white mb-10 relative overflow-hidden shadow-2xl shadow-purple-200"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"
          ></motion.div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white/20 p-4 rounded-3xl backdrop-blur-md">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 inline-block">Daily AI Insight</span>
              <p className="text-xl md:text-2xl font-outfit font-medium leading-relaxed italic">
                "{insight}"
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Content (Reminders & Budget) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Reminders */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold font-outfit flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-600" /> Today's Reminders
                </h3>
                <button className="text-purple-600 text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Oliver's Pediatrician Appt", time: "10:30 AM", type: "Health" },
                  { title: "Electric Bill Due", time: "EOD", type: "Finance" },
                  { title: "Pack Lunch for Field Trip", time: "Tonight", type: "School" }
                ].map((rem, i) => (
                  <motion.div 
                    whileHover={{ x: 5 }}
                    key={i} 
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-purple-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-10 rounded-full ${i % 2 === 0 ? 'bg-purple-500' : 'bg-rose-500'}`}></div>
                      <div>
                        <h4 className="font-bold text-slate-800">{rem.title}</h4>
                        <p className="text-sm text-slate-500">{rem.type}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-slate-600">{rem.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Budget Overview */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-outfit flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-emerald-600" /> Budget Overview
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span>On track this month</span>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={budgetData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <YAxis hide />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Sidebar (Jobs & Wellness) */}
          <div className="space-y-8">
            {/* Job Suggestions */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold font-outfit mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" /> AI Job Matches
              </h3>
              <div className="space-y-4">
                {jobs.map((job, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    key={i} 
                    className="group p-4 bg-blue-50/50 rounded-2xl hover:bg-blue-50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600">{job.trim()}</h4>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">Remote • Flexible</p>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 text-blue-600 font-bold text-sm border-2 border-blue-100 rounded-xl hover:bg-blue-50 transition-all">Explore All Jobs</button>
            </motion.div>

            {/* Mental Wellness */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold font-outfit mb-6 flex items-center gap-2">
                <Smile className="w-5 h-5 text-amber-500" /> Wellness Status
              </h3>
              <div className="text-center p-6 bg-amber-50 rounded-[2rem] border border-amber-100">
                <p className="text-slate-600 text-sm mb-4">Current Stress Level</p>
                <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-amber-100" />
                    <motion.circle 
                      initial={{ strokeDashoffset: 364 }}
                      animate={{ strokeDashoffset: 280 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364" className="text-amber-500 rounded-full" 
                    />
                  </svg>
                  <span className="absolute text-2xl font-bold text-amber-600">22%</span>
                </div>
                <p className="mt-4 font-bold text-amber-700">Doing Great!</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-4 bg-amber-500 text-white font-bold rounded-2xl hover:bg-amber-600 transition-all shadow-lg shadow-amber-100"
              >
                Start 5min Meditation
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
