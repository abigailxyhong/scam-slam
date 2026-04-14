module.exports = [
"[project]/git/scam-slam/src/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://aodtpmrmirynercxpwla.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZHRwbXJtaXJ5bmVyY3hwd2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NDkyMzEsImV4cCI6MjA4ODIyNTIzMX0.SEQCPH65BtUZ0X-MO2kLOicSl5DSwFqDms_Ncou9jRo"));
}),
"[project]/git/scam-slam/src/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40319d94bfdb2aa8b6ddab8f90955d7e5bf4a8f887":"createGame","4033b6e097e32e8633c397df5bf7da4838f7835f6f":"updateGame","40d06b4a8f16451125e48d98febc48f227160dccf1":"recordQuestionAttempt"},"",""] */ __turbopack_context__.s([
    "createGame",
    ()=>createGame,
    "recordQuestionAttempt",
    ()=>recordQuestionAttempt,
    "updateGame",
    ()=>updateGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/supabase.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function createGame(input_name) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("games").insert({
        player_name: input_name
    }).select().single();
    if (error) throw new Error(error.message);
    return data;
}
async function updateGame({ gameId, score, finished_at }) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("games").update({
        score: score,
        finished_at: finished_at
    }).eq("id", gameId).select().single();
    if (error) throw new Error(error.message);
    return data;
}
async function recordQuestionAttempt({ gameId, questionId, isCorrect, timeTakenMs, questionType }) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("question_attempts").insert({
        game_id: gameId,
        question_id: questionId,
        question_type: questionType,
        is_correct: isCorrect,
        time_taken_ms: timeTakenMs
    }).select().single();
    if (error) throw new Error(error.message);
    return data;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createGame,
    updateGame,
    recordQuestionAttempt
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createGame, "40319d94bfdb2aa8b6ddab8f90955d7e5bf4a8f887", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateGame, "4033b6e097e32e8633c397df5bf7da4838f7835f6f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(recordQuestionAttempt, "40d06b4a8f16451125e48d98febc48f227160dccf1", null);
}),
"[project]/git/scam-slam/.next-internal/server/app/feedback/correct/page/actions.js { ACTIONS_MODULE0 => \"[project]/git/scam-slam/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/git/scam-slam/.next-internal/server/app/feedback/correct/page/actions.js { ACTIONS_MODULE0 => \"[project]/git/scam-slam/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4033b6e097e32e8633c397df5bf7da4838f7835f6f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateGame"],
    "40d06b4a8f16451125e48d98febc48f227160dccf1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordQuestionAttempt"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f2e$next$2d$internal$2f$server$2f$app$2f$feedback$2f$correct$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/git/scam-slam/.next-internal/server/app/feedback/correct/page/actions.js { ACTIONS_MODULE0 => "[project]/git/scam-slam/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=git_scam-slam_6cafb69e._.js.map