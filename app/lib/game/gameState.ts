import { Question } from "./gameTypes"

export interface GameState {
    currentQuestionIndex: number
    score: number
    lives: number
    timeLeft: number
    questions: Question[]
    status: "playing" | "game-over" | "completed"
}

export const initialGameState: GameState = {
    currentQuestionIndex: 0,
    score: 0,
    lives: 3,
    timeLeft: 20,
    questions: [],
    status: "playing",
}