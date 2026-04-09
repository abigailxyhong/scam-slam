"use client"

import Image from "next/image"
import { useGame } from "@/src/app/providers/GameProvider"
import Transition from "../../components/MotionTransition"
import { Button } from "@heroui/react"

export default function CorrectFeedback() {
  const { state, dispatch } = useGame()

  const question = state.currentQuestion

  const handleContinue = () => {
    dispatch({ type: "CHECK_GAME_COMPLETE" })
  }

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
            <p className="feedback-text">{question?.infoWhy}</p>
          </div>

          {question?.infoHow && (
            <div className="bg-yellow-50 border-l-8 border-yellow-500 p-6 rounded-lg shadow-sm">
              <h2 className="text-4xl font-extrabold text-yellow-700 mb-3 flex items-center gap-3">
                <span>🔍</span> HOW IT WORKS
              </h2>
              <p className="text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
                {question?.infoHow}
              </p>
            </div>)}

        <Button
          onClick={handleContinue}
          className="bg-teal-500 hover:bg-teal-300 text-zinc-800
                       font-semibold px-14 py-6 rounded-full text-4xl
                       shadow-md transition mb-16"
        >
          NEXT
        </Button>
      </main>
    </Transition>
  )
}

