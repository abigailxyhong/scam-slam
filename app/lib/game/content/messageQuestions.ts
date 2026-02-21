import { Answer, BaseQuestion, Difficulty } from "./baseQuestion";

export interface MessageQuestion extends BaseQuestion {
    id: string;
    type: "message";
    difficulty: Difficulty;
    isScam: boolean;
    correctAnswer: Answer
    message: {
        sender?: string;
        message?: string;
        imageURL?: string;
        link?: string;
        timestamp?: string;
        ctaText?: string;
        reportSpamButton?: boolean;
    };
}

export const messageQuestions: MessageQuestion[] = [
    {
        id: "message_speeding_scam",
        type: "message",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SCAM",
        message: { 
            imageURL: "/images/questions/scam/message-speeding.png"
        }

        
    },
    {
        id: "message_pyramid_scheme",
        type: "message",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SCAM",
        message: { 
            imageURL: "/images/questions/scam/message-pyramid-scheme.jpeg"
        }

        
    },
    {
        id: "sms_bank_legit_1",
        type: "message",
        difficulty: "easy",
        isScam: false,
        correctAnswer: "SAFE",
        message: {
            sender: "HSBC",
            message: "Alert: We detected unusual ",
            timestamp: "16:42",
        },
    },
    {
        id: "sms_job_scam_1",
        type: "message",
        difficulty: "easy",
        isScam: true,
        correctAnswer: "SCAM",
        message: {
            sender: "+63 948 152 2843",
            timestamp: "Mon 18 Aug at 11:14",
            message: "Hello, my name is Grace Mitchell, and I'm the Human Resources Manager at Serviceplan Group. We're currently offering a flexible, part-time position that you can complete in your spare time.\nPosition: Video Publisher\nJob Description: Comment on or like assigned videos\nSalary: £80-500\nWorking Hours: 30 minutes to 1 hour per day\nAge Requirements: 20-70 years old\nIf you're interested in this position, please contact us via WhatsApp: +447403296366",
            ctaText: "If you did not expect this message from an unknown sender, it may be spam.",
            reportSpamButton: true
        },
    },

    {
        id: "sms_delivery_scam_2",
        type: "message",
        difficulty: "medium",
        isScam: true,
        correctAnswer: "SCAM",
        message: {
            sender: "sharharielle11064@gmail.com",
            timestamp: "Tue 1 Apr at 16:41",
            message: "EVRI- The courier is delivering your parcel. The delivery cannot be completed because the EVRI system cannot detect the full address information of your parcel. The parcel is temporarily stored in the warehouse. Please update your address information in the link below to expedite delivery. If you do not update it in time, the parcel will be returned to the shipping location.\n(Please reply Y, then exit the SMS and reopen it to activate the link, or copy the link and open it in Safari browser).\nHave a great day, EVRI team",

            link: "http://evri.psocyriwc.top/upaddress",
            ctaText: "If you did not expect this message from an unknown sender, it may be spam.",
            reportSpamButton: true
        },
    },




];
