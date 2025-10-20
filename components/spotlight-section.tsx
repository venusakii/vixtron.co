import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SpotlightSection() {
  return (
    <section className="py-24 px-4 bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#00F5A0]/30 bg-gradient-to-r from-[#1B1C22] to-[#0D0E12]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F5A0]/5 to-[#00C3FF]/5" />

          <div className="relative grid md:grid-cols-2 gap-8 p-12">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-4 py-2 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] text-sm font-semibold mb-6 w-fit">
                Featured Work
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5] font-[family-name:var(--font-poppins)]">
                Vortex Dashboard
              </h2>

              <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
                {
                  "A minimal dark-mode analytics interface with motion-driven UI. Built with React, Framer Motion, and cutting-edge design principles."
                }
              </p>

              <Button
                size="lg"
                className="bg-[#00F5A0] text-[#0D0E12] hover:bg-[#00C3FF] font-semibold w-fit hover-glow"
              >
                See Case Study <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#00F5A0]/20">
                <img src="/analytics-dashboard-dark-mode-modern.jpg" alt="Vortex Dashboard" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#00F5A0] to-transparent" />
      </div>
    </section>
  )
}
