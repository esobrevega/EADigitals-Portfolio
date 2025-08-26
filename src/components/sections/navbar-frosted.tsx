import { Home, Briefcase, FolderOpen, Info, Mail } from "lucide-react"; // icons
import { Button } from "../ui/button";
import { Oswald } from "next/font/google";
import { scrollToSection } from "@/utils/scroll-to-section";

const oswald = Oswald({ subsets: ["latin"], weight: ["300"] });

const navItems = [
  { name: "Home", icon: <Home className="w-5 h-5" /> },
  { name: "Services", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Portfolio", icon: <FolderOpen className="w-5 h-5" /> },
  { name: "About", icon: <Info className="w-5 h-5" /> },
  { name: "Contact", icon: <Mail className="w-5 h-5" /> },
];

export const NavBarFrosted = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg shadow-blue-500/10 rounded-full transition-all duration-300">
        <div className="flex justify-between items-center px-6 py-3">

          {/* Logo */}
          <div className={`${oswald.className} text-lg md:text-xl font-bold text-white`}>
            EA Digitals
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className="text-white/80 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Nav (icons only) */}
          <nav className="flex md:hidden items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className="text-white/80 hover:text-white transition-all duration-300"
                title={item.name} // shows tooltip on hover
              >
                {item.icon}
              </button>
            ))}
          </nav>

          {/* CTA button */}
          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:flex bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-full border-none shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  )
}
