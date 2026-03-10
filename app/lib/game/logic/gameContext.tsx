"use client"

import { createContext, useContext, useReducer } from "react"
import { gameReducer, GameAction } from "./gameReducer"
import { GameState, initialGameState } from "./gameState"
import { GAME_CONFIG } from "./gameConfig"
import { createPlayer } from "../../supabase/players"
import { createGame, finishGame } from "../../supabase/games"
import { saveAnswer } from "../../supabase/gameAnswers"

const GameContext = createContext<{
  state: GameState
  dispatch: React.Dispatch<GameAction>
} | null>(null)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState)

async function enhancedDispatch(action: GameAction) {
  switch (action.type) {

    case "START_GAME": {
  const playerRes = await createPlayer(state.playerName)

  console.log("Raw playerRes:", playerRes)

  if (!playerRes.data) {
    console.error("Failed to create player:", playerRes.error)
    return
  }

  // dispatch({ type: "SET_PLAYER_ID", payload: playerRes.data.id })

  const gameRes = await createGame(state.playerName)

  if (!gameRes.data) {
    console.error("Failed to create game:", gameRes.error)
    return
  }

  dispatch({ type: "SET_GAME_ID", payload: gameRes.data.id })
  break
}


    case "ANSWER_SUBMITTED": {
      if (!state.gameId || !state.currentQuestion) break

      const timeTaken = GAME_CONFIG.TIME_LIMIT - state.timeLeft
      const isCorrect = action.payload === state.currentQuestion.correctAnswer



      // Save answer to DB
      // await saveAnswer({
      //   gameId: state.gameId,
      //   questionId: state.currentQuestion.id,
      //   scoreAwarded: calculateScoreIncrement(
      //     state.currentQuestion.difficulty,
      //     state.timeLeft,
      //     GAME_CONFIG.TIME_LIMIT
      //   )
      // })

      break
    }


    case "RESET_GAME":

    case "FINISH_GAME":
      if (state.gameId) { await finishGame(state.gameId, state.score) }
      break

    case "NEXT_QUESTION":
    //if (state.gameId) { await finishGame(state.gameId, state.score) } break

    case "TICK":
      // no DB writes needed
      break

    default:
      break
  }

  // Always pass the action to the reducer AFTER side effects
  dispatch(action)
}


  return (
    <GameContext.Provider value={{ state, dispatch: enhancedDispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame must be used within GameProvider")
  }
  return context
}
function calculateScoreIncrement(difficulty: string, timeLeft: number, TIME_LIMIT: number): number {
  throw new Error("Function not implemented.")
}

