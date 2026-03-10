"use client";

import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"
import { useGame } from "@/app/lib/game/logic/gameContext";


interface LeaderboardClientProps {
    rows: {
        player_name: string;
        score: number;
    }[];
}

export default function LeaderboardClient({ rows }: LeaderboardClientProps) {
    const { dispatch } = useGame();
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center min-h-screen px-4"
        >
            <div className="flex flex-row gap-6 items-center">
                <Image
                    src="/images/icons/crown.png"
                    alt="thumbs up"
                    width={50}
                    height={50}
                    className="h-25 w-auto mt-6 mb-6 "
                />

                <h1 className="page-title mt-6 mb-6">LEADERBOARD</h1>
            </div>

            <div className="w-2/3 max-h-[60vh] overflow-y-auto bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-black/20">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-300 border-b border-white/10">
                            <th className="py-3 px-2">Rank</th>
                            <th className="py-3 px-2">Player</th>
                            <th className="py-3 px-2 text-right">Score</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b border-white/5 hover:bg-white/5 transition"
                            >
                                <td className="py-3 px-2 font-bold text-lg text-purple-300">
                                    #{index + 1}
                                </td>

                                <td className="py-3 px-2 text-white font-medium">
                                    {row.player_name || "Unknown Player"}
                                </td>

                                <td className="py-3 px-2 text-right text-green-300 font-bold">
                                    {row.score}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {rows.length === 0 && (
                    <p className="text-center text-gray-400 mt-6">
                        No completed games yet — be the first to play!
                    </p>
                )}
            </div>

            <Link
                onClick={() => dispatch({ type: "RESET_GAME" })}
                href="/"
                className="bg-gray-300 hover:bg-gray-200 text-zinc-800 font-semibold px-16 py-6 rounded-full text-3xl shadow-md transition mt-8"
            >
                HOME PAGE
            </Link>
        </motion.main>
    );
}
