import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageQuestion } from "../lib/game/content/messageQuestions";

export default function MessageCard({ message }: {message: MessageQuestion;}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Prevent hydration mismatch
    }

    return (

        <div>
            <Image 
            src={message.content?.imageURL || ""} 
            alt="Message content image" 
            width={message.content?.width || 300} 
            height={message.content?.height || 200} />
        </div>

    
    );
}
