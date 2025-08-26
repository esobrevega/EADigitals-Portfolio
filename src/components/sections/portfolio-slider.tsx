// portfolio-slider.tsx
"use client"
import { useRef } from "react"
import { projects } from "@/data/portfolio"

export const PortfolioSlider = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--x", `${x}px`)
    card.style.setProperty("--y", `${y}px`)
  }

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden bg-black">
      <div className="flex animate-slide hover:[animation-play-state:paused]">
        {[...projects, ...projects].map((project, i) => (
          <div
            key={i}
            onMouseMove={handleMouseMove}
            className="group relative flex-shrink-0 mx-4 p-6 rounded-xl shadow-md text-white 
                       min-w-[280px] max-w-sm bg-black/40 border border-white/10
                       transition-all duration-500 overflow-hidden"
          >
            {/* Glow Layer */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
              style={{
                background: `radial-gradient(circle at var(--x) var(--y), rgba(56,189,248,0.4), transparent 100px)`,
              }}
            />

            <div className="relative z-10">
              <div className="text-3xl">{project.image}</div>
              <h3 className="text-lg font-bold mt-2">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
