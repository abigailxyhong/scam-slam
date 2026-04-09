import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

/**
 * Computes how many points a player earns for a correct answer
 * 
 * Score is based on two parts:
 * - a base scored determined by difficulty
 * - a speed bonus that rewards faster answers
 * 
 * @param difficulty the difficult level of the question (easy, medium, hard)
 * @param timeLeft the time left when the answer is submitted
 * @returns the score increment for the correct answer
 */
export function calculateScoreIncrement(
  difficulty: "easy" | "medium" | "hard",
  timeLeft: number,
): number {

  // Base scored by difficulty level
  const baseScore = {
    easy: 50,
    medium: 100,
    hard: 150,
  }[difficulty]

  /**
   * Spped bonus:
   * - proportional to the percentage of time remaining
   * - capped at 10 points for answering immediateky
   * - rounded down to nearest whole number
   */
  const speedBonus = Math.floor((timeLeft / GAME_CONFIG.TIME_LIMIT) * 10)

  // Total score for the answer
  return baseScore + speedBonus
}
