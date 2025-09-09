import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export const ContactSectionV = () => {
    return (
        <section id="contact" className="relative py-20 px-4 z-10 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Get In Touch
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Let&apos;s discuss your requirements and create something amazing together.
                    Get a free consultation and quote for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-full border-none shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-lg px-12 py-6"
                    >
                        Get Free Quote
                    </Button>
                    <Button
                        size="lg"
                        variant="default"
                        className="border-white/30 text-white hover:bg-white/10 hover:border-blue-400 rounded-full transition-all duration-300 text-lg px-12 py-6"
                    >
                        Schedule Call
                    </Button>
                </div>
            </div>
        </section>)
}