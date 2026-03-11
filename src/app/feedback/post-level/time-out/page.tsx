"use client"

import Link from "next/link"
import Image from "next/image"
import { useGame } from "@/src/app/providers/GameProvider"

export default function TimeOut() {
  const { state } = useGame()

  const question = state.currentQuestion   // ← Pull the question

  const isOutOfLives = state.lives <= 0

  const nextHref = isOutOfLives
    ? "/pages/game-complete"
    : "/pages/questions/question-card"

  return (
    <main className="min-h-screen px-4 flex">
      <div className="flex flex-col items-center pl-16 pr-16 gap-10 w-full">

        {/* Header */}
        <div className="flex flex-row gap-6 items-center">
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
            <h2 className="text-4xl font-extrabold text-red-700 mb-3 flex items-center gap-3">
              <span>⚠️</span> {question?.correctAnswer} WAS THE CORRECT ANSWER
            </h2>
            <p className="text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
              {question?.infoWhy}
            </p>
          </div>

          {/* HOW */}
          <div className="bg-yellow-50 border-l-8 border-yellow-500 p-6 rounded-lg shadow-sm">
            <h2 className="text-4xl font-extrabold text-yellow-700 mb-3 flex items-center gap-3">
              <span>🔍</span> HOW THIS SCAM WORKS
            </h2>
            <p className="text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
              {question?.infoHow}
            </p>
          </div>

          {/* MORE / PROTECTION */}
          {question?.infoMore && (
            <div className="bg-blue-50 border-l-8 border-blue-500 p-6 rounded-lg shadow-sm">
              <h2 className="text-4xl font-extrabold text-blue-700 mb-3 flex items-center gap-3">
                <span>🛡️</span> HOW TO PROTECT YOURSELF
              </h2>
              <p className="text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
                {question.infoMore}
              </p>
            </div>
          )}
        </div>


        {/* Continue Button */}
        <Link
          href={nextHref}
          className="bg-teal-500 hover:bg-teal-300 text-zinc-800
                     font-semibold px-14 py-6 rounded-full text-4xl
                     shadow-md transition mb-16"
        >
          {isOutOfLives ? "FINISH" : "CONTINUE"}
        </Link>
      </div>
    </main>
  )
}
