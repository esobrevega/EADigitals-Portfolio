"use client"
import { motion } from "framer-motion"

const words = ["design patterns", "UI inspiration", "product examples", "mobile apps"]

export default function AnimatedHeadlineV() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black px-6">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl relative font-bold text-violet-200 flex flex-wrap justify-center gap-2">
          A growing library of
          <span className="relative inline-block h-[1.2em] overflow-hidden text-violet-400">
            <motion.div
              animate={{ y: [`0%`, `-${100 * (words.length - 1)}%`, `0%`] }}
              transition={{
                duration: words.length * 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="flex flex-col"
            >
              {words.map((word, i) => (
                <span key={i} className="h-[1.2em]">
                  {word}
                </span>
              ))}
            </motion.div>
          </span>
        </h2>
        <p className="mt-6 text-lg relative text-gray-400 max-w-xl mx-auto">
          Explore curated collections of the best product design inspiration.
        </p>
      </div>
    </section>
  )
}
