
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Brain, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h1 className="text-5xl lg:text-7xl font-bold font-outfit text-slate-900 leading-tight mb-6">
                Single parents deserve <span className="text-purple-600">SaathiCare</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Because single parents deserve a tool that cares for their life as much as they care for their family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/login" className="flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-200">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/demo" className="flex items-center justify-center bg-white text-purple-600 border-2 border-purple-100 px-8 py-4 rounded-full font-bold text-lg hover:border-purple-300 transition-all">
                    Watch Demo <Play className="ml-2 w-5 h-5 fill-current" />
                  </Link>
                </motion.div>
              </div>
              <div className="mt-12 flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <p className="text-slate-500 text-sm">Join 5,000+ single parents thriving today</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="mt-16 lg:mt-0 relative"
            >
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.02, 1] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              ></motion.div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
              <img 
                src="https://img.freepik.com/premium-vector/woman-is-working-laptop-with-baby-plants_1018395-2151.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Single parent managing life" 
                className="relative rounded-3xl shadow-2xl border-8 border-white object-cover w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-slate-900 mb-6">The Hidden Mental Load</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Single parenting isn't just double the work—it's triple the mental load.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Clock className="w-8 h-8 text-purple-600" />, title: "Time Burnout", desc: "Constant juggling leads to exhaustion and less quality time with kids." },
            { icon: <Brain className="w-8 h-8 text-purple-600" />, title: "Mental Fog", desc: "Managing appointments, chores, and work solo creates cognitive overload." },
            { icon: <ShieldCheck className="w-8 h-8 text-purple-600" />, title: "Missed Deadlines", desc: "Without a partner, it's easy for bills or school events to slip through." },
            { icon: <HeartHandshake className="w-8 h-8 text-purple-600" />, title: "Financial Stress", desc: "Budgeting on a single income requires precision and constant monitoring." }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-all hover:shadow-lg"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-outfit">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="https://i.pinimg.com/originals/ac/f2/fb/acf2fbe0f0c77b9b320ef8c8f1501892.png" 
              alt="Solution" 
              className="rounded-3xl shadow-xl" 
            />
            <div>
              <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">Our Solution</span>
              <h2 className="text-4xl font-bold font-outfit mt-4 mb-6">AI-Powered Unified Platform</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                SaathiCare isn't just an app; it's an intelligent companion. We integrate budgeting, job matching, health tracking, and mental wellness into one seamless experience.
              </p>
              <ul className="space-y-4">
                {["Smart Reminders", "Personalized AI Insights", "Automated Budgeting", "Empathetic Support"].map((text, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center space-x-3 text-slate-700 font-medium"
                  >
                    <div className="bg-purple-600 rounded-full p-1"><ShieldCheck className="w-4 h-4 text-white" /></div>
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/features" className="inline-block mt-10 text-purple-600 font-bold hover:underline">
                Explore all features &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
