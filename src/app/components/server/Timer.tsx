import Image from "next/image"
import { useGame } from "../../providers/GameProvider"

/**
 * Displays the countdown timer
 * 
 * - Reads the remaining time from the global game state using the GameProvider
 * - Changes the timer text color to red when time is running low (5 seconds or less)
 * - Uses an icon to visually accompany the numeric timer
 * @returns JSX element representing the timer
 */
export default function Timer() {
  const { state } = useGame()

  return (
    <div className="relative flex items-center justify-center mt-6">
      <Image
        src="/images/icons/timer.png"
        alt="Timer icon"
        width={70}
        height={100}
        priority
      />

      <span
        className={`absolute translate-x-16 text-5xl font-bold ${
          state.timeLeft <= 5 ? "text-red-500" : "text-white"
        }`}
      >
        {state.timeLeft}
      </span>
    </div>
  )
}
