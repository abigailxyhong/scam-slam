# Scam Slam

Scam Slam is an interactive cybersecurity awareness game designed to help players recognise online scams across emails, messages, and websites. It was created as a part of an undergraduate dissertation project titled: "Raising Online Scam Awareness via CyberSecurity Gamification". It is a quiz-style game that challenges players to correctly identify online media communication examples as legitimate or fraudulent. It uses gamified elements such as levels, score, lives, and a leaderboard, and includes custom question selection logic, Supabase-back persistence, and a Next.js frontend.

---

## Game Overview

Scam Slam challenges players to identify legitimate and fraudulent content correctly. Each round includes a curated mix of question types, difficulty levels, and realistic examples. The game provides immediate feedback explaining why something is a scam and how the scam works to reinforce learning.

### Core Features
- Email, message, and website scam scenarios  
- Difficulty‑based scoring and speed bonuses  
- Lives, feedback screens, and a final leaderboard  
- Realistic scam examples with detailed educational explanations  
- Supabase integration for storing game sessions and analytics  

---

## Built with

### Framework & Frontend
- **Next.js**  
  https://nextjs.org/
  * [![Next][Next.js]][Next-url]

### Backend & Database
- **Supabase**  
  https://supabase.com/

### Animation
- **Framer Motion**  
  https://www.framer.com/motion/

### Styling
- **Tailwind CSS**  
  https://tailwindcss.com/

### Fonts
- **Google Fonts (Next.js font optimisation)**  
  https://nextjs.org/docs/app/building-your-application/optimizing/fonts

---

## Running the Project

### Prerequisites

### Install dependencies
npm install

### Start development server
npm run dev

### Build for production

## 🧪 Gameplay Flow

1. Player enters their name → game record created in Supabase  
2. A balanced set of questions is generated  
3. Timer starts → player answers  
4. Score and lives update  
5. Feedback screen appears  
6. Next question or game completion  
7. Final score saved → leaderboard displayed  

---

## 📊 Research Use

Scam Slam supports academic research into:
- Cybersecurity awareness  
- Scam detection behaviour  
- Time‑pressure decision‑making  
- Usability and engagement  

Supabase stores detailed analytics, including:
- Per‑question correctness  
- Time taken  
- Question type performance  
- Difficulty‑based scoring  

---

## 📜 License

This project is intended for academic and educational use. Adjust licensing as needed for distribution.
