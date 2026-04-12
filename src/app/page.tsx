"use client"

import Link from "next/link"
import { useState } from "react"

import { useGame } from "./providers/GameProvider"
import Transition from "./components/client/MotionTransition"

/**
 * Renders the home page of the game
 * 
 * - Allows the player to choose whether to turn on digital buzzers, 
 *   main use is for when physical buzzers are added in the future
 * - Provides a button to start the game, which navigates to the name input screen, 
 *   and a link to go back to the home page
 * - Displays a footer with a set of icons
 * @returns JSX element showing the home page with title, description, toggle for digital buzzers, start button, and footer icons
 */
export default function HomePage() {
  const [isOn, setIsOn] = useState(false)
  const { state, dispatch } = useGame()

  /**
   * Toggles the digital buzzers on and off
   * Updates local UI state for visual feedback
   * Dispatches an action to update the global game state
   */
  const handleToggle = () => {
    setIsOn(prev => !prev)
    dispatch({ type: "TOGGLE_BUZZERS" })
  }

  // Dynamic styling for the button based on ON/OFF state
  const toggleButtonClasses = `w-auto px-8 py-4 rounded-full text-2xl font-bold shadow-md transition mt-4 ${isOn ? "bg-teal-400 text-white" : "bg-gray-300 text-zinc-800"}`

  return (
    <Transition>
      <main className="flex flex-col items-center justify-start min-h-screen px-4">
        <div className="flex flex-col text-center mt-8 space-y-2">
          <h1 className="main-title">
            SCAM SLAM
          </h1>

          <p className="text-6xl mt-2 mb-2">
            SEE HOW YOU RANK IN SPOTTING SCAMS
          </p>

          <div className="flex flex-col items-center mt-8 space-y-6">
            <button
              onClick={handleToggle}
              className={toggleButtonClasses}
            >
              {isOn ? "DIGITAL BUZZERS ON" : "DIGITAL BUZZERS OFF"}
            </button>

            <Link
              href="/name-input"
              className=" bg-emerald-500 hover:bg-emerald-300 text-zinc-800 font-semibold px-16 py-8 rounded-full text-6xl shadow-md transition mt-10">
              START ROUND
            </Link>
          </div>
        </div>
    
        <footer className="mt-4 flex justify-center py-4 mb-10 bottom-4">
          <img src="images/icons/Icons(b).svg" alt="Icons" className="h-20 w-auto" />
        </footer>
      </main>
    </Transition>
  )
}
