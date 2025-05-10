"use client"

import type { Project } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const placeholderUrl = `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(project.name)}`
  const imageUrl = imageError || !project.image ? placeholderUrl : project.image

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0
  const animationClass = isEven ? "animate-slide-in-left" : "animate-slide-in-right"
  const delayClass = `stagger-${(index % 5) + 1}`

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 ${isVisible ? animationClass : ""} ${delayClass}`}
    >
      <div className={isEven ? "" : "md:order-2"}>
        <div className="stylish-card image-hover-zoom h-full group">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={project.name}
            width={800}
            height={450}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      <div className={`flex flex-col justify-center ${isEven ? "" : "md:order-1"}`}>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{project.name}</h2>
          <p className="text-foreground/70 text-lg">{project.description}</p>
          {project.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-4 pt-4">
            <Link href={project.url} target="_blank" rel="noopener noreferrer" className="fancy-button group">
              <span className="relative z-10">View Project</span>
            </Link>
            <Link href={`/${project.id}`} className="fancy-button-outline group">
              <span className="relative z-10">Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
