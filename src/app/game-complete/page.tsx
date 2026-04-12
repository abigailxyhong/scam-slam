"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

import { useGame } from "../providers/GameProvider"
import type { Variants } from "framer-motion"
import Transition from "../components/client/MotionTransition"
import HomePageLink from "../components/client/LinkHomePage"

/**
 * Displays the final "Game Over" screen
 * - Shows the player's final score and a QR code linking to more information
 * 
 * @returns JSX element showing the game complete screen, including final score, QR code, and links to the leaderboard and home page
 */
export default function GameOver() {
    const { dispatch, state } = useGame()

    /**
     * Animation variants for the pop-in effect
     * Each element starts slightly smaller and fades in
     */
    const popVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }
        }
    }

    return (
        <Transition>
            <main className="min h-screen items-center justify-center flex flex-col">
                
                <motion.h1
                    variants={popVariants}
                    initial="hidden"
                    animate="visible"
                    className="page-title drop-shadow-lg mb-10"
                >
                    GAME COMPLETE!
                </motion.h1>

                <motion.div
                    variants={popVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-semibold text-gray-800 mb-6"
                >
                    Final Score: <span className="text-blue-700">{state.score}</span>
                </motion.div>

                <motion.div
                    variants={popVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                    className="text-3xl font-semibold text-gray-800 mb-4 max-w-2xl text-center"
                >
                    Scan the QR code for more information on online frauds and how to protect yourself!
                </motion.div>

                <motion.div
                    variants={popVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                    className="items-center"
                >
                    <Image 
                        src="/images/qr-code.png"
                        alt="QR Code"
                        width={200}
                        height={200}
                        className="mb-8"
                    />
                </motion.div>

                <motion.div
                    variants={popVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center space-y-6"
                >
                    {/* Updates game state before navigating to the leaderboard */}
                    <Link
                        onClick={() => dispatch({ type: "UPDATE_GAME" })}

                        href="/leaderboard"
                        className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-16 py-6 rounded-full text-4xl shadow-md transition"
                    >
                        SEE LEADERBOARD
                    </Link>

                    <HomePageLink />
                </motion.div>
            </main>
        </Transition>
    )
}
