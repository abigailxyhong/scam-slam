import { emailQuestions, EmailQuestion } from "../content/emailQuestions"
import { websiteQuestions, WebsiteQuestion } from "../content/websiteQuestions"
import { messageQuestions, MessageQuestion } from "../content/messageQuestions";
import { QuestionType, Difficulty, BaseQuestion } from "../content/baseQuestion"

export function generateQuestionSet(totalQuestions: number): BaseQuestion[] {
  const questionsPerDifficulty = Math.floor(totalQuestions / 3);
  const questions: BaseQuestion[] = [];
  const usedIds = new Set<string>();
  const QUESTION_TYPES: QuestionType[] = [
  "email",
  // "phone",
  "website",
  "message",
];

  // Helper: get unique random questions
  function getRandomUnique<T extends BaseQuestion>(pool: T[], count: number): T[] {
    const available = pool.filter(q => !usedIds.has(q.id));
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);

    selected.forEach(q => usedIds.add(q.id));
    return selected;
  }

  const difficulties: Difficulty[] = ["easy", "medium", "hard"];

  // Main selection loop
  difficulties.forEach((difficulty) => {
    const questionsPerType = Math.floor(questionsPerDifficulty / QUESTION_TYPES.length);

    QUESTION_TYPES.forEach((type) => {
      let pool: BaseQuestion[] = [];

      switch (type) {
        case "email":
          pool = emailQuestions.filter(q => q.difficulty === difficulty);
          break;
        case "website":
          pool = websiteQuestions.filter(q => q.difficulty === difficulty);
          break;
        case "message":
          pool = messageQuestions.filter(q => q.difficulty === difficulty);
          break;
      }

      const selected = getRandomUnique(pool, questionsPerType);
      questions.push(...selected);
    });
  });

  // Fill remaining slots without duplicates
  while (questions.length < totalQuestions) {
    for (const difficulty of difficulties) {
      for (const type of QUESTION_TYPES) {
        let pool: BaseQuestion[] = [];

        switch (type) {
          case "email": pool = emailQuestions; break;
          case "website": pool = websiteQuestions; break;
          case "message": pool = messageQuestions; break;
        }

        const filtered = pool.filter(
          q => q.difficulty === difficulty && !usedIds.has(q.id)
        );

        if (filtered.length > 0) {
          const random = filtered[Math.floor(Math.random() * filtered.length)];
          usedIds.add(random.id);
          questions.push(random);

          if (questions.length >= totalQuestions) break;
        }
      }
      if (questions.length >= totalQuestions) break;
    }
  }

  return questions;
}
