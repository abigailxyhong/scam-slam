"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

/**
 * Wraps any child component in a reusable animated container
 * Applies:
 * - a fade-in and upward slide when the component mounts
 * - a fade-out and upward slide when the component unmounts
 * 
 * Used for content cards on the question page
 * @param children the content to be wrapped in the animated card
 * @returns a JSX element that applies the defined animations to its children
 */
export default function AnimatedCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
