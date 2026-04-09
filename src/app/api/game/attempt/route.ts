import { supabaseAdmin } from "@/src/lib/utils/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await supabaseAdmin
      .from("question_attempts")
      .insert({
        game_id: body.gameId,
        question_id: body.questionId,
        is_correct: body.isCorrect,
        time_taken_ms: body.timeTakenMs,
        question_type: body.questionType
      })
      .select()
      .single();

    return Response.json({ data, error });
  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json(
      { data: null, error: { message: "Server error" } },
      { status: 500 }
    );
  }
}
