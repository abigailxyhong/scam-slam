"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { MessageQuestion } from "@/src/core/game/questions/messageQuestions"

export default function MessageCard({ message }: { message: MessageQuestion }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const hasImage = Boolean(message.content?.imageURL)
  const hasText = Boolean(message.content?.customText)

  return (
    <div
      className="
        w-[360px]
        bg-zinc-900
        rounded-[2.5rem]
        border border-zinc-700
        shadow-2xl
        p-6
        flex flex-col
        items-center
        relative
      "
    >
      
      <div className="w-24 h-2 bg-zinc-700 rounded-full opacity-60"></div>

      <div className="w-full item-center justify-center mt-6">
     
        {hasImage && (
          <div className="flex justify-center">
            <Image
              src={message.content!.imageURL!}
              alt="Message content image"
              width={message.content?.width || 300}
              height={message.content?.height || 200}
              className="rounded-xl border border-zinc-700"
            />
          </div>
        )}

        {!hasImage && hasText && (
          <div>
            {/* Timestamp + app label */}
            <div className="w-full flex justify-between text-xs text-zinc-400 mb-4">
              <span>{message.content?.timestamp || "Today"}</span>
              <span>Messages</span>
            </div>

            {/* Sender */}
            <div className="text-xs text-zinc-400 mb-1">
              {message.content?.sender || "Unknown"}
            </div>

            {/* Bubble */}
            <div
              className="
                bg-zinc-800
                text-zinc-100
                px-4 py-3
                rounded-2xl
                max-w-[85%]
                leading-relaxed
                shadow-md
                border border-zinc-700
              "
            >
              {message.content!.customText!}
            </div>

            {/* Bottom home bar */}
            <div className="w-full mt-6 flex justify-center">
              <div className="h-1 w-24 bg-zinc-700 rounded-full opacity-60"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
