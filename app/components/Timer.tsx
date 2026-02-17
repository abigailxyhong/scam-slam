"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useGame } from "../lib/game/gameContext"


export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(20)
    const { state, dispatch } = useGame()
    const router = useRouter()

    useEffect(() => {
        if (timeLeft === 0) {
            router.push("../feedback/post-level/time-out")
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
                width={100}
                height={100}
                priority
            />

            {/* Countdown number */}
            <span
                className={`absolute translate-x-16 text-3xl font-bold ${timeLeft <= 5 ? "text-red-500" : "text-white"
                    }`}
            >
                : {timeLeft}s
            </span>
        </div>
    )
}
