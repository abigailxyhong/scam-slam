import { BaseQuestion, QuestionType } from "./baseQuestion"

export interface EmailQuestion extends BaseQuestion{
    id: string
    type: "email"
    email: {
        from: string
        to: string
        subject: string
        body: string
        link?: string
        footer?: string
    }
}

export const emailQuestions: EmailQuestion[] = [
  {
    id: "email_apple_scam_1",
    type: "email",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    email: {
      from: "Apple Support <security@apple-id-alerts.com>",
      to: "user@email.com",
      subject: "Your Apple ID has been suspended",
      body: 
      `Dear Customer,

            We detected suspicious activity on your account.
            Please verify your details immediately to avoid permanent suspension.
            Click the link below to secure your account.

      Sincerely,
      Apple Inc.`,
      link: "https://secure-apple-id.com/login",
    },
  },
  {
    id: "email_bank_legit_1",
    type: "email",
    difficulty: "easy",
    isScam: false,
    correctAnswer: "SAFE",
    email: {
      from: "Your Bank <no-reply@yourbank.co.uk>",
      to: "user@email.com",
      subject: "Monthly Statement Available",
      body: `Your monthly bank statement is now available.

Please log in to your online banking account to view it.`,
    },
  },
];
