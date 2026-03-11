import { createClientB } from "../../../data/supabase/client";

export async function createGame(name: string) {
  const supabase = await createClientB();
  const { data, error } = await supabase
    .from("games")
    .insert({
      player_name: name,
    })
    .select()
    .single();

  console.log("createGame:", { data, error });


  return { data, error };
}

export async function finishGame(gameId: string, score: number) {
  const supabase = await createClientB();
  const { data, error } = await supabase
    .from("games")
    .update({
      score,
      ended_at: new Date()
    })
    .eq("id", gameId);

  return { data, error };
}
