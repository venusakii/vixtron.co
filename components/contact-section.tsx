"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Rocket } from "lucide-react"

export function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null)

  return (
    <section className="py-24 px-4 bg-[#0D0E12]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F5F5F5] font-[family-name:var(--font-poppins)]">
            {"Let's Create Something Brilliant."}
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            {"Whether it's design, development, or creative consulting — I'm open for collaboration."}
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <Input
              placeholder="Name"
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={`
                bg-[#1B1C22] border-2 text-[#F5F5F5] placeholder:text-[#9CA3AF]
                transition-all duration-300
                ${focused === "name" ? "border-[#00F5A0] shadow-[0_0_20px_rgba(0,245,160,0.2)]" : "border-[#1B1C22]"}
              `}
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={`
                bg-[#1B1C22] border-2 text-[#F5F5F5] placeholder:text-[#9CA3AF]
                transition-all duration-300
                ${focused === "email" ? "border-[#00F5A0] shadow-[0_0_20px_rgba(0,245,160,0.2)]" : "border-[#1B1C22]"}
              `}
            />
          </div>

          <div>
            <Textarea
              placeholder="Message"
              rows={6}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`
                bg-[#1B1C22] border-2 text-[#F5F5F5] placeholder:text-[#9CA3AF]
                transition-all duration-300 resize-none
                ${focused === "message" ? "border-[#00F5A0] shadow-[0_0_20px_rgba(0,245,160,0.2)]" : "border-[#1B1C22]"}
              `}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#00F5A0] text-[#0D0E12] hover:bg-[#00C3FF] font-semibold text-lg hover-glow"
          >
            Send <Rocket className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </section>
  )
}
