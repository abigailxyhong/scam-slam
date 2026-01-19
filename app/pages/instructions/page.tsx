"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function Instructions() {

    return (
        <main className=" justify-start min-h-screen px-4">
            <div className="flex flex-col items-start pl-16 pr-16">
                <h1 className="page-title mt-6">
                    INSTRUCTIONS
                </h1>
                <ul className="text-4xl mt-6">
                    <li className="mb-4">
                        EACH LEVEL YOU WILL BE <span className="font-bold text-blue-700">TEXTED, EMAILED, CALLED</span> OR <span className="font-bold text-blue-700">SHOWN A WEBSITE</span>.
                    </li>
                    <li className="mb-4">
                        IT IS YOUR JOB TO DECIDE WHETHER THEY COME FROM A <span className="font-bold text-yellow-700">LEGITIMATE SOURCE</span> OR A <span className="font-bold text-red-600">CYBER CRIMINAL</span>.
                    </li>
                    <li className="mb-4">
                        PRESS THE <span className="font-bold text-green-700">GREEN BUZZER</span> FOR 'SAFE' AND <span className="font-bold text-red-600">RED BUZZER</span> FOR 'SCAM'.
                    </li>
                    <li className="mb-4">
                        YOU WILL BE GIVEN <span className="font-bold">20 SECONDS</span> PER LEVEL.
                    </li>
                    <li className="mb-6">
                        GET IT? <span className="font-bold">PRESS READY TO BEGIN!</span>
                    </li>
                </ul>

                <Link
                    href="/"
                    className=" bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-14 py-6 rounded-full text-4xl shadow-md transition mt-8">
                    READY
                </Link>
                <Link
                    href="/pages/name-input"
                    className=" bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-14 py-6 rounded-full text-4xl shadow-md transition mt-6">
                    BACK
                </Link>
            </div>

        </main>
    )
}