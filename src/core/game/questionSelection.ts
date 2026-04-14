import { emailQuestions } from "./questions/emailQuestions"
import { websiteQuestions } from "./questions/websiteQuestions"
import { messageQuestions } from "./questions/messageQuestions"
import {  Difficulty, BaseQuestion } from "./questions/baseQuestion"

// Combine all question types into a single master pool
const ALL_QUESTIONS = [
  ...emailQuestions,
  ...websiteQuestions,
  ...messageQuestions
]

// Helper function split master pool into groups by difficulty
function getAvailableQuestions(difficulty: Difficulty) {

  const questionsByDifficulty = ALL_QUESTIONS.filter(question => question.difficulty === difficulty)

  return questionsByDifficulty
}

/**
 * Return a randomised subset of questions from a provided pool
 * Uses a sort-based shuffle and ensures the slice does not exceed pool length
 * @param pool Array of questions to sample from
 * @param count Number of questions to retrieve
 * @returns the correct number of a random selection of questions of a given difficulty
 */
function getRandomSubset(pool: BaseQuestion[], count: number): BaseQuestion[] {
  // Shuffle the array
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, pool.length));
}

/**
 * Generates a full set of questions for a game session
 * @param totalQuestions the total number of questions requested
 * @returns an array of unique BaseQuestion objects
 */
export function generateQuestionSet(totalQuestions: number): BaseQuestion[] {
  // Calculate equal split for three difficulty levels
  const numQuestionsPerDifficulty = Math.floor(totalQuestions / 3)

  // Final array to hold the selected questions
  const questions: BaseQuestion[] = []

  // Filter pools by difficulty
  const easyQuestions = getAvailableQuestions("easy")
  const mediumQuestions = getAvailableQuestions("medium")
  const hardQuestions = getAvailableQuestions("hard")

  // Select random subsets for each tier and add to the final array
  questions.push(...getRandomSubset(easyQuestions, numQuestionsPerDifficulty))
  questions.push(...getRandomSubset(mediumQuestions, numQuestionsPerDifficulty))
  questions.push(...getRandomSubset(hardQuestions, numQuestionsPerDifficulty))

  // Handle remainder question slots if total number of questions is not divisible by 3
  const usedIds = new Set(questions.map(q => q.id));

  // Calculate if there are empty slots
  let remaining = totalQuestions - questions.length;
  
  if (remaining > 0) {
    // Filter master pool to exclude questions already selected
    const extraPool = ALL_QUESTIONS.filter(q => !usedIds.has(q.id));
    questions.push(...getRandomSubset(extraPool, remaining));
  }

  return questions
}
