"use client";

import { createContext, useContext, useReducer } from "react";

export type GamePhase = 
| "landing"
| "name"
| "instructions"
| "playing"
| "feedback"
| "gameOver";

export interface GameState {
    playerName: string
    score: number
    lives: number
    phase: GamePhase
    level: number
}

const initialState: GameState = {
    playerName: "",
    score: 0,
    lives: 3,
    phase: "landing",
    level: 1
}

type GameAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_PHASE"; payload: GamePhase }
  | { type: "INCREMENT_SCORE"; payload?: number }
  | { type: "LOSE_LIFE" }
  | { type: "RESET_GAME" };

  function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, playerName: action.payload };

    case "SET_PHASE":
      return { ...state, phase: action.payload };

    case "INCREMENT_SCORE":
      return { ...state, score: state.score + (action.payload ?? 100) };

    case "LOSE_LIFE":
      return { ...state, lives: state.lives - 1 };

    case "RESET_GAME":
      return initialState;

    default:
      return state;
  }
}

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within GameProvider");
  }
  return context;
}
