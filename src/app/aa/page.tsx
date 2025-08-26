'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Squares from '@/blocks/Backgrounds/Squares/Squares'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

interface StatItemProps {
  number: string
  label: string
}

interface FloatingShapeProps {
  className: string
}

// Removed FloatingShape component as it's replaced by Squares background

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`feature-${title.replace(/\s+/g, '-').toLowerCase()}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [title])

  return (
    <Card 
      id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`group relative overflow-hidden bg-black/20 border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-black/30 hover:border-violet-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 ${
        isVisible ? 'animate-in fade-in slide-in-from-bottom-4 duration-700' : 'opacity-0'
      }`}
    >
      <CardContent className="p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-xl">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  const [displayNumber, setDisplayNumber] = useState('0')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const isPercentage = number.includes('%')
    const isPlus = number.includes('+')
    const isSlash = number.includes('/')

    if (isSlash) {
      setDisplayNumber(number)
      return
    }

    let finalNumber: number
    if (isPercentage) {
      finalNumber = parseFloat(number)
    } else {
      finalNumber = parseInt(number.replace(/[^0-9]/g, ''))
    }

    let current = 0
    const increment = finalNumber / 100
    const timer = setInterval(() => {
      current += increment
      if (current >= finalNumber) {
        current = finalNumber
        clearInterval(timer)
      }

      if (isPercentage) {
        setDisplayNumber(current.toFixed(1) + '%')
      } else if (isPlus && finalNumber >= 1000000) {
        setDisplayNumber((current / 1000000).toFixed(1) + 'M+')
      } else if (isPlus) {
        setDisplayNumber(Math.floor(current) + '+')
      } else {
        setDisplayNumber(Math.floor(current).toString())
      }
    }, 20)

    return () => clearInterval(timer)
  }, [isVisible, number])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [label])

  return (
    <div id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-2">
        {displayNumber}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}

export default function LandingPage() {
  const [headerOpacity, setHeaderOpacity] = useState(0.9)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const opacity = Math.min(0.95, 0.7 + (scrolled / 1000))
      setHeaderOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features: FeatureCardProps[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience unprecedented speed with our optimized architecture that delivers results in milliseconds, not seconds.'
    },
    {
      icon: '🛡️',
      title: 'Ultra Secure',
      description: 'Your data is protected by military-grade encryption and advanced security protocols that evolve with emerging threats.'
    },
    {
      icon: '🚀',
      title: 'Infinitely Scalable',
      description: 'Grow without limits. Our infrastructure automatically adapts to your needs, from startup to enterprise scale.'
    },
    {
      icon: '🎯',
      title: 'AI-Powered',
      description: 'Harness the power of artificial intelligence to automate workflows and make intelligent decisions at scale.'
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Connect with users worldwide through our distributed network spanning across continents and time zones.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Designed for the modern world where mobile experiences matter most, ensuring perfect performance everywhere.'
    }
  ]

  const stats: StatItemProps[] = [
    { number: '1000000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Squares Background */}
      <div className="fixed inset-0 z-0">
        <Squares
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-900/10 via-black/40 to-purple-900/10 z-[1]" />

      {/* Header */}
      <header 
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300"
        style={{ backgroundColor: `rgba(0, 0, 0, ${headerOpacity})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              EA Digitals
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Features', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-violet-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            <Button 
              onClick={() => scrollToSection('get-started')}
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-none shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
            The Future is Now
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Experience the next generation of digital innovation with cutting-edge solutions that transform possibilities into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button 
              size="lg"
              onClick={() => scrollToSection('get-started')}
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-none shadow-xl hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('features')}
              className="border-white/30 text-white hover:bg-white/10 hover:border-violet-400 transition-all duration-300 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 bg-gradient-to-b from-black/50 to-black/80 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-violet-500/20 text-violet-300 border-violet-500/30">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
              Why Choose Nexus
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the powerful features that make us the preferred choice for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="relative py-20 px-4 bg-gradient-to-r from-violet-900/20 to-purple-900/20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies who have already made the leap into tomorrow.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-none shadow-xl hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 text-lg px-12 py-6"
          >
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-12 px-4 border-t border-white/10 z-10 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Nexus
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Building the future, one innovation at a time.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {['Privacy', 'Terms', 'Support', 'Contact'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2025 Nexus. All rights reserved. Built for the future.
          </div>
        </div>
      </footer>
    </div>
  )
}