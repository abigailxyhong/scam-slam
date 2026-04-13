import { BaseQuestion } from "./baseQuestion"

// Extends the shared BaseQuestion structure with fields specific to message questions
export interface MessageQuestion extends BaseQuestion {
    content: {
        sender?: string;
        customText?: string;
        imageURL?: string;
        link?: string;
        timestamp?: string;
        ctaText?: string;
        width?: number;
        height?: number;
    };
}

/**
 * A collection of message questions for the game
 * Each entry includes:
 * - metadata
 * - message content
 * - feedback explanations
 */
export const messageQuestions: MessageQuestion[] = [
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
            height: 300,
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
            height: 300,
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
            timestamp: "11:24",
        },
        indicators: "This is an example of a legitimate fraud alert message from HSBC, provided on their official website. While it may look similar to a scam message, the key indicators of legitimacy include the use of the official bank name, a clear explanation of the situation, and instructions to wait for a follow-up message from a specific number. Always verify such messages by contacting your bank directly through official channels if you have any doubts.",

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
            timestamp: "4:38",
        },
        indicators: "This is an example of a legitimate fraud alert message from HSBC, provided on their official website. While it may look similar to a scam message, the key indicators of legitimacy include the use of the official bank name, a clear explanation of the situation, and instructions to wait for a follow-up message from a specific number. Always verify such messages by contacting your bank directly through official channels if you have any doubts.",
    }
];
