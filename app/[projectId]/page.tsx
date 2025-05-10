"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.projectId)

  if (!project) {
    notFound()
  }

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

  const placeholderUrl = `/placeholder.svg?height=900&width=1600&text=${encodeURIComponent(project.name)}`
  const imageUrl = project.image || placeholderUrl

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container py-16">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-12 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 transition-transform group-hover:-translate-x-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all projects
          </Link>

          {/* Project header */}
          <div className="max-w-4xl mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.name}</h1>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mb-8"></div>
            <p className="text-xl text-foreground/70 max-w-2xl">{project.description}</p>
          </div>

          {/* Project image */}
          <div className="stylish-card mb-16 animate-scale-in">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={project.name}
              width={1600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Project details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 reveal">
              <h2 className="text-2xl font-bold mb-6">About this project</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                {project.description} This project showcases my skills in design and development, focusing on creating
                intuitive user experiences and clean, functional interfaces.
              </p>
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="fancy-button group">
                Visit Live Project
              </Link>
            </div>

            <div className="reveal">
              <div className="stylish-card p-8">
                <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-2">Year</h3>
                    <p className="text-foreground text-lg">{project.year || "2023"}</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-2">Connect</h3>
                    <div className="space-y-2">
                      <a
                        href="https://linkedin.com/in/kimathi-sedegah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/sedegah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related projects section */}
          <div className="py-16 reveal">
            <h2 className="text-2xl font-bold mb-8">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/${relatedProject.id}`} className="stylish-card block group">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={
                          relatedProject.image || `/placeholder.svg?height=400&width=600&text=${relatedProject.name}`
                        }
                        alt={relatedProject.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {relatedProject.name}
                      </h3>
                      <p className="text-foreground/70 line-clamp-2">{relatedProject.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
