"use client"

import { createContext, useContext, useReducer } from "react"
import { gameReducer } from "@/src/state/game/gameReducer"
import { initialGameState, GameState } from "@/src/state/game/gameState"
import { GameAction } from "@/src/state/game/gameActions"
import { startGameFlow, submitAnswerFlow, finishGameFlow } from "@/src/core/game/engine"

const GameContext = createContext<{
  state: GameState
  dispatch: (action: GameAction) => Promise<void>
} | null>(null)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, baseDispatch] = useReducer(gameReducer, initialGameState)

  async function dispatch(action: GameAction) {
    switch (action.type) {
      case "START_GAME":
        await startGameFlow(state, baseDispatch)
        break

      case "ANSWER_SUBMITTED":
        await submitAnswerFlow(state, action.payload, baseDispatch)
        break

      case "FINISH_GAME":
        await finishGameFlow(state, baseDispatch)
        break
    }

    baseDispatch(action)
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
