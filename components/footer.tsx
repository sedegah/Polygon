export function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Polygon</h2>
            <p className="text-muted-foreground">© {new Date().getFullYear()} Kimathi Elikplim Sedegah</p>
          </div>
          <div className="mt-8 md:mt-0 animate-fade-in-up stagger-1">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Connect</h3>
            <div className="space-y-3">
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
              <a
                href="https://kimathisedegah.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Portfolio
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 animate-fade-in-up stagger-2">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Explore</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                All Projects
              </Link>
              <a
                href="mailto:kimathi.sedegah@example.com"
                className="block text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
