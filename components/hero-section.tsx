"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 245, 160, 0.3)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-[family-name:var(--font-poppins)]">
            <span className="glow-text text-[#F5F5F5]">VIX</span>
            <span className="gradient-text">TRON</span>
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#F5F5F5] font-[family-name:var(--font-poppins)]">
          {"Hi, I'm Vix — a Creative Developer & Designer."}
        </h2>

        <p className="text-xl md:text-2xl text-[#9CA3AF] mb-12 leading-relaxed">
          I build interactive digital experiences with passion and precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#00F5A0] text-[#0D0E12] hover:bg-[#00C3FF] font-semibold text-lg px-8 py-6 hover-glow transition-all duration-300"
          >
            View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#00F5A0] text-[#00F5A0] hover:bg-[#00F5A0] hover:text-[#0D0E12] font-semibold text-lg px-8 py-6 transition-all duration-300 bg-transparent"
          >
            Contact Me <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
