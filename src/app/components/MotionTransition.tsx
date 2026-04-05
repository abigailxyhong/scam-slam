"use client";

import { motion } from "framer-motion";

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


