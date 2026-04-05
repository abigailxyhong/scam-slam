import { Answer, BaseQuestion } from "./questions/baseQuestion"
import { calculateScoreIncrement } from "./scoring"
import { GameState } from "@/src/state/gameState"
import { generateQuestionSet } from "./questionSelection"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

export function selectQuestions(){
  let questions: BaseQuestion[] = [];
  questions = generateQuestionSet(GAME_CONFIG.MAX_QUESTIONS)
  return questions
}

export function evaluateAnswer(
  state: GameState,
  answer: Answer
){
  const question = state.currentQuestion
  if(!question) {
    throw new Error("No current question to evaluate")
  }

  let feedback;

  if(answer === question.correctAnswer){
    feedback = "CORRECT"
  } else if (answer === "TIME-OUT"){
    feedback = "TIME-OUT"
  } else {
    feedback = "INCORRECT"
  }

  const scoreAwarded = calculateScoreIncrement(
    question.difficulty,
    state.timeLeft
  )

  return {
    feedback,
    scoreAwarded,
  }
}


