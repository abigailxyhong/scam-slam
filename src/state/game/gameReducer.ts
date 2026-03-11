// state/game/gameReducer.ts

import { GameState } from "./gameState"
import { GameAction } from "./gameActions"

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "SET_PLAYER_NAME":
      return {
        ...state,
        playerName: action.payload,
      }

    case "SET_GAME_ID":
      return {
        ...state,
        gameId: action.payload,
      }

    case "SET_PLAYER_ID":
      return {
        ...state,
        playerId: action.payload,
      }

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload,
        timeLeft: state.timeLimit, // reset timer for each question
      }

    case "ANSWER_SUBMITTED":
      return {
        ...state,
        lastAnswer: action.payload,
      }

    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + action.payload,
      }

    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload,
      }

    case "TICK":
      return {
        ...state,
        timeLeft: Math.max(0, state.timeLeft - 1),
      }

    case "RESET_GAME":
      return {
        ...state,
        gameId: null,
        playerId: null,
        score: 0,
        currentQuestion: null,
        timeLeft: state.timeLimit,
      }

    case "FINISH_GAME":
      return {
        ...state,
        isFinished: true,
      }

    default:
      return state
  }
}
