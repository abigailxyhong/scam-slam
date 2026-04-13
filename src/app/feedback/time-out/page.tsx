import Image from "next/image"
import { useGame } from "@/src/app/providers/GameProvider"
import Transition from "../../components/client/MotionTransition"
import FeedbackContinueButton from "../../components/client/FeedbackContinueButton"

/**
 * Displays the feedback screen for when a user runs out of time
 * - Shows the correct answer, why it was correct, how it works, and how to protect yourself, 
 * along with a button to continue to the next question or 
 * end the game if it was the last question
 * @returns JSX element showing the time out feedback
 */
export default function TimeOut() {
  const { state } = useGame()

  // Get the question that the player ran out of time on
  const question = state.currentQuestion


  return (
    <Transition>
      <main className="feedback-content">
        <div className="feedback-header">
          <Image
            src="/images/icons/skull.png"
            alt="ran out of time"
            width={50}
            height={50}
            className="h-25 w-auto mt-8"
          />

          <h1 className="page-title mt-6">
            RAN OUT OF TIME
          </h1>
        </div>

        {/* FEEDBACK CONTENT */}
        <div className="w-full max-w-6xl space-y-10 mt-4">

          {/* WHY */}
          <div className="feedback-card bg-red-50 border-l-8 border-red-500 p-6 rounded-lg shadow-sm">
            <h2 className="text-4xl text-red-700">
              <span>⚠️</span> {question?.correctAnswer} WAS THE CORRECT ANSWER
            </h2>
            <p className="feedback-text">
              {question?.indicators}
            </p>
          </div>

          {question?.scamInfo && (
            <div className="feedback-card bg-yellow-50 border-l-8 border-yellow-500 p-6 rounded-lg shadow-sm">
              <h2 className="text-4xl font-extrabold text-yellow-700 mb-3 flex items-center gap-3">
                <span>🔍</span> HOW IT WORKS
              </h2>
              <p className="text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
                {question?.scamInfo}
              </p>
            </div>)}

          {/* MORE / PROTECTION */}
          {question?.safetyTips && (
            <div className="feedback-card bg-blue-50 border-l-8 border-blue-500">
              <h2 className="text-4xl text-blue-700">
                <span>🛡️</span> SAFETY TIPS
              </h2>
              <p className="feedback-text">
                {question.safetyTips}
              </p>
            </div>
          )}
        </div>

        <FeedbackContinueButton />

      </main>
    </Transition>
  )
}
