"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Aurora Interface",
    tagline: "Clean SaaS dashboard",
    image: "/modern-saas-dashboard-dark-theme.jpg",
  },
  {
    title: "SoundSync",
    tagline: "Web music visualizer",
    image: "/music-visualizer-neon-waves.jpg",
  },
  {
    title: "PixelMotion",
    tagline: "Interactive 3D concept",
    image: "/3d-abstract-geometric-shapes.jpg",
  },
  {
    title: "NeonFlow",
    tagline: "Creative portfolio site",
    image: "/creative-portfolio-neon-design.jpg",
  },
  {
    title: "DataViz Pro",
    tagline: "Analytics platform",
    image: "/data-visualization-charts-dark.jpg",
  },
  {
    title: "CloudSync",
    tagline: "File sharing app",
    image: "/cloud-storage-interface-modern.jpg",
  },
]

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#F5F5F5] font-[family-name:var(--font-poppins)]">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              <div
                className={`
                relative overflow-hidden rounded-xl border-2 border-[#1B1C22]
                transition-all duration-300
                ${hoveredIndex === index ? "scale-105 border-[#00F5A0] shadow-[0_0_40px_rgba(0,245,160,0.3)]" : ""}
              `}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-[3/2] object-cover"
                />

                <div
                  className={`
                  absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/80 to-transparent
                  flex flex-col justify-end p-6
                  transition-opacity duration-300
                  ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                `}
                >
                  <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2 font-[family-name:var(--font-poppins)]">
                    {project.title}
                  </h3>
                  <p className="text-[#9CA3AF] mb-4">{project.tagline}</p>
                  <div className="flex items-center gap-2 text-[#00F5A0] font-semibold">
                    View Project <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
