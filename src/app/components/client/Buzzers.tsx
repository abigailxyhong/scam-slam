"use client"

import { useState } from "react"
import { useGame } from "../../providers/GameProvider"
import { Answer } from "@/src/core/game/questions/baseQuestion"

/**
 * Renders two large buzzer buttons ("SCAM" and "SAFE") 
 * and dispatches the player's answer to the game state
 * 
 * - Prevent double-pressing by locking the buttons after the first click
 * - Sends both the selected answer and the remaining time to the reducer
 * - Uses GameProvider's dispatch to update the game state based on the player's choice
 * 
 * @returns JSX element containing the buzzer buttons
 */
export default function Buzzers() {
    const { state, dispatch } = useGame()

    // Local state to track if a buzzer has been pressed
    const [pressed, setPressed] = useState(false)

    /**
     * Handles a buzzer press
     * - Dispatches the answer and remaining time to the game provider
     * @param choice the player's selected answer ("SCAM" or "SAFE")
     */
    const handleAnswer = (choice: Answer) => {
        if (pressed) return
        setPressed(true)

        dispatch({ 
            type: "HANDLE_ANSWER", 
            payload: {
                answer: choice, 
                timeLeft: state.timeLeft
            }
        })
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