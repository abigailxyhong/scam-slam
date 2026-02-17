import Image from "next/image"

interface EmailContent {
    from: string
    to: string
    subject: string
    body: string
    link?: string
    footer?: string
    attachments?: string[]
}

export default function EmailCard({ email }: { email: EmailContent }) {
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
                <div className="font-sans px-6 py-4 border-b space-y-1">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-2">
                        {email.subject}
                    </h2>

                    <div className="text-sm text-zinc-600">
                        <p>
                            <span className="font-medium text-zinc-800">From:</span>{" "}
                            {email.from}
                        </p>
                        <p>
                            <span className="font-medium text-zinc-800">To:</span>{" "}
                            {email.to}
                        </p>
                    </div>
                </div>

                {/* Body */}
                <div className="font-sans px-6 py-6 text-zinc-800 leading-relaxed whitespace-pre-wrap text-[15px]">
                    {email.body}
                </div>

                {/* Fake Link */}
                {email.link && (
                    <div className="font-sans leading-relaxed text-center">
                    <span className="text-blue-600 underline cursor-default">
                        {email.link}
                    </span>
                    </div>
                )}



                {/* Attachments */}
                {email.attachments && email.attachments.length > 0 && (
                    <div className="px-6 pb-4">
                        <p className="text-sm text-zinc-500 mb-2">Attachments</p>
                        <div className="flex flex-wrap gap-2">
                            {email.attachments.map((file) => (
                                <div
                                    key={file}
                                    className="flex items-center gap-2 px-3 py-1 border rounded-md text-sm bg-zinc-50"
                                >
                                    📎 {file}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer / signature */}
                {email.footer && (
                    <div className="px-6 py-4 border-t text-sm text-zinc-500 whitespace-pre-wrap">
                        {email.footer}
                    </div>
                )}
            </div>
        </div>
    )
}
