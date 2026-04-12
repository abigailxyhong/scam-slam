interface ScoreDisplayProps {
  score: number
}

/**
 * Displays the player's current score in a styled container with a label
 * 
 * @param param0 The current score passed as a prop to be displayed in the component
 * @returns JSX element representing the score display
 */
export default function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <div className="flex items-start mt-4 ml-12">
      <div className="flex flex-row items-center bg-teal-200 border-2 border-emerald-400 rounded-2xl px-8 py-4 shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300 gap-4">

        {/* Label */}
        <p className="text-m tracking-widest text-teal-300 text-center">
          SCORE
        </p>

        {/* Score Value */}
        <p className="text-4xl font-bold text-teal-300 text-center">
          {score}
        </p>

      </div>
    </div>
  )
}
