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

/**
 * Creates a new game entry when a player starts
 * @param input_name the player's chosen nickname
 * @returns the newly created game record 
 */
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

/**
 * Finalises a game session by updating the total score and end time
 * @param GameProps includes UUID of current session, total points, and timestamp of completion
 * @returns the inserted game record
 */
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

/**
 * Logs every individual question attempt for data analysis
 * Records whether the user was correct and how fast they answered
 * @param param0 the corresponding values to create a "question_attempts" record
 * @returns the newly created question attempt record
 */
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
