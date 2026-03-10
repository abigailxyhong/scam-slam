import { createClientS } from "@/app/lib/supabase/server";
import LeaderboardClient from "./LeaderboardClient";

export default async function LeaderboardPage() {
    const supabase = await createClientS();

    const { data: rows, error } = await supabase
        .from("games")
        .select("score, player_name")
        .order("score", { ascending: false })
        .limit(20);

    return <LeaderboardClient rows={rows ?? []} />;
}
