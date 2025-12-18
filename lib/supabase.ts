
import { createClient } from '@supabase/supabase-js';

/**
 * Supabase Client Configuration
 * 
 * Local Development: http://127.0.0.1:54321
 * Production: Your Supabase Project URL
 */

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "⚠️ Supabase credentials missing! SaathiCare is running in mock mode.\n" +
    "To connect to your backend, set SUPABASE_URL and SUPABASE_ANON_KEY in your environment.\n" +
    "For local setup instructions, see README_SUPABASE.md."
  );
}

// Initialize the client. 
// Note: In some environments, process.env might not be populated exactly.
// Ensure your build tool (Vite/Webpack/etc) is configured to inject these.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);
