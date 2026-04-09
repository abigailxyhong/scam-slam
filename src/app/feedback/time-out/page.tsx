"use client"

import Link from "next/link"
import Image from "next/image"
import { useGame } from "@/src/app/providers/GameProvider"
import { Button } from "@heroui/react"
import Transition from "../../components/MotionTransition"


export default function TimeOut() {
  const { state, dispatch } = useGame()

  const question = state.currentQuestion   // ← Pull the question


  const handleContinue = () => {

    dispatch({ type: "CHECK_GAME_COMPLETE" })

  }

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
            <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-lg shadow-sm">
              <h2 className="feedback-section-title text-red-700">
                <span>⚠️</span> {question?.correctAnswer} WAS THE CORRECT ANSWER
              </h2>
              <p className="feedback-text">
                {question?.infoWhy}
              </p>
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

            {/* MORE / PROTECTION */}
            {question?.infoMore && (
              <div className="feedback-cardbg-blue-50 border-l-8 border-blue-500">
                <h2 className="feedback-section-title text-blue-700">
                  <span>🛡️</span> HOW TO PROTECT YOURSELF
                </h2>
                <p className="feedback-text">
                  {question.infoMore}
                </p>
              </div>
            )}
          </div>


          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            className="bg-teal-500 hover:bg-teal-300 text-zinc-800
                     font-semibold px-14 py-6 rounded-full text-4xl
                     shadow-md transition mb-16 items-center"
          >
            NEXT
          </Button>
      </main>
    </Transition>
  )
}
