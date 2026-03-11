import { BaseQuestion } from "@/src/core/game/questions/baseQuestion"

export interface GameState {
    playerName: string
    playerId: string | null
    gameId: string | null
    currentQuestionIndex: number
    currentQuestion: BaseQuestion | null
    score: number
    level: number
    lives: number
    timeLeft: number
    questionsCorrect: number
    digitalBuzzersOn: boolean
    questions: BaseQuestion[]
    status: "playing" | "game-over" | "completed"
}

export const initialGameState: GameState = {
    playerName: "",
    playerId: null,
    gameId: null,
    currentQuestionIndex: 0,
    currentQuestion: null,
    score: 0,
    level: 1,
    lives: 3,
    timeLeft: 20,
    questionsCorrect: 0,
    digitalBuzzersOn: false,
    questions: [],
    status: "playing",
}