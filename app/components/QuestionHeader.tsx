import Image from "next/image";

type QuestionType = "email" | "phone" | "website" | "message";

interface QuestionHeaderProps {
  questionType: QuestionType;
  level: number;
  lives: number;
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
}: QuestionHeaderProps) {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between mt-6">
      
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

      {/* Centre: Level indicator */}
      <h1 className="text-6xl font-extrabold text-gray-900">
        LEVEL {level}/12
      </h1>

      {/* Right: Lives indicator */}
      <div className="flex items-center pr-6">
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
