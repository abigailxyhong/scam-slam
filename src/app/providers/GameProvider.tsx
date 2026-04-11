"use client"

import { createContext, useContext, useReducer, useEffect } from "react"
import { gameReducer } from "@/src/state/gameReducer"
import { initialGameState, GameState } from "@/src/state/gameState"
import { GameAction } from "@/src/state/gameActions"
import { createGame, updateGame, recordQuestionAttempt } from "@/src/lib/utils/game"
import { selectQuestions } from "@/src/core/game/engine"
import { useRouter } from "next/navigation"
import { calculateScoreIncrement } from "@/src/core/game/scoring"
import { useState } from "react"

/**
 * Creates a React context that exposes:
 * - the current game state
 * - an asynch dispatch function that handles game actions and side effects 
 * (like API calls and navigation)
 * 
 * The GameProvider manages the entire game lifecycle:
 * - creating a new game
 * - selecting questions
 * - tracking time
 * - handling answers
 * - updating the database
 * - navigating between screens
*/
const GameContext = createContext<{
  state: GameState
  dispatch: (action: GameAction) => Promise<void>
} | null>(null)

export function GameProvider({ children }: { children: React.ReactNode }) {
  // Core reducer controlling game state transitions
  const [state, baseDispatch] = useReducer(gameReducer, initialGameState)
  
  const router = useRouter()
  
  // Tracks when the current quesetion started (used for scoring and analytics)
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())

  const timeTaken = Date.now() - questionStartTime;

  /**
   * When the game enters the "playing" status:
   * - reset the question timer
   * - navigate to the question screen
   */
  useEffect(() => {
    if (state.status === "playing") {
      setQuestionStartTime(Date.now())
      router.push("/questions")
    }
  }, [state.status])

  /**
   * When the game enters the "feedback" status:
   * - navigate to the appropriate feedback screen based on answer correctness
   */
  useEffect(() => {
    if (state.status !== "feedback") return

    switch (state.lastFeedback) {
      case "correct":
        router.push("/feedback/correct")
        break

      case "incorrect":
        router.push("/feedback/incorrect")
        break

      case "timeout":
        router.push("/feedback/time-out")
        break
    }
  }, [state.status])

  /**
   * When the game is marked as "completed":
   * - update the database record
   * - navigate to the game complete screen
   */
  useEffect(() => {
    if (state.status === "completed") {
      dispatch({ type: "UPDATE_GAME"})
      router.push("/game-complete")
    }
  }, [state.status])

  /**
   * While playing, tick the timer every second
   * When time runs out, dispatch a TIME_OUT action to handle it in the reducer
   */
  useEffect(() => {
    if (state.status !== "playing") return

    const interval = setInterval(() => {
      baseDispatch({ type: "TICK" })
    }, 1000)

    return () => clearInterval(interval)
  }, [state.status])

  /**
   * Asynch dispatch function that handles game actions with side effects:
   * @param action The game action to handle, which may trigger API calls and state updates
   */
  async function dispatch(action: GameAction) {
    switch (action.type) {
      
      // Create a new game entry in the database
      case "CREATE_GAME": {
        const game = await createGame(action.payload)
        baseDispatch({ type: "SET_GAME_ID", payload: game.id})
        return
      }

      // Select a new set of questions for the game
      case "SELECT_QUESTIONS": {
        const questions = selectQuestions()
        baseDispatch({ type: "SET_QUESTIONS", payload: questions })
        return
      }

      /**
       * Handle the player's answer:
       * - record the attempt
       * - awards score if correct
       * - deducts a life if incorrect
       */
      case "HANDLE_ANSWER": {
        if (!state.currentQuestion) return
        if (action.payload.answer === state.currentQuestion.correctAnswer) {
          await recordQuestionAttempt({
            gameId: state.gameId,
            questionId: state.currentQuestion.id,
            isCorrect: true,
            timeTakenMs: timeTaken,
            questionType: state.currentQuestion.type
          })
          const scoreAwarded = calculateScoreIncrement(state.currentQuestion.difficulty, action.payload.timeLeft)
          baseDispatch({ type: "INCREMENT_SCORE", payload: scoreAwarded })
          return
        } else if(action.payload.answer !== state.currentQuestion.correctAnswer){
          await recordQuestionAttempt({
            gameId: state.gameId,
            questionId: state.currentQuestion.id,
            isCorrect: false,
            timeTakenMs: timeTaken,
            questionType: state.currentQuestion.type
          })
          baseDispatch({ type: "LOSE_LIFE" })
          return
        }
      }

      // Updates the game record in the database when the game is over
      case "UPDATE_GAME": {
        await updateGame(state.gameId, {
          score: state.score,
          finished_at: new Date().toISOString(),
        })

        baseDispatch({ type: "COMPLETE_GAME" })
        return
      }

      // Resets the entire game state back to the intial defaults
      case "RESET_GAME": {
        baseDispatch({ type: "SET_STATE", payload: initialGameState })
        return
      }

      // Fallback to the default reducer for any action that doesn't require side effects
      default: {
        baseDispatch(action)
        return
      }
    }
  }

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

/**
 * Hook for accessing the game context
 * - Ensures it is only used inside a GameProvider
 * @returns The game context, including the current game state and the dispatch function for triggering actions
 * @throws Error if used outside of a GameProvider
 */
export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error("useGame must be used within GameProvider")
  return ctx
}
