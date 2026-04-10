# Scam Slam

Scam Slam is an interactive cybersecurity awareness game designed to help players recognise online scams across emails, messages, and websites. It blends fast‑paced gameplay with realistic scam examples, educational explanations, and a structured scoring system suitable for both public engagement and academic research.

The project includes a full game engine, question‑selection logic, Supabase‑backed persistence, and a polished Next.js frontend. It can also be packaged into a desktop executable using modern web‑to‑desktop frameworks.

---

## 🎮 Game Overview

Scam Slam challenges players to identify scams under time pressure. Each round includes a curated mix of question types, difficulty levels, and realistic examples. The game provides immediate feedback explaining why something is a scam and how the scam works, reinforcing learning through clarity and repetition.

### Core Features
- Email, message, and website scam scenarios  
- Difficulty‑based scoring and speed bonuses  
- Lives, feedback screens, and a final leaderboard  
- Realistic scam examples with detailed educational explanations  
- Supabase integration for storing game sessions and analytics  

---

## 🧱 Technology Stack

### Framework & Frontend
- **Next.js**  
  https://nextjs.org/

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

## 🖥️ Packaging Scam Slam as a Desktop Executable

Scam Slam can be packaged into a standalone desktop application using one of the following frameworks:

### Tauri
A lightweight, secure framework that wraps web apps into native executables with minimal overhead.

- Documentation: https://tauri.app/

**Why Tauri?**
- Very small executable sizes  
- Strong security model  
- Cross‑platform builds (Windows, macOS, Linux)  

### Electron
A mature framework that bundles Chromium and Node.js to run web apps as desktop applications.

- Documentation: https://www.electronjs.org/

**Why Electron?**
- Full Node.js API access  
- Large ecosystem and tooling  
- Familiar development experience  

Both frameworks allow you to wrap the built Next.js application into a distributable `.exe`, `.app`, or `.deb` file.

---

## 📁 Project Structure

