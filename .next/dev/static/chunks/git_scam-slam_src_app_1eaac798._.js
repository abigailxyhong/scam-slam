(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/git/scam-slam/src/app/components/MotionTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        fileName: "[project]/git/scam-slam/src/app/components/MotionTransition.tsx",
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
"[project]/git/scam-slam/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/providers/GameProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$MotionTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/git/scam-slam/src/app/components/MotionTransition.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HomePage() {
    _s();
    const [isOn, setIsOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    /**
   * Toggles the digital buzzers on and off
   * Updates local UI state for visual feedback
   * Dispatches an action to update the global game state
   */ const handleToggle = ()=>{
        setIsOn((prev)=>!prev);
        dispatch({
            type: "TOGGLE_BUZZERS"
        });
    };
    // Dynamic styling for the button based on ON/OFF state
    const toggleButtonClasses = `w-auto px-8 py-4 rounded-full text-2xl font-bold shadow-md transition mt-4 ${isOn ? "bg-teal-400 text-white" : "bg-gray-300 text-zinc-800"}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$components$2f$MotionTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-col items-center justify-start min-h-screen px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col text-center mt-8 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "main-title",
                            children: "SCAM SLAM"
                        }, void 0, false, {
                            fileName: "[project]/git/scam-slam/src/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-6xl mt-2 mb-2",
                            children: "SEE HOW YOU RANK IN SPOTTING SCAMS"
                        }, void 0, false, {
                            fileName: "[project]/git/scam-slam/src/app/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center mt-8 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleToggle,
                                    className: toggleButtonClasses,
                                    children: isOn ? "DIGITAL BUZZERS ON" : "DIGITAL BUZZERS OFF"
                                }, void 0, false, {
                                    fileName: "[project]/git/scam-slam/src/app/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/name-input",
                                    className: " bg-emerald-500 hover:bg-emerald-300 text-zinc-800 font-semibold px-16 py-8 rounded-full text-6xl shadow-md transition mt-10",
                                    children: "START ROUND"
                                }, void 0, false, {
                                    fileName: "[project]/git/scam-slam/src/app/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/git/scam-slam/src/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/git/scam-slam/src/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-4 flex justify-center py-4 mb-10 bottom-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "images/icons/Icons(b).svg",
                        alt: "Icons",
                        className: "h-20 w-auto"
                    }, void 0, false, {
                        fileName: "[project]/git/scam-slam/src/app/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/git/scam-slam/src/app/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/git/scam-slam/src/app/page.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/git/scam-slam/src/app/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(HomePage, "Fu3R097DFxenE1e0FcByWkkg9Dk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$git$2f$scam$2d$slam$2f$src$2f$app$2f$providers$2f$GameProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=git_scam-slam_src_app_1eaac798._.js.map