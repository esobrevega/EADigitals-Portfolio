'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Squares from '@/blocks/Backgrounds/Squares/Squares'
import Particles from '@/blocks/Backgrounds/Particles/Particles'
import { Home, Briefcase, FolderOpen, Info, Mail } from "lucide-react"; // icons
import Aurora from '@/blocks/Backgrounds/Aurora/Aurora'
import { SiCanva, SiGithub, SiGmail, SiGoogle, SiGooglecalendar, SiGoogledocs, SiGoogledrive, SiGooglesheets, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiZod } from 'react-icons/si'
import LogoLoop from '@/blocks/Animations/LogoLoop/LogoLoop'
import { FaReact } from 'react-icons/fa'
import { Oswald } from "next/font/google";
import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard'

const oswald = Oswald({ subsets: ["latin"], weight: ["300"] });

const navItems = [
  { name: "Home", icon: <Home className="w-5 h-5" /> },
  { name: "Services", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Portfolio", icon: <FolderOpen className="w-5 h-5" /> },
  { name: "About", icon: <Info className="w-5 h-5" /> },
  { name: "Contact", icon: <Mail className="w-5 h-5" /> },
];

const techLogos = [
  { node: <FaReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGithub />},
  { node: <SiZod />},
];

const genTools = [
  {node: <img src='/google-drive.svg' alt="Google Drive" width={48} height={48} />},
  {node: <SiGoogle />},
  {node: <img src='/gmail.svg' alt="Gmail" width={54} height={54} />},
  {node: <SiGooglecalendar />},
  {node: <img src='/google-sheets.svg' alt="Gmail" width={40} height={40} />},
  {node: <img src='/google-docs.svg' alt="Gmail" width={40} height={40} />},
  {node: <img src='/canva.svg' alt="Gmail" width={50} height={50} />},

]


interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
}

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

interface StatItemProps {
  number: string
  label: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
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

    const element = document.getElementById(`service-${title.replace(/\s+/g, '-').toLowerCase()}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [title])

  return (
    <Card 
      id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`group relative overflow-hidden bg-black/20 border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-black/30 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${
        isVisible ? 'animate-in fade-in slide-in-from-bottom-4 duration-700' : 'opacity-0'
      }`}
    >
      <CardContent className="p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-xl">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400">
              <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, image, tags }) => {
  return (
    <Card className="group overflow-hidden bg-black/20 border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-black/30 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center text-4xl">
        {image}
      </div>
      <CardContent className="p-6">
        <Badge variant="secondary" className="mb-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
          {category}
        </Badge>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
              {tag}
            </span>
          ))}
        </div>
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
    const increment = finalNumber / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= finalNumber) {
        current = finalNumber
        clearInterval(timer)
      }

      if (isPercentage) {
        setDisplayNumber(current.toFixed(0) + '%')
      } else if (isPlus) {
        setDisplayNumber(Math.floor(current) + '+')
      } else {
        setDisplayNumber(Math.floor(current).toString())
      }
    }, 30)

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
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
        {displayNumber}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}

export default function EADigitalsLanding() {
  const [headerOpacity, setHeaderOpacity] = useState(0.9)
  const [activeFilter, setActiveFilter] = useState('all')

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

  const services: ServiceCardProps[] = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Custom websites and web applications built with modern technologies and responsive design.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First']
    },
    {
      icon: '📊',
      title: 'Excel and Google Sheet Templates',
      description: 'Professional Excel templates for business automation, data analysis, and reporting.',
      features: ['Business Templates', 'Financial Models', 'Dashboard Creation', 'Automation Macros', 'Custom Functions']
    },
    {
      icon: '🏷️',
      title: 'Data Annotation',
      description: 'High-quality data labeling and annotation services for machine learning and AI training datasets.',
      features: ['Image Annotation', 'Text Classification', 'Object Detection', 'Video Labeling', 'Audio Transcription']
    },
    {
      icon: '💾',
      title: 'Digital Products',
      description: 'Digital solutions including mobile apps, desktop software, and online tools.',
      features: ['Mobile Apps', 'Desktop Software', 'Web Tools', 'API Development', 'Cloud Solutions']
    },
    {
      icon: '⚙️',
      title: 'Software Services',
      description: 'Custom software development, system integration, and technical consulting.',
      features: ['Custom Development', 'System Integration', 'Database Design', 'API Integration', 'Technical Consulting']
    },
    {
      icon: '🔧',
      title: 'Hardware Solutions',
      description: 'Hardware setup, maintenance, and integration services for businesses.',
      features: ['Hardware Setup', 'Network Configuration', 'System Maintenance', 'Security Systems', 'IoT Solutions']
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions to grow your online presence.',
      features: ['Social Media Marketing', 'Content Creation', 'SEO Services', 'Email Marketing', 'Analytics & Reporting']
    }
  ]

  const projects: ProjectCardProps[] = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Financial Dashboard',
      category: 'Excel Template',
      description: 'Comprehensive financial tracking and reporting template for small businesses.',
      image: '📊',
      tags: ['Excel', 'VBA', 'Charts', 'Automation']
    },
    {
      title: 'Medical Image Dataset',
      category: 'Data Annotation',
      description: 'Annotated 10,000+ medical images for AI diagnostic model training with precise organ segmentation.',
      image: '🏥',
      tags: ['Medical Imaging', 'Segmentation', 'DICOM', 'Quality Control']
    },
    {
      title: 'Inventory Management',
      category: 'Software',
      description: 'Desktop application for warehouse and inventory management with barcode scanning.',
      image: '📦',
      tags: ['Electron', 'SQLite', 'Barcode', 'Reports']
    },
    {
      title: 'Restaurant POS System',
      category: 'Hardware + Software',
      description: 'Complete point of sale system with hardware setup and custom software.',
      image: '🍽️',
      tags: ['POS Hardware', 'Custom Software', 'Payment Integration']
    },
    {
      title: 'Chatbot Training Data',
      category: 'Data Annotation',
      description: 'Classified and labeled 50,000+ customer service conversations for chatbot training.',
      image: '🤖',
      tags: ['NLP', 'Intent Classification', 'Entity Extraction', 'Sentiment Analysis']
    },
    {
      title: 'Marketing Analytics Tool',
      category: 'Digital Product',
      description: 'Web-based analytics tool for tracking marketing campaigns and ROI.',
      image: '📈',
      tags: ['Analytics', 'API Integration', 'Dashboard', 'Reports']
    },
    {
      title: 'CRM Template Suite',
      category: 'Excel Template',
      description: 'Complete customer relationship management templates for sales tracking.',
      image: '👥',
      tags: ['CRM', 'Sales Tracking', 'Customer Data', 'Reports']
    },
    {
      title: 'Autonomous Vehicle Dataset',
      category: 'Data Annotation',
      description: 'Labeled traffic signs, pedestrians, and vehicles in 25,000+ driving scenario images.',
      image: '🚗',
      tags: ['Computer Vision', 'Object Detection', 'Bounding Boxes', 'Traffic Analysis']
    }
  ]

  const stats: StatItemProps[] = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(activeFilter.toLowerCase()))

  const categories = ['all', 'web development', 'excel template', 'data annotation', 'software', 'hardware', 'digital product']

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Squares Background */}
      <div className="fixed inset-0 z-0">
        {/* <Particles
          particleColors={['#ffffff', '#90CAF9', '#62cbdb']}
          particleCount={600}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={150}
          alphaParticles={false}
          disableRotation={true}
        /> */}
        <Aurora
          colorStops={['#ffffff', '#90CAF9', '#62cbdb']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      {/* <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-black/40 to-cyan-900/10 z-[1]" /> */}

      {/* Header */}
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



      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-5xl mx-auto relative z-10">
          <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Digital Solutions & Services
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-block leading-[1.15] pb-2 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              EA Digitals
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Creative humans making digital experiences. We transform your ideas into digital reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-none shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
            >
              View Services
            </Button>
            <Button 
              size="lg"
              variant="default"
              onClick={() => scrollToSection('portfolio')}
              className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-blue-400 transition-all duration-300 text-lg px-8 py-6 cursor-pointer"
            >
              See Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 z-10 bg-gradient-to-r from-blue-900/10 to-cyan-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))} */}
            <h1 className='text-center text-4xl col-span-2 lg:col-span-4'> Tools </h1>
            <LogoLoop
              logos={genTools}
              speed={50}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor='#000000'
              ariaLabel="Technology partners"
              className='col-span-2 lg:col-span-4 w-full'
            />
            <h1 className='text-center text-4xl col-span-2 lg:col-span-4'> 🛠️ Technology Stack </h1>
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="right"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor='#000000'
              ariaLabel="Technology partners"
              className='col-span-2 lg:col-span-4 w-full'
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Showcasing our expertise across various digital solutions
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "default"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={
                    activeFilter === category 
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white" 
                      : "border-white/30 text-white hover:bg-white/10"
                  }
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 z-10 bg-gradient-to-b from-black/50 to-black/80">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                About EA Digitals
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Your Digital Partner
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                EA Digitals is an indie digital solutions company specializing in comprehensive tech services. 
                We bridge the gap between innovative ideas and practical digital solutions, helping businesses 
                and individuals achieve their goals through technology.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                From custom websites to complex software systems, Excel automation to hardware setup, 
                we deliver quality solutions that drive results. Our expertise spans across multiple 
                domains, ensuring you get the right solution for your specific needs.
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
            <div className="relative">
              {/* <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-white/10 flex items-center justify-center text-6xl backdrop-blur-sm">
              </div> */}
              <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 relative'>
                <ProfileCard
                  name="Emmanuel Sobrevega"
                  title="Software Engineer"
                  handle="luoie"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/Emman.png"
                  iconUrl="/EA2nbg.png"
                  grainUrl='/grain.svg'
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  className=''
                />
                <ProfileCard
                  name="Alfredo Angelo"
                  title="Software Engineer"
                  handle="redangg"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/Al2.png"
                  iconUrl="/EA2nbg.png"
                  grainUrl='/grain.svg'
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 z-10 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            Get a free consultation and quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-none shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-lg px-12 py-6"
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg"
              variant="default"
              className="border-white/30 text-white hover:bg-white/10 hover:border-blue-400 transition-all duration-300 text-lg px-12 py-6"
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/10 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  EA
                </div>
                <div className="text-xl font-bold text-white">EA Digitals</div>
              </div>
              <p className="text-gray-400 max-w-md mb-4">
                Your trusted partner for comprehensive digital solutions. From web development to hardware services, we've got you covered.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Website Development</li>
                <li>Data Annotation</li>
                <li>Excel and Google Sheets Templates</li>
                <li>Software Solutions</li>
                <li>Hardware Services</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ea.digitals0508@gmail.com</li>
                <li>(+63) 9275687502</li>
                <li>Available 24/7</li>
                <li>Free Consultation</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="text-gray-500 text-sm">
              © 2025 EA Digitals. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Support'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}