// state/game/gameReducer.ts

import { GameState } from "./gameState"
import { GameAction } from "./gameActions"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

export function gameReducer(state: GameState, action: GameAction): GameState {

  switch (action.type) {

    case "TOGGLE_BUZZERS":
      return {
        ...state,
        digitalBuzzersOn: !state.digitalBuzzersOn
      }

    case "SET_GAME_ID":
      return {
        ...state,
        gameId: action.payload
      }

    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        currentQuestionIndex: 0,
        currentQuestion: action.payload[0]
      }

    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload
      }
    
    case "START_PLAY":
      return {
        ...state,
        status: "playing"
      }

    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + action.payload,
        status: "feedback",
        lastFeedback: "correct",
      }

    case "LOSE_LIFE":
      return {
        ...state,
        lives: state.lives - 1,
        status: "feedback",
        lastFeedback: "incorrect",
      }

    case "TIME_OUT":
      return {
        ...state,
        lives: state.lives - 1,
        status: "feedback",
        lastFeedback: "timeout"
      }

    case "CHECK_GAME_COMPLETE": {
      const nextIndex = state.currentQuestionIndex + 1
      const isLast = (nextIndex >= state.questions.length || state.lives === 0)

      console.log("Is Last:", isLast)

      if (isLast) {
        return {
          ...state,
          status: "completed"
          // update game details probs
        }
      } else {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          currentQuestion: state.questions[state.currentQuestionIndex],

          status: "playing",
          timeLeft: GAME_CONFIG.TIME_LIMIT,
          lastFeedback: null
        }
      }
    }

    case "NEXT_QUESTION": {
      console.log("why oh why")
      if (state.status === "playing") return state

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        currentQuestion: state.questions[state.currentQuestionIndex],

        status: "playing",
        timeLeft: GAME_CONFIG.TIME_LIMIT,
        lastFeedback: null
      }
    }

    case "TICK": {
      if (state.timeLeft <= 1) {
        return {
          ...state,
          timeLeft: 0,
          lastFeedback: "timeout",
          status: "feedback"
        }
      }

      return {
        ...state,
        timeLeft: state.timeLeft - 1
      }
    }


    case "COMPLETE_GAME":
      return {
        ...state,
        status: "completed"
      }

    case "SET_STATE": {
      return action.payload
    }


    default:
      return state
  }
}
