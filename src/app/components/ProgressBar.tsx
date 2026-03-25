"use client";

import { GAME_CONFIG } from "../../lib/constants/gameConfig"
import { useGame } from "../providers/GameProvider"

interface ProgressBarProps {
  currentQuestionIndex: number
}

export default function ProgressBar({ currentQuestionIndex }: ProgressBarProps) {
  const totalQuestions = GAME_CONFIG.MAX_QUESTIONS
  const { state } = useGame()
  

  const checkpointLabels = ["Start", "Complete!"]
  const checkpoints = checkpointLabels.length

  const level = currentQuestionIndex + 1

  const progressPercentage = Math.min(
    100,
    Math.max(0, (level / totalQuestions) * 100)
  )

  console.log({ currentQuestionIndex, level, progressPercentage });

  return (
    <div className="w-full px-6 mt-8">
      <div className="relative w-full h-5 bg-gray-800 rounded-full">

        {/* Progress Fill */}
        <div
          className="absolute h-5 bg-green-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />

        {/* Difficulty Checkpoints */}
        {checkpointLabels.map((label, i) => {
          const positionPercent = (i / (checkpoints - 1)) * 100

          return (
            <div
              key={label}
              className="absolute flex flex-col items-center"
              style={{
                left: `${positionPercent}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 transition-all
                  ${
                    progressPercentage >= positionPercent
                      ? "bg-green-400 border-green-300 shadow-[0_0_6px_#22c55e]"
                      : "bg-gray-900 border-gray-500"
                  }`}
              />

              <span className="mt-2 text-lg font-semibold text-gray-800 whitespace-nowrap">
                {label}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-10 text-center">
        <span className="text-3xl font-extrabold text-gray-900">
          Level {level} / {totalQuestions}
        </span>
      </div>
    </div>
  )
}
