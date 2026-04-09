"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useGame } from "../providers/GameProvider"
import type { Variants } from "framer-motion"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"
import Transition from "../components/MotionTransition"

/**
 * Displays the instructions screen shown before the game begins.
 * 
 * - Uses motion animations to sequentially fade in each instruction line
 * 
 * @returns JSX element showing the instructions for how to play the game, with a button to start the game and a link to go back to the name input screen
 */
export default function Instructions() {
    const { dispatch, state } = useGame()

    // Each instruction line, with important keywords highlighted
    const lines = [
        <>
            EACH LEVEL YOU WILL SEE A <span className="font-bold text-blue-700">TEXT, EMAIL</span> OR <span className="font-bold text-blue-700">WEBSITE PAGE</span>.
        </>,
        <>
            IT IS YOUR JOB TO DECIDE WHETHER THEY COME FROM A <span className="font-bold text-yellow-700">LEGITIMATE SOURCE</span> OR A <span className="font-bold text-red-600">CYBER CRIMINAL</span>.
        </>,
        <>
            PRESS THE <span className="font-bold text-green-700">GREEN BUZZER</span> FOR 'SAFE' AND <span className="font-bold text-red-600">RED BUZZER</span> FOR 'SCAM', BE CAREFUL AS YOU ONLY GET THREE LIVES!
        </>,
        <>
            YOU WILL BE GIVEN <span className="font-bold">{GAME_CONFIG.TIME_LIMIT} SECONDS</span> PER LEVEL, BUT IF YOU'RE UNSURE ALWAYS TAKE YOUR TIME TO CAREFULLY THINK AND ANALYSE THE PROMPT.
        </>,
        <>
            GET IT? <span className="font-bold">PRESS READY TO BEGIN!</span>
        </>
    ]

    // Parent animation: fades in the list and staggers each line
    const listVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.4
            }
        }
    }

    // Child animation: each instruction line slides upward and fades in
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.17, 0.55, 0.55, 1]
            }
        }
    }

    return (
        <Transition>
            <main className="min h-screen">
            <div className="flex flex-col items-start pl-16 pr-16">
                <h1 className="page-title mt-6">INSTRUCTIONS</h1>

                <motion.ul
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl mt-6 space-y-4"
                >
                    {lines.map((line, i) => (
                        <motion.li key={i} variants={itemVariants}>
                            {line}
                        </motion.li>
                    ))}
                </motion.ul>

                <Link
                    onClick={() => dispatch({ type: "SELECT_QUESTIONS" })}
                    href="/game-start"
                    className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-14 py-6 rounded-full text-4xl shadow-md transition mt-8"
                >
                    READY
                </Link>

                <Link
                    href="/name-input"
                    className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-14 py-6 rounded-full text-4xl shadow-md transition mt-6"
                >
                    BACK
                </Link>
            </div>
            </main>
        </Transition>
    )
}
