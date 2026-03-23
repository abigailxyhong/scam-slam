import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/src/lib/utils/supabase";

export async function POST(req: Request) {
    const body = await req.json()
    
    const { data, error } = await supabaseAdmin
        .from("games")
        .insert({
            playerName: body.playerName,
        })
        .select()
        .single();

    return Response.json({ data, error });
}