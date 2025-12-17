
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Lock, Phone } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-purple-50/50">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-purple-600 p-3 rounded-2xl mb-4 shadow-lg shadow-purple-200">
            <Heart className="w-8 h-8 text-white fill-current" />
          </div>
          <h1 className="text-3xl font-bold font-outfit text-slate-900">Welcome Back to SaathiCare</h1>
          <p className="text-slate-500 mt-2">Take a moment for yourself. We're here to help.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email or Phone</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-slate-600">
                <input type="checkbox" className="mr-2 rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                Remember me
              </label>
              <a href="#" className="text-purple-600 font-semibold hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
            >
              Sign In
            </button>
          </form>

          <div className="my-8 flex items-center">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="px-4 text-sm text-slate-400">OR</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          <button className="w-full flex items-center justify-center bg-white border border-slate-200 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-3" />
            Continue with Google
          </button>
        </div>

        <p className="text-center mt-8 text-slate-600">
          New here? <Link to="/login" className="text-purple-600 font-bold hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
