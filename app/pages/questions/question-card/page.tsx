"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Tooltip } from "@heroui/react"

import QuestionHeader from "@/app/components/QuestionHeader"
import ProgressBar from "@/app/components/ProgressBar"
import Buzzers from "@/app/components/Buzzers"
import { useGame } from "@/app/lib/game/logic/gameContext"
import EmailCard from "@/app/components/EmailCard"
import WebsiteCard from "@/app/components/WebsiteCard"
import MessageCard from "@/app/components/MessageCard"
import { GAME_CONFIG } from "@/app/lib/game/logic/gameConfig"
import { EmailQuestion } from "@/app/lib/game/content/emailQuestions"
import { WebsiteQuestion } from "@/app/lib/game/content/websiteQuestions"
import { MessageQuestion } from "@/app/lib/game/content/messageQuestions"


export default function QuestionCard() {
    const { state, dispatch } = useGame()

    // Instead of selectQuestion, just access current question by index
    const currentQuestion = state.questions[state.currentQuestionIndex]
    useEffect(() => { dispatch({ type: "SET_CURRENT_QUESTION", payload: currentQuestion }) }, [currentQuestion])

    const questionType = currentQuestion?.type
    console.log("Current Question:", currentQuestion)
    // const { questionType, difficulty, question } = selectQuestion(state.level) // optional, if still used

    if (!currentQuestion) {
        return <div>Loading questions...</div>
    }

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="justify-start min-h-screen px-4"
        >
            <main className="flex flex-col justify-start min-h-screen px-4 pl-6">
                <QuestionHeader questionType={questionType} level={state.level} lives={state.lives} score={state.score} />

                <div className="flex flex-row w-full h-[65vh] px-6 justify-startml-4">
                    {/* LEFT SIDE */}
                    <div className="flex-1 justify-start">
                        {questionType === "email" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <EmailCard email={currentQuestion as EmailQuestion} />
                            </motion.div>
                        )}
                        {questionType === "website" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <WebsiteCard site={currentQuestion as WebsiteQuestion} />
                            </motion.div>
                        )}
                        {questionType === "message" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MessageCard message={currentQuestion as MessageQuestion} />
                            </motion.div>
                        )}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="h-full flex items-center justify-center absolute right-32 bottom-12">
                        <Buzzers correctAnswer={currentQuestion.correctAnswer} />

                    </div>
                </div>

                <ProgressBar currentQuestion={state.level} />
            </main>
        </motion.main>
    )
}