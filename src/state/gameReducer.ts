import { GameState } from "./gameState"
import { GameAction } from "./gameActions"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

/**
 * The main reducer controlling all game state transitions
 * 
 * Updates:
 * - gameplay status
 * - scoring and lives
 * - timer countdown
 * - feedback transitions
 * - question progression
 * 
 * @param state the current game state
 * @param action the action to be processed
 * @returns the updated game state
 */
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

    /**
     * Determines whether the game should end or move to the next question.
     * Ends the game if:
     * - the player has no lives left, or
     * - there are no more questions.
     */
    case "CHECK_GAME_COMPLETE": {
      const nextIndex = state.currentQuestionIndex + 1
      const isLast = (nextIndex >= state.questions.length || state.lives === 0)

      if (isLast) {
        return {
          ...state,
          status: "completed"
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

    /**
     * Moves to the next question after feedback.
     * Does nothing if already in "playing" mode.
     */
    case "NEXT_QUESTION": {
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

    /**
     * Decrements the timer once per second.
     * If time reaches zero, triggers a timeout.
     */
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
