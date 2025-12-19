/*
  # Create Reminders Table

  1. New Tables
    - `reminders`
      - `id` (uuid, primary key) - Unique identifier for each reminder
      - `user_id` (uuid, foreign key) - Links reminder to authenticated user
      - `title` (text) - Reminder title/description
      - `time` (text) - Scheduled time for the reminder
      - `type` (text) - Category: health, finance, school, or other
      - `created_at` (timestamptz) - Timestamp of creation
      - `completed` (boolean) - Whether reminder is done
  
  2. Security
    - Enable RLS on `reminders` table
    - Add policy for users to read their own reminders
    - Add policy for users to insert their own reminders
    - Add policy for users to update their own reminders
    - Add policy for users to delete their own reminders
*/

-- Create reminders table
CREATE TABLE IF NOT EXISTS reminders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  time text NOT NULL,
  type text NOT NULL CHECK (type IN ('health', 'finance', 'school', 'other')),
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE reminders ENABLE ROW LEVEL SECURITY;

-- Policy for users to read their own reminders
CREATE POLICY "Users can view own reminders"
  ON reminders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy for users to insert their own reminders
CREATE POLICY "Users can create own reminders"
  ON reminders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy for users to update their own reminders
CREATE POLICY "Users can update own reminders"
  ON reminders
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy for users to delete their own reminders
CREATE POLICY "Users can delete own reminders"
  ON reminders
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_reminders_user_id ON reminders(user_id);
CREATE INDEX IF NOT EXISTS idx_reminders_time ON reminders(time);