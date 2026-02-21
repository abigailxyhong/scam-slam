"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

import QuestionHeader from "@/app/components/QuestionHeader"
import ProgressBar from "@/app/components/ProgressBar"
import Buzzers from "@/app/components/Buzzers"
import { useGame } from "@/app/lib/game/gameContext"
import { selectQuestion } from "@/app/lib/game/questionSelector"
import EmailCard from "@/app/components/EmailCard"
import WebsiteCard from "@/app/components/WebsiteCard"
import MessageCard from "@/app/components/MessageCard"




export default function QuestionCard() {
    const { state, dispatch } = useGame()
    const { questionType, difficulty, question } = selectQuestion(state.level)
    //dispatch({ type: "SET_QUESTIONS", payload: [question]})

    useEffect(() => {
        dispatch({ type: "SET_QUESTIONS", payload: [question] })
    }, [question, dispatch])

    return (
        <main className="flex flex-col justify-start min-h-screen px-4 pl-6">
            <QuestionHeader questionType={questionType} level={state.level} lives={state.lives} score={state.score} />

            <div className="flex w-full h-[65vh] px-6 justify-start ml-4">

                {/* LEFT SIDE */}
                <div className="flex-1 justify-start">
                    {questionType === "email" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <EmailCard email={question.email} />
                        </motion.div>
                    )}
                    {questionType === "website" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <WebsiteCard site={question.site} />
                        </motion.div>
                    )}
                    {questionType === "message" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MessageCard message={question.message} />
                        </motion.div>
                    )}
                </div>

                {/* RIGHT SIDE */}
                <div className="h-full flex items-center justify-center absolute right-32 bottom-12">
                    <Buzzers correctAnswer={question.correctAnswer} />
                </div>

            </div>

            <ProgressBar currentQuestion={state.level} />

        </main>
    )
}

