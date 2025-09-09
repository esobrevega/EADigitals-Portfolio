import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import { ProjectCardProps, categories, projects } from "@/data/portfolio"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

const ProjectCard = ({ title, category, description, image, tags }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-black/20 border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-black/30 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 h-full">
      <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center text-4xl">
        {image}
      </div>
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <Badge variant="secondary" className="mb-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
            {category}
          </Badge>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export const PortfolioCarouselV = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()))

  return (
    <section id="portfolio" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Showcasing our expertise across various digital solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white"
                    : "border-white/30 text-white hover:bg-white/10"
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <Swiper
          key={activeFilter}
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: ".portfolio-pagination",
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
            1920: { slidesPerView: 5 },
          }}
          className="!px-4 lg:!px-12"
        >
          {filteredProjects.map((project, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="portfolio-pagination flex justify-center mt-8"></div>
      </div>
    </section>
  )
}
