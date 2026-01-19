"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function NameInput() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [error, setError] = useState("")

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
        localStorage.setItem("playerName", trimmed)

        router.push("/pages/instructions")
    }

    return (
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
                <div className="error-message">
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
    )
}