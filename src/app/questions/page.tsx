"use client"

import { useEffect } from "react"

import QuestionHeader from "@/src/app/components/server/QuestionHeader"
import ProgressBar from "@/src/app/components/server/ProgressBar"
import Buzzers from "../components/client/Buzzers"

import EmailCard from "../components/server/EmailCard"
import WebsiteCard from "@/src/app/components/server/WebsiteCard"
import MessageCard from "@/src/app/components/server/MessageCard"

import { EmailQuestion } from "@/src/core/game/questions/emailQuestions"
import { WebsiteQuestion } from "@/src/core/game/questions/websiteQuestions"
import { MessageQuestion } from "@/src/core/game/questions/messageQuestions"

import { useGame } from "@/src/app/providers/GameProvider"

import Transition from "../components/client/MotionTransition"
import AnimatedCard from "../components/client/AnimatedCard"

/**
 * Renders the main question screen during gameplay
 * 
 * - Retrives the current question from global game state
 * - Updates the provider with the active quesition whenever it changes
 * - Displays the appropriate question card based on its type
 * @returns JSX element showing the current question, including the header, question content, buzzers, and progress bar
 */
export default function QuestionCard() {
    const { state, dispatch } = useGame()

    // The question currently being answered
    const currentQuestion = state.questions[state.currentQuestionIndex]

    // Whenever the current question changes, update the provider with the new active question
    useEffect(() => {
        dispatch({
            type: "SET_CURRENT_QUESTION",
            payload: currentQuestion
        })
    }, [currentQuestion])

    const questionType = currentQuestion?.type

    // Fallback loading state if questions haven't been loaded yet
    if (!currentQuestion) {
        return <div>Loading questions...</div>
    }

    return (
        <Transition>
            <main className="flex flex-col min-h-screen px-4 pl-6">
                <QuestionHeader questionType={questionType} lives={state.lives} score={state.score} />

                <div className="flex flex-row w-full items-center justify-evenly h-[65vh] px-6 mt-6 mr-6 ml-6 gap-8">
                    {questionType === "email" && (
                        <AnimatedCard>
                            <EmailCard email={currentQuestion as EmailQuestion} />
                        </AnimatedCard>
                    )}
                    {questionType === "website" && (
                        <AnimatedCard>
                            <WebsiteCard site={currentQuestion as WebsiteQuestion} />
                        </AnimatedCard>
                    )}
                    {questionType === "message" && (
                        <AnimatedCard>
                            <MessageCard message={currentQuestion as MessageQuestion} />
                        </AnimatedCard>
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