
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Mail, Lock } from 'lucide-react';
import { authService } from '../services/authService';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-purple-50/50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-purple-600 p-3 rounded-2xl mb-4 shadow-lg shadow-purple-200">
            <Heart className="w-8 h-8 text-white fill-current" />
          </div>
          <h1 className="text-3xl font-bold font-outfit text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Connecting you to your support system.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
          {error && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-100 text-rose-600 text-sm rounded-xl">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-100 flex items-center justify-center"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : 'Sign In'}
            </button>
          </form>

          <div className="my-8 flex items-center">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="px-4 text-sm text-slate-400 uppercase tracking-widest font-bold">OR</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          <button className="w-full flex items-center justify-center bg-white border border-slate-200 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-3" />
            Continue with Google
          </button>
        </div>

        <p className="text-center mt-8 text-slate-600">
          New to SaathiCare? <Link to="/login" className="text-purple-600 font-bold hover:underline">Join us today</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
