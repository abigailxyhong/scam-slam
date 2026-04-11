"use client"

import Link from "next/link";
import { useGame } from "../providers/GameProvider";

/**
 * Renders a navigation link that returns the player to the home page
 *
 * - Uses the global GameProvider to reset all game state before navigating
 * - Wraps the action in a Next.js <Link> so navigation is client‑side and fast
 */
export default function HomePageLink() {
    const { state, dispatch } = useGame()
    return (
        <Link
            onClick={() => dispatch({ type: "RESET_GAME" })}
            href="/"
            className="bg-gray-300 hover:bg-gray-200 text-zinc-800 font-semibold px-16 py-6 rounded-full text-3xl shadow-md transition"
        >
            HOME PAGE
        </Link>
    )
}