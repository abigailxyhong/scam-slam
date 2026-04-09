import { supabaseAdmin } from "@/src/lib/utils/supabase";

export async function GET() {
    const { data, error } = await supabaseAdmin
        .from("games")
        .select("playerName, score")
        .not("score", "is", null)        
        .order("score", { ascending: false })
        .limit(15);

    return Response.json({ data, error });
}