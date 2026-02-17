"use client"

import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import QuestionHeader from "@/app/components/QuestionHeader"
import ProgressBar from "@/app/components/ProgressBar"
import Buzzers from "@/app/components/Buzzers"
import Timer from "@/app/components/Timer"
import { useGame } from "@/app/lib/game/gameContext"
import { selectQuestion } from "@/app/lib/game/questionSelector"
import EmailCard from "@/app/components/EmailCard"
import WebsiteCard from "@/app/components/WebsiteCard"
import MessageCard from "@/app/components/MessageCard"
import ScoreDisplay from "@/app/components/ScoreDisplay"



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
                        <EmailCard email={question.email} />
                    )}
                    {questionType === "website" && (
                        <WebsiteCard site={question.site} />
                    )}
                    {questionType === "message" && (
                        <MessageCard message={question.message} />
                    )}
                </div>

                {/* RIGHT SIDE */}
                <div className="w-72 flex flex-col items-center gap-24 absolute right-42">
                    <Timer />
                    <Buzzers correctAnswer={question.correctAnswer} />
                </div>

            </div>

            <ProgressBar currentQuestion={state.level} />

        </main>
    )
}

