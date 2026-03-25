

import Link from "next/link";
import { getTopGames } from "../../lib/utils/game";
import { useGame } from "../providers/GameProvider";

export default async function LeaderboardPage() {
    const topGames = await getTopGames();
    const { state, dispatch } = useGame();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-black text-white">
            <h1 className="text-4xl font-extrabold tracking-tight mb-8 text-center">
                Leaderboard
            </h1>

            <div className="w-full max-w-xl bg-zinc-900/60 backdrop-blur-md rounded-xl p-6 border border-zinc-700 shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-zinc-300">
                    Top 15 Players
                </h2>

                <ul className="space-y-3">
                    {topGames.map((game: any, index: number) => (
                        <li
                            key={index}
                            className="flex items-center justify-between px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700"
                        >
                            <span className="flex items-center gap-3">
                                <span className="text-zinc-500 font-bold w-6 text-right">
                                    {index + 1}.
                                </span>
                                <span className="font-medium text-zinc-200">
                                    {game.playerName}
                                </span>
                            </span>

                            <span className="text-lg font-bold text-emerald-400">
                                {game.score}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <Link
                onClick={() => dispatch({ type: "RESET_GAME" })}
                href="/"
                className="bg-gray-300 hover:bg-gray-200 text-zinc-800 font-semibold px-16 py-6 rounded-full text-3xl shadow-md transition"
            >
                HOME PAGE
            </Link>
        </main>
    );
}
