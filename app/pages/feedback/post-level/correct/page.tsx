import Link from "next/link"
import Image from "next/image"

export default function CorrectFeedback() {
  return (
    <main className="min-h-screen px-4 flex">
      <div className="flex flex-col items-center pl-16 pr-16 gap-6 w-full">
        <div className="flex flex-row gap-6 items-center">
            <Image 
                src="/images/icons/thumbs-up.png"
                alt="thumbs up"
                width={50}
                height={50}
                className="h-25 w-auto mt-8"
                />

            <h1 className="page-title mt-6">
          CORRECT!
        </h1>
        </div>

        <p className="text-4xl text-center">
          example feedback
        </p>

        {/* Spacer pushes button down */}
        <div className="grow" />

        <Link
          href="/pages/questions/email"
          className="bg-teal-500 hover:bg-teal-300 text-zinc-800
                     font-semibold px-14 py-6 rounded-full text-4xl
                     shadow-md transition mb-16"
        >
          CONTINUE
        </Link>
      </div>
    </main>
  )
}
