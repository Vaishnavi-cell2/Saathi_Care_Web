
import { supabase } from '../lib/supabase';

export const authService = {
  login: async (email: string, pass: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: pass,
    });

    if (error) throw error;
    
    // Store user data locally for immediate UI updates
    if (data.user) {
      localStorage.setItem('user_name', data.user.user_metadata?.full_name || email.split('@')[0]);
      localStorage.setItem('saathicare_token', data.session?.access_token || '');
    }
    
    return { success: true, user: data.user };
  },

  signUp: async (email: string, pass: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password: pass,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) throw error;
    return { success: true, user: data.user };
  },

  logout: async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('saathicare_token');
    localStorage.removeItem('user_name');
    window.location.hash = '/login';
  },

  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  isAuthenticated: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  }
};
