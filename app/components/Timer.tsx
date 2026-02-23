"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useGame } from "../lib/game/logic/gameContext"
import { GAME_CONFIG } from "../lib/game/logic/gameConfig"


export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(GAME_CONFIG.TIME_LIMIT)
    const { state, dispatch } = useGame()
    const router = useRouter()

    useEffect(() => {
        if (timeLeft === 0) {
            router.push("../feedback/post-level/time-out")
        dispatch({ type: "ANSWER_SUBMITTED", payload: "TIME-OUT" })
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timeLeft])

    return (
        <div className="relative flex items-center justify-center mt-6">
            <Image
                src="/images/icons/timer.png"
                alt="Timer icon"
                width={70}
                height={100}
                priority
            />

            {/* Countdown number */}
            <span
                className={`absolute translate-x-16 text-5xl font-bold ${timeLeft <= 5 ? "text-red-500" : "text-white"
                    }`}
            >
                {timeLeft}
            </span>
        </div>
    )
}
