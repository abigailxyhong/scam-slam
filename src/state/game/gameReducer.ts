// state/game/gameReducer.ts

import { GameState } from "./gameState"
import { GameAction } from "./gameActions"
import { GAME_CONFIG } from "./gameConfig"

export function gameReducer(state: GameState, action: GameAction): GameState {
  
  switch (action.type) {

    case "TOGGLE_BUZZERS":
      return {
        ...state,
        digitalBuzzersOn: !state.digitalBuzzersOn
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
    
    case "CHECK_GAME_STATUS": {
      const nextIndex = state.currentQuestionIndex + 1
      const isLast = nextIndex >= state.questions.length

      console.log("Is Last:", isLast)

      if (isLast) {
        return {
          ...state,
          status: "completed"
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
        lastFeedback: null
      }
      
      
    }

    case "COMPLETE_GAME":
      return {
        ...state,
        status: "completed"
      }

    default:
      return state
  }
}
