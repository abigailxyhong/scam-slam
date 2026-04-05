import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/src/lib/utils/supabase";

export async function POST(req: Request) {

  const rawBody = await req.text();
  console.log("Raw request body:", rawBody);

  let body;
  try {
    body = JSON.parse(rawBody);
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    return NextResponse.json({
      data: null,
      error: { message: "Invalid JSON body" }
    });
  }

  console.log("Parsed body:", body);

  console.log("Inserting into Supabase:", {
    playerName: body.playerName,
  });


  const { data, error } = await supabaseAdmin
    .from("games")
    .insert({
      playerName: body.playerName,
    })
    .select()
    .single();

  return NextResponse.json({ data, error });
}
