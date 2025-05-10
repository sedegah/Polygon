"use client"

import Link from "next/link"
import { useState } from "react"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-serif font-bold">
            Polygon
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors">
              Projects
            </Link>
            <Link
              href="https://linkedin.com/in/kimathi-sedegah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/sedegah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://kimathisedegah.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Portfolio
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="https://linkedin.com/in/kimathi-sedegah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/sedegah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </Link>
            <Link
              href="https://kimathisedegah.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
