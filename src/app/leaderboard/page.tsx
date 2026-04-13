import Image from "next/image"
import HomePageLink from "../components/client/LinkHomePage"
import Transition from "../components/client/MotionTransition"
import { supabase } from "@/src/lib/supabase"

export const dynamic = "force-dynamic"

/**
 * Leaderboard showing completed games with player name and score ranked from highest scoring to lowest
 * @returns JSX element representing the leaderboard
 */
export default async function Leaderboard() {
    // Fetch games from Supabase
    const { data: topGames, error } = await supabase
        .from("games")
        .select("player_name, score") 
        .not("score", "is", "null")
        .order("score", { ascending: false })

    // Handle potential errors
    if (error) {
        console.error("Leaderboard fetch error:", error.message)
    }

    // Ensure topGames is an array 
    const gamesList = topGames || []

    return (
        <Transition>
            <main className="flex flex-col items-center justifiy-center min-h-screen py-4">
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
                            {gamesList.map((game, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-white/5 hover:bg-white/5 transition"
                                >
                                    <td className="py-3 px-2 font-bold text-lg text-purple-300">
                                        #{index + 1}
                                    </td>
                                    <td className="py-3 px-2 text-white font-medium">
                                        {game.player_name || "Unknown Player"}
                                    </td>
                                    <td className="py-3 px-2 text-right text-green-300 font-bold">
                                        {game.score}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {gamesList.length === 0 && (
                        <p className="text-center text-gray-400 mt-6">
                            No completed games yet — be the first to play!
                        </p>
                    )}
                </div>

                <div className="mt-16">
                    <HomePageLink />
                </div>
            </main>
        </Transition>
    );
}