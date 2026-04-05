import { BaseQuestion } from "./baseQuestion";

export interface EmailQuestion extends BaseQuestion {
  id: string
  type: "email"
  content: {
    from?: string
    to?: string
    subject?: string
    imageURL: string
    width: number
    height: number
    body?: string
  }
  infoWhy: string
  infoHow?: string
  infoMore?: string
  tooltipAddress?: string
}

export const emailQuestions: EmailQuestion[] = [
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
      height: 200,
    },
    infoWhy: "The timer countdown in this email is a big red flag, they are used to create panic and urgency and are a common scam tactic. ",
    infoHow: "Clicking the link opens a brand-themed page offering a cash or gift reward if you take a short survey.\nAfter the survey, the site asks for your name, address, and a credit/debit card to pay a small fee or 'verify identity'.\nScammers may make unauthorized charges, enroll you in a subscription, or collect your personal details for future scams.",
    infoMore: "Go directly to the carrier's website by typing it yourself (e.g., ups.com, dhl.com) or use the official app.\nDo not click links, scan QR codes, or call phone numbers in unexpected emails.\nDo not assume a logo or colours mean the site is real- check the web address carefully.",
    tooltipAddress: "account-ups-noreply@upss.com",
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
      height: 300,
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
      height: 300,
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
      height: 300,
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
      height: 300,
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
      height: 200,
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
      height: 75,
    },
    infoWhy: "SCAM! - Look out for unprofessional grammar like '!!' and general tone and look of the email.\nThere is also an important typo in the sender's email address - 'netf1ix.com' rather than 'netflix.com'.",
    infoHow: "The email claims your payment failed and urges you to update your billing information via a link.\nThe link leads to a fake Netflix login page designed to steal your username and password.\nScammers can then access your account, view personal info, or use it for further scams.",
    infoMore: "Always hover over links/buttons to see the actual URL before clicking. In this case, the big red button points to storage.googleapis.com, not netflix.com.",
    tooltipAddress: "account-netflix-noreply@netf1ix.com"
  },
  {
    id: "email_paypal_scam",
    type: "email",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    content: {
      from: "paypal-noreply@paypa1.com",
      to: "user@email.com",
      subject: "REWARD",
      imageURL: "/images/questions/scam/email-paypal.jpg",
      width: 300,
      height: 200,
    },
    infoWhy: "The email is designed to look like it's from PayPal, but there are subtle signs it's fake. The sender's email address is not an official PayPal domain, and the email contains generic greetings and urgent language, which are common tactics used by scammers to create a sense of urgency and trick recipients into clicking malicious links.",
    infoHow: "The email uses a fake invoice for a product you never bought and urges you to call a number.\n When you call, the scammer pretends to help you fix it but needs remote access to your computer.\n They ask to log into your bank, then black out your screen and use developer tools to fake a large refund.\n They pressure you to 'return' the overpayment via gift cards, crypto, or wire.\n The refund never happened.",
    infoMore: "Close the email and log in to PayPal directyl (don't use links in the message).\nDon't call numbers in unexpected emails.\nDon't install remote-access tools for strangers.\nDon't send money, gift cards, or crypto to 'return' funds.",
    tooltipAddress: "paypal-noreply@paypa1.com"
  },
  {
    id: "email_microsoft_scam",
    type: "email",
    difficulty: "easy",
    isScam: true,
    correctAnswer: "SCAM",
    content: {
      imageURL: "/images/questions/scam/email-microsoft.png",
      width: 800,
      height: 500,
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
  },
];
