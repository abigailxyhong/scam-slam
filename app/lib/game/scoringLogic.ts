import { QuestionType } from "./content/baseQuestion";

export function calculateScore(
  isCorrect: boolean,
  timeLeft: number
): number {
  if (!isCorrect) return 0;
  return 100 + timeLeft * 5;
}

export function updateAccuracyStats(
  stats: Record<QuestionType, { correct: number; incorrect: number }>,
  type: QuestionType,
  isCorrect: boolean
) {
  const current = stats[type];
  return {
    ...stats,
    [type]: {
      correct: current.correct + (isCorrect ? 1 : 0),
      incorrect: current.incorrect + (isCorrect ? 0 : 1),
    },
  };
}
