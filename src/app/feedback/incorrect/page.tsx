"use client"

import Image from "next/image"
import { useGame } from "@/src/app/providers/GameProvider"
import { Button } from "@heroui/react"
import Transition from "../../components/client/MotionTransition"

/**
 * Displays the feedback screen for an incorrect answer,
 * showing why the answer was incorrect and how it works, 
 * along with a button to continue to the next question or 
 * end the game if it was the last question
 * 
 * @returns JSX element showing the incorrect feedback
 */
export default function IncorrectFeedback() {
  const { state, dispatch } = useGame()

  // Get the question just answered from the game state
  const question = state.currentQuestion   

  /**
   * Moves the game forward by dispatching a reducer action to check 
   * whether the game is finished, which will either move to the next question or 
   * end the game if it was the last question
   */
  const handleContinue = () => {
    dispatch({ type: "CHECK_GAME_COMPLETE" })
  }

  return (
    <Transition>
      <main className="feedback-content">
        <div className="feedback-header">
            <Image
              src="/images/icons/skull.png"
              alt="incorrect"
              width={50}
              height={50}
              className="h-25 w-auto mt-8"
            />

            <h1 className="page-title mt-6">INCORRECT</h1>
          </div>

          <div className="w-full max-w-4xl space-y-10 mt-4">

            {/* Info Section */}
            <div className="feedback-card bg-red-50 border-l-8 border-red-600">
              <h2 className="text-4xl text-red-700">
                <span>⚠️</span> WHY THIS WAS INCORRECT
              </h2>
              <p className="feedback-text">
                {question?.indicators}
              </p>
            </div>

            {/* How the scam works */}
            {question?.scamInfo && (
              <div className="feedback-card bg-yellow-50 border-l-8 border-yellow-500 p-6 rounded-lg shadow-sm">
                <h2 className="text-4xl text-yellow-700">
                  <span>🔍</span> HOW IT WORKS
                </h2>
                <p className="feedback-text">
                  {question?.scamInfo}
                </p>
              </div>)}

            {/* Extra tips */}
            {question?.safetyTips && (
              <div className="feedback-card bg-blue-50 border-l-8 border-blue-500 p-6 rounded-lg shadow-sm">
                <h2 className="text-4xl text-blue-700">
                  <span>💡</span> SAFETY TIPS
                </h2>
                <p className="feedback-text">
                  {question.safetyTips}
                </p>
              </div>
            )}
          </div>

          <Button
            onClick={handleContinue}
            className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-12 py-8 rounded-full text-4xl
                       shadow-md transition"
          >
            NEXT
          </Button>
      </main>
    </Transition>
  )
}
