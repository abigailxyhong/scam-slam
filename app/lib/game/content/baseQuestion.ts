export type Answer = "SAFE" | "SCAM" | "TIME-OUT"

export type Difficulty = 
    | "easy"
    | "medium"
    | "hard"
    | "very hard"

export type QuestionType =
    | "email"
    | "message"
    | "call"
    | "website"

export interface BaseQuestion {
    id: string
    type: QuestionType
    isScam: boolean
    imageURL?: string
    correctAnswer: Answer
    difficulty: Difficulty
}

