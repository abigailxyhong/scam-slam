import { BaseQuestion } from "@/src/core/game/questions/baseQuestion"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

/**
 * Describes the full shape of the game state
 * 
 * Each field tracks a different part of gameplay:
 * - playerName: the name entered by the player at the start
 * - gameId: unique identifier for the game session
 * - currentQuestionIndex: tracks which question the player is on
 * - currentQuestion: the question object currently being answered
 * - score: the player's current score
 * - lives: how many chances the player has left
 * - timeLeft: countdown timer for answering the current question
 * - digitalBuzzersOn: whether the buzzers are enabled for the current question
 * - questions: the full set of questions for the game session
 * - status: the current phase of the game (intro, playing, feedback, completed, game-over)
 * - lastFeedback: the result of the most recent answer (correct, incorrect, timeout)
 * 
 * This state is managed globally through a reducer and provider pattern
 * allowing any component to access and update the game state as needed.
 */
export interface GameState {
    playerName: string
    gameId: string 
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

/**
 * Defines the initial state of the game when a new session starts.
 * Loaded before the player enters their name or questions are selected
 */
export const initialGameState: GameState = {
    playerName: "",
    gameId: "",
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