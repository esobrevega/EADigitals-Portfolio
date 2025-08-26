"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function AboutMe() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-start px-6 pb-12 space-y-32 scroll-smooth">

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-slate-900/70 border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-lg font-bold text-blue-400">EA Portfolio</h1>
          <ul className="flex gap-6 text-slate-300">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center space-y-4 pt-28"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-400">EA</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          I’m a passionate developer who loves building modern web apps,
          solving problems, and designing clean user experiences.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild variant="outline" size="icon" className="rounded-full border-slate-600 hover:bg-blue-500/20">
            <a href="https://github.com/" target="_blank"><Github className="w-5 h-5" /></a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full border-slate-600 hover:bg-blue-500/20">
            <a href="https://linkedin.com/" target="_blank"><Linkedin className="w-5 h-5" /></a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full border-slate-600 hover:bg-blue-500/20">
            <a href="mailto:your@email.com"><Mail className="w-5 h-5" /></a>
          </Button>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {["Frontend", "Backend", "Tools"].map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <Card className="bg-slate-800/60 border border-slate-700 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
              <CardHeader>
                <h2 className="text-xl font-semibold text-blue-400">{title}</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  {title === "Frontend" && ["React", "Next.js", "Tailwind", "TypeScript"].map(skill => <li key={skill}>• {skill}</li>)}
                  {title === "Backend" && ["Node.js", "Express", "PostgreSQL", "GraphQL"].map(skill => <li key={skill}>• {skill}</li>)}
                  {title === "Tools" && ["Git", "Docker", "Figma", "Jira"].map(skill => <li key={skill}>• {skill}</li>)}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
            >
              <Card className="bg-slate-800/60 border border-slate-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-500/20 transition">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-500" />
                <CardHeader>
                  <h3 className="text-xl font-semibold">Project {n}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Brief description of project {n} and its impact.</p>
                  <Button className="mt-4 bg-blue-500 hover:bg-blue-600">View Project</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-slate-300">
          Whether you want to collaborate, have a project in mind, or just say hi — I’d love to hear from you.
        </p>
        <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full px-8">
          <a href="mailto:your@email.com">Say Hello</a>
        </Button>
      </section>

    </main>
  )
}
