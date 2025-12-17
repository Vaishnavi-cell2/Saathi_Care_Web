
import { createClient } from '@supabase/supabase-js';

// These environment variables are expected to be provided by the hosting environment.
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase credentials missing. Check your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
