import { useEffect, useState } from "react"
import Image from "next/image"
import { MessageQuestion } from "@/src/core/game/questions/messageQuestions"

/**
 * Displays a message-style card used in the game
 * - Supports two message formats:
 *   1) Image-based messages (e.g., screenshot of a text)
 *   2) A text bubble with sender, timestamp, and message content
 * - Uses conditional rendering to determine which format to display based on the presence of an image URL
 * 
 * @param param0 The message question object containing content information such as text, image URL, sender, and timestamp
 * @returns JSX element representing the message card
 */
export default function MessageCard({ message }: { message: MessageQuestion }) {
  // State to track if the component has mounted, used to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid rendering until the component is mounted on the client to prevent hydration mismatch
  if (!mounted) return null

  // Determine which content type to display based on the presence of an image URL
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
            <div className="w-full flex justify-between text-xs text-zinc-400 mb-4 font-sans">
              <span>{message.content?.timestamp || "Today"}</span>
              <span>Messages</span>
            </div>

            {/* Sender */}
            <div className="text-xs text-zinc-400 mb-1 font-sans">
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
                font-sans
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
