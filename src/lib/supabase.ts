import { createClient } from "@supabase/supabase-js"

/**
 * Initialise the Supabase client using environment variables
 */
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);