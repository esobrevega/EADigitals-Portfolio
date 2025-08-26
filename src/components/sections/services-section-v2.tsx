import { useEffect, useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ServiceCardProps, services } from "@/data/services"

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`service-${title.replace(/\s+/g, "-").toLowerCase()}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
      observer.disconnect()
    }
  }, [title])

  return (
    <Card
      id={`service-${title.replace(/\s+/g, "-").toLowerCase()}`}
      className={`group relative overflow-hidden bg-black/20 border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-black/30 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${
        isVisible ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : "opacity-0"
      }`}
    >
      <CardContent className="p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-xl">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400">
              <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export const ServicesSection2 = () => {
  return (
    <section
      id="services"
      className="relative py-20 px-4 z-10 bg-gradient-to-r from-blue-900/10 to-cyan-900/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Big SERVICES text */}
        <div className="hidden lg:flex col-span-2 justify-center items-center">
          <h1
            className="font-bold rotate-270 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent"
            style={{ fontSize: "20rem", lineHeight: 1 }}
          >
            SERVICES
          </h1>
        </div>

        {/* Right: Actual content */}
        <div className="col-span-1 lg:col-span-10">
          <div className="text-center lg:text-left mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
