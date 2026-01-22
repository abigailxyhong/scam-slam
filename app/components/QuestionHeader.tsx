import Image from "next/image"

type QuestionType = "email" | "phone" | "website"

interface QuestionHeaderProps {
    questionType: QuestionType
}

const iconMap = {
    email: "/images/icons/email-icon.png",
    phone: "/images/icons/phone.png",
    website: "/images/icons/website.png",
}

export default function QuestionHeader({ questionType }: QuestionHeaderProps) {
    return (
        <header className="w-full px-6 py-4 flex items-center justify-between mt-6">

            <div className="flex items-center pl-6 pr-6">
                <Image
                    src={iconMap[questionType]}
                    alt={`${questionType} icon`}
                    width={70}
                    height={70}
                    priority
                />
            </div>

            <h1 className="text-6xl">
                LEVEL 1/12
            </h1>

            <div className="flex items-center mr-6">
                <Image
                    src="/images/icons/lives.png"
                    alt="Lives"
                    width={200}
                    height={200}
                />
            </div>
        </header>
    )
}