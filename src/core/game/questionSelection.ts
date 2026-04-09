import { emailQuestions } from "./questions/emailQuestions";
import { websiteQuestions } from "./questions/websiteQuestions";
import { messageQuestions } from "./questions/messageQuestions";
import { QuestionType, Difficulty, BaseQuestion } from "./questions/baseQuestion";

/**
 * Generates a set of questions for the game session
 * 
 * The selection process ensures:
 * - A balanced mix of difficulties (easy, medium, hard)
 * - A balanced mix of question types (email, website, message)
 * - No duplicate questions within a session
 * - Randomised ordering within each category
 * 
 * If the exact distribution cannot be met, the function fills 
 * remaining slots with unused questions of matching difficulty
 * 
 * @param totalQuestions the total number of questions to generate
 * @returns an array of BaseQuestion objects for the game session
 */
export function generateQuestionSet(totalQuestions: number): BaseQuestion[] {
  // Number of questions per difficulty level
  const questionsPerDifficulty = Math.floor(totalQuestions / 3);
  
  // Final array to hold the selected questions
  const questions: BaseQuestion[] = [];
  
  // Tracks used question IDs to prevent duplicates
  const usedIds = new Set<string>();
  
  // All supported question types
  const QUESTION_TYPES: QuestionType[] = [
  "email",
  "website",
  "message",
];

  /**
   * Helper function:
   * - Selects a random subset of unique questions from a given pool
   * - Ensure no duplicates by checking against usedIds
   * @param pool the array of questions to select from
   * @param count the number of questions to select
   * @returns an array of selected unique questions
   */
  function getRandomUnique<T extends BaseQuestion>(pool: T[], count: number): T[] {
    const available = pool.filter(q => !usedIds.has(q.id));
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);

    selected.forEach(q => usedIds.add(q.id));
    return selected;
  }

  const difficulties: Difficulty[] = ["easy", "medium", "hard"];

  /**
   * Main selection loop:
   * - Iterates through each difficulty level
   * - For each difficulty, iterates through each question type
   * - Selects a set number of questions for that category
   */
  difficulties.forEach((difficulty) => {
    const questionsPerType = Math.floor(questionsPerDifficulty / QUESTION_TYPES.length);

    QUESTION_TYPES.forEach((type) => {
      let pool: BaseQuestion[] = [];

      // Select the appropriate question pool based on type
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

      // Randomly select unique questions from the filtered pool
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

        // Filter unused questions of the correct difficulty
        const filtered = pool.filter(
          q => q.difficulty === difficulty && !usedIds.has(q.id)
        );

        if (filtered.length > 0) {
          // Pick one random unused question
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
