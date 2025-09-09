import { experiences, glowColors } from "@/data/work";
import { TimelineCard } from "../timeline-card";

export const ExperienceTimeline = () => {
    return (
        <section id="experience" className="relative py-20 bg-black/10 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Work Experience
                </h2>

                <div className="relative">
                    {/* Middle vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-pink-500 to-purple-500 transform -translate-x-1/2" />

                    {/* Timeline Cards */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const glow = glowColors[index % glowColors.length];
                            return (
                                <TimelineCard
                                    key={index}
                                    exp={exp}
                                    index={index}
                                    glow={glow}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
