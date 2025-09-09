import { scrollToSection } from "@/utils/scroll-to-section"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import DarkVeil from "@/blocks/Backgrounds/DarkVeil/DarkVeil"

export const HeroSectionV = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen px-4 text-white flex items-center overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-end">
                <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-6">
                    <Badge
                        variant="secondary"
                        className="mb-2 bg-[#fb77dc]/20 text-[#fb77dc] border-[#fb77dc]/30 animate-in fade-in slide-in-from-bottom-4 duration-700"
                    >
                        Digital Solutions & Services
                    </Badge>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <span className="inline-block leading-[1.15] pb-2 bg-gradient-to-r from-white via-[#fb77dc] to-purple-400 bg-clip-text text-transparent">
                            EA Digitals
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        We craft immersive digital experiences, transforming ideas into cutting-edge websites, apps, and software solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <Button
                            size="lg"
                            onClick={() => scrollToSection('services')}
                            className="rounded-full bg-gradient-to-r from-[#fb77dc] to-purple-600 hover:from-[#fb4ecf] hover:to-purple-700 text-white border-none shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
                        >
                            View Services
                        </Button>
                        <Button
                            size="lg"
                            variant="default"
                            onClick={() => scrollToSection('portfolio')}
                            className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-[#fb77dc] transition-all duration-300 text-lg px-8 py-6 cursor-pointer"
                        >
                            See Portfolio
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
