import { createClient } from "@supabase/supabase-js";

/**
 * Create a Supabase client using the service role key
 * 
 * This client:
 * - has full read/write access to all tables
 * - must only be used in secure server-side code
 * - is used for backend operations such as:
 *   - inserting new game records
 *   - updating existing game records
 *   - recording question attempts
 *   - fetching data for the leaderboard
 * 
 * Environment variables:
 * - NEXT_PUBLIC_SUPABASE_URL: the URL of the Supabase instance
 * - SUPABASE_SERVICE_ROLE_KEY: secret admin key with elevated privileges
*/
export const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
);