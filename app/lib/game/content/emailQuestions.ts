import { BaseQuestion, QuestionType } from "./baseQuestion"

export interface EmailQuestion extends BaseQuestion {
  id: string
  type: "email"
  email: {
    from: string
    to: string
    subject: string
    imageURL?: string
    body?: string
    link?: string
    footer?: string
    buttonText?: string
  }
}

export const emailQuestions: EmailQuestion[] = [
  {
    id: "email_ups_scam",
    type: "email",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    email: {
      from: "account-ups-noreply@upss.com",
      to: "user@email.com",
      subject: "REWARD",
      imageURL: "/images/questions/scam/email-ups.png"
    },
  },
  {
    id: "email_aaa_scam",
    type: "email",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    email: {
      from: "account-aaa-noreply@aaaa.com",
      to: "user@email.com",
      subject: "SURVEY",
      imageURL: "/images/questions/scam/email-aaa.png"
    },
  },
  {
    id: "email_netflix_scam",
    type: "email",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    email: {
      from: "account-netflix-noreply@netf1ix.com",
      to: "user@email.com",
      subject: "Payment Failure",
      imageURL: "/images/questions/scam/email-netflix.png"
    },
  },
  {
    id: "email_paypal_scam",
    type: "email",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    email: {
      from: "paypal-noreply@paypal.com",
      to: "user@email.com",
      subject: "REWARD",
      imageURL: "/images/questions/scam/email-paypal.jpg"
    },
  },
  {
    id: "email_microsoft_scam",
    type: "email",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    email: {
      from: "disney-official@hotmail.com",
      to: "user@email.com",
      subject: "Unusual Sign-In Activity",
      imageURL: "/images/questions/scam/email-microsoft.jpg"
    },
  },
  {
    id: "email_disney_scam",
    type: "email",
    difficulty: "medium",
    isScam: true,
    correctAnswer: "SCAM",
    email: {
      from: "disney-official@hotmail.com",
      to: "user@email.com",
      subject: "Congratulations! You've won a Disney prize!",
      imageURL: "/images/questions/scam/email-disney.jpg"
    },
  },
];
