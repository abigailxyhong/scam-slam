"use client"

import { createContext, useContext, useReducer, useEffect } from "react"
import { gameReducer } from "@/src/state/game/gameReducer"
import { initialGameState, GameState } from "@/src/state/game/gameState"
import { GameAction } from "@/src/state/game/gameActions"
import { createGame, updateGame } from "@/src/app/api/game"
import { selectQuestions } from "@/src/core/game/engine"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"
import { useRouter } from "next/navigation"
import { calculateScoreIncrement } from "@/src/core/game/scoring"

const GameContext = createContext<{
  state: GameState
  dispatch: (action: GameAction) => Promise<void>
} | null>(null)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, baseDispatch] = useReducer(gameReducer, initialGameState)
  const router = useRouter()

  useEffect(() => {
    if (state.status === "playing") {
      router.push("/questions")
    }
  }, [state.status])

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

  useEffect(() => {
    if (state.status === "completed") {
      router.push("/game-complete")
    }
  }, [state.status])

  useEffect(() => {
    if (state.status !== "playing") return

    const interval = setInterval(() => {
      baseDispatch({ type: "TICK" })
    }, 1000)

    return () => clearInterval(interval)
  }, [state.status])

  async function dispatch(action: GameAction) {
    switch (action.type) {

      case "CREATE_GAME": {
        const game = await createGame(action.payload)
        baseDispatch({ type: "SET_GAME_ID", payload: game.id})
        return 
      }

      case "SELECT_QUESTIONS": {
        const questions = selectQuestions()
        console.log("Questions Selected:", questions)
        baseDispatch({ type: "SET_QUESTIONS", payload: questions })
        return
      }

      case "HANDLE_ANSWER": {
        if (action.payload.answer === state.currentQuestion?.correctAnswer) {
          const scoreAwarded = calculateScoreIncrement(state.currentQuestion.difficulty, action.payload.timeLeft)
          baseDispatch({ type: "INCREMENT_SCORE", payload: scoreAwarded })
          return
        } else {
          baseDispatch({ type: "LOSE_LIFE" })
          return
        }
      }

      case "UPDATE_GAME": {
        await updateGame()
        baseDispatch({ type: "COMPLETE_GAME"})
        return
      }

      case "RESET_GAME": {
        baseDispatch({ type: "SET_STATE", payload: initialGameState })
        return
      }

      // Any action not handled above goes straight to the reducer.
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

export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error("useGame must be used within GameProvider")
  return ctx
}
