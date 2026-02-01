"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import QuestionHeader from "@/app/components/QuestionHeader"
import ProgressBar from "@/app/components/ProgressBar"
import Buzzers from "@/app/components/Buzzers"
import Timer from "@/app/components/Timer"


export default function Website() {

    return (
        <main className="flex flex-col justify-start min-h-screen px-4 pl-6">
            <QuestionHeader questionType="website" />

            <div className="flex flex-row mt-8 ml-12 mr-6 gap-24">
                            <div className="text-center border border-b-cyan-800 w-1/2 h-[55vh] mr-4">
                                <p>PLACEHOLDER</p>
                            </div>
                            
                            <div className="flex flex-col items-center gap-24">
                                                <Timer />
                                                <Buzzers/>     
                                            </div> 
                            
                        </div>
                        
                        <ProgressBar currentStep={1} />

        </main>
    )
}