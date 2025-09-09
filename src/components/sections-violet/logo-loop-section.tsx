import { techLogos, genTools, mngTools } from "@/data/logo";
import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop"
import { useEffect, useState } from "react";

const stats: StatItemProps[] = [
  { number: '150+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Happy Clients' },
  { number: '24/7', label: 'Support Available' }
]

interface StatItemProps {
  number: string
  label: string
}

const StatItem = ({ number, label }: StatItemProps) => {

  const [displayNumber, setDisplayNumber] = useState('0')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const isPercentage = number.includes('%')
    const isPlus = number.includes('+')
    const isSlash = number.includes('/')

    if (isSlash) {
      setDisplayNumber(number)
      return
    }

    let finalNumber: number
    if (isPercentage) {
      finalNumber = parseFloat(number)
    } else {
      finalNumber = parseInt(number.replace(/[^0-9]/g, ''))
    }

    let current = 0
    const increment = finalNumber / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= finalNumber) {
        current = finalNumber
        clearInterval(timer)
      }

      if (isPercentage) {
        setDisplayNumber(current.toFixed(0) + '%')
      } else if (isPlus) {
        setDisplayNumber(Math.floor(current) + '+')
      } else {
        setDisplayNumber(Math.floor(current).toString())
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isVisible, number])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [label])

  return (
    <div id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`} className="text-center p-6">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
        {displayNumber}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}

export const LogoLoopSectionV = () => {
  return (
    <section className="relative py-10 z-10 bg-black">
      <div className="flex flex-col items-center">

        {/* Tools */}
        <div className="w-full">
          <div className="w-screen overflow-hidden">
            <LogoLoop
              logos={genTools}
              speed={50}
              direction="left"
              logoHeight={70}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology partners"
              className="w-full"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="w-full">
          <div className="w-screen overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="right"
              logoHeight={70}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology partners"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="w-screen overflow-hidden">
            <LogoLoop
              logos={mngTools}
              speed={50}
              direction="left"
              logoHeight={70}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology partners"
              className="w-full"
            />
          </div>
        </div>

      </div>
    </section>
  )
}