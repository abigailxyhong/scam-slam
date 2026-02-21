import { BaseQuestion } from "./content/baseQuestion";
import { emailQuestions } from "./content/emailQuestions";

export function shuffleQuestions(questions: BaseQuestion[]): BaseQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5);
}

export function getCurrentQuestion(
  questions: BaseQuestion[],
  index: number
): BaseQuestion | null {
  return questions[index] ?? null;
}

export function getRandomEmailQuestion(
  difficulty: "easy" | "medium" | "hard",
  usedIds: string[] = []
) {
  const pool = emailQuestions.filter(
    q => q.difficulty === difficulty && !usedIds.includes(q.id)
  );

  if (pool.length === 0) return null;

  return pool[Math.floor(Math.random() * pool.length)];
}
