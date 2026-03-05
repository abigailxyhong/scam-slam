import { supabase } from "./client";

export async function createGame(playerId: string, name: string) {
  const { data, error } = await supabase
    .from("games")
    .insert({
      player_id: playerId,
      player_name: name,
    })
    .select()
    .single();

  return { data, error };
}

export async function finishGame(gameId: string, score: number) {
  const { data, error } = await supabase
    .from("games")
    .update({
      score,
      ended_at: new Date()
    })
    .eq("id", gameId);

  return { data, error };
}
