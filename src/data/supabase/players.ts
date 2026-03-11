import { createClientB } from "../../../data/supabase/client";

export async function createPlayer(name: string) {
    const supabase = await createClientB();

    const { data, error } = await supabase
        .from("players")
        .insert({ name })
        .select()
        .single();

    if (error) {
        console.error("Error creating player:", error);
        throw error;
    }

    return {data, error};
}