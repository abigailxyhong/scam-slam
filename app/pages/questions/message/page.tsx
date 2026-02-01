"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import QuestionHeader from "@/app/components/QuestionHeader"
import ProgressBar from "@/app/components/ProgressBar"
import Buzzers from "@/app/components/Buzzers"
import Timer from "@/app/components/Timer"
import Image from "next/image"

export default function Message() {

    return (
        <main className="flex flex-col justify-start min-h-screen px-4 pl-6">
            <QuestionHeader questionType="message" />

            <div className="flex w-screen flex-row mt-8 px-12 gap-24">
                <Image className="ml-5"
                    src="/images/iPhone-message.png"
                    alt="iPhone frame"
                    width={200}
                    height={70}
                />
                <div className="flex flex-col items-center gap-24">
                    <Timer />
                    <Buzzers />
                </div>
            </div>
            <ProgressBar currentStep={1} />
        </main>
    )
}