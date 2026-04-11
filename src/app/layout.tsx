import type { Metadata } from "next";
import { Jaro } from "next/font/google";

import './globals.css';

import { GameProvider } from "./providers/GameProvider";

/**
 * Root layout for the entire application
 * 
 * - Loads global CSS and the Jaro font from Google Fonts
 * - Defines metadata for the application, including the title and description
 * - Wraps the entire app in the GameProvider so all pages and components
 *  can access the global game state and dispatch function through the useGame hook
 * - Applies the font class to the html element to make it available throughout the app
 */
const jaro = Jaro({
  variable: "--font-jaro",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Scam Slam",
  description: "An interactive cybersecurity awareness game on online scams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jaro.className}>
      <body>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
