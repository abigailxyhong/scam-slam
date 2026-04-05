"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useGame } from "@/src/app/providers/GameProvider"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"
import { Button } from "@heroui/react"
import Transition from "../../components/MotionTransition"

export default function IncorrectFeedback() {
  const { state, dispatch } = useGame()

  const question = state.currentQuestion   // ← Pull the full question object


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
              <h2 className="feedback-section-title text-red-700">
                <span>⚠️</span> WHY THIS WAS INCORRECT
              </h2>
              <p className="feedback-text">
                {question?.infoWhy}
              </p>
            </div>

            {/* How the scam works */}
            {question?.infoHow && (
              <div className="bg-yellow-50 border-l-8 border-yellow-500 p-6 rounded-lg shadow-sm">
                <h2 className="feedback-section-title text-yellow-700">
                  <span>🔍</span> HOW IT WORKS
                </h2>
                <p className="feedback-text">
                  {question?.infoHow}
                </p>
              </div>)}

            {/* Extra tips */}
            {question?.infoMore && (
              <div className="bg-blue-50 border-l-8 border-blue-500 p-6 rounded-lg shadow-sm">
                <h2 className="feedback-section-title text-blue-700">
                  <span>💡</span> WHAT TO DO
                </h2>
                <p className="feedback-text">
                  {question.infoMore}
                </p>
              </div>
            )}
          </div>

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
