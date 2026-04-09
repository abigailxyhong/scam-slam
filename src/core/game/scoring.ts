import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

export function calculateScoreIncrement(
  difficulty: "easy" | "medium" | "hard",
  timeLeft: number,
): number {
  const baseScore = {
    easy: 50,
    medium: 100,
    hard: 150,
  }[difficulty]

  const speedBonus = Math.floor((timeLeft / GAME_CONFIG.TIME_LIMIT) * 10)

  return baseScore + speedBonus
}
