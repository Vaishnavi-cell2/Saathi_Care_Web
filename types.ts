
// Import React to resolve React namespace error for React.ReactNode
import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  college: string;
  specialization: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
}

export interface Reminder {
  id: string;
  title: string;
  time: string;
  type: 'health' | 'finance' | 'school' | 'other';
}
