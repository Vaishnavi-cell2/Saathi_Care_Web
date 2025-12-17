
import React from 'react';
import { Heart, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-purple-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-purple-600 p-1.5 rounded-lg">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-2xl font-bold font-outfit text-purple-900">SaathiCare</span>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
              Our mission is to empower single parents by providing an AI-powered unified platform that handles the mental load, so they can focus on what matters most: their family.
            </p>
          </div>
          
          <div>
            <h4 className="font-outfit font-bold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#/features" className="hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#/demo" className="hover:text-purple-600 transition-colors">Watch Demo</a></li>
              <li><a href="#/impact" className="hover:text-purple-600 transition-colors">Impact</a></li>
              <li><a href="#/login" className="hover:text-purple-600 transition-colors">Sign In</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit font-bold text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="text-sm text-slate-500">team@codestrixhack.ai</p>
          </div>
        </div>
        
        <div className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 SaathiCare by Team Code StrixHack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-600">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
