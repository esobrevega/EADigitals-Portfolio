//timeline-card.tsx
import { useInView } from "react-intersection-observer";
import { ArrowRightIcon } from "lucide-react";
import { ExperiencesProps, Glow } from "@/data/work";

interface TimelineCardProps {
  exp: ExperiencesProps;
  index: number;
  glow: Glow;
}

export const TimelineCard = ({ exp, index, glow }: TimelineCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full ${
        isLeft ? "justify-start pr-0 md:pr-0" : "justify-end pl-0 md:pl-0"
      }`}
    >
      {/* Dot */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-pink-500 border-4 border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

      {/* Connector line that grows */}
      <div
        className={`absolute top-1/2 h-[2px] transition-all duration-700 ${
          isLeft ? "right-1/2" : "left-1/2"
        }`}
        style={{
          width: inView ? "2rem" : "0rem",
          transitionDelay: `${index * 150}ms`,
          background: isLeft
            ? "linear-gradient(to left, rgba(251,119,220,1) 0%, rgba(251,119,220,0) 100%)"
            : "linear-gradient(to right, rgba(251,119,220,1) 0%, rgba(251,119,220,0) 100%)",
        }}
      />

      {/* Card */}
      <div
        className={`group overflow-hidden bg-black/20 border border-white/20 backdrop-blur-sm rounded-sm p-5 w-full md:w-[24rem] transition-all duration-700 hover:bg-black/30 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          ${
            isLeft
              ? inView
                ? "md:translate-x-0"
                : "md:translate-x-12"
              : inView
              ? "md:translate-x-0"
              : "md:-translate-x-12"
          }
        `}
        style={{
          transitionDelay: `${index * 200}ms`,
          marginLeft: isLeft ? "8.5rem" : "0",
          marginRight: isLeft ? "0" : "8.5rem",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <h1
            className={`text-3xl ${glow.base}`}
            style={{
              textShadow: `
                0 0 2px ${glow.shadow}0.6),
                0 0 4px ${glow.shadow}0.4),
                0 0 6px ${glow.shadow}0.3)
              `,
            }}
          >
            {exp.period}
          </h1>
          <p className="text-xs text-gray-400">{exp.duration}</p>
        </div>
        <h3 className="text-xl transition-colors duration-300 group-hover:text-red-400">
          {exp.role}
        </h3>
        <div className="flex flex-center items-center gap-2">
          <p className="text-sm text-gray-400">{exp.company}</p>
          <div className="size-1 rounded-full bg-gray-400" />
          <p className="text-sm text-gray-400">{exp.location}</p>
        </div>
        <p className=" text-sm mt-7 text-gray-300">{exp.description}</p>
        <ul className="p-3 space-y-5">
          {exp.expbullet.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center text-sm text-gray-400">
              <ArrowRightIcon className="w-5 h-5 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 my-3">
          {exp.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-sm text-center"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
