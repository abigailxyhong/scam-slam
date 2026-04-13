import { Answer, BaseQuestion, Difficulty } from "./baseQuestion";

// Extends the shared BaseQuestion structure with fields specific to website questions
export interface WebsiteQuestion extends BaseQuestion {

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
    tooltip?: string;
}

/**
 * A collection of website questions for the game
 * Each entry includes:
 * - metadata
 * - website content
 * - feedback explanations
 * - URL for players to inspect in-game with hover overlay
 */
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
        indicators: "This is a legitimate website, as indicated by the familiar BBC logo and design. The URL is also a key indicator of legitimacy, ending in .co.uk for the BBC.",
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
        indicators: "This is a legitimate website, as indicated by the familiar NHS logo and design. The URL is also a key indicator of legitimacy, ending in .nhs.uk for the NHS.",
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
        indicators: "This is a legitimate website, as indicated by the familiar UK government logo and design. The URL is also a key indicator of legitimacy, ending in .gov.uk for UK government sites.",
        tooltip: "https://www.gov.uk/log-in-register-hmrc-online-services",
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
        indicators: "This one can be tricky, as typically a site with a big focus on money might raise suspicion. However, this is a legitimate website run by the Massachusetts government to help residents find unclaimed money. The URL ending in .gov is a strong indicator of legitimacy.",
        tooltip: "https://www.findmassmoney.gov/",
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
        indicators: "This is a fake website designed to look like Google's homepage. The URL is a key indicator of the scam,http is not a secure protocol (look for https),  and although 'accounts.google.com' is a subdomain of google.com, it appears at the start of the URL. The actual domain is the end of the URL which is 'verify-user-auth.co'. This domain is cheap, generic, and unconnected to Google.",
        tooltip: "http://accounts.google.com.security-check-login.verify-user-auth.co/login",
        safetyTips: "If you suspect a website's legitimacy, look up recent scams related to the situation, or paste the URL into a website scam checker. Avoid clicking unknown links or giving personal information until you're absolutely sure that the website is safe.",
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
        indicators: "This is an extremely sophisticated scam website designed to look like a legitimate fundraising site. The URL is the most important scam indicator here, 'http' rather than 'https' means there's no website security. Be wary when the domain is shown just as an IP address (just numbers), as you have no way of knowing the real owner of the domain.",
        scamInfo: "This scam involves a fake fundraising website that fabricate 'donations' to campaigns, these 'donations' are unable to be withdrawn until the user buys 'points', 'badges', 'verification', etc. The goal is to make victims pay these fees, with no real payout ever happening.",
        safetyTips: "Search the platform's name with words like 'scam' and 'reviews' before you join. Try to use well-known fundraising platforms, and ask a trusted friend or family member to look at the site with you before paying any fee.",
        tooltip: "http://101.10.1.101", 
    }
];
