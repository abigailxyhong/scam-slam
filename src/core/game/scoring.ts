// core/game/scoring.ts

export function calculateScoreIncrement(
  difficulty: "easy" | "medium" | "hard",
  timeLeft: number,
  timeLimit: number
): number {
  const baseScore = {
    easy: 10,
    medium: 20,
    hard: 30,
  }[difficulty]

  const speedBonus = Math.floor((timeLeft / timeLimit) * 10)

  return baseScore + speedBonus
}
