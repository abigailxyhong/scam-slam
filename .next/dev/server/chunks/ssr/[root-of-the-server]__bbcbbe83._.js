module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GAME_CONFIG",
    ()=>GAME_CONFIG
]);
const GAME_CONFIG = {
    TIME_LIMIT: 60,
    MAX_QUESTIONS: 6
};
}),
"[project]/git/scam-slam/src/state/gameReducer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gameReducer",
    ()=>gameReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-ssr] (ecmascript)");
;
function gameReducer(state, action) {
    switch(action.type){
        case "TOGGLE_BUZZERS":
            return {
                ...state,
                digitalBuzzersOn: !state.digitalBuzzersOn
            };
        case "SET_GAME_ID":
            return {
                ...state,
                gameId: action.payload
            };
        case "SET_QUESTIONS":
            return {
                ...state,
                questions: action.payload,
                currentQuestionIndex: 0,
                currentQuestion: action.payload[0]
            };
        case "SET_CURRENT_QUESTION":
            return {
                ...state,
                currentQuestion: action.payload
            };
        case "START_PLAY":
            return {
                ...state,
                status: "playing"
            };
        case "INCREMENT_SCORE":
            return {
                ...state,
                score: state.score + action.payload,
                status: "feedback",
                lastFeedback: "correct"
            };
        case "LOSE_LIFE":
            return {
                ...state,
                lives: state.lives - 1,
                status: "feedback",
                lastFeedback: "incorrect"
            };
        case "TIME_OUT":
            return {
                ...state,
                lives: state.lives - 1,
                status: "feedback",
                lastFeedback: "timeout"
            };
        /**
     * Determines whether the game should end or move to the next question.
     * Ends the game if:
     * - the player has no lives left, or
     * - there are no more questions.
     */ case "CHECK_GAME_COMPLETE":
            {
                const nextIndex = state.currentQuestionIndex + 1;
                const isLast = nextIndex >= state.questions.length || state.lives === 0;
                if (isLast) {
                    return {
                        ...state,
                        status: "completed"
                    };
                } else {
                    return {
                        ...state,
                        currentQuestionIndex: state.currentQuestionIndex + 1,
                        currentQuestion: state.questions[state.currentQuestionIndex],
                        status: "playing",
                        timeLeft: __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAME_CONFIG"].TIME_LIMIT,
                        lastFeedback: null
                    };
                }
            }
        /**
     * Moves to the next question after feedback.
     * Does nothing if already in "playing" mode.
     */ case "NEXT_QUESTION":
            {
                if (state.status === "playing") return state;
                return {
                    ...state,
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                    currentQuestion: state.questions[state.currentQuestionIndex],
                    status: "playing",
                    timeLeft: __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAME_CONFIG"].TIME_LIMIT,
                    lastFeedback: null
                };
            }
        /**
     * Decrements the timer once per second.
     * If time reaches zero, triggers a timeout.
     */ case "TICK":
            {
                if (state.timeLeft <= 1) {
                    return {
                        ...state,
                        timeLeft: 0,
                        lastFeedback: "timeout",
                        status: "feedback"
                    };
                }
                return {
                    ...state,
                    timeLeft: state.timeLeft - 1
                };
            }
        case "COMPLETE_GAME":
            return {
                ...state,
                status: "completed"
            };
        case "SET_STATE":
            {
                return action.payload;
            }
        default:
            return state;
    }
}
}),
"[project]/git/scam-slam/src/state/gameState.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialGameState",
    ()=>initialGameState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-ssr] (ecmascript)");
;
const initialGameState = {
    playerName: "",
    gameId: "",
    currentQuestionIndex: 0,
    currentQuestion: null,
    score: 0,
    lives: 3,
    timeLeft: __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAME_CONFIG"].TIME_LIMIT,
    questionsCorrect: 0,
    digitalBuzzersOn: false,
    questions: [],
    status: "intro",
    lastFeedback: null
};
}),
"[project]/git/scam-slam/src/core/game/scoring.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateScoreIncrement",
    ()=>calculateScoreIncrement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-ssr] (ecmascript)");
;
function calculateScoreIncrement(difficulty, timeLeft) {
    // Base scored by difficulty level
    const baseScore = {
        easy: 50,
        medium: 100,
        hard: 150
    }[difficulty];
    /**
   * Spped bonus:
   * - proportional to the percentage of time remaining
   * - capped at 10 points for answering immediateky
   * - rounded down to nearest whole number
   */ const speedBonus = Math.floor(timeLeft / __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAME_CONFIG"].TIME_LIMIT * 10);
    // Total score for the answer
    return baseScore + speedBonus;
}
}),
"[project]/git/scam-slam/src/core/game/questions/emailQuestions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emailQuestions",
    ()=>emailQuestions
]);
const emailQuestions = [
    {
        id: "email_ups_scam",
        type: "email",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            from: "account-ups-noreply@upss.com",
            to: "user@email.com",
            subject: "REWARD",
            imageURL: "/images/questions/scam/email-ups.png",
            width: 300,
            height: 200
        },
        indicators: "The timer countdown in this email is a big red flag, they are used to create panic and urgency and are a common scam tactic. ",
        scamInfo: "Clicking the link opens a brand-themed page offering a cash or gift reward if you take a short survey.\nAfter the survey, the site asks for your name, address, and a credit/debit card to pay a small fee or 'verify identity'.\nScammers may make unauthorized charges, enroll you in a subscription, or collect your personal details for future scams.",
        safetyTips: "Go directly to the carrier's website by typing it yourself (e.g., ups.com, dhl.com) or use the official app.\nDo not click links, scan QR codes, or call phone numbers in unexpected emails.\nDo not assume a logo or colours mean the site is real- check the web address carefully.",
        tooltipAddress: "account-ups-noreply@upss.com"
    },
    {
        id: "email_kfc_legit",
        type: "email",
        difficulty: "easy",
        isScam: false,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/email-kfc.png",
            width: 600,
            height: 300
        },
        indicators: "This is a legitimate email from KFC UK. Companies/ business' like KFC will often send promotional emails. The email contains typical promotional content without any urgent language or suspicious links.",
        tooltipAddress: "KFC@email.kfc.co.uk"
    },
    {
        id: "email_apple_legit",
        type: "email",
        difficulty: "medium",
        isScam: false,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/email-apple.png",
            width: 600,
            height: 300
        },
        indicators: "This is a legitimate email from Apple, notifiying the user of a new login. The language and tone used is professional with no attempts at creating urgency or using scare tactics.",
        tooltipAddress: "noreply@email.apple.com"
    },
    {
        id: "email_booking_legit",
        type: "email",
        difficulty: "easy",
        isScam: false,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/email-booking.png",
            width: 600,
            height: 300
        },
        indicators: "This is a legitimate email from Booking.com, presenting a discount offer. The language and tone used is professional with no attempts at creating urgency or using scare tactics.",
        tooltipAddress: "noreply@booking.com"
    },
    {
        id: "email_trainline_legit",
        type: "email",
        difficulty: "easy",
        isScam: false,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/email-trainline.png",
            width: 600,
            height: 300
        },
        indicators: "This is a legitimate email from Trainline, showing the user's their savings within the app. There are no suspicious elements or risky actions being promoted.",
        tooltipAddress: "noreply@comms.trainline.com"
    },
    {
        id: "email_aaa_scam",
        type: "email",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            from: "account-aaa-noreply@aaaa.com",
            to: "user@email.com",
            subject: "SURVEY",
            imageURL: "/images/questions/scam/email-aaa.png",
            width: 300,
            height: 200
        },
        indicators: "The email address is not an official AAA domain. Watch out for typos in the sender's email address. In this case, 'aaaa.com' rather than aaa.com.",
        scamInfo: "Uses the trusted AAA brand to lure victims into a fake free survey.\nSurvey link likely leads to phishing or data theft.\nSometimes, the site may try to download viruses or spyware.",
        safetyTips: "Check the sender's email address carefully to ensure it matches the company's official domain.\nGo directly to the company's website by typing it yourself (e.g., aaa.com)\nDo not click links, scan QR codes, or call phone numbers in unexpected emails.\nLook up recent scams related to the company if you're unsure.",
        tooltipAddress: "account-aaa-noreply@aaaa.com"
    },
    {
        id: "email_netflix_scam",
        type: "email",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            from: "account-netflix-noreply@netf1ix.com",
            to: "user@email.com",
            subject: "Payment Failure",
            imageURL: "/images/questions/scam/email-netflix.png",
            width: 200,
            height: 75
        },
        indicators: "Look out for unprofessional grammar like '!!' and general tone and look of the email.\nThere is also an important typo in the sender's email address - 'netf1ix.com' rather than 'netflix.com'.",
        scamInfo: "The email claims your payment failed and urges you to update your billing information via a link.\nThe link leads to a fake Netflix login page designed to steal your username and password.\nScammers can then access your account, view personal info, or use it for further scams.",
        safetyTips: "Always hover over links/buttons to see the actual URL before clicking. In this case, the big red button would point to storage.googleapis.com, not netflix.com.",
        tooltipAddress: "account-netflix-noreply@netf1ix.com"
    },
    {
        id: "email_paypal_scam",
        type: "email",
        difficulty: "medium",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            from: "paypal-noreply@paypa1.com",
            to: "user@email.com",
            subject: "REWARD",
            imageURL: "/images/questions/scam/email-paypal.jpg",
            width: 300,
            height: 200
        },
        indicators: "The email is designed to look like it's from PayPal, but there are subtle signs it's fake. The sender's email address is not an official PayPal domain, and the email contains generic greetings and urgent language, which are common tactics used by scammers to create a sense of urgency and trick recipients into clicking malicious links.",
        scamInfo: "The email uses a fake invoice for a product you never bought and urges you to call a number.\n When you call, the scammer pretends to help you fix it but needs remote access to your computer.\n They ask to log into your bank, then black out your screen and use developer tools to fake a large refund.\n They pressure you to 'return' the overpayment via gift cards, crypto, or wire.\n The refund never happened.",
        safetyTips: "Close the email and log in to PayPal directyl (don't use links in the message).\nDon't call numbers in unexpected emails.\nDon't install remote-access tools for strangers.\nDon't send money, gift cards, or crypto to 'return' funds.",
        tooltipAddress: "paypal-noreply@paypa1.com"
    },
    {
        id: "email_microsoft_scam",
        type: "email",
        difficulty: "medium",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            imageURL: "/images/questions/scam/email-microsoft.png",
            width: 800,
            height: 500
        },
        indicators: "Official Microsoft error and warning messages never include a phone number.\nLook out for clear signs of unprofessionalism like bad grammar.",
        scamInfo: "The email claims there was unusual sign-in activity and urges you to call a number for help.\nWhen you call, the scammer pretends to be Microsoft support and says they need remote access to your computer to fix the issue.\nThey ask you to log into your bank account, then black out your screen and use developer tools to fake a large refund.\nThey pressure you to 'return' the overpayment via gift cards, crypto, or wire transfer.\nThe refund never happened.",
        safetyTips: "Close the email and log in to Microsoft directly (don't use links in the message).\nDon't call numbers in unexpected emails.\nDon't install remote-access tools for strangers.\nDon't send money, gift cards, or crypto to 'return' funds.",
        tooltipAddress: "no-reply_msteam2@outlook.com>"
    },
    {
        id: "email_disney_scam",
        type: "email",
        difficulty: "medium",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            from: "disney-official@hotmail.com",
            to: "user@email.com",
            subject: "Congratulations! You've won a Disney prize!",
            imageURL: "/images/questions/scam/email-disney.png",
            width: 250,
            height: 150
        },
        indicators: "The email address is not an official Disney domain.\n Be aware of a large commercial organisation using a public email domain like Hotmail for official communication.\nAlways check the sender's email address carefully to ensure it matches the company's official domain.",
        scamInfo: "The email claims you've won a Disney prize and urges you to click a link to claim it.\nThe link leads to a fake Disney-themed survey designed to steal your personal information and may also try to download viruses or spyware.",
        safetyTips: "Go directly to the company's website by typing it yourself (e.g., disney.com)\nDo not click links, scan QR codes, or call phone numbers in unexpected emails.\nLook up recent scams related to the company if you're unsure.",
        tooltipAddress: "disney-official@hotmail.com"
    }
];
}),
"[project]/git/scam-slam/src/core/game/questions/websiteQuestions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "websiteQuestions",
    ()=>websiteQuestions
]);
const websiteQuestions = [
    {
        id: "site_bbc_safe",
        type: "website",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SAFE",
        content: {
            imageURL: "/images/questions/legit/website-bbc.png",
            width: 800,
            height: 400
        },
        indicators: "This is a legitimate website, as indicated by the familiar BBC logo and design. The URL is also a key indicator of legitimacy, ending in .co.uk for the BBC.",
        tooltip: "https://www.bbc.co.uk/news"
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
            height: 450
        },
        indicators: "This is a legitimate website, as indicated by the familiar NHS logo and design. The URL is also a key indicator of legitimacy, ending in .nhs.uk for the NHS.",
        tooltip: "https://www.nhs.uk"
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
            height: 400
        },
        indicators: "This is a legitimate website, as indicated by the familiar UK government logo and design. The URL is also a key indicator of legitimacy, ending in .gov.uk for UK government sites.",
        tooltip: "https://www.gov.uk/log-in-register-hmrc-online-services"
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
            height: 450
        },
        indicators: "This one can be tricky, as typically a site with a big focus on money might raise suspicion. However, this is a legitimate website run by the Massachusetts government to help residents find unclaimed money. The URL ending in .gov is a strong indicator of legitimacy.",
        tooltip: "https://www.findmassmoney.gov/"
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
            height: 200
        },
        indicators: "This is a fake website designed to look like Google's homepage. The URL is a key indicator of the scam,http is not a secure protocol (look for https),  and although 'accounts.google.com' is a subdomain of google.com, it appears at the start of the URL. The actual domain is the end of the URL which is 'verify-user-auth.co'. This domain is cheap, generic, and unconnected to Google.",
        tooltip: "http://accounts.google.com.security-check-login.verify-user-auth.co/login",
        safetyTips: "If you suspect a website's legitimacy, look up recent scams related to the situation, or paste the URL into a website scam checker. Avoid clicking unknown links or giving personal information until you're absolutely sure that the website is safe."
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
            height: 450
        },
        indicators: "This is an extremely sophisticated scam website designed to look like a legitimate fundraising site. The URL is the most important scam indicator here, 'http' rather than 'https' means there's no website security. Be wary when the domain is shown just as an IP address (just numbers), as you have no way of knowing the real owner of the domain.",
        scamInfo: "This scam involves a fake fundraising website that fabricate 'donations' to campaigns, these 'donations' are unable to be withdrawn until the user buys 'points', 'badges', 'verification', etc. The goal is to make victims pay these fees, with no real payout ever happening.",
        safetyTips: "Search the platform's name with words like 'scam' and 'reviews' before you join. Try to use well-known fundraising platforms, and ask a trusted friend or family member to look at the site with you before paying any fee.",
        tooltip: "http://101.10.1.101"
    }
];
}),
"[project]/git/scam-slam/src/core/game/questions/messageQuestions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messageQuestions",
    ()=>messageQuestions
]);
const messageQuestions = [
    // Easy
    {
        id: "message_speeding_scam",
        type: "message",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            imageURL: "/images/questions/scam/message-speeding.png",
            width: 400,
            height: 300
        },
        indicators: "A big indicator that this is a scam is the suspicious link in the message and unofficial phone number. The message uses scare tactics to create urgency, and is designed to trick you into clicking the link, which can lead to phishing sites or malware downloads.",
        scamInfo: "You receive a text message claiming to be from a law enforcement agency, stating that you've been caught speeding and need to pay a fine.\nThe message includes a link to view the 'ticket' or pay the fine.\nWhen you click the link, it may lead to a fake website that looks legitimate but is designed to steal your personal information or install malware on your device.",
        safetyTips: "Don't click on links in unexpected text messages, especially those claiming to be from law enforcement or government agencies.\nIf you receive such a message, go directly to the official website of the agency or contact them through official channels to verify the claim.\nBe cautious of messages that create a sense of urgency or pressure you to take immediate action."
    },
    {
        id: "message_pyramid_scheme",
        type: "message",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SCAM",
        content: {
            imageURL: "/images/questions/scam/message-pyramid-scheme.jpeg",
            width: 400,
            height: 300
        },
        indicators: "This is a classic example of a pyramid scheme, where the scammer tries to recruit you into a fake business opportunity that promises high returns for recruiting others.\nThe message may use persuasive language and testimonials to lure you in, but it's designed to benefit only those at the top of the pyramid, while most participants lose money.",
        scamInfo: "You receive a message from someone you know, inviting you to join a 'business opportunity' that promises high returns for recruiting others.\nThe message may include testimonials from people who claim to have made money, and it encourages you to recruit more people to earn commissions.\nAs more people join, the scammer at the top of the pyramid makes money, while most participants end up losing their investment.",
        safetyTips: "Be skeptical of any business opportunity that requires you to recruit others to earn money.\nResearch the company and the business model before getting involved.\nIf it sounds too good to be true, it probably is. Avoid schemes that promise high returns with little effort."
    },
    // Hard
    {
        id: "message_hsbc_safe_1",
        type: "message",
        difficulty: "hard",
        isScam: false,
        correctAnswer: "SAFE",
        content: {
            sender: "HSBC UK",
            customText: "To protect your HSBC account from fraud, we may have placed a temporary block on your card. Please respond to the next message from HSBC UK on +447537438061 which will ask you to confirm your recent transactions and guide you on next steps. Standard network charges apply.",
            timestamp: "11:24"
        },
        indicators: "This is an example of a legitimate fraud alert message from HSBC, provided on their official website. While it may look similar to a scam message, the key indicators of legitimacy include the use of the official bank name, a clear explanation of the situation, and instructions to wait for a follow-up message from a specific number. Always verify such messages by contacting your bank directly through official channels if you have any doubts."
    },
    {
        id: "message_hsbc_safe_2",
        type: "message",
        difficulty: "hard",
        isScam: false,
        correctAnswer: "SAFE",
        content: {
            sender: "HSBC UK",
            customText: "This is a fraud alert from HSBC. To protect our customers, we are carefully monitoring transactions for fraud. Shortly you will receive a message from +447860093059 with direction on how to respond. Please respond by 8pm (GMT) today, or your payment may be cancelled.",
            timestamp: "4:38"
        },
        indicators: "This is an example of a legitimate fraud alert message from HSBC, provided on their official website. While it may look similar to a scam message, the key indicators of legitimacy include the use of the official bank name, a clear explanation of the situation, and instructions to wait for a follow-up message from a specific number. Always verify such messages by contacting your bank directly through official channels if you have any doubts."
    }
];
}),
"[project]/git/scam-slam/src/core/game/questionSelection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateQuestionSet",
    ()=>generateQuestionSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$emailQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/questions/emailQuestions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$websiteQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/questions/websiteQuestions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$messageQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/questions/messageQuestions.ts [app-ssr] (ecmascript)");
;
;
;
// Combine all question types into a single master pool
const ALL_QUESTIONS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$emailQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailQuestions"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$websiteQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["websiteQuestions"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$messageQuestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageQuestions"]
];
// Helper function split master pool into groups by difficulty
function getAvailableQuestions(difficulty) {
    const questionsByDifficulty = ALL_QUESTIONS.filter((question)=>question.difficulty === difficulty);
    return questionsByDifficulty;
}
/**
 * Return a randomised subset of questions from a provided pool
 * Uses a sort-based shuffle and ensures the slice does not exceed pool length
 * @param pool Array of questions to sample from
 * @param count Number of questions to retrieve
 * @returns the correct number of a random selection of questions of a given difficulty
 */ function getRandomSubset(pool, count) {
    // Fisher-Yates shuffle or a simple sort-shuffle
    const shuffled = [
        ...pool
    ].sort(()=>Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, pool.length));
}
function generateQuestionSet(totalQuestions) {
    // Calculate equal split for three difficulty levels
    const numQuestionsPerDifficulty = Math.floor(totalQuestions / 3);
    // Final array to hold the selected questions
    const questions = [];
    // Filter pools by difficulty
    const easyQuestions = getAvailableQuestions("easy");
    const mediumQuestions = getAvailableQuestions("medium");
    const hardQuestions = getAvailableQuestions("hard");
    // Select random subsets for each tier and add to the final array
    questions.push(...getRandomSubset(easyQuestions, numQuestionsPerDifficulty));
    questions.push(...getRandomSubset(mediumQuestions, numQuestionsPerDifficulty));
    questions.push(...getRandomSubset(hardQuestions, numQuestionsPerDifficulty));
    // Handle remainder question slots if total number of questions is not divisible by 3
    const usedIds = new Set(questions.map((q)=>q.id));
    // Calculate if there are empty slots
    let remaining = totalQuestions - questions.length;
    if (remaining > 0) {
        // Filter master pool to exclude questions already selected
        const extraPool = ALL_QUESTIONS.filter((q)=>!usedIds.has(q.id));
        questions.push(...getRandomSubset(extraPool, remaining));
    }
    return questions;
}
}),
"[project]/git/scam-slam/src/core/game/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateAnswer",
    ()=>evaluateAnswer,
    "selectQuestions",
    ()=>selectQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/scoring.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questionSelection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/questionSelection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-ssr] (ecmascript)");
;
;
;
function selectQuestions() {
    let questions = [];
    questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questionSelection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateQuestionSet"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAME_CONFIG"].MAX_QUESTIONS);
    return questions;
}
function evaluateAnswer(state, answer) {
    const question = state.currentQuestion;
    // Safety check to ensure there is a question to evaluate
    if (!question) {
        throw new Error("No current question to evaluate");
    }
    let feedback;
    // Determine feedback based on the player's answer
    if (answer === question.correctAnswer) {
        feedback = "CORRECT";
    } else if (answer === "TIME-OUT") {
        feedback = "TIME-OUT";
    } else {
        feedback = "INCORRECT";
    }
    // Calculate score increment based on question difficulty and time left
    const scoreAwarded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateScoreIncrement"])(question.difficulty, state.timeLeft);
    return {
        feedback,
        scoreAwarded
    };
}
}),
"[project]/git/scam-slam/src/lib/data:6ce6dd [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4033b6e097e32e8633c397df5bf7da4838f7835f6f":"updateGame"},"git/scam-slam/src/lib/actions.ts",""] */ __turbopack_context__.s([
    "updateGame",
    ()=>updateGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateGame = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4033b6e097e32e8633c397df5bf7da4838f7835f6f", __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateGame"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4vc3VwYWJhc2VcIlxuXG5pbnRlcmZhY2UgR2FtZVByb3BzIHtcbiAgICBnYW1lSWQ6IHN0cmluZ1xuICAgIHNjb3JlOiBudW1iZXJcbiAgICBmaW5pc2hlZF9hdDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBRdWVzdGlvblByb3BzIHtcbiAgICBnYW1lSWQ6IHN0cmluZ1xuICAgIHF1ZXN0aW9uSWQ6IHN0cmluZ1xuICAgIGlzQ29ycmVjdDogYm9vbGVhblxuICAgIHRpbWVUYWtlbk1zOiBudW1iZXJcbiAgICBxdWVzdGlvblR5cGU6IHN0cmluZ1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZ2FtZSBlbnRyeSB3aGVuIGEgcGxheWVyIHN0YXJ0c1xuICogQHBhcmFtIGlucHV0X25hbWUgdGhlIHBsYXllcidzIGNob3NlbiBuaWNrbmFtZVxuICogQHJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgZ2FtZSByZWNvcmQgXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lKGlucHV0X25hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiZ2FtZXNcIilcbiAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICBwbGF5ZXJfbmFtZTogaW5wdXRfbmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKTsgXG5cbiAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogRmluYWxpc2VzIGEgZ2FtZSBzZXNzaW9uIGJ5IHVwZGF0aW5nIHRoZSB0b3RhbCBzY29yZSBhbmQgZW5kIHRpbWVcbiAqIEBwYXJhbSBHYW1lUHJvcHMgaW5jbHVkZXMgVVVJRCBvZiBjdXJyZW50IHNlc3Npb24sIHRvdGFsIHBvaW50cywgYW5kIHRpbWVzdGFtcCBvZiBjb21wbGV0aW9uXG4gKiBAcmV0dXJucyB0aGUgaW5zZXJ0ZWQgZ2FtZSByZWNvcmRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdhbWUoeyBnYW1lSWQsIHNjb3JlLCBmaW5pc2hlZF9hdH06IEdhbWVQcm9wcykge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiZ2FtZXNcIilcbiAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgICAgICBmaW5pc2hlZF9hdDogZmluaXNoZWRfYXRcbiAgICAgICAgfSlcbiAgICAgICAgLmVxKFwiaWRcIiwgZ2FtZUlkKVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogTG9ncyBldmVyeSBpbmRpdmlkdWFsIHF1ZXN0aW9uIGF0dGVtcHQgZm9yIGRhdGEgYW5hbHlzaXNcbiAqIFJlY29yZHMgd2hldGhlciB0aGUgdXNlciB3YXMgY29ycmVjdCBhbmQgaG93IGZhc3QgdGhleSBhbnN3ZXJlZFxuICogQHBhcmFtIHBhcmFtMCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMgdG8gY3JlYXRlIGEgXCJxdWVzdGlvbl9hdHRlbXB0c1wiIHJlY29yZFxuICogQHJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgcXVlc3Rpb24gYXR0ZW1wdCByZWNvcmRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29yZFF1ZXN0aW9uQXR0ZW1wdCh7Z2FtZUlkLCBxdWVzdGlvbklkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb3JyZWN0LCB0aW1lVGFrZW5NcywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uVHlwZX06IFF1ZXN0aW9uUHJvcHMpIHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwicXVlc3Rpb25fYXR0ZW1wdHNcIilcbiAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICBnYW1lX2lkOiBnYW1lSWQsXG4gICAgICAgICAgICBxdWVzdGlvbl9pZDogcXVlc3Rpb25JZCxcbiAgICAgICAgICAgIHF1ZXN0aW9uX3R5cGU6IHF1ZXN0aW9uVHlwZSxcbiAgICAgICAgICAgIGlzX2NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVfdGFrZW5fbXM6IHRpbWVUYWtlbk1zXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3QoKVxuICAgICAgICAuc2luZ2xlKClcbiAgICBcbiAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIGRhdGFcbn0gICBcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBd0NzQiJ9
}),
"[project]/git/scam-slam/src/lib/data:582598 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d06b4a8f16451125e48d98febc48f227160dccf1":"recordQuestionAttempt"},"git/scam-slam/src/lib/actions.ts",""] */ __turbopack_context__.s([
    "recordQuestionAttempt",
    ()=>recordQuestionAttempt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var recordQuestionAttempt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40d06b4a8f16451125e48d98febc48f227160dccf1", __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "recordQuestionAttempt"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4vc3VwYWJhc2VcIlxuXG5pbnRlcmZhY2UgR2FtZVByb3BzIHtcbiAgICBnYW1lSWQ6IHN0cmluZ1xuICAgIHNjb3JlOiBudW1iZXJcbiAgICBmaW5pc2hlZF9hdDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBRdWVzdGlvblByb3BzIHtcbiAgICBnYW1lSWQ6IHN0cmluZ1xuICAgIHF1ZXN0aW9uSWQ6IHN0cmluZ1xuICAgIGlzQ29ycmVjdDogYm9vbGVhblxuICAgIHRpbWVUYWtlbk1zOiBudW1iZXJcbiAgICBxdWVzdGlvblR5cGU6IHN0cmluZ1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZ2FtZSBlbnRyeSB3aGVuIGEgcGxheWVyIHN0YXJ0c1xuICogQHBhcmFtIGlucHV0X25hbWUgdGhlIHBsYXllcidzIGNob3NlbiBuaWNrbmFtZVxuICogQHJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgZ2FtZSByZWNvcmQgXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYW1lKGlucHV0X25hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiZ2FtZXNcIilcbiAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICBwbGF5ZXJfbmFtZTogaW5wdXRfbmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKTsgXG5cbiAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogRmluYWxpc2VzIGEgZ2FtZSBzZXNzaW9uIGJ5IHVwZGF0aW5nIHRoZSB0b3RhbCBzY29yZSBhbmQgZW5kIHRpbWVcbiAqIEBwYXJhbSBHYW1lUHJvcHMgaW5jbHVkZXMgVVVJRCBvZiBjdXJyZW50IHNlc3Npb24sIHRvdGFsIHBvaW50cywgYW5kIHRpbWVzdGFtcCBvZiBjb21wbGV0aW9uXG4gKiBAcmV0dXJucyB0aGUgaW5zZXJ0ZWQgZ2FtZSByZWNvcmRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdhbWUoeyBnYW1lSWQsIHNjb3JlLCBmaW5pc2hlZF9hdH06IEdhbWVQcm9wcykge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiZ2FtZXNcIilcbiAgICAgICAgLnVwZGF0ZSh7XG4gICAgICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgICAgICBmaW5pc2hlZF9hdDogZmluaXNoZWRfYXRcbiAgICAgICAgfSlcbiAgICAgICAgLmVxKFwiaWRcIiwgZ2FtZUlkKVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogTG9ncyBldmVyeSBpbmRpdmlkdWFsIHF1ZXN0aW9uIGF0dGVtcHQgZm9yIGRhdGEgYW5hbHlzaXNcbiAqIFJlY29yZHMgd2hldGhlciB0aGUgdXNlciB3YXMgY29ycmVjdCBhbmQgaG93IGZhc3QgdGhleSBhbnN3ZXJlZFxuICogQHBhcmFtIHBhcmFtMCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMgdG8gY3JlYXRlIGEgXCJxdWVzdGlvbl9hdHRlbXB0c1wiIHJlY29yZFxuICogQHJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgcXVlc3Rpb24gYXR0ZW1wdCByZWNvcmRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29yZFF1ZXN0aW9uQXR0ZW1wdCh7Z2FtZUlkLCBxdWVzdGlvbklkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb3JyZWN0LCB0aW1lVGFrZW5NcywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uVHlwZX06IFF1ZXN0aW9uUHJvcHMpIHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwicXVlc3Rpb25fYXR0ZW1wdHNcIilcbiAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICBnYW1lX2lkOiBnYW1lSWQsXG4gICAgICAgICAgICBxdWVzdGlvbl9pZDogcXVlc3Rpb25JZCxcbiAgICAgICAgICAgIHF1ZXN0aW9uX3R5cGU6IHF1ZXN0aW9uVHlwZSxcbiAgICAgICAgICAgIGlzX2NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVfdGFrZW5fbXM6IHRpbWVUYWtlbk1zXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3QoKVxuICAgICAgICAuc2luZ2xlKClcbiAgICBcbiAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIGRhdGFcbn0gICBcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1NBNkRzQiJ9
}),
"[project]/git/scam-slam/src/app/providers/GameProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameProvider",
    ()=>GameProvider,
    "useGame",
    ()=>useGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameReducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/state/gameReducer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/state/gameState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$data$3a$6ce6dd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/data:6ce6dd [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$data$3a$582598__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/data:582598 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
/**
 * Creates a React context that exposes:
 * - the current game state
 * - an asynch dispatch function that handles game actions and side effects 
 * (like API calls and navigation)
 * 
 * The GameProvider manages the entire game lifecycle:
 * - creating a new game
 * - selecting questions
 * - tracking time
 * - handling answers
 * - updating the database
 * - navigating between screens
*/ const GameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function GameProvider({ children }) {
    // Core reducer controlling game state transitions
    const [state, baseDispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameReducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gameReducer"], __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialGameState"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Tracks when the current quesetion started (used for scoring and analytics)
    const [questionStartTime, setQuestionStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    const timeTaken = Date.now() - questionStartTime;
    /**
   * When the game enters the "playing" status:
   * - reset the question timer
   * - navigate to the question screen
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.status === "playing") {
            setQuestionStartTime(Date.now());
            router.push("/questions");
        }
    }, [
        state.status
    ]);
    /**
   * When the game enters the "feedback" status:
   * - navigate to the appropriate feedback screen based on answer correctness
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.status !== "feedback") return;
        switch(state.lastFeedback){
            case "correct":
                router.push("/feedback/correct");
                break;
            case "incorrect":
                router.push("/feedback/incorrect");
                break;
            case "timeout":
                router.push("/feedback/time-out");
                break;
        }
    }, [
        state.status
    ]);
    /**
   * When the game is marked as "completed":
   * - update the database record
   * - navigate to the game complete screen
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.status === "completed") {
            dispatch({
                type: "UPDATE_GAME"
            });
            router.push("/game-complete");
        }
    }, [
        state.status
    ]);
    /**
   * While playing, tick the timer every second
   * When time runs out, dispatch a TIME_OUT action to handle it in the reducer
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.status !== "playing") return;
        const interval = setInterval(()=>{
            baseDispatch({
                type: "TICK"
            });
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        state.status
    ]);
    /**
   * Asynch dispatch function that handles game actions with side effects:
   * @param action The game action to handle, which may trigger API calls and state updates
   */ async function dispatch(action) {
        switch(action.type){
            // Select a new set of questions for the game
            case "SELECT_QUESTIONS":
                {
                    const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectQuestions"])();
                    baseDispatch({
                        type: "SET_QUESTIONS",
                        payload: questions
                    });
                    return;
                }
            /**
       * Handle the player's answer:
       * - record the attempt
       * - awards score if correct
       * - deducts a life if incorrect
       */ case "HANDLE_ANSWER":
                {
                    const { feedback, scoreAwarded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluateAnswer"])(state, action.payload.answer);
                    if (!state.currentQuestion) return;
                    if (feedback === "CORRECT") {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$data$3a$582598__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["recordQuestionAttempt"])({
                            gameId: state.gameId,
                            questionId: state.currentQuestion.id,
                            isCorrect: true,
                            timeTakenMs: timeTaken,
                            questionType: state.currentQuestion.type
                        });
                        baseDispatch({
                            type: "INCREMENT_SCORE",
                            payload: scoreAwarded
                        });
                        return;
                    } else if (feedback === "INCORRECT" || feedback === "TIME-OUT") {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$data$3a$582598__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["recordQuestionAttempt"])({
                            gameId: state.gameId,
                            questionId: state.currentQuestion.id,
                            isCorrect: false,
                            timeTakenMs: timeTaken,
                            questionType: state.currentQuestion.type
                        });
                        baseDispatch({
                            type: "LOSE_LIFE"
                        });
                        return;
                    }
                }
            // Updates the game record in the database when the game is over
            case "UPDATE_GAME":
                {
                    const finished_at = new Date().toISOString();
                    const gameId = state.gameId;
                    console.log('Game ID', gameId);
                    const score = state.score;
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$data$3a$6ce6dd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateGame"])({
                        gameId,
                        score,
                        finished_at
                    });
                    baseDispatch({
                        type: "COMPLETE_GAME"
                    });
                    return;
                }
            // Resets the entire game state back to the intial defaults
            case "RESET_GAME":
                {
                    baseDispatch({
                        type: "SET_STATE",
                        payload: __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialGameState"]
                    });
                    return;
                }
            // Fallback to the default reducer for any action that doesn't require side effects
            default:
                {
                    baseDispatch(action);
                    return;
                }
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContext.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/git/scam-slam/src/app/providers/GameProvider.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
function useGame() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(GameContext);
    if (!ctx) throw new Error("useGame must be used within GameProvider");
    return ctx;
}
}),
"[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/git/scam-slam/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].AppRouterContext; //# sourceMappingURL=app-router-context.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HooksClientContext; //# sourceMappingURL=hooks-client-context.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ServerInsertedHtml; //# sourceMappingURL=server-inserted-html.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
} //# sourceMappingURL=promise-with-resolvers.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Static"] = 1] = "Static";
    RenderStage[RenderStage["Runtime"] = 2] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 3] = "Dynamic";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal = null){
        this.abortSignal = abortSignal;
        this.currentStage = 1;
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                const { reason } = abortSignal;
                if (this.currentStage < 2) {
                    this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.runtimeStagePromise.reject(reason);
                }
                if (this.currentStage < 3) {
                    this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (this.currentStage >= stage) {
            return;
        }
        this.currentStage = stage;
        // Note that we might be going directly from Static to Dynamic,
        // so we need to resolve the runtime stage as well.
        if (stage >= 2) {
            this.runtimeStagePromise.resolve();
        }
        if (stage >= 3) {
            this.dynamicStagePromise.resolve();
        }
    }
    getStagePromise(stage) {
        switch(stage){
            case 2:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 3:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackSynchronousPlatformIOAccessInDev: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of the prerender stage
    if (requestStore.stagedRendering) {
        // TODO: error for sync IO in the runtime stage
        // (which is not currently covered by the validation render in `spawnDynamicValidationInDev`)
        requestStore.stagedRendering.advanceStage(_stagedrendering.RenderStage.Dynamic);
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/git/scam-slam/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : "TURBOPACK unreachable";
const useDynamicSearchParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicSearchParams : "TURBOPACK unreachable";
function useSearchParams() {
    useDynamicSearchParams?.('useSearchParams()');
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _readonlyurlsearchparams.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.searchParams);
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams?.('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    const pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.pathname);
        }
    }
    return pathname;
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams?.('useParams()');
    const params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.params);
        }
    }
    return params;
}
function useSelectedLayoutSegments(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            const promise = navigationPromises.selectedLayoutSegmentsPromises?.get(parallelRouteKey);
            if (promise) {
                // We should always have a promise here, but if we don't, it's not worth erroring over.
                // We just won't be able to instrument it, but can still provide the value.
                return (0, _react.use)(promise);
            }
        }
    }
    return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegment()');
    const navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && navigationPromises && 'use' in _react.default) {
        const promise = navigationPromises.selectedLayoutSegmentPromises?.get(parallelRouteKey);
        if (promise) {
            // We should always have a promise here, but if we don't, it's not worth erroring over.
            // We just won't be able to instrument it, but can still provide the value.
            return (0, _react.use)(promise);
        }
    }
    return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/git/scam-slam/node_modules/next/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
    return PrefetchKind;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/next-devtools/dev-overlay.shim.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatcher: null,
    renderAppDevOverlay: null,
    renderPagesDevOverlay: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatcher: function() {
        return dispatcher;
    },
    renderAppDevOverlay: function() {
        return renderAppDevOverlay;
    },
    renderPagesDevOverlay: function() {
        return renderPagesDevOverlay;
    }
});
function renderAppDevOverlay() {
    throw Object.defineProperty(new Error("Next DevTools: Can't render in this environment. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E697",
        enumerable: false,
        configurable: true
    });
}
function renderPagesDevOverlay() {
    throw Object.defineProperty(new Error("Next DevTools: Can't render in this environment. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E697",
        enumerable: false,
        configurable: true
    });
}
const dispatcher = new Proxy({}, {
    get: (_, prop)=>{
        return ()=>{
            throw Object.defineProperty(new Error(`Next DevTools: Can't dispatch ${String(prop)} in this environment. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
                value: "E698",
                enumerable: false,
                configurable: true
            });
        };
    }
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-overlay.shim.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppDevRenderingIndicator", {
    enumerable: true,
    get: function() {
        return useAppDevRenderingIndicator;
    }
});
const _react = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _nextdevtools = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/next-devtools/dev-overlay.shim.js [app-ssr] (ecmascript)");
const useAppDevRenderingIndicator = ()=>{
    const [isPending, startTransition] = (0, _react.useTransition)();
    (0, _react.useEffect)(()=>{
        if (isPending) {
            _nextdevtools.dispatcher.renderingIndicatorShow();
        } else {
            _nextdevtools.dispatcher.renderingIndicatorHide();
        }
    }, [
        isPending
    ]);
    return startTransition;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-app-dev-rendering-indicator.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatchAppRouterAction: null,
    useActionQueue: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatchAppRouterAction: function() {
        return dispatchAppRouterAction;
    },
    useActionQueue: function() {
        return useActionQueue;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/git/scam-slam/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _isthenable = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)");
// The app router state lives outside of React, so we can import the dispatch
// method directly wherever we need it, rather than passing it around via props
// or context.
let dispatch = null;
function dispatchAppRouterAction(action) {
    if (dispatch === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    dispatch(action);
}
const __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
const promisesWithDebugInfo = ("TURBOPACK compile-time truthy", 1) ? new WeakMap() : "TURBOPACK unreachable";
function useActionQueue(actionQueue) {
    const [state, setState] = _react.default.useState(actionQueue.state);
    // Because of a known issue that requires to decode Flight streams inside the
    // render phase, we have to be a bit clever and assign the dispatch method to
    // a module-level variable upon initialization. The useState hook in this
    // module only exists to synchronize state that lives outside of React.
    // Ideally, what we'd do instead is pass the state as a prop to root.render;
    // this is conceptually how we're modeling the app router state, despite the
    // weird implementation details.
    if ("TURBOPACK compile-time truthy", 1) {
        const { useAppDevRenderingIndicator } = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-ssr] (ecmascript)");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const appDevRenderingIndicator = useAppDevRenderingIndicator();
        dispatch = (action)=>{
            appDevRenderingIndicator(()=>{
                actionQueue.dispatch(action, setState);
            });
        };
    } else //TURBOPACK unreachable
    ;
    // When navigating to a non-prefetched route, then App Router state will be
    // blocked until the server responds. We need to transfer the `_debugInfo`
    // from the underlying Flight response onto the top-level promise that is
    // passed to React (via `use`) so that the latency is accurately represented
    // in the React DevTools.
    const stateWithDebugInfo = (0, _react.useMemo)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ((0, _isthenable.isThenable)(state)) {
            // useMemo can't be used to cache a Promise since the memoized value is thrown
            // away when we suspend. So we use a WeakMap to cache the Promise with debug info.
            let promiseWithDebugInfo = promisesWithDebugInfo.get(state);
            if (promiseWithDebugInfo === undefined) {
                const debugInfo = [];
                promiseWithDebugInfo = Promise.resolve(state).then((asyncState)=>{
                    if (asyncState.debugInfo !== null) {
                        debugInfo.push(...asyncState.debugInfo);
                    }
                    return asyncState;
                });
                promiseWithDebugInfo._debugInfo = debugInfo;
                promisesWithDebugInfo.set(state, promiseWithDebugInfo);
            }
            return promiseWithDebugInfo;
        }
        return state;
    }, [
        state
    ]);
    return (0, _isthenable.isThenable)(stateWithDebugInfo) ? (0, _react.use)(stateWithDebugInfo) : stateWithDebugInfo;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-action-queue.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _react = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)");
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = `${basePath}/__nextjs_source-map`;
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return `${filename}.map`;
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactServerDOMTurbopackClient; //# sourceMappingURL=react-server-dom-turbopack-client.js.map
}),
"[project]/git/scam-slam/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _client = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bbcbbe83._.js.map