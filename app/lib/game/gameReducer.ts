import { GameState } from "./gameState";
import { Answer } from "./gameTypes";

type GameAction =
  | { type: "ANSWER_SUBMITTED"; payload: Answer }
  | { type: "TICK" }
  | { type: "NEXT_QUESTION" }
  | { type: "GAME_OVER" };

export function gameReducer(
  state: GameState,
  action: GameAction
): GameState {
  switch (action.type) {
    case "ANSWER_SUBMITTED":
      // update score / lives
      return state;

    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };


    case "NEXT_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };

    case "GAME_OVER":
      return { ...state, status: "game-over" };

    default:
      return state;
  }
}
