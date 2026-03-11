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
    infoHow?: string;
    infoMore?: string;  
    tooltip?: string;
}

export const websiteQuestions: WebsiteQuestion[] = [
    
    {
        id: "site_bbc_safe",
        type: "website",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-bbc.png",
            width: 800,
            height: 400,
        },
        infoWhy: "This is a legitimate website, as indicated by the familiar BBC logo and design. The URL is also a key indicator of legitimacy, ending in .co.uk for the BBC.",
        //infoHow: "Check the URL carefully - legitimate sites will have a correct domain name (e.g., bbc.co.uk) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",
        tooltip: "https://www.bbc.co.uk/news",
    },

    {
        id: "site_nhs_safe",
        type: "website",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-nhs.png",
            width: 850,
            height: 450,
        },
        infoWhy: "This is a legitimate website, as indicated by the familiar NHS logo and design. The URL is also a key indicator of legitimacy, ending in .nhs.uk for the NHS.",
        //infoHow: "Check the URL carefully - legitimate sites will have a correct domain name (e.g., nhs.uk) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",
        tooltip: "https://www.nhs.uk",
    },

    {
        id: "site_gov_safe",
        type: "website",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-gov.png",
            width: 800,
            height: 400,
        },
        infoWhy: "This is a legitimate website, as indicated by the familiar UK government logo and design. The URL is also a key indicator of legitimacy, ending in .gov.uk for UK government sites.",
        tooltip: "https://www.gov.uk/log-in-register-hmrc-online-services",
        //infoHow: "Check the URL carefully - legitimate sites will have a correct domain name (e.g., gov.uk) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",
    },

    {
        id: "site_findmassmoney_safe",
        type: "website",
        difficulty: "medium",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-findmassmoney.png",
            width: 850,
            height: 450,
        },
        infoWhy: "This one can be tricky, as typically a site with a big focus on money might raise suspicion. However, this is a legitimate website run by the Massachusetts government to help residents find unclaimed money. The URL ending in .gov is a strong indicator of legitimacy.",
        tooltip: "https://www.findmassmoney.gov/",
        //infoHow: "Check the URL carefully - legitimate sites will have a correct domain name (e.g., mass.gov) and often use HTTPS.\nLook for familiar branding and design elements, but don't rely solely on them as scammers can copy these.\nCheck for contact information and verify it through official channels if in doubt.",
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
        infoWhy: "This is a fake website designed to look like Google's homepage. The URL is a key indicator of the scam, as it does not end in .com and contains extra words (e.g., google-secure-login.com).",
        tooltip: "http://accounts.google.com.security-check-login.verify-user-auth.co/login",
        infoHow: "Check the URL carefully - http is not a secure protocol (look for https),  and although 'accounts.google.com' is a subdomain of google.com, the actual domain is 'verify-user-auth.co', which is cheap, generic, and unconnected to Google.",
    },
  {
        id: "site_fundraiser_scam",
        type: "website",
        difficulty: "hard",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            imageURL: "/images/questions/scam/website-verdant-charity.png",
            width: 850,
            height: 450,
        },
        infoWhy: "This is an extremely sophisticated scam website designed to look like a legitimate charity. The URL is a key indicator of the scam, as it does not end in .org and contains extra words (e.g., verdant-charity.com).",
        infoHow: "Check the URL carefully - For charities, you can also check their legitimacy through charity watchdog websites.",
        tooltip: "https://verdant-relief-trust[.]com/support",
    
    }
];
