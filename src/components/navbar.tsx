import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="w-full bg-[#15a2de] backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-white">EA Digitals</div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                <a href="#services" className="hover:text-blue-600">Services</a>
                <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
                <a href="#about" className="hover:text-blue-600">About</a>
            </nav>
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white">
                Get a Quote
            </Button>
        </div>
      </header>
  );
};