import { GameState } from "./gameState";
import { Answer, BaseQuestion } from "../content/baseQuestion"
import { GAME_CONFIG } from "./gameConfig";
import { generateQuestionSet } from "./questionSelector";

export type GameAction =
  | { type: "TOGGLE_BUZZERS" }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_PLAYER_ID"; payload: string }
  | { type: "SET_GAME_ID"; payload: string }
  | { type: "SET_QUESTIONS"; payload: BaseQuestion[] }
  | { type: "START_GAME" }
  | { type: "SET_CURRENT_QUESTION"; payload: BaseQuestion }
  | { type: "ANSWER_SUBMITTED"; payload: Answer }
  | { type: "TICK" }
  | { type: "NEXT_QUESTION" }
  | { type: "FINISH_GAME" }
  | { type: "RESET_GAME" }

// should probs take out some of the random shit in here

function calculateScoreIncrement(difficulty: string, timeLeft: number, timeLimit: number) {
  const timeTaken = timeLimit - timeLeft;
  const speedRatio = Math.max(0, Math.min(1, 1 - timeTaken / timeLimit));
  // 1 = instant answer, 0 = slowest

  let min = 0;
  let max = 0;

  if (difficulty === "easy") {
    min = 0; max = 50;
  } else if (difficulty === "medium") {
    min = 50; max = 100;
  } else if (difficulty === "hard") {
    min = 100; max = 150;
  }

  return Math.round(min + (max - min) * speedRatio);
}


export function gameReducer(
  state: GameState,
  action: GameAction
): GameState {
  switch (action.type) {
    case "TOGGLE_BUZZERS":
      return {
        ...state,
        digitalBuzzersOn: !state.digitalBuzzersOn,
      }

    case "SET_NAME":
      return {
        ...state,
        playerName: action.payload,
      }

    case "SET_PLAYER_ID":
      return {
        ...state,
        playerId: action.payload,
      }

    case "SET_GAME_ID":
      return {
        ...state,
        gameId: action.payload,
      }

    case "START_GAME":
      // createPlayer(state.playerName).then(res => {
      //   dispatchEvent({ type: "SET_PLAYER_ID", payload: res.data.id })
      // })  


      const allQuestions = generateQuestionSet(GAME_CONFIG.MAX_QUESTIONS)

      return {
        ...state,
        questions: allQuestions,
        currentQuestionIndex: 0,
        status: "playing",
        score: 0,
        lives: 3,
        timeLeft: GAME_CONFIG.TIME_LIMIT,
        level: 1,
      }

    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload
      }

    case "TICK":
      if (state.timeLeft <= 1) {
        return {
          ...state,
          timeLeft: 0,
        };
      }
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };

    case "ANSWER_SUBMITTED": {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (!currentQuestion) return state;

      const isCorrect = action.payload === currentQuestion.correctAnswer;


      let scoreIncrement = 0;

      if (isCorrect) {
        scoreIncrement = calculateScoreIncrement(
          currentQuestion.difficulty,
          state.timeLeft,
          GAME_CONFIG.TIME_LIMIT
        );
      }

      const newScore = state.score + scoreIncrement;
      const newLives = isCorrect ? state.lives : state.lives - 1;

      if (newLives <= 0) {
        return {
          ...state,
          lives: 0,
          status: "game-over",
          score: newScore,
        };
      }

      return {
        ...state,
        lives: newLives,
        level: state.level + 1,
        score: newScore,
      };
    }

    case "NEXT_QUESTION": {
      const nextIndex = state.currentQuestionIndex + 1

      if (nextIndex >= state.questions.length) {
        return {
          ...state,
          status: "completed",
        }
      }

      return {
        ...state,
        currentQuestionIndex: nextIndex,
        timeLeft: GAME_CONFIG.TIME_LIMIT, // reset timer per question
      }
    }

    case "FINISH_GAME":
      return {
        ...state,
        status: "completed", // or "game-over"
      }


    case "RESET_GAME":
      return {
        ...state,
        currentQuestionIndex: 0,
        score: 0,
        lives: 3,
        timeLeft: GAME_CONFIG.TIME_LIMIT,
        level: 1,
        status: "playing",
      }

    default:
      return state
  }
}
