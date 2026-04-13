import Image from "next/image"
import { useEffect, useState } from "react"
import { EmailQuestion } from "@/src/core/game/questions/emailQuestions"
import { Tooltip } from "@heroui/react"
import ZoomableImage from "./ZoomImage"
/**
 * Displays and email-style card used in the game
 * @param param0 The email question object containing content and tooltip information
 * @returns JSX element representing the email card
 */
export default function EmailCard({ email }: { email: EmailQuestion }) {
    // State to track if the component has mounted, used to prevent hydration mismatch
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    // Avoid rendering until the component is mounted on the client
    if (!mounted) {
        return null
    }
    return (
        <div className="bg-zinc-100 p-3 rounded-xl shadow-inner h-full">

            {/* Email container */}
            <div className="bg-white h-full rounded-lg shadow-md border overflow-visible">

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
                {email?.content?.subject && (<div className="font-sans px-4 py-2 border-b space-y-1">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-2">
                        {email?.content?.subject || "Loading..."}
                    </h2>

                    <div className="text-sm text-zinc-600">
                        <Tooltip delay={0}>
                            <Tooltip.Trigger>
                                <p className="flex items-center gap-2 cursor-pointer">
                                    <span className="font-medium text-zinc-800">From:</span>
                                    {email?.content?.from || "Loading..."}
                                    <span className="text-teal-600 font-bold">ⓘ</span>
                                </p>
                            </Tooltip.Trigger>

                            <Tooltip.Content showArrow className="bg-white shadow-xl p-4 rounded-xl border border-gray-200 max-w-xs">
                                <Tooltip.Arrow className="fill-white" />
                                <div className="max-w-md px-1 py-1.5">
                                    <p className="mb-1 text-xl font-semibold text-gray-900">Sender Email Address:</p>
                                    <p className="text-lg font-sans text-muted">{email?.tooltipAddress || "Check the address for red flags such as typos or unusual domains."}</p>
                                </div>
                            </Tooltip.Content>
                        </Tooltip>

                        <p>
                            <span className="font-medium text-zinc-800">To:</span>{" "}
                            {email?.content?.to || "Loading..."}
                        </p>
                    </div>
                </div>)}

                {/* Content Image */}
                {email?.content?.imageURL && (
                    <div className="flex items-center justify-center align-middle mt-4">
                        <ZoomableImage src={email?.content?.imageURL} width={email?.content?.width || 250} height={email?.content?.height || 200} />
                    </div>
                )}

            </div>
        </div>
    )
}
