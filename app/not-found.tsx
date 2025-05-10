"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function NotFound() {
  useEffect(() => {
    // Add animation class after component mounts
    const element = document.getElementById("not-found-content")
    if (element) {
      element.classList.add("animate-fade-in-up")
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <div id="not-found-content" className="text-center opacity-0">
          <h1 className="text-8xl md:text-9xl font-bold mb-6 gradient-text">404</h1>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 mb-12">The page you're looking for doesn't exist.</p>
          <Link href="/" className="fancy-button text-lg px-8 py-4 group">
            Return Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
