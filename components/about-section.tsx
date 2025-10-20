import { Rocket, Puzzle, Globe } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Rocket, label: "5+ Years of Experience" },
    { icon: Puzzle, label: "50+ Projects Completed" },
    { icon: Globe, label: "Based in Your City" },
  ]

  return (
    <section className="py-24 px-4 bg-[#0D0E12]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-[#00F5A0]/20 to-[#00C3FF]/20 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#00F5A0] to-[#00C3FF] opacity-50 blur-3xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-bold gradient-text font-[family-name:var(--font-poppins)]">V</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5] font-[family-name:var(--font-poppins)]">
              About Me
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
              {
                "I specialize in front-end development, UI/UX design, and digital storytelling. Focused on making every interaction feel alive."
              }
            </p>

            <div className="grid gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#1B1C22] border border-[#00F5A0]/20 hover-glow"
                  >
                    <div className="p-3 rounded-lg bg-[#00F5A0]/10">
                      <Icon className="h-6 w-6 text-[#00F5A0]" />
                    </div>
                    <span className="text-lg text-[#F5F5F5] font-semibold">{stat.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
