import { createClientB } from "../../../data/supabase/client";

interface SaveAnswerParams {
  gameId: string;
  questionId: string;
  difficulty: string;
  correctAnswer: string;
  playerAnswer: string;
  isCorrect: boolean;
  timeTaken: number; // in seconds
  scoreAwarded: number;
}

export async function saveAnswer({
  gameId,
  questionId,
  playerAnswer,
 
}: SaveAnswerParams) {
  const supabase = await createClientB();
  return supabase.from("answers").insert({
    question_id: questionId,
    player_answer: playerAnswer,
  });
}
