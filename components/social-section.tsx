"use client"

import { useState } from "react"
import { Github, Linkedin, Dribbble, Twitter } from "lucide-react"

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Dribbble, label: "Dribbble", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

export function SocialSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-8">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  p-6 rounded-full bg-[#1B1C22] border-2 border-[#00F5A0]/20
                  transition-all duration-300
                  ${hoveredIndex === index ? "scale-110 border-[#00F5A0] shadow-[0_0_30px_rgba(0,245,160,0.4)]" : ""}
                `}
                aria-label={social.label}
              >
                <Icon
                  className={`
                  h-8 w-8 transition-colors duration-300
                  ${hoveredIndex === index ? "text-[#00F5A0]" : "text-[#9CA3AF]"}
                `}
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
