import { Answer, BaseQuestion, Difficulty } from "./baseQuestion";

export interface MessageQuestion extends BaseQuestion{
  id: string;
  type: "message";
  difficulty: Difficulty;
  isScam: boolean;
  correctAnswer: Answer
  message: {
    sender: string;
    message: string;
    timestamp?: string;
    ctaText?: string;
  };
}

export const messageQuestions: MessageQuestion[] = [
  {
    id: "sms_delivery_scam_1",
    type: "message",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    message: {
      sender: "Royal Mail",
      message: `We were unable to deliver your parcel.

Please confirm your delivery details to avoid return.`,
      ctaText: "Confirm Delivery",
      timestamp: "09:14",
    },
  },

  {
    id: "sms_bank_legit_1",
    type: "message",
    difficulty: "easy",
    isScam: false,
    correctAnswer: "SAFE",
    message: {
      sender: "YourBank",
      message: `Your payment of £45.20 has been completed successfully.

If you did not make this payment, contact us immediately.`,
      timestamp: "16:42",
    },
  },
];
