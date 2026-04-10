# Scam Slam

Scam Slam is an interactive cybersecurity awareness game designed to help players recognise online scams across emails, messages, and websites. It was created as a part of an undergraduate dissertation project titled: "Raising Online Scam Awareness via CyberSecurity Gamification". It is a quiz-style game that challenges players to correctly identify online media communication examples as legitimate or fraudulent. It uses gamified elements such as levels, score, lives, and a leaderboard, and includes custom question selection logic, Supabase-backed persistence, and a Next.js frontend.

<img width="1497" height="825" alt="scam_slam_home_page" src="https://github.com/user-attachments/assets/f591e314-4eb9-4201-bda2-ba408042b74e" />

## Technology Stack

### Framework & Frontend
* [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
* [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)

### Styling, Animations, and Fonts
* [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
* [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion/) 
* [![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

### Database
* [![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
---

## Key Features
- Server-Side Rendering
- Email, message, and website scam/safe examples 
- Difficulty‑based scoring and speed bonuses  
- Lives, feedback screens, and a final leaderboard
- Player answer submission using on-screen 'buzzers'
- Supabase integration for storing game sessions and analytics

<img width="1490" height="815" alt="questions_page" src="https://github.com/user-attachments/assets/9aedd6e3-bc73-486b-bfef-e5b296018318" />

---

## Gameplay Flow

1. Player enters their name → game record created in Supabase  
2. A balanced set of questions is generated  
3. Timer starts → player answers  
4. Score and lives update  
5. Feedback screen appears  
6. Next question or game completion  
7. Final score saved → leaderboard displayed  
---

## Getting started

### Prerequisites
* Node.js
* npm, yarn, or pnpm
  
### Installation
1. Clone the repo:

2. Install dependencies
  
  ```sh
  npm install 
  ```
3. Environment Variables:
4. Run the development server:
  ```sh
  npm run dev
```

## Project Structure

## Deployment

---

## License

This project is intended for academic and educational use. Adjust licensing as needed for distribution.
