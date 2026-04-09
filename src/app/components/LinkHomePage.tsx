"use client"

import { useGame } from "../providers/GameProvider";
import Link from "next/link";

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