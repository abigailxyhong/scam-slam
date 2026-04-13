'use client'

import { Button } from "@heroui/react"
import { useGame } from "../../providers/GameProvider"

export default function FeedbackContinueButton() {
    const { dispatch } = useGame()

    const handleContinue = () => {
        dispatch({ type: "CHECK_GAME_COMPLETE" })
    }
    return (
        <Button
            onClick={handleContinue}
            className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-12 py-8 rounded-full text-4xl
                               shadow-md transition"
        >
            NEXT
        </Button>
    )
}