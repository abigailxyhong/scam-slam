import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed = 25) {
    const [displayed, setDisplayed] = useState("")

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i))
            i++
            if (i > text.length) clearInterval(interval)
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    return displayed
}
