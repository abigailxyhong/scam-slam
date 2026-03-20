"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import type { Variants } from "framer-motion"

export default function GameStart() {
    const router = useRouter()
    const [count, setCount] = useState(3)

    // Countdown logic
    useEffect(() => {
        if (count === 0) {
            router.push("/questions")
            return
        }

        const timer = setTimeout(() => {
            setCount(prev => prev - 1)
        }, 1000)

        return () => clearTimeout(timer)
    }, [count, router])

    // Fade-in animation for the whole page
    const pageVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] }
        }
    }

    // Countdown pop animation
    const countVariants: Variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: [0.17, 0.55, 0.55, 1] }
        }
    }

    return (
        <motion.main
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center min-h-screen"
        >
            <h1 className="text-teal-950 text-7xl font-bold tracking-wide mb-10">
                GAME WILL BEGIN IN
            </h1>

            <motion.div
                key={count} // triggers animation on each number change
                variants={countVariants}
                initial="hidden"
                animate="visible"
                className="text-[10rem] font-extrabold text-teal-800 drop-shadow-lg"
            >
                {count}
            </motion.div>
        </motion.main>
    )
}
