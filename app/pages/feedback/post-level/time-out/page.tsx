"use client"

import Link from "next/link"
import Image from "next/image"
import { useGame } from "@/app/lib/game/logic/gameContext"

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
        <div className="text-3xl max-w-4xl leading-relaxed space-y-8">

          <p className="font-bold text-red-600 whitespace-pre-line">
            {question?.infoWhy}
          </p>

          <p className="text-gray-800 whitespace-pre-line">
            {question?.infoHow}
          </p>

          {question?.infoMore && (
            <p className="text-gray-700 italic whitespace-pre-line">
              {question.infoMore}
            </p>
          )}
        </div>

        <div className="grow" />

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
