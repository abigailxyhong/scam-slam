import { createClient } from "@supabase/supabase-js"

// These keys should be kept in a hidden .env.local file but are included for submission purposes
const NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZHRwbXJtaXJ5bmVyY3hwd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NDkyMzEsImV4cCI6MjA4ODIyNTIzMX0.SEQCPH65BtUZ0X-MO2kLOicSl5DSwFqDms_Ncou9jRo"
const NEXT_PUBLIC_SUPABASE_URL="https://aodtpmrmirynercxpwla.supabase.co"

/**
 * Initialise the Supabase client using environment variables
 */
export const supabase = createClient(
    NEXT_PUBLIC_SUPABASE_URL!,
    NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);