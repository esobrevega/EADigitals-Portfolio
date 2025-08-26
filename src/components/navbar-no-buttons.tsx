import Image from "next/image";

export const Navbar2 = () => {
  return (
    <header className="w-full bg-[#15a2de] backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
        <Image src="/EA2nbg.png" alt="EA Digitals Logo" width={50} height={30} />
            <div className="text-xl font-medium text-white">EA Digitals</div>
        </div>
      </header>
  );
};