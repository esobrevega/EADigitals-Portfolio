import { infos } from "@/data/about"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export const AboutMe = () => {
    return (
        <section className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                    <Badge
                        variant="secondary"
                        className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30"
                    >
                        About Me
                    </Badge>

                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                        Hi, I'm Emmanuel Sobrevega
                    </h2>

                    <ul className="p-3 space-y-5">
                        {infos.map((abtInfo, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-x-2 text-sm text-gray-400"
                            >
                                {abtInfo.icon}
                                {abtInfo.description}
                            </li>
                        ))}
                    </ul>

                    <p>Experienced Business Operations Executive with a demonstrated history of working in the gambling & casinos industry. Skilled in English, C#, Typescipt, Grafana, Technical Support, and Google Apps Script. Strong operations professional with a Bachelor's degree focused in Computer Engineering from Pamantasan ng Lungsod ng Maynila. </p>
                    <div className="flex flex-col items-start mt-5">
                        <Button >
                            Get in Touch
                        </Button>
                    </div>
                
                </div>

                <div className="flex-1">
                    <h1>Key Skills</h1>

                </div>
            </div>
        </section >
    )

}