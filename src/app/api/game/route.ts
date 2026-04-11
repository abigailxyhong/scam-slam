import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/src/lib/utils/supabase";

/**
 * Creates a new game entry using the player's submitted name
 * 
 * @param req Incoming HTTP request containing JSON body with playerName
 * @returns JSON response containing the created game entry or an error object
 */
export async function POST(req: Request) {

  // Read the raw request body as text
  const rawBody = await req.text();

  let body;
  try {
    // Attempt to parse the JSON payload
    body = JSON.parse(rawBody);
  } catch (err) {
    // Return an error if the JSON is invalid
    console.error("Failed to parse JSON:", err);
    return NextResponse.json({
      data: null,
      error: { message: "Invalid JSON body" }
    });
  }

  // Insert a new game record using the provided player name
  const { data, error } = await supabaseAdmin
    .from("games")
    .insert({
      playerName: body.playerName,
    })
    .select()
    .single(); // Return the inserted row as an object
  
  // Return the created game entry or an error object as JSON response
  return NextResponse.json({ data, error });
}
