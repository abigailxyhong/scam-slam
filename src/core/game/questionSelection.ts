import { emailQuestions } from "./questions/emailQuestions";
import { websiteQuestions } from "./questions/websiteQuestions";
import { messageQuestions } from "./questions/messageQuestions";
import {  Difficulty, BaseQuestion } from "./questions/baseQuestion";

const ALL_QUESTIONS = [
  ...emailQuestions,
  ...websiteQuestions,
  ...messageQuestions
]

function getAvailableQuestions(difficulty: Difficulty) {

  const questionsByDifficulty = ALL_QUESTIONS.filter(question => question.difficulty === difficulty)

  return questionsByDifficulty
}

function getRandomSubset(pool: BaseQuestion[], count: number): BaseQuestion[] {
  // Fisher-Yates shuffle or a simple sort-shuffle
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, pool.length));
}

export function generateQuestionSet(totalQuestions: number): BaseQuestion[] {
  // Number of questions per difficulty level
  const numQuestionsPerDifficulty = Math.floor(totalQuestions / 3)

  // Final array to hold the selected questions
  const questions: BaseQuestion[] = []

  const easyQuestions = getAvailableQuestions("easy")
  const mediumQuestions = getAvailableQuestions("medium")
  const hardQuestions = getAvailableQuestions("hard")

  questions.push(...getRandomSubset(easyQuestions, numQuestionsPerDifficulty))
  questions.push(...getRandomSubset(mediumQuestions, numQuestionsPerDifficulty))
  questions.push(...getRandomSubset(hardQuestions, numQuestionsPerDifficulty))

  const usedIds = new Set(questions.map(q => q.id));
  let remaining = totalQuestions - questions.length;
  
  if (remaining > 0) {
    const extraPool = ALL_QUESTIONS.filter(q => !usedIds.has(q.id));
    questions.push(...getRandomSubset(extraPool, remaining));
  }

  return questions;

  return questions
}
