import { BaseQuestion, Answer } from "@/src/core/game/questions/baseQuestion";
import { GameState } from "./gameState";

export type GameAction =
  | { type: "SET_STATE"; payload: GameState}
  | { type: "TOGGLE_BUZZERS"}
  | { type: "CREATE_GAME"; payload: string }
  | { type: "SET_GAME_ID"; payload: string }
  | { type: "SELECT_QUESTIONS" }
  | { type: "SET_QUESTIONS"; payload: BaseQuestion[]}
  | { type: "SET_CURRENT_QUESTION"; payload: BaseQuestion}
  | { type: "START_PLAY"}
  | { type: "HANDLE_ANSWER"; payload: { answer: Answer; timeLeft: number }}
  | { type: "ANSWER_UPDATE"; payload: { feedback: string ; scoreAwarded: number } }
  | { type: "INCREMENT_SCORE"; payload: number}
  | { type: "LOSE_LIFE" }
  | { type: "TIME_OUT" }
  | { type: "CHECK_GAME_COMPLETE" }
  | { type: "NEXT_QUESTION"}
  | { type: "TICK" }
  | { type: "UPDATE_GAME" }
  | { type: "COMPLETE_GAME" }
  | { type: "SEE_LEADERBOARD" }
  | { type: "RESET_GAME" }
