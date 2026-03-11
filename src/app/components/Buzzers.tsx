"use client"

import { useState } from "react"
import { useGame } from "../providers/GameProvider"
import { Answer } from "../../core/game/questions/baseQuestion"
import { useRouter } from "next/navigation"

interface BuzzersProps {
    correctAnswer: Answer
}

// Maybe need to change the routing logic here - update state instead

export default function Buzzers({ correctAnswer }: BuzzersProps) {
    const { state, dispatch } = useGame()
    const [pressed, setPressed] = useState(false)
    const router = useRouter()

    const handleAnswer = (choice: Answer) => {
        if (pressed) return

        setPressed(true)

        dispatch({ type: "ANSWER_SUBMITTED", payload: choice })


        if (choice === correctAnswer) {
            router.push("../feedback/post-level/correct")

        }
        else {
            router.push("../feedback/post-level/incorrect")

        }
    }


    return (

        <div className="flex flex-row space-x-14">
            <button
                onClick={() => handleAnswer("SCAM")}
                disabled={pressed}
                className="w-42 h-42 bg-red-600 hover:bg-red-500 active:scale-95
             text-white font-bold rounded-full text-6xl
             shadow-[0_8px_0_#7f1d1d] active:shadow-[0_2px_0_#7f1d1d]
             transition-all duration-150 flex items-center justify-center"
            >
                SCAM
            </button>
            <button
                onClick={() => handleAnswer("SAFE")}
                disabled={pressed}
                className="w-42 h-42 bg-green-500 hover:bg-green-400 active:scale-95
             text-white font-bold rounded-full text-6xl
             shadow-[0_8px_0_#14532d] active:shadow-[0_2px_0_#14532d]
             transition-all duration-150
             flex items-center justify-center"
            >
                SAFE
            </button>
        </div>


    )
}