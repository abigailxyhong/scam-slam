export type Answer = "SAFE" | "SCAM" | "TIME-OUT"

export type Difficulty = 
    | "easy"
    | "medium"
    | "hard"

export type QuestionType =
    | "email"
    | "message"
    | "call"
    | "website"

export interface BaseQuestion {
    id: string
    type: QuestionType
    isScam: boolean
    content: {
        imageURL?: string
    }
    correctAnswer: Answer
    difficulty: Difficulty
    infoWhy: string
    infoHow?: string
    infoMore?: string
}

