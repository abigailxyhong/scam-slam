import { BaseQuestion, QuestionType, Difficulty, Answer } from "./baseQuestion"

export interface WebsiteQuestion extends BaseQuestion{
  id: string
  type: "website"
  difficulty: Difficulty
  isScam: boolean
  correctAnswer: Answer
  site: {
    url: string
    title: string
    body: string
    ctaText?: string
    footer?: string
    isSecure: boolean
  };
}

export const websiteQuestions: WebsiteQuestion[] = [
  {
    id: "site_bank_scam_1",
    type: "website",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    site: {
      url: "http://secure-yourbank-login.com",
      title: "YourBank – Account Verification Required",
      body: `We detected unusual activity on your account.

To continue using online banking, please verify your identity immediately.`,
      ctaText: "Verify Account",
      isSecure: false,
      footer: "© 2024 YourBank Security Team",
    },
  },

  {
    id: "site_gov_legit_1",
    type: "website",
    difficulty: "easy",
    isScam: false,
    correctAnswer: "SAFE",
    site: {
      url: "https://www.gov.uk/check-driving-licence",
      title: "Check your driving licence information",
      body: `Use this service to view your driving licence record.

You can see which vehicles you can drive and any penalty points you may have.`,
      isSecure: true,
      footer: "© Crown copyright",
    },
  },
];
