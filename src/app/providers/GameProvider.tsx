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

const GameContext = createContext<{
  state: GameState
  dispatch: (action: GameAction) => Promise<void>
} | null>(null)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, baseDispatch] = useReducer(gameReducer, initialGameState)
  const router = useRouter()
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())

  const timeTaken = Date.now() - questionStartTime;

  useEffect(() => {
    if (state.status === "playing") {
      setQuestionStartTime(Date.now())
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
      dispatch({ type: "UPDATE_GAME"})
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
        baseDispatch({ type: "SET_QUESTIONS", payload: questions })
        return
      }

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

      case "UPDATE_GAME": {
        console.log("Calling updateGame with:", state.gameId)
        await updateGame(state.gameId, {
          score: state.score,
          finished_at: new Date().toISOString(),
        })

        baseDispatch({ type: "COMPLETE_GAME" })
        return
      }

      case "RESET_GAME": {
        baseDispatch({ type: "SET_STATE", payload: initialGameState })
        return
      }

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
