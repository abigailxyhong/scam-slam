"use client";

import { supabase } from "@/app/lib/supabase/client";
import { motion } from "framer-motion";

export default async function LeaderboardPage() {
    const { data: rows, error } = await supabase
        .from("games")
        .select("score, player_name")
        .order("score", { ascending: false })
        .limit(20);

    if (error) {
        console.error(error);
        return <div className="text-red-500">Failed to load leaderboard.</div>;
    }

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="justify-start min-h-screen px-4"
        >
            
                <h1 className="page-title mt-6">
                    LEADERBOARD
                </h1>

                <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10">
                 <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-300 border-b border-white/10">
                             <th className="py-3 px-2">Rank</th>
                             <th className="py-3 px-2">Player</th>
                             <th className="py-3 px-2 text-right">Score</th>
                         </tr>
                     </thead>

                     <tbody>
                         {rows?.map((row, index) => (
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

                 {rows?.length === 0 && (
                     <p className="text-center text-gray-400 mt-6">
                         No completed games yet — be the first to play!
                     </p>
                 )}
             </div>
                       
        </motion.main>
        
        
        //     <div className="w-1/2 mx-auto mt-16 px-6">
        //     <h1 className="text-5xl font-extrabold text-center mb-10 text-white drop-shadow-lg">
        //         Leaderboard
        //     </h1>

        //     <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10">
        //         <table className="w-full text-left">
        //             <thead>
        //                 <tr className="text-gray-300 border-b border-white/10">
        //                     <th className="py-3 px-2">Rank</th>
        //                     <th className="py-3 px-2">Player</th>
        //                     <th className="py-3 px-2 text-right">Score</th>
        //                 </tr>
        //             </thead>

        //             <tbody>
        //                 {rows?.map((row, index) => (
        //                     <tr
        //                         key={index}
        //                         className="border-b border-white/5 hover:bg-white/5 transition"
        //                     >
        //                         <td className="py-3 px-2 font-bold text-lg text-purple-300">
        //                             #{index + 1}
        //                         </td>

        //                         <td className="py-3 px-2 text-white font-medium">
        //                             {row.player_name || "Unknown Player"}
        //                         </td>

        //                         <td className="py-3 px-2 text-right text-green-300 font-bold">
        //                             {row.score}
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>

        //         {rows?.length === 0 && (
        //             <p className="text-center text-gray-400 mt-6">
        //                 No completed games yet — be the first to play!
        //             </p>
        //         )}
        //     </div>
        // </div>
        

        
        
    );
}
