'use client'

import Image from "next/image"
import { useGame } from "@/src/app/providers/GameProvider"
import Transition from "../../components/client/MotionTransition"
import FeedbackContinueButton from "../../components/client/FeedbackContinueButton"

/**
 * Displays the feedback screen for a correct answer
 * @returns JSX element showing the correct feedback, including why the answer was correct and how it works, along with a button to continue to the next question or end the game if it was the last question
 */
export default function CorrectFeedback() {
  const { state } = useGame()

  // Get the current question from the game state
  const question = state.currentQuestion

  return (
    <Transition>
      <main className="feedback-content">
        <div className="feedback-header">
          <Image
            src="/images/icons/thumbs-up.png"
            alt="thumbs up"
            width={50}
            height={50}
            className="h-25 w-auto mt-8"
          />

          <h1 className="page-title mt-6">CORRECT!</h1>
        </div>

          {/* Info Section */}
          <div className="feedback-card bg-green-50 border-l-8 border-green-500">
            <h2 className="text-4xl text-green-700">
              <span>✅</span> WHY YOU GOT IT RIGHT
              </h2>
            <p className="feedback-text">{question?.indicators}</p>
          </div>

        <FeedbackContinueButton />
      </main>
    </Transition>
  )
}

