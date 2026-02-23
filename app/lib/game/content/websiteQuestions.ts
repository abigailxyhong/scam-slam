import { BaseQuestion, QuestionType, Difficulty, Answer } from "./baseQuestion"

export interface WebsiteQuestion extends BaseQuestion {
    id: string
    type: "website"
    difficulty: Difficulty
    isScam: boolean
    correctAnswer: Answer
    content: {
        url?: string
        title?: string
        body?: string
        ctaText?: string
        footer?: string
        isSecure?: boolean
        imageURL: string
        width?: number
        height?: number
    };
    infoWhy: string;
    infoHow: string;
    infoMore?: string;  
}

export const websiteQuestions: WebsiteQuestion[] = [
    //   {
    //     id: "site_bank_scam_1",
    //     type: "website",
    //     difficulty: "easy",
    //     isScam: true,
    //     correctAnswer: "SCAM",
    //     site: {
    //       url: "http://secure-yourbank-login.com",
    //       title: "YourBank – Account Verification Required",
    //       body: `We detected unusual activity on your account.

    // To continue using online banking, please verify your identity immediately.`,
    //       ctaText: "Verify Account",
    //       isSecure: false,
    //       footer: "© 2024 YourBank Security Team",
    //     },
    //   },

    //   {
    //     id: "site_gov_legit_1",
    //     type: "website",
    //     difficulty: "easy",
    //     isScam: false,
    //     correctAnswer: "SAFE",
    //     site: {
    //       url: "https://www.gov.uk/check-driving-licence",
    //       title: "Check your driving licence information",
    //       body: `Use this service to view your driving licence record.

    // You can see which vehicles you can drive and any penalty points you may have.`,
    //       isSecure: true,
    //       footer: "© Crown copyright",
    //     },
    //   },

    {
        id: "site_bbc_safe",
        type: "website",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-bbc.png",
            width: 700,
            height: 300,
        },
        infoWhy: "SAFE! - This is a legitimate website, as indicated by the familiar BBC logo and design. The URL is also a key indicator of legitimacy, ending in .co.uk for the BBC.",
        infoHow: "HOW TO TELL:\nCheck the URL carefully - legitimate sites will have a correct domain name (e.g., bbc.co.uk) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",

    },

    {
        id: "site_nhs_safe",
        type: "website",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-nhs.png",
            width: 700,
            height: 300,
        },
        infoWhy: "SAFE! - This is a legitimate website, as indicated by the familiar NHS logo and design. The URL is also a key indicator of legitimacy, ending in .nhs.uk for the NHS.",
        infoHow: "HOW TO TELL:\nCheck the URL carefully - legitimate sites will have a correct domain name (e.g., nhs.uk) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",
    },

    {
        id: "site_gov_safe",
        type: "website",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-gov.png",
            width: 700,
            height: 300,
        },
        infoWhy: "SAFE! - This is a legitimate website, as indicated by the familiar UK government logo and design. The URL is also a key indicator of legitimacy, ending in .gov.uk for UK government sites.",
        infoHow: "HOW TO TELL:\nCheck the URL carefully - legitimate sites will have a correct domain name (e.g., gov.uk) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",
    },

    {
        id: "site_findmassmoney_safe",
        type: "website",
        difficulty: "medium",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-findmassmoney.png",
            width: 700,
            height: 300,
        },
        infoWhy: "SAFE! - This one can be tricky, as typically a site with a big focus on money might raise suspicion. However, this is a legitimate website run by the Massachusetts government to help residents find unclaimed money. The URL ending in .gov is a strong indicator of legitimacy.",
        infoHow: "HOW TO TELL:\nCheck the URL carefully - legitimate sites will have a correct domain name (e.g., mass.gov) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",
    },

    {
        id: "site_google_scam",
        type: "website",
        difficulty: "hard",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            imageURL: "/images/questions/scam/website-google.png",
            width: 600,
            height: 200,
        },
        infoWhy: "SCAM! - This is a fake website designed to look like Google's homepage. The URL is a key indicator of the scam, as it does not end in .com and contains extra words (e.g., google-secure-login.com).",
        infoHow: "HOW TO TELL:\nCheck the URL carefully - legitimate sites will have a correct domain name (e.g., google.com) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",
    },
  {
        id: "site_fundraiser_scam",
        type: "website",
        difficulty: "hard",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            imageURL: "/images/questions/scam/website-verdant-charity.png",
            width: 700,
            height: 300,
        },
        infoWhy: "SCAM! - This is an extremely sophisticated scam website designed to look like a legitimate charity. The URL is a key indicator of the scam, as it does not end in .org and contains extra words (e.g., verdant-charity.com).",
        infoHow: "HOW TO TELL:\nCheck the URL carefully - legitimate sites will have a correct domain name (e.g., verdantcharity.org) and often use HTTPS.\nCheck for contact information and verify it through official channels if in doubt.\nFor charities, you can also check their legitimacy through charity watchdog websites.",
    }
];
