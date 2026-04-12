'use server'
import { supabase } from "./supabase"

interface GameProps {
    gameId: string
    score: number
    finished_at: string
}

interface QuestionProps {
    gameId: string
    questionId: string
    isCorrect: boolean
    timeTakenMs: number
    questionType: string
}
export async function createGame(input_name: string) {
    const { data, error } = await supabase
        .from("games")
        .insert({
            player_name: input_name,
        })
        .select()
        .single();

    if (error) throw new Error(error.message)
    return data
}

export async function updateGame({ gameId, score, finished_at}: GameProps) {
    const { data, error } = await supabase
        .from("games")
        .update({
            score: score,
            finished_at: finished_at
        })
        .eq("id", gameId)
        .select()
        .single()

    if (error) throw new Error(error.message)
    return data
}

export async function recordQuestionAttempt({gameId, questionId, 
                                            isCorrect, timeTakenMs, 
                                            questionType}: QuestionProps) {
    const { data, error} = await supabase
        .from("question_attempts")
        .insert({
            game_id: gameId,
            question_id: questionId,
            question_type: questionType,
            is_correct: isCorrect,
            time_taken_ms: timeTakenMs
        })
        .select()
        .single()
    
        if (error) throw new Error(error.message)
        return data
}   
