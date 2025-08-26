import ProfileCard from "@/blocks/Components/ProfileCard/ProfileCard";
import { Badge } from "../ui/badge";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 z-10 bg-gradient-to-b from-black/50 to-black/80"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT TEXT COLUMN */}
          <div className="flex-1">
            <Badge
              variant="secondary"
              className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30"
            >
              About EA Digitals
            </Badge>

            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Your Digital Partner
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              EA Digitals is an indie digital solutions company specializing in
              comprehensive tech services. We bridge the gap between innovative
              ideas and practical digital solutions, helping businesses and
              individuals achieve their goals through technology.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              From custom websites to complex software systems, Excel
              automation to hardware setup, we deliver quality solutions that
              drive results. Our expertise spans across multiple domains,
              ensuring you get the right solution for your specific needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                <span className="text-gray-300">5+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                <span className="text-gray-300">Multi-Domain Expertise</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                <span className="text-gray-300">Client-Focused Approach</span>
              </div>
            </div>
          </div>

          {/* RIGHT PROFILE CARDS */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
              <div className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]">
                <ProfileCard
                  name="Emmanuel Sobrevega"
                  title="Software Engineer"
                  handle="luoie"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/Emman.png"
                  iconUrl="/EA2nbg.png"
                  grainUrl="/grain.svg"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  className="w-full"
                />
              </div>
              <div className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]">
                <ProfileCard
                  name="Alfredo Angelo"
                  title="Software Engineer"
                  handle="redangg"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/Al2.png"
                  iconUrl="/EA2nbg.png"
                  grainUrl="/grain.svg"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
