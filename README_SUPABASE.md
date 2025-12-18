
# SaathiCare Supabase Local Setup Guide

Follow these steps to set up your Supabase backend locally for development.

## 1. Prerequisites
- [Docker](https://www.docker.com/) installed and running.
- [Supabase CLI](https://supabase.com/docs/guides/cli) installed.

## 2. Initialize Supabase
Run the following commands in the root of your project:

```bash
# Initialize Supabase configuration
supabase init

# Start Supabase locally (starts Docker containers)
supabase start
```

## 3. Apply Schema
Once Supabase is running, you can apply the database schema. You can either copy the contents of `supabase_setup.sql` into the SQL Editor at `http://localhost:54323` (Local Dashboard) or run:

```bash
# Apply migrations (if using migration files)
# Or manually run the SQL via the dashboard
```

## 4. Environment Variables
Update your local environment variables (or the hosting config) with the credentials provided by `supabase start`:

- `SUPABASE_URL`: `http://127.0.0.1:54321`
- `SUPABASE_ANON_KEY`: (Copy the `anon key` from the output of `supabase start`)

## 5. Auth Setup
- Local Studio is available at `http://localhost:54323`.
- Go to **Authentication > Providers** to configure email/password or social logins.
- Use the **SQL Editor** to run the RLS policies in `supabase_setup.sql` to ensure data security.

## Troubleshooting
- **Docker not running**: Ensure the Docker Desktop app is active.
- **Port conflicts**: If `54321` is taken, you can change it in `supabase/config.toml`.
