import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Load Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Load Playfair Display font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Polygon | Project Showcase by Kimathi Elikplim Sedegah",
  description:
    "A showcase of projects by Kimathi Elikplim Sedegah - developer, designer, and creator of digital experiences.",
  keywords: ["portfolio", "projects", "developer", "Kimathi Sedegah", "web development"],
  authors: [{ name: "Kimathi Elikplim Sedegah" }],
  openGraph: {
    title: "Polygon | Project Showcase",
    description: "A showcase of projects by Kimathi Elikplim Sedegah",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
