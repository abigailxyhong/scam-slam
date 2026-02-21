import Image from "next/image";
import ScoreDisplay from "./ScoreDisplay";
import Timer from "./Timer";
import { useEffect, useState } from "react";

type QuestionType = "email" | "phone" | "website" | "message";

interface QuestionHeaderProps {
  questionType: QuestionType;
  level: number;
  lives: number;
  score: number;
}

const iconMap: Record<QuestionType, string> = {
  email: "/images/icons/email-icon.png",
  phone: "/images/icons/call-icon.png",
  website: "/images/icons/website-icon.png",
  message: "/images/icons/message-icon.png",
};

const livesMap: Record<number, string> = {
  3: "/images/icons/3lives.png",
  2: "/images/icons/2lives.png",
  1: "/images/icons/1life.png",
};

export default function QuestionHeader({
  questionType,
  level,
  lives,
  score,
}: QuestionHeaderProps) {

  const [mounted, setMounted] = useState(false);
  
      useEffect(() => {
          setMounted(true);
      }, []);
  
      if (!mounted) {
          return null; // Prevent hydration mismatch
      }

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between mt-2">

      {/* Left: Question type icon */}
      <div className="flex items-center pl-6">
        <Image
          src={iconMap[questionType]}
          alt={`${questionType} icon`}
          width={70}
          height={70}
          priority
        />
      </div>

      <div className="flex items-center">
        <Timer />
      </div>

      {/* Score and Lives indicator */}
      <div className="flex items-center gap-8 pr-6">
        <ScoreDisplay score={score} />

        <Image
          src={livesMap[lives]}
          alt={`${lives} lives remaining`}
          width={160}
          height={60}
          priority
        />
      </div>
    </header>
  );
}
