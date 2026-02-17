import { BaseQuestion } from "./content/baseQuestion"

export interface GameState {
    playerName: string
    currentQuestionIndex: number
    score: number
    level: number
    lives: number
    timeLeft: number
    questions: BaseQuestion[]
    status: "playing" | "game-over" | "completed"
}

export const initialGameState: GameState = {
    playerName: "",
    currentQuestionIndex: 0,
    score: 0,
    level: 1,
    lives: 3,
    timeLeft: 20,
    questions: [],
    status: "playing",
}