import { Answer, BaseQuestion, Difficulty } from "./baseQuestion";

export interface MessageQuestion extends BaseQuestion {
    id: string;
    type: "message";
    difficulty: Difficulty;
    isScam: boolean;
    correctAnswer: Answer
    content: {
        sender?: string;
        customText?: string;
        imageURL?: string;
        link?: string;
        timestamp?: string;
        ctaText?: string;
        reportSpamButton?: boolean;
        width?: number;
        height?: number;
    };
    infoWhy: string;
    infoHow: string;
    infoMore?: string;
}

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
            height: 300,
        }, 
        infoWhy: "This is a classic example of a pyramid scheme, where the scammer tries to recruit you into a fake business opportunity that promises high returns for recruiting others.\nThe message may use persuasive language and testimonials to lure you in, but it's designed to benefit only those at the top of the pyramid, while most participants lose money.",
        infoHow: "You receive a message from someone you know, inviting you to join a 'business opportunity' that promises high returns for recruiting others.\nThe message may include testimonials from people who claim to have made money, and it encourages you to recruit more people to earn commissions.\nAs more people join, the scammer at the top of the pyramid makes money, while most participants end up losing their investment.",
        infoMore: "Be skeptical of any business opportunity that requires you to recruit others to earn money.\nResearch the company and the business model before getting involved.\nIf it sounds too good to be true, it probably is. Avoid schemes that promise high returns with little effort."

    },

    // Medium
    
    // Hard
];
