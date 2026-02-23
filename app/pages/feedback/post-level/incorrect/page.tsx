"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useGame } from "@/app/lib/game/logic/gameContext"
import { GAME_CONFIG } from "@/app/lib/game/logic/gameConfig"

export default function IncorrectFeedback() {
  const { state, dispatch } = useGame()

  const question = state.currentQuestion   // ← Pull the full question object

  const isFinalLevel = state.level >= GAME_CONFIG.MAX_QUESTIONS
  const isOutOfLives = state.lives <= 0

  const nextHref =
    isOutOfLives || isFinalLevel
      ? "/pages/game-complete"
      : "/pages/questions/question-card"

  const handleContinue = () => {
    if (!isOutOfLives && !isFinalLevel) {
      dispatch({ type: "NEXT_QUESTION" })
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="justify-start min-h-screen px-4"
    >
      <main className="min-h-screen px-4 flex">
        <div className="flex flex-col items-center pl-16 pr-16 gap-10 w-full">

          {/* Header */}
          <div className="flex flex-row gap-6 items-center">
            <Image
              src="/images/icons/skull.png"
              alt="incorrect"
              width={50}
              height={50}
              className="h-25 w-auto mt-8"
            />

            <h1 className="page-title mt-6">INCORRECT</h1>
          </div>

          {/* FEEDBACK CONTENT */}
          <div className="text-3xl max-w-4xl leading-relaxed space-y-8">

            <p className="font-bold text-red-600 whitespace-pre-line">
              {question?.infoWhy}
            </p>

            <p className="text-gray-800 whitespace-pre-line">
              {question?.infoHow}
            </p>

            {question.infoMore && (
              <p className="text-gray-700 italic whitespace-pre-line">
                {question?.infoMore}
              </p>
            )}
          </div>

          <div className="grow" />

          {/* Continue Button */}
          <Link
            onClick={handleContinue}
            href={nextHref}
            className="bg-teal-500 hover:bg-teal-300 text-zinc-800
                       font-semibold px-14 py-6 rounded-full text-4xl
                       shadow-md transition mb-16"
          >
            {isOutOfLives || isFinalLevel ? "FINISH" : "CONTINUE"}
          </Link>
        </div>
      </main>
    </motion.main>
  )
}
