import type { Project } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 gap-24">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
        >
          <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
            <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
              <Image
                src={project.image || `/placeholder.svg?height=600&width=800&text=${project.name}`}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center`}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold">{project.name}</h2>
                <p className="text-xl text-gray-600">{project.description}</p>
              </div>

              {project.tags && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
