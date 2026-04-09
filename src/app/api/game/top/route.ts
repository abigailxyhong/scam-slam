import { supabaseAdmin } from "@/src/lib/utils/supabase";
/**
 * Retrieves the top 15 game scores for the leaderboard
 * - Filters out games without a score
 * - Orders by score in descending order
 * - Limits to top 15 results
 * 
 * @returns JSON response containing leaderboard data or an error object
 */
export async function GET() {
    const { data, error } = await supabaseAdmin
        .from("games")
        .select("playerName, score")
        .not("score", "is", null)        
        .order("score", { ascending: false })
        .limit(15);

    return Response.json({ data, error });
}