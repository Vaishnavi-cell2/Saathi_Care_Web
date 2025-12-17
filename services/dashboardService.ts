
import { supabase } from '../lib/supabase';
import { Reminder } from '../types';

export const dashboardService = {
  getReminders: async (): Promise<Reminder[]> => {
    const { data, error } = await supabase
      .from('reminders')
      .select('*')
      .order('time', { ascending: true });

    if (error) {
      console.error("Error fetching reminders:", error);
      // Fallback to empty if table doesn't exist yet for demo purposes
      return [
        { id: '1', title: "Oliver's Pediatrician Appt", time: "10:30 AM", type: 'health' },
        { id: '2', title: "Electric Bill Due", time: "EOD", type: 'finance' }
      ];
    }
    
    return data as Reminder[];
  },

  getBudgetData: async () => {
    const { data, error } = await supabase
      .from('budget_summary')
      .select('name, value');

    if (error) {
      console.error("Error fetching budget:", error);
      return [
        { name: 'Rent', value: 1200 },
        { name: 'Groceries', value: 450 },
        { name: 'School', value: 300 },
        { name: 'Utilities', value: 200 },
        { name: 'Savings', value: 500 },
      ];
    }

    return data;
  },

  addReminder: async (reminder: Omit<Reminder, 'id'>) => {
    const { data, error } = await supabase
      .from('reminders')
      .insert([reminder])
      .select();

    if (error) throw error;
    return data[0];
  }
};
