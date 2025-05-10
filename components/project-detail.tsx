import type { Project } from "@/lib/projects"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={project.image || `/placeholder.svg?height=600&width=1200&text=${project.name}`}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
          <ArrowLeft size={16} /> Back to all projects
        </Link>

        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <p className="text-gray-300 text-lg mb-6">{project.description}</p>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Visit Project <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  )
}
