import Image from "next/image"
import ScoreDisplay from "./ScoreDisplay"
import Timer from "./Timer"
import { useEffect, useState } from "react"
import { QuestionType} from "../../../core/game/questions/baseQuestion"

interface QuestionHeaderProps {
  questionType: QuestionType;
  lives: number;
  score: number;
}

// Maps question types to their corresponding icon image paths
const iconMap: Record<QuestionType, string> = {
  email: "/images/icons/email-icon.png",
  website: "/images/icons/website-icon.png",
  message: "/images/icons/message-icon.png",
}

// Maps remaining lives to the appropriate life-indicator image
const livesMap: Record<number, string> = {
  3: "/images/icons/3lives.png",
  2: "/images/icons/2lives.png",
  1: "/images/icons/1life.png",
}

/**
 * Displays the header for a question, including:
 * - The question type icon (email, website, or message)
 * - A countdown timer
 * - The player's current score
 * - A visual indicator of remaining lives
 * 
 * @param param0 Question type, lives, and score passed as props to render the appropriate content
 * @returns JSX element representing the question header with dynamic content based on the game state
 */
export default function QuestionHeader({
  questionType,
  lives,
  score,
}: QuestionHeaderProps) {
  // State to track if the component has mounted, used to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)

  // Get the appropriate life image based on the number of lives remaining
  const lifeImage = livesMap[lives]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">

      {/* Question type icon */}
      <div className="flex items-center pl-6">
        <Image
          src={iconMap[questionType]}
          alt={`${questionType} icon`}
          width={70}
          height={70}
          priority
        />
      </div>

      {/* Timer */}
      <div className="flex items-center">
        <Timer />
      </div>

      {/* Score and Lives indicator */}
      <div className="flex items-center gap-8 pr-6">
        <ScoreDisplay score={score} />

        {lifeImage && (
          <Image src={lifeImage} alt={`${lives} lives remaining`} width={160} height={60} />
        )}
      </div>
    </header>
  );
}
