// core/game/scoring.ts
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

export function calculateScoreIncrement(
  difficulty: "easy" | "medium" | "hard",
  timeLeft: number,
): number {
  const baseScore = {
    easy: 10,
    medium: 20,
    hard: 30,
  }[difficulty]

  const speedBonus = Math.floor((timeLeft / GAME_CONFIG.TIME_LIMIT) * 10)

  return baseScore + speedBonus
}
