'use client'

import React from 'react'
import { Oswald } from "next/font/google";
import { NavBarFrosted } from '@/components/sections/navbar-frosted'
import { LogoLoopSection } from '@/components/sections/logo-loop-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PortfolioCarousel } from '@/components/sections/portfolio-carousel'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection2 } from '@/components/sections/services-section-v2'
import { HeroSection } from '@/components/sections/hero-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FooterSection } from '@/components/sections/footer'
import { AnimatedBackground } from '@/components/sections/animated-bg'
import AnimatedHeadline from '@/components/sections/framer-slider';
import  { WordStackSection } from '@/components/sections/snap-to-word';
import { StickySticky } from '@/components/sections/sticky-sticky';

const oswald = Oswald({ subsets: ["latin"], weight: ["300"] });

export default function EADigitalsLanding() {

  return (
    <div className="min-h-screen bg-[#100e09] text-white overflow-x-hidden">
      <AnimatedBackground />
      <NavBarFrosted />
      <HeroSection />
      <StickySticky />
      <AnimatedHeadline />
      <ServicesSection2 />
      <LogoLoopSection />
      <PortfolioCarousel />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}