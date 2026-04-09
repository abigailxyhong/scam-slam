import { supabaseAdmin } from "@/src/lib/utils/supabase";

/**
 * Handles POST request to record a player's attempt at a question
 * @param req the incoming HTTP request object containing a JSON body
 * @returns JSON responses containing either the inserted row or an error object
 */
export async function POST(req: Request) {
  try {
    // Parse the JSON body of the request
    const body = await req.json();

    // Insert a new "question_attempts" record into the database using Supabase
    const { data, error } = await supabaseAdmin
      .from("question_attempts")
      .insert({
        game_id: body.gameId,
        question_id: body.questionId,
        is_correct: body.isCorrect,
        time_taken_ms: body.timeTakenMs,
        question_type: body.questionType
      })
      .select() // Return the inserted row
      .single(); // Ensure a single object rather than an array
    
    // Respond with the result of the database operation
    return Response.json({ data, error });
  } catch (err) {
    // Log unexpected errors for debugging
    console.error("API ERROR:", err);

    // Reutrn a generic error response
    return Response.json(
      { data: null, error: { message: "Server error" } },
      { status: 500 }
    );
  }
}
