"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import QuestionHeader from "@/app/components/QuestionHeader"
import ProgressBar from "@/app/components/ProgressBar"

export default function Email() {

    return (
        <main className="flex flex-col justify-start min-h-screen px-4 pl-6">
            <QuestionHeader questionType="email" />

            <div className="flex flex-row mt-8 ml-12 mr-6">
                <div className="text-center border border-b-cyan-800 w-1/2 h-[55vh] mr-4">
                    <p>PLACEHOLDER</p>
                </div>
                <div className="text-center border border-b-cyan-800 w-1/3 h-[55vh] ml-30 mr-2">
                    <p>BUZZERS</p>
                </div>
            </div>
            <ProgressBar currentStep={1}/>

        </main>
    )
}