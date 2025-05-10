"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal")

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Initial check

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section with animated background */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full filter blur-[100px] opacity-20 animate-float"></div>
            <div
              className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full filter blur-[120px] opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Projects by <span className="gradient-text">Kimathi Sedegah</span>
              </h1>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mb-8"></div>
              <p className="text-xl text-foreground/70 max-w-2xl">
                A curated collection of digital experiences, applications, and websites created by Kimathi Elikplim
                Sedegah.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-16 reveal">Featured Projects</h2>
          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-indigo-900/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center reveal">
              <h2 className="text-4xl font-bold mb-6">Interested in working together?</h2>
              <p className="text-xl text-foreground/70 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <a href="mailto:kimathi.sedegah@example.com" className="fancy-button text-lg px-8 py-4 group">
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
