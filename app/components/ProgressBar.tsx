import { GAME_CONFIG } from "../lib/game/gameConfig"
import { useGame } from "../lib/game/gameContext"


interface ProgressBarProps {
  currentQuestion: number
}

export default function ProgressBar({
  currentQuestion,
}: ProgressBarProps) {
  const totalQuestions = GAME_CONFIG.MAX_QUESTIONS

  const difficultyLabels = ["Easy", "Medium", "Hard", "Very Hard"]
  const { state, dispatch } = useGame()

  const checkpoints = difficultyLabels.length

  // Clamp value to avoid overflow
  const safeQuestion = Math.min(
    Math.max(currentQuestion, 0),
    totalQuestions
  )

  const progressPercentage = (safeQuestion / totalQuestions) * 100

  return (
    <div className="w-7xl px-6 mt-12 ml-18">
      <div className="relative w-full h-5 bg-gray-800 rounded-full">

        {/* Progress Fill */}
        <div
          className="absolute h-5 bg-green-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />

        {/* Difficulty Checkpoints */}
        {difficultyLabels.map((label, index) => {
          const positionPercent = (index / (checkpoints - 1)) * 100

          return (
            <div
              key={label}
              className="absolute flex flex-col items-center"
              style={{
                left: `${positionPercent}%`,
                transform: "translateX(-50%)",
              }}
            >
              {/* Circle */}
              <div
                className={`w-6 h-6 rounded-full border-2 transition-all
                  ${progressPercentage >= positionPercent
                    ? "bg-green-400 border-green-300 shadow-[0_0_6px_#22c55e]"
                    : "bg-gray-900 border-gray-500"
                  }`}
              />

              {/* Label */}
              <span className="mt-2 text-lg font-semibold text-gray-800 whitespace-nowrap">
                {label}
              </span>


            </div>
          )
        })}
      </div>
      {/* Level Indicator */}
      <div className="mt-10 text-center">
        <span className="text-3xl font-extrabold text-gray-900">
          Level {state.level} / {totalQuestions}
        </span>
      </div>
    </div>
  )
}
