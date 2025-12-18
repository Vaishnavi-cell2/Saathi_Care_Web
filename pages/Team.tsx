
import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const Team: React.FC = () => {
  const members = [
    { name: "Vaishnavi Verma", role: "Lead", specialization: "Cyber Security", img: "https://picsum.photos/seed/v1/400/400" },
    { name: "Sneha Raj", role: "Developer", specialization: "Computer Science & Engg", img: "https://picsum.photos/seed/s1/400/400" },
    { name: "Kumar Sambhava", role: "Developer", specialization: "Cyber Security", img: "https://picsum.photos/seed/k1/400/400" },
    { name: "Ashutosh Yadav", role: "Developer", specialization: "Computer Science & Engg", img: "https://picsum.photos/seed/m1/400/400" }
  ];

  return (
    <div className="py-24 bg-purple-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">Our Team</span>
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-slate-900 mt-4 mb-6">Team Code StrixHack</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">A dedicated group of engineers and security specialists focused on empathetic AI.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] text-center shadow-xl border border-purple-100 group transition-all hover:-translate-y-2">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-purple-600 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300"></div>
                <img src={member.img} alt={member.name} className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-slate-900 mb-1">{member.name}</h3>
              <p className="text-purple-600 font-bold text-sm mb-4 uppercase tracking-tighter">{member.role}</p>
              <div className="text-slate-500 text-sm mb-6">
                <p>{member.specialization}</p>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="#" className="p-2 bg-slate-100 text-slate-400 rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-slate-100 text-slate-400 rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors"><Github className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-slate-100 text-slate-400 rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white p-12 rounded-[3rem] shadow-xl">
          <h2 className="text-2xl font-bold font-outfit mb-4 italic">"Solving the modern challenges of single parenting with technology and empathy."</h2>
          <p className="text-slate-500">— Team Code StrixHack</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
