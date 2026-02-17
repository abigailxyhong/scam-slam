interface MessageContent {
  sender: string;
  message: string;
  timestamp?: string;
  ctaText?: string;
}

export default function MessageCard({
  message,
}: {
  message: MessageContent;
}) {
  return (
    <div className="bg-zinc-200 p-6 rounded-xl shadow-inner w-2/5">
      
      {/* Phone frame */}
      <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">

        {/* Header */}
        <div className="font-sans px-4 py-3 border-b bg-zinc-100 text-center">
          <p className="font-semibold text-zinc-900">
            {message.sender}
          </p>
        </div>

        {/* Message area */}
        <div className="px-4 py-6 flex flex-col gap-4">
          
          {/* Incoming message bubble */}
          <div className="font-sans self-start max-w-[85%] bg-zinc-100 rounded-xl px-4 py-3 text-zinc-800 whitespace-pre-wrap leading-relaxed">
            {message.message}
          </div>

          {message.timestamp && (
            <p className="font-sans text-xs text-zinc-400 self-center">
              {message.timestamp}
            </p>
          )}

          {/* Call to action */}
          {message.ctaText && (
            <button
              className="font-sans self-start mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold shadow cursor-default"
            >
              {message.ctaText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
