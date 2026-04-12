"use client";

import { motion } from "framer-motion";

/**
 * Wraps content in an entrance transition
 * - Uses Framer Motion fade and slide content in on a mount
 * - Applies a custom easing curve and duration for a smooth effect
 * @param param0 The children elements to wrap in the transition
 * @returns JSX element containing the children wrapped in a motion.div with the specified transition effects
 */
export default function Transition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      layout               
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1], 
        layout: { duration: 0.3 } 
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}


