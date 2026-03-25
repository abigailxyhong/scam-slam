import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/src/lib/utils/supabase";

export async function POST(req: Request) {
  console.log("---- POST /api/game HIT ----");

  // 1. Log raw body
  const rawBody = await req.text();
  console.log("Raw request body:", rawBody);

  // 2. Parse JSON safely
  let body;
  try {
    body = JSON.parse(rawBody);
  } catch (err) {
    console.error("❌ Failed to parse JSON:", err);
    return NextResponse.json({
      data: null,
      error: { message: "Invalid JSON body" }
    });
  }

  console.log("Parsed body:", body);

  // 3. Log what we are about to insert
  console.log("Inserting into Supabase:", {
    playerName: body.playerName,
  });

  // 4. Perform the insert
  const { data, error } = await supabaseAdmin
    .from("games")
    .insert({
      playerName: body.playerName,
    })
    .select()
    .single();

  // 5. Log Supabase response
  console.log("Supabase insert result:", { data, error });

  console.log("---- END POST /api/game ----");

  return NextResponse.json({ data, error });
}
