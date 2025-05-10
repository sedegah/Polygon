import { Github, Linkedin, Globe } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <Link
        href="https://linkedin.com/in/kimathi-sedegah"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <div className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
          <Linkedin size={20} />
        </div>
      </Link>
      <Link
        href="https://github.com/sedegah"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
        aria-label="GitHub"
      >
        <div className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
          <Github size={20} />
        </div>
      </Link>
      <Link
        href="https://kimathisedegah.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
        aria-label="Portfolio"
      >
        <div className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
          <Globe size={20} />
        </div>
      </Link>
    </div>
  )
}
