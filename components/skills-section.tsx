"use client"

import { useState } from "react"

const skills = [
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Figma", icon: "🎯" },
  { name: "TypeScript", icon: "📘" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "Git", icon: "🔧" },
]

export function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#F5F5F5] font-[family-name:var(--font-poppins)]">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div
                className={`
                p-8 rounded-xl bg-[#1B1C22] border-2 border-[#00F5A0]/20
                flex flex-col items-center justify-center gap-4
                transition-all duration-300 cursor-pointer
                ${hoveredIndex === index ? "scale-105 border-[#00F5A0] shadow-[0_0_30px_rgba(0,245,160,0.3)]" : ""}
              `}
              >
                <div
                  className={`
                  text-5xl transition-transform duration-300
                  ${hoveredIndex === index ? "rotate-12 scale-110" : ""}
                `}
                >
                  {skill.icon}
                </div>
                <span className="text-lg font-semibold text-[#F5F5F5]">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
