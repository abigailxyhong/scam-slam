"use client"

import { createContext, useContext, useReducer, useEffect } from "react"
import { gameReducer } from "@/src/state/game/gameReducer"
import { initialGameState, GameState } from "@/src/state/game/gameState"
import { GameAction } from "@/src/state/game/gameActions"
import { createGame } from "@/src/data/supabase/games"
import { selectQuestions } from "@/src/core/game/engine"
import { GAME_CONFIG } from "@/src/state/game/gameConfig"
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
  }, [state.currentQuestionIndex])

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
        router.push("/feedback/timeout")
        break
    }
  }, [state.status])

  useEffect(() => {
    if (state.status === "completed") {
      router.push("/game-complete")
    }
  }, [state.status])



  async function dispatch(action: GameAction) {
    switch (action.type) {

      case "CREATE_GAME": {
        await createGame(action.payload)
        return // no reducer update needed
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
