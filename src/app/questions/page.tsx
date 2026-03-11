"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Tooltip } from "@heroui/react"

import QuestionHeader from "@/src/app/components/QuestionHeader"
import ProgressBar from "@/src/app/components/ProgressBar"
import Buzzers from "@/src/app/components/Buzzers"
import { useGame } from "@/src/app/providers/GameProvider"
import EmailCard from "@/src/app/components/EmailCard"
import WebsiteCard from "@/src/app/components/WebsiteCard"
import MessageCard from "@/src/app/components/MessageCard"
import { GAME_CONFIG } from "@/src/lib/constants/gameConfig"
import { EmailQuestion } from "@/src/core/game/questions/emailQuestions"
import { WebsiteQuestion } from "@/src/core/game/questions/websiteQuestions"
import { MessageQuestion } from "@/src/core/game/questions/messageQuestions"


export default function QuestionCard() {
    const { state, dispatch } = useGame()

    // Instead of selectQuestion, just access current question by index
    const currentQuestion = state.questions[state.currentQuestionIndex]
    useEffect(() => { dispatch({ type: "SET_CURRENT_QUESTION", payload: currentQuestion }) }, [currentQuestion])

    const questionType = currentQuestion?.type
    console.log("Current Question:", currentQuestion)
    console.log("Digital Buzzers On:", state.digitalBuzzersOn)
    // const { questionType, difficulty, question } = selectQuestion(state.level) // optional, if still used

    if (!currentQuestion) {
        return <div>Loading questions...</div>
    }

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen px-4"
        >
            <main className="flex flex-col min-h-screen px-4 pl-6">
                <QuestionHeader questionType={questionType} level={state.level} lives={state.lives} score={state.score} />

                <div className="flex flex-row w-full items-center justify-center h-[65vh] px-6 ml-4">
                    {/* LEFT SIDE */}
                    <div className="flex items-center justify-center h-full">
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
                    {state.digitalBuzzersOn &&
                        (<div className="h-full flex items-center justify-center absolute right-32 bottom-12">
                            <Buzzers correctAnswer={currentQuestion.correctAnswer} />
                        </div>)}

                </div>

                <ProgressBar currentQuestion={state.level} />
            </main>
        </motion.main>
    )
}