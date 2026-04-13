"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useGame } from "../../providers/GameProvider"
import { createGame } from "@/src/lib/actions"

/**
 * Client component that renders an input form for the player to enter their name at the start of the game
 * 
 * - Validates that the input is a single word containing only letters
 * - Displays error messages for invalid input
 * - On valid submission, calls the createGame server action to initialize a new game in the database
 * - Dispatches the new game ID to the GameProvider context
 * - Navigates to the instructions page to start the game flow
 * @returns JSX client component containing name input field and continue button
 */
export default function NameInputForm() {
    const { dispatch } = useGame()
    const router = useRouter()

    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const handleContinue = async () => {
        const trimmed = name.trim();

        if (!trimmed) {
            setError("*Please enter a name to continue")
            return
        }

        if (!/^[A-Za-z]+$/.test(trimmed)) {
            setError("*Please enter a single word (letters only).")
            return
        }

        setError("");
     
        try {
            // Call the server action
            console.log("URL exists:", !!process.env.NEXT_PUBLIC_SUPABASE_URL);
            console.log("Key length:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length);

            const gameData = await createGame(trimmed)

            // Dispatch the ID (converted to string) to your context
            dispatch({ type: "SET_GAME_ID", payload: String(gameData.id) })

            router.push('/instructions')
        } catch (err) {
            alert('Failed to create game')
        }
    }

    return (

        <div className="flex flex-col items-center">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a name"
                className="px-10 py-6 text-3xl rounded-lg bg-stone-100 border border-gray-300 text-zinc-700 text-center focus:outline-none focus:ring-2 focus:ring-emerald-400 mb-4"
            />

            {error && <div className="text-red-500 text-2xl mb-4">{error}</div>}

            <button
                onClick={handleContinue}
                className="px-14 py-6 text-4xl rounded-full bg-teal-500 hover:bg-teal-300 font-bold mt-4"
            >
                CONTINUE
            </button>
        </div>

    )
}