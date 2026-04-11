"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

import { useGame } from "../providers/GameProvider"
import Transition from "../components/MotionTransition"

/**
 * Collects the player's display name before starting the game
 * 
 * - Validates that the name is not empty and contains only letters
 * - Dispatches an action to create a new game with the entered name
 * - Provides a button to continue to the instructions screen and a link to go back to the home page
 * 
 * @returns JSX element showing the name input screen with validation and navigation options
 */
export default function NameInput() {
    const router = useRouter()
    const { dispatch } = useGame()

    //Local state for the name input and error message
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    // Validates the name and continues to the next screen
    const handleContinue = () => {
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
        dispatch({ type: "CREATE_GAME", payload: trimmed })
        router.push("/instructions")
    }

    return (
        <Transition>
            <main className="flex flex-col items-center justify-start min-h-screen px-4">
                <h1 className="page-title mt-6">
                    ENTER A NICKNAME
                </h1>
                <p className="text-4xl mt-4 mb-8">
                    *USE YOUR FIRST NAME OR A NICKNAME
                </p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter a name"
                    className="
                    px-10 py-6 
                    text-3xl 
                    rounded-lg 
                    bg-stone-100
                    border border-gray-300 
                    text-zinc-700 text-center 
                    focus:outline-none 
                    focus:ring-2
                    focus:ring-emerald-400
                    mb-4"
                />
                {error && (
                    <div className="text-red-500 text-2xl ">
                        {error}
                    </div>
                )}
                <button
                    onClick={handleContinue}
                    className="px-14 py-6 text-4xl rounded-full bg-teal-500 hover:bg-teal-300 font-bold mt-8"
                >
                    CONTINUE
                </button>
                <Link
                    href="/"
                    className=" bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-14 py-6 rounded-full text-4xl shadow-md transition mt-6">
                    BACK
                </Link>

            </main>
        </Transition>
    )
}