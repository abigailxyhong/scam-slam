import { BaseQuestion } from "@/src/core/game/questions/baseQuestion"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

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
    timeLeft: GAME_CONFIG.TIME_LIMIT,
    questionsCorrect: 0,
    digitalBuzzersOn: false,
    questions: [],
    status: "intro",
    lastFeedback: null,
}