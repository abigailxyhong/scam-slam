import { GameState } from "./gameState";
import { Answer, BaseQuestion } from "../content/baseQuestion"
import { GAME_CONFIG } from "./gameConfig";
import { generateQuestionSet } from "./questionSelector";

export type GameAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_QUESTIONS"; payload: BaseQuestion[] }
  | { type: "START_GAME" }
  | { type: "SET_CURRENT_QUESTION"; payload: BaseQuestion }
  | { type: "ANSWER_SUBMITTED"; payload: Answer }
  | { type: "TICK" }
  | { type: "NEXT_QUESTION" }
  | { type: "RESET_GAME" }

export function gameReducer(
  state: GameState,
  action: GameAction
): GameState {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,

      }

    case "START_GAME":
      const allQuestions = generateQuestionSet(GAME_CONFIG.MAX_QUESTIONS)

      return {
        ...state,
        questions: allQuestions,
        currentQuestionIndex: 0,
        status: "playing",
        score: 0,
        lives: 3,
        timeLeft: GAME_CONFIG.TIME_LIMIT,
        level: 1,
      }

    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload
      }


    case "ANSWER_SUBMITTED": {
      const currentQuestion =
        state.questions[state.currentQuestionIndex]

      if (!currentQuestion) return state

      const isCorrect =
        action.payload === currentQuestion.correctAnswer

      const newLives = isCorrect ? state.lives : state.lives - 1
      const newScore = isCorrect ? state.score + 100 : state.score

      if (newLives <= 0) {
        return {
          ...state,
          lives: 0,
          status: "game-over",
        }
      }

      return {
        ...state,
        score: newScore,
        lives: newLives,
        level: state.level + 1,
      }
    }

    case "NEXT_QUESTION": {
      const nextIndex = state.currentQuestionIndex + 1

      if (nextIndex >= state.questions.length) {
        return {
          ...state,
          status: "completed",
        }
      }

      return {
        ...state,
        currentQuestionIndex: nextIndex,
        timeLeft: GAME_CONFIG.TIME_LIMIT, // reset timer per question
      }
    }

    case "RESET_GAME":
      return {
        ...state,
        currentQuestionIndex: 0,
        score: 0,
        lives: 3,
        timeLeft: GAME_CONFIG.TIME_LIMIT,
        level: 1,
        status: "playing",
      }

    default:
      return state
  }
}
