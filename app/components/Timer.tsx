"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(20)

    useEffect(() => {
        if (timeLeft === 0) return

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timeLeft])

    return (
        <div className="relative flex items-center justify-center">
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
                :{timeLeft}s
            </span>
        </div>
    )
}
