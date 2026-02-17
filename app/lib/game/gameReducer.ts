import { GameState } from "./gameState"
import { Answer, BaseQuestion } from "./content/baseQuestion"

export type GameAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_QUESTIONS"; payload: BaseQuestion[] }
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
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
      }

    case "ANSWER_SUBMITTED": {
      const currentQuestion =
        state.questions[state.currentQuestionIndex]

      console.log("Questions:", state.questions)
      console.log("Index:", state.currentQuestionIndex)

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
      }
    }

    case "TICK":
      if (state.timeLeft <= 1) {
        return {
          ...state,
          status: "game-over",
        }
      }

      return {
        ...state,
        timeLeft: state.timeLeft - 1,
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
        timeLeft: 20, // reset timer per question
      }
    }

    case "RESET_GAME":
      return {
        ...state,
        currentQuestionIndex: 0,
        score: 0,
        lives: 3,
        timeLeft: 20,
        status: "playing",
      }

    default:
      return state
  }
}
