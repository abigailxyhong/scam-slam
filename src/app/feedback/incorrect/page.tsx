"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useGame } from "@/src/app/providers/GameProvider"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"
import { Button } from "@heroui/react"

export default function IncorrectFeedback() {
  const { state, dispatch } = useGame()

  const question = state.currentQuestion   // ← Pull the full question object


  const handleContinue = () => {
    
    console.log("Current Status:", state.status)
    if (state.status === "completed") {
      dispatch({ type: "COMPLETE_GAME" })
    } else {
      dispatch({ type: "NEXT_QUESTION"})
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
          <div className="w-full max-w-4xl space-y-10 mt-4">

            {/* WHY IT WAS WRONG */}
            <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-lg shadow-sm">
              <h2 className="text-4xl font-extrabold text-red-700 mb-3 flex items-center gap-3">
                <span>⚠️</span> WHY THIS WAS INCORRECT
              </h2>
              <p className="text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
                {question?.infoWhy}
              </p>
            </div>

            {/* HOW THE SCAM WORKS */}
            {question?.infoHow && (
              <div className="bg-yellow-50 border-l-8 border-yellow-500 p-6 rounded-lg shadow-sm">
              <h2 className="text-4xl font-extrabold text-yellow-700 mb-3 flex items-center gap-3">
                <span>🔍</span> HOW IT WORKS
              </h2>
              <p className="text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
                {question?.infoHow}
              </p>
            </div>)}

            {/* EXTRA TIPS */}
            {question?.infoMore && (
              <div className="bg-blue-50 border-l-8 border-blue-500 p-6 rounded-lg shadow-sm">
                <h2 className="text-4xl font-extrabold text-blue-700 mb-3 flex items-center gap-3">
                  <span>💡</span> WHAT TO DO 
                </h2>
                <p className="text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
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
                       shadow-md transition mb-16"
          >
            NEXT
          </Button>
        </div>
      </main>
    </motion.main>
  )
}
