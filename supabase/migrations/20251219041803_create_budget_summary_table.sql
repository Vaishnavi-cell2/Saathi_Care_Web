/*
  # Create Budget Summary Table

  1. New Tables
    - `budget_summary`
      - `id` (uuid, primary key) - Unique identifier
      - `user_id` (uuid, foreign key) - Links budget entry to authenticated user
      - `name` (text) - Budget category name (Rent, Groceries, etc.)
      - `value` (numeric) - Amount allocated or spent
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update
  
  2. Security
    - Enable RLS on `budget_summary` table
    - Add policy for users to read their own budget data
    - Add policy for users to insert their own budget entries
    - Add policy for users to update their own budget entries
    - Add policy for users to delete their own budget entries
*/

-- Create budget_summary table
CREATE TABLE IF NOT EXISTS budget_summary (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  value numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE budget_summary ENABLE ROW LEVEL SECURITY;

-- Policy for users to read their own budget data
CREATE POLICY "Users can view own budget"
  ON budget_summary
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy for users to insert their own budget entries
CREATE POLICY "Users can create own budget entries"
  ON budget_summary
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy for users to update their own budget entries
CREATE POLICY "Users can update own budget entries"
  ON budget_summary
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy for users to delete their own budget entries
CREATE POLICY "Users can delete own budget entries"
  ON budget_summary
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_budget_user_id ON budget_summary(user_id);

-- Create trigger to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_budget_summary_updated_at
  BEFORE UPDATE ON budget_summary
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();