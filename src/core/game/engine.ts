// core/game/engine.ts

import { calculateScoreIncrement } from "./scoring"
import { getNextQuestion } from "./nextQuestion"
import { GameState } from "@/state/game/gameState"
import { GameAction } from "@/state/game/gameActions"

import { createPlayer } from "@/data/supabase/players"
import { createGame, finishGame } from "@/data/supabase/games"
import { saveAnswer } from "@/data/supabase/gameAnswers"

export async function startGameFlow(
  state: GameState,
  dispatch: React.Dispatch<GameAction>
) {
  const playerRes = await createPlayer(state.playerName)
  if (!playerRes.data) return

  dispatch({ type: "SET_PLAYER_ID", payload: playerRes.data.id })

  const gameRes = await createGame(state.playerName)
  if (!gameRes.data) return

  dispatch({ type: "SET_GAME_ID", payload: gameRes.data.id })

  const firstQuestion = getNextQuestion()
  dispatch({ type: "NEXT_QUESTION", payload: firstQuestion })
}

export async function submitAnswerFlow(
  state: GameState,
  answer: string,
  dispatch: React.Dispatch<GameAction>
) {
  if (!state.gameId || !state.currentQuestion) return

  const score = calculateScoreIncrement(
    state.currentQuestion.difficulty,
    state.timeLeft,
    state.timeLimit
  )

  await saveAnswer({
    gameId: state.gameId,
    questionId: state.currentQuestion.id,
    scoreAwarded: score,
  })

  dispatch({ type: "INCREMENT_SCORE", payload: score })

  const next = getNextQuestion()
  dispatch({ type: "NEXT_QUESTION", payload: next })
}

export async function finishGameFlow(
  state: GameState,
  dispatch: React.Dispatch<GameAction>
) {
  if (state.gameId) {
    await finishGame(state.gameId, state.score)
  }

  dispatch({ type: "FINISH_GAME" })
}
