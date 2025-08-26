import { scrollToSection } from "@/utils/scroll-to-section"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 z-10">
            <div className="max-w-5xl mx-auto relative z-10">
                <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Digital Solutions & Services
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-9xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block leading-[1.15] pb-2 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                        EA Digitals
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Creative humans making digital experiences. We transform your ideas into digital reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                    <Button
                        size="lg"
                        onClick={() => scrollToSection('services')}
                        className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-none shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
                    >
                        View Services
                    </Button>
                    <Button
                        size="lg"
                        variant="default"
                        onClick={() => scrollToSection('portfolio')}
                        className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-blue-400 transition-all duration-300 text-lg px-8 py-6 cursor-pointer"
                    >
                        See Portfolio
                    </Button>
                </div>
            </div>
        </section>
    )
}