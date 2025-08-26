// components/Hero.tsx
"use client"

import { motion } from "framer-motion"

export default function GradientBG() {
  return (
    <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #1c92d2, #0f172a)",
            "radial-gradient(circle at 80% 70%, #e81cff, #0f172a)",
            "radial-gradient(circle at 40% 60%, #40c9ff, #0f172a)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
    />
  )
}
