import Image from "next/image"
import { useEffect, useState } from "react"
import { EmailQuestion } from "../lib/game/content/emailQuestions"

export default function EmailCard({ email }: { email: EmailQuestion }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Prevent hydration mismatch
    }
    return (
        <div className="bg-zinc-100 p-3 rounded-xl shadow-inner w-3/5 h-full">

            {/* Email container */}
            <div className="bg-white h-full rounded-lg shadow-md border overflow-hidden">

                {/* Toolbar */}
                <div className="items-center border-b bg-zinc-50 h-12 ">
                    <Image
                        src="/images/questions/email/toolbar.png"
                        alt="toolbar"
                        height={50}
                        width={900}
                    />
                </div>

                {/* Header */}
                <div className="font-sans px-4 py-2 border-b space-y-1">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-2">
                        {email?.content?.subject || "Loading..."}
                    </h2>

                    <div className="text-sm text-zinc-600">
                        <p>
                            <span className="font-medium text-zinc-800">From:</span>{" "}
                            {email?.content?.from || "Loading..."}
                        </p>
                        <p>
                            <span className="font-medium text-zinc-800">To:</span>{" "}
                            {email?.content?.to || "Loading..."}
                        </p>
                    </div>
                </div>

                {/* Content Image */}
                {email?.content?.imageURL && (
                    <div className="flex items-center justify-center align-middle">
                        <Image
                            src={email?.content?.imageURL}
                            alt="COULDN'T LOAD CONTENT"
                            height={email?.content?.height || 200}
                            width={email?.content?.width || 250}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
