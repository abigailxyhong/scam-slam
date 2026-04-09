import { Answer, BaseQuestion } from "./questions/baseQuestion"
import { calculateScoreIncrement } from "./scoring"
import { GameState } from "@/src/state/gameState"
import { generateQuestionSet } from "./questionSelection"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

/**
 * Selects a set of questions for the game session
 * - Pulls the maximum number of questions from GAME_CONFIG
 * - Uses the question selection algorithm to generate a balanced set
 * 
 * @returns an array of BaseQuestions objects
 */
export function selectQuestions(){
  let questions: BaseQuestion[] = [];
  questions = generateQuestionSet(GAME_CONFIG.MAX_QUESTIONS)
  return questions
}

/**
 * Evaluates the player's answer to the current question
 * 
 * - Determines if the answer is correct, incorrect, or a time-out
 * - Calculates the score awarded based on difficulty and time left
 * 
 * @param state the current game state
 * @param answer the player's answer to evaluate
 * 
 * @returns an object containing the feedback and score awarded
 */
export function evaluateAnswer(
  state: GameState,
  answer: Answer
){
  const question = state.currentQuestion
  // Safety check to ensure there is a question to evaluate
  if(!question) {
    throw new Error("No current question to evaluate")
  }

  let feedback;

  // Determine feedback based on the player's answer
  if(answer === question.correctAnswer){
    feedback = "CORRECT"
  } else if (answer === "TIME-OUT"){
    feedback = "TIME-OUT"
  } else {
    feedback = "INCORRECT"
  }

  // Calculate score increment based on question difficulty and time left
  const scoreAwarded = calculateScoreIncrement(
    question.difficulty,
    state.timeLeft
  )

  return {
    feedback,
    scoreAwarded,
  }
}


