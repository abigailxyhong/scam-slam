"use client"

import Link from "next/link"
import Image from "next/image"
import { useGame } from "@/app/lib/game/logic/gameContext"
import { motion } from "framer-motion"
import { GAME_CONFIG } from "@/app/lib/game/logic/gameConfig"

export default function CorrectFeedback() {
  const { state, dispatch } = useGame()

  const question = state.currentQuestion  // ← THIS IS THE KEY

  const isFinalLevel = state.level >= GAME_CONFIG.MAX_QUESTIONS

  const nextHref = isFinalLevel
    ? "/pages/game-complete"
    : "/pages/questions/question-card"

  const handleContinue = () => {
    if (!isFinalLevel) {
      dispatch({ type: "NEXT_QUESTION" })
    }
  }

  console.log("Current Question in Feedback:", question?.infoWhy)  // Debug log to check question data

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
              src="/images/icons/thumbs-up.png"
              alt="thumbs up"
              width={50}
              height={50}
              className="h-25 w-auto mt-8"
            />

            <h1 className="page-title mt-6">CORRECT!</h1>
          </div>

          {/* FEEDBACK CONTENT */}
          <div className="text-3xl max-w-6xl leading-relaxed space-y-8">

            <p className="font-bold text-green-700 whitespace-pre-line">
              {question?.infoWhy}
            </p>

            <p className="text-gray-800 whitespace-pre-line">
              {question?.infoHow}
            </p>

            {/* {question?.infoMore && (
              <p className="text-gray-700 italic whitespace-pre-line">
                {question?.infoMore}
              </p>
            )} */}
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
            {isFinalLevel ? "FINISH" : "CONTINUE"}
          </Link>
        </div>
      </main>
    </motion.main>
  )
}
