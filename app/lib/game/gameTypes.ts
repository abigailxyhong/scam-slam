export type Answer = "SAFE" | "SCAM"

export type QuestionType =
    | "email"
    | "text"
    | "call"
    | "website"

export interface Question {
    id: string
    type: QuestionType
    prompt: string
    imageURL: string
    correctAnswer: Answer
}

