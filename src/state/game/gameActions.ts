// state/game/gameActions.ts

import { Question } from "@/core/game/questionBank"

export type GameAction =
  | { type: "SET_PLAYER_NAME"; payload: string }
  | { type: "SET_PLAYER_ID"; payload: string }
  | { type: "SET_GAME_ID"; payload: string }
  | { type: "START_GAME" }
  | { type: "NEXT_QUESTION"; payload: Question }
  | { type: "ANSWER_SUBMITTED"; payload: string }
  | { type: "SET_CURRENT_QUESTION"; payload: Question }
  | { type: "INCREMENT_SCORE"; payload: number }
  | { type: "TICK" }
  | { type: "RESET_GAME" }
  | { type: "FINISH_GAME" }
