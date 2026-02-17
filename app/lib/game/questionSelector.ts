import { emailQuestions, EmailQuestion } from "./content/emailQuestions"
import { websiteQuestions, WebsiteQuestion } from "./content/websiteQuestions"
import { messageQuestions, MessageQuestion } from "./content/messageQuestions";
import { QuestionType, Difficulty } from "./content/baseQuestion"

/**
 * Utility: get a random item from an array
 */
function getRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Map level number to difficulty
 */
export function getDifficultyFromLevel(level: number): Difficulty {
  if (level <= 3) return "easy";
  if (level <= 6) return "medium";
  if (level <= 9) return "hard";
  return "very hard";
}

/**
 * Available question types
 * (Add new types here when implemented)
 */
const QUESTION_TYPES: QuestionType[] = [
  "email",
  // "phone",
  "website",
  "message",
];

/**
 * Randomly select a question type
 */
export function selectQuestionType(): QuestionType {
  return getRandomItem(QUESTION_TYPES);
}

/**
 * Select a random EMAIL question by difficulty
 */
function selectEmailQuestion(difficulty: Difficulty): EmailQuestion {
  const filtered = emailQuestions.filter(
    (q) => q.difficulty === difficulty
  );

  if (filtered.length === 0) {
    throw new Error(`No email questions found for difficulty: ${difficulty}`);
  }

  return getRandomItem(filtered);
}

function selectWebsiteQuestion(difficulty: Difficulty): WebsiteQuestion {
  const filtered = websiteQuestions.filter(
    (q) => q.difficulty === difficulty
  );

  return filtered[Math.floor(Math.random() * filtered.length)];
}

function selectMessageQuestion(difficulty: Difficulty): MessageQuestion {
  const filtered = messageQuestions.filter(
    (q) => q.difficulty === difficulty
  );

  return filtered[Math.floor(Math.random() * filtered.length)];
}

/**
 * Main selector used by page.tsx
 */
export function selectQuestion(level: number) {
  const difficulty = getDifficultyFromLevel(level);
  const questionType = selectQuestionType();

  switch (questionType) {
    case "email":
      return {
        questionType,
        difficulty,
        question: selectEmailQuestion(difficulty),
      };

    // case "phone":
    //   return {
    //     questionType,
    //     difficulty,
    //     question: selectPhoneQuestion(difficulty),
    //   };

    case "website":
       return {
         questionType,
         difficulty,
         question: selectWebsiteQuestion(difficulty),
       };

    case "message":
       return {
         questionType,
         difficulty,
         question: selectMessageQuestion(difficulty),
       };

    default:
      throw new Error("Unsupported question type");
  }
}
