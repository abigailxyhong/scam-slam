(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GAME_CONFIG",
    ()=>GAME_CONFIG
]);
const GAME_CONFIG = {
    TIME_LIMIT: 60,
    MAX_QUESTIONS: 12
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/state/gameReducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gameReducer",
    ()=>gameReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-client] (ecmascript)");
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
                        timeLeft: __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].TIME_LIMIT,
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
                    timeLeft: __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].TIME_LIMIT,
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/state/gameState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialGameState",
    ()=>initialGameState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-client] (ecmascript)");
;
const initialGameState = {
    playerName: "",
    gameId: "",
    currentQuestionIndex: 0,
    currentQuestion: null,
    score: 0,
    lives: 3,
    timeLeft: __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].TIME_LIMIT,
    questionsCorrect: 0,
    digitalBuzzersOn: false,
    questions: [],
    status: "intro",
    lastFeedback: null
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/lib/utils/game.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a new game record in the database
 * 
 * Sends a POST request to the /api/game endpoint with the player's name
 * The API returns a game object containing:
 * - id
 * - playerName
 * - score (initially 0)
 * - created_at timestamp
 * 
 * @param playerName player's submitted name for the game session
 * @returns a promise resolving to the created game object
 */ __turbopack_context__.s([
    "createGame",
    ()=>createGame,
    "getGame",
    ()=>getGame,
    "getTopGames",
    ()=>getTopGames,
    "recordQuestionAttempt",
    ()=>recordQuestionAttempt,
    "updateGame",
    ()=>updateGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function createGame(playerName) {
    const res = await fetch("/api/game", {
        method: "POST",
        body: JSON.stringify({
            playerName
        })
    });
    const { data, error } = await res.json();
    if (error) throw new Error(error.message);
    return data;
}
async function updateGame(id, updates) {
    const res = await fetch(`/api/game/${id}`, {
        method: "PATCH",
        body: JSON.stringify(updates)
    });
    const json = await res.json();
    const { data, error } = json;
    if (error) throw new Error(error.message);
    return data;
}
async function getGame(id) {
    const res = await fetch(`/api/game/${id}`);
    const { data, error } = await res.json();
    if (error) throw new Error(error.message);
    return data;
}
async function getTopGames() {
    const base = ("TURBOPACK compile-time value", "http://localhost:3000");
    const res = await fetch(`${base}/api/game/top`);
    const { data, error } = await res.json();
    if (error) throw new Error(error.message);
    return data;
}
async function recordQuestionAttempt({ gameId, questionId, isCorrect, timeTakenMs, questionType }) {
    const res = await fetch("/api/game/attempt", {
        method: "POST",
        body: JSON.stringify({
            gameId,
            questionId,
            isCorrect,
            timeTakenMs,
            questionType
        })
    });
    const { data, error } = await res.json();
    if (error) throw new Error(error.message);
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/core/game/scoring.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateScoreIncrement",
    ()=>calculateScoreIncrement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-client] (ecmascript)");
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
   */ const speedBonus = Math.floor(timeLeft / __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].TIME_LIMIT * 10);
    // Total score for the answer
    return baseScore + speedBonus;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/core/game/questions/emailQuestions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        infoWhy: "The timer countdown in this email is a big red flag, they are used to create panic and urgency and are a common scam tactic. ",
        infoHow: "Clicking the link opens a brand-themed page offering a cash or gift reward if you take a short survey.\nAfter the survey, the site asks for your name, address, and a credit/debit card to pay a small fee or 'verify identity'.\nScammers may make unauthorized charges, enroll you in a subscription, or collect your personal details for future scams.",
        infoMore: "Go directly to the carrier's website by typing it yourself (e.g., ups.com, dhl.com) or use the official app.\nDo not click links, scan QR codes, or call phone numbers in unexpected emails.\nDo not assume a logo or colours mean the site is real- check the web address carefully.",
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
        infoWhy: "This is a legitimate email from KFC UK. Companies/ business' like KFC will often send promotional emails. The email contains typical promotional content without any urgent language or suspicious links.",
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
        infoWhy: "This is a legitimate email from Apple, notifiying the user of a new login. The language and tone used is professional with no attempts at creating urgency or using scare tactics.",
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
        infoWhy: "This is a legitimate email from Booking.com, presenting a discount offer. The language and tone used is professional with no attempts at creating urgency or using scare tactics.",
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
        infoWhy: "This is a legitimate email from Trainline, showing the user's their savings within the app. There are no suspicious elements or risky actions being promoted.",
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
        infoWhy: "The email address is not an official AAA domain. Watch out for typos in the sender's email address. In this case, 'aaaa.com' rather than aaa.com.",
        infoHow: "Uses the trusted AAA brand to lure victims into a fake free survey.\nSurvey link likely leads to phishing or data theft.\nSometimes, the site may try to download viruses or spyware.",
        infoMore: "Check the sender's email address carefully to ensure it matches the company's official domain.\nGo directly to the company's website by typing it yourself (e.g., aaa.com)\nDo not click links, scan QR codes, or call phone numbers in unexpected emails.\nLook up recent scams related to the company if you're unsure.",
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
        infoWhy: "SCAM! - Look out for unprofessional grammar like '!!' and general tone and look of the email.\nThere is also an important typo in the sender's email address - 'netf1ix.com' rather than 'netflix.com'.",
        infoHow: "The email claims your payment failed and urges you to update your billing information via a link.\nThe link leads to a fake Netflix login page designed to steal your username and password.\nScammers can then access your account, view personal info, or use it for further scams.",
        infoMore: "Always hover over links/buttons to see the actual URL before clicking. In this case, the big red button points to storage.googleapis.com, not netflix.com.",
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
        infoWhy: "The email is designed to look like it's from PayPal, but there are subtle signs it's fake. The sender's email address is not an official PayPal domain, and the email contains generic greetings and urgent language, which are common tactics used by scammers to create a sense of urgency and trick recipients into clicking malicious links.",
        infoHow: "The email uses a fake invoice for a product you never bought and urges you to call a number.\n When you call, the scammer pretends to help you fix it but needs remote access to your computer.\n They ask to log into your bank, then black out your screen and use developer tools to fake a large refund.\n They pressure you to 'return' the overpayment via gift cards, crypto, or wire.\n The refund never happened.",
        infoMore: "Close the email and log in to PayPal directyl (don't use links in the message).\nDon't call numbers in unexpected emails.\nDon't install remote-access tools for strangers.\nDon't send money, gift cards, or crypto to 'return' funds.",
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
        infoWhy: "Official Microsoft error and warning messages never include a phone number.\nLook out for clear signs of unprofessionalism like bad grammar.",
        infoHow: "The email claims there was unusual sign-in activity and urges you to call a number for help.\nWhen you call, the scammer pretends to be Microsoft support and says they need remote access to your computer to fix the issue.\nThey ask you to log into your bank account, then black out your screen and use developer tools to fake a large refund.\nThey pressure you to 'return' the overpayment via gift cards, crypto, or wire transfer.\nThe refund never happened.",
        infoMore: "Close the email and log in to Microsoft directly (don't use links in the message).\nDon't call numbers in unexpected emails.\nDon't install remote-access tools for strangers.\nDon't send money, gift cards, or crypto to 'return' funds.",
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
        infoWhy: "The email address is not an official Disney domain.\n Be aware of a large commercial organisation using a public email domain like Hotmail for official communication.\nAlways check the sender's email address carefully to ensure it matches the company's official domain.",
        infoHow: "The email claims you've won a Disney prize and urges you to click a link to claim it.\nThe link leads to a fake Disney-themed survey designed to steal your personal information and may also try to download viruses or spyware.",
        infoMore: "Go directly to the company's website by typing it yourself (e.g., disney.com)\nDo not click links, scan QR codes, or call phone numbers in unexpected emails.\nLook up recent scams related to the company if you're unsure.",
        tooltipAddress: "disney-official@hotmail.com"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/core/game/questions/websiteQuestions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        infoWhy: "This is a legitimate website, as indicated by the familiar BBC logo and design. The URL is also a key indicator of legitimacy, ending in .co.uk for the BBC.",
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
        infoWhy: "This is a legitimate website, as indicated by the familiar NHS logo and design. The URL is also a key indicator of legitimacy, ending in .nhs.uk for the NHS.",
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
        infoWhy: "This is a legitimate website, as indicated by the familiar UK government logo and design. The URL is also a key indicator of legitimacy, ending in .gov.uk for UK government sites.",
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
        infoWhy: "This one can be tricky, as typically a site with a big focus on money might raise suspicion. However, this is a legitimate website run by the Massachusetts government to help residents find unclaimed money. The URL ending in .gov is a strong indicator of legitimacy.",
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
        infoWhy: "This is a fake website designed to look like Google's homepage. The URL is a key indicator of the scam, as it does not end in .com and contains extra words (e.g., google-secure-login.com).",
        tooltip: "http://accounts.google.com.security-check-login.verify-user-auth.co/login",
        infoHow: "Check the URL carefully - http is not a secure protocol (look for https),  and although 'accounts.google.com' is a subdomain of google.com, the actual domain is 'verify-user-auth.co', which is cheap, generic, and unconnected to Google."
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
        infoWhy: "This is an extremely sophisticated scam website designed to look like a legitimate charity. The URL is a key indicator of the scam, as it does not end in .org and contains extra words (e.g., verdant-charity.com).",
        infoHow: "Check the URL carefully - For charities, you can also check their legitimacy through charity watchdog websites.",
        tooltip: "https://verdant-relief-trust.com/support"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/core/game/questions/messageQuestions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        infoWhy: "A big indicator that this is a scam is the suspicious link in the message and unofficial phone number. The message uses scare tactics to create urgency, and is designed to trick you into clicking the link, which can lead to phishing sites or malware downloads.",
        infoHow: "You receive a text message claiming to be from a law enforcement agency, stating that you've been caught speeding and need to pay a fine.\nThe message includes a link to view the 'ticket' or pay the fine.\nWhen you click the link, it may lead to a fake website that looks legitimate but is designed to steal your personal information or install malware on your device.",
        infoMore: "Don't click on links in unexpected text messages, especially those claiming to be from law enforcement or government agencies.\nIf you receive such a message, go directly to the official website of the agency or contact them through official channels to verify the claim.\nBe cautious of messages that create a sense of urgency or pressure you to take immediate action."
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
        infoWhy: "This is a classic example of a pyramid scheme, where the scammer tries to recruit you into a fake business opportunity that promises high returns for recruiting others.\nThe message may use persuasive language and testimonials to lure you in, but it's designed to benefit only those at the top of the pyramid, while most participants lose money.",
        infoHow: "You receive a message from someone you know, inviting you to join a 'business opportunity' that promises high returns for recruiting others.\nThe message may include testimonials from people who claim to have made money, and it encourages you to recruit more people to earn commissions.\nAs more people join, the scammer at the top of the pyramid makes money, while most participants end up losing their investment.",
        infoMore: "Be skeptical of any business opportunity that requires you to recruit others to earn money.\nResearch the company and the business model before getting involved.\nIf it sounds too good to be true, it probably is. Avoid schemes that promise high returns with little effort."
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
        infoWhy: "This is an example of a legitimate fraud alert message from HSBC, provided on their official website. While it may look similar to a scam message, the key indicators of legitimacy include the use of the official bank name, a clear explanation of the situation, and instructions to wait for a follow-up message from a specific number. Always verify such messages by contacting your bank directly through official channels if you have any doubts."
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
        infoWhy: "This is an example of a legitimate fraud alert message from HSBC, provided on their official website. While it may look similar to a scam message, the key indicators of legitimacy include the use of the official bank name, a clear explanation of the situation, and instructions to wait for a follow-up message from a specific number. Always verify such messages by contacting your bank directly through official channels if you have any doubts."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/core/game/questionSelection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateQuestionSet",
    ()=>generateQuestionSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$emailQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/questions/emailQuestions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$websiteQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/questions/websiteQuestions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$messageQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/questions/messageQuestions.ts [app-client] (ecmascript)");
;
;
;
function generateQuestionSet(totalQuestions) {
    // Number of questions per difficulty level
    const questionsPerDifficulty = Math.floor(totalQuestions / 3);
    // Final array to hold the selected questions
    const questions = [];
    // Tracks used question IDs to prevent duplicates
    const usedIds = new Set();
    // All supported question types
    const QUESTION_TYPES = [
        "email",
        "website",
        "message"
    ];
    /**
   * Helper function:
   * - Selects a random subset of unique questions from a given pool
   * - Ensure no duplicates by checking against usedIds
   * @param pool the array of questions to select from
   * @param count the number of questions to select
   * @returns an array of selected unique questions
   */ function getRandomUnique(pool, count) {
        const available = pool.filter((q)=>!usedIds.has(q.id));
        const shuffled = [
            ...available
        ].sort(()=>Math.random() - 0.5);
        const selected = shuffled.slice(0, count);
        selected.forEach((q)=>usedIds.add(q.id));
        return selected;
    }
    const difficulties = [
        "easy",
        "medium",
        "hard"
    ];
    /**
   * Main selection loop:
   * - Iterates through each difficulty level
   * - For each difficulty, iterates through each question type
   * - Selects a set number of questions for that category
   */ difficulties.forEach((difficulty)=>{
        const questionsPerType = Math.floor(questionsPerDifficulty / QUESTION_TYPES.length);
        QUESTION_TYPES.forEach((type)=>{
            let pool = [];
            // Select the appropriate question pool based on type
            switch(type){
                case "email":
                    pool = __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$emailQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailQuestions"].filter((q)=>q.difficulty === difficulty);
                    break;
                case "website":
                    pool = __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$websiteQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["websiteQuestions"].filter((q)=>q.difficulty === difficulty);
                    break;
                case "message":
                    pool = __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$messageQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageQuestions"].filter((q)=>q.difficulty === difficulty);
                    break;
            }
            // Randomly select unique questions from the filtered pool
            const selected = getRandomUnique(pool, questionsPerType);
            questions.push(...selected);
        });
    });
    // Fill remaining slots without duplicates
    while(questions.length < totalQuestions){
        for (const difficulty of difficulties){
            for (const type of QUESTION_TYPES){
                let pool = [];
                switch(type){
                    case "email":
                        pool = __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$emailQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailQuestions"];
                        break;
                    case "website":
                        pool = __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$websiteQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["websiteQuestions"];
                        break;
                    case "message":
                        pool = __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questions$2f$messageQuestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageQuestions"];
                        break;
                }
                // Filter unused questions of the correct difficulty
                const filtered = pool.filter((q)=>q.difficulty === difficulty && !usedIds.has(q.id));
                if (filtered.length > 0) {
                    // Pick one random unused question
                    const random = filtered[Math.floor(Math.random() * filtered.length)];
                    usedIds.add(random.id);
                    questions.push(random);
                    if (questions.length >= totalQuestions) break;
                }
            }
            if (questions.length >= totalQuestions) break;
        }
    }
    return questions;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/core/game/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateAnswer",
    ()=>evaluateAnswer,
    "selectQuestions",
    ()=>selectQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$scoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/scoring.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questionSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/questionSelection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-client] (ecmascript)");
;
;
;
function selectQuestions() {
    let questions = [];
    questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$questionSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateQuestionSet"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].MAX_QUESTIONS);
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
    const scoreAwarded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$scoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateScoreIncrement"])(question.difficulty, state.timeLeft);
    return {
        feedback,
        scoreAwarded
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/providers/GameProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameProvider",
    ()=>GameProvider,
    "useGame",
    ()=>useGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/state/gameReducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/state/gameState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$utils$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/utils/game.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$scoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/core/game/scoring.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
*/ const GameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function GameProvider({ children }) {
    _s();
    // Core reducer controlling game state transitions
    const [state, baseDispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameReducer"], __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialGameState"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Tracks when the current quesetion started (used for scoring and analytics)
    const [questionStartTime, setQuestionStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    const timeTaken = Date.now() - questionStartTime;
    /**
   * When the game enters the "playing" status:
   * - reset the question timer
   * - navigate to the question screen
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            if (state.status === "playing") {
                setQuestionStartTime(Date.now());
                router.push("/questions");
            }
        }
    }["GameProvider.useEffect"], [
        state.status
    ]);
    /**
   * When the game enters the "feedback" status:
   * - navigate to the appropriate feedback screen based on answer correctness
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
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
        }
    }["GameProvider.useEffect"], [
        state.status
    ]);
    /**
   * When the game is marked as "completed":
   * - update the database record
   * - navigate to the game complete screen
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            if (state.status === "completed") {
                dispatch({
                    type: "UPDATE_GAME"
                });
                router.push("/game-complete");
            }
        }
    }["GameProvider.useEffect"], [
        state.status
    ]);
    /**
   * While playing, tick the timer every second
   * When time runs out, dispatch a TIME_OUT action to handle it in the reducer
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            if (state.status !== "playing") return;
            const interval = setInterval({
                "GameProvider.useEffect.interval": ()=>{
                    baseDispatch({
                        type: "TICK"
                    });
                }
            }["GameProvider.useEffect.interval"], 1000);
            return ({
                "GameProvider.useEffect": ()=>clearInterval(interval)
            })["GameProvider.useEffect"];
        }
    }["GameProvider.useEffect"], [
        state.status
    ]);
    /**
   * Asynch dispatch function that handles game actions with side effects:
   * @param action The game action to handle, which may trigger API calls and state updates
   */ async function dispatch(action) {
        switch(action.type){
            // Create a new game entry in the database
            case "CREATE_GAME":
                {
                    const game = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$utils$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGame"])(action.payload);
                    baseDispatch({
                        type: "SET_GAME_ID",
                        payload: game.id
                    });
                    return;
                }
            // Select a new set of questions for the game
            case "SELECT_QUESTIONS":
                {
                    const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectQuestions"])();
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
                    if (!state.currentQuestion) return;
                    if (action.payload.answer === state.currentQuestion.correctAnswer) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$utils$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordQuestionAttempt"])({
                            gameId: state.gameId,
                            questionId: state.currentQuestion.id,
                            isCorrect: true,
                            timeTakenMs: timeTaken,
                            questionType: state.currentQuestion.type
                        });
                        const scoreAwarded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$core$2f$game$2f$scoring$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateScoreIncrement"])(state.currentQuestion.difficulty, action.payload.timeLeft);
                        baseDispatch({
                            type: "INCREMENT_SCORE",
                            payload: scoreAwarded
                        });
                        return;
                    } else if (action.payload.answer !== state.currentQuestion.correctAnswer) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$utils$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordQuestionAttempt"])({
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
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$utils$2f$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateGame"])(state.gameId, {
                        score: state.score,
                        finished_at: new Date().toISOString()
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
                        payload: __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$state$2f$gameState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialGameState"]
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContext.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/git/scam-slam/src/app/providers/GameProvider.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(GameProvider, "1C8jnhGFrbrsqMtAyIQwnmYCAgc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GameProvider;
function useGame() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(GameContext);
    if (!ctx) throw new Error("useGame must be used within GameProvider");
    return ctx;
}
_s1(useGame, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "GameProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/git/scam-slam/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/git/scam-slam/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=git_scam-slam_22d83104._.js.map