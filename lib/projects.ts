export interface Project { 
  id: string
  name: string
  description: string
  url: string
  image?: string
  tags?: string[]
  year?: string
  color?: string
}

export const projects: Project[] = [
  {
    id: "sustainabilityhub",
    name: "Sustainability Hub",
    description: "Platform promoting sustainability awareness",
    url: "https://sustainabilityhub.netlify.app",
    image: "/images/projects/Sustainability Hub.png",
    tags: ["Sustainability", "Awareness", "Education"],
    year: "2024 - Present",
    color: "emerald",
  },
  {
    id: "checkmatearena",
    name: "Checkmate Arena",
    description: "Chess match tracking and event management",
    url: "https://checkmatearena-nikm.onrender.com",
    image: "/images/projects/Checkmate Arena.png",
    tags: ["Chess", "Events", "Management"],
    year: "2024 - Present",
    color: "purple",
  },
  {
    id: "codecadence-v2",
    name: "Code Cadence (v2)",
    description: "Company site - redesigned version",
    url: "https://cadencev2.vercel.app",
    image: "/images/projects/Cadence V2.png",
    tags: ["Company", "Web", "Branding"],
    year: "2024 - Present",
    color: "blue",
  },
  {
    id: "codecadence-v1",
    name: "Code Cadence (v1)",
    description: "Company site - initial release",
    url: "https://codecadence.vercel.app",
    image: "/images/projects/Code Cadence V1.png",
    tags: ["Company", "Web", "Branding"],
    year: "2024 - Present",
    color: "cyan",
  },
  {
    id: "dailyscope",
    name: "DailyScope",
    description: "Aggregated world & sports news",
    url: "https://daily-scope-news.vercel.app",
    image: "/images/projects/Daily Scope.png",
    tags: ["News", "Aggregator", "Web"],
    year: "2024 - Present",
    color: "red",
  },
  {
    id: "resumecraft",
    name: "ResumeCraft",
    description: "AI resume builder with live preview",
    url: "https://craftresume.vercel.app",
    image: "/images/projects/resumecraft.png",
    tags: ["AI", "Career", "Tools"],
    year: "2024 - Present",
    color: "indigo",
  },
  {
    id: "acadience",
    name: "Acadience",
    description: "QR-based attendance with timestamp & report generation",
    url: "https://acadience.vercel.app",
    image: "/images/projects/Acadience.png",
    tags: ["Education", "QR", "Reports"],
    year: "2024 - Present",
    color: "sky",
  },
  {
    id: "codecomparator",
    name: "Code Comparator",
    description: "Code diff checker with AI suggestions",
    url: "https://codecomparator.vercel.app",
    image: "/images/projects/codecomparator.png",
    tags: ["AI", "Development", "Tools"],
    year: "2024 - Present",
    color: "violet",
  },
  {
    id: "updevted",
    name: "Updevted",
    description: "Dev upvote hub for projects & ideas",
    url: "https://updevted.onrender.com",
    image: "/images/projects/Updevted.png",
    tags: ["Web", "Community", "Development"],
    year: "2024 - Present",
    color: "blue",
  },
  {
    id: "sceneradar",
    name: "SceneRadar",
    description: "Movie discovery, ratings & news using TMDB",
    url: "https://sceneradar.onrender.com",
    image: "/images/projects/Scene Radar.png",
    tags: ["Web", "Movies", "API"],
    year: "2024 - Present",
    color: "orange",
  },
]
