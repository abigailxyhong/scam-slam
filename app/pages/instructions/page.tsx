"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useGame } from "@/app/lib/game/logic/gameContext"
import type { Variants } from "framer-motion"
import { GAME_CONFIG } from "@/app/lib/game/logic/gameConfig"


export default function Instructions() {
    const { dispatch, state } = useGame()

    if (!state.playerName) {
        console.error("Player name missing")
        return
    }


    const lines = [
        <>
            EACH LEVEL YOU WILL BE <span className="font-bold text-blue-700">TEXTED, EMAILED, CALLED</span> OR <span className="font-bold text-blue-700">SHOWN A WEBSITE</span>.
        </>,
        <>
            IT IS YOUR JOB TO DECIDE WHETHER THEY COME FROM A <span className="font-bold text-yellow-700">LEGITIMATE SOURCE</span> OR A <span className="font-bold text-red-600">CYBER CRIMINAL</span>.
        </>,
        <>
            PRESS THE <span className="font-bold text-green-700">GREEN BUZZER</span> FOR 'SAFE' AND <span className="font-bold text-red-600">RED BUZZER</span> FOR 'SCAM'.
        </>,
        <>
            YOU WILL BE GIVEN <span className="font-bold">{GAME_CONFIG.TIME_LIMIT} SECONDS</span> PER LEVEL.
        </>,
        <>
            GET IT? <span className="font-bold">PRESS READY TO BEGIN!</span>
        </>
    ]

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
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="justify-start min-h-screen px-4"
        >
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
                    onClick={() => dispatch({ type: "START_GAME" })}
                    href="/pages/game-start"
                    className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-14 py-6 rounded-full text-4xl shadow-md transition mt-8"
                >
                    READY
                </Link>

                <Link
                    href="/pages/name-input"
                    className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-14 py-6 rounded-full text-4xl shadow-md transition mt-6"
                >
                    BACK
                </Link>
            </div>
        </motion.main>
    )
}
