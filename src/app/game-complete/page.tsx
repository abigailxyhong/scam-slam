"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useGame } from "../providers/GameProvider"
import type { Variants } from "framer-motion"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"

export default function GameOver() {
    const { dispatch, state } = useGame()

    const pageVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] }
        }
    }

    const popVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }
        }
    }

    return (
        <motion.main
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center min-h-screen px-4"
        >
            <motion.h1
                variants={popVariants}
                initial="hidden"
                animate="visible"
                className="page-title drop-shadow-lg mb-10"
            >
                GAME COMPLETE!
            </motion.h1>

            {/* <motion.div
                variants={popVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="text-4xl font-semibold text-gray-800 mb-12">
                Questions Answered Correctly: <span className="text-green-600">{state.questionsCorrect}/{GAME_CONFIG.MAX_QUESTIONS}</span>
            </motion.div> */}

            <motion.div
                variants={popVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="text-4xl font-semibold text-gray-800 mb-12"
            >
                Final Score: <span className="text-blue-700">{state.score}</span>
            </motion.div>

            <motion.div
                variants={popVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center space-y-6"
            >
                <Link
                    onClick={() => dispatch({ type: "UPDATE_GAME" })}

                    href="/leaderboard"
                    className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-16 py-6 rounded-full text-4xl shadow-md transition"
                >
                    SEE LEADERBOARD
                </Link>

                <Link
                    onClick={() => dispatch({ type: "RESET_GAME" })}
                    href="/"
                    className="bg-gray-300 hover:bg-gray-200 text-zinc-800 font-semibold px-16 py-6 rounded-full text-3xl shadow-md transition"
                >
                    HOME PAGE
                </Link>
            </motion.div>
        </motion.main>
    )
}
