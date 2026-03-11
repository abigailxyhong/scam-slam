"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useGame } from "../providers/GameProvider"

export default function Timer() {
  const { state, dispatch } = useGame()
  const router = useRouter()

  useEffect(() => {
    // If time hits zero, trigger timeout behaviour
    if (state.timeLeft === 0) {
      dispatch({ type: "ANSWER_SUBMITTED", payload: "TIME-OUT" })
      router.push("../feedback/post-level/time-out")
      return
    }

    const interval = setInterval(() => {
      dispatch({ type: "TICK" })
    }, 1000)

    return () => clearInterval(interval)
  }, [state.timeLeft, dispatch, router])

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
