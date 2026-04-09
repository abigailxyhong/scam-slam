"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

import QuestionHeader from "@/src/app/components/QuestionHeader"
import ProgressBar from "@/src/app/components/ProgressBar"
import Buzzers from "@/src/app/components/Buzzers"
import { useGame } from "@/src/app/providers/GameProvider"
import EmailCard from "@/src/app/components/EmailCard"
import WebsiteCard from "@/src/app/components/WebsiteCard"
import MessageCard from "@/src/app/components/MessageCard"
import { EmailQuestion } from "@/src/core/game/questions/emailQuestions"
import { WebsiteQuestion } from "@/src/core/game/questions/websiteQuestions"
import { MessageQuestion } from "@/src/core/game/questions/messageQuestions"
import Transition from "../components/MotionTransition"



export default function QuestionCard() {
    const { state, dispatch } = useGame()
    const currentQuestion = state.questions[state.currentQuestionIndex]
    useEffect(() => { dispatch({ type: "SET_CURRENT_QUESTION", payload: currentQuestion }) }, [currentQuestion])

    const questionType = currentQuestion?.type

    if (!currentQuestion) {
        return <div>Loading questions...</div>
    }

    return (
        <Transition>
            <main className="flex flex-col min-h-screen px-4 pl-6">
                <QuestionHeader questionType={questionType} lives={state.lives} score={state.score} />

                <div className="flex flex-row w-full items-center justify-evenly h-[65vh] px-6 mt-6 mr-6 ml-6 gap-8">
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

                    {state.digitalBuzzersOn &&
                        (<div className="h-full flex items-center">
                            <Buzzers />
                        </div>)}
                </div>


                <ProgressBar currentQuestionIndex={state.currentQuestionIndex} />
            </main>
        </Transition>
    )
}