export interface Glow {
  base: string;
  shadow: string;
}

export const glowColors: Glow[] = [
    { base: "text-pink-400", shadow: "rgba(251,119,220," }, // pink
    { base: "text-purple-400", shadow: "rgba(192,132,252," }, // purple
    { base: "text-blue-400", shadow: "rgba(96,165,250," }, // blue
    { base: "text-green-400", shadow: "rgba(74,222,128," }, // green
    { base: "text-yellow-400", shadow: "rgba(250,204,21," }, // yellow
];

export interface ExperiencesProps {
    role: string,
    company: string,
    location: string,
    period: string,
    duration: string,
    description: string,
    expbullet: string[],
    tags: string[]
}

export const experiences: ExperiencesProps[] = [
    {

        role: "Freelance Full Stack Developer",
        company: "Freelance",
        location: "Manila",
        period: "2024 – Present",
        duration: "1 Year",
        description: "Built modern, scalable web applications using React, TypeScript, and TailwindCSS. Collaborated closely with designers to deliver user-friendly UIs.",
        expbullet: [
            "1","2","3"
        ],
        tags: [
            'Next.js',
            'Tailwind CSS',
            'React'
        ]
    },
    {
        role: "Business Operations Center Exective",
        company: "Asian Advantages Inc.",
        location: "Makati",
        period: "2019 – 2025",
        duration: "5 Years",
        description:"Developed backend services with Node.js and Express. Implemented REST APIs, optimized database queries, and improved system performance.",
        expbullet: ["1","2","3"],
        tags: [
            'sample1',
            'sample2'
        ]
    },
    {
        role: "Desktop Support Specialist Intern",
        company: "Telstra PH",
        location: "Pasay",
        period: "2018",
        duration: "6 Months",
        description:"Assisted in developing proof-of-concept applications. Gained hands-on experience with cloud services and agile workflows.",
        expbullet: [
            "Offers advanced technical end-user support for internal desktop systems.",
            "Handles workstation setup and configuration.",
            "Executes routine tasks including software and hardware upgrades."
        ],
        tags: [
            'sample1',
            'sample2'
        ]
    },
];
