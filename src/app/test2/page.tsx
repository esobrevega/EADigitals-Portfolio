'use client'

import React from 'react'
import { Oswald } from "next/font/google";
import { AboutMe } from '@/components/sections-portfolio/about-me';
import { ExperienceTimeline } from '@/components/sections-portfolio/work-exp';

const oswald = Oswald({ subsets: ["latin"], weight: ["300"] });

export default function EADigitalsLanding() {

  return (
    <div className="min-h-screen bg-[#100e09] text-white overflow-x-hidden">
      <AboutMe />
      <ExperienceTimeline />
    </div>
  )
}