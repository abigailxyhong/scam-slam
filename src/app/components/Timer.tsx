"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useGame } from "../providers/GameProvider"

export default function Timer() {
  const { state } = useGame()

  return (
    <div className="relative flex items-center justify-center mt-6">
      <Image
        src="/images/icons/timer.png"
        alt="Timer icon"
        width={70}
        height={100}
        priority
      />

      <span
        className={`absolute translate-x-16 text-5xl font-bold ${
          state.timeLeft <= 5 ? "text-red-500" : "text-white"
        }`}
      >
        {state.timeLeft}
      </span>
    </div>
  )
}
