(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/git/scam-slam/src/app/components/server/ScoreDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScoreDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ScoreDisplay({ score }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start mt-4 ml-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-center bg-teal-200 border-2 border-emerald-400 rounded-2xl px-8 py-4 shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-m tracking-widest text-teal-300 text-center",
                    children: "SCORE"
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/ScoreDisplay.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-4xl font-bold text-teal-300 text-center",
                    children: score
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/ScoreDisplay.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/git/scam-slam/src/app/components/server/ScoreDisplay.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/git/scam-slam/src/app/components/server/ScoreDisplay.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ScoreDisplay;
var _c;
__turbopack_context__.k.register(_c, "ScoreDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/server/Timer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Timer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/providers/GameProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Timer() {
    _s();
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/icons/timer.png",
                alt: "Timer icon",
                width: 70,
                height: 100,
                priority: true
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/Timer.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute translate-x-16 text-5xl font-bold ${state.timeLeft <= 5 ? "text-red-500" : "text-white"}`,
                children: state.timeLeft
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/Timer.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/git/scam-slam/src/app/components/server/Timer.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Timer, "bz/3tffehqHq3ZcuP6JOKCZwvko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = Timer;
var _c;
__turbopack_context__.k.register(_c, "Timer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/server/ScoreDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/server/Timer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Maps question types to their corresponding icon image paths
const iconMap = {
    email: "/images/icons/email-icon.png",
    website: "/images/icons/website-icon.png",
    message: "/images/icons/message-icon.png"
};
// Maps remaining lives to the appropriate life-indicator image
const livesMap = {
    3: "/images/icons/3lives.png",
    2: "/images/icons/2lives.png",
    1: "/images/icons/1life.png"
};
function QuestionHeader({ questionType, lives, score }) {
    _s();
    // State to track if the component has mounted, used to prevent hydration mismatch
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get the appropriate life image based on the number of lives remaining
    const lifeImage = livesMap[lives];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionHeader.useEffect": ()=>{
            setMounted(true);
        }
    }["QuestionHeader.useEffect"], []);
    if (!mounted) {
        return null; // Prevent hydration mismatch
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full px-6 py-4 flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center pl-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: iconMap[questionType],
                    alt: `${questionType} icon`,
                    width: 70,
                    height: 70,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-8 pr-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$ScoreDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        score: score
                    }, void 0, false, {
                        fileName: "[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    lifeImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: lifeImage,
                        alt: `${lives} lives remaining`,
                        width: 160,
                        height: 60
                    }, void 0, false, {
                        fileName: "[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(QuestionHeader, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = QuestionHeader;
var _c;
__turbopack_context__.k.register(_c, "QuestionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/lib/constants/gameConfig.ts [app-client] (ecmascript)");
;
;
function ProgressBar({ currentQuestionIndex }) {
    const totalQuestions = __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$lib$2f$constants$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].MAX_QUESTIONS;
    const checkpointLabels = [
        "Start",
        "Complete!"
    ];
    const checkpoints = checkpointLabels.length;
    // Converts from 0-based index to 1-based level for display purposes
    const level = currentQuestionIndex + 1;
    // Calculate progress percentage, ensuring it stays between 0% and 100%
    const progressPercentage = Math.min(100, Math.max(0, level / totalQuestions * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full px-6 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-5 bg-gray-800 rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute h-5 bg-green-400 rounded-full transition-all duration-500 ease-out",
                        style: {
                            width: `${progressPercentage}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    checkpointLabels.map((label, i)=>{
                        const positionPercent = i / (checkpoints - 1) * 100;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute flex flex-col items-center",
                            style: {
                                left: `${positionPercent}%`,
                                transform: "translateX(-50%)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-6 h-6 rounded-full border-2 transition-all
                  ${progressPercentage >= positionPercent ? "bg-green-400 border-green-300 shadow-[0_0_6px_#22c55e]" : "bg-gray-900 border-gray-500"}`
                                }, void 0, false, {
                                    fileName: "[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-2 text-lg font-semibold text-gray-800 whitespace-nowrap",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-3xl font-extrabold text-gray-900",
                    children: [
                        "Level ",
                        level,
                        " / ",
                        totalQuestions
                    ]
                }, void 0, true, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = ProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/client/Buzzers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Buzzers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/providers/GameProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Buzzers() {
    _s();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    // Local state to track if a buzzer has been pressed
    const [pressed, setPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /**
     * Handles a buzzer press
     * - Dispatches the answer and remaining time to the game provider
     * @param choice the player's selected answer ("SCAM" or "SAFE")
     */ const handleAnswer = (choice)=>{
        if (pressed) return;
        setPressed(true);
        dispatch({
            type: "HANDLE_ANSWER",
            payload: {
                answer: choice,
                timeLeft: state.timeLeft
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row space-x-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleAnswer("SCAM"),
                disabled: pressed,
                className: "w-42 h-42 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold rounded-full text-6xl shadow-[0_8px_0_#7f1d1d] active:shadow-[0_2px_0_#7f1d1d] transition-all duration-150 flex items-center justify-center",
                children: "SCAM"
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/client/Buzzers.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleAnswer("SAFE"),
                disabled: pressed,
                className: "w-42 h-42 bg-green-500 hover:bg-green-400 active:scale-95 text-white font-bold rounded-full text-6xl shadow-[0_8px_0_#14532d] active:shadow-[0_2px_0_#14532d] transition-all duration-150 flex items-center justify-center",
                children: "SAFE"
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/client/Buzzers.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/git/scam-slam/src/app/components/client/Buzzers.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_s(Buzzers, "awHyKDQjbZL4ZqAmCBVpq9+pKHU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = Buzzers;
var _c;
__turbopack_context__.k.register(_c, "Buzzers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/server/ZoomImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZoomableImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ZoomableImage({ src, width, height }) {
    _s();
    // Tracks whether the zoom overlay should be visible 
    const [showZoom, setShowZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor-zoom-in inline-block",
                onMouseEnter: ()=>setShowZoom(true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: src,
                    alt: "email content",
                    width: width,
                    height: height,
                    className: "rounded-md select-none pointer-events-auto"
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/ZoomImage.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/ZoomImage.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            showZoom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " fixed inset-0  flex items-center justify-center  bg-black/40  z-9999 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onMouseLeave: ()=>setShowZoom(false),
                    className: "cursor-zoom-out",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: "zoomed email content",
                        width: width * 2,
                        height: height * 2,
                        className: "rounded-lg shadow-2xl pointer-events-auto"
                    }, void 0, false, {
                        fileName: "[project]/git/scam-slam/src/app/components/server/ZoomImage.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/ZoomImage.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/ZoomImage.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ZoomableImage, "H0b81/iuS3f53gxL7FWR84a1Hsc=");
_c = ZoomableImage;
var _c;
__turbopack_context__.k.register(_c, "ZoomableImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/server/EmailCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmailCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/@heroui/react/dist/components/tooltip/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$ZoomImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/server/ZoomImage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function EmailCard({ email }) {
    _s();
    // State to track if the component has mounted, used to prevent hydration mismatch
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailCard.useEffect": ()=>{
            setMounted(true);
        }
    }["EmailCard.useEffect"], []);
    // Avoid rendering until the component is mounted on the client
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-zinc-100 p-3 rounded-xl shadow-inner h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white h-full rounded-lg shadow-md border overflow-visible",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "items-center border-b bg-zinc-50 h-12 ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/questions/email/toolbar.png",
                        alt: "toolbar",
                        height: 50,
                        width: 900
                    }, void 0, false, {
                        fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                email?.content?.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-sans px-4 py-2 border-b space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-zinc-900 mb-2",
                            children: email?.content?.subject || "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-zinc-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], {
                                    delay: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"].Trigger, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-zinc-800",
                                                        children: "From:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 37
                                                    }, this),
                                                    email?.content?.from || "Loading...",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-teal-600 font-bold",
                                                        children: "ⓘ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                                lineNumber: 48,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                            lineNumber: 47,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"].Content, {
                                            showArrow: true,
                                            className: "bg-white shadow-xl p-4 rounded-xl border border-gray-200 max-w-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"].Arrow, {
                                                    className: "fill-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-md px-1 py-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-1 text-xl font-semibold text-gray-900",
                                                            children: "Sender Email Address:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-sans text-muted",
                                                            children: email?.tooltipAddress || "Check the address for red flags such as typos or unusual domains."
                                                        }, void 0, false, {
                                                            fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                            lineNumber: 55,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-zinc-800",
                                            children: "To:"
                                        }, void 0, false, {
                                            fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                            lineNumber: 65,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        email?.content?.to || "Loading..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                    lineNumber: 40,
                    columnNumber: 46
                }, this),
                email?.content?.imageURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center align-middle mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$ZoomImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: email?.content?.imageURL,
                        width: email?.content?.width || 250,
                        height: email?.content?.height || 200
                    }, void 0, false, {
                        fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                        lineNumber: 74,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
                    lineNumber: 73,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/git/scam-slam/src/app/components/server/EmailCard.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(EmailCard, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = EmailCard;
var _c;
__turbopack_context__.k.register(_c, "EmailCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/server/WebsiteCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebsiteCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function WebsiteCard({ site }) {
    _s();
    // State to track if the component has mounted, used to prevent hydration mismatch
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebsiteCard.useEffect": ()=>{
            setMounted(true);
        }
    }["WebsiteCard.useEffect"], []);
    // Do not render until mounted, and esure required content exists
    if (!mounted || !site || !site.content.imageURL) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group w-fit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: site?.content?.imageURL,
                alt: "Website content image",
                width: site?.content?.width || 400,
                height: site?.content?.height || 300,
                className: "rounded-md"
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/WebsiteCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " absolute inset-0  bg-black/70  text-white  flex items-center justify-center  text-3xl font-bold  opacity-0  group-hover:opacity-100  transition-opacity duration-300 text-center p-4 ",
                children: site?.tooltip
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/WebsiteCard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/git/scam-slam/src/app/components/server/WebsiteCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(WebsiteCard, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = WebsiteCard;
var _c;
__turbopack_context__.k.register(_c, "WebsiteCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/server/MessageCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function MessageCard({ message }) {
    _s();
    // State to track if the component has mounted, used to prevent hydration mismatch
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageCard.useEffect": ()=>{
            setMounted(true);
        }
    }["MessageCard.useEffect"], []);
    // Avoid rendering until the component is mounted on the client to prevent hydration mismatch
    if (!mounted) return null;
    // Determine which content type to display based on the presence of an image URL
    const hasImage = Boolean(message.content?.imageURL);
    const hasText = Boolean(message.content?.customText);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " w-[360px] bg-zinc-900 rounded-[2.5rem] border border-zinc-700 shadow-2xl p-6 flex flex-col items-center relative ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-24 h-2 bg-zinc-700 rounded-full opacity-60"
            }, void 0, false, {
                fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full item-center justify-center mt-6",
                children: [
                    hasImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: message.content.imageURL,
                            alt: "Message content image",
                            width: message.content?.width || 300,
                            height: message.content?.height || 200,
                            className: "rounded-xl border border-zinc-700"
                        }, void 0, false, {
                            fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    !hasImage && hasText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex justify-between text-xs text-zinc-400 mb-4 font-sans",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: message.content?.timestamp || "Today"
                                    }, void 0, false, {
                                        fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Messages"
                                    }, void 0, false, {
                                        fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-400 mb-1 font-sans",
                                children: message.content?.sender || "Unknown"
                            }, void 0, false, {
                                fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " bg-zinc-800 text-zinc-100 px-4 py-3 rounded-2xl max-w-[85%] leading-relaxed shadow-md border border-zinc-700 font-sans ",
                                children: message.content.customText
                            }, void 0, false, {
                                fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mt-6 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 w-24 bg-zinc-700 rounded-full opacity-60"
                                }, void 0, false, {
                                    fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/git/scam-slam/src/app/components/server/MessageCard.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(MessageCard, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = MessageCard;
var _c;
__turbopack_context__.k.register(_c, "MessageCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/client/MotionTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Transition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Transition({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.45,
            ease: [
                0.22,
                1,
                0.36,
                1
            ],
            layout: {
                duration: 0.3
            }
        },
        style: {
            willChange: "opacity, transform"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/git/scam-slam/src/app/components/client/MotionTransition.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Transition;
var _c;
__turbopack_context__.k.register(_c, "Transition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/components/client/AnimatedCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function AnimatedCard({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: 0.5
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/git/scam-slam/src/app/components/client/AnimatedCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = AnimatedCard;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/git/scam-slam/src/app/questions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$QuestionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/server/QuestionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/server/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$client$2f$Buzzers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/client/Buzzers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$EmailCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/server/EmailCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$WebsiteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/server/WebsiteCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$MessageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/server/MessageCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/providers/GameProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$client$2f$MotionTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/client/MotionTransition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$client$2f$AnimatedCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/client/AnimatedCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function QuestionCard() {
    _s();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    // The question currently being answered
    const currentQuestion = state.questions[state.currentQuestionIndex];
    // Whenever the current question changes, update the provider with the new active question
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionCard.useEffect": ()=>{
            dispatch({
                type: "SET_CURRENT_QUESTION",
                payload: currentQuestion
            });
        }
    }["QuestionCard.useEffect"], [
        currentQuestion
    ]);
    const questionType = currentQuestion?.type;
    // Fallback loading state if questions haven't been loaded yet
    if (!currentQuestion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading questions..."
        }, void 0, false, {
            fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
            lineNumber: 48,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$client$2f$MotionTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-col min-h-screen px-4 pl-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$QuestionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    questionType: questionType,
                    lives: state.lives,
                    score: state.score
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row w-full items-center justify-evenly h-[65vh] px-6 mt-6 mr-6 ml-6 gap-8",
                    children: [
                        questionType === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$client$2f$AnimatedCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$EmailCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                email: currentQuestion
                            }, void 0, false, {
                                fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                                lineNumber: 59,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, this),
                        questionType === "website" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$client$2f$AnimatedCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$WebsiteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                site: currentQuestion
                            }, void 0, false, {
                                fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                                lineNumber: 64,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                            lineNumber: 63,
                            columnNumber: 25
                        }, this),
                        questionType === "message" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$client$2f$AnimatedCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$MessageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                message: currentQuestion
                            }, void 0, false, {
                                fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                                lineNumber: 69,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                            lineNumber: 68,
                            columnNumber: 25
                        }, this),
                        state.digitalBuzzersOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$client$2f$Buzzers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                                lineNumber: 75,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                            lineNumber: 74,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$server$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    currentQuestionIndex: state.currentQuestionIndex
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/git/scam-slam/src/app/questions/page.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(QuestionCard, "SMlZY2uyVTClKrSyPFthlqGR0nA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = QuestionCard;
var _c;
__turbopack_context__.k.register(_c, "QuestionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=git_scam-slam_src_app_1908ec73._.js.map