import { Question } from "./gameTypes";

export function shuffleQuestions(questions: Question[]): Question[] {
  return [...questions].sort(() => Math.random() - 0.5);
}

export function getCurrentQuestion(
  questions: Question[],
  index: number
): Question | null {
  return questions[index] ?? null;
}
