import { BaseQuestion } from "@/src/core/game/questions/baseQuestion"

export interface GameState {
    playerName: string
    gameId: string | null
    currentQuestionIndex: number
    currentQuestion: BaseQuestion | null
    score: number
    lives: number
    timeLeft: number
    questionsCorrect: number
    digitalBuzzersOn: boolean
    questions: BaseQuestion[]
    status: "intro" | "playing" | "feedback" | "completed" | "game-over"
    lastFeedback: "correct" | "incorrect" | "timeout" | null
}

export const initialGameState: GameState = {
    playerName: "",
    gameId: null,
    currentQuestionIndex: 0,
    currentQuestion: null,
    score: 0,
    lives: 3,
    timeLeft: 20,
    questionsCorrect: 0,
    digitalBuzzersOn: false,
    questions: [],
    status: "intro",
    lastFeedback: null,
}