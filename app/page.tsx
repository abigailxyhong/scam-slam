"use client";

import { useState } from "react";

export default function HomePage() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn(!isOn);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-4">
      <div className="flex flex-col text-center mt-8 space-y-2">
        <h1 className="text-[10.5rem] font-extrabold drop-shadow-md leading-none">
          SCAM SLAM
        </h1>

        <p className="text-6xl mt-2 mb-2">
          SEE HOW YOU RANK IN SPOTTING SCAMS
        </p>

        <div className="flex flex-col items-center mt-8 space-y-6">
          <button
            onClick={handleToggle}
            className={`w-auto px-8 py-4 rounded-full text-2xl font-bold shadow-md transition mt-4
            ${isOn ? "bg-teal-400 text-white" : "bg-gray-300 text-zinc-800"}`}
          >
            {isOn ? "DIGITAL BUZZERS ON" : "DIGITAL BUZZERS OFF"}
          </button>

          <button
            className="w-auto bg-green-400 hover:bg-green-300 text-zinc-800 font-semibold px-16 py-8 rounded-full text-6xl shadow-md transition mt-6"
          >
            START ROUND
          </button>
        </div>
      </div>

      <footer className="mt-auto flex justify-center py-4 mb-10">
        <img src="images/icons/Icons(b).svg" alt="Icons" className="h-20 w-auto" />
      </footer>
    </main>
  );
}
