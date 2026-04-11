export type Answer = "SAFE" | "SCAM" | "TIME-OUT"

export type Difficulty = 
    | "easy"
    | "medium"
    | "hard"

export type QuestionType =
    | "email"
    | "message"
    | "website"

// Base structure for all question types in the game
export interface BaseQuestion {
    id: string
    type: QuestionType
    isScam: boolean
    content: {
        imageURL?: string
    }
    correctAnswer: Answer
    difficulty: Difficulty
    infoWhy: string // Explanation of why the correct answer is what it is
    infoHow?: string // Optional deeper explanation of how the scam works
    infoMore?: string // Optional additional safety tips or guidance
}

