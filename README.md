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

### Deployment
* ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
---

## Key Features
- Email, message, and website scam/safe examples 
- Difficulty‑based scoring and speed bonuses  
- Lives, feedback screens, and a final leaderboard
- Player answer submission using on-screen 'buzzers'
- Supabase integration for storing game sessions and analytics

<img width="1490" height="815" alt="questions_page" src="https://github.com/user-attachments/assets/9aedd6e3-bc73-486b-bfef-e5b296018318" />

---

## Gameplay Flow

1. Player enters their name → game record created in Supabase
2. Player views instructions page and presses 'Ready' 
3. A balanced set of questions is generated  
4. Game starts with countdown timer → player submits their answer
5. Score and lives update  
6. Feedback screen appears  
7. Next question or game completion  
8. Final score saved → leaderboard displayed  
---

## Getting started

### Prerequisites
* Node.js
* npm, yarn, or pnpm

### System Dependencies
#### Production Dependencies
*These libraries are required for the application to function in a production environment*
| Library | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | 16.0.7 | Core React framework and routing engine. |
| **React / React-DOM** | 19.2.0 | UI library and DOM rendering. |
| **@supabase/supabase-js** | 2.99.0 | Client for database interactions. |
| **@supabase/ssr** | 0.9.0 | Server-Side Rendering utilities for Supabase. |
| **@heroui/react** | 3.0.0-beta.7 | UI Component library for buttons, inputs, and layouts. |
| **Motion** | 12.34.3 | Animation library for game transitions and effects. |

#### Development Dependencies
*These tools were used during development for styling, type-safety, and code quality*
* Tailwind CSS (v4): Utility-first CSS framework for UI styling
* TypeScript (v5): Static type checking to ensure code robustness
* ESLint (v9): Code analysis tool for TypeScript (and JavaScript)
* PostCSS: Tool for transforming CSS with JavaScript plugins
  
### Running the Project
1. CLI navigate to project root directory: scam-slam
   
2. Install dependencies
  ```sh
  npm install 
  ```
3. Create production build:
  ```sh
  npm run build
  ```
4. Launch production server:
  ```sh
  npm start
  ```
5. Open:
  ```sh
  http://localhost:3000
  ```
* Note: API keys are usually not distributed to third-parties, but for the purpose of providing a complete executable (and given that no sensitive information is stored), the .env.local file containing the Supabase project URL and Next public anon key is included in the source code .zip file for submission.

## Deployment
The project is deployed using Vercel, which integrates with Next.js to provide a globally distributed hosting environment. Scam Slam is live and accessible to the general public at: https://scam-slam.vercel.app/

---

## License

This project is intended for academic and educational use. It is licensed under the **Apache License 2.0**, a permissive license that allows for the free use, modification, and distribution of the software while requiring the preservation of original copyright notices and a clear disclaimer of liability.
