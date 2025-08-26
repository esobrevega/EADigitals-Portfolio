// app/page.tsx
"use client";

import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";
import Particles from "@/blocks/Backgrounds/Particles/Particles";
import Squares from "@/blocks/Backgrounds/Squares/Squares";
import BlurText from "@/components/blur-text";
import GradientBG from "@/components/gradient-bg";
import { NavigationMenuNew } from "@/components/navbar-shad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Monitor, Sparkles } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {

  return (
    <main className="min-h-screen flex flex-col">

      {/* Hero Section with NavBar */}
      <section className="relative h-screen flex flex-col overflow-hidden">
        {/* Top Nav */}
        <header className="relative z-20 flex items-center justify-between p-6">
          <div className="flex items-center justify-center">
            <Image
              src="/EA3.png"
              alt="EA Digitals Logo"
              width={50}
              height={50}
              className="invert"
            />
          {/* <h2 className="text-2xl font-bold text-white">EADigitals</h2> */}
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <NavigationMenuNew />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us
            </Button>
          </div>
        </header>

        {/* Background Layers */}
        <div className="absolute inset-0 clip-diagonal-reversed">
          <Iridescence
            color={[0.11, 0.57, 0.82]}     
            mouseReact={false}
            amplitude={0.2}
            speed={0.5}
          />
        </div>
        {/* <div className="absolute inset-0 bg-white clip-diagonal-bottom-reversed" /> */}

        {/* Centered Hero Text */}
        <div className="relative z-20 grid grid-cols-2 p-10">
          <div className="items-center justify-start p-10">
            <Image
              src="/phone2.png"
              alt="EA Digitals Logo"
              width={400}
              height={50}
            />
          </div>
          <div>
          <h1 className="text-8xl font-bold text-white drop-shadow-lg text-right">
            Building Modern Websites
          </h1>
             <p className="max-w-2xl text-lg text-black text-right ml-auto pr-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget magna nisi.
            </p>
            </div>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden">

        {/* Middle Blue Section */}
        <div className="absolute inset-0 bg-[#29175D] clip-middle">
          <GradientBG />
        </div>


        {/* Content on top */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-5xl font-bold max-w-3xl text-white">
            We Build Stunning Websites for Your Business 🚀
          </h1>
          <p className="text-lg text-blue-100 mt-6 max-w-xl">
            At EA Digitals, we craft modern, responsive, and high-performing websites that help your brand shine online.
          </p>

          {/* Example buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-[#29175D] rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden">

        {/* Middle Blue Section */}
        <div className="absolute inset-0 bg-[#29175D] clip-middle-r">
          <Squares
          speed={0.3} 
          squareSize={40}
          direction='up' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
          />
          </div>
   
        {/* Content on top */}
        <div className="relative flex items-center justify-center h-full text-center">
          <h1 className="text-4xl font-bold text-white">EA Digitals</h1>
        </div>
      </section>

      <section className="relative h-full flex flex-col overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[#29175D]">
          <Particles
            particleColors={['#22D3EE', '#E879F9']}
            particleCount={500}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={500}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Centered Hero Text */}
        <div className="relative flex items-center justify-start p-10">
          <BlurText
            text="Building Modern WebApps"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-8xl font-bold text-white drop-shadow-lg col-span-1"
          />
        </div>
              <div className="relative flex items-center justify-start p-10">
          <BlurText
            text="Building Modern WebApps"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-8xl font-bold text-white drop-shadow-lg col-span-1"
          />
        </div>
              <div className="relative flex items-center justify-start p-10">
          <BlurText
            text="Building Modern WebApps"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-8xl font-bold text-white drop-shadow-lg col-span-1"
          />
        </div>
                    <div className="relative flex items-center justify-start p-10">
          <BlurText
            text="Building Modern WebApps"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-8xl font-bold text-white drop-shadow-lg col-span-1"
          />
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Web Design",
                desc: "Beautiful, modern, and user-friendly website designs tailored for your brand."
              },
              {
                icon: <Monitor className="w-8 h-8 text-blue-600" />,
                title: "Web Development",
                desc: "Fast, secure, and scalable websites built with the latest technologies."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-blue-600" />,
                title: "Brand Identity",
                desc: "Custom branding, visuals, and digital assets to help you stand out online."
              },
            ].map((service, i) => (
              <Card key={i} className="shadow-md hover:shadow-lg transition">
                <CardHeader className="flex flex-col items-center text-center">
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Why Choose Us */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose EA Digitals?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We’ve helped businesses of all sizes bring their vision online. From small startups to established brands, 
            our team ensures your website not only looks great but performs flawlessly.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Explore Our Work
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Online Presence?</h2>
        <p className="mb-8 text-blue-100">Let’s work together to create a website that truly represents your business.</p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-blue-200">
          Get Started Today
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EA Digitals. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
