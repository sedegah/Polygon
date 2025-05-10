"use client"

import { useEffect, useState } from "react"

interface ImageDirectoryProps {
  projectId: string
}

export function ImageDirectory({ projectId }: ImageDirectoryProps) {
  const [isImageAvailable, setIsImageAvailable] = useState(false)

  useEffect(() => {
    // Check if the image exists
    const img = new Image()
    img.src = `/images/projects/${projectId}.png`
    img.onload = () => setIsImageAvailable(true)
    img.onerror = () => setIsImageAvailable(false)
  }, [projectId])

  if (!isImageAvailable) {
    return (
      <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-300 mb-4">
        <p className="text-sm">
          <strong>Note:</strong> Screenshot for {projectId} is missing. Add an image at{" "}
          <code className="bg-gray-800 px-1 py-0.5 rounded">/public/images/projects/{projectId}.png</code>
        </p>
      </div>
    )
  }

  return null
}
