"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import QuestionHeader from "@/app/components/QuestionHeader"
import ProgressBar from "@/app/components/ProgressBar"
import Buzzers from "@/app/components/Buzzers"
import Timer from "@/app/components/Timer"
import { useGame } from "@/app/lib/game/gameContext"
import { selectQuestion } from "@/app/lib/game/questionSelector"
import EmailCard from "@/app/components/EmailCard"

// TO-DO
// Fix questionType parameter of QuestionHeader
// Add content options
// Fix ProgressBar logic
// Know level number, difficulty, randomly choose a question type, then randomly choose a question, then render that content on the page


export default function QuestionCard() {
    const { state, dispatch } = useGame()
    const { questionType, difficulty, question } = selectQuestion(state.level)


    return (
        <main className="flex flex-col justify-start min-h-screen px-4 pl-6">
            <QuestionHeader questionType={questionType} level={state.level} lives={state.lives} />

            <div className="flex flex-row mt-8 ml-12 mr-6 gap-24">
                {questionType === "email" && (
                    <EmailCard email={question.email} />
                )}
                
                <div className="flex flex-col items-center gap-24">
                    <Timer />
                    <Buzzers/>     
                </div>               
            </div>
            
            <ProgressBar currentStep={1} /> 

        </main>
    )
}

