import type { Metadata } from "next";
import { Jaro } from "next/font/google";
import './globals.css';


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
        {children}
      </body>
    </html>
  );
}
