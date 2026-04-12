import Transition from "../components/client/MotionTransition"
import NameInputForm from "../components/client/NameInputForm"
import Link from "next/link"

export default function JoinPage() {
    return (
        <Transition>
            <main className="flex flex-col items-center justify-start min-h-screen px-4">
                <h1 className="page-title mt-6">ENTER A NICKNAME</h1>
                <p className="text-4xl mt-4 mb-8">*USE YOUR FIRST NAME OR A NICKNAME</p>

                <NameInputForm />

                <Link
                    href="/"
                    className="bg-teal-500 hover:bg-teal-300 text-zinc-800 font-semibold px-14 py-6 rounded-full text-4xl shadow-md transition mt-6"
                >
                    BACK
                </Link>
            </main>
        </Transition>
    )
}