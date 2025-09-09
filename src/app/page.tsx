'use client'

import React from 'react'
import { Oswald } from "next/font/google";
import { FooterSection } from '@/components/sections/footer'
import { NavBarFrostedV } from '@/components/sections-violet/navbar-frosted';
import { AnimatedBackgroundV } from '@/components/sections-violet/animated-bg';
import { HeroSectionV } from '@/components/sections-violet/hero-section';
import AnimatedHeadlineV from '@/components/sections-violet/framer-slider';
import { ServicesSection2V } from '@/components/sections-violet/services-section-v2';
import { LogoLoopSectionV } from '@/components/sections-violet/logo-loop-section';
import { PortfolioCarouselV } from '@/components/sections-violet/portfolio-carousel';
import { AboutSectionEts } from '@/components/sections-violet/about-section';
import { ContactSectionV } from '@/components/sections-violet/contact-section';
import { ExperienceTimeline } from '@/components/sections-portfolio/work-exp';


const oswald = Oswald({ subsets: ["latin"], weight: ["300"] });

export default function EADigitalsLanding() {

  return (
    <div className="min-h-screen bg-[#100e09] text-white overflow-x-hidden">
      <AnimatedBackgroundV />
      <NavBarFrostedV />
      <HeroSectionV />
      <AnimatedHeadlineV />
      <ServicesSection2V />
      <LogoLoopSectionV />
      <PortfolioCarouselV />
      <AboutSectionEts />
      <ExperienceTimeline />
      <ContactSectionV />
      <FooterSection />
    </div>
  )
}