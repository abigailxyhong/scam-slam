"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import QuestionHeader from "@/app/components/QuestionHeader"
import ProgressBar from "@/app/components/ProgressBar"
import Buzzers from "@/app/components/Buzzers"
import Timer from "@/app/components/Timer"
import Image from "next/image"

export default function Call() {

    return (
        <main className="flex flex-col justify-start min-h-screen px-4 pl-6">
            <QuestionHeader questionType="phone" />

            <div className="flex w-screen flex-row mt-8 px-12 gap-24">
                <Image className="ml-5"
                    src="/images/iPhone.png"
                    alt="iPhone call"
                    width={220}
                    height={80}
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