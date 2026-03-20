// state/game/gameActions.ts

import { BaseQuestion, Answer } from "@/src/core/game/questions/baseQuestion";

export type GameAction =
  | { type: "TOGGLE_BUZZERS"}
  | { type: "CREATE_GAME"; payload: string }
  | { type: "SET_GAME_ID"; payload: string }
  | { type: "SELECT_QUESTIONS" }
  | { type: "SET_QUESTIONS"; payload: BaseQuestion[]}
  | { type: "SET_CURRENT_QUESTION"; payload: BaseQuestion}
  | { type: "HANDLE_ANSWER"; payload: { answer: Answer; timeLeft: number }}
  | { type: "ANSWER_UPDATE"; payload: { feedback: string ; scoreAwarded: number } }
  | { type: "INCREMENT_SCORE"; payload: number}
  | { type: "LOSE_LIFE" }
  | { type: "TIME_OUT" }
  | { type: "CHECK_GAME_STATUS" }
  | { type: "NEXT_QUESTION"}
  | { type: "TICK" }
  | { type: "COMPLETE_GAME" }
  | { type: "SEE_LEADERBOARD" }
  | { type: "RESET_GAME" }
